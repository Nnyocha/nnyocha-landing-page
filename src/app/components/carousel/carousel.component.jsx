"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Image1 from "../../../../public/images/carousel.svg";
import Image2 from "../../../../public/images/funder-hero.webp";
import Image3 from "../../../../public/images/researcher-hero.svg";
import styles from "./carousel.module.css";

export default function Carousel() {
  const images = [Image1, Image2, Image3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: "transform 0.6s ease",
          }}
        >
          {images.map((src, index) => (
            <div key={index} className={styles.slide}>
              <Image
                src={src}
                alt={`slide-${index + 1}`}
                width={1200}
                height={700}
                className={styles.image}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button className={styles.prev} onClick={prev} aria-label="Previous slide">
        ‹
      </button>
      <button className={styles.next} onClick={next} aria-label="Next slide">
        ›
      </button>

      {/* Dots */}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${current === index ? styles.active : ""}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}