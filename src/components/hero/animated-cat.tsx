"use client"

import React from "react"
import { motion } from "framer-motion"

export default function SmallAnimatedCat() {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -2, 0] }} // subtle breathing
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-24" // smaller container
        >
            {/* Cat body */}
            <div className="absolute bottom-0 w-24 h-14 bg-orange-400 rounded-t-full rounded-b-3xl shadow-md" />

            {/* Front paws */}
            <div className="absolute bottom-0 left-2 w-5 h-4 bg-orange-400 rounded-full shadow-inner"></div>
            <div className="absolute bottom-0 right-2 w-5 h-4 bg-orange-400 rounded-full shadow-inner"></div>

            {/* Head */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-orange-400 rounded-full shadow-md border-2 border-white">
                {/* Ears */}
                <div className="absolute -top-1 left-2 w-4 h-4 bg-orange-400 rotate-45 rounded-sm shadow-sm"></div>
                <div className="absolute -top-1 right-2 w-4 h-4 bg-orange-400 rotate-45 rounded-sm shadow-sm"></div>

                {/* Eyes */}
                <motion.div
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 + Math.random() * 2 }}
                    className="absolute top-5 left-2 w-2 h-3 bg-black rounded-full"
                />
                <motion.div
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 + Math.random() * 2 }}
                    className="absolute top-5 right-2 w-2 h-3 bg-black rounded-full"
                />

                {/* Nose */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2 h-2 bg-pink-500 rounded-full"></div>

                {/* Whiskers */}
                <div className="absolute top-8 left-1 w-4 h-[1px] bg-gray-700"></div>
                <div className="absolute top-9 left-1 w-4 h-[1px] bg-gray-700"></div>
                <div className="absolute top-8 right-1 w-4 h-[1px] bg-gray-700"></div>
                <div className="absolute top-9 right-1 w-4 h-[1px] bg-gray-700"></div>
            </div>

            {/* Tail */}
            <motion.div
                animate={{ rotate: [10, -20, 15, -15, 10] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-5 -right-2 w-10 h-3 bg-orange-400 rounded-full origin-left shadow-md"
            />
        </motion.div>
    )
}
