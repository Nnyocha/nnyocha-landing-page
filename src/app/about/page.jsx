"use client";

import Image from "next/image";
import BuildingInfrastructure from "../components/buildingInfrastructure/buildingInfrastructure.component";
import Navbar from "../components/navbar/navbar.component";
import AboutHero from "../../../public/images/about-hero.svg";
import Launch from "../components/launch/launch.component";
import WhyNnyocha from "../components/whyNnyocha/whyNnyocha.component";
import FoundersLetter from "../components/foundersLetter/foundersLetter.component";
import FAQs from "../components/faqs/faqs.component";
import startFunding from "../components/startFunding/startFunding.component";
import Footer from "../components/footer/footer.component";


export default function About () {
    return(
        <main>
            <Navbar />
            <BuildingInfrastructure />
            <Image src={AboutHero} alt="Funder Hero" width={1300} height={600} className="hero-image"/>
            <Launch />
            <WhyNnyocha />
            <FoundersLetter />
            <FAQs />
            <startFunding />
            <Footer />
        </main>
    )
}