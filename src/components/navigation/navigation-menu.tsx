"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./theme-mode-toggle"
import { NavUser } from "./nav-user" 
import { Logo } from "./logo-image"

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Book Appointment", href: "/appointment" },
    { name: "Knowledge Share", href: "/knowledge" },
    { name: "Community", href: "/community" },
    { name: "Gallery", href: "/gallery" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
]

export default function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl border-b">
            <div className="container mx-auto flex items-center justify-between py-3 px-4">

                {/* Logo */}
                    <Logo/>

                {/* Center Menu - Desktop */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            className="relative"
                        >
                            <Link
                                href={link.href}
                                className="text-md font-medium transition-colors hover:text-primary"
                            >
                                {link.name}
                            </Link>
                            {hoveredIndex === i && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-primary"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    exit={{ scaleX: 0 }}
                                    transition={{ duration: 0.25 }}
                                    style={{ transformOrigin: "center" }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Right - Theme toggle + User + Mobile Menu */}
                <div className="flex items-center gap-2">
                    <ModeToggle />
                    <NavUser
                        user={{
                            name: "John Doe",
                            email: "john@example.com",
                            avatar: "/avatars/user.png",
                        }}
                    />
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-background border-t"
                    >
                        <div className="flex flex-col items-center p-4 space-y-3">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-sm font-medium transition-colors hover:text-primary"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
