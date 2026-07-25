'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar.component';
import { db } from '../../../../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import * as XLSX from 'xlsx';
import styles from './page.module.css';

export default function WaitlistPage() {
  const [waitlistData, setWaitlistData] = useState({
    researchers: [],
    mentors: []
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
  const fetchWaitlistData = async () => {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, 'waitlist'), orderBy('submittedAt', 'desc'))
      );
      
      const allData = [];
      querySnapshot.forEach((doc) => {
        allData.push({ id: doc.id, ...doc.data() });
      });

      const grouped = {
        researchers: allData.filter(item => item.role === 'researcher'),
        mentors: allData.filter(item => item.role === 'mentor')
      };

      setWaitlistData(grouped);
    } catch (error) {
      console.error('Error fetching waitlist data:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchWaitlistData();
}, []);

  const getFilteredData = () => {
    if (activeTab === 'all') {
      return [...waitlistData.researchers, ...waitlistData.mentors];
    }
    return waitlistData[activeTab] || [];
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'researcher': return '#7FB439';
      case 'mentor': return '#452C15';
      default: return '#6b7280';
    }
  };

  const getRoleCount = (role) => {
    if (role === 'all') {
      return waitlistData.researchers.length + waitlistData.mentors.length;
    }
    return waitlistData[role]?.length || 0;
  };

  const exportToExcel = () => {
    const data = getFilteredData();
    
    if (data.length === 0) {
      alert('No data to export');
      return;
    }

    const excelData = data.map((item, index) => ({
      '#': index + 1,
      'Role': item.role.charAt(0).toUpperCase() + item.role.slice(1),
      'First Name': item.firstName,
      'Last Name': item.lastName,
      'Email': item.email,
      'Organization': item.organization || '-',
      'Interest': item.interest,
      'Submitted': new Date(item.submittedAt).toLocaleDateString(),
      'Status': item.status || 'pending'
    }));

    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Waitlist');

    const colWidths = [
      { wch: 5 },
      { wch: 12 },
      { wch: 15 },
      { wch: 15 },
      { wch: 25 },
      { wch: 20 },
      { wch: 40 },
      { wch: 15 },
      { wch: 12 }
    ];
    ws['!cols'] = colWidths;

    const date = new Date();
    const dateStr = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const fileName = `waitlist_${activeTab}_${dateStr}.xlsx`;

    XLSX.writeFile(wb, fileName);
  };

  if (loading) {
    return <div className={styles.loading}>Loading waitlist data...</div>;
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <h1 className={styles.title}>Waitlist Submissions</h1>
      
      <div className={styles.stats}>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{getRoleCount('all')}</span>
          <span className={styles.statLabel}>Total Submissions</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{getRoleCount('researchers')}</span>
          <span className={styles.statLabel}>Researchers</span>
        </div>
        <div className={styles.statCard}>
          <span className={styles.statNumber}>{getRoleCount('mentors')}</span>
          <span className={styles.statLabel}>Mentors</span>
        </div>
      </div>

      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'all' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All ({getRoleCount('all')})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'researchers' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('researchers')}
        >
          Researchers ({getRoleCount('researchers')})
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'mentors' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('mentors')}
        >
          Mentors ({getRoleCount('mentors')})
        </button>
      </div>

      <div className={styles.tableHeader}>
        <div className={styles.tableTitle}>
          <span>Showing {getFilteredData().length} entries</span>
        </div>
        <button 
          className={styles.exportBtn}
          onClick={exportToExcel}
          disabled={getFilteredData().length === 0}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Export to Excel
        </button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Role</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Organization</th>
              <th>Interest</th>
              <th>Submitted</th>
            </tr>
          </thead>
          <tbody>
            {getFilteredData().length === 0 ? (
              <tr>
                <td colSpan="8" className={styles.emptyState}>No submissions found</td>
              </tr>
            ) : (
              getFilteredData().map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <span 
                      className={styles.roleBadge}
                      style={{ backgroundColor: getRoleBadgeColor(item.role) }}
                    >
                      {item.role}
                    </span>
                  </td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>
                  <td>{item.organization || '-'}</td>
                  <td className={styles.interestCell}>{item.interest}</td>
                  <td>{new Date(item.submittedAt).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}