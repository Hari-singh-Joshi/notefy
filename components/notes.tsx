"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Notes() {
  const [activeTab, setActiveTab] = useState("sem1")

  const semesters = [
    {
      id: "sem1",
      name: "1st Semester",
      subjects: [
        {
          name: "Physics",
          link: "https://drive.google.com/drive/folders/1ns1uiKZYSjiTwY9wl5QgmuGx6EcECgoh?usp=drive_link",
        },
        {
          name: "Engineering Mathematics-I",
          link: "https://drive.google.com/drive/folders/13cmxUCOb_sXeiTDxKKn5NNWTAtZK4fd3?usp=drive_link",
        },
        {
          name: "Electrical Engineering",
          link: "https://drive.google.com/drive/folders/1qs9TQ5FBfYzdGhclavZeStGeLCcjfAfH?usp=drive_link",
        },
        {
          name: "C++ Programming",
          link: "https://drive.google.com/drive/folders/1_OiXiGiKUXKaMpIEa-AVGSRpNFsc98Tx?usp=drive_link",
        },
      ],
      image: "/img/features-illustration-1.webp",
    },
    {
      id: "sem2",
      name: "2nd Semester",
      subjects: [
        {
          name: "Engineering Chemistry",
          link: "https://drive.google.com/drive/folders/1wihk_7j5GgdPqFvlXzZiKi3EU4HoO4J_?usp=drive_link",
        },
        {
          name: "Mechanical Engineering",
          link: "https://drive.google.com/drive/folders/1UFhfby8ZbSc4pmLFUrcCP_eWYKh_j2U0?usp=drive_link",
        },
        {
          name: "Electronics Engineering",
          link: "https://drive.google.com/drive/folders/1OIIWVVpTYmfwhMVfGsiVY5_B6dMcXnVN?usp=drive_link",
        },
        {
          name: "Mathematics-II",
          link: "https://drive.google.com/drive/folders/1xsSFzmGo8NzYCY4CdbvacU6fS0Vm73DL?usp=drive_link",
        },
      ],
      image: "/img/features-illustration-2.webp",
    },
    {
      id: "sem3",
      name: "3rd Semester",
      subjects: [
        {
          name: "Discrete Structure",
          link: "https://drive.google.com/drive/folders/1DAhq-upf4T1BdII07w7RG8cRRIebMW1V?usp=drive_link",
        },
        {
          name: "Data Structure and Algorithm",
          link: "https://drive.google.com/drive/folders/17M2wGHEwvAqtusVo2J1hGPkkdtuEkKXD?usp=drive_link",
        },
        {
          name: "Object Oriented Programming",
          link: "https://drive.google.com/drive/folders/1VTucVKveCJi6TQ0zIxXC6gNVszuWpsR4?usp=drive_link",
        },
        {
          name: "Digital Electronics",
          link: "https://drive.google.com/drive/folders/1Mgh-GB3WiGuvW0vPDwMOKKVfF3eGzUoG?usp=drive_link",
        },
      ],
      image: "/img/features-illustration-3.webp",
    },
    {
      id: "sem4",
      name: "4th Semester",
      subjects: [
        {
          name: "Mathematics III",
          link: "https://drive.google.com/drive/folders/1iR_yR13FRDIcIPuDEOenPwzoBXKhDyDW?usp=drive_link",
        },
        {
          name: "Database Management System",
          link: "https://drive.google.com/drive/folders/1kcrEepi4DLHrKAEyiiSdik5Ct8aIW7Vd?usp=drive_link",
        },
        {
          name: "Software Engineering",
          link: "https://drive.google.com/drive/folders/1ybgLDyHD8_NZj18QopFlsUnMGzF3YeZi?usp=drive_link",
        },
        {
          name: "Theory of Automata & Computation",
          link: "https://drive.google.com/drive/folders/1zBkAFIS-KEZXpbVT5oi4Z6IMNSnPK7vT?usp=drive_link",
        },
      ],
      image: "/img/features-illustration-1.webp",
    },
    {
      id: "sem5",
      name: "5th Semester",
      subjects: [
        {
          name: "Operating System",
          link: "https://drive.google.com/drive/folders/1Kq6_TdXympsq7gxZ-5xsop34r3ItS3Bl?usp=drive_link",
        },
        {
          name: "Computer organization and architecture",
          link: "https://drive.google.com/drive/folders/12d77SI470Qadrv5FACMCN3PHu7kVBOjp?usp=drive_link",
        },
        {
          name: "Design and Analysis of Algorithms (DAA)",
          link: "https://drive.google.com/drive/folders/1roPdL6uvpyH-PZcF9euofJN5xu_U8xMd?usp=drive_link",
        },
        {
          name: "Python Programming",
          link: "https://drive.google.com/drive/folders/1V15V1j_BpNE7Pz80JWSNEK0TuJ2Zop1I?usp=drive_link",
        },
      ],
      image: "/img/features-illustration-2.webp",
    },
    {
      id: "sem6",
      name: "6th Semester",
      subjects: [
        {
          name: "Microprocessor",
          link: "https://drive.google.com/drive/folders/1Ng8kmTA6cAZBZzRa-27ZE_BERhDLnCAn?usp=drive_link",
        },
        {
          name: "Compiler Design",
          link: "https://drive.google.com/drive/folders/1z5JLIy0cUPAjKb5_8NDZOZwZ84kBvf2A?usp=drive_link",
        },
        {
          name: "Data Analytics",
          link: "https://drive.google.com/drive/folders/1Re2iBcrhavBe_dhtTgHoyC2zHpY67Q9U?usp=drive_link",
        },
        {
          name: "Machine Learning",
          link: "https://drive.google.com/drive/folders/1FkRbh7mV6TVXlIfJaQioIxS2rJv6uJNI?usp=drive_link",
        },
      ],
      image: "/img/features-illustration-3.webp",
    },
    {
      id: "sem7",
      name: "7th Semester",
      subjects: [
        {
          name: ".NET Framework and C#",
          link: "https://drive.google.com/drive/folders/1hMX0RJvhB_hv-uX6U0M_1poUlFe3U340?usp=drive_link",
        },
        {
          name: "Adhoc Network",
          link: "https://drive.google.com/drive/folders/1r5TQvVr31JrkECRwZn-D9Rn8UztviFK7?usp=drive_link",
        },
        {
          name: "IoT (Internet of Things)",
          link: "https://drive.google.com/drive/folders/11PEitcvtZr0_e8gWUKb6_szcho18vQbf?usp=drive_link",
        },
        {
          name: "Big Data Processing",
          link: "https://drive.google.com/drive/folders/1kXgAhv2TPNkSDRaAT-butrD7JcTncGtJ?usp=drive_link",
        },
      ],
      image: "/img/features-illustration-1.webp",
    },
    {
      id: "sem8",
      name: "8th Semester",
      subjects: [
        {
          name: "Advanced Operating System",
          link: "https://drive.google.com/drive/folders/1eDwEdO8_wM3Mo6r9dNg6Z9yvCXeEjcKy?usp=drive_link",
        },
        {
          name: "Cryptography and Network Security",
          link: "https://drive.google.com/drive/folders/1Iectt7G580OgletdJJ2McbsRqCMQuuds?usp=drive_link",
        },
        {
          name: "Cloud Security",
          link: "https://drive.google.com/drive/folders/1LJjHPjHiLmS2uc8QzUidnLHzfp9pFNM-?usp=drive_link",
        },
        {
          name: "Artificial Intelligence",
          link: "https://drive.google.com/drive/folders/17uYCnfhaDQOFyaI6GxA9b13AuBWY7dhB?usp=drive_link",
        },
      ],
      image: "/img/features-illustration-2.webp",
    },
  ]

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Notes</h2>
          <p>Select Your Semester and Download Notes</p>
        </div>

        <Tabs defaultValue="sem1" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
              {semesters.map((semester) => (
                <TabsTrigger key={semester.id} value={semester.id}>
                  {semester.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {semesters.map((semester) => (
            <TabsContent key={semester.id} value={semester.id}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={semester.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                >
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold">{semester.name} Notes</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {semester.subjects.map((subject, index) => (
                        <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                          <CardContent className="p-0">
                            <div className="p-6 space-y-2">
                              <h4 className="font-semibold">{subject.name}</h4>
                              <p className="text-sm text-muted-foreground">Handwritten Notes for {subject.name}</p>
                              <Button variant="link" className="p-0 h-auto text-primary" asChild>
                                <a href={subject.link} target="_blank" rel="noopener noreferrer">
                                  Download
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="relative">
                      <Image
                        src={semester.image || "/placeholder.svg"}
                        alt={`${semester.name} Illustration`}
                        width={500}
                        height={400}
                        className="rounded-lg shadow-lg"
                      />
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl -z-10" />
                      <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
