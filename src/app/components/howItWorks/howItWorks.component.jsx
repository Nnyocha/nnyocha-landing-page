"use client";

import styles from "./howItWorks.module.css";

const steps = [
  {
    number: 1,
    text: "Researchers submit their work through a structured profile.",
  },
  {
    number: 2,
    text: "Projects are reviewed and evaluated by our team.",
  },
  {
    number: 3,
    text: "Funders discover vetted opportunities matched to their mandate.",
  },
  {
    number: 4,
    text: "Mentors provide guidance throughout the research journey.",
  },
  {
    number: 5,
    text: "Funds is released through a secure, milestone-based process.",
  },
  {
    number: 6,
    text: "Outcomes are tracked and reported for every stakeholder.",
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>How it Works</h2>

      <div className={styles.timeline}>
        <span className={styles.line} aria-hidden="true" />

        {steps.map((step, index) => {
          const side = index % 2 === 0 ? "right" : "left";
          return (
            <div className={styles.row} key={step.number}>
              <div className={styles.left}>
                {side === "left" && (
                  <p className={styles.stepText}>{step.text}</p>
                )}
              </div>

              <div className={styles.dotCol}>
                <span className={styles.dot}>{step.number}</span>
              </div>

              <div className={styles.right}>
                {side === "right" && (
                  <p className={styles.stepText}>{step.text}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}