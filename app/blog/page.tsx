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
  const [email, setEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [subscriptionMessage, setSubscriptionMessage] = useState('')

  // Sample blog posts - gerçek uygulamada API'den gelecek
  const blogPosts = [
    {
      id: 1,
      title: 'Modern Web Geliştirmede AI\'nın Rolü ve Geleceği',
      slug: 'modern-web-gelistirmede-ai-nin-rolu',
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
      featured: true,
      image: '/blog/ai-web-development.jpg',
      views: 1250
    },
    {
      id: 2,
      title: 'Next.js 14 ile Performance Optimizasyonu',
      slug: 'nextjs-14-performance-optimizasyonu',
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
      featured: true,
      image: '/blog/nextjs-performance.jpg',
      views: 980
    },
    {
      id: 3,
      title: 'Unity ile AI Destekli Oyun Geliştirme',
      slug: 'unity-ai-destekli-oyun-gelistirme',
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
      featured: false,
      image: '/blog/unity-ai-game.jpg',
      views: 750
    },
    {
      id: 4,
      title: 'Freelance Developer Olarak İlk Yıl Deneyimlerim',
      slug: 'freelance-developer-deneyimlerim',
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
      featured: false,
      image: '/blog/freelance-experience.jpg',
      views: 650
    },
    {
      id: 5,
      title: 'Docker ile Full-Stack Development Workflow',
      slug: 'docker-fullstack-development-workflow',
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
      featured: true,
      image: '/blog/docker-workflow.jpg',
      views: 1100
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
      image: '/blog/typescript-react.jpg',
      views: 890
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
      image: '/blog/unity-mobile-game.jpg',
      views: 920
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
      image: '/blog/nodejs-api.jpg',
      views: 780
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
      image: '/blog/python-ml.jpg',
      views: 1350
    },
    {
      id: 10,
      title: 'Modern DevOps: Docker, CI/CD ve Cloud Deployment',
      slug: 'modern-devops-docker-cicd-cloud-deployment',
      excerpt: 'Modern yazılım geliştirme süreçlerinde DevOps kültürü: Docker containerization, GitHub Actions ile CI/CD pipeline\'ları ve cloud platformlarında otomatik deployment stratejileri.',
      content: `# Modern DevOps: Docker, CI/CD ve Cloud Deployment

Modern yazılım geliştirme süreçlerinde DevOps kültürü artık vazgeçilmez. Bu yazıda, Docker containerization, GitHub Actions ile CI/CD pipeline'ları ve cloud platformlarında otomatik deployment stratejilerini öğreneceksiniz.

## DevOps Kültürü

### 1. Temel Prensipler
- Collaboration ve Communication
- Automation
- Monitoring ve Logging
- Continuous Integration/Deployment

### 2. DevOps Araçları
- Version Control (Git)
- CI/CD (GitHub Actions, Jenkins)
- Containerization (Docker)
- Cloud Platforms (AWS, Azure, GCP)

## Docker ile Containerization

### 1. Docker Best Practices
\`\`\`dockerfile
# Multi-stage build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

### 2. Docker Compose
\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=mydb
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
\`\`\`

## CI/CD Pipeline'ları

### 1. GitHub Actions
\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to production
        run: |
          docker build -t myapp .
          docker push myapp:latest
\`\`\`

### 2. Automated Testing
\`\`\`yaml
# Test automation
- name: Run unit tests
  run: npm test

- name: Run integration tests
  run: npm run test:integration

- name: Run e2e tests
  run: npm run test:e2e
\`\`\`

## Cloud Deployment

### 1. AWS Deployment
\`\`\`yaml
# AWS deployment
- name: Deploy to AWS
  uses: aws-actions/configure-aws-credentials@v1
  with:
    aws-access-key-id: \$\{\{ secrets.AWS_ACCESS_KEY_ID \}\}
    aws-secret-access-key: \$\{\{ secrets.AWS_SECRET_ACCESS_KEY \}\}
    aws-region: us-east-1

- name: Deploy to ECS
  run: |
    aws ecs update-service --cluster my-cluster --service my-service --force-new-deployment
\`\`\`

### 2. Kubernetes Deployment
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: myapp
        image: myapp:latest
        ports:
        - containerPort: 3000
\`\`\`

## Monitoring ve Logging

### 1. Application Monitoring
\`\`\`javascript
// Performance monitoring
const express = require('express');
const app = express();

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Metrics collection
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(\`\${req.method} \${req.path} - \${res.statusCode} - \${duration}ms\`);
  });
  next();
});
\`\`\`

### 2. Log Aggregation
\`\`\`yaml
# Logging configuration
version: '3.8'
services:
  app:
    image: myapp:latest
    logging:
      driver: "json-file"
      options:
        max-size: "10m"
        max-file: "3"
\`\`\`

## Security Best Practices

### 1. Container Security
\`\`\`dockerfile
# Security best practices
FROM node:18-alpine

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Set working directory
WORKDIR /app

# Copy files and set ownership
COPY --chown=nextjs:nodejs . .

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
\`\`\`

### 2. Secrets Management
\`\`\`yaml
# Secrets in CI/CD
- name: Deploy with secrets
  env:
    DATABASE_URL: \$\{\{ secrets.DATABASE_URL \}\}
    API_KEY: \$\{\{ secrets.API_KEY \}\}
  run: |
    docker run -e DATABASE_URL=$DATABASE_URL -e API_KEY=$API_KEY myapp:latest
\`\`\`

## Sonuç

Modern DevOps kültürü, yazılım geliştirme süreçlerini dönüştürüyor. Docker, CI/CD ve cloud deployment teknikleri ile daha verimli, güvenli ve ölçeklenebilir uygulamalar geliştirebilirsiniz.`,
      category: 'devops',
      categoryLabel: 'DevOps',
      tags: ['DevOps', 'Docker', 'CI/CD', 'GitHub Actions', 'Cloud', 'Deployment'],
      author: 'Erencan Acıoğlu',
      publishDate: '2024-11-20',
      readTime: '16 min',
      featured: false,
      image: '/blog/devops-docker.jpg',
      views: 850
    },
    {
      id: 11,
      title: 'React 18 ile Modern Frontend Geliştirme',
      slug: 'react-18-modern-frontend-gelistirme',
      excerpt: 'React 18\'in yeni özellikleri ile modern frontend uygulamaları nasıl geliştirilir? Concurrent Features, Suspense, ve Server Components detaylı inceleme.',
      content: `# React 18 ile Modern Frontend Geliştirme

React 18, frontend geliştirme dünyasında devrim yaratıyor. Bu yazıda, React 18'in yeni özelliklerini ve modern frontend uygulamaları nasıl geliştireceğinizi öğreneceksiniz.

## React 18'in Yeni Özellikleri

### 1. Concurrent Features
- Automatic batching
- Suspense improvements
- Concurrent rendering
- Priority-based updates

### 2. Server Components
- Server-side rendering
- Reduced bundle size
- Better performance
- SEO optimization

### 3. New Hooks
- useId
- useDeferredValue
- useTransition
- useSyncExternalStore

## Concurrent Features

### 1. Automatic Batching
\`\`\`jsx
// React 18'de otomatik batching
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    // Bu iki state update'i tek re-render'da çalışır
    setCount(c => c + 1);
    setFlag(f => !f);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <div>Count: {count}</div>
      <div>Flag: {flag}</div>
    </div>
  );
}
\`\`\`

### 2. Suspense ile Data Fetching
\`\`\`jsx
// Suspense ile data fetching
function UserProfile({ userId }) {
  const user = use(fetchUser(userId));
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserProfile userId={1} />
    </Suspense>
  );
}
\`\`\`

## Server Components

### 1. Server Component Örneği
\`\`\`jsx
// Server Component
async function ServerComponent() {
  const data = await fetch('https://api.example.com/data');
  const json = await data.json();
  
  return (
    <div>
      <h1>Server Component</h1>
      <p>Data: {json.message}</p>
    </div>
  );
}
\`\`\`

### 2. Client Component
\`\`\`jsx
'use client';

import { useState } from 'react';

function ClientComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Client Component</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## Yeni Hooks

### 1. useId Hook
\`\`\`jsx
function Form() {
  const id = useId();
  
  return (
    <form>
      <label htmlFor={id}>Name:</label>
      <input id={id} type="text" />
    </form>
  );
}
\`\`\`

### 2. useTransition Hook
\`\`\`jsx
function App() {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    startTransition(() => {
      setCount(c => c + 1);
    });
  };
  
  return (
    <div>
      <button onClick={handleClick}>
        {isPending ? 'Loading...' : 'Click me'}
      </button>
      <div>Count: {count}</div>
    </div>
  );
}
\`\`\`

### 3. useDeferredValue Hook
\`\`\`jsx
function SearchResults({ query }) {
  const deferredQuery = useDeferredValue(query);
  const results = useMemo(() => 
    searchResults(deferredQuery), [deferredQuery]
  );
  
  return (
    <div>
      {results.map(result => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  );
}
\`\`\`

## Performance Optimizasyonu

### 1. Code Splitting
\`\`\`jsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
\`\`\`

### 2. Memoization
\`\`\`jsx
import { memo, useMemo } from 'react';

const ExpensiveComponent = memo(({ data }) => {
  const processedData = useMemo(() => 
    expensiveCalculation(data), [data]
  );
  
  return <div>{processedData}</div>;
});
\`\`\`

## Modern Patterns

### 1. Custom Hooks
\`\`\`jsx
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [url]);
  
  return { data, loading, error };
}
\`\`\`

### 2. Context API
\`\`\`jsx
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  return useContext(ThemeContext);
}
\`\`\`

## Testing

### 1. Unit Testing
\`\`\`jsx
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
\`\`\`

### 2. Integration Testing
\`\`\`jsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test('increments counter on button click', () => {
  render(<Counter />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(screen.getByText('1')).toBeInTheDocument();
});
\`\`\`

## Sonuç

React 18 ile modern frontend geliştirme artık daha güçlü ve esnek. Concurrent features, Server Components ve yeni hooks ile daha performanslı uygulamalar geliştirebilirsiniz.`,
      category: 'web',
      categoryLabel: 'Web Development',
      tags: ['React', 'JavaScript', 'Frontend', 'Hooks', 'Performance'],
      author: 'Erencan Acıoğlu',
      publishDate: '2024-11-15',
      readTime: '13 min',
      featured: true,
      image: '/blog/react-18.jpg',
      views: 1050
    },
    {
      id: 12,
      title: 'Python ile Machine Learning: Başlangıçtan İleri Seviyeye',
      slug: 'python-machine-learning-baslangic-ileri-seviye',
      excerpt: 'Python ekosisteminde machine learning projeleri geliştirme: Pandas, NumPy, Scikit-learn, TensorFlow kullanımı ve gerçek dünya projelerinde ML model deployment süreçleri.',
      content: `# Python ile Machine Learning: Başlangıçtan İleri Seviyeye

Python, machine learning dünyasının en popüler dili. Bu yazıda, Python ekosisteminde ML projeleri nasıl geliştirileceğini ve gerçek dünya uygulamalarında nasıl kullanılacağını öğreneceksiniz.

## Python ML Ekosistemi

### 1. Temel Kütüphaneler
- **NumPy**: Sayısal hesaplamalar
- **Pandas**: Veri manipülasyonu
- **Matplotlib/Seaborn**: Veri görselleştirme
- **Scikit-learn**: Machine learning algoritmaları
- **TensorFlow/PyTorch**: Deep learning

### 2. Veri Bilimi Workflow'u
- Veri toplama ve temizleme
- Keşifsel veri analizi (EDA)
- Feature engineering
- Model eğitimi ve değerlendirme
- Model deployment

## Veri Manipülasyonu

### 1. Pandas ile Veri Analizi
\`\`\`python
import pandas as pd
import numpy as np

# Veri yükleme
df = pd.read_csv('data.csv')

# Temel istatistikler
print(df.describe())

# Eksik değerleri kontrol etme
print(df.isnull().sum())

# Eksik değerleri doldurma
df['age'].fillna(df['age'].median(), inplace=True)

# Kategorik değişkenleri encode etme
df = pd.get_dummies(df, columns=['category'])
\`\`\`

### 2. Veri Görselleştirme
\`\`\`python
import matplotlib.pyplot as plt
import seaborn as sns

# Histogram
plt.figure(figsize=(10, 6))
plt.hist(df['age'], bins=30, alpha=0.7)
plt.title('Age Distribution')
plt.xlabel('Age')
plt.ylabel('Frequency')
plt.show()

# Korelasyon matrisi
correlation_matrix = df.corr()
sns.heatmap(correlation_matrix, annot=True, cmap='coolwarm')
plt.title('Correlation Matrix')
plt.show()
\`\`\`

## Machine Learning Algoritmaları

### 1. Scikit-learn ile Model Eğitimi
\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report

# Veriyi train/test olarak bölme
X = df.drop('target', axis=1)
y = df['target']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Model eğitimi
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Tahmin yapma
y_pred = model.predict(X_test)

# Model değerlendirme
accuracy = accuracy_score(y_test, y_pred)
print(f'Accuracy: {accuracy:.2f}')
print(classification_report(y_test, y_pred))
\`\`\`

### 2. Cross Validation
\`\`\`python
from sklearn.model_selection import cross_val_score

# Cross validation
cv_scores = cross_val_score(model, X, y, cv=5)
print(f'CV Scores: {cv_scores}')
print(f'Mean CV Score: {cv_scores.mean():.2f}')
print(f'Std CV Score: {cv_scores.std():.2f}')
\`\`\`

## Deep Learning

### 1. TensorFlow ile Neural Network
\`\`\`python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout

# Model oluşturma
model = Sequential([
    Dense(128, activation='relu', input_shape=(X_train.shape[1],)),
    Dropout(0.2),
    Dense(64, activation='relu'),
    Dropout(0.2),
    Dense(32, activation='relu'),
    Dense(1, activation='sigmoid')
])

# Model derleme
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])

# Model eğitimi
history = model.fit(X_train, y_train, epochs=100, batch_size=32, validation_split=0.2)

# Model değerlendirme
test_loss, test_accuracy = model.evaluate(X_test, y_test)
print(f'Test Accuracy: {test_accuracy:.2f}')
\`\`\`

### 2. PyTorch ile Custom Model
\`\`\`python
import torch
import torch.nn as nn
import torch.optim as optim

class CustomModel(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(CustomModel, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.fc2 = nn.Linear(hidden_size, hidden_size)
        self.fc3 = nn.Linear(hidden_size, output_size)
        self.relu = nn.ReLU()
        self.dropout = nn.Dropout(0.2)
    
    def forward(self, x):
        x = self.relu(self.fc1(x))
        x = self.dropout(x)
        x = self.relu(self.fc2(x))
        x = self.dropout(x)
        x = self.fc3(x)
        return x

# Model oluşturma
model = CustomModel(input_size=X_train.shape[1], hidden_size=128, output_size=1)
criterion = nn.BCEWithLogitsLoss()
optimizer = optim.Adam(model.parameters(), lr=0.001)
\`\`\`

## Model Deployment

### 1. Model Kaydetme
\`\`\`python
import joblib
import pickle

# Scikit-learn modeli kaydetme
joblib.dump(model, 'model.pkl')

# TensorFlow modeli kaydetme
model.save('model.h5')

# Pickle ile kaydetme
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)
\`\`\`

### 2. Flask ile API
\`\`\`python
from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)

# Model yükleme
model = joblib.load('model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    features = np.array(data['features']).reshape(1, -1)
    prediction = model.predict(features)
    return jsonify({'prediction': prediction.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
\`\`\`

### 3. Docker ile Deployment
\`\`\`dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000

CMD ["python", "app.py"]
\`\`\`

## MLOps

### 1. Model Versioning
\`\`\`python
import mlflow
import mlflow.sklearn

# MLflow ile model tracking
with mlflow.start_run():
    mlflow.log_param("n_estimators", 100)
    mlflow.log_metric("accuracy", accuracy)
    mlflow.sklearn.log_model(model, "model")
\`\`\`

### 2. Model Monitoring
\`\`\`python
# Model drift detection
def detect_drift(reference_data, new_data):
    from scipy import stats
    
    # Statistical test
    statistic, p_value = stats.ks_2samp(reference_data, new_data)
    
    if p_value < 0.05:
        print("Model drift detected!")
        return True
    return False
\`\`\`

## Best Practices

### 1. Veri Kalitesi
- Eksik değerleri kontrol edin
- Outlier'ları tespit edin
- Veri tiplerini kontrol edin
- Duplicate kayıtları temizleyin

### 2. Model Seçimi
- Problem tipine uygun algoritma seçin
- Cross validation kullanın
- Hyperparameter tuning yapın
- Model interpretability'yi değerlendirin

### 3. Production Hazırlığı
- Model versioning
- A/B testing
- Monitoring ve alerting
- Rollback stratejileri

## Sonuç

Python ile machine learning, veri bilimi dünyasının en güçlü araçlarından biri. Bu teknikleri kullanarak gerçek dünya problemlerine çözümler geliştirebilirsiniz.`,
      category: 'ai',
      categoryLabel: 'Yapay Zeka',
      tags: ['Python', 'Machine Learning', 'Pandas', 'TensorFlow', 'Data Science', 'AI'],
      author: 'Erencan Acıoğlu',
      publishDate: '2024-11-10',
      readTime: '18 min',
      featured: true,
      image: '/blog/python-ml.jpg',
      views: 1400
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

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)
    setSubscriptionMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubscriptionMessage('✅ ' + data.message)
        setEmail('')
      } else {
        setSubscriptionMessage('❌ ' + data.error)
      }
    } catch (error) {
      setSubscriptionMessage('❌ Bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsSubscribing(false)
    }
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
                  <form onSubmit={handleSubscribe} className="space-y-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-posta adresiniz"
                      className="w-full px-3 py-2 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                      required
                    />
                    <button 
                      type="submit"
                      disabled={isSubscribing}
                      className="w-full btn-primary text-sm py-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubscribing ? 'Abone Olunuyor...' : 'Abone Ol'}
                    </button>
                    {subscriptionMessage && (
                      <p className={`text-sm ${subscriptionMessage.includes('✅') ? 'text-green-400' : 'text-red-400'}`}>
                        {subscriptionMessage}
                      </p>
                    )}
                  </form>
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
