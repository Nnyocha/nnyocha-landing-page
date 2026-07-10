'use client';

import { useState, useEffect } from 'react';
import { db } from '../../../../firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import Swal from 'sweetalert2';
import styles from './startFunding.module.css';

const roles = ['Funder', 'Researcher', 'Mentor'];

export default function startFunding() {
  const [role, setRole] = useState('Funder');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    interest: ''
  });
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const savedRole = sessionStorage.getItem('selectedRole');
    if (savedRole && roles.includes(savedRole)) {
      setRole(savedRole);
      sessionStorage.removeItem('selectedRole');
    }

    const handleRoleChange = (event) => {
      const newRole = event.detail;
      if (roles.includes(newRole)) {
        setRole(newRole);
      }
    };

    window.addEventListener('roleChange', handleRoleChange);
    return () => {
      window.removeEventListener('roleChange', handleRoleChange);
    };
  }, []);

  useEffect(() => {
    const { firstName, lastName, email, interest } = formData;
    const filled = firstName.trim() !== '' && 
                   lastName.trim() !== '' && 
                   email.trim() !== '' && 
                   interest.trim() !== '';
    setIsFormFilled(filled);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormFilled) {
      return;
    }

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData = {
        firstName: formData.firstName.trim(),
        lastName: formData.lastName.trim(),
        email: formData.email.trim(),
        organization: formData.organization.trim() || '',
        interest: formData.interest.trim(),
        role: role.toLowerCase(),
        submittedAt: new Date().toISOString(),
        status: 'pending',
        createdAt: new Date()
      };

      const docRef = await addDoc(collection(db, 'waitlist'), submissionData);
      console.log("✅ Document written with ID:", docRef.id);

      Swal.fire({
        icon: 'success',
        title: 'Successfully Submitted!',
        text: `You've joined as a ${role}.`,
        confirmButtonColor: '#e76f00',
        timer: 2500,
        timerProgressBar: true,
      });

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        interest: ''
      });

    } catch (error) {
      console.error('🔥 Firestore Error Details:', {
        message: error.message,
        code: error.code,
        stack: error.stack,
        name: error.name
      });

      let errorMessage = 'Something went wrong. Please try again.';
      if (error.code === 'permission-denied') {
        errorMessage = 'Permission denied. Please check your Firestore security rules.';
      } else if (error.code === 'unauthenticated') {
        errorMessage = 'Authentication failed. Please check your Firebase configuration.';
      } else if (error.code === 'not-found') {
        errorMessage = 'Firestore collection not found. Please check your database setup.';
      }

      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: errorMessage,
        confirmButtonColor: '#e76f00',
      });

    } finally {
      setIsSubmitting(false);
    }
  };

  const getButtonColor = () => {
    if (!isFormFilled) {
      return '#d1d5db';
    }
    switch (role) {
      case 'Funder':
        return '#e76f00';
      case 'Researcher':
        return '#7FB439';
      case 'Mentor':
        return '#452C15';
      default:
        return '#e76f00';
    }
  };

  const getButtonText = () => {
    if (isSubmitting) return 'Submitting...';
    return 'Discover Vetted Research';
  };

  const handleSpeakToFounder = () => {
    window.open('https://mail.google.com/mail/?view=cm&to=founders@nnyocha.com', '_blank');
  };

  return (
    <section className={styles.hero} id="waiting-list">
      <div className={styles.heroLeft}>
        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <h1>Start funding Africa's next <br /> research breakthrough.</h1>

          <p>
            Join institutions already using Nnyocha to discover credible <br /> 
            research and deploy capital with confidence.
          </p>

          <div className={styles.buttonGroup}>
            <button 
              className={styles.waitlistBtn}
            >
              Join Waitlist
            </button>
            <button 
              href="#waiting-list" 
              className={styles.registerBtn}
            >
              Book a call
            </button>
          </div>
        </div>
      </div>

      {/* <div className={styles.heroRight}>
        <div className={styles.form}>
          <h3>Join the waiting list as a</h3>

          <div className={styles.toggle} role="tablist">
            {roles.map((item) => (
              <button
                key={item}
                role="tab"
                aria-selected={role === item}
                className={`${styles.toggleBtn} ${
                  role === item ? styles.active : ''
                }`}
                onClick={() => setRole(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <form className={styles.formFields} onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={formData.lastName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="organization"
              placeholder="Organization"
              value={formData.organization}
              onChange={handleInputChange}
            />

            <textarea
              name="interest"
              placeholder="Tell us about your interest"
              required
              value={formData.interest}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={!isFormFilled || isSubmitting}
              style={{ backgroundColor: getButtonColor() }}
            >
              {getButtonText()}
            </button>
          </form>
        </div>
      </div> */}
    </section>
  );
}