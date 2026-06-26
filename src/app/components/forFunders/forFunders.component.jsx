"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Screening from "../../../../public/images/screening.svg";
import Sourcing from "../../../../public/images/sourcing.svg";
import Tracking from "../../../../public/images/tracking.svg";
import Quality from "../../../../public/images/quality.svg";
import Strength from "../../../../public/images/strength.svg";
import Traction from "../../../../public/images/traction.svg";
import Legal from "../../../../public/images/legal.svg";
import Thesis from "../../../../public/images/thesis.svg";
import Risk from "../../../../public/images/risk.svg";
import styles from "./forFunders.module.css";

export default function ForFunders() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [featureCycle, setFeatureCycle] = useState(0);

  const features = [
    {
      id: 1,
      icon: Sourcing,
      title: "Mandate-aligned sourcing",
      description: "Tell us your thesis, geography and ticket size. We return a ranked shortlist within 7 days.",
      number: "01"
    },
    {
      id: 2,
      icon: Screening,
      title: "Institutional screening",
      description: "Each project is rated on 6 axes: research, team, market, IP, impact, and execution risk.",
      number: "02"
    },
    {
      id: 3,
      icon: Tracking,
      title: "Milestone tracking",
      description: "On-platform progress monitoring and quarterly impact reports your LPs will actually read.",
      number: "03"
    }
  ];

  const rubricItems = [
    "Research quality",
    "Team Strength",
    "Market traction",
    "IP & legal",
    "Impact thesis",
    "Execution risk"
  ];

  const rubricDescriptions = [
    "Methodology, peer review, replicability.",
    "Track record, governance, advisor depth.",
    "Validated demand, paying pilots, partners.",
    "Filings, freedom-to-operate, equity clarity.",
    "Theory of change, SDG alignment, measurability.",
    "Capital absorption, milestone realism, runway."
  ];
  const rubricIcons =[Quality, Strength, Traction, Legal, Thesis, Risk]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev === 1) {
          setFeatureCycle(0);
          return 0;
        }

        if (featureCycle === 2) {
          return 1;
        }
        return 0;
      });
      
      setFeatureCycle((prev) => {
        if (activeIndex === 0) {
          return (prev + 1) % 3;
        }
        return prev;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, featureCycle]);

  const handleDiscoverClick = (e) => {
    e.preventDefault();
    const section = document.getElementById('waiting-list');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      sessionStorage.setItem('selectedRole', 'Funder');
      window.dispatchEvent(new CustomEvent('roleChange', { detail: 'Funder' }));
    }
  };

  const getCardPosition = (index) => {
    const diff = (index - activeIndex + 2) % 2;
    if (diff === 0) return styles.center;
    return styles.side;
  };

  const currentFeature = features[featureCycle];

  return (
    <section className={styles.section} id="funders">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Fund trusted African research</h2>
          <p className={styles.description}>
            Every project on Nnyocha is screened, mentor-reviewed, and aligned to your mandate.
            <br />
            You fund verified research and control disbursement.
            <br />
            We handle compliance, IP protection, and milestone tracking.
          </p>
          <a 
            href="#waiting-list" 
            className={styles.ctaButton}
            onClick={handleDiscoverClick}
          >
            Discover Vetted Research
          </a>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.carouselContainer}>
            <div className={`${styles.card} ${styles.featureCard} ${getCardPosition(0)}`} id="card">
              <p>Value Nnyocha delivers to Funders</p>
              <div className={styles.cardNumber}>{currentFeature.number}</div>
              <Image src={currentFeature.icon} alt={currentFeature.description} width={90} height={90} className={styles.icon}/>
              <h3 className={styles.cardTitle}>{currentFeature.title}</h3>
              <p className={styles.cardDescription}>{currentFeature.description}</p>
            </div>

            <div className={`${styles.card} ${getCardPosition(1)}`}>
              <p className={styles.rubricSubtitle}>Every project is assessed through a 6-axis rubric</p>
              <div className={styles.rubricList}>
                {rubricItems.map((item, index) => (
                  <div key={index} className={styles.rubricItem}>
                    <Image src={rubricIcons[index]} alt={rubricDescriptions[index]} width={30} height={30} />
                    <div>
                      <span className={styles.rubricItemTitle}>{item}</span>
                      <span className={styles.rubricItemDesc}>{rubricDescriptions[index]}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.dots}>
            <button
              className={`${styles.dot} ${activeIndex === 0 ? styles.dotActive : ""}`}
              onClick={() => {
                setActiveIndex(0);
                setFeatureCycle(0);
              }}
              aria-label="Go to feature card"
            />
            <button
              className={`${styles.dot} ${activeIndex === 1 ? styles.dotActive : ""}`}
              onClick={() => {
                setActiveIndex(1);
              }}
              aria-label="Go to rubric card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}