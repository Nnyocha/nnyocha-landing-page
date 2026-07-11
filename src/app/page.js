
import Navbar from "./components/navbar/navbar.component";
import FundingResearch from "./components/fundingResearch/fundingResearch.component";
import Launch from "./components/launch/launch.component";
import TheProblem from "./components/theProblem/theProblem.component";
import FAQs from "./components/faqs/faqs.component";
import StartFunding from "./components/startFunding/startFunding.component";
import Footer from "./components/footer/footer.component";
import FoundersLetter from "./components/foundersLetter/foundersLetter.component";
import Stakeholder from "./components/stakeholder/stakeholder.component";
import HowItWorks from "./components/howItWorks/howItWorks.component";
import WhyDifferent from "./components/whyDifferent/whyDifferent.component";

export default function Home() {
  return (
    <main>
      <Navbar />
      <FundingResearch />
      <Launch />
      <TheProblem />
      <Stakeholder />
      <HowItWorks />
      <WhyDifferent />
      <FoundersLetter />
      <FAQs />
      <StartFunding />
      <Footer />
    </main>
  );
}