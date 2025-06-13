import Link from "next/link"
import { Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 pt-16 pb-6 mx-4 sm:mx-6 md:mx-10 lg:mx-16">

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block">
              NotesFy
            </Link>
            <div className="text-muted-foreground mb-6">
              <p>248001 dhoolkot Street</p>
              <p>Dehradun, Uttrakhand</p>
              <p className="mt-3">
                <span className="font-semibold">Phone:</span> +91 7453 9665 32
              </p>
              <p>
                <span className="font-semibold">Email:</span> joshiharish942@gmail.com
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="#"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/harishjoshi44/?igsh=MTMxNW9od3lndzJsMA%3D%3D"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/hari-singh-joshi-4499b326b/"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Notes
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Question paper
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Lab Files
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Product Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Graphic Design
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Access</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  All Semester Notes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  User-Friendly Interface
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Organized Study Material
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Free Downloads
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  24/7 Accessibility
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center">
          <p className="text-muted-foreground">
            © <span>Copyright</span> <strong className="text-primary">NotesFy</strong> <span>All Rights Reserved</span>
          </p>
          <div className="mt-1 text-sm text-muted-foreground">
            Designed by{" "}
            <Link href="https://portfolio-hari-singh.vercel.app/" className="text-primary hover:underline">
              Hari Singh Joshi
            </Link>{" "}
            |{" "}
            <Link href="/policy" className="text-primary hover:underline">
              Policy Page
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
