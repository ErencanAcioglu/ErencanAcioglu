import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Erencan Acıoğlu - Full Stack Developer',
  description: 'Full Stack Developer specializing in web, mobile, and AI technologies. Building innovative applications with React, Node.js, Python, Unity, and modern development tools.',
  keywords: ['Erencan Acıoğlu', 'Full Stack Developer', 'React', 'Node.js', 'Python', 'AI', 'Web Development', 'Software Engineer', 'Mobile Development', 'Game Development', 'Machine Learning', 'TypeScript', 'Next.js'],
  authors: [{ name: 'Erencan Acıoğlu', url: 'https://erencanacioglu.com' }],
  creator: 'Erencan Acıoğlu',
  publisher: 'Erencan Acıoğlu',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Erencan Acıoğlu - Full Stack Developer',
    description: 'Full Stack Developer specializing in web, mobile, and AI technologies',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://erencanacioglu.vercel.app',
    siteName: 'Erencan Acıoğlu Portfolio',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Erencan Acıoğlu - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erencan Acıoğlu - Full Stack Developer',
    description: 'Full Stack Developer specializing in web, mobile, and AI technologies',
    images: ['/logo.svg'],
  },
  alternates: {
    canonical: 'https://erencanacioglu.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <SEOHead />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white antialiased`}>
        <div className="relative min-h-screen">
          {/* Background Effects */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-300/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>

          <Navbar />
          <main className="relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
