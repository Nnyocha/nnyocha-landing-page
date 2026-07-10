"use client";

import styles from "./whyDifferent.module.css";

const features = [
  { label: "Lists grants", other: true, nnyocha: true },
  { label: "Matches projects with funders", other: false, nnyocha: true },
  { label: "Stores publications", other: true, nnyocha: true },
  { label: "Integrated mentor network", other: false, nnyocha: true },
  { label: "Built-in monitoring and evaluation", other: false, nnyocha: true },
  { label: "Supports commercialization", other: false, nnyocha: true },
  { label: "End-to-end research lifecycle", other: false, nnyocha: true },
  { label: "AI-powered discovery", other: false, nnyocha: true },
];

function Check() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 12.5 9.5 18 20 6.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WhyDifferent() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Why Nnoycha is Different</h2>
      <p className={styles.subtitle}>
        Unlike grant directories or research databases, NNYOCHA connects every
        stakeholder in one trusted ecosystem.
      </p>

      <div className={styles.table}>
        <div className={styles.headerCell} />
        <div className={styles.headerCell}>
          <span className={styles.colTitle}>Other Platforms</span>
          <span className={styles.colSubtitle}>Existing Solution</span>
        </div>
        <div className={`${styles.headerCell} ${styles.highlightCell} ${styles.highlightTop}`}>
          <span className={styles.badge}>Best Choice</span>
          <span className={styles.colTitle}>Nnyocha</span>
          <span className={styles.colSubtitle}>Our solution</span>
        </div>

        {features.map((feature, index) => {
          const isLast = index === features.length - 1;
          return (
            <div className={styles.row} key={feature.label}>
              <div className={styles.labelCell}>{feature.label}</div>
              <div className={styles.checkCell}>
                {feature.other && <Check />}
              </div>
              <div
                className={`${styles.checkCell} ${styles.highlightCell} ${
                  isLast ? styles.highlightBottom : ""
                }`}
              >
                {feature.nnyocha && <Check />}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}