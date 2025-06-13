"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { Monitor, Feather, Eye, CodeSquare, Smartphone, Chrome } from "lucide-react"

export function Features() {
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
        staggerChildren: 0.2,
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

  const leftFeatures = [
    {
      icon: <Monitor className="h-6 w-6 text-primary" />,
      title: "Download Notes",
      description:
        "Access comprehensive notes for all CSE subjects to boost your understanding and prepare effectively for exams.",
    },
    {
      icon: <Feather className="h-6 w-6 text-primary" />,
      title: "Previous Year Papers",
      description:
        "Get access to solved and unsolved previous year question papers to practice and excel in your CSE exams.",
    },
    {
      icon: <Eye className="h-6 w-6 text-primary" />,
      title: "College Lab Files",
      description:
        "Access ready-to-use lab files for your CSE practicals, ensuring you are prepared and efficient in your lab sessions.",
    },
  ]

  const rightFeatures = [
    {
      icon: <CodeSquare className="h-6 w-6 text-primary" />,
      title: "Live Projects",
      description:
        "Work on live projects for hackathons, college minor, and major projects to gain hands-on experience and showcase your skills.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Coaching Available",
      description:
        "Avail personal coaching tailored to your needs, covering academic, competitive, or professional development topics.",
    },
    {
      icon: <Chrome className="h-6 w-6 text-primary" />,
      title: "Mentorship by Me",
      description:
        "Receive direct mentorship to guide your learning, career development, and project execution effectively.",
    },
  ]

  return (
    <section className="section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-12">
            {leftFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="bg-muted rounded-lg p-3 flex items-center justify-center">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
                
              </div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              <Image
                src="/img/hari.png"
                alt="Mobile App"
                width={300}
                height={600}
                className="rounded-3xl shadow-xl border border-border"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-xl -z-10" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-10" />
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-12">
            {rightFeatures.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="bg-muted rounded-lg p-3 flex items-center justify-center">{feature.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
