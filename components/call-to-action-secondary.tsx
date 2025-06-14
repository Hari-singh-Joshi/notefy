"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion, useAnimation, useInView } from "framer-motion"

export function CallToActionSecondary() {
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
    <section className="w-full bg-pink-600 py-16">
      <div className="w-full px-4 md:px-8">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={controls}
          className="mx-auto text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Call To Action</h3>
          <p className="text-lg mb-8">
            Notesfy truly embodies the spirit of innovation and dedication, making it a valuable resource for anyone
            pursuing Computer Science and Engineering. For any queries You can Directly contact us. We are always
            availabe for mentoring you.
          </p>
          <Button size="lg" variant="outline" asChild>
            <a href="tel:+91 7453966532">Call To Action</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
