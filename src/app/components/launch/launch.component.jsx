"use client";

import styles from "./launch.module.css";

export default function Launch() {


  return (
    <section className={styles.section}>
      <p className={styles.title}>We are launching with</p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p className={styles.number}>30</p>
          <p className={styles.details}>African countries</p>
        </div>
        <div className={styles.card}>
          <p className={styles.number}>54</p>
          <p className={styles.details}>Universities</p>
        </div>
        <div className={styles.card}>
          <p className={styles.number}>10</p>
          <p className={styles.details}>Research sectors</p>
        </div>
        <div className={styles.card}>
          <p className={styles.number}>300</p>
          <p className={styles.details}>Researchers</p>
        </div>
        <div className={styles.card}>
          <p className={styles.number}>20</p>
          <p className={styles.details}>Innovation hubs</p>
        </div>
        <div className={styles.card}>
          <p className={styles.number}>5</p>
          <p className={styles.details}>Government agencies</p>
        </div>
        <div className={styles.card}>
          <p className={styles.number}>5</p>
          <p className={styles.details}>Development partners</p>
        </div>
      </div>
    </section>
  );
}