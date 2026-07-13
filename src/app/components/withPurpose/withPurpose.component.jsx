"use client"

import Image from "next/image";
import Impact from "../../../../public/images/multiply.webp";
import Expertise from "../../../../public/images/expertise.svg";
import Legacy from "../../../../public/images/legacy.webp";
import Network from "../../../../public/images/expand.svg";
import styles from './withPurpose.module.css';

export default function WithPurpose () {
    return(
        <section className={styles.section}>
            <h2 className={styles.title}>Mentor with purpose. <br /> Leave a lasting mark</h2>
            <div className={styles.flex}>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Multiply your impact</h3>
                    <p className={styles.cardText}>Your researchers shape their fields <br /> and communities.</p>
                    <Image src={Impact} alt="Impact" width={320} height={400} className={styles.cardImage} />
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Share your expertise</h3>
                    <p className={styles.cardText}>Structured engagements that <br /> respect your time and experience.</p>
                    <Image src={Expertise} alt="Expertise" width={320} height={400} className={styles.cardImage} />
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Leave a lasting legacy</h3>
                    <p className={styles.cardText}>A portfolio of mentored researchers <br /> that grows over time.</p>
                    <Image src={Legacy} alt="Legacy" width={320} height={400} className={styles.cardImage} />
                </div>
                <div className={styles.card}>
                    <h3 className={styles.cardTitle}>Expand your network</h3>
                    <p className={styles.cardText}>Connect with funders, institutions, <br /> and peers across the continent.</p>
                    <Image src={Network} alt="Network" width={320} height={400} className={styles.cardImage} />
                </div>
            </div>
        </section>
    )
}