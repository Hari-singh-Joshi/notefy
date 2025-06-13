"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { Check, Phone } from "lucide-react"

export function About() {
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

  return (
    <section id="about" className="section light-background">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-6">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">MORE ABOUT US</span>
            <h2 className="text-3xl md:text-4xl font-bold">Make Your Study Easy</h2>
            <p className="text-muted-foreground">
              We are here to provide you best Handwritten notes, college lab files and great projects for Hackathon,
              minor and major projects on trending technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/20 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Handwritten Notes</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/20 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Lab Files</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/20 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Projects</span>
                </li>
              </ul>

              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/20 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Old Question Paper</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/20 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Mentoring</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/20 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span>Coaching Available too</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/img/avatar-4.jpg"
                    alt="CEO Profile"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">Hari Singh Joshi</h4>
                  <p className="text-sm text-muted-foreground">CEO & Founder</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call us anytime</p>
                  <p className="font-medium">+91 7453966532</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10">
              <Image
                src="/img/about-5.webp"
                alt="About Image"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />

              <div className="absolute -bottom-8 -left-8 w-48 h-48 md:w-64 md:h-64">
                <Image
                  src="/img/about-me.jpg"
                  alt="Team Discussion"
                  width={256}
                  height={256}
                  className="rounded-lg shadow-lg border-4 border-background"
                />
              </div>
            </div>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.3, duration: 0.5 },
                },
              }}
              className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg z-20 max-w-[200px]">
              <h3 className="text-xl font-bold">
                New <span className="block">In Industry</span>
              </h3>
              <p className="text-sm mt-2">Best Notes are here.</p>
            </motion.div>

            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-2xl -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
