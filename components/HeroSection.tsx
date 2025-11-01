'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
})

export default function HeroSection() {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleBookMeeting = () => {
    // Placeholder for Calendly
    window.open('https://calendly.com', '_blank')
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We Build{' '}
            <span className="gradient-text">3D-Powered</span>
            <br />
            Websites That Convert.
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Modern, high-performance websites using Next.js, React, and Three.js.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            onClick={handleScrollToContact}
            className="glass-button px-8 py-4 rounded-full text-lg font-semibold w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>

          <motion.button
            onClick={handleBookMeeting}
            className="glass-button px-8 py-4 rounded-full text-lg font-semibold w-full sm:w-auto border-neon-purple"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Meeting
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              className="w-6 h-6 text-neon-blue"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg pointer-events-none"></div>
    </section>
  )
}
