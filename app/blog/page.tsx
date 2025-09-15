'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Calendar, 
  Clock, 
  Eye, 
  Tag, 
  Search, 
  Filter,
  TrendingUp,
  BookOpen,
  Coffee,
  Code,
  Brain,
  Lightbulb,
  Rocket,
  Heart,
  MessageCircle,
  Share2,
  ArrowRight
} from 'lucide-react'

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Sample blog posts - gerçek uygulamada API'den gelecek
  const blogPosts = [
    {
      id: 1,
      title: 'Modern Web Geliştirmede AI\'nın Rolü ve Geleceği',
      slug: 'modern-web-gelistirmede-ai-nin-rolu',
      excerpt: 'Yapay zeka teknolojilerinin web geliştirme süreçlerine nasıl entegre edilebileceğini, ChatGPT ve GitHub Copilot gibi araçların developer productivity\'ye etkilerini ve AI-powered web uygulamalarının gelecekteki potansiyelini detaylı olarak inceliyoruz.',
      content: 'AI teknolojileri web geliştirme alanında devrim yaratıyor...',
      category: 'ai',
      categoryLabel: 'Yapay Zeka',
      tags: ['AI', 'Web Development', 'ChatGPT', 'GitHub Copilot', 'Machine Learning', 'Automation'],
      author: 'Erencan Acıoğlu',
      publishDate: '2025-01-15',
      readTime: '12 min',
      featured: true,
      image: '/blog/ai-web-development.jpg'
    },
    {
      id: 2,
      title: 'Next.js 14 ile Performance Optimizasyonu',
      slug: 'nextjs-14-performance-optimizasyonu',
      excerpt: 'Next.js 14\'ün yeni özellikleri ile web uygulamalarınızın performansını nasıl artırabileceğinizi pratik örneklerle öğrenin.',
      content: 'Next.js 14 ile gelen yenilikler performans açısından çok önemli...',
      category: 'web',
      categoryLabel: 'Web Development',
      tags: ['Next.js', 'React', 'Performance', 'SSR', 'Optimization'],
      author: 'Erencan Acıoğlu',
      publishDate: '2025-01-10',
      readTime: '12 min',
      views: 890,
      likes: 34,
      comments: 8,
      featured: true,
      image: '/blog/nextjs-performance.jpg'
    },
    {
      id: 3,
      title: 'Unity ile AI Destekli Oyun Geliştirme',
      slug: 'unity-ai-destekli-oyun-gelistirme',
      excerpt: 'Unity engine kullanarak AI destekli NPC\'ler ve akıllı oyun mekaniği nasıl geliştirileceğini adım adım öğrenin.',
      content: 'Unity\'de AI entegrasyonu oyun deneyimini bambaşka bir seviyeye taşıyor...',
      category: 'game',
      categoryLabel: 'Game Development',
      tags: ['Unity', 'C#', 'AI', 'Game Development', 'NPC'],
      author: 'Erencan Acıoğlu',
      publishDate: '2025-01-05',
      readTime: '15 min',
      views: 654,
      likes: 28,
      comments: 15,
      featured: false,
      image: '/blog/unity-ai-game.jpg'
    },
    {
      id: 4,
      title: 'Freelance Developer Olarak İlk Yıl Deneyimlerim',
      slug: 'freelance-developer-deneyimlerim',
      excerpt: 'Freelance developer olarak çalışmaya başladığım ilk yılda karşılaştığım zorluklar, öğrendiklerim ve tavsiyelerin.',
      content: 'Freelance developer olarak çalışmaya başlamak hem heyecan verici hem de zorlu...',
      category: 'career',
      categoryLabel: 'Kariyer',
      tags: ['Freelance', 'Career', 'Tips', 'Experience', 'Remote Work'],
      author: 'Erencan Acıoğlu',
      publishDate: '2024-12-28',
      readTime: '10 min',
      views: 1100,
      likes: 67,
      comments: 23,
      featured: false,
      image: '/blog/freelance-experience.jpg'
    },
    {
      id: 5,
      title: 'Docker ile Full-Stack Development Workflow',
      slug: 'docker-fullstack-development-workflow',
      excerpt: 'Docker container teknolojisi ile full-stack projelerinizi nasıl daha verimli geliştirebileceğinizi öğrenin.',
      content: 'Docker, modern development workflow\'unda vazgeçilmez bir araç haline geldi...',
      category: 'devops',
      categoryLabel: 'DevOps',
      tags: ['Docker', 'DevOps', 'Full-Stack', 'Containers', 'Development'],
      author: 'Erencan Acıoğlu',
      publishDate: '2024-12-20',
      readTime: '14 min',
      views: 756,
      likes: 41,
      comments: 9,
      featured: true,
      image: '/blog/docker-workflow.jpg'
    },
    {
      id: 6,
      title: 'TypeScript ile Tip Güvenli React Uygulamaları',
      slug: 'typescript-react-tip-guvenli-uygulamalar',
      excerpt: 'TypeScript kullanarak React uygulamalarınızda tip güvenliği nasıl sağlanır ve bu yaklaşımın avantajları nelerdir?',
      content: 'TypeScript, React projelerinde kod kalitesini artıran güçlü bir araç...',
      category: 'web',
      categoryLabel: 'Web Development',
      tags: ['TypeScript', 'React', 'Type Safety', 'JavaScript', 'Frontend'],
      author: 'Erencan Acıoğlu',
      publishDate: '2024-12-15',
      readTime: '11 min',
      featured: false,
      image: '/blog/typescript-react.jpg'
    },
    {
      id: 7,
      title: 'Unity ile Mobile Game Development: 2D vs 3D Karşılaştırması',
      slug: 'unity-mobile-game-development-2d-vs-3d',
      excerpt: 'Unity engine kullanarak mobile oyun geliştirme sürecinde 2D ve 3D yaklaşımlarının avantajları, performans karşılaştırmaları ve hangi durumda hangisini tercih etmeniz gerektiği.',
      category: 'game',
      categoryLabel: 'Game Development',
      tags: ['Unity', 'Mobile Games', '2D', '3D', 'Performance', 'C#'],
      author: 'Erencan Acıoğlu',
      publishDate: '2024-12-10',
      readTime: '15 min',
      featured: true,
      image: '/blog/unity-mobile-game.jpg'
    },
    {
      id: 8,
      title: 'Node.js ve Express ile Scalable API Geliştirme',
      slug: 'nodejs-express-scalable-api-development',
      excerpt: 'Node.js ve Express framework kullanarak yüksek performanslı, scalable RESTful API\'ler nasıl geliştirilir? Middleware\'lar, error handling, authentication ve database entegrasyonu.',
      category: 'web',
      categoryLabel: 'Web Development',
      tags: ['Node.js', 'Express', 'API', 'Backend', 'REST', 'Authentication'],
      author: 'Erencan Acıoğlu',
      publishDate: '2024-12-05',
      readTime: '13 min',
      featured: false,
      image: '/blog/nodejs-api.jpg'
    },
    {
      id: 9,
      title: 'Python ile Machine Learning: Başlangıçtan İleri Seviyeye',
      slug: 'python-machine-learning-baslangic-ileri-seviye',
      excerpt: 'Python ekosisteminde machine learning projeleri geliştirme: Pandas, NumPy, Scikit-learn, TensorFlow kullanımı ve gerçek dünya projelerinde ML model deployment süreçleri.',
      category: 'ai',
      categoryLabel: 'Yapay Zeka',
      tags: ['Python', 'Machine Learning', 'Pandas', 'TensorFlow', 'Data Science', 'AI'],
      author: 'Erencan Acıoğlu',
      publishDate: '2024-11-28',
      readTime: '18 min',
      featured: true,
      image: '/blog/python-ml.jpg'
    },
    {
      id: 10,
      title: 'Modern DevOps: Docker, CI/CD ve Cloud Deployment',
      slug: 'modern-devops-docker-cicd-cloud-deployment',
      excerpt: 'Modern yazılım geliştirme süreçlerinde DevOps kültürü: Docker containerization, GitHub Actions ile CI/CD pipeline\'ları ve cloud platformlarında otomatik deployment stratejileri.',
      category: 'devops',
      categoryLabel: 'DevOps',
      tags: ['DevOps', 'Docker', 'CI/CD', 'GitHub Actions', 'Cloud', 'Deployment'],
      author: 'Erencan Acıoğlu',
      publishDate: '2024-11-20',
      readTime: '16 min',
      featured: false,
      image: '/blog/devops-docker.jpg'
    }
  ]

  const categories = [
    { id: 'all', label: 'Tüm Yazılar', icon: BookOpen, color: 'text-primary-400' },
    { id: 'web', label: 'Web Development', icon: Code, color: 'text-blue-400' },
    { id: 'ai', label: 'Yapay Zeka', icon: Brain, color: 'text-purple-400' },
    { id: 'game', label: 'Game Development', icon: Rocket, color: 'text-green-400' },
    { id: 'career', label: 'Kariyer', icon: TrendingUp, color: 'text-orange-400' },
    { id: 'devops', label: 'DevOps', icon: Coffee, color: 'text-red-400' }
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const popularPosts = [...blogPosts].sort((a, b) => b.views - a.views).slice(0, 5)

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Teknoloji, kodlama deneyimlerim ve öğrendiklerimi paylaştığım kişisel blog alanım. 
            Web development, AI, oyun geliştirme ve kariyer üzerine yazılar.
          </p>

          {/* Blog Topics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center glass rounded-xl p-4">
              <div className="text-2xl font-bold text-primary-400 mb-2">Web Dev</div>
              <div className="text-gray-400">Modern Technologies</div>
            </div>
            <div className="text-center glass rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-400 mb-2">AI/ML</div>
              <div className="text-gray-400">Integration & Trends</div>
            </div>
            <div className="text-center glass rounded-xl p-4">
              <div className="text-2xl font-bold text-green-400 mb-2">Career</div>
              <div className="text-gray-400">Tips & Experiences</div>
            </div>
            <div className="text-center glass rounded-xl p-4">
              <div className="text-2xl font-bold text-orange-400 mb-2">DevOps</div>
              <div className="text-gray-400">Best Practices</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
              <TrendingUp className="w-8 h-8 text-primary-400 mr-3" />
              Öne Çıkan Yazılar
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                  <article className={`glass rounded-3xl p-8 card-hover h-full ${index === 0 ? 'lg:col-span-1' : ''}`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs font-medium rounded-full">
                        {post.categoryLabel}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{formatDate(post.publishDate)}</span>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs font-medium bg-dark-700 text-gray-300 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-gray-400 text-sm">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center">
                            <BookOpen className="w-4 h-4 mr-1" />
                            <span>{post.categoryLabel}</span>
                          </div>
                        </div>
                      <ArrowRight className="w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Blog Posts */}
            <div className="lg:col-span-3">
              {/* Filters and Search */}
              <div className="mb-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                  {/* Category Filters */}
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => {
                      const Icon = category.icon
                      return (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                            activeCategory === category.id
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
                      placeholder="Blog yazısı ara..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full lg:w-80"
                    />
                  </div>
                </div>

                {/* Results Count */}
                <div className="text-gray-400 text-sm">
                  {filteredPosts.length} yazı bulundu
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="space-y-8">
                {filteredPosts.map((post) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                    <article className="glass rounded-2xl p-6 card-hover">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="px-3 py-1 bg-primary-500/20 text-primary-300 text-xs font-medium rounded-full">
                              {post.categoryLabel}
                            </span>
                            <div className="flex items-center text-gray-400 text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{formatDate(post.publishDate)}</span>
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                            {post.title}
                          </h3>

                          <p className="text-gray-400 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {post.tags.map((tag) => (
                              <span key={tag} className="px-2 py-1 text-xs font-medium bg-dark-700 text-gray-300 rounded">
                                #{tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-gray-400 text-sm">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                            <div className="flex items-center">
                              <Tag className="w-4 h-4 mr-1" />
                              <span>{post.tags.length} etiket</span>
                            </div>
                          </div>
                            <ArrowRight className="w-5 h-5 text-primary-400 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-12 h-12 text-gray-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Yazı bulunamadı</h3>
                  <p className="text-gray-400 mb-6">Arama kriterlerinizi değiştirerek tekrar deneyin.</p>
                  <button
                    onClick={() => {
                      setActiveCategory('all')
                      setSearchTerm('')
                    }}
                    className="btn-primary"
                  >
                    Filtreleri Temizle
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Popular Posts */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-primary-400" />
                    Popüler Yazılar
                  </h3>
                  <div className="space-y-4">
                    {popularPosts.map((post, index) => (
                      <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-white group-hover:text-primary-400 transition-colors duration-300 line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <div className="flex items-center text-xs text-gray-400">
                              <Clock className="w-3 h-3 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-primary-400" />
                    Kategoriler
                  </h3>
                  <div className="space-y-3">
                    {categories.filter(cat => cat.id !== 'all').map((category) => {
                      const Icon = category.icon
                      const postCount = blogPosts.filter(post => post.category === category.id).length
                      return (
                        <button
                          key={category.id}
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-300 ${
                            activeCategory === category.id
                              ? 'bg-primary-500/20 text-primary-300'
                              : 'bg-dark-800 text-gray-300 hover:bg-primary-500/10 hover:text-primary-400'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{category.label}</span>
                          </div>
                          <span className="text-xs bg-dark-700 px-2 py-1 rounded-full">
                            {postCount}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">
                    📧 Blog Güncellemeleri
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Yeni yazılarımdan haberdar olmak için e-posta adresinizi bırakın.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="E-posta adresiniz"
                      className="w-full px-3 py-2 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                    />
                    <button className="w-full btn-primary text-sm py-2">
                      Abone Ol
                    </button>
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
            Soru ve Önerileriniz <span className="gradient-text">Var mı?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Blog yazılarım hakkında düşüncelerinizi paylaşın veya yazmamı istediğiniz konuları önerin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              <span>İletişime Geç</span>
              <MessageCircle className="w-5 h-5 ml-2" />
            </Link>
            <Link href="/projects" className="btn-secondary">
              <span>Projelerimi İncele</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage
