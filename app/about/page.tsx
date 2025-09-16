'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  MapPin, 
  Mail, 
  Phone, 
  Calendar,
  GraduationCap,
  Briefcase,
  Award,
  Code,
  Brain,
  Gamepad2,
  Server,
  Database,
  Cloud,
  Coffee,
  Music,
  Camera,
  Book,
  Dumbbell,
  Download,
  ExternalLink,
  ChevronRight
} from 'lucide-react'

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('experience')

  const personalInfo = {
    name: 'Erencan Acıoğlu',
    title: 'Full Stack Developer',
    location: 'Istanbul, Turkey',
    email: 'erencanacioglu8@gmail.com',
    phone: '+90 (505) 481 3545',
    linkedin: 'linkedin.com/in/erencanacioglu',
    github: 'github.com/erencanacioglu'
  }

  const workExperience = [
    {
      title: 'Software and Technology Lead',
      company: 'Pekel İnşaat Yatırım A.Ş.',
      location: 'Istanbul, Turkey',
      period: 'Sep 2025 – Present',
      description: 'Leading the company\'s software development and digital transformation initiatives.',
      responsibilities: [
        'Building in-house applications with backend and frontend technologies',
        'Managing technology investments and improving digital infrastructure'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AI/ML', 'Cloud Technologies']
    },
    {
      title: 'Full Stack Developer Intern – AI-Powered Chatbot Projects',
      company: 'ON7 Yazılım Ltd. Şti.',
      location: 'Ankara, Turkey',
      period: 'Aug 2025 – Present',
      description: 'Contributing to web application development using modern frontend and backend technologies.',
      responsibilities: [
        'Developing AI-powered chatbot solutions to improve user experience',
        'Building scalable full stack features with AI integration'
      ],
      technologies: ['React', 'Node.js', 'Python', 'FastAPI', 'Tailwind CSS']
    },
    {
      title: 'Full Stack Developer – AI-Powered ERP Data Integration',
      company: 'Şafak Örme Sanayi ve Ticaret A.Ş.',
      location: 'Istanbul, Turkey',
      period: 'May 2025 – Aug 2025',
      description: 'Developed full stack solutions to extract, transform, and visualize production data from a Frappe-based ERP system.',
      responsibilities: [
        'Built backend services with FastAPI & Flask, AI-powered data pipelines with Pandas',
        'Created dashboards with React & Metabase, managed deployments using Docker, Git, and Nginx'
      ],
      technologies: ['Python', 'FastAPI', 'Flask', 'Pandas', 'React', 'Tailwind CSS', 'Metabase', 'MongoDB', 'MariaDB', 'Docker']
    },
    {
      title: 'Freelance Full Stack Developer',
      company: 'TUAS Teknoloji A.Ş.',
      location: 'Istanbul, Turkey',
      period: 'February 2025 – Present',
      description: 'Developed www.tuas.com.tr with full stack solutions for backend and frontend.',
      responsibilities: [
        'Enhanced UI/UX using React, Tailwind CSS, TypeScript, and Webpack',
        'Applied Git, Docker, Swagger, JWT, and CI/CD best practices'
      ],
      technologies: ['.NET 6', 'ASP.NET Core', 'Entity Framework', 'PostgreSQL', 'RESTful APIs']
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Oregon Teknoloji Hizmetleri A.Ş.',
      location: 'Istanbul, Turkey',
      period: 'September 2024 – January 2025',
      description: 'Worked as a full stack developer in the logistics sector, crafting comprehensive, end-to-end solutions.',
      responsibilities: [
        'Delivered innovative software tailored specifically to industry needs',
        'Developed full-stack solutions using .NET, ASP.NET Core, Entity Framework, LINQ, React, SCSS, MVC, MSSQL'
      ],
      technologies: ['.NET', 'ASP.NET Core', 'Entity Framework', 'LINQ', 'React', 'SCSS', 'MVC', 'MSSQL']
    },
    {
      title: 'Full Stack Web Developer Intern',
      company: 'Modaltrans',
      location: 'Istanbul, Turkey',
      period: 'July 2024 – September 2024',
      description: 'Contributed as a full stack web developer on an innovative project, playing a key role in building it from the ground up.',
      responsibilities: [
        'Developed a full-stack project using JavaScript, React, PostgreSQL, Node.js, CSS, and Bootstrap',
        'Played a key role in building a project from scratch and gained valuable experience'
      ],
      technologies: ['JavaScript', 'React', 'PostgreSQL', 'Node.js', 'CSS', 'Bootstrap']
    },
    {
      title: 'Unity Game Developer',
      company: 'Google Oyun ve Uygulama Akademisi',
      location: 'Istanbul, Turkey',
      period: 'December 2023 – August 2024',
      description: 'Completed courses in game development and gained hands-on experience.',
      responsibilities: [
        'Completed "Introduction to Game Development with Unity" and "Specialization in Game Development with Unity" courses',
        'Completed Google\'s Project Management course on Coursera and Turkish Entrepreneurship Foundation\'s Entrepreneurship course',
        'Created AI-powered games and collaborated with a team to design advanced game mechanics'
      ],
      technologies: ['Unity', 'C#', 'Game Development', 'AI Integration']
    }
  ]

  const education = [
    {
      degree: 'Computer Engineering',
      school: 'Marmara University',
      location: 'Istanbul, Turkey',
      period: 'September 2022 - Present',
      description: 'Currently pursuing Bachelor\'s degree in Computer Engineering with focus on software development, algorithms, and system design.'
    }
  ]

  const projects = [
    {
      title: 'YoourCargo',
      description: 'A modern logistics platform developed for Oregon Teknoloji A.Ş. to streamline freight forwarding, shipment tracking, cost management, and digital documentation via a responsive dashboard.',
      tech: ['ASP.NET Core', 'Entity Framework', 'React', 'MSSQL', 'SCSS'],
      link: 'https://youurcargo.com',
      type: 'Web Platform'
    },
    {
      title: 'TUAS Web Platform',
      description: 'Developed a corporate website for TUAS Teknoloji A.Ş. with responsive UI components, dynamic content modules, and form handling. Delivered full-stack functionality with SEO optimization.',
      tech: ['.NET 6', 'ASP.NET Core', 'React', 'Tailwind CSS', 'PostgreSQL', 'Docker'],
      link: 'https://tuas.com.tr',
      type: 'Corporate Website'
    },
    {
      title: 'AI-Supported ERP Data Insight Tool',
      description: 'Currently building a smart ERP data analysis system for Şafak Örme A.Ş. Automates data extraction and visualization from a Frappe-based ERP using background workers and AI-supported pipelines.',
      tech: ['FastAPI', 'Pandas', 'React', 'Metabase', 'Celery', 'Docker'],
      type: 'AI/Data Tool'
    },
    {
      title: 'RateBrands',
      description: 'A social web app that allows users to rate and review emerging brands. Features include brand discovery, user registration, review filtering, and profile management.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      github: 'https://github.com/erencanacioglu/ratebrands',
      type: 'Social Platform'
    },
    {
      title: 'BlocksInTheMaze0.1',
      description: 'A Unity-based 3D puzzle game where the player navigates a ball through mazes to collect diamonds. Includes physics, scoring, and modular level design.',
      tech: ['Unity', 'C#'],
      github: 'https://github.com/erencanacioglu/BlocksInTheMaze0.1',
      type: 'Game'
    },
    {
      title: 'SpaceShooterEA0.2',
      description: 'A classic arcade-style space shooter developed in Unity. Features include wave-based enemy spawning, projectile mechanics, and visual/audio effects.',
      tech: ['Unity', 'C#'],
      github: 'https://github.com/erencanacioglu/SpaceShooterEA0.2',
      type: 'Game'
    }
  ]

  const skills = {
    'Programming Languages': ['JavaScript', 'TypeScript', 'Python', 'C#', 'Java', 'Swift', 'C', 'HTML5', 'CSS3', 'Bash', 'SQL'],
    'Frontend Technologies': ['React', 'Next.js', 'Angular', 'Vue.js', 'Tailwind CSS', 'SCSS', 'Bootstrap', 'jQuery', 'Webpack', 'Vite', 'Axios'],
    'Backend Technologies': ['.NET 6/7', 'ASP.NET Core', 'Entity Framework', 'Flask', 'FastAPI', 'Node.js', 'Express.js', 'RESTful APIs', 'GraphQL'],
    'Database & ORM': ['PostgreSQL', 'MSSQL', 'SQLite', 'MongoDB', 'MariaDB', 'Supabase', 'Prisma', 'Mongoose', 'Redis'],
    'DevOps & Tools': ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Swagger', 'Postman', 'Nginx', 'PM2', 'Bash scripting', 'CI/CD'],
    'Data & AI Technologies': ['Pandas', 'NumPy', 'OpenAI API', 'Google Gemini', 'ML Kit', 'Firebase ML', 'GPT models', 'TensorFlow', 'Scikit-learn'],
    'ERP & BI Tools': ['Frappe ERP', 'Metabase', 'Power BI', 'Excel', 'Pivot Tables', 'Macros', 'Tableau'],
    'Development Environments': ['Visual Studio', 'VS Code', 'IntelliJ IDEA', 'Rider', 'CLion', 'Xcode', 'Eclipse', 'PyCharm'],
    'Game Development': ['Unity', 'Unreal Engine', 'C# for Unity', 'Game Physics', '2D/3D Graphics', 'Mobile Game Optimization'],
    'Additional Technologies': ['JWT', 'OAuth2', 'MVC Pattern', 'Clean Architecture', 'Microservices', 'WebSockets', 'PWA']
  }

  const interests = [
    { name: 'Artificial Intelligence', icon: Brain, description: 'Machine Learning, GPT models, AI integration' },
    { name: 'Game Development', icon: Gamepad2, description: 'Unity, C#, 3D modeling, game mechanics' },
    { name: 'Music Production', icon: Music, description: 'Electronic music, sound design, audio engineering' },
    { name: 'Photography', icon: Camera, description: 'Street photography, digital editing, visual storytelling' },
    { name: 'Reading', icon: Book, description: 'Technology books, sci-fi novels, programming blogs' },
    { name: 'Fitness', icon: Dumbbell, description: 'Weight training, running, healthy lifestyle' }
  ]

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'skills', label: 'Skills', icon: Award }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <div className="glass rounded-3xl p-8 sticky top-24">
                {/* Profile Image */}
                <div className="text-center mb-8">
                  <div className="w-32 h-32 mx-auto mb-6 relative">
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                      EA
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-dark-900 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h1>
                  <p className="text-primary-400 font-semibold mb-4">{personalInfo.title}</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-primary-400" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-primary-400" />
                    <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-400 transition-colors duration-300">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-5 h-5 text-primary-400" />
                    <span>{personalInfo.phone}</span>
                  </div>
                </div>

                {/* Download CV Button */}
                <Link 
                  href="https://www.erencanacioglu.com/cv.pdf" 
                  target="_blank"
                  className="w-full btn-primary flex items-center justify-center mb-6"
                >
                  <Download className="w-5 h-5 mr-2" />
                  <span>CV İndir</span>
                </Link>

                {/* Interests */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">İlgi Alanlarım</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest, index) => {
                      const Icon = interest.icon
                      return (
                        <div key={index} className="group cursor-pointer">
                          <div className="bg-dark-800/50 rounded-lg p-3 text-center hover:bg-primary-500/10 transition-colors duration-300">
                            <Icon className="w-6 h-6 text-primary-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-xs text-gray-300 group-hover:text-primary-400 transition-colors duration-300">
                              {interest.name}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Merhaba! <span className="gradient-text">Ben Erencan</span>
                </h2>
                <div className="prose prose-lg text-gray-300 space-y-4">
                  <p>
                    <strong className="text-primary-400">Full Stack Developer</strong> olarak 
                    web, mobile ve AI teknolojileri konusunda deneyimli bir yazılım geliştiricisiyim. 
                    <strong className="text-primary-400"> Modern teknolojiler</strong> ile scalable uygulamalar geliştiriyor, 
                    yaratıcı ve performanslı çözümler üretiyorum.
                  </p>
                  <p>
                    <strong className="text-primary-400">JavaScript, TypeScript, React, Node.js, Python</strong> ve 
                    <strong className="text-primary-400"> Unity</strong> teknolojilerinde deneyimliyim. 
                    <strong className="text-primary-400"> AI/ML entegrasyonları</strong>, 
                    <strong className="text-primary-400"> mobile app development</strong> ve 
                    <strong className="text-primary-400"> game development</strong> ile çeşitli projeler geliştiriyorum.
                  </p>
                  <p>
                    <strong className="text-primary-400">Marmara Üniversitesi Bilgisayar Mühendisliği</strong> 
                    eğitimimi sürdürürken, sektörde aktif olarak çalışarak teorik bilgimi pratik deneyimle geliştiriyorum. 
                    <strong className="text-primary-400"> Modern development</strong> yaklaşımları, 
                    <strong className="text-primary-400"> collaborative teamwork</strong> ve 
                    <strong className="text-primary-400"> continuous learning</strong> ile projeler üretiyorum.
                  </p>
                </div>
              </div>

              {/* Tabs Navigation */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          activeTab === tab.id
                            ? 'bg-primary-500 text-white'
                            : 'bg-dark-800 text-gray-300 hover:bg-primary-500/10 hover:text-primary-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{tab.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Tab Content */}
              <div className="space-y-8">
                {/* Experience Tab */}
                {activeTab === 'experience' && (
                  <div className="space-y-6">
                    {workExperience.map((job, index) => (
                      <div key={index} className="glass rounded-2xl p-6 card-hover">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{job.title}</h3>
                            <p className="text-primary-400 font-semibold mb-1">{job.company}</p>
                            <p className="text-gray-400 text-sm flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </p>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm mt-2 sm:mt-0">
                            <Calendar className="w-4 h-4 mr-1" />
                            {job.period}
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-4">{job.description}</p>
                        
                        <ul className="space-y-2 mb-6">
                          {job.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start text-gray-300">
                              <ChevronRight className="w-4 h-4 text-primary-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs font-medium bg-dark-700 text-primary-300 rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Education Tab */}
                {activeTab === 'education' && (
                  <div className="space-y-6">
                    {education.map((edu, index) => (
                      <div key={index} className="glass rounded-2xl p-6 card-hover">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                            <p className="text-primary-400 font-semibold mb-1">{edu.school}</p>
                            <p className="text-gray-400 text-sm flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {edu.location}
                            </p>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm mt-2 sm:mt-0">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                        </div>
                        <p className="text-gray-300">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Projects Tab */}
                {activeTab === 'projects' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                      <div key={index} className="glass rounded-2xl p-6 card-hover">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-white">{project.title}</h3>
                          <span className="px-2 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-full">
                            {project.type}
                          </span>
                        </div>
                        
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.tech.map((tech) => (
                            <span key={tech} className="px-2 py-1 text-xs font-medium bg-dark-700 text-primary-300 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          {project.link && (
                            <Link 
                              href={project.link} 
                              target="_blank"
                              className="flex items-center text-primary-400 hover:text-primary-300 text-sm font-medium"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              <span>Live Demo</span>
                            </Link>
                          )}
                          {project.github && (
                            <Link 
                              href={project.github} 
                              target="_blank"
                              className="flex items-center text-gray-400 hover:text-white text-sm font-medium"
                            >
                              <Code className="w-4 h-4 mr-1" />
                              <span>GitHub</span>
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills Tab */}
                {activeTab === 'skills' && (
                  <div className="space-y-8">
                    {Object.entries(skills).map(([category, skillList]) => (
                      <div key={category} className="glass rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                          {category === 'Languages' && <Code className="w-5 h-5 mr-2 text-primary-400" />}
                          {category === 'Frontend' && <Code className="w-5 h-5 mr-2 text-primary-400" />}
                          {category === 'Backend' && <Server className="w-5 h-5 mr-2 text-primary-400" />}
                          {category === 'Database & ORM' && <Database className="w-5 h-5 mr-2 text-primary-400" />}
                          {category === 'DevOps & Tools' && <Cloud className="w-5 h-5 mr-2 text-primary-400" />}
                          {category === 'Data & AI' && <Brain className="w-5 h-5 mr-2 text-primary-400" />}
                          {category === 'ERP & BI' && <Briefcase className="w-5 h-5 mr-2 text-primary-400" />}
                          {category === 'IDEs' && <Code className="w-5 h-5 mr-2 text-primary-400" />}
                          {category === 'Other' && <Award className="w-5 h-5 mr-2 text-primary-400" />}
                          {category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skillList.map((skill) => (
                            <span 
                              key={skill} 
                              className="px-3 py-2 bg-dark-700 text-gray-300 rounded-lg hover:bg-primary-500/20 hover:text-primary-300 transition-colors duration-300 cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
