import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SEOHead from './components/SEOHead'
import AIChatbot from './components/AIChatbot'
import { ThemeProvider } from './contexts/ThemeContext'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://erencanacioglu.com'),
  title: { default: 'Erencan Acıoğlu', template: '%s | Erencan Acıoğlu' },
  description: 'Merhaba, ben Erencan Acıoğlu. Full Stack Developer. Projelerim ve iletişim bilgilerim burada.',
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://erencanacioglu.com',
    siteName: 'Erencan Acıoğlu',
    title: 'Erencan Acıoğlu | Full Stack Developer',
    description: 'Portfolyo, projeler ve iletişim.',
    images: ['/og.jpg']
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erencan Acıoğlu | Full Stack Developer',
    description: 'Portfolyo, projeler ve iletişim.',
    images: ['/og.jpg']
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Erencan Acıoğlu",
              "givenName": "Erencan",
              "familyName": "Acıoğlu",
              "alternateName": ["Erencan", "Acioglu", "Erencan Acioglu"],
              "url": "https://erencanacioglu.com",
              "image": "https://erencanacioglu.com/profile.jpg",
              "jobTitle": "Full Stack Developer",
              "worksFor": { "@type": "Organization", "name": "YoourCargo" },
              "sameAs": [
                "https://www.linkedin.com/in/erencanacioglu",
                "https://github.com/erencanacioglu",
                "https://instagram.com/erencanacioglu"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="relative min-h-screen transition-all duration-500" style={{
            background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)',
            color: 'var(--text-primary)'
          }}>
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
            <AIChatbot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
