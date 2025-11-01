import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'LoopXweb - 3D-Powered Websites That Convert',
  description: 'Modern, high-performance websites using Next.js, React, and Three.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
