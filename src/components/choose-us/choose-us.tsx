"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
    HeartHandshake,
    Stethoscope,
    Home,
    Activity,
    AlertTriangle,
    ShieldCheck,
} from "lucide-react"

// Mixed pet images (cats, dogs, birds, rabbits, etc.)
const petImages = [
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=800&q=80", // dog
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80", // cat
    "https://images.unsplash.com/photo-1552728089-57bdde30beb3?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // parrot
    "https://images.unsplash.com/photo-1561948955-570b270e7c36?auto=format&fit=crop&w=800&q=80", // kitten
    "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80", // rabbit
    "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=712&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // goldfish
    "https://images.unsplash.com/photo-1721327900411-b315dce4388e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // hamster
    "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=800&q=80", // puppy
    "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Rabbit
    "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=788&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Cow
]

// Each point with its own icon & color
const points = [
    {
        text: "Personalized care tailored to each pet's unique needs",
        icon: HeartHandshake,
        colors: "from-pink-500 to-rose-400",
    },
    {
        text: "Experienced team that values the human-animal bond",
        icon: Stethoscope,
        colors: "from-blue-500 to-cyan-400",
    },
    {
        text: "Stress-free, welcoming clinic environment",
        icon: Home,
        colors: "from-green-500 to-emerald-400",
    },
    {
        text: "State-of-the-art medical equipment & facilities",
        icon: Activity,
        colors: "from-purple-500 to-violet-400",
    },
    {
        text: "Emergency care available for urgent situations",
        icon: AlertTriangle,
        colors: "from-red-500 to-orange-400",
    },
    {
        text: "Preventive health programs for long, happy lives",
        icon: ShieldCheck,
        colors: "from-yellow-500 to-amber-400",
    },
]

export default function WhyChooseUs() {
    return (
        <section className="relative py-16 sm:py-20 bg-white dark:bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-14"
                >
                    Why Choose Us?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start p-2">

                    {/* Left - Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="rounded-2xl overflow-hidden shadow-lg"
                    >
                        <div className="columns-2 sm:columns-4 gap-4">
                            {petImages.map((src, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.05,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="overflow-hidden rounded-xl shadow-md mb-4 break-inside-avoid"
                                >
                                    <Image
                                        src={src}
                                        alt={`Pet ${i + 1}`}
                                        width={500}
                                        height={500}
                                        className="object-cover w-full h-full"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Points */}
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            hidden: {},
                            show: { transition: { staggerChildren: 0.12 } },
                        }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                    >
                        {points.map((point, i) => {
                            const Icon = point.icon
                            return (
                                <motion.div
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 30 },
                                        show: {
                                            opacity: 1,
                                            y: 0,
                                            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                                        },
                                    }}
                                    whileHover={{ scale: 1.03, y: -3 }}
                                    className="flex items-start gap-4 p-5 rounded-2xl shadow-md bg-gradient-to-tr from-pink-50 to-white dark:from-gray-800 dark:to-gray-900 transition-all"
                                >
                                    {/* Icon with gradient background */}
                                    <div
                                        className={`flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-tr ${point.colors} text-white shadow-lg shrink-0`}
                                    >
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    {/* Text */}
                                    <p className="text-gray-800 dark:text-white text-base sm:text-lg leading-snug">
                                        {point.text}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
