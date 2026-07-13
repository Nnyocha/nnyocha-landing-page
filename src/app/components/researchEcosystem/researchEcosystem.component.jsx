"use client";

import Image from "next/image";
import Funders from "../../../../public/images/funder.svg";
import Researchers from "../../../../public/images/researcher.svg";
import Mentors from "../../../../public/images/mentor.svg";
import styles from "./researchEcosystem.module.css";

const cards = [
  {
    key: "funders",
    title: "Funders",
    text: "To discover and deploy into vetted opportunities",
    icon: Funders,
  },
  {
    key: "researchers",
    title: "Researchers",
    text: "To access funding, mentorship, and visibility",
    icon: Researchers,
  },
  {
    key: "mentors",
    title: "Mentors",
    text: "To guide emerging talent with structure and purpose",
    icon: Mentors
  },
];

export default function ResearchEcosystem () {

    return(
        <section className={styles.section}>
            <h2 className={styles.title}>
                Built for the entire <br /> research ecosystem
            </h2>
            <div className={styles.grid}>
                {cards.map((card) => (
                <div className={styles.card} key={card.key}>
                    <Image src={card.icon} alt={card.title} className={styles.cardIcon} />
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardText}>{card.text}</p>
                </div>
                ))}
            </div>
        </section>
    )
}