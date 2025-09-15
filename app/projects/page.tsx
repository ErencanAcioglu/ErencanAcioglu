'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  ExternalLink, 
  Github, 
  Code, 
  Database, 
  Brain, 
  Gamepad2, 
  Globe, 
  Smartphone,
  Filter,
  Search,
  Star,
  Calendar,
  Users,
  TrendingUp
} from 'lucide-react'

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const projects = [
    {
      id: 1,
      title: 'Enterprise E-Commerce Platform',
      description: 'Büyük ölçekli e-ticaret platformu - Mikroservis mimarisi, AI destekli ürün önerileri, gerçek zamanlı stok yönetimi ve advanced analytics dashboard ile enterprise seviyede e-ticaret çözümü.',
      longDescription: 'Modern e-ticaret ihtiyaçlarını karşılayan enterprise seviyede platform. Mikroservis mimarisi, AI/ML entegrasyonları ve scalable infrastructure ile yüksek performanslı çözüm.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'OpenAI API'],
      category: 'web',
      type: 'Enterprise E-Commerce Platform',
      status: 'Live',
      year: '2024',
      duration: '6 months',
      team: 'Lead Developer',
      features: [
        'Mikroservis mimarisi ile scalable backend',
        'AI destekli ürün önerileri ve arama',
        'Gerçek zamanlı stok ve sipariş yönetimi',
        'Advanced analytics ve raporlama',
        'Multi-vendor marketplace desteği',
        'Progressive Web App (PWA) özellikleri'
      ],
      challenges: [
        'Mikroservis mimarisinin tasarımı ve implementasyonu',
        'AI/ML algoritmaları ile personalizasyon',
        'High-traffic load balancing ve performance optimization'
      ],
      gradient: 'from-blue-500 to-purple-600',
      featured: true
    },
    {
      id: 2,
      title: 'Real-Time Analytics Dashboard',
      description: 'Enterprise seviyede real-time analytics ve business intelligence platformu. WebSocket tabanlı canlı veri akışı, machine learning destekli trend analizi ve interactive data visualization ile comprehensive BI çözümü.',
      longDescription: 'Büyük veri setlerini real-time olarak işleyen ve görselleştiren analytics platformu. Advanced charting, predictive analytics ve custom reporting özellikleri.',
      tech: ['React', 'D3.js', 'Node.js', 'WebSocket', 'MongoDB', 'Python', 'TensorFlow', 'Docker'],
      category: 'ai',
      type: 'Business Intelligence Platform',
      status: 'Live',
      year: '2024',
      duration: '4 months',
      team: 'Senior Developer',
      features: [
        'Real-time data streaming ve processing',
        'Interactive data visualization (D3.js)',
        'Machine learning destekli predictive analytics',
        'Custom dashboard builder',
        'Automated report generation',
        'Multi-tenant architecture'
      ],
      challenges: [
        'Large dataset processing ve optimization',
        'Real-time WebSocket connection management',
        'Complex data visualization performance'
      ],
      gradient: 'from-green-500 to-teal-600',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud-Native Microservices Architecture',
      description: 'Kubernetes tabanlı cloud-native mikroservis platformu. Docker containerization, service mesh, API gateway, distributed caching ve comprehensive monitoring ile enterprise-grade scalable architecture.',
      longDescription: 'Modern cloud teknolojileri ile geliştirilmiş mikroservis mimarisi. Auto-scaling, fault tolerance ve high availability özellikleri ile production-ready infrastructure.',
      tech: ['Kubernetes', 'Docker', 'Node.js', 'Go', 'Redis', 'PostgreSQL', 'Istio', 'Prometheus'],
      category: 'web',
      type: 'Cloud Infrastructure Platform',
      status: 'Live',
      year: '2024',
      duration: '5 months',
      team: 'Technical Lead',
      features: [
        'Kubernetes orchestration ve auto-scaling',
        'Service mesh ile inter-service communication',
        'API Gateway ve rate limiting',
        'Distributed caching ve session management',
        'Comprehensive monitoring ve alerting',
        'CI/CD pipeline automation'
      ],
      challenges: [
        'Mikroservis mimarisinin kompleksitesi',
        'Service discovery ve load balancing',
        'Distributed system debugging ve monitoring'
      ],
      gradient: 'from-purple-500 to-pink-600',
      featured: true
    },
    {
      id: 4,
      title: 'AI-Powered Content Management System',
      description: 'Next-generation CMS platformu - AI destekli content generation, automatic SEO optimization, smart media management ve headless architecture ile modern content yönetim çözümü.',
      longDescription: 'Yapay zeka teknolojileri ile güçlendirilmiş modern CMS. Automatic content optimization, smart tagging ve multi-channel publishing özellikleri.',
      tech: ['Next.js', 'Strapi', 'OpenAI API', 'PostgreSQL', 'AWS S3', 'Elasticsearch', 'GraphQL'],
      category: 'ai',
      type: 'AI-Enhanced CMS Platform',
      status: 'Live',
      year: '2024',
      duration: '4 months',
      team: 'Lead Developer',
      features: [
        'AI-powered content generation ve optimization',
        'Automatic SEO meta generation',
        'Smart media tagging ve organization',
        'Headless architecture ile multi-channel publishing',
        'Advanced search ve filtering (Elasticsearch)',
        'Real-time collaboration tools'
      ],
      challenges: [
        'AI model entegrasyonu ve fine-tuning',
        'Large-scale media processing ve optimization',
        'Complex content workflow management'
      ],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      id: 5,
      title: 'Blockchain-Based Supply Chain Platform',
      description: 'Ethereum blockchain tabanlı supply chain tracking platformu. Smart contracts, NFT-based product authentication, real-time tracking ve transparency özellikleri ile modern tedarik zinciri çözümü.',
      longDescription: 'Blockchain teknolojisi ile şeffaf ve güvenilir supply chain yönetimi. Smart contracts ve distributed ledger ile product authenticity ve traceability sağlıyor.',
      tech: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'IPFS', 'Node.js', 'MongoDB'],
      category: 'web',
      type: 'Blockchain Supply Chain Platform',
      status: 'Live',
      year: '2024',
      duration: '3 months',
      team: 'Blockchain Developer',
      features: [
        'Smart contract tabanlı product tracking',
        'NFT-based product authentication',
        'Immutable transaction records',
        'Real-time supply chain visibility',
        'Multi-stakeholder dashboard',
        'Automated compliance reporting'
      ],
      challenges: [
        'Smart contract security ve optimization',
        'Blockchain scalability issues',
        'Complex business logic implementation'
      ],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 6,
      title: 'Progressive Web Application Suite',
      description: 'Cross-platform PWA framework - Service workers, offline functionality, push notifications, app shell architecture ve native-like performance ile modern web app development suite.',
      longDescription: 'Modern PWA teknolojileri ile native app deneyimi sunan web uygulaması. Offline-first architecture ve advanced caching strategies ile superior user experience.',
      tech: ['React', 'TypeScript', 'Service Workers', 'IndexedDB', 'WebAssembly', 'Workbox'],
      category: 'web',
      type: 'Progressive Web Application',
      status: 'Live',
      year: '2024',
      duration: '3 months',
      team: 'PWA Specialist',
      features: [
        'Service Worker tabanlı offline functionality',
        'Advanced caching strategies ve sync',
        'Push notifications ve background sync',
        'App shell architecture ile fast loading',
        'WebAssembly integration for performance',
        'Cross-platform native-like experience'
      ],
      challenges: [
        'Complex offline data synchronization',
        'Service Worker lifecycle management',
        'Cross-browser PWA compatibility'
      ],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 7,
      title: 'Machine Learning Model Deployment Platform',
      description: 'MLOps platformu - Automated model training, deployment pipeline, A/B testing, model monitoring ve scalable inference API ile end-to-end machine learning lifecycle management.',
      longDescription: 'Production-ready ML model deployment ve management platformu. Automated CI/CD, model versioning, performance monitoring ve scalable inference infrastructure.',
      tech: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'MLflow', 'PostgreSQL', 'Redis', 'Prometheus'],
      category: 'ai',
      type: 'MLOps Platform',
      status: 'Live',
      year: '2024',
      duration: '4 months',
      team: 'ML Engineer',
      features: [
        'Automated model training ve deployment pipeline',
        'Model versioning ve experiment tracking',
        'A/B testing framework for model comparison',
        'Real-time model performance monitoring',
        'Scalable inference API ve load balancing',
        'Automated rollback ve canary deployments'
      ],
      challenges: [
        'Complex ML pipeline orchestration',
        'Model performance monitoring ve drift detection',
        'Scalable inference infrastructure design'
      ],
      gradient: 'from-emerald-500 to-green-600'
    }
  ]

  const categories = [
    { id: 'all', label: 'Tüm Projeler', icon: Code },
    { id: 'web', label: 'Web Development', icon: Globe },
    { id: 'ai', label: 'AI & Data', icon: Brain },
    { id: 'game', label: 'Game Development', icon: Gamepad2 },
    { id: 'mobile', label: 'Mobile Apps', icon: Smartphone }
  ]

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredProjects = projects.filter(project => project.featured)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500/20 text-green-300 border-green-500/30'
      case 'In Development': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
      case 'Completed': return 'bg-blue-500/20 text-blue-300 border-blue-500/30'
      default: return 'bg-gray-500/20 text-gray-300 border-gray-500/30'
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Projelerim</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Modern teknolojilerle geliştirdiğim web uygulamaları, AI projeleri ve oyunlar. 
            Her proje, öğrenme ve büyüme yolculuğumun bir parçası.
          </p>

          {/* Key Focus Areas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center glass rounded-xl p-4">
              <div className="text-2xl font-bold text-primary-400 mb-2">Enterprise</div>
              <div className="text-gray-400">Scalable Solutions</div>
            </div>
            <div className="text-center glass rounded-xl p-4">
              <div className="text-2xl font-bold text-green-400 mb-2">AI/ML</div>
              <div className="text-gray-400">Integration</div>
            </div>
            <div className="text-center glass rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-400 mb-2">Cloud</div>
              <div className="text-gray-400">Architecture</div>
            </div>
            <div className="text-center glass rounded-xl p-4">
              <div className="text-2xl font-bold text-orange-400 mb-2">Full-Stack</div>
              <div className="text-gray-400">Development</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            <Star className="w-8 h-8 text-yellow-400 inline-block mr-3" />
            Öne Çıkan Projeler
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className={`glass rounded-3xl p-6 card-hover ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className={`w-full h-3 bg-gradient-to-r ${project.gradient} rounded-full mb-6`} />
                
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-medium border rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-gray-400 text-sm">{project.year}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium bg-dark-700 text-primary-300 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2 py-1 text-xs font-medium bg-dark-600 text-gray-400 rounded">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="px-3 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Filters and Search */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveFilter(category.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        activeFilter === category.id
                          ? 'bg-primary-500 text-white'
                          : 'bg-dark-800 text-gray-300 hover:bg-primary-500/10 hover:text-primary-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{category.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Proje ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full lg:w-80"
                />
              </div>
            </div>

            {/* Results Count */}
            <div className="mt-6 text-gray-400 text-sm">
              {filteredProjects.length} proje bulundu
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="glass rounded-2xl p-6 card-hover group">
                <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-6`} />
                
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-medium border rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-3">{project.type}</p>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-6">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs font-medium bg-dark-700 text-primary-300 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs font-medium bg-dark-600 text-gray-400 rounded">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="px-2 py-1 text-xs font-medium bg-dark-700 text-primary-300 rounded">
                      {project.team}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-400 text-xs">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proje bulunamadı</h3>
              <p className="text-gray-400 mb-6">Arama kriterlerinizi değiştirerek tekrar deneyin.</p>
              <button
                onClick={() => {
                  setActiveFilter('all')
                  setSearchTerm('')
                }}
                className="btn-primary"
              >
                Filtreleri Temizle
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-900/20 to-primary-800/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Birlikte Yeni Projeler <span className="gradient-text">Yapalım!</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Bu projelerden ilham aldınız mı? Sizin de harika bir fikriniz varsa, 
            birlikte gerçeğe dönüştürelim!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              <span>Proje Önerisi Gönder</span>
              <ExternalLink className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/about" className="btn-secondary">
              <span>Yeteneklerimi Keşfet</span>
              <Code className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage
