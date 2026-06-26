"use client";

import Image from "next/image";
import Guide from "../../../../public/images/guide.svg";
import Curated from "../../../../public/images/curated.svg";
import Impact from "../../../../public/images/impact.svg";
import styles from "./mentors.module.css";

export default function Mentors() {
  const features = [
    {
      id: 1,
      title: "Guide vetted projects",
      icon: Guide,
      description: "Light-touch reviews of decks, methodology and milestones."
    },
    {
      id: 2,
      title: "Curated network",
      icon: Curated,
      description: "Senior operators, fund leads, and researcher."
    },
    {
      id: 3,
      title: "Verified impact",
      icon: Impact,
      description: "1 hour/week can move 3+ projects toward institutional capital."
    }
  ];

  const handleMentorClick = (e) => {
    e.preventDefault();
    const section = document.getElementById('waiting-list');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      sessionStorage.setItem('selectedRole', 'Mentor');
      window.dispatchEvent(new CustomEvent('roleChange', { detail: 'Mentor' }));
    }
  };

  return (
    <section className={styles.section} id="mentors">
        <div className={styles.header}>
          <h2 className={styles.title}>
            Share your expertise,<br />
            shape African research
          </h2>
          <p className={styles.description}>
            Become part of Africa's most credible research mentorship network. Match with researchers in your field, guide their work, and build a measurable portfolio of impact.
          </p>
          <a 
            href="#waiting-list" 
            className={styles.ctaButton}
            onClick={handleMentorClick}
          >
            Become a Mentor
          </a>
        </div>

        <div className={styles.features}>
          {features.map((feature) => (
            <div key={feature.id} className={styles.featureItem}>
                <Image src={feature.icon} alt={feature.description} width={30} height={30} />
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
    </section>
  );
}