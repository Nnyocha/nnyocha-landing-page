"use client";

import Image from "next/image";
import Geography from "../../../../public/images/geography.svg";
import Vetted from "../../../../public/images/vetted.webp";
import Optimization from "../../../../public/images/optimization.webp";
import Neuroplasticity from "../../../../public/images/neuroplasticity.webp";
import styles from "./steps.module.css";

export default function Steps() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Steps to funding <br /> your first research</h2>
            <div className={styles.steps}>
                <div className={styles.stepGroup}>
                    <div className={`${styles.step} ${styles.stepOne}`}>
                        <div className={styles.stepTop}>
                            <span className={styles.stepNumber}>1</span>
                            <h3 className={styles.stepTitle}>
                            Tell us your mandate. <br />Geography, theme, stage, and ticket size.</h3>
                        </div>
                        <Image src={Geography} alt="Geography" width={500} height={400} className={`${styles.stepImage} ${styles.marginTop}`} />
                    </div>
                    <div className={`${styles.step} ${styles.stepTwo}`}>
                        <div className={styles.stepTop}>
                            <span className={styles.stepNumber}>2</span>
                            <h3 className={styles.stepTitle}>
                            Receive a curated pipeline of pre-vetted <br /> research opportunities.</h3>
                        </div>
                        <Image src={Vetted} alt="Vetted" width={500} height={375} className={styles.stepImage} />
                    </div>
                </div>
                <div className={styles.stepGroup}>
                    <div className={`${styles.step} ${styles.stepThree}`}>
                        <div className={styles.stepTop}>
                            <span className={styles.stepNumber}>3</span>
                            <h3 className={styles.stepTitle}>
                            Review, ask questions, and select the projects <br /> that fit.</h3>
                        </div>
                        <Image src={Optimization} alt="Optimization" width={500} height={375} className={styles.stepImage} />
                    </div>
                    <div className={`${styles.step} ${styles.stepFour}`}>
                        <div className={styles.stepTop}>
                            <span className={styles.stepNumber}>4</span>
                            <h3 className={styles.stepTitle}>
                            Release funds and track milestones through <br /> your dashboard.</h3>
                        </div>
                        <Image src={Neuroplasticity} alt="Neuroplasticity" width={500} height={375} className={styles.stepImage} />
                    </div>
                </div>
            </div>
        </section>
    );
}