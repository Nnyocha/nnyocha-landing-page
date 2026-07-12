"use client";

import Image from "next/image";
import Experience from "../../../../public/images/experienced.svg";
import University from "../../../../public/images/university.svg";
import Scientists from "../../../../public/images/scientists.svg";
import Entreprenuers from "../../../../public/images/entrepreneurs.svg";
import styles from "./mentor.module.css";

export default function Mentor () {
    return(
        <section className={styles.section}>
            <h2 className={styles.title}>Who can mentor</h2>
            <div className={styles.images}>
                <Image src={Experience} alt="experience" width={200} height={400} className={styles.image} />
                <Image src={University} alt="experience" width={200} height={400} className={styles.image} />
                <Image src={Scientists} alt="experience" width={200} height={400} className={styles.image} />
                <Image src={Entreprenuers} alt="experience" width={200} height={400} className={styles.image} />
            </div>
        </section>
    )
}