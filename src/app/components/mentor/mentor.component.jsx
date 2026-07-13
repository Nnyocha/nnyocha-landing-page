"use client";

import Image from "next/image";
import Experience from "../../../../public/images/experienced.webp";
import University from "../../../../public/images/university.webp";
import Scientists from "../../../../public/images/scientists.webp";
import Entreprenuers from "../../../../public/images/entrepreneurs.webp";
import styles from "./mentor.module.css";

export default function Mentor () {
    return(
        <section className={styles.section}>
            <h2 className={styles.title}>Who can mentor</h2>
            <div className={styles.images}>
                <Image src={Experience} alt="experience" width={200} height={300} className={styles.image} />
                <Image src={University} alt="experience" width={200} height={300} className={styles.image} />
                <Image src={Scientists} alt="experience" width={200} height={300} className={styles.image} />
                <Image src={Entreprenuers} alt="experience" width={200} height={300} className={styles.image} />
            </div>
        </section>
    )
}