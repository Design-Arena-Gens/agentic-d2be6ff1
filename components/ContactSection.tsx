'use client'

import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full min-h-screen flex items-center justify-center py-20 px-6">
      <div className="max-w-4xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="gradient-text">Build Together</span>
          </h2>
          <p className="text-xl text-gray-300">
            Ready to transform your digital presence? Get in touch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-button p-8 md:p-12 rounded-2xl"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-blue transition-colors"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-neon-blue transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <motion.button
              type="submit"
              className="glass-button w-full py-4 rounded-lg text-lg font-semibold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-400"
        >
          <p>© 2025 LoopXweb. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}
