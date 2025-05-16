import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Book } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daily Bible Verse",
  description: "A new Bible verse every day for inspiration and reflection",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b bg-white">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Book className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Daily Bible Verse</span>
            </Link>
            <nav>
              <ul className="flex gap-6">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Today
                  </Link>
                </li>
                <li>
                  <Link href="/archive" className="hover:text-primary transition-colors">
                    Archive
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
