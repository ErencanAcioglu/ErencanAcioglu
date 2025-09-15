'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail, Heart, Code, Coffee } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      href: 'https://github.com/erencanacioglu',
      icon: Github,
      label: 'GitHub',
      color: 'hover:text-gray-300'
    },
    {
      href: 'https://linkedin.com/in/erencanacioglu',
      icon: Linkedin,
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      href: 'mailto:erencanacioglu8@gmail.com',
      icon: Mail,
      label: 'Email',
      color: 'hover:text-primary-400'
    }
  ]

  const quickLinks = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/about', label: 'Hakkımda' },
    { href: '/projects', label: 'Projeler' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'İletişim' }
  ]

  return (
    <footer className="relative bg-dark-900/50 backdrop-blur-lg border-t border-dark-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">
                Erencan Acıoğlu
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Full Stack Developer olarak web, mobile ve AI teknolojileri ile 
              modern ve yaratıcı uygulamalar geliştiriyorum.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-lg bg-dark-800 text-gray-400 transition-all duration-300 hover:scale-110 ${link.color}`}
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Hızlı Linkler</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-gray-400 hover:text-primary-400 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Python', 'TypeScript', 'Next.js', 'Unity', 'AI/ML', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-dark-800 text-primary-400 rounded-full border border-primary-400/20 hover:bg-primary-400/10 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="mt-6 p-4 bg-dark-800/50 rounded-lg border border-dark-700">
              <div className="flex items-center space-x-2 text-gray-400">
                <Coffee className="w-4 h-4" />
                <span className="text-sm">Kahve ile kodlanan projeler</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} Erencan Acıoğlu.</span>
              <span>Tüm hakları saklıdır.</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and</span>
              <Code className="w-4 h-4 text-primary-400" />
              <span>in Istanbul</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-20 w-32 h-32 bg-primary-400/5 rounded-full blur-2xl"></div>
      </div>
    </footer>
  )
}

export default Footer
