"use client"

import styles from './whyNnyocha.module.css';

export default function WhyNnyocha () {
    return (
        <section className={styles.section}>
            <div className={styles.upper}>
                <sub className={styles.sub}>Why Nnyocha Exists</sub>
                <p className={styles.text}>Across Africa, exceptional research is being done every day. Too  <br />
                much of it remains  disconnected from the funding, mentorship, <br /> 
                and partnerships it needs to create lasting impact.  Researchers <br /> 
                struggle to gain visibility. Funders struggle to find credible <br /> opportunities. <br />
                Nnyocha  was built to close that gap, not with a directory or a <br />
                forum, but with real infrastructure.</p>
            </div>
            <hr className={styles.hr} />
            <div className={styles.lower}>
                <div className={styles.mission}>
                    <sub className={styles.sub}>Mission</sub>
                    <p>To build the trusted infrastructure <br />connecting African  research with <br /> the capital, mentorship, and <br /> partnerships it needs to create <br /> lasting impact</p>
                </div>
                <hr className={styles.hr} />
                <div className={styles.vision}>
                    <sub className={styles.sub}>Vision</sub>
                    <p>A future where every high- <br />potential African  researcher has <br /> what they need to solve the <br />  challenges that matter most.</p>
                </div>
            </div>
        </section>
    )
}