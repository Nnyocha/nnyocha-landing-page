'use client';
import { useEffect, useRef } from 'react';
import styles from './foundersletter.module.css';

export default function FoundersLetter() {
  const sectionRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const body = bodyRef.current;

    const handleScroll = () => {
      const { top, height } = section.getBoundingClientRect();
      const scrolled = -top; 
      const total = height - window.innerHeight;
      const progress = Math.min(Math.max(scrolled / total, 0), 1);

      body.style.transform = `translateY(${120 - progress * 120}px)`;
      body.style.opacity = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.sticky}>

        <h2 className={styles.heading}>
          We built Nnyocha out<br />
          of a simple frustration:
        </h2>

        <p className={styles.body} ref={bodyRef}>
          Exceptional African researchers with real solutions were being
          overlooked — not because they lacked merit, but because the funding
          pathways were slow, fragmented, and unclear. Nnyocha exists to fix
          that gap. We are building the deal flow engine for African research,
          helping funders discover and support high-potential work earlier,
          with more trust and confidence, so strong ideas are not missed.
        </p>
      </div>
    </section>
  );
}