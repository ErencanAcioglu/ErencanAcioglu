'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Coffee,
  Calendar,
  Briefcase,
  Code,
  Heart,
  Zap,
  Globe
} from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: '',
    budget: '',
    timeline: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const contactInfo = {
    email: 'erencanacioglu8@gmail.com',
    phone: '+90 (505) 481 3545',
    location: 'Istanbul, Turkey',
    linkedin: 'https://linkedin.com/in/erencanacioglu',
    github: 'https://github.com/erencanacioglu',
    availability: 'Freelance projeler için müsait',
    responseTime: '24 saat içinde yanıt'
  }

  const services = [
    {
      title: 'Web Development',
      description: 'Modern web uygulamaları ve responsive websiteler',
      icon: Globe,
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'AI Integration',
      description: 'Yapay zeka destekli çözümler ve chatbot geliştirme',
      icon: Zap,
      technologies: ['OpenAI API', 'Machine Learning', 'Python', 'FastAPI'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Full-Stack Solutions',
      description: 'End-to-end uygulama geliştirme ve sistem entegrasyonu',
      icon: Code,
      technologies: ['React', '.NET', 'PostgreSQL', 'Docker'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Game Development',
      description: 'Unity ile 2D/3D oyun geliştirme ve interaktif uygulamalar',
      icon: Coffee,
      technologies: ['Unity', 'C#', '3D Modeling', 'Game Design'],
      color: 'from-orange-500 to-red-600'
    }
  ]

  const projectTypes = [
    'Web Uygulaması',
    'E-ticaret Sitesi',
    'Kurumsal Website',
    'AI Entegrasyonu',
    'Mobil Uygulama',
    'Oyun Geliştirme',
    'API Geliştirme',
    'Diğer'
  ]

  const budgetRanges = [
    '$1,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+',
    'Bütçe belirsiz'
  ]

  const timelineOptions = [
    '1-2 hafta',
    '1 ay',
    '2-3 ay',
    '3-6 ay',
    '6+ ay',
    'Esnek'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          projectType: '',
          budget: '',
          timeline: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">İletişim</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Yeni bir proje mi planlıyorsunuz? Birlikte harika bir şeyler yaratmak için 
            benimle iletişime geçin. Her türlü sorunuz ve öneriniz için buradayım.
          </p>

          {/* Quick Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="glass rounded-2xl p-6 text-center">
              <Mail className="w-8 h-8 text-primary-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">E-posta</h3>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <Phone className="w-8 h-8 text-primary-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
              <a 
                href={`tel:${contactInfo.phone}`}
                className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
              >
                {contactInfo.phone}
              </a>
            </div>
            <div className="glass rounded-2xl p-6 text-center">
              <MapPin className="w-8 h-8 text-primary-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Konum</h3>
              <p className="text-gray-300">{contactInfo.location}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass rounded-3xl p-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  Proje <span className="gradient-text">Önerisi</span>
                </h2>
                <p className="text-gray-400 mb-8">
                  Projeniz hakkında detaylı bilgi vererek en uygun çözümü birlikte bulalım.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                        Proje Türü
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Seçiniz</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                        Bütçe Aralığı
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Seçiniz</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                        Zaman Çizelgesi
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Seçiniz</option>
                        {timelineOptions.map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Konu *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      placeholder="Projenizin kısa başlığı"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Projeniz hakkında detaylı bilgi verin. Ne yapmak istiyorsunuz? Hangi özelliklere ihtiyacınız var? Hedef kitleniz kimler?"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Gönderiliyor...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Mesajı Gönder</span>
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-4">
                      <CheckCircle className="w-5 h-5" />
                      <span>Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4">
                      <AlertCircle className="w-5 h-5" />
                      <span>Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Availability */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-green-400" />
                    Müsaitlik Durumu
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">{contactInfo.availability}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-4 h-4 text-primary-400" />
                      <span className="text-gray-300 text-sm">{contactInfo.responseTime}</span>
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2 text-primary-400" />
                    Hizmetlerim
                  </h3>
                  <div className="space-y-4">
                    {services.map((service, index) => {
                      const Icon = service.icon
                      return (
                        <div key={index} className="bg-dark-800/50 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <div className={`w-8 h-8 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <Icon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-semibold text-sm mb-1">{service.title}</h4>
                              <p className="text-gray-400 text-xs mb-2">{service.description}</p>
                              <div className="flex flex-wrap gap-1">
                                {service.technologies.slice(0, 2).map((tech) => (
                                  <span key={tech} className="px-2 py-1 text-xs bg-dark-700 text-gray-300 rounded">
                                    {tech}
                                  </span>
                                ))}
                                {service.technologies.length > 2 && (
                                  <span className="px-2 py-1 text-xs bg-dark-600 text-gray-400 rounded">
                                    +{service.technologies.length - 2}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Social Links */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-primary-400" />
                    Sosyal Medya
                  </h3>
                  <div className="space-y-3">
                    <Link 
                      href={contactInfo.linkedin} 
                      target="_blank"
                      className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 group"
                    >
                      <Linkedin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="text-white font-medium">LinkedIn</div>
                        <div className="text-gray-400 text-sm">Profesyonel ağ</div>
                      </div>
                    </Link>
                    <Link 
                      href={contactInfo.github} 
                      target="_blank"
                      className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg hover:bg-gray-500/10 hover:text-gray-300 transition-all duration-300 group"
                    >
                      <Github className="w-5 h-5 text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="text-white font-medium">GitHub</div>
                        <div className="text-gray-400 text-sm">Kod portföyü</div>
                      </div>
                    </Link>
                    <a 
                      href={`mailto:${contactInfo.email}`}
                      className="flex items-center space-x-3 p-3 bg-dark-800/50 rounded-lg hover:bg-green-500/10 hover:text-green-400 transition-all duration-300 group"
                    >
                      <Mail className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                      <div>
                        <div className="text-white font-medium">E-posta</div>
                        <div className="text-gray-400 text-sm">Direkt iletişim</div>
                      </div>
                    </a>
                  </div>
                </div>

                {/* FAQ */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">
                    💡 Sık Sorulan Sorular
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="text-white font-medium mb-1">Ne kadar sürede yanıt veriyorsunuz?</h4>
                      <p className="text-gray-400">Genellikle 24 saat içinde yanıt veriyorum.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Minimum proje büyüklüğü var mı?</h4>
                      <p className="text-gray-400">Küçük projelerden büyük sistemlere kadar her türlü işle ilgileniyorum.</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Uzaktan çalışabiliyor musunuz?</h4>
                      <p className="text-gray-400">Evet, dünyanın her yerinden müşterilerle uzaktan çalışıyorum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-900/20 to-primary-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Hemen Başlayalım! <span className="gradient-text">Projenizi Konuşalım</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Hayal ettiğiniz projeyi birlikte gerçeğe dönüştürelim. 
            Modern teknolojilerle güçlü çözümler üretmeye hazırım.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={`mailto:${contactInfo.email}`} className="btn-primary">
              <span>Hemen E-posta Gönder</span>
              <Mail className="w-5 h-5 ml-2" />
            </a>
            <Link href="/projects" className="btn-secondary">
              <span>Projelerimi İncele</span>
              <Heart className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
