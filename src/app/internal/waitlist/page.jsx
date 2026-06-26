'use client';

import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/navbar.component';
import { db } from '../../../../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import styles from './page.module.css';

export default function WaitlistPage() {
  const [waitlistData, setWaitlistData] = useState({
    funders: [],
    researchers: [],
    mentors: []
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    fetchWaitlistData();
  }, []);

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
        funders: allData.filter(item => item.role === 'funder'),
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

  const getFilteredData = () => {
    if (activeTab === 'all') {
      return [...waitlistData.funders, ...waitlistData.researchers, ...waitlistData.mentors];
    }
    return waitlistData[activeTab] || [];
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'funder': return '#e76f00';
      case 'researcher': return '#7FB439';
      case 'mentor': return '#452C15';
      default: return '#6b7280';
    }
  };

  const getRoleCount = (role) => {
    if (role === 'all') {
      return waitlistData.funders.length + waitlistData.researchers.length + waitlistData.mentors.length;
    }
    return waitlistData[role]?.length || 0;
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
          <span className={styles.statNumber}>{getRoleCount('funders')}</span>
          <span className={styles.statLabel}>Funders</span>
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
          className={`${styles.tab} ${activeTab === 'funders' ? styles.tabActive : ''}`}
          onClick={() => setActiveTab('funders')}
        >
          Funders ({getRoleCount('funders')})
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