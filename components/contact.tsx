"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Star } from "lucide-react"

export function Contact() {
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
    <section id="contact" className="w-full bg-muted py-16">
      <div className="w-full px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-muted-foreground">Here is our contact details</p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          <motion.div variants={itemVariants} className="lg:col-span-5">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                <p className="text-muted-foreground mb-6">We are 24*7 available for you.</p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Our Location</h4>
                      <p className="text-muted-foreground">248001 Dhoolkot Street</p>
                      <p className="text-muted-foreground">Dehradun, Uttarakhand</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone Number</h4>
                      <p className="text-muted-foreground">+91 74539 66532</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email Address</h4>
                      <p className="text-muted-foreground">joshiharish942@gmail.com</p>
                      <p className="text-muted-foreground">hari.202104115@tulas.edu.in</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Star className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Greet</h4>
                      <p className="text-muted-foreground">Thank you for visiting my website</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-7">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
                <p className="text-muted-foreground mb-6">
                  You can mail us and kindly give us feedback through this form.
                </p>

                <form action="https://formsubmit.co/joshiharish942@gmail.com" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Input type="text" name="name" placeholder="Your Name" required />
                    </div>
                    <div>
                      <Input type="email" name="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  <div className="mb-4">
                    <Input type="text" name="subject" placeholder="Subject" required />
                  </div>
                  <div className="mb-6">
                    <Textarea name="message" rows={6} placeholder="Message" required />
                  </div>
                  <div className="text-center">
                    <Button type="submit" size="lg">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
