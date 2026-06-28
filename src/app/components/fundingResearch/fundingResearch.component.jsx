"use client";

import Image from "next/image";
import Risk from "../../../../public/images/risk.svg";
import Capital from "../../../../public/images/capital.svg";
import Prove from "../../../../public/images/prove.svg";
import Solution from "../../../../public/images/solution.svg";
import Selection from "../../../../public/images/selection.svg";
import Track from "../../../../public/images/track.svg";
import styles from "./fundingResearch.module.css";

export default function FundingResearch() {
  return (
    <section className={styles.section} id="funders">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Funding research in Africa is broken</h2>
          <p className={styles.description}>
            Africa has the talent and ideas to solve its biggest challenges. What's missing is a
            trusted system that helps funders find the right research, validate opportunities, and
            measure the outcomes their investments create.
          </p>
        </div>

        <div className={styles.gridContainer}>
          <div className={styles.columnChallenges}>
            <h3 className={styles.columnTitle}>Why we built Nnyocha</h3>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Image src={Risk} alt="a warning sign" className={styles.cardIcon} width={30} height={30}/>
                <h4 className={styles.cardTitle}>Perceived risk is high</h4>
              </div>
              <p className={styles.cardText}>
                Without a structured evaluation framework, it's difficult to distinguish
                high-potential opportunities from the rest.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Image src={Capital} alt="a paper with search icon in the middle" className={styles.cardIcon} width={30} height={30}/>
                <h4 className={styles.cardTitle}>High-impact research is hidden from capital.</h4>
              </div>
              <p className={styles.cardText}>
                Quality African research lives behind university walls, scattered across 54 countries
                with no central pipeline.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Image src={Prove} alt="arrows pointing in 4 directions" className={styles.cardIcon} width={30} height={30}/>
                <h4 className={styles.cardTitle}>Impact is hard to prove</h4>
              </div>
              <p className={styles.cardText}>
                Funding impact lacks clear measurement systems.
              </p>
            </div>
          </div>

          <div className={styles.columnSolutions}>
            <h3 className={styles.solutionTitle}>How Nnyocha Works</h3>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Image src={Solution} alt="a check mark" className={styles.cardIcon} width={30} height={30}/>
                <h4 className={styles.cardTitle}>Verified Projects</h4>
              </div>
              <p className={styles.cardText}>
                Every project is screened against an institutional rubric: research quality, market
                traction, team strength, and impact thesis.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Image src={Selection} alt="a person with a mark sign on the head" className={styles.cardIcon} width={30} height={30}/>
                <h4 className={styles.cardTitle}>Mandate-Matched Selection</h4>
              </div>
              <p className={styles.cardText}>
                Filter by thesis, geography, ticket size and SDG alignment. Request decks, IP
                profiles and field-validation data on demand.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <Image src={Track} alt="a ziz-zag" className={styles.cardIcon} width={30} height={30}/>
                <h4 className={styles.cardTitle}>Fund &amp; Track</h4>
              </div>
              <p className={styles.cardText}>
                Milestone-based release of capital, on-platform progress monitoring, and quarterly
                impact reports are consistently provided for funders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}