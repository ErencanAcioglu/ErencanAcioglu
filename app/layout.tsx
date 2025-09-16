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
  title: 'Erencan Acıoğlu - Full Stack Developer | Web, Mobile & AI Expert',
  description: 'Erencan Acıoğlu - Full Stack Developer specializing in web, mobile, and AI technologies. Building innovative applications with React, Node.js, Python, Unity, and modern development tools. Based in Istanbul, Turkey.',
  keywords: ['Erencan Acıoğlu', 'Erencan Acioglu', 'Full Stack Developer', 'React Developer', 'Node.js Developer', 'Python Developer', 'AI Developer', 'Web Development', 'Mobile Development', 'Game Development', 'Machine Learning', 'TypeScript', 'Next.js', 'Unity Developer', 'Software Engineer', 'Istanbul Developer', 'Turkey Developer'],
  authors: [{ name: 'Erencan Acıoğlu', url: 'https://erencanacioglu.com' }],
  creator: 'Erencan Acıoğlu',
  publisher: 'Erencan Acıoğlu',
  applicationName: 'Erencan Acıoğlu Portfolio',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' }
    ],
    shortcut: '/favicon.png',
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://erencanacioglu.com',
    siteName: 'Erencan Acıoğlu Portfolio',
    title: 'Erencan Acıoğlu - Full Stack Developer | Web, Mobile & AI Expert',
    description: 'Full Stack Developer specializing in web, mobile, and AI technologies. Building innovative applications with React, Node.js, Python, Unity, and modern development tools.',
    images: [
      {
        url: 'https://erencanacioglu.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Erencan Acıoğlu - Full Stack Developer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@erencanacioglu',
    creator: '@erencanacioglu',
    title: 'Erencan Acıoğlu - Full Stack Developer | Web, Mobile & AI Expert',
    description: 'Full Stack Developer specializing in web, mobile, and AI technologies. Building innovative applications with React, Node.js, Python, Unity, and modern development tools.',
    images: ['https://erencanacioglu.com/logo.png'],
  },
  alternates: {
    canonical: 'https://erencanacioglu.com',
    languages: {
      'tr-TR': 'https://erencanacioglu.com',
      'en-US': 'https://erencanacioglu.com/en',
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
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
