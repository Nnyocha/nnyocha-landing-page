'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './foundersletter.module.css';

export default function FoundersLetter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.backgroundText}>Founder&apos;s Letter</div>
        
        <h2 className={styles.heading}>
          We built Nnyocha out <br />
          of a simple frustration:
        </h2>

        <div className={`${styles.letterContent} ${isVisible ? styles.visible : ''}`}>
          <p>
            Exceptional African researchers with real solutions were being overlooked, not because they lacked merit, but because the funding pathways were slow, fragmented, and unclear.
          </p>
          <p>
            Nnyocha exists to fix that gap. We are building the deal flow engine for African research, helping funders discover and support high-potential work earlier, with more trust and confidence, so strong ideas are not missed.
          </p>
        </div>
      </div>
    </section>
  );
}