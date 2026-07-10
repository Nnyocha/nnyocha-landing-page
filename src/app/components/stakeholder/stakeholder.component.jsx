"use client";

import Image from "next/image";
import PartLogo from "../../../../public/images/part-logo.svg";
import Funder from "../../../../public/images/funder.svg";
import Researcher from "../../../../public/images/researcher.svg";
import Mentor from "../../../../public/images/mentor.svg";
import styles from "./stakeholder.module.css";

const stakeholderData = [
  {
    key: "funder",
    title: "Funder",
    subtitle: "Everything you need to fund Confidently",
    items: [
      "Due diligence support",
      "Research verification",
      "Escrow & milestone disbursement",
      "Compliance support",
      "IP governance",
      "Reporting dashboards",
      "Research matching",
      "Portfolio insights",
    ],
    cta: "Speak to a Founder",
    accent: "funder",
    icon: Funder,
  },
  {
    key: "researcher",
    title: "Researcher",
    subtitle: "Everything You Need to Move Your Research Forward",
    items: [
      "Funding Opportunities",
      "Research Visibility",
      "Mentorship",
      "Institutional Connections",
      "Career Development",
      "Research community",
    ],
    cta: "Submit a Research",
    accent: "researcher",
    icon: Researcher,
  },
  {
    key: "mentors",
    title: "Mentors",
    subtitle: "Every Contribution Matters",
    items: [
      "Review research proposals",
      "Provide technical guidance",
      "Support funding readiness",
      "Connect researchers to your network",
      "Coach presentation and pitching skills",
      "Support commercialization pathways",
      "Share industry insights",
    ],
    cta: "Become a Mentor",
    accent: "mentors",
    icon: Mentor,
  },
];

export default function Stakeholder() {

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>One Platform for <br />every stakeholder </h2>
      <p>Researchers struggle to find funding. Funders struggle to find credible research. Nnyocha  <br />
      connects them through a trusted platform built for discovery, funding, and measurable impact.</p>
      <div className={styles.container}>
        <div className={styles.burstWrap}>
          <div className={styles.burst}>
            <span className={styles.burstIcon}>
              <Image src={PartLogo} alt="Nnyocha Logo" width={40} height={40} />
            </span>
          </div>
          <span className={styles.stem} aria-hidden="true" />
        </div>

        <div className={styles.cardsRow}>
          {stakeholderData.map((s) => (
            <div className={styles.card} key={s.key}>
              <Image src={s.icon} alt={`${s.title} Icon`} className={styles.cardIcon} width={40} height={40} />
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardSubtitle}>{s.subtitle}</p>
              <ul className={styles.cardList}>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button className={`${styles.cardCta} ${styles[`cta_${s.accent}`]}`}>
                {s.cta}
              </button>
              <button className={styles.learnMore}>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}