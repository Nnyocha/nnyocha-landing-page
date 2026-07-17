"use client";

import Link from "next/link";
import styles from "./researchBreakthroughs.module.css";

export default function ResearchBreakthroughs () {
    return(
        <section className={styles.section}>
            <h1 className={styles.title}>Help Shape Africa's Next <br /> Research Breakthroughs </h1>
            <p>Join a community of experienced researchers, industry <br /> practitioners, and innovation leaders</p>
            <Link 
              href="https://docs.google.com/forms/d/e/1FAIpQLScqs9HTp6U3K5toyWSKkuTiFiW-AdSx49wuplfYiHiToySm8A/viewform?pli=1"
              target="_blank"
              rel="noreferrer noopener"
            >
            <button className={styles.mentorBtn}>Become a Mentor</button>
            </Link>
        </section>
    )
}