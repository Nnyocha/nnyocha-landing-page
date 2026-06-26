
import Navbar from "./components/navbar/navbar.component";
import Hero from "./components/hero/hero.component";
import FundingResearch from "./components/fundingResearch/fundingResearch.component";
import ForFunders from "./components/forFunders/forFunders.component";
import ForResearcher from "./components/forResearchers/forResearchers.component";
import Mentors from "./components/mentors/mentors.component";
import FAQs from "./components/faqs/faqs.component";
import JoinSection from "./components/waitingList/waitingList.component";
import Footer from "./components/footer/footer.component";
import FoundersLetter from "./components/foundersLetter/foundersLetter.component";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FundingResearch />
      <ForFunders />
      <ForResearcher />
      <Mentors />
      <FoundersLetter />
      <FAQs />
      <JoinSection />
      <Footer />
    </main>
  );
}