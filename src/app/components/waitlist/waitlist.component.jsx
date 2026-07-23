'use client';

import { useState, useEffect } from 'react';
import { db } from '../../../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import styles from './waitlist.module.css';

export default function Waitlist() {
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
        submittedAt: new Date().toISOString(),
        status: 'pending',
        createdAt: new Date()
      };

      const docRef = await addDoc(collection(db, 'waitlist'), submissionData);
      console.log("✅ Document written with ID:", docRef.id);

      Swal.fire({
        icon: 'success',
        title: 'Successfully Submitted!',
        text: `You've joined as a researcher.`,
        confirmButtonColor: '#7fb439',
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
        confirmButtonColor: '#7fb439',
      });

    } finally {
      setIsSubmitting(false);
    }
  };


  const getButtonText = () => {
    if (isSubmitting) return 'Submitting...';
    return 'Join as a Researcher';
  };

  return (
    <section className={styles.hero} id="waitlist">
      <div className={styles.heroLeft}>
        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <h2>Your Research <br /> Has the Potential. <br /> Let's Help It Reach <br />the Right People.</h2>
        </div>
      </div>

      <div className={styles.heroRight}>
        <div className={styles.form}>
          <h3>Join the waitlist</h3>

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
            >
              {getButtonText()}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}