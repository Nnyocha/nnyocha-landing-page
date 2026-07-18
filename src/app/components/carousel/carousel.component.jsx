"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Image1 from "../../../../public/images/image-1.svg";
import Image2 from "../../../../public/images/image-2.svg";
import Image3 from "../../../../public/images/image-3.svg";
import Image4 from "../../../../public/images/image-4.svg";
import styles from './carousel.module.css';

const images = [Image1, Image2, Image3, Image4];

export default function Carousel () {

    const [order, setOrder] = useState(images);
    const [step, setStep] = useState(0); // 0 = resting, 1 = mid-slide
    const [withTransition, setWithTransition] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => setStep(1), 2000);
        return () => clearInterval(interval);
    }, []);

    // Once the slide-forward animation finishes, silently rotate the
    // array (first image moves to the back) and snap the position back
    // to rest with no transition — visually identical to where it just
    // was, so it reads as one continuous, infinite slide.
    const handleTransitionEnd = () => {
        if (step === 1) {
            setOrder((prev) => [...prev.slice(1), prev[0]]);
            setWithTransition(false);
            setStep(0);
        }
    };

    useEffect(() => {
        if (!withTransition) {
            const frame = requestAnimationFrame(() => setWithTransition(true));
            return () => cancelAnimationFrame(frame);
        }
    }, [withTransition]);

    // itemPercent is relative to the track (25% each, since there are
    // always 4 slots). peekOffset is a small constant nudge so the
    // outgoing image is always slightly visible on the left at rest,
    // matching the incoming sliver that's already visible on the right.
    const itemPercent = 25;
    const peekOffset = 6;

    return (
        <div className={styles.carousel}>
            <div
                className={styles.track}
                style={{
                    transform: `translateX(-${peekOffset + step * itemPercent}%)`,
                    transition: withTransition ? "transform 0.6s ease-in-out" : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {order.map((src, i) => (
                    <Image
                        key={src.src ?? i}
                        src={src}
                        alt=""
                        width={500}
                        height={500}
                        className={styles.image}
                    />
                ))}
            </div>
        </div>
    )
}