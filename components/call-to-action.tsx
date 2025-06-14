"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useInView } from "framer-motion"

export function CallToAction() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="w-full bg-muted py-16">
      <div className="w-full px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Notesfy</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're preparing for exams, working on assignments, or gearing up for your next practical session,
            Notesfy has got you covered. With resources curated by experts and designed for easy access, it's time to
            take your academic performance to the next level.
          </p>
          <Button size="lg" asChild>
            <a href="tel:+91 7453966532">Call Us</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
