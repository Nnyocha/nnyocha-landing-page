"use client";

import Image from "next/image";
import Visibility from "../../../../public/images/visibility.svg";
import Milestone from "../../../../public/images/milestone.svg";
import Network from "../../../../public/images/network.svg";
import Vetting from "../../../../public/images/vetting.svg";
import Research from '../../../../public/images/research.svg';
import styles from "./forResearchers.module.css";

export default function ForResearcher() {
  const features = [
    {
      id: 1,
      title: "Funder Visibility",
      icon: Visibility,
      description: "Your profile is surfaced to mandate-matched funds, not the open internet."
    },
    {
      id: 2,
      title: "Milestone Tracking",
      icon: Milestone,
      description: "Capital release is tied to milestones and we help you hit every milestone."
    },
    {
      id: 3,
      title: "Mentor Network",
      icon: Network,
      description: "Get matched with mentors who've walked your path."
    },
    {
      id: 4,
      title: "Structured Vetting",
      icon: Vetting,
      description: "A peer-reviewed rubric that surfaces your strongest signals to funders."
    }
  ];

  const handleRegisterClick = (e) => {
    e.preventDefault();
    const section = document.getElementById('waiting-list');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      sessionStorage.setItem('selectedRole', 'Researcher');
      window.dispatchEvent(new CustomEvent('roleChange', { detail: 'Researcher' }));
    }
  };

  return (
    <section className={styles.section} id="researcher">
      <div className={styles.container}>
        <div className={styles.gridContainer}>
          <div className={styles.contentColumn}>
            <div className={styles.header}>
              <h2 className={styles.title}>Your research <br/> deserves to be <br /> funded</h2>
              <p className={styles.description}>
                Nnyocha matches your work to active grant calls, connects you with mentors who review and verify your proposals, and protects your IP at every step. The right funders will find you.
              </p>
              <a 
                href="#waiting-list" 
                className={styles.ctaButton}
                onClick={handleRegisterClick}
              >
                Register As a Researcher
              </a>
            </div>

            <div className={styles.featuresGrid}>
              {features.map((feature) => (
                <div key={feature.id} className={styles.featureCard}>
                  <Image src={feature.icon} alt={feature.description} width={30} height={30} />
                  <h3 className={styles.cardTitle}>{feature.title}</h3>
                  <p className={styles.cardDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
         <Image src={Research} alt="" width={700} height={1000} className={styles.researchImage}/>
        </div>
      </div>
    </section>
  );
}