"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Supported1 from "../../../../public/images/supported.svg";
import Supported2 from "../../../../public/images/supported-2.svg";
import Supported3 from "../../../../public/images/supported-3.svg";
import Supported4 from "../../../../public/images/supported-4.svg";
import styles from "./supportedPath.module.css";

const steps = [
  {
    title: "Create your researcher profile with your work, credentials, and research focus",
    image: Supported1,
  },
  {
    title: "Submit your research through our structured application",
    image: Supported2,
  },
  {
    title: "Receive expert feedback from our review team, whether or not you progress.",
    image: Supported3,
  },
  {
    title: "Get matched with funders and mentors aligned to your work.",
    image: Supported4,
  },
];

export default function SupportedPath () {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.section}>
            <sub className={styles.sub}>How It Works</sub>
            <h2 className={styles.title}>From profile to funded, a <br /> clear, supported path</h2>

            <div className={styles.content}>
              <ul className={styles.stepsList}>
                {steps.map((step, index) => (
                  <li
                    key={step.title}
                    className={`${styles.step} ${
                      index === activeIndex ? styles.stepActive : ""
                    }`}
                  >
                    {step.title}
                  </li>
                ))}
              </ul>

              <div className={styles.imageFrame}>
                <Image
                  key={activeIndex}
                  src={steps[activeIndex].image}
                  alt={steps[activeIndex].title}
                  width={460}
                  height={520}
                  className={styles.image}
                  unoptimized
                />
              </div>
            </div>
        </section>
    )
}