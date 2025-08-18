'use client'
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { allImages } from "../assets/images"

export default function CTA() {
    return (
        <main className="dark:bg-black bg-white relative overflow-hidden min-h-screen flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-12 sm:gap-16 lg:gap-24 xl:gap-32 max-w-7xl relative">

                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-start text-left w-full max-w-lg lg:max-w-xl relative z-10"
                >
                    <span className="w-16 sm:w-20 h-2 bg-gray-800 dark:bg-white mb-4" />

                    <h1 className="font-bebas-neue uppercase text-4xl sm:text-5xl md:text-6xl font-black leading-tight dark:text-white text-gray-800">
                        Dr. Mozahid
                        <span className="block text-2xl sm:text-3xl md:text-4xl text-primary mt-2">
                            Veterinary Surgeon & Animal Care Specialist
                        </span>
                    </h1>

                    <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
                        With years of hands-on experience in veterinary medicine,
                        Dr. Mozahid has dedicated his career to improving the health,
                        safety, and well-being of pets and animals. From routine checkups
                        to advanced treatments, he combines expertise with compassion
                        to ensure your furry friends receive the best care possible.
                    </p>

                    <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
                        Trusted by countless pet owners, his mission is simple:
                        to provide professional, affordable, and heartfelt veterinary
                        services for every animal in need.
                    </p>

                    {/* Decorative shapes below content */}
                    <div className="mt-6 sm:mt-8 flex gap-2">
                        <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-primary rounded-full"></span>
                        <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-pink-400 rounded-full"></span>
                        <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-indigo-500 rounded-full"></span>
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative flex items-center justify-center w-full lg:w-auto"
                >
                    {/* Blue Circular Gradient Halo (centered behind image) */}
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] h-[280px] sm:h-[340px] md:h-[400px] lg:h-[560px] 
    rounded-full border-8 border-transparent 
    bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 
    bg-clip-border blur-md opacity-30"
                    />

                    {/* Animated square/rounded frame (kept different for contrast) */}
                    {/* Animated square/rounded frame (contrast shape) */}
                    <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="
    absolute 
    -top-4 -left-4 sm:-top-6 sm:-left-6 md:-top-8 md:-left-8
    w-40 sm:w-48 md:w-60 lg:w-72 
    h-40 sm:h-48 md:h-60 lg:h-72 
    rounded-3xl border-4 border-primary opacity-30
  "
                    />

                    {/* Animated circular frame */}
                    <motion.div
                        animate={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="
    absolute 
    -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8
    w-40 sm:w-52 md:w-64 lg:w-80 
    h-40 sm:h-52 md:h-64 lg:h-80 
    rounded-full border-2 border-pink-400 opacity-40
  "
                    />


                    {/* Circular Image */}
                    <div className="relative z-10">
                        <Image
                            src={allImages.drMojahid}
                            alt="Dr. Mojahid Veterinary Clinic"
                            priority
                            className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[380px] h-auto rounded-full object-cover"
                        />
                    </div>
                </motion.div>


            </div>
        </main>
    )
}
