'use client'

import { useState } from 'react'
import { Download, Mail, Phone, MapPin, Linkedin, Github, Code, Database, Brain, Smartphone, Gamepad2, Server, Zap, Coffee, Award, Calendar, Briefcase, User } from 'lucide-react'

const MobileCV = () => {
  const [activeTab, setActiveTab] = useState('personal')

  const personalInfo = {
    name: 'Erencan Acıoğlu',
    title: 'Full Stack Developer',
    location: 'Istanbul, Turkey',
    email: 'erencanacioglu8@gmail.com',
    phone: '+90 (505) 481 3545',
    linkedin: 'linkedin.com/in/erencanacioglu',
    github: 'github.com/erencanacioglu'
  }

  const skills = [
    { name: 'React', icon: Code },
    { name: 'Node.js', icon: Server },
    { name: 'Python', icon: Brain },
    { name: 'TypeScript', icon: Code },
    { name: 'MongoDB', icon: Database },
    { name: 'React Native', icon: Smartphone },
    { name: 'Unity', icon: Gamepad2 },
    { name: 'FastAPI', icon: Zap },
    { name: 'Next.js', icon: Code },
    { name: 'PostgreSQL', icon: Database },
    { name: 'Docker', icon: Server },
    { name: 'AWS', icon: Server }
  ]

  const experience = [
    {
      title: 'Software and Technology Lead',
      company: 'Pekel İnşaat Yatırım A.Ş.',
      period: 'Sep 2025 – Present',
      description: 'Leading the company\'s software development and digital transformation initiatives.'
    },
    {
      title: 'Full Stack Developer Intern – AI-Powered Chatbot Projects',
      company: 'ON7 Yazılım Ltd. Şti.',
      period: 'Aug 2025 – Present',
      description: 'Contributing to web application development using modern frontend and backend technologies.'
    },
    {
      title: 'Full Stack Developer – AI-Powered ERP Data Integration',
      company: 'Şafak Örme Sanayi ve Ticaret A.Ş.',
      period: 'May 2025 – Aug 2025',
      description: 'Developed full stack solutions to extract, transform, and visualize production data from a Frappe-based ERP system.'
    },
    {
      title: 'Freelance Full Stack Developer',
      company: 'TUAS Teknoloji A.Ş.',
      period: 'February 2025 – Present',
      description: 'Developed www.tuas.com.tr with full stack solutions for backend and frontend.'
    },
    {
      title: 'Full Stack Web Developer',
      company: 'Oregon Teknoloji Hizmetleri A.Ş.',
      period: 'September 2024 – January 2025',
      description: 'Worked as a full stack developer in the logistics sector, crafting comprehensive, end-to-end solutions.'
    },
    {
      title: 'Full Stack Web Developer Intern',
      company: 'Modaltrans',
      period: 'July 2024 – September 2024',
      description: 'Contributed as a full stack web developer on an innovative project, playing a key role in building it from the ground up.'
    },
    {
      title: 'Unity Game Developer',
      company: 'Google Oyun ve Uygulama Akademisi',
      period: 'December 2023 – August 2024',
      description: 'Completed courses in game development and gained hands-on experience.'
    }
  ]

  const education = [
    {
      degree: 'Computer Engineering',
      school: 'Marmara University',
      period: 'September 2022 - Present',
      description: 'Currently pursuing Bachelor\'s degree in Computer Engineering with focus on software development, algorithms, and system design.'
    }
  ]

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* iPhone Frame */}
      <div className="relative bg-gray-800 rounded-[3rem] p-2 shadow-2xl">
        {/* iPhone Screen */}
        <div className="bg-black rounded-[2.5rem] overflow-hidden">
          {/* Status Bar */}
          <div className="bg-black px-6 py-2 flex justify-between items-center text-white text-sm">
            <span className="font-semibold">17:46</span>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-4 h-2 bg-white rounded-sm"></div>
              <div className="w-6 h-3 bg-white rounded-sm flex items-center justify-end pr-1">
                <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* App Content */}
          <div className="bg-gradient-to-br from-dark-900 to-dark-800 min-h-[600px]">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-4 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">EA</span>
              </div>
              <h1 className="text-lg font-bold text-white mb-1">{personalInfo.name}</h1>
              <p className="text-primary-100 text-sm">{personalInfo.title}</p>
              <div className="flex items-center justify-center mt-2 text-primary-100">
                <MapPin className="w-3 h-3 mr-1" />
                <span className="text-xs">{personalInfo.location}</span>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex bg-dark-800">
              {[
                { id: 'personal', label: 'Kişisel', icon: User },
                { id: 'skills', label: 'Yetenekler', icon: Code },
                { id: 'experience', label: 'Deneyim', icon: Briefcase },
                { id: 'education', label: 'Eğitim', icon: Award }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 p-2 text-xs font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-primary-400 border-b-2 border-primary-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <tab.icon className="w-3 h-3 mx-auto mb-1" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-4 max-h-80 overflow-y-auto">
              {activeTab === 'personal' && (
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-primary-400" />
                    <span className="text-gray-300 text-sm">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-primary-400" />
                    <span className="text-gray-300 text-sm">{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Linkedin className="w-4 h-4 text-primary-400" />
                    <span className="text-gray-300 text-sm">{personalInfo.linkedin}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Github className="w-4 h-4 text-primary-400" />
                    <span className="text-gray-300 text-sm">{personalInfo.github}</span>
                  </div>
                  <div className="pt-3">
                    <a 
                      href="/api/cv" 
                      className="w-full btn-primary flex items-center justify-center text-sm py-2"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      CV İndir
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'skills' && (
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <skill.icon className="w-4 h-4 text-primary-400" />
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'experience' && (
                <div className="space-y-3">
                  {experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary-400 pl-3">
                      <h3 className="font-semibold text-white text-sm">{exp.title}</h3>
                      <p className="text-primary-400 text-xs">{exp.company}</p>
                      <p className="text-gray-400 text-xs">{exp.period}</p>
                      <p className="text-gray-300 text-xs mt-1">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'education' && (
                <div className="space-y-3">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary-400 pl-3">
                      <h3 className="font-semibold text-white text-sm">{edu.degree}</h3>
                      <p className="text-primary-400 text-xs">{edu.school}</p>
                      <p className="text-gray-400 text-xs">{edu.period}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileCV
