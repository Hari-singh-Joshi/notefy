"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, useAnimation, useInView } from "framer-motion"
import { Play, Trophy, Briefcase, BarChart2, Award, X ,Settings  } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export function Hero() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [open, setOpen] = useState(false)

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
    <section
      id="hero"
      className="section pt-24 md:pt-40 lg:pt-48 relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-6 text-center lg:text-left ">
            <Badge className="mx-auto lg:mx-0 w-fit text-md py-1.5 bg-primary/10 text-primary font-bold border-primary/20 hover:bg-primary/20 mb-5 mt-5">
            <Settings className="animate-spin text-green-400 w-6 h-6" />
              Working for your success
            </Badge>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-snug text-pink-700">
              Provides Handwritten <br />
              Notes and College Projects <br />
              <span className="text-primary">Hari Singh Joshi</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Download handwritten notes, question papers, lab files and college projects on AI/ML, full stack, and more — perfect for minor & major reference.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 pt-2">
              <Button className="h-9 px-5 rounded-full text-sm" asChild>
                <Link href="#about">Get Started</Link>
              </Button>

              {/* Dialog for video popup */}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="h-9 px-5 rounded-full text-sm group">
                    <Play className="mr-2 h-4 w-4 group-hover:text-primary transition-colors" />
                    Play Video
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md w-full p-0 overflow-hidden rounded-xl shadow-xl">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/jy7cktxpKJM?autoplay=1&rel=0"
                      title="YouTube video"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                    <button
                      onClick={() => setOpen(false)}
                      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md text-gray-700 hover:text-primary transition"
                      aria-label="Close"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative z-10">
              <Image
                src="/img/illustration-1.webp"
                alt="Hero Image"
                width={600}
                height={500}
                className="rounded-lg shadow-xl w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Avatar Box */}
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { delay: 0.3, duration: 0.5 },
                },
              }}
              className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-border z-20"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium overflow-hidden"
                    >
                      {i < 6 ? <AvatarImage i={i} /> : <span>12+</span>}
                    </div>
                  ))}
                </div>
                <p className="text-sm font-medium">120+ people already visited this site</p>
              </div>
            </motion.div>

            {/* Background Blurs */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-2xl -z-10" />
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.6, duration: 0.5 },
            },
          }}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          <FeatureCard icon={<Trophy className="h-6 w-6 text-primary" />} title="Live Projects" desc="Projects for Hackathon" />
          <FeatureCard icon={<Briefcase className="h-6 w-6 text-primary" />} title="24x7" desc="Available for Your Queries" />
          <FeatureCard icon={<BarChart2 className="h-6 w-6 text-primary" />} title="Data Analytics" desc="Learn Data Preprocessing" />
          <FeatureCard icon={<Award className="h-6 w-6 text-primary" />} title="Batches" desc="Won Prizes" />
        </motion.div>
      </div>
    </section>
  )
}

// Avatar image component with fallback support
function AvatarImage({ i }: { i: number }) {
  const formats = ['jpg', 'png', 'webp']
  const tried = useRef(0)
  const [src, setSrc] = useState(`/img/avatar-${i}.${formats[0]}`)

  const handleError = () => {
    tried.current += 1
    if (tried.current < formats.length) {
      setSrc(`/img/avatar-${i}.${formats[tried.current]}`)
    } else {
      setSrc('/img/default-avatar.png') // fallback image
    }
  }

  return (
    <Image
      src={src}
      alt={`User ${i}`}
      width={32}
      height={32}
      onError={handleError}
    />
  )
}

// FeatureCard is reused for clean code
function FeatureCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-primary/10">{icon}</div>
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
      </div>
    </div>
  )
}
