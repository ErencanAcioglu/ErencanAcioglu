'use client'

import { useState, useEffect, useRef } from 'react'
import { Code, Database, Brain, Smartphone, Gamepad2, Server, Zap, Coffee } from 'lucide-react'

interface Skill {
  name: string
  level: number
  icon: any
  color: string
  description: string
}

const CVGame = () => {
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(30)
  const [gameActive, setGameActive] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [currentSkill, setCurrentSkill] = useState<Skill | null>(null)
  const [skills, setSkills] = useState<Skill[]>([])
  const [hitEffect, setHitEffect] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const allSkills: Skill[] = [
    { name: 'React', level: 95, icon: Code, color: 'from-blue-400 to-blue-600', description: 'Frontend Framework' },
    { name: 'Node.js', level: 90, icon: Server, color: 'from-green-400 to-green-600', description: 'Backend Runtime' },
    { name: 'Python', level: 85, icon: Brain, color: 'from-yellow-400 to-yellow-600', description: 'AI & Data Science' },
    { name: 'TypeScript', level: 92, icon: Code, color: 'from-blue-500 to-blue-700', description: 'Type Safety' },
    { name: 'MongoDB', level: 80, icon: Database, color: 'from-green-500 to-green-700', description: 'NoSQL Database' },
    { name: 'React Native', level: 75, icon: Smartphone, color: 'from-purple-400 to-purple-600', description: 'Mobile Development' },
    { name: 'Unity', level: 70, icon: Gamepad2, color: 'from-orange-400 to-orange-600', description: 'Game Development' },
    { name: 'FastAPI', level: 88, icon: Zap, color: 'from-red-400 to-red-600', description: 'API Framework' }
  ]

  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
      return () => clearTimeout(timer)
    } else if (timeLeft === 0) {
      setGameActive(false)
      setGameOver(true)
    }
  }, [timeLeft, gameActive])

  useEffect(() => {
    if (gameActive && !gameOver) {
      const interval = setInterval(() => {
        const randomSkill = allSkills[Math.floor(Math.random() * allSkills.length)]
        setCurrentSkill(randomSkill)
        setSkills(prev => [...prev, randomSkill])
      }, 1500)

      return () => clearInterval(interval)
    }
  }, [gameActive, gameOver])

  const startGame = () => {
    setScore(0)
    setTimeLeft(30)
    setGameActive(true)
    setGameOver(false)
    setSkills([])
    setCurrentSkill(null)
  }

  const hitSkill = (skill: Skill) => {
    setScore(score + skill.level)
    setHitEffect(true)
    setTimeout(() => setHitEffect(false), 300)
    setSkills(prev => prev.filter(s => s !== skill))
  }

  const getScoreMessage = () => {
    if (score >= 2000) return "🚀 Mükemmel! Senior Developer seviyesi!"
    if (score >= 1500) return "💪 Harika! Mid-level Developer!"
    if (score >= 1000) return "👍 İyi! Junior Developer seviyesi!"
    return "💡 Devam et! Daha fazla skill öğren!"
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="glass rounded-3xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold gradient-text mb-4">
            🎯 CV Skill Hunter
          </h2>
          <p className="text-gray-300 mb-6">
            Erencan'ın teknik skillerini yakala! Her skill farklı puan değerinde.
          </p>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-400">{score}</div>
            <div className="text-sm text-gray-400">Puan</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{timeLeft}</div>
            <div className="text-sm text-gray-400">Saniye</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400">{skills.length}</div>
            <div className="text-sm text-gray-400">Aktif Skill</div>
          </div>
        </div>

        {/* Game Area */}
        <div className="relative bg-dark-800 rounded-2xl p-6 min-h-[400px] overflow-hidden">
          {!gameActive && !gameOver && (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-6xl mb-4">🎮</div>
              <h3 className="text-2xl font-bold mb-4">CV Skill Hunter</h3>
              <p className="text-gray-400 mb-6 text-center">
                Erencan'ın teknik skillerini yakala ve puan topla!<br/>
                Her skill farklı seviyede ve farklı puan değerinde.
              </p>
              <button 
                onClick={startGame}
                className="btn-primary text-lg px-8 py-3"
              >
                🚀 Oyunu Başlat
              </button>
            </div>
          )}

          {gameOver && (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4">Oyun Bitti!</h3>
              <div className="text-4xl font-bold text-primary-400 mb-4">{score} Puan</div>
              <p className="text-gray-300 mb-6 text-center">{getScoreMessage()}</p>
              <button 
                onClick={startGame}
                className="btn-primary text-lg px-8 py-3"
              >
                🔄 Tekrar Oyna
              </button>
            </div>
          )}

          {/* Skills Floating */}
          {gameActive && skills.map((skill, index) => (
            <div
              key={index}
              className={`absolute cursor-pointer transform transition-all duration-300 hover:scale-110 ${
                hitEffect ? 'animate-pulse' : ''
              }`}
              style={{
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 70}%`,
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => hitSkill(skill)}
            >
              <div className={`bg-gradient-to-r ${skill.color} p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center space-x-3">
                  <skill.icon className="w-6 h-6 text-white" />
                  <div>
                    <div className="font-bold text-white">{skill.name}</div>
                    <div className="text-xs text-white/80">{skill.description}</div>
                    <div className="text-xs text-white/60">Level: {skill.level}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            💡 <strong>Nasıl Oynanır:</strong> Ekranda beliren skill kartlarına tıklayarak yakala! 
            Her skill farklı puan değerinde. 30 saniyede en yüksek puanı topla!
          </p>
        </div>
      </div>
    </div>
  )
}

export default CVGame
