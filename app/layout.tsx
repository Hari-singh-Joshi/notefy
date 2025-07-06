import type React from "react"
import type { Metadata } from "next"
import { Inter, Nunito } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" })
import Script from 'next/script';
export const metadata: Metadata = {
  title: "NotesFy - Your Ultimate Source for BTech CSE Notes",
  description:
    "Explore NotesFy for high-quality BTech CSE study materials, UTU/Tula's notes, handwritten notes, UTU notes, and much more. Perfect for engineering students looking for reliable resources.",
  keywords:
    "NotesFy, BTech CSE notes, UTU/Tula's notes, handwritten notes, UTU notes, engineering study material, computer science notes, CSE study resources, UTU's handwritten notes, UTU study material",
  authors: [{ name: "NotesFy Team" }],
  openGraph: {
    type: "website",
    url: "https://notes-fy.vercel.app/",
    title: "NotesFy - BTech CSE Study Material | UTU/Tula's Notes & Handwritten Notes",
    description:
      "Discover the best BTech CSE study resources with NotesFy. Tula's notes, handwritten notes, UTU materials, and more for engineering students.",
    images: [{ url: "https://notes-fy.vercel.app/assets/img/favicon.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NotesFy - BTech CSE Study Material | UTU/Tula's Notes & Handwritten Notes",
    description:
      "Your one-stop destination for BTech CSE notes, UTU/Tula's notes, handwritten notes, and UTU study materials. Visit NotesFy today!",
    images: ["https://notes-fy.vercel.app/assets/img/favicon.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-7913957132300666" />
        <link rel="canonical" href="https://notes-fy.vercel.app/" />
        <link rel="icon" href="/img/favicon.jpg" />
        <link rel="apple-touch-icon" href="/img/favicon.jpg" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7913957132300666"
     crossorigin="anonymous"></script>
      </head>
      <body className={`${inter.variable} ${nunito.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <Header/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
