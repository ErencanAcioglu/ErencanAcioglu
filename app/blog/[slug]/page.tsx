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
      title: 'Modern Web Geliştirmede AI\'nın Rolü ve Geleceği',
      excerpt: 'Yapay zeka teknolojilerinin web geliştirme süreçlerine nasıl entegre edilebileceğini, ChatGPT ve GitHub Copilot gibi araçların developer productivity\'ye etkilerini ve AI-powered web uygulamalarının gelecekteki potansiyelini detaylı olarak inceliyoruz.',
      content: `# Modern Web Geliştirmede AI'nın Rolü ve Geleceği

Yapay zeka teknolojileri, web geliştirme dünyasında devrim yaratıyor. ChatGPT, GitHub Copilot ve diğer AI araçları, developer'ların üretkenliğini artırırken, kod kalitesini de yükseltiyor.

## AI Araçlarının Developer Productivity'ye Etkisi

### 1. Kod Yazma Hızında Artış
- GitHub Copilot ile %55 daha hızlı kod yazma
- Otomatik kod tamamlama ve öneriler
- Syntax hatalarının anlık tespiti

### 2. Kod Kalitesinde İyileşme
- AI destekli code review
- Best practice önerileri
- Güvenlik açıklarının erken tespiti

## Gelecekteki Trendler

### AI-Powered Web Uygulamaları
- Kişiselleştirilmiş kullanıcı deneyimleri
- Akıllı içerik önerileri
- Otomatik A/B testleri

### Low-Code/No-Code Platformlar
- AI destekli drag-and-drop editörler
- Doğal dil ile kod yazma
- Otomatik UI/UX optimizasyonu

## Pratik Uygulamalar

### 1. ChatGPT ile API Entegrasyonu
\`\`\`javascript
// AI destekli API çağrısı
const aiResponse = await fetch('/api/ai-chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ prompt: userInput })
});
\`\`\`

### 2. GitHub Copilot ile React Component
\`\`\`jsx
// AI önerisi ile oluşturulan component
const AIPoweredComponent = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAIAction = async () => {
    setIsLoading(true);
    // AI işlemi
    setIsLoading(false);
  };
  
  return (
    <div className="ai-component">
      {/* AI destekli UI */}
    </div>
  );
};
\`\`\`

## Sonuç

AI teknolojileri web geliştirme süreçlerini dönüştürüyor. Developer'lar bu araçları etkili kullanarak hem daha hızlı hem de daha kaliteli projeler üretebilirler. Gelecekte AI'nın rolü daha da artacak ve web geliştirme tamamen farklı bir boyut kazanacak.`,
      category: 'ai',
      categoryLabel: 'Yapay Zeka',
      tags: ['AI', 'Web Development', 'ChatGPT', 'GitHub Copilot', 'Machine Learning', 'Automation'],
      author: 'Erencan Acıoğlu',
      publishDate: '2025-01-15',
      readTime: '12 min',
      views: 1250,
      initialLikes: 45,
      comments: 12,
      image: '/blog/ai-web-development.jpg'
    },
    'nextjs-14-performance-optimizasyonu': {
      id: 2,
      title: 'Next.js 14 ile Performance Optimizasyonu',
      excerpt: 'Next.js 14\'ün yeni özellikleri ile web uygulamalarınızın performansını nasıl artırabileceğinizi pratik örneklerle öğrenin.',
      content: `# Next.js 14 ile Performance Optimizasyonu

Next.js 14, web uygulamalarının performansını artırmak için birçok yeni özellik sunuyor. Bu yazıda, bu özellikleri nasıl etkili kullanabileceğinizi öğreneceksiniz.

## Next.js 14'ün Yeni Özellikleri

### 1. Turbopack (Beta)
- Webpack'ten 10x daha hızlı build süreleri
- Gelişmiş hot reload performansı
- Daha iyi tree shaking

### 2. Server Components
- Client-side JavaScript azaltma
- Daha hızlı initial page load
- SEO optimizasyonu

### 3. App Router Optimizasyonları
- Parallel routes
- Intercepting routes
- Loading UI'ları

## Performance Optimizasyon Teknikleri

### 1. Image Optimizasyonu
\`\`\`jsx
import Image from 'next/image'

// Optimized image component
const OptimizedImage = ({ src, alt, priority = false }) => (
  <Image
    src={src}
    alt={alt}
    width={800}
    height={600}
    priority={priority}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,..."
  />
)
\`\`\`

### 2. Dynamic Imports
\`\`\`jsx
import dynamic from 'next/dynamic'

// Lazy load heavy components
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})
\`\`\`

### 3. Bundle Analyzer
\`\`\`bash
# Bundle size analizi
npm install @next/bundle-analyzer
\`\`\`

## Pratik Uygulamalar

### 1. Code Splitting
- Route-based splitting
- Component-based splitting
- Library splitting

### 2. Caching Stratejileri
- ISR (Incremental Static Regeneration)
- Edge caching
- CDN optimizasyonu

### 3. Performance Monitoring
- Core Web Vitals
- Real User Monitoring
- Lighthouse CI

## Sonuç

Next.js 14 ile performans optimizasyonu artık daha kolay. Bu teknikleri uygulayarak web uygulamalarınızın hızını önemli ölçüde artırabilirsiniz.`,
      category: 'web',
      categoryLabel: 'Web Development',
      tags: ['Next.js', 'React', 'Performance', 'SSR', 'Optimization'],
      author: 'Erencan Acıoğlu',
      publishDate: '2025-01-10',
      readTime: '12 min',
      views: 980,
      initialLikes: 34,
      comments: 8,
      image: '/blog/nextjs-performance.jpg'
    },
    'unity-ai-destekli-oyun-gelistirme': {
      id: 3,
      title: 'Unity ile AI Destekli Oyun Geliştirme',
      excerpt: 'Unity engine kullanarak AI destekli NPC\'ler ve akıllı oyun mekaniği nasıl geliştirileceğini adım adım öğrenin.',
      content: `# Unity ile AI Destekli Oyun Geliştirme

Unity'de AI entegrasyonu oyun deneyimini bambaşka bir seviyeye taşıyor. Bu yazıda, Unity'de AI destekli NPC'ler ve akıllı oyun mekaniği nasıl geliştirileceğini öğreneceksiniz.

## Unity AI Araçları

### 1. Unity ML-Agents
- Machine learning tabanlı AI
- Reinforcement learning desteği
- Python entegrasyonu

### 2. Unity NavMesh
- Pathfinding algoritmaları
- Dynamic obstacle avoidance
- Multi-agent navigation

### 3. Behavior Trees
- Visual scripting
- Complex AI behaviors
- State management

## AI Destekli NPC Geliştirme

### 1. Temel AI Controller
\`\`\`csharp
using UnityEngine;
using UnityEngine.AI;

public class AIController : MonoBehaviour
{
    private NavMeshAgent agent;
    private Transform player;
    private Animator animator;
    
    [Header("AI Settings")]
    public float detectionRange = 10f;
    public float attackRange = 2f;
    public float patrolSpeed = 2f;
    public float chaseSpeed = 5f;
    
    private AIState currentState;
    
    public enum AIState
    {
        Patrol,
        Chase,
        Attack,
        Idle
    }
    
    void Start()
    {
        agent = GetComponent<NavMeshAgent>();
        animator = GetComponent<Animator>();
        player = GameObject.FindWithTag("Player").transform;
        
        currentState = AIState.Patrol;
    }
    
    void Update()
    {
        switch (currentState)
        {
            case AIState.Patrol:
                PatrolBehavior();
                break;
            case AIState.Chase:
                ChaseBehavior();
                break;
            case AIState.Attack:
                AttackBehavior();
                break;
        }
    }
    
    void PatrolBehavior()
    {
        // Patrol logic
        if (Vector3.Distance(transform.position, player.position) < detectionRange)
        {
            currentState = AIState.Chase;
        }
    }
    
    void ChaseBehavior()
    {
        agent.SetDestination(player.position);
        agent.speed = chaseSpeed;
        
        if (Vector3.Distance(transform.position, player.position) < attackRange)
        {
            currentState = AIState.Attack;
        }
    }
    
    void AttackBehavior()
    {
        // Attack logic
        if (Vector3.Distance(transform.position, player.position) > attackRange)
        {
            currentState = AIState.Chase;
        }
    }
}
\`\`\`

### 2. Machine Learning Entegrasyonu
\`\`\`csharp
using Unity.MLAgents;
using Unity.MLAgents.Sensors;
using Unity.MLAgents.Actuators;

public class MLAgent : Agent
{
    [Header("ML Settings")]
    public float moveSpeed = 5f;
    public float rotationSpeed = 100f;
    
    private Rigidbody rb;
    private Transform target;
    
    public override void Initialize()
    {
        rb = GetComponent<Rigidbody>();
        target = GameObject.FindWithTag("Target").transform;
    }
    
    public override void OnEpisodeBegin()
    {
        // Reset agent position
        transform.localPosition = new Vector3(0, 0.5f, 0);
        rb.velocity = Vector3.zero;
    }
    
    public override void CollectObservations(VectorSensor sensor)
    {
        // Add observations
        sensor.AddObservation(transform.localPosition);
        sensor.AddObservation(target.localPosition);
        sensor.AddObservation(rb.velocity);
    }
    
    public override void OnActionReceived(ActionBuffers actions)
    {
        // Process actions
        float moveX = actions.ContinuousActions[0];
        float moveZ = actions.ContinuousActions[1];
        
        Vector3 movement = new Vector3(moveX, 0, moveZ) * moveSpeed;
        rb.AddForce(movement);
        
        // Reward system
        float distanceToTarget = Vector3.Distance(transform.localPosition, target.localPosition);
        if (distanceToTarget < 1.5f)
        {
            SetReward(1.0f);
            EndEpisode();
        }
        else
        {
            SetReward(-0.01f);
        }
    }
}
\`\`\`

## Gelişmiş AI Teknikleri

### 1. Behavior Trees ile Kompleks AI
- Visual scripting
- State transitions
- Conditional behaviors

### 2. Neural Networks
- Custom AI models
- Training data collection
- Model optimization

### 3. Multi-Agent Systems
- Swarm intelligence
- Collaborative behaviors
- Emergent gameplay

## Performance Optimizasyonu

### 1. AI Culling
- Distance-based activation
- LOD systems
- Batch processing

### 2. Memory Management
- Object pooling
- Garbage collection optimization
- Efficient data structures

## Sonuç

Unity'de AI geliştirme, oyun deneyimini zenginleştiren güçlü bir araçtır. Bu teknikleri kullanarak akıllı ve etkileşimli NPC'ler oluşturabilirsiniz.`,
      category: 'game',
      categoryLabel: 'Game Development',
      tags: ['Unity', 'C#', 'AI', 'Game Development', 'NPC'],
      author: 'Erencan Acıoğlu',
      publishDate: '2025-01-05',
      readTime: '15 min',
      views: 750,
      initialLikes: 28,
      comments: 6,
      image: '/blog/unity-ai-game.jpg'
    },
    'freelance-developer-deneyimlerim': {
      id: 4,
      title: 'Freelance Developer Olarak İlk Yıl Deneyimlerim',
      excerpt: 'Freelance developer olarak çalışmaya başladığım ilk yılda karşılaştığım zorluklar, öğrendiklerim ve tavsiyelerin.',
      content: `# Freelance Developer Olarak İlk Yıl Deneyimlerim

Freelance developer olarak çalışmaya başlamak hem heyecan verici hem de zorlu bir süreç. Bu yazıda, ilk yılımda karşılaştığım zorluklar, öğrendiklerim ve yeni başlayanlara tavsiyelerimi paylaşıyorum.

## İlk Adımlar

### 1. Portfolio Oluşturma
- Kişisel projelerinizi sergileyin
- GitHub profilinizi düzenleyin
- LinkedIn'de aktif olun
- Blog yazıları yazın

### 2. Fiyatlandırma Stratejisi
- Saatlik vs proje bazlı fiyatlandırma
- Pazar araştırması yapın
- İlk projelerde düşük fiyat alın
- Deneyim kazandıkça fiyat artırın

## Karşılaştığım Zorluklar

### 1. Müşteri Bulma
- **Sorun**: İlk müşterileri bulmak zor
- **Çözüm**: Networking, sosyal medya, freelance platformları
- **Sonuç**: 3 ay sonra düzenli müşteri akışı

### 2. Zaman Yönetimi
- **Sorun**: Projeler arası geçiş zorluğu
- **Çözüm**: Pomodoro tekniği, zaman takibi
- **Sonuç**: %40 daha verimli çalışma

### 3. Teknik Zorluklar
- **Sorun**: Bilinmeyen teknolojiler
- **Çözüm**: Sürekli öğrenme, online kurslar
- **Sonuç**: 5 yeni teknoloji öğrenme

## Öğrendiklerim

### 1. İletişim Becerileri
- Müşteri beklentilerini net anlama
- Düzenli güncelleme verme
- Zor durumları yönetme

### 2. Proje Yönetimi
- Milestone'lar belirleme
- Risk analizi yapma
- Backup planları hazırlama

### 3. Finansal Yönetim
- Vergi hesaplama
- Fatura kesme
- Gelir-gider takibi

## Başarı Hikayelerim

### 1. İlk Büyük Proje
- **Proje**: E-ticaret platformu
- **Süre**: 3 ay
- **Kazanç**: $5,000
- **Öğrenme**: React, Node.js, MongoDB

### 2. Tekrarlayan Müşteri
- **Müşteri**: Startup şirketi
- **Projeler**: 5 farklı proje
- **Toplam Kazanç**: $15,000
- **İlişki**: 2 yıldır devam ediyor

## Tavsiyelerim

### 1. Yeni Başlayanlar İçin
- İlk 6 ay düşük fiyat alın
- Kaliteli iş yapın
- Müşteri memnuniyetini öncelendirin
- Sürekli öğrenmeye devam edin

### 2. Teknik Gelişim
- Güncel teknolojileri takip edin
- Open source projelere katkıda bulunun
- Blog yazıları yazın
- Konferanslara katılın

### 3. İş Geliştirme
- Networking yapın
- Referans sistemi kurun
- Sosyal medyada aktif olun
- Portfolio'nuzu güncel tutun

## Gelecek Planları

### 1. Kısa Vadeli (6 ay)
- Daha büyük projeler almak
- Fiyatları artırmak
- Yeni teknolojiler öğrenmek

### 2. Uzun Vadeli (2 yıl)
- Kendi SaaS ürünü geliştirmek
- Ekip kurmak
- Danışmanlık hizmeti vermek

## Sonuç

Freelance developer olmak zorlu ama ödüllendirici bir yolculuk. Sabır, sürekli öğrenme ve kaliteli iş yapma ile başarılı olabilirsiniz. İlk yıl en zor dönem, ama geçtikten sonra çok daha kolay oluyor.`,
      category: 'career',
      categoryLabel: 'Kariyer',
      tags: ['Freelance', 'Career', 'Tips', 'Experience', 'Remote Work'],
      author: 'Erencan Acıoğlu',
      publishDate: '2024-12-28',
      readTime: '10 min',
      views: 650,
      initialLikes: 32,
      comments: 8,
      image: '/blog/freelance-experience.jpg'
    },
    'docker-fullstack-development-workflow': {
      id: 5,
      title: 'Docker ile Full-Stack Development Workflow',
      excerpt: 'Docker container teknolojisi ile full-stack projelerinizi nasıl daha verimli geliştirebileceğinizi öğrenin.',
      content: `# Docker ile Full-Stack Development Workflow

Docker, modern development workflow'unda vazgeçilmez bir araç haline geldi. Bu yazıda, Docker ile full-stack projelerinizi nasıl daha verimli geliştirebileceğinizi öğreneceksiniz.

## Docker'ın Avantajları

### 1. Tutarlı Geliştirme Ortamı
- "Bende çalışıyor" problemini çözer
- Tüm geliştiriciler aynı ortamda çalışır
- Production ile development ortamı aynı

### 2. Hızlı Kurulum
- Yeni projeler dakikalar içinde hazır
- Bağımlılık yönetimi kolay
- Farklı versiyonlar arası geçiş

### 3. Ölçeklenebilirlik
- Mikroservis mimarisi
- Load balancing
- Auto-scaling

## Full-Stack Docker Setup

### 1. Docker Compose Yapılandırması
\`\`\`yaml
version: '3.8'

services:
  # Frontend (React/Next.js)
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    depends_on:
      - backend

  # Backend (Node.js/Express)
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "5000:5000"
    volumes:
      - ./backend:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://user:password@db:5432/mydb
    depends_on:
      - db

  # Database (PostgreSQL)
  db:
    image: postgres:15
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  # Redis (Caching)
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
\`\`\`

### 2. Frontend Dockerfile
\`\`\`dockerfile
# Frontend Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start development server
CMD ["npm", "run", "dev"]
\`\`\`

### 3. Backend Dockerfile
\`\`\`dockerfile
# Backend Dockerfile
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Start development server
CMD ["npm", "run", "dev"]
\`\`\`

## Gelişmiş Docker Teknikleri

### 1. Multi-Stage Builds
\`\`\`dockerfile
# Multi-stage build for production
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 5000
CMD ["npm", "start"]
\`\`\`

### 2. Docker Networks
\`\`\`yaml
# Custom network configuration
networks:
  app-network:
    driver: bridge

services:
  frontend:
    networks:
      - app-network
  
  backend:
    networks:
      - app-network
  
  db:
    networks:
      - app-network
\`\`\`

### 3. Environment Variables
\`\`\`yaml
# Environment configuration
services:
  backend:
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/mydb
      - REDIS_URL=redis://redis:6379
    env_file:
      - .env.production
\`\`\`

## Development Workflow

### 1. Hot Reload Setup
\`\`\`yaml
# Development with hot reload
services:
  frontend:
    volumes:
      - ./frontend:/app
      - /app/node_modules
    environment:
      - CHOKIDAR_USEPOLLING=true
\`\`\`

### 2. Database Migrations
\`\`\`bash
# Run migrations
docker-compose exec backend npm run migrate

# Seed database
docker-compose exec backend npm run seed
\`\`\`

### 3. Testing
\`\`\`bash
# Run tests
docker-compose exec backend npm test
docker-compose exec frontend npm test

# Integration tests
docker-compose -f docker-compose.test.yml up --abort-on-container-exit
\`\`\`

## Production Deployment

### 1. Production Docker Compose
\`\`\`yaml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.prod
    ports:
      - "80:80"
    environment:
      - NODE_ENV=production

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.prod
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/mydb

  db:
    image: postgres:15
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password

volumes:
  postgres_data:
\`\`\`

### 2. Docker Swarm
\`\`\`bash
# Initialize swarm
docker swarm init

# Deploy stack
docker stack deploy -c docker-compose.yml myapp

# Scale services
docker service scale myapp_backend=3
\`\`\`

## Best Practices

### 1. Security
- Non-root user kullanın
- Secrets yönetimi
- Image scanning
- Network isolation

### 2. Performance
- Layer caching
- Multi-stage builds
- Resource limits
- Health checks

### 3. Monitoring
- Log aggregation
- Metrics collection
- Health monitoring
- Alerting

## Sonuç

Docker ile full-stack development workflow'u modern yazılım geliştirmenin vazgeçilmez parçası. Bu teknikleri kullanarak daha verimli, tutarlı ve ölçeklenebilir projeler geliştirebilirsiniz.`,
      category: 'devops',
      categoryLabel: 'DevOps',
      tags: ['Docker', 'DevOps', 'Full-Stack', 'Containers', 'Development'],
      author: 'Erencan Acıoğlu',
      publishDate: '2024-12-20',
      readTime: '14 min',
      views: 1100,
      initialLikes: 42,
      comments: 15,
      image: '/blog/docker-workflow.jpg'
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
