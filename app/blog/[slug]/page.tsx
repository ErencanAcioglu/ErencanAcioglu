'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { 
  Calendar, 
  Clock, 
  Eye, 
  Heart,
  MessageCircle,
  Share2,
  ArrowLeft,
  User,
  Tag,
  ThumbsUp,
  BookOpen,
  Coffee,
  Lightbulb,
  Code,
  TrendingUp
} from 'lucide-react'

const BlogPostPage = () => {
  const params = useParams()
  const slug = params.slug as string
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(0)
  const [readingProgress, setReadingProgress] = useState(0)

  // Sample blog posts data - gerçek uygulamada API'den gelecek
  const blogPosts = {
    'modern-web-gelistirmede-ai-nin-rolu': {
      id: 1,
      title: 'Modern Web Geliştirmede AI\'nın Rolü',
      excerpt: 'Yapay zeka teknolojilerinin web geliştirme süreçlerine nasıl entegre edilebileceğini ve bu entegrasyonun gelecekte nasıl şekilleneceğini keşfediyoruz.',
      content: `
# Modern Web Geliştirmede AI'nın Rolü

Yapay zeka (AI) teknolojileri, web geliştirme sektöründe devrim yaratıyor. Bu yazıda, AI'nın web geliştirme süreçlerine nasıl entegre edilebileceğini ve bu entegrasyonun gelecekte nasıl şekilleneceğini keşfedeceğiz.

## AI'nın Web Geliştirmedeki Mevcut Durumu

Günümüzde AI teknolojileri, web geliştirme süreçlerinde birçok alanda kullanılıyor:

### 1. Kod Üretimi ve Otomasyonu
- **GitHub Copilot** ve **ChatGPT** gibi araçlar, geliştiricilerin kod yazma hızını artırıyor
- Otomatik kod tamamlama ve hata düzeltme özellikleri
- Boilerplate kod üretimi ve template oluşturma

### 2. UI/UX Tasarımı
- AI destekli tasarım araçları (Figma AI, Adobe Sensei)
- Otomatik layout önerileri ve responsive tasarım optimizasyonu
- Kullanıcı deneyimi analizi ve iyileştirme önerileri

### 3. Testing ve Debugging
- Otomatik test case üretimi
- Bug detection ve performance analizi
- Code review süreçlerinde AI asistanları

## Pratik Uygulama Örnekleri

### OpenAI API Entegrasyonu
Web uygulamalarınıza AI özelliklerini entegre etmek için OpenAI API'sini kullanabilirsiniz:

\`\`\`javascript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateContent(prompt) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });
  
  return completion.choices[0].message.content;
}
\`\`\`

### Chatbot Entegrasyonu
Modern web sitelerinde AI chatbot'lar kullanıcı deneyimini önemli ölçüde artırıyor:

\`\`\`tsx
const AIChatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    
    const data = await response.json();
    setMessages([...messages, { user: input, ai: data.response }]);
  };

  return (
    <div className="chat-container">
      {/* Chat UI implementation */}
    </div>
  );
};
\`\`\`

## AI'nın Geleceği Web Geliştirmede

### 1. No-Code/Low-Code Platformları
AI destekli no-code platformları, teknik bilgisi olmayan kullanıcıların da web uygulamaları geliştirmesine olanak sağlıyor.

### 2. Otomatik Optimizasyon
- SEO optimizasyonu
- Performance tuning
- Accessibility iyileştirmeleri

### 3. Kişiselleştirme
- Kullanıcı davranışlarına göre dinamik içerik
- Adaptive user interfaces
- Real-time personalization

## Sonuç

AI teknolojileri, web geliştirme süreçlerini hızlandırıyor ve daha verimli hale getiriyor. Geliştiriciler olarak, bu teknolojileri öğrenmeli ve projelerimizde kullanmalıyız.

Sizce AI'nın web geliştirmedeki en büyük etkisi ne olacak? Yorumlarınızı bekliyorum!
      `,
      category: 'ai',
      categoryLabel: 'Yapay Zeka',
      tags: ['AI', 'Web Development', 'Machine Learning', 'Future Tech', 'OpenAI'],
      author: 'Erencan Acıoğlu',
      publishDate: '2025-01-15',
      readTime: '8 min',
      views: 1250,
      initialLikes: 45,
      comments: 12,
      image: '/blog/ai-web-development.jpg'
    },
    'nextjs-14-performance-optimizasyonu': {
      id: 2,
      title: 'Next.js 14 ile Performance Optimizasyonu',
      excerpt: 'Next.js 14\'ün yeni özellikleri ile web uygulamalarınızın performansını nasıl artırabileceğinizi pratik örneklerle öğrenin.',
      content: `
# Next.js 14 ile Performance Optimizasyonu

Next.js 14, web uygulamalarının performansını artırmak için birçok yeni özellik ve iyileştirme getirdi. Bu yazıda, bu özellikleri nasıl kullanabileceğinizi pratik örneklerle göstereceğim.

## Yeni Özellikler

### 1. App Router İyileştirmeleri
Next.js 14 ile App Router daha da optimize edildi:

\`\`\`tsx
// app/layout.tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
\`\`\`

### 2. Server Actions
Server Actions ile form işlemlerini daha verimli hale getirebilirsiniz:

\`\`\`tsx
'use server'
 
export async function createUser(formData: FormData) {
  const name = formData.get('name') as string
  // Database işlemleri
  return { success: true, user: { name } }
}
\`\`\`

### 3. Streaming ve Suspense
Loading durumlarını daha iyi yönetmek için:

\`\`\`tsx
import { Suspense } from 'react'
import Loading from './loading'

export default function Page() {
  return (
    <div>
      <h1>My Page</h1>
      <Suspense fallback={<Loading />}>
        <SlowComponent />
      </Suspense>
    </div>
  )
}
\`\`\`

## Performance İpuçları

### 1. Image Optimization
\`\`\`tsx
import Image from 'next/image'

export default function MyImage() {
  return (
    <Image
      src="/my-image.jpg"
      alt="Description"
      width={500}
      height={300}
      priority
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  )
}
\`\`\`

### 2. Bundle Analyzer
Bundle boyutunu analiz etmek için:

\`\`\`bash
npm install @next/bundle-analyzer
\`\`\`

### 3. Caching Strategies
\`\`\`tsx
// Static Generation
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}

// Revalidation
export const revalidate = 3600 // 1 hour
\`\`\`

Bu optimizasyonlarla uygulamanızın performansını önemli ölçüde artırabilirsiniz!
      `,
      category: 'web',
      categoryLabel: 'Web Development',
      tags: ['Next.js', 'React', 'Performance', 'SSR', 'Optimization'],
      author: 'Erencan Acıoğlu',
      publishDate: '2025-01-10',
      readTime: '12 min',
      views: 890,
      initialLikes: 34,
      comments: 8,
      image: '/blog/nextjs-performance.jpg'
    }
  }

  const post = blogPosts[slug as keyof typeof blogPosts]

  useEffect(() => {
    if (post) {
      setLikes(post.initialLikes)
    }

    // Reading progress
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [post])

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(prev => isLiked ? prev - 1 : prev + 1)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Yazısı Bulunamadı</h1>
          <p className="text-gray-400 mb-8">Aradığınız blog yazısı mevcut değil.</p>
          <Link href="/blog" className="btn-primary">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Blog'a Dön
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Reading Progress */}
      <div className="fixed top-16 left-0 right-0 z-40">
        <div 
          className="h-1 bg-gradient-to-r from-primary-400 to-primary-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/blog"
            className="inline-flex items-center text-gray-400 hover:text-primary-400 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Blog'a Dön</span>
          </Link>

          {/* Article Header */}
          <article className="glass rounded-3xl p-8 mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <span className="px-3 py-1 bg-primary-500/20 text-primary-300 text-sm font-medium rounded-full">
                {post.categoryLabel}
              </span>
              <div className="flex items-center text-gray-400 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{formatDate(post.publishDate)}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">{post.author}</div>
                  <div className="text-gray-400 text-sm">Full Stack Developer</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  <span>{post.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span>{post.comments}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm font-medium bg-dark-700 text-gray-300 rounded-full hover:bg-primary-500/20 hover:text-primary-300 transition-colors duration-300 cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between border-t border-dark-700 pt-6">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isLiked
                      ? 'bg-red-500/20 text-red-400'
                      : 'bg-dark-700 text-gray-300 hover:bg-red-500/10 hover:text-red-400'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                  <span>{likes}</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-primary-500/10 hover:text-primary-400 transition-all duration-300">
                  <Share2 className="w-5 h-5" />
                  <span>Paylaş</span>
                </button>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <BookOpen className="w-4 h-4" />
                <span>{Math.round(readingProgress)}% okundu</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8">
            <div className="prose prose-lg prose-invert max-w-none">
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.replace(/\n/g, '<br>').replace(/```([\s\S]*?)```/g, '<pre class="code-block"><code>$1</code></pre>').replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>') 
                }} 
              />
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-8">İlgili Yazılar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(blogPosts)
                .filter(([key]) => key !== slug)
                .slice(0, 2)
                .map(([key, relatedPost]) => (
                  <Link key={key} href={`/blog/${key}`} className="group">
                    <article className="glass rounded-2xl p-6 card-hover">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-2 py-1 bg-primary-500/20 text-primary-300 text-xs font-medium rounded-full">
                          {relatedPost.categoryLabel}
                        </span>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{formatDate(relatedPost.publishDate)}</span>
                        </div>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-gray-400 text-sm">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            <span>{relatedPost.views}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Bu yazıyı beğendiniz mi?
            </h3>
            <p className="text-gray-400 mb-6">
              Daha fazla teknoloji ve geliştirme yazısı için blog'umu takip edin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/blog" className="btn-primary">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>Tüm Yazıları Görüntüle</span>
              </Link>
              <Link href="/contact" className="btn-secondary">
                <MessageCircle className="w-5 h-5 mr-2" />
                <span>Benimle İletişime Geç</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPostPage
