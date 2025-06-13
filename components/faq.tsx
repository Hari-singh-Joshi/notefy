"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"

export function Faq() {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      question: "How can I download lab files for different subjects?",
      answer:
        "You can download lab files by navigating to the Lab Files section, selecting your desired subject, and clicking the download link provided. The files will be available in specified formats such as PDFs or ZIP archives.",
    },
    {
      question: "Where can I find previous year question papers?",
      answer:
        "Previous year question papers are available in the Question Papers section. Simply select your subject, choose the desired academic year, and download the papers in PDF format.",
    },
    {
      question: "How do I access mentorship coaching materials?",
      answer:
        "Mentorship coaching materials are available in the Coaching Resources section. You can view or download these resources as PDFs, videos, or other materials to aid your learning.",
    },
    {
      question: "Can I download report files for submission?",
      answer:
        "Yes, you can download report files from the Reports section. Select the required report type and download it in the appropriate format for submission or further use.",
    },
    {
      question: "How can I ensure I have the latest materials for mentorship?",
      answer:
        "Regularly check the Coaching Resources section for updates. You will receive notifications whenever new materials are added.",
    },
  ]

  return (
    <section id="faq" className="section light-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Have a question? Check out the FAQ</h2>
            <p className="text-muted-foreground">Kindly check your answer on the right side.</p>
            <div className="hidden lg:block relative h-64">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute top-0 right-0 w-48 h-48 text-primary/20"
              >
                <svg
                  width="200"
                  height="211"
                  viewBox="0 0 200 211"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path
                    d="M198.804 194.488C189.279 189.596 179.529 185.52 169.407 182.07L169.384 182.049C169.227 181.994 169.07 181.939 168.912 181.884C166.669 181.139 165.906 184.546 167.669 185.615C174.053 189.473 182.761 191.837 189.146 195.695C156.603 195.912 119.781 196.591 91.266 179.049C62.5221 161.368 48.1094 130.695 56.934 98.891C84.5539 98.7247 112.556 84.0176 129.508 62.667C136.396 53.9724 146.193 35.1448 129.773 30.2717C114.292 25.6624 93.7109 41.8875 83.1971 51.3147C70.1109 63.039 59.63 78.433 54.2039 95.0087C52.1221 94.9842 50.0776 94.8683 48.0703 94.6608C30.1803 92.8027 11.2197 83.6338 5.44902 65.1074C-1.88449 41.5699 14.4994 19.0183 27.9202 1.56641C28.6411 0.625793 27.2862 -0.561638 26.5419 0.358501C13.4588 16.4098 -0.221091 34.5242 0.896608 56.5659C1.8218 74.6941 14.221 87.9401 30.4121 94.2058C37.7076 97.0203 45.3454 98.5003 53.0334 98.8449C47.8679 117.532 49.2961 137.487 60.7729 155.283C87.7615 197.081 139.616 201.147 184.786 201.155L174.332 206.827C172.119 208.033 174.345 211.287 176.537 210.105C182.06 207.125 187.582 204.122 193.084 201.144C193.346 201.147 195.161 199.887 195.423 199.868C197.08 198.548 193.084 201.144 195.528 199.81C196.688 199.192 197.846 198.552 199.006 197.935C200.397 197.167 200.007 195.087 198.804 194.488ZM60.8213 88.0427C67.6894 72.648 78.8538 59.1566 92.1207 49.0388C98.8475 43.9065 106.334 39.2953 114.188 36.1439C117.295 34.8947 120.798 33.6609 124.168 33.635C134.365 33.5511 136.354 42.9911 132.638 51.031C120.47 77.4222 86.8639 93.9837 58.0983 94.9666C58.8971 92.6666 59.783 90.3603 60.8213 88.0427Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </motion.div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border border-border rounded-lg overflow-hidden transition-all ${
                    activeIndex === index ? "bg-background shadow-sm" : "bg-background/50"
                  }`}
                >
                  <button
                    className="flex items-center justify-between w-full p-4 text-left"
                    onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                  >
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <ChevronRight
                      className={`h-5 w-5 text-primary transition-transform ${
                        activeIndex === index ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-4 pt-0 text-muted-foreground border-t border-border">
                          <p>{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
