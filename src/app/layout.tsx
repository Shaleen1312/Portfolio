import './globals.css'
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/context/ThemeContext'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Shaleen Chhabra - AI & Automation Engineer',
  description: 'AI & Automation Engineer at Scoreme Solutions, building agentic AI systems and full-stack web applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`dark ${inter.className} ${poppins.className} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="bg-background-light dark:bg-background-dark text-text-primary-light dark:text-text-primary-dark transition-colors">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col">
            <div className="flex-1">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
