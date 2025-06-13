"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn("fixed top-4 left-0 right-0 z-50 w-full px-4", isScrolled ? "translate-y-0" : "translate-y-0")}
    >
      <div
        className={cn(
          "mx-auto max-w-[95%] md:max-w-[90%] flex h-16 items-center justify-between rounded-full transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-background/80 backdrop-blur-sm",
        )}
      >
        <Link href="/" className="flex items-center space-x-2 pl-4">
          <span className="text-2xl font-bold text-black-900">NotesFy</span>
        </Link>

        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#hero" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#features" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Notes
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#services" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Paper
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#pricing" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Lab Files
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Projects</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="#"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">College Projects</div>
                          <p className="text-sm leading-tight text-muted-foreground">     
                  <li><a href="https://github.com/Hari-singh-Joshi/mediapipe">Mediapipe</a></li>
                  <li><a href="https://github.com/Hari-singh-Joshi/MinorProject">Minor Project (AI/ML)</a></li>
                  <li><a href="https://github.com/Hari-singh-Joshi/E-Commerce_Django_project.git">E-Commerce Website</a></li>
                  <li><a href="https://github.com/Hari-singh-Joshi/Event-Management-System.git">Event Management System</a></li>
                  <li><a href="https://github.com/Hari-singh-Joshi/cse_time_table">CSE Time Table</a></li>
                  <li><a href="https://github.com/Hari-singh-Joshi/harghar_tution_app">Har Ghar Tuition App</a></li>          
                  <li><a href="https://github.com/Hari-singh-Joshi/tictocgame.git">Ticktock Game</a></li>
                  <li><a href="https://github.com/Hari-singh-Joshi/weather-app.git">Weather app</a></li>
                  <li><a href="https://github.com/Hari-singh-Joshi/snakeGame.git">Snake Game</a></li>
                  <li><a href="https://github.com/Hari-singh-Joshi/HACKATHON-III.git">MERN Ticketless Entry System</a></li>
                  <li><a href="https://github.com/Hari-singh-Joshi/my-portfolio">My Portfolio</a></li>
                  <li><a href="https://github.com/Hari-singh-Joshi/three_js">Three.js Demo</a></li>
                  <li><a href="https://github.com/Hari-singh-Joshi/song">Song App</a></li>
                            

                            

                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="https://github.com/Hari-singh-Joshi/c-.git"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="text-sm font-medium leading-none">Data Structure and Algorithm</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            DSA with codes in C++ and Python
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="https://drive.google.com/file/d/1bi0p3J9TS6X1G4FUwmXiWOeAzbFDHpfE/view?usp=drive_link"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="text-sm font-medium leading-none">Database Management System</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Notes from placement and gates point of view
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="https://drive.google.com/drive/folders/1pYgZzspUbJ4vvP409MDehLQgDOQFo7ko?usp=drive_link"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="text-sm font-medium leading-none">Web Development</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            HTML, CSS, Bootstrap, JavaScript, Django and Node.js complete guide
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a
                          href="https://drive.google.com/drive/folders/15TPnX5WWD_YFYOv47a2FJsF8YuOirmJa?usp=drive_link"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="text-sm font-medium leading-none">Placement</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Notes for Placement point of view
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#contact" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4 pr-4">
          <Button asChild className="hidden md:inline-flex rounded-full">
            <a href="https://median.co/share/xkmmoj#apk">Download App</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#hero" className="text-lg font-medium hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="#about" className="text-lg font-medium hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#features" className="text-lg font-medium hover:text-primary transition-colors">
                  Notes
                </Link>
                <Link href="#services" className="text-lg font-medium hover:text-primary transition-colors">
                  Paper
                </Link>
                <Link href="#pricing" className="text-lg font-medium hover:text-primary transition-colors">
                  Lab Files
                </Link>
                <Link href="/policy" className="text-lg font-medium hover:text-primary transition-colors">
                  Policy
                </Link>
                <div className="text-lg font-medium mt-2 mb-1">Projects:</div>
                <div className="pl-4 space-y-2">
                  <Link
                    href="https://github.com/Hari-singh-Joshi/c-.git"
                    className="text-base font-medium hover:text-primary transition-colors block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Data Structure and Algorithm
                  </Link>
                  <Link
                    href="https://drive.google.com/file/d/1bi0p3J9TS6X1G4FUwmXiWOeAzbFDHpfE/view?usp=drive_link"
                    className="text-base font-medium hover:text-primary transition-colors block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Database Management System
                  </Link>
                  <Link
                    href="https://drive.google.com/drive/folders/1pYgZzspUbJ4vvP409MDehLQgDOQFo7ko?usp=drive_link"
                    className="text-base font-medium hover:text-primary transition-colors block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="https://drive.google.com/drive/folders/15TPnX5WWD_YFYOv47a2FJsF8YuOirmJa?usp=drive_link"
                    className="text-base font-medium hover:text-primary transition-colors block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Placement
                  </Link>
                </div>
                <Link href="#contact" className="text-lg font-medium hover:text-primary transition-colors mt-2">
                  Contact
                </Link>
                <Button asChild className="mt-4 rounded-full">
                  <a href="https://median.co/share/xkmmoj#apk">Download App</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
