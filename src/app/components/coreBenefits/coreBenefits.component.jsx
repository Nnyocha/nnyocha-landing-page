"use client";

import Image from "next/image";
import Discover from "../../../../public/images/discover.svg";
import Confidence from "../../../../public/images/confidence.svg";
import Impact from "../../../../public/images/impact.svg";
import styles from "./coreBenefits.module.css";

export default function Core() {
  return (
    <section className={styles.section}>
        <h2 className={styles.title}>Nnyocha is the best fit<br /> for every funder</h2>
        <p className={styles.text}>A premium funder-matching platform built for clarity, confidence, and measurable impact.</p>
        <div className={styles.flex}>
            <div className={styles.card}>
                <Image src={Discover} alt="Discover" className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Discover Credible Research</h3>
                <p className={styles.cardText}>Access high-potential research that aligns with <br /> your funding priorities, all in one place.</p>
            </div>
            <div className={styles.card}>
                <Image src={Confidence} alt="Confidence" className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Fund With Confidence</h3>
                <p className={styles.cardText}>Make informed funding decisions with trusted <br /> evaluations  and project insights.</p>
            </div>
            <div className={styles.card}>
                <Image src={Impact} alt="Impact" className={styles.cardIcon} />
                <h3 className={styles.cardTitle}>Measure Real Impact</h3>
                <p className={styles.cardText}>Track progress and outcomes to understand the <br /> value your funding creates.</p>
            </div>
        </div>
    </section>
  );
}