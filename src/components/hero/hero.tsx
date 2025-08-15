"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { allImages } from "../assets/images"

export default function Hero() {
    return (
        <main className="dark:bg-gray-800 bg-white relative overflow-hidden min-h-screen flex items-center">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-16 max-w-7xl">

                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-start text-left max-w-md lg:max-w-lg"
                >
                    <span className="w-20 h-2 bg-gray-800 dark:bg-white mb-8" />

                    <h1 className="font-bebas-neue uppercase text-5xl sm:text-6xl md:text-7xl font-black leading-tight dark:text-white text-gray-800">
                        Dr. Mozahid
                        <span className="block text-3xl sm:text-4xl md:text-5xl text-primary">
                            Veterinary Clinic
                        </span>
                    </h1>

                    <p className="mt-6 text-base sm:text-lg text-gray-700 dark:text-gray-300">
                        Serving Allah’s creatures with faith and care.
                        We provide compassionate, expert veterinary services for pets and livestock—guided by Islamic values and medical ethics.
                        From routine check-ups to advanced treatments, our mission is to keep your animals healthy and happy.
                    </p>

                    <div className="flex mt-8 gap-4">
                        <a
                            href="#services"
                            className="uppercase py-3 px-6 rounded-lg bg-pink-500 border-2 border-transparent text-white text-sm sm:text-md hover:bg-pink-400 transition-colors"
                        >
                            Our Services
                        </a>
                        <a
                            href="#contact"
                            className="uppercase py-3 px-6 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-sm sm:text-md transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center w-full lg:w-auto"
                >
                    <Image
                        src={allImages.heroImage}
                        alt="Dr. Mozahid Veterinary Clinic"
                        priority
                        className="bg-cover w-full max-w-3xl h-auto"
                    />
                </motion.div>
            </div>
        </main>
    )
}
