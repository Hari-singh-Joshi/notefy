"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function LabFiles() {
  const [activeTab, setActiveTab] = useState("sem1")

  const semesters = [
    {
      id: "sem1",
      name: "1st Semester",
      subjects: [
        {
          name: "Physics",
          link: "#",
        },
        {
          name: "Electrical Engineering",
          link: "#",
        },
        {
          name: "C Programming",
          link: "#",
        },
      ],
      image: "/img/features-illustration-3.webp",
    },
    {
      id: "sem2",
      name: "2nd Semester",
      subjects: [
        {
          name: "Engineering Chemistry",
          link: "#",
        },
        {
          name: "Mechanical Engineering",
          link: "#",
        },
        {
          name: "Electronics Engineering",
          link: "#",
        },
      ],
      image: "/img/testimonials/hari.png",
    },
    {
      id: "sem3",
      name: "3rd Semester",
      subjects: [
        {
          name: "Data Structure and Algorithm",
          link: "#",
        },
        {
          name: "Object Oriented Programming",
          link: "#",
        },
        {
          name: "Digital Electronics",
          link: "#",
        },
      ],
      image: "/img/features-illustration-1.webp",
    },
    {
      id: "sem4",
      name: "4th Semester",
      subjects: [
        {
          name: "Database Management System",
          link: "#",
        },
        {
          name: "Theory of Computation",
          link: "#",
        },
      ],
      image: "/img/features-illustration-3.webp",
    },
    {
      id: "sem5",
      name: "5th Semester",
      subjects: [
        {
          name: "Operating System",
          link: "#",
        },
        {
          name: "Design and Analysis of Algorithms (DAA)",
          link: "#",
        },
        {
          name: "Python Programming",
          link: "#",
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
          link: "#",
        },
        {
          name: "Compiler Design",
          link: "#",
        },
        {
          name: "Data Analytics",
          link: "#",
        },
      ],
      image: "/img/Avatar-1.jpg",
    },
    {
      id: "sem7",
      name: "7th Semester",
      subjects: [
        {
          name: ".NET Framework and C#",
          link: "#",
        },
        {
          name: "Adhoc Network",
          link: "#",
        },
        {
          name: "Virtual lab",
          link: "#",
        },
      ],
      image: "/img/features-illustration-3.webp",
    },
    {
      id: "sem8",
      name: "8th Semester",
      subjects: [
        {
          name: "Advanced Operating System",
          link: "#",
        },
        {
          name: "Cryptography and Network Security",
          link: "#",
        },
        {
          name: "Cloud Security",
          link: "#",
        },
        {
          name: "Blockchain",
          link: "#",
        },
      ],
      image: "/img/features-illustration-2.webp",
    },
  ]

  return (
    <section id="pricing" className="w-full bg-muted py-16">
      <div className="w-full px-4 md:px-8">
        <div className="section-title">
          <h2>Lab Files</h2>
          <p>Select Your Semester and Download Files</p>
        </div>

        <Tabs defaultValue="sem1" value={activeTab} onValueChange={setActiveTab} className="w-full mb-4">
          {/* Mobile dropdown for semester selection */}
          <div className="md:hidden mb-6">
            <Select value={activeTab} onValueChange={setActiveTab}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Semester" />
              </SelectTrigger>
              <SelectContent>
                {semesters.map((semester) => (
                  <SelectItem key={semester.id} value={semester.id}>
                    {semester.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop tabs */}
          <div className="hidden md:flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 lg:grid-cols-8">
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
                    <h3 className="text-2xl font-bold">{semester.name} Lab Files</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {semester.subjects.map((subject, index) => (
                        <Card key={index} className="overflow-hidden transition-all hover:shadow-md">
                          <CardContent className="p-0">
                            <div className="p-6 space-y-2">
                              <h4 className="font-semibold">{subject.name}</h4>
                              <p className="text-sm text-muted-foreground">Lab file for {subject.name}</p>
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
