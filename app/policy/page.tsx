import type { Metadata } from "next"
import { Footer } from "@/components/footer"
import PolicyContent from "@/components/policy-content"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "NotesFy | Privacy Policy & Terms",
  description:
    "NotesFy Privacy Policy and Terms of Service. Learn how we collect, use, protect your data, and outline site terms.",
  keywords: "NotesFy privacy policy, terms of service, notesfy terms, privacy, data protection",
  openGraph: {
    type: "article",
    url: "https://notes-fy.vercel.app/policy",
    title: "NotesFy – Privacy Policy & Terms",
    description: "Privacy policy and terms of service for NotesFy study materials website.",
    images: [{ url: "https://notes-fy.vercel.app/assets/img/favicon.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NotesFy – Privacy Policy & Terms",
    description: "Our privacy practices and site usage terms explained clearly.",
    images: ["https://notes-fy.vercel.app/assets/img/favicon.jpg"],
  },
}

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      
      <main className="overflow-hidden">
        <PolicyContent />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
