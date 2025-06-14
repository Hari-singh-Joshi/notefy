"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { FileText } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function QuestionPapers() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const semesters = [
    {
      name: "1st Semester",
      description: "Download question papers from the 1st semester.",
      link: "https://drive.google.com/drive/folders/1fT2U0n_FvQ9mU4pwWZvfgPgSR8Uq85gl?usp=drive_link",
    },
    {
      name: "2nd Semester",
      description: "Download question papers from the 2nd semester.",
      link: "https://drive.google.com/drive/folders/1mCEVEMhV3aMxjDu5APCQIdZtrReBaiP8?usp=drive_link",
    },
    {
      name: "3rd Semester",
      description: "Download question papers from the 3rd semester.",
      link: "https://drive.google.com/drive/folders/1Tujk19FSgP1mv3ka0ugOEMjPzdi8Gp9j?usp=drive_link",
    },
    {
      name: "4th Semester",
      description: "Download question papers from the 4th semester.",
      link: "https://drive.google.com/drive/folders/1QWRpPzRsW7KT-MD_QqHOyOvOzESimtbZ?usp=drive_link",
    },
    {
      name: "5th Semester",
      description: "Download question papers from the 5th semester.",
      link: "https://drive.google.com/drive/folders/18WwNuzZPXKpDMSg-R37xpw_K9GupsK85?usp=drive_link",
    },
    {
      name: "6th Semester",
      description: "Download question papers from the 6th semester.",
      link: "https://drive.google.com/drive/folders/1ajsi2V6-ptHnRbPylrB4u8HT2za9vlvA?usp=drive_link",
    },
    {
      name: "7th Semester",
      description: "Download question papers from the 7th semester.",
      link: "https://drive.google.com/drive/folders/1ixBktB6dr1TreVv828h4_yVeE_vgNOfP?usp=drive_link",
    },
    {
      name: "8th Semester",
      description: "Download question papers from the 8th semester.",
      link: "https://drive.google.com/drive/folders/1OCR-Q5I1zIXGRPvBZmYCbtHZEYHKreht?usp=drive_link",
    },
  ]

  return (
    <section id="services" className="w-full bg-muted py-16">
      <div className="w-full px-4 md:px-8">
        <div className="section-title">
          <h2>Old Question Papers</h2>
          <p>Browse the question papers from 1st semester to 8th semester below.</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {semesters.map((semester, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden transition-all hover:shadow-md">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 p-6">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{semester.name}</h3>
                      <p className="text-muted-foreground mb-4">{semester.description}</p>
                      <Link
                        href={semester.link}
                        className="text-primary font-medium hover:underline inline-flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Papers →
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
