"use client";

import Image from "next/image";
import DueDilligence from "../../../../public/images/due-diligence.svg";
import Verification from "../../../../public/images/verification.svg";
import Matching from "../../../../public/images/matching.svg";
import Escrow from "../../../../public/images/disbursement.svg";
import Reporting from "../../../../public/images/reporting.svg";
import Portfolio from "../../../../public/images/insights.svg";
import Compliance from "../../../../public/images/compliance.svg";
import IP from "../../../../public/images/ip.svg";
import styles from "./helpResearchers.module.css";

const cards = [
  {
    key: "due-diligence",
    title: "Due diligence support",
    text: "Every project is reviewed before it reaches you.",
    icon: DueDilligence,
  },
  {
    key: "research-verification",
    title: "Research verification",
    text: "Methodology, credentials, and institutional affiliation confirmed.",
    icon: Verification,
  },
  {
    key: "research-matching",
    title: "Research matching",
    text: "Mandates matched to opportunities and not the other way around.",
    icon: Matching
  },
  {
    key: "escrow",
    title: "Escrow & milestone disbursement",
    text: "Capital moves only when milestones are met.",
    icon: Escrow,
  },
  {
    key: "reporting-dashboards",
    title: "Reporting dashboards",
    text: "Track every project in your portfolio in one place.",
    icon: Reporting,
  },
  {
    key: "portfolio-insights",
    title: "Portfolio insights",
    text: "Aggregated impact data across your funded research",
    icon: Portfolio,
  },
  {
    key: "compliance-support",
    title: "Compliance support",
    text: "Frameworks that work across jurisdictions.",
    icon: Compliance,
  },
  {
    key: "ip-governance",
    title: "IP governance",
    text: "Clear ownership structures from the start.",
    icon: IP
  },
];

export default function HelpResearchers() {
  return (
    <section className={styles.section}>
      <sub className={styles.sub}>How We Help Funders</sub>
      <h2 className={styles.title}>
        We bring everything you <br /> need to fund confidently
      </h2>

      <div className={styles.grid}>
        {cards.map((card) => (
          <div className={`${styles.card} ${styles[`card_${card.key}`]}`} key={card.key}>
            <Image src={card.icon} alt={card.title} className={styles.cardIcon} />
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardText}>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}