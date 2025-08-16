"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { allImages } from "../assets/images"

export default function Hero() {
    return (
        <main className="dark:bg-gray-900 bg-white relative overflow-hidden min-h-screen flex items-center">
            {/* Background gradient blobs */}
            <motion.div
                animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -left-40 w-72 h-72 sm:w-96 sm:h-96 bg-pink-400/30 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ x: [0, -15, 15, 0], y: [0, 10, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -right-40 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-400/30 rounded-full blur-3xl"
            />

            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 max-w-7xl relative z-10">

                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-start text-left max-w-lg"
                >
                    {/* Decorative Line */}
                    <span className="w-16 sm:w-20 h-2 bg-gray-800 dark:bg-white mb-6" />

                    <h1 className="font-bebas-neue uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight dark:text-white text-gray-800">
                        Dr. Mozahid
                        <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
                            Veterinary Clinic
                        </span>
                    </h1>

                    <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
                        Serving Allah’s creatures with faith and care.
                        We provide compassionate, expert veterinary services for pets and livestock—guided by Islamic values and medical ethics.
                        From routine check-ups to advanced treatments, our mission is to keep your animals healthy and happy.
                    </p>

                    <div className="flex mt-8 gap-4 flex-wrap">
                        <a
                            href="#services"
                            className="uppercase py-3 px-6 rounded-lg bg-pink-500 border-2 border-transparent text-white text-sm sm:text-base hover:bg-pink-400 transition-colors"
                        >
                            Our Services
                        </a>
                        <a
                            href="#contact"
                            className="uppercase py-3 px-6 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-sm sm:text-base transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Decorative Dots */}
                    <div className="mt-10 flex gap-2">
                        <span className="w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full"></span>
                        <span className="w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full"></span>
                        <span className="w-2 h-2 sm:w-3 sm:h-3 bg-indigo-500 rounded-full"></span>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center w-full lg:w-auto relative"
                >
                    {/* Gradient Halo Ring */}
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 m-auto w-64 h-64 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] rounded-full 
                        border-8 border-transparent bg-gradient-to-r 
                        from-pink-500 via-indigo-500 to-pink-400 
                        bg-clip-border blur-md opacity-30"
                    />

                    {/* Floating Circle Behind Image */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 m-auto w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] bg-primary/10 rounded-full"
                    />

                    {/* Static Image */}
                    <div className="relative z-10">
                        <Image
                            src={allImages.heroImage}
                            alt="Dr. Mozahid Veterinary Clinic"
                            priority
                            className="bg-cover w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl h-auto rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </main>
    )
}
