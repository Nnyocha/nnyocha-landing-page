"use client";

import styles from "./fundingResearch.module.css";

export default function FundingResearch() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>We connect research <br /> with funding & support</h2>
      <p>NNYOCHA is Africa's trusted research infrastructure, connecting researchers, funders, mentors, <br />
        and institutions to accelerate discovery, funding, commercialization, and measurable impact.</p>
      <button 
        href="#waiting-list" 
        className={styles.registerBtn}
        onClick={(e) => handleTabClick(e, 'Funder')}
      >
        Book a call
      </button>
    </section>
  );
}