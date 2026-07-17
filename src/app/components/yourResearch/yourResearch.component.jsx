"use client"

import Link from "next/link";
import styles from "./yourResearch.module.css";

export default function YourResearch() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Your research deserves<br /> to be seen and funded.</h2>
            <p>Nnyocha helps African researchers access funding, mentorship, and <br /> 
               the visibility needed to take their work from idea to impact.</p>
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLScqs9HTp6U3K5toyWSKkuTiFiW-AdSx49wuplfYiHiToySm8A/viewform?pli=1"
              target="_blank"
              rel="noreferrer noopener"
            >
            <button className={styles.researcherBtn}>Join as a Researcher</button>
            </Link>
        </section>
    )
}