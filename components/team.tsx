"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import { Star } from "lucide-react"

export function Team() {
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

  const teamMembers = [
    {
      name: "Hari Singh Joshi",
      role: "CEO & Founder",
      image: "/img/testimonials/hari.png",
      testimonial:
        "Notesfy is an outstanding initiative tailored for B.Tech CSE students, providing a centralized platform to access all their study materials seamlessly. With its user-friendly interface and comprehensive content coverage, it empowers students to excel academically by saving time and enhancing learning efficiency.",
    },
    {
      name: "Kabir Bhatt",
      role: "Front-end Designer",
      image: "/img/testimonials/kabir.png",
      testimonial:
        "Notesfy's frontend is a true highlight of the platform, offering an incredibly user-friendly experience. Its intuitive design ensures that students can effortlessly navigate through semesters and subjects to find the study materials they need. The clean layout and responsive features make learning not just accessible but also enjoyable.",
    },
    {
      name: "Ayush Kumar",
      role: "Schema Designer",
      image: "/img/testimonials/ayush.png",
      testimonial:
        "The schema behind Notesfy is thoughtfully designed, ensuring that study materials are well-organized, easily accessible, and scalable for future updates. The clear structure makes it effortless for students to find the resources they need, improving overall efficiency.",
    },
    {
      name: "Jissan Siddiqi",
      role: "Freelancer",
      image: "/img/testimonials/jissan.png",
      testimonial:
        "Notesfy serves as a perfect blend of innovative educational solutions and a potential for collaboration, making it an ideal choice for freelancers looking to make an impact in the ed-tech space.",
    },
  ]

  return (
    <section id="testimonials" className="section light-background">
      <div className="container">
        <div className="section-title">
          <h2>Our Team</h2>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground mb-2">{member.role}</p>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">
                  <span className="text-primary text-xl">"</span>
                  {member.testimonial}
                  <span className="text-primary text-xl">"</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
