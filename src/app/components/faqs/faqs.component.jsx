"use client";

import { useState } from "react";
import styles from "./faqs.module.css";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is Nnyocha",
      answer: "Nnyocha is a deal flow platform built to help discover, evaluate, and connect high-potential African research projects with the capital, mentorship, and opportunities needed to create measurable impact. It helps bridge the gap between promising research and the institutions that can support it."
    },
    {
      question: "Who is Nnyocha for?",
      answer: "Nnyocha is built for researchers, institutional funders, impact investors, foundations, development partners, and organizations looking to discover and support impactful research across Africa."
    },
    {
      question: "How does Nnyocha help researchers?",
      answer: "Nnyocha helps researchers gain visibility, access funding opportunities, connect with mentors, and receive support that helps move promising research from ideas into impactful solutions."
    },
    {
      question: "How does Nnyocha help funders?",
      answer: "Nnyocha gives funders access to a trusted pipeline of evaluated research opportunities, helping them discover promising talent, reduce funding risk, and deploy capital toward measurable outcomes."
    },
    {
      question: "How are research projects evaluated?",
      answer: "Research projects are assessed using a structured evaluation framework that considers factors such as research quality, impact potential, feasibility, relevance, and scalability. This helps create a clearer and more transparent funding decision process."
    },
    {
      question: "Can organizations partner with Nnyocha?",
      answer: "Yes. Organizations can partner with Nnyocha to support research programs, provide funding, offer mentorship, collaborate on initiatives, or access a pipeline of emerging African research talent."
    },
    {
      question: "How is intellectual property protected?",
      answer: "Nnyocha recognizes the importance of protecting researchers’ ideas and innovations. Intellectual property ownership remains guided by agreements between researchers, institutions, and funding partners, with confidentiality and protection measures applied where required"
    },
    {
      question: "How are funds escrowed and disbursed?",
      answer: "Funds are managed through a structured process designed to ensure accountability and transparency. Capital is released based on agreed milestones, project requirements, and verification processes between relevant stakeholders."
    },
    {
      question: "How do I join Nnyocha?",
      answer: "Researchers, funders, mentors, and partners can join by registering interest through Nnyocha’s platform. Once onboarded, users can access the relevant opportunities, networks, and resources available to them."
    }
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