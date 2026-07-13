"use client";

import { useState } from "react";
import styles from "./faqs.module.css";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is Nnyocha",
      answer: "Nnyocha is a research infrastructure platform that connects African researchers, funders, and mentors through a trusted, structured ecosystem. We make it easier for high-quality research to get discovered, evaluated, and funded."
    },
    {
      question: "Who can join?",
      answer: "Nnyocha is open to African researchers at any career stage, institutional and individual funders, experienced mentors, and organisational partners. If you're part of the research ecosystem, there's a place for you here."
    },
    {
      question: "How are projects evaluated?",
      answer: "Every project submitted to Nnyocha goes through a structured review covering research quality, methodology, impact potential, and fundability. Projects that pass receive a brief matched to relevant funders. Those that don't receive written feedback."
    },
    {
      question: "How do funders participate?",
      answer: "Funders set their mandate and receive a curated pipeline of pre-vetted research opportunities. Capital is deployed through a milestone-based escrow process, with structured reporting at every stage."
    },
    {
      question: "How is intellectual property protected?",
      answer: "Researchers retain full IP ownership. Nnyocha does not claim rights over any submitted or funded research. All commercialisation terms are agreed directly between researcher and funder."
    },
    {
      question: "Can organizations partner with Nnyocha?",
      answer: "Yes. We work with universities, research institutes, funding consortia, and development organisations. Contact us at hello@nnyocha.com to explore what a partnership could look like."
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const midPoint = Math.ceil(faqs.length / 2);
  const leftColumn = faqs.slice(0, midPoint);
  const rightColumn = faqs.slice(midPoint);

  return (
    <section className={styles.section} id="faqs">
      <div className={styles.container}>
        <h2 className={styles.title}>FAQs</h2>
        
        <div className={styles.grid}>
          <div className={styles.column}>
            {leftColumn.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <button
                  className={styles.faqButton}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className={styles.faqQuestion}>{faq.question}</span>
                  <span className={`${styles.faqIcon} ${openIndex === index ? styles.faqIconOpen : ''}`}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>
                <div className={`${styles.faqAnswer} ${openIndex === index ? styles.faqAnswerOpen : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.column}>
            {rightColumn.map((faq, index) => {
              const actualIndex = index + midPoint;
              return (
                <div key={actualIndex} className={styles.faqItem}>
                  <button
                    className={styles.faqButton}
                    onClick={() => toggleFAQ(actualIndex)}
                    aria-expanded={openIndex === actualIndex}
                  >
                    <span className={styles.faqQuestion}>{faq.question}</span>
                    <span className={`${styles.faqIcon} ${openIndex === actualIndex ? styles.faqIconOpen : ''}`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>
                  <div className={`${styles.faqAnswer} ${openIndex === actualIndex ? styles.faqAnswerOpen : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}