import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Notes } from "@/components/notes";
import { FeatureCards } from "@/components/feature-cards";
import { Features } from "@/components/features";
import { CallToAction } from "@/components/call-to-action";
import { Team } from "@/components/team";
import { Stats } from "@/components/stats";
import { QuestionPapers } from "@/components/question-papers";
import { LabFiles } from "@/components/lab-files";
import { Faq } from "@/components/faq";
import { CallToActionSecondary } from "@/components/call-to-action-secondary";
import { Contact } from "@/components/contact";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
  <main
    className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 flex flex-col items-center text-center"
    role="main"
  >
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

  );
}
