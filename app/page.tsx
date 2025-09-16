'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { 
  Code, 
  Rocket, 
  Brain, 
  Gamepad2, 
  Database, 
  Server,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Zap,
  Coffee,
  Star,
  Smartphone
} from 'lucide-react'

const HomePage = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const roles = [
    'Full Stack Developer',
    'Mobile App Developer', 
    'AI & ML Enthusiast',
    'Game Developer',
    'Tech Innovator'
  ]

  const skills = [
    { name: 'JavaScript & TypeScript', icon: Code, color: 'from-blue-400 to-blue-600' },
    { name: 'React & Next.js', icon: Code, color: 'from-cyan-400 to-cyan-600' },
    { name: 'Node.js & Python', icon: Server, color: 'from-green-400 to-green-600' },
    { name: 'Mobile Development', icon: Smartphone, color: 'from-purple-400 to-purple-600' },
    { name: 'AI & Machine Learning', icon: Brain, color: 'from-pink-400 to-pink-600' },
    { name: 'Database & Cloud', icon: Database, color: 'from-yellow-400 to-yellow-600' }
  ]

  const stats = [
    { label: 'Years Experience', value: '3+', icon: Zap },
    { label: 'Projects Completed', value: '25+', icon: Code },
    { label: 'Technologies Mastered', value: '15+', icon: Star },
    { label: 'Coffee Consumed', value: '1000+', icon: Coffee }
  ]

  const featuredProjects = [
    {
      title: 'YoourCargo',
      description: 'Modern lojistik platformu - Kargo takibi, maliyet yönetimi ve dijital dokümantasyon',
      tech: ['ASP.NET Core', 'React', 'MSSQL', 'SCSS'],
      link: 'https://youourcargo.com',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'AI-Powered ERP System',
      description: 'Frappe tabanlı ERP sisteminden veri analizi ve görselleştirme için AI destekli araç',
      tech: ['FastAPI', 'Pandas', 'React', 'Metabase'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'TUAS Web Platform',
      description: 'TUAS Teknoloji için responsive UI bileşenleri ve dinamik içerik modülleri',
      tech: ['.NET 6', 'ASP.NET Core', 'React', 'PostgreSQL'],
      link: 'https://tuas.com.tr',
      gradient: 'from-orange-500 to-red-600'
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold">
                <span className="block text-white mb-2">Merhaba, Ben</span>
                <span className="block gradient-text" itemProp="name">Erencan Acıoğlu</span>
              </h1>
              
              {/* Dynamic Role */}
              <div className="h-16 flex items-center justify-center">
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light">
                  <span className="typewriter text-primary-400 font-semibold">
                    {roles[currentRole]}
                  </span>
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed" itemProp="description">
              <span className="text-primary-400 font-semibold" itemProp="jobTitle">Full Stack Developer</span> olarak 
              <span className="text-primary-400 font-semibold"> web, mobile ve AI</span> teknolojileriyle 
              modern uygulamalar geliştiriyorum. <span className="text-primary-400 font-semibold">React, Node.js, Python, Unity</span> ve 
              <span className="text-primary-400 font-semibold"> machine learning</span> konusunda deneyimliyim. 
              <span className="text-primary-400 font-semibold">Full-stack çözümler</span> ve <span className="text-primary-400 font-semibold">yaratıcı projeler</span> üretiyorum.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Link href="/projects" className="btn-primary group">
                <span>Projelerimi Keşfet</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link href="/contact" className="btn-secondary group">
                <span>İletişime Geç</span>
                <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6 mt-8">
              <Link 
                href="https://github.com/erencanacioglu" 
                target="_blank"
                className="p-3 rounded-full bg-dark-800 text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300 hover:scale-110 glow-hover"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link 
                href="https://linkedin.com/in/erencanacioglu" 
                target="_blank"
                className="p-3 rounded-full bg-dark-800 text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 hover:scale-110 glow-hover"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link 
                href="mailto:erencanacioglu@gmail.com"
                className="p-3 rounded-full bg-dark-800 text-gray-400 hover:text-white hover:bg-green-600 transition-all duration-300 hover:scale-110 glow-hover"
              >
                <Mail className="w-6 h-6" />
              </Link>
              <a 
                href="/api/cv" 
                className="p-3 rounded-full bg-dark-800 text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300 hover:scale-110 glow-hover"
              >
                <Download className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <ChevronDown className="w-8 h-8 text-primary-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-label="Statistics">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30" aria-label="Skills">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Teknik <span className="gradient-text">Yeteneklerim</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Modern teknolojiler ve araçlarla güçlü çözümler geliştiriyorum
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div key={index} className="glass rounded-2xl p-6 card-hover text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                  <div className={`w-full h-1 bg-gradient-to-r ${skill.color} rounded-full opacity-60`} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" aria-label="Featured Projects">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Öne Çıkan <span className="gradient-text">Projelerim</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Gerçek dünya problemlerine teknolojik çözümler üretiyorum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="glass rounded-2xl p-6 card-hover group">
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-6`} />
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs font-medium bg-dark-700 text-primary-300 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {project.link && (
                  <Link 
                    href={project.link} 
                    target="_blank"
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium group"
                  >
                    <span>Projeyi Görüntüle</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/projects" 
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              <span>Tüm Projelerimi Görüntüle</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-900/20 to-primary-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Birlikte Harika Projeler <span className="gradient-text">Yapalım!</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Yeni bir proje mi planlıyorsunuz? Modern teknolojilerle hayalinizdeki uygulamayı gerçeğe dönüştürelim.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              <span>Projeni Konuşalım</span>
              <Mail className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/about" className="btn-secondary">
              <span>Daha Fazla Bilgi</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
