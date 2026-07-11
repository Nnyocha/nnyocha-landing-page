"use client";

import Image from "next/image";
import Visibility from "../../../../public/images/visibility.svg";
import Credibility from "../../../../public/images/credibility.svg";
import Collaborators from "../../../../public/images/collaborators.svg";
import Progress from "../../../../public/images/progress.svg";
import styles from "./whyResearchers.module.css";

export default function WhyResearchers () {
    return(
        <section className={styles.section}>
            <h2 className={styles.title}>Why Researchers <br /> Choose NNYOCHA</h2>
            <div className={styles.cardGroup}>
                <div className={styles.card}>
                    <div className={styles.cardTop}>
                        <h3 className={styles.cardTitle}>Quick visibility</h3>
                        <p>Your research profile is seen by funders looking for exactly what you do</p>
                    </div>
                    <Image src={Visibility} alt="visibility" width={650} height={500} className={styles.cardImage} />
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTop}>
                        <h3 className={styles.cardTitle}>Build credibility</h3>
                        <p>A verified Nnyocha profile signals quality to every partner you meet.</p>
                    </div>
                    <Image src={Credibility} alt="credibility" width={650} height={500} className={styles.cardImage} />
                </div>
            </div>
            <div className={styles.cardGroup}>
                <div className={styles.card}>
                    <div className={styles.cardTop}>
                        <h3 className={styles.cardTitle}>Find collaborators</h3>
                        <p>Connect with researchers, mentors, and institutions across the continent.</p>
                    </div>
                    <Image src={Collaborators} alt="collaborators" width={650} height={500} className={styles.cardImage} />
                </div>
                <div className={styles.card}>
                    <div className={styles.cardTop}>
                        <h3 className={styles.cardTitle}>Track your progress</h3>
                        <p>One dashboard for your projects, milestones, and impact data.</p>
                    </div>
                    <Image src={Progress} alt="progress" width={650} height={500} className={styles.cardImage} />
                </div>
            </div>
        </section>
    )
}