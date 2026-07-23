'use client';

import Link from "next/link";
import styles from './startFunding.module.css';

export default function startFunding() {

  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <h1>Start funding Africa&apos;s next <br /> research breakthrough.</h1>

          <p>
            Join institutions already using Nnyocha to discover credible <br /> 
            research and deploy capital with confidence.
          </p>
        </div>
      </div>
    </section>
  );
}