"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Settings,
  Megaphone,
  Share2,
  Cookie,
  ShieldCheck,
  Users,
  RefreshCw,
  Laptop,
  UserCheck,
  FileText,
  AlertOctagon,
  ShieldOff,
  Scale,
  Headset,
  CheckCircle,
  Info,
  AlertTriangle,
  Calendar,
} from "lucide-react"

export default function PolicyContent() {
  const [activeTab, setActiveTab] = useState("privacy")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 bg-gradient-to-r from-primary/90 to-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Privacy Policy & Terms
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl opacity-90"
            >
              Understand how we protect your data and our terms of service
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <div className={`${isScrolled ? "sticky top-24" : ""} transition-all duration-300`}>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-4">Quick Navigation</h3>
                    <Tabs
                      defaultValue="privacy"
                      value={activeTab}
                      onValueChange={setActiveTab}
                      className="w-full"
                      orientation="vertical"
                    >
                      <TabsList className="flex flex-col h-auto items-stretch gap-2">
                        <TabsTrigger value="privacy" className="justify-start">
                          Privacy Policy
                        </TabsTrigger>
                        <TabsTrigger value="terms" className="justify-start">
                          Terms of Service
                        </TabsTrigger>
                        <TabsTrigger value="contact" className="justify-start">
                          Contact Us
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-9">
              <Tabs defaultValue="privacy" value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsContent value="privacy" className="mt-0">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Privacy Policy</h2>
                      <div className="h-1 w-16 bg-primary mb-6"></div>
                      <p className="text-lg text-muted-foreground mb-8">
                        Welcome to NotesFy. This Privacy Policy explains how we collect, use, and safeguard your
                        personal data when you visit our website or use our services.
                      </p>
                    </div>

                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <Shield className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">1. Information We Collect</h3>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div className="bg-muted p-4 rounded-lg">
                            <h4 className="font-medium flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-primary border-primary">
                                Personal Info
                              </Badge>
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              Name, email, etc., if you sign up or contact us.
                            </p>
                          </div>
                          <div className="bg-muted p-4 rounded-lg">
                            <h4 className="font-medium flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-primary border-primary">
                                Usage Data
                              </Badge>
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              Pages visited, time spent, device info, via cookies and analytics.
                            </p>
                          </div>
                          <div className="bg-muted p-4 rounded-lg">
                            <h4 className="font-medium flex items-center gap-2 mb-2">
                              <Badge variant="outline" className="text-primary border-primary">
                                Cookies
                              </Badge>
                            </h4>
                            <p className="text-muted-foreground text-sm">
                              Used for site functionality and personalized ads (Google AdSense).
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <Settings className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">2. How We Use Information</h3>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>To provide, maintain, and improve our services</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>To personalize your experience and show relevant content/ads</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span>To respond to queries, support requests, and send optional updates</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <Megaphone className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">3. Third-Party Advertising</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">
                          We use Google AdSense and other ad providers who may use cookies to serve ads based on your
                          visit history. You can opt out via{" "}
                          <Link
                            href="https://adssettings.google.com"
                            target="_blank"
                            className="text-primary hover:underline"
                          >
                            Google Ads Settings
                          </Link>
                          .
                        </p>
                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertDescription>We don't sell your personal data to advertisers.</AlertDescription>
                        </Alert>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <Share2 className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">4. Data Sharing</h3>
                        </CardHeader>
                        <CardContent>
                          <p>
                            We do <strong>not</strong> sell or rent your personal data. We only share data when required
                            by law or to protect rights. Third-party tools we use have their own privacy commitments.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <Cookie className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">5. Cookie Control</h3>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4">
                            You may disable cookies via your browser settings, but this may affect site functionality.
                          </p>
                          <Button variant="outline" size="sm">
                            Learn about cookie settings
                          </Button>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <ShieldCheck className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">6. Security</h3>
                        </CardHeader>
                        <CardContent>
                          <p>
                            We implement reasonable measures to protect your data, though no method is 100% secure. We
                            cannot guarantee absolute security.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <Users className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">7. Children's Privacy</h3>
                        </CardHeader>
                        <CardContent>
                          <p>
                            We do not knowingly collect personal info from children under 18. Please contact us if you
                            believe such data has been provided without consent.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <RefreshCw className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">8. Updates</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">
                          We may update this policy. Changes will be posted on this page with the "Last updated" date
                          below.
                        </p>
                        <div className="bg-muted p-4 rounded-lg flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-primary" />
                          <p className="font-medium">
                            <strong>Last updated:</strong> June 12, 2025
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="terms" className="mt-0">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">Terms of Service</h2>
                      <div className="h-1 w-16 bg-primary mb-6"></div>
                      <p className="text-lg text-muted-foreground mb-8">
                        By using NotesFy, you're agreeing to these terms:
                      </p>
                    </div>

                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <Laptop className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">1. Use of Services</h3>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">
                          You're allowed to browse, download, and use our study materials for your learning purposes.
                          Redistribution, reproduction, or commercial use without permission is prohibited.
                        </p>
                        <Alert variant="warning">
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            Unauthorized commercial use of our content is strictly forbidden.
                          </AlertDescription>
                        </Alert>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <UserCheck className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">2. Account Responsibility</h3>
                      </CardHeader>
                      <CardContent>
                        <p>
                          If we introduce user accounts, you're responsible for maintaining confidentiality of your
                          credentials and liable for your account activity.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <FileText className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-semibold">3. Content Ownership</h3>
                      </CardHeader>
                      <CardContent>
                        <p>
                          NotesFy owns its own content. Elsewhere-uploaded content is licensed appropriately. You grant
                          us permission to display or feature your user content, with attribution.
                        </p>
                      </CardContent>
                    </Card>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <AlertOctagon className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">4. Disclaimer</h3>
                        </CardHeader>
                        <CardContent>
                          <p>
                            Content is provided "as-is" without warranties. We're not responsible for inaccuracies or
                            losses resulting from using our materials.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <ShieldOff className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">5. Limitation of Liability</h3>
                        </CardHeader>
                        <CardContent>
                          <p>
                            NotesFy is not liable for indirect, incidental, or consequential damages. In jurisdictions
                            that don't allow limitations, these limitations may not apply.
                          </p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <Scale className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">6. Governing Law</h3>
                        </CardHeader>
                        <CardContent>
                          <p>
                            These terms are governed by the laws of India. Any disputes will be resolved in local courts
                            within Uttarakhand.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="overflow-hidden transition-all hover:shadow-md">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                          <RefreshCw className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">7. Changes</h3>
                        </CardHeader>
                        <CardContent>
                          <p>We may update these terms. Continued use following changes constitutes acceptance.</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="contact" className="mt-0">
                  <Card className="overflow-hidden transition-all hover:shadow-md bg-primary text-primary-foreground">
                    <CardContent className="p-8">
                      <div className="text-center space-y-4">
                        <Headset className="h-16 w-16 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold">Need Help?</h3>
                        <p className="text-lg opacity-90 mb-6">
                          For any questions or concerns about our policies or terms, please contact us
                        </p>
                        <Button variant="secondary" size="lg" asChild>
                          <Link href="mailto:joshiharish942@gmail.com">Email Us</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
