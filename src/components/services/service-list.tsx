"use client"

import React from "react"
import { motion, Variants } from "framer-motion"
import { cubicBezier } from "framer-motion"

import {
  Stethoscope,
  Syringe,
  Smile,
  Scissors,
  Ambulance,
  Apple,
  Bath,
} from "lucide-react"

type Service = {
  title: string
  desc: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color: string
}

const SERVICES: Service[] = [
  {
    title: "Wellness Examinations",
    desc: "Routine check-ups and preventive care to keep pets healthy.",
    Icon: Stethoscope,
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Vaccinations",
    desc: "Core immunizations to protect against common diseases.",
    Icon: Syringe,
    color: "text-green-600 dark:text-green-400",
  },
  {
    title: "Dental Care",
    desc: "Professional cleanings and oral health assessments.",
    Icon: Smile,
    color: "text-yellow-600 dark:text-yellow-400",
  },
  {
    title: "Surgery",
    desc: "Safe, effective procedures with high standards.",
    Icon: Scissors,
    color: "text-red-600 dark:text-red-400",
  },
  {
    title: "Emergency Care",
    desc: "Prompt and compassionate urgent support.",
    Icon: Ambulance,
    color: "text-pink-600 dark:text-pink-400",
  },
  {
    title: "Nutritional Counseling",
    desc: "Diet guidance for a healthy weight and lifestyle.",
    Icon: Apple,
    color: "text-lime-600 dark:text-lime-400",
  },
  {
    title: "Grooming Services",
    desc: "Bathing, grooming, and hygiene for comfort and health.",
    Icon: Bath,
    color: "text-cyan-600 dark:text-cyan-400",
  },
]

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const card = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
}

export default function ServiceList() {
  return (
    <section
      id="services"
      className="relative py-14 sm:py-16 md:py-20 dark:bg-gray-950 bg-white overflow-x-hidden"
    >
      {/* Background accents */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 12, -12, 0], y: [0, -6, 6, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-0 left-0 h-60 w-60 rounded-full bg-pink-400/20 blur-3xl -translate-x-1/3 -translate-y-1/3"
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -10, 10, 0], y: [0, 8, -8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-0 right-0 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl translate-x-1/3 translate-y-1/3"
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-10">
          <h2 className="font-bebas-neue text-4xl sm:text-5xl md:text-6xl tracking-tight text-gray-900 dark:text-white">
            Services We Offer
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Compassionate, expert care for pets and livestock—guided by faith and medical ethics.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:gap-6 md:gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
        >
          {SERVICES.map(({ title, desc, Icon, color }, i) => (
            <motion.div
              key={title}
              variants={card}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/60 dark:border-white/10 bg-white/70 dark:bg-gray-900/60 backdrop-blur-sm p-4 sm:p-5 transition hover:shadow-xl hover:-translate-y-0.5"
            >
              {/* Hover effects */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-2 group-hover:ring-pink-500/30 transition" />
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 bg-gradient-to-r from-pink-500/10 via-indigo-500/10 to-cyan-500/10 group-hover:opacity-100 transition" />

              {/* Content */}
              <div className="relative z-10 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/15 via-indigo-500/15 to-cyan-500/15 ring-1 ring-gray-200/70 dark:ring-white/10 transition group-hover:scale-105">
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm sm:text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                    {desc}
                  </p>
                </div>
              </div>

              {/* Accent bar */}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.05 * i,
                  ease: cubicBezier(0.22, 1, 0.36, 1),
                }}
                className="absolute bottom-0 left-0 h-1 w-full origin-left bg-gradient-to-r from-pink-500 via-indigo-500 to-cyan-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
