"use client";

import styles from "./researchBreakthroughs.module.css";

export default function ResearchBreakthroughs () {
    return(
        <section className={styles.section}>
            <h1 className={styles.title}>Help Shape Africa's Next <br /> Research Breakthroughs </h1>
            <p>Join a community of experienced researchers, industry <br /> practitioners, and innovation leaders</p>
            <button className={styles.mentorBtn}>Become a Mentor</button>
        </section>
    )
}