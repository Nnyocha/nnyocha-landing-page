'use client';

import Link from "next/link";
import styles from './startFunding.module.css';

export default function startFunding() {

  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <div className={styles.overlay} />

        <div className={styles.heroContent}>
          <h1>Start funding Africa's next <br /> research breakthrough.</h1>

          <p>
            Join institutions already using Nnyocha to discover credible <br /> 
            research and deploy capital with confidence.
          </p>

          <div className={styles.buttonGroup}>
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLScqs9HTp6U3K5toyWSKkuTiFiW-AdSx49wuplfYiHiToySm8A/viewform?pli=1"
              target="_blank"
              rel="noreferrer noopener"
            >
            <button className={styles.waitlistBtn}>
              Join Waitlist
            </button>
            </Link>
            <Link 
              href="https://cal.com/nnyocha/introductory-call"
              target="_blank"
              rel="noreferrer noopener"
            >
            <button className={styles.registerBtn}>
              Book a call
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}