"use client";


import styles from "./theProblem.module.css";

export default function TheProblem() {

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Research and <br /> funding rarely meet</h2>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.cardLeft}`}>
          <h3 className={styles.cardTitle}>Funding & support <br /> are difficult to <br /> access</h3>
          <p className={styles.cardContent}>Researchers spend too much <br /> 
          time searching for funding, <br /> while funders struggle to <br /> 
          identify credible research. </p>
        </div>
        <div className={`${styles.card} ${styles.cardRight}`}>
          <h3 className={styles.cardTitle}>Credible projects <br /> are hard to source</h3>
          <p className={styles.cardContent}>There is no single place to <br />
          find, evaluate, and compare <br />credible research opportunities.</p>
        </div>
      </div>
      {/* <div className={styles.gapIndicator}>
        <svg
          className={styles.gapArrow}
          width="16"
          height="28"
          viewBox="0 0 16 28"
          fill="none"
        >
          <path d="M8 27V2" stroke="#8a4513" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M2 9 8 2l6 7"
            stroke="#8a4513"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className={styles.gapLabel}>The gap</span>
      </div> */}
    </section>
  );
}