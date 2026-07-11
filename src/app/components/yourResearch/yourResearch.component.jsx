"use client"

import styles from "./yourResearch.module.css";

export default function YourResearch() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Your research deserves<br /> to be seen and funded.</h2>
            <p>Nnyocha helps African researchers access funding, mentorship, and <br /> 
               the visibility needed to take their work from idea to impact.</p>
            <button className={styles.researcherBtn}>Join as a Researcher</button>
        </section>
    )
}