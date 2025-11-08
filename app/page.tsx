import CaseStudiesSection from "@/components/case-studies-section"
import CtaSection from "@/components/cta-section"
import Hero from "@/components/hero"
import LogoCloud from "@/components/logo-cloud"
import Navbar from "@/components/navbar"
import ServicesSection from "@/components/services"
import TeamSection from "@/components/team-section"
import TestimonialsSection from "@/components/testimonials-section"
import WorkingProcessSection from "@/components/working-process-section"

function Home() {

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[100px]">
      <Navbar />
      <Hero />
      <LogoCloud />
      <ServicesSection />
      <CtaSection />
      <CaseStudiesSection />
      <WorkingProcessSection />
      <TeamSection />
      <TestimonialsSection />
    </div>
  )
}

export default Home
