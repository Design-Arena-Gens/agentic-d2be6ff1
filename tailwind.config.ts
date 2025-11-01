import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0B0B0C',
        'neon-blue': '#00D9FF',
        'neon-purple': '#B537FF',
      },
      fontFamily: {
        'space': ['"Space Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
