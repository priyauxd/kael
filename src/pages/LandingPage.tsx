import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import LogoBar from '../components/LogoBar'
import ProblemSection from '../components/ProblemSection'
import PlatformSection from '../components/PlatformSection'
import WhyKaelSection from '../components/WhyKaelSection'
import QuoteSection from '../components/QuoteSection'
import HowItWorksSection from '../components/HowItWorksSection'
import MissionControlSection from '../components/MissionControlSection'
import AgentsSection from '../components/AgentsSection'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0F0E1A]">
      <Navbar />
      <main>
        <HeroSection />
        <LogoBar />
        <ProblemSection />
        <PlatformSection />
        <WhyKaelSection />
        <QuoteSection />
        <HowItWorksSection />
        <MissionControlSection />
        <AgentsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
