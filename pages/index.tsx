import Hero from "../components/Hero"
import SocialProof from "../components/SocialProof"
import TrainingSection from "../components/TrainingSection"
import Navigation from "../components/Navigation"
import AdvantagesList from "../components/AdvantagesList"
import SurveyResults from "../components/SurveyResults"
import FooterHero from "../components/FooterHero"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div className="bg-gray-100">
      <Navigation />

      <main>
        <Hero />
        <SocialProof />
        <TrainingSection />
        <AdvantagesList />
        <SurveyResults />
        <FooterHero />
      </main>

      <Footer />
    </div>
  )
}

export default Home
