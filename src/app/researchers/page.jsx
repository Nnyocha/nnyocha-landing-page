"use client"

import Navbar from "../components/navbar/navbar.component";
import Image from "next/image";
import ResearcherHero from "../../../public/images/researcher-hero.svg";
import YourResearch from "../components/yourResearch/yourResearch.component";
import Launch from "../components/launch/launch.component";
import WhyResearchers from "../components/whyResearchers/whyResearchers.component";
import Solved from "../components/solved/solved.component";
import FAQs from "../components/faqs/faqs.component";
import Footer from "../components/footer/footer.component";
import Waitlist from "../components/waitlist/waitlist.component";
import SupportedPath from "../components/supportedPath/supportedPath.component";

export default function Researchers() {
  return (
    <main>
      <Navbar />
      <YourResearch />
      <Image src={ResearcherHero} alt="Researcher Hero" width={1300} height={600} className="hero-image"/>
      <Launch />
      <WhyResearchers />
      <Solved />
      <SupportedPath />
      <FAQs />
      <Waitlist />
      <Footer />
    </main>
  )
}