"use client"

import Link from "next/link";
import styles from "./credibleResearch.module.css";

export default function CredibleResearch() {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Find credible research. <br /> Fund with confidence.</h1>
            <p>We help funders discover credible research, make informed funding decisions, <br /> 
            and track the impact of every investment.</p>
            <Link 
                href="https://cal.com/nnyocha/introductory-call"
                target="_blank"
                rel="noreferrer noopener"
            >
            <button className={styles.registerBtn}>
                Book a call
            </button>
            </Link>
        </section>
    )
}