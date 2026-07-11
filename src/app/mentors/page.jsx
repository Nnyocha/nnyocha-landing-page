"use client"

import Navbar from "../components/navbar/navbar.component";
import ResearchBreakthroughs from "../components/researchBreakthroughs/researchBreakthroughs.component";
import Image from 'next/image';
import MentorHero from "../../../public/images/mentor-hero.svg";
import WithPurpose from "../components/withPurpose/withPurpose.component";
import Launch from "../components/launch/launch.component";

export default function Mentors () {
    return(
        <main>
            <Navbar />
            <ResearchBreakthroughs />
            <Image src={MentorHero} width={1300} height={600} className="hero-image" alt="Two men looking at fruits hanging from a tree" />
            <Launch />
            <WithPurpose />
        </main>
    )
}