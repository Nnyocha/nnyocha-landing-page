"use client";

import Image from "next/image";
import Matched from "../../../../public/images/matched.svg";
import RealVisibility from "../../../../public/images/real-visibility.svg";
import Mentorship from "../../../../public/images/mentorship.svg";
import Connections from "../../../../public/images/connections.svg";
import Structured from "../../../../public/images/path.svg";
import Community from "../../../../public/images/community.svg";
import styles from "./solved.module.css";

const cards = [
  {
    key: "matched-funding",
    title: "Matched funding",
    text: "Opportunities matched to your research area and stage",
    icon: Matched,
  },
  {
    key: "real-visibility",
    title: "Real visibility",
    text: "Seen by funders who are actively looking for work like yours.",
    icon: RealVisibility,
  },
  {
    key: "mentorship",
    title: "Mentorship",
    text: "From experienced researchers and industry practitioners.",
    icon: Mentorship
  },
  {
    key: "connections",
    title: "Connections",
    text: "To institutions, collaborators, and partners.",
    icon: Connections,
  },
  {
    key: "structured-path",
    title: "Structured path",
    text: "For career development within the research ecosystem.",
    icon: Structured,
  },
  {
    key: "communnity",
    title: "Community",
    text: "Aggregated impact data across your funded research",
    icon: Community,
  },
];

export default function Solved () {

    return(
        <section className={styles.section}>
            <h2 className={styles.title}>
                Everything You Need to Move <br /> Your Research Forward
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
            <button className={styles.researcherBtn}>Join as a Researcher</button>
        </section>
    )
}