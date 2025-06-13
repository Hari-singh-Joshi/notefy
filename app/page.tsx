import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Notes } from "@/components/notes"
import { FeatureCards } from "@/components/feature-cards"
import { Features } from "@/components/features"
import { CallToAction } from "@/components/call-to-action"
import { Team } from "@/components/team"
import { Stats } from "@/components/stats"
import { QuestionPapers } from "@/components/question-papers"
import { LabFiles } from "@/components/lab-files"
import { Faq } from "@/components/faq"
import { CallToActionSecondary } from "@/components/call-to-action-secondary"
import { Contact } from "@/components/contact"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      
      <main className="overflow-hidden mx-4 sm:mx-6 md:mx-10 lg:mx-16">

        <Hero />
        <About />
        <Notes />
        <FeatureCards />
        <Features />
        <CallToAction />
        <Team />
        <Stats />
        <QuestionPapers />
        <LabFiles />
        <Faq />
        <CallToActionSecondary />
        <Contact />
      </main>
    
      <ScrollToTop />
    </div>
  )
}
