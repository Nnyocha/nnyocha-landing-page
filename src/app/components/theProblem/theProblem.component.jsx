"use client";


import styles from "./theProblem.module.css";

export default function TheProblem() {

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Research and <br /> funding rarely meet</h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Funding & support <br /> are difficult to <br /> access</h3>
          <p className={styles.cardContent}>Researchers spend too much <br /> 
          time searching for funding, <br /> while funders struggle to <br /> 
          identify credible research. </p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Credible projects <br /> are hard to source</h3>
          <p className={styles.cardContent}>There is no single place to <br />
          find, evaluate, and compare <br />credible research opportunities.</p>
        </div>
      </div>
    </section>
  );
}