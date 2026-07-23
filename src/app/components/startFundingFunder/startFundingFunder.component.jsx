'use client';

import Link from "next/link";
import styles from './startFundingFunder.module.css';

export default function startFunding() {

  return (
    <section className={styles.hero} id="book-a-call">
      <div className={styles.heroLeft}>
        <div className={styles.overlay} />

        <div className={styles.heroContent}>
            <h1>Start funding Africa&apos;s next <br /> research breakthrough.</h1>

            <p>
                Join institutions already using Nnyocha to discover credible <br /> 
                research and deploy capital with confidence.
            </p>
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
    </section>
  );
}