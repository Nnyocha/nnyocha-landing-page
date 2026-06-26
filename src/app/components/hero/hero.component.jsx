"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Hero1 from '../../../../public/images/hero-1.svg';
import Hero2 from "../../../../public/images/hero-2.svg";
import Link from "next/link";
import styles from "./hero.module.css";

const slides = [
  {
    id: 1,
    image: Hero1,
    title: "Invest in Africa's Next Generation of Researchers",
    subtitle:
      "Nnyocha helps institutional funders discover, evaluate, and support high-potential researchers through a trusted pipeline designed for measurable impact",
    cta: "Discover Vetted Research",
  },
  {
    id: 2,
    image: Hero2,
    title: "Invest in Africa's Next Generation of Researchers",
    subtitle:
      "Nnyocha helps institutional funders discover, evaluate, and support high-potential researchers through a trusted pipeline designed for measurable impact",
    cta: "Discover Vetted Research",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handleDiscoverClick = (e) => {
    e.preventDefault();
    const section = document.getElementById('waiting-list');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      sessionStorage.setItem('selectedRole', 'Researcher');
      window.dispatchEvent(new CustomEvent('roleChange', { detail: 'Researcher' }));
    }
  };

  const displaySlides = isMobile ? [slides[0]] : slides;
  const activeIndex = isMobile ? 0 : currentSlide;

  const renderTitle = (title) => {
    const parts = title.split(/(Invest|Researchers)/g);
    return parts.map((part, index) => {
      if (part === 'Invest' || part === 'Researchers') {
        return <span key={index} style={{ color: '#8CC63F' }}>{part}</span>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.carouselContainer}>
        {displaySlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${
              index === activeIndex ? styles.slideActive : styles.slideInactive
            }`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className={styles.image}
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              <div className={styles.overlay} />
            </div>

            <div className={styles.content}>
              <div className={styles.contentInner}>
                <div className={styles.textContainer}>
                    <div className={styles.dotsContainer}>
                    {slides.map((_, index) => (
                        <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`${styles.dot} ${
                            index === currentSlide ? styles.dotActive : styles.dotInactive
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                    </div>
                    <h1 className={styles.title}>{renderTitle(slide.title)}</h1>
                    <p className={styles.subtitle}>{slide.subtitle}</p>
                    <Link 
                        href="#waiting-list" 
                        className={styles.ctaBtn}
                        onClick={handleDiscoverClick}
                    >
                        {slide.cta}
                    </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {!isMobile && (
          <>
            <button
              onClick={goToPrev}
              className={styles.arrowBtn}
              style={{ left: "16px" }}
              aria-label="Previous slide"
            >
              <svg
                className={styles.arrowIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className={styles.arrowBtn}
              style={{ right: "16px" }}
              aria-label="Next slide"
            >
              <svg
                className={styles.arrowIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {isMobile && (
          <div className={styles.mobileDots}>
            <span className={styles.mobileDotActive} />
            <span className={styles.mobileDotInactive} />
            <span className={styles.mobileDotInactive} />
          </div>
        )}
      </div>
    </section>
  );
}