"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { Award, CheckCircle, Sunrise, ShieldCheck } from "lucide-react"

export function FeatureCards() {
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
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const features = [
    {
      icon: <Award className="h-7 w-7" />,
      title: "Data Structures & Algorithms",
      description: "DSA with code samples in C++ and Python.",
      link: "https://github.com/Hari-singh-Joshi/c-.git",
      color: "bg-orange-100 text-orange-800 border-orange-200",
    },
    {
      icon: <CheckCircle className="h-7 w-7" />,
      title: "Database Management System",
      description: "Notes from placement and GATE perspectives.",
      link: "https://drive.google.com/file/d/1bi0p3J9TS6X1G4FUwmXiWOeAzbFDHpfE/view?usp=drive_link",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      icon: <Sunrise className="h-7 w-7" />,
      title: "Web Development",
      description: "HTML, CSS, Bootstrap, JS, Django, Node.js guide.",
      link: "https://drive.google.com/drive/folders/1pYgZzspUbJ4vvP409MDehLQgDOQFo7ko?usp=drive_link",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Placement Preparation",
      description: "Notes and resources focused on job placements.",
      link: "https://drive.google.com/drive/folders/15TPnX5WWD_YFYOv47a2FJsF8YuOirmJa?usp=drive_link",
      color: "bg-red-100 text-red-800 border-red-200",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              
              className={`rounded-xl p-6 border shadow-sm transition-transform hover:scale-[1.03] hover:shadow-md ${feature.color}`}
            >
              <div className="w-14 h-14 rounded-full bg-white/70 flex items-center justify-center mb-4 shadow">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm mb-4">{feature.description}</p>
              <Link
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-black underline hover:text-opacity-70"
              >
                Click here →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
