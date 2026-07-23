"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Image1 from "../../../../public/images/carousel.svg";
import Image2 from "../../../../public/images/funder-hero.webp";
import Image3 from "../../../../public/images/researcher-hero.svg";
import styles from "./carousel.module.css";

export default function Carousel() {
  const images = [Image1, Image2, Image3];
  const extended = [...images, ...images];

  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(true);

  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // seamless reset
  useEffect(() => {
    if (current === images.length) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(0);
      }, 600);
    } else {
      setTransition(true);
    }
  }, [current, images.length]);

  const next = () => setCurrent((prev) => prev + 1);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${current * 100}%)`,
            transition: transition ? "transform 0.6s ease" : "none",
          }}
        >
          {extended.map((src, index) => (
            <div key={index} className={styles.slide}>
              {/* 👇 NO className here */}
              <Image
                src={src}
                alt={`slide-${index}`}
                width={1200}
                height={700}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button className={styles.prev} onClick={prev}>‹</button>
      <button className={styles.next} onClick={next}>›</button>

      {/* Dots */}
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              current % images.length === index ? styles.active : ""
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}