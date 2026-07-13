"use client";

import Image from "next/image";
import Expertise from "../../../../public/images/create.svg";
import Researchers from "../../../../public/images/researchers-card.webp";
import Engagement from "../../../../public/images/engagement-card.webp";
import Impact from "../../../../public/images/impact-card.webp";
import styles from "./structured.module.css";

export default function Structured() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Structured from the <br /> start, so you can focus <br /> on what  matters.</h2>
            <div className={styles.steps}>
                <div className={styles.stepGroup}>
                    <div className={`${styles.step} ${styles.stepOne}`}>
                        <div className={styles.stepTop}>
                            <span className={styles.stepNumber}>1</span>
                            <h3 className={styles.stepTitle}>
                            Create your mentor profile with your expertise, <br /> availability, and areas of focus.</h3>
                        </div>
                        <Image src={Expertise} alt="Expertise" width={500} height={370} className={styles.stepImage} />
                    </div>
                    <div className={`${styles.step} ${styles.stepTwo}`}>
                        <div className={styles.stepTop}>
                            <span className={styles.stepNumber}>2</span>
                            <h3 className={styles.stepTitle}>
                            Get matched with researchers whose work <br /> aligns with your background.</h3>
                        </div>
                        <Image src={Researchers} alt="Researchers" width={500} height={330} className={styles.stepImage} />
                    </div>
                </div>
                <div className={styles.stepGroup}>
                    <div className={`${styles.step} ${styles.stepThree}`}>
                        <div className={styles.stepTop}>
                            <span className={styles.stepNumber}>3</span>
                            <h3 className={styles.stepTitle}>
                            Guide researchers through structured,<br /> milestone-based engagements.</h3>
                        </div>
                        <Image src={Engagement} alt="Engagement" width={500} height={370} className={styles.stepImage} />
                    </div>
                    <div className={`${styles.step} ${styles.stepFour}`}>
                        <div className={styles.stepTop}>
                            <span className={styles.stepNumber}>4</span>
                            <h3 className={styles.stepTitle}>
                            Track your contributions and see the impact<br /> of your mentorship over time</h3>
                        </div>
                        <Image src={Impact} alt="Impact" width={500} height={370} className={styles.stepImage} />
                    </div>
                </div>
            </div>
        </section>
    );
}