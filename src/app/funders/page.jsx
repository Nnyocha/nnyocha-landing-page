import CredibleResearch from "../components/credibleResearch/credibleResearch.component";
import Navbar from "../components/navbar/navbar.component";
import Image from "next/image";
import FunderHero from "../../../public/images/funder-hero.svg";
import "../globals.css";
import Launch from "../components/launch/launch.component";
import HelpResearchers from "../components/helpResearchers/helpResearchers.component";
import CoreBenefits from "../components/coreBenefits/coreBenefits.component";
import Steps from "../components/steps/steps.component";
import FoundersLetter from "../components/foundersLetter/foundersLetter.component";
import FAQs from "../components/faqs/faqs.component";
import StartFunding from "../components/startFunding/startFunding.component";
import Footer from "../components/footer/footer.component";

export default function Funders() {
  return (
    <main>
      <Navbar />
      <CredibleResearch />
      <Image src={FunderHero} alt="Funder Hero" width={1300} height={600} className="hero-image"/>
      <Launch/>
      <HelpResearchers />
      <CoreBenefits />
      <Steps />
      <StartFunding />
      <FoundersLetter />
      <FAQs />
      <Footer />
    </main>
  );
}