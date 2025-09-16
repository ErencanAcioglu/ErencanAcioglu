'use client'

import { useState, useEffect, useRef } from 'react'
import { Terminal } from 'lucide-react'

interface TerminalLine {
  type: 'input' | 'output' | 'error'
  content: string
  timestamp?: string
}

const InteractiveTerminal = () => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<TerminalLine[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [isTyping, setIsTyping] = useState(false)
  const [showCursor, setShowCursor] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  // Komut tanımları
  const commands = {
    help: {
      description: 'Mevcut komutları listeler',
      execute: () => [
        'Mevcut komutlar:',
        '  help          - Bu yardım menüsünü gösterir',
        '  whoami        - Kullanıcı bilgilerini gösterir',
        '  ls            - Projeleri listeler',
        '  cat cv.txt    - CV\'yi gösterir',
        '  skills        - Yetenekleri listeler',
        '  contact       - İletişim bilgilerini gösterir',
        '  neofetch      - Sistem bilgilerini gösterir',
        '  fortune       - Rastgele bir söz gösterir',
        '  matrix        - Matrix efekti başlatır',
        '  clear         - Terminali temizler',
        '  exit          - Terminali kapatır'
      ]
    },
    whoami: {
      description: 'Kullanıcı bilgilerini gösterir',
      execute: () => [
        'Kullanıcı: Erencan Acıoğlu',
        'Rol: Full Stack Developer',
        'Lokasyon: İstanbul, Türkiye',
        'Uzmanlık: React, Node.js, Python, Unity',
        'Durum: Aktif olarak proje geliştiriyor'
      ]
    },
    ls: {
      description: 'Projeleri listeler',
      execute: () => [
        'Projeler:',
        '  📁 portfolio-website/     - Kişisel portföy sitesi',
        '  📁 cv-game/              - İnteraktif CV oyunu',
        '  📁 mobile-cv/            - Mobil CV arayüzü',
        '  📁 blog-system/          - Blog yönetim sistemi',
        '  📁 ai-projects/          - AI/ML projeleri',
        '  📁 game-development/     - Unity oyun projeleri'
      ]
    },
    'cat cv.txt': {
      description: 'CV\'yi gösterir',
      execute: () => [
        'ERENCAN ACIOGLU - CV',
        '========================',
        '',
        '📧 Email: erencan@example.com',
        '🌐 Website: erencanacioglu.com',
        '💼 LinkedIn: linkedin.com/in/erencanacioglu',
        '🐙 GitHub: github.com/erencanacioglu',
        '',
        '🎓 EĞİTİM:',
        'Marmara Üniversitesi - Bilgisayar Mühendisliği (2022-Devam)',
        '',
        '💼 DENEYİM:',
        'Oregon Teknoloji A.Ş. - Full Stack Developer (2023-Devam)',
        'Oyun Akademisi - Game Developer (2022-2023)',
        '',
        '🛠️ TEKNOLOJİLER:',
        'Frontend: React, Next.js, TypeScript, Tailwind CSS',
        'Backend: Node.js, Python, Express.js, FastAPI',
        'Database: MongoDB, PostgreSQL, Redis',
        'Mobile: React Native, Unity, Flutter',
        'AI/ML: TensorFlow, PyTorch, Scikit-learn'
      ]
    },
    skills: {
      description: 'Yetenekleri listeler',
      execute: () => [
        'YETENEKLER:',
        '===========',
        '',
        '💻 PROGRAMLAMA DİLLERİ:',
        '  JavaScript/TypeScript  ████████████████████ 95%',
        '  Python                 ████████████████████ 90%',
        '  C#                     ████████████████████ 85%',
        '  Java                   ████████████████████ 80%',
        '',
        '🌐 WEB TEKNOLOJİLERİ:',
        '  React/Next.js          ████████████████████ 95%',
        '  Node.js/Express        ████████████████████ 90%',
        '  HTML/CSS               ████████████████████ 95%',
        '  Tailwind CSS           ████████████████████ 90%',
        '',
        '🎮 OYUN GELİŞTİRME:',
        '  Unity                  ████████████████████ 85%',
        '  C# Game Development    ████████████████████ 80%',
        '  2D/3D Game Design      ████████████████████ 75%'
      ]
    },
    contact: {
      description: 'İletişim bilgilerini gösterir',
      execute: () => [
        'İLETİŞİM BİLGİLERİ:',
        '==================',
        '',
        '📧 Email: erencan@example.com',
        '📱 Telefon: +90 555 123 45 67',
        '🌐 Website: erencanacioglu.com',
        '💼 LinkedIn: linkedin.com/in/erencanacioglu',
        '🐙 GitHub: github.com/erencanacioglu',
        '📍 Lokasyon: İstanbul, Türkiye',
        '',
        '💬 Mesaj göndermek için: erencan@example.com'
      ]
    },
    neofetch: {
      description: 'Sistem bilgilerini gösterir',
      execute: () => [
        '       ███████╗██████╗ ███████╗███╗   ██╗ ██████╗ █████╗ ███╗   ██╗',
        '       ██╔════╝██╔══██╗██╔════╝████╗  ██║██╔════╝██╔══██╗████╗  ██║',
        '       █████╗  ██████╔╝█████╗  ██╔██╗ ██║██║     ███████║██╔██╗ ██║',
        '       ██╔══╝  ██╔══██╗██╔══╝  ██║╚██╗██║██║     ██╔══██║██║╚██╗██║',
        '       ██║     ██║  ██║███████╗██║ ╚████║╚██████╗██║  ██║██║ ╚████║',
        '       ╚═╝     ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═══╝',
        '',
        'OS: ErencanOS 1.0.0',
        'Kernel: React 18.2.0',
        'Shell: TypeScript 5.0.0',
        'DE: Next.js 14.0.0',
        'CPU: Intel i7-12700K',
        'GPU: RTX 4070',
        'Memory: 32GB DDR4',
        'Storage: 1TB NVMe SSD'
      ]
    },
    fortune: {
      description: 'Rastgele bir söz gösterir',
      execute: () => {
        const fortunes = [
          'Kod yazmak bir sanattır, debug etmek ise bir bilimdir.',
          'Programcılar doğar, geliştiriciler olunur.',
          'Kod yazarken hata yapmak normaldir, önemli olan öğrenmektir.',
          'En iyi kod, yazılması en kolay olan koddur.',
          'Teknoloji sadece bir araçtır, asıl önemli olan yaratıcılıktır.',
          'Her bug bir öğrenme fırsatıdır.',
          'Kod yazmak puzzle çözmek gibidir, sabır gerektirir.',
          'En iyi geliştirici, sürekli öğrenen geliştiricidir.'
        ]
        return [fortunes[Math.floor(Math.random() * fortunes.length)]]
      }
    },
    matrix: {
      description: 'Matrix efekti başlatır',
      execute: () => [
        'Matrix efekti başlatılıyor...',
        '01001000 01100101 01101100 01101100 01101111',
        '01010111 01101111 01110010 01101100 01100100',
        'Matrix rain efekti aktif!',
        'Çıkmak için herhangi bir tuşa basın...'
      ]
    },
    clear: {
      description: 'Terminali temizler',
      execute: () => []
    }
  }

  // Terminal başlangıç mesajı
  useEffect(() => {
    const welcomeMessage = [
      { type: 'output' as const, content: 'Erencan Acıoğlu Terminal v1.0.0' },
      { type: 'output' as const, content: 'Type "help" for available commands.' },
      { type: 'output' as const, content: '' }
    ]
    setHistory(welcomeMessage)
  }, [])

  // Cursor blink efekti
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Komut çalıştırma
  const executeCommand = async (cmd: string) => {
    const trimmedCmd = cmd.trim()
    
    if (trimmedCmd === '') return

    // Komut geçmişine ekle
    setCommandHistory(prev => [...prev, trimmedCmd])
    setHistoryIndex(-1)

    // Input'u history'ye ekle
    setHistory(prev => [...prev, { type: 'input', content: `$ ${trimmedCmd}` }])

    // Komut işleme
    if (trimmedCmd === 'clear') {
      setHistory([])
      return
    }

    if (trimmedCmd === 'exit') {
      setHistory(prev => [...prev, { type: 'output', content: 'Terminal kapatılıyor...' }])
      return
    }

    const command = commands[trimmedCmd as keyof typeof commands]
    
    if (command) {
      setIsTyping(true)
      
      // Typing efekti için gecikme
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const output = command.execute()
      output.forEach((line, index) => {
        setTimeout(() => {
          setHistory(prev => [...prev, { type: 'output', content: line }])
          if (index === output.length - 1) {
            setIsTyping(false)
          }
        }, index * 100)
      })
    } else {
      setHistory(prev => [...prev, { 
        type: 'error', 
        content: `Command not found: ${trimmedCmd}. Type "help" for available commands.` 
      }])
    }
  }

  // Enter tuşu
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      executeCommand(input)
      setInput('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[commandHistory.length - 1 - newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  // Terminal scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  return (
    <div className="bg-black/90 backdrop-blur-sm rounded-lg border border-green-500/20 shadow-2xl max-w-4xl mx-auto">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 rounded-t-lg border-b border-green-500/20">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-green-400 font-mono text-sm">Erencan Terminal</span>
        </div>
        <div className="flex items-center space-x-2">
          <Terminal className="w-4 h-4 text-green-400" />
          <span className="text-green-400 font-mono text-xs">v1.0.0</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div 
        ref={terminalRef}
        className="h-96 overflow-y-auto p-4 font-mono text-sm bg-black/50"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((line, index) => (
          <div key={index} className="mb-1">
            {line.type === 'input' && (
              <div className="text-green-400">{line.content}</div>
            )}
            {line.type === 'output' && (
              <div className="text-gray-300">{line.content}</div>
            )}
            {line.type === 'error' && (
              <div className="text-red-400">{line.content}</div>
            )}
          </div>
        ))}
        
        {/* Current Input Line */}
        <div className="flex items-center">
          <span className="text-green-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="bg-transparent text-gray-300 outline-none flex-1 font-mono"
            placeholder="Type a command..."
            autoFocus
          />
          {showCursor && <span className="text-green-400 animate-blink">|</span>}
        </div>
      </div>

      {/* Terminal Footer */}
      <div className="px-4 py-2 bg-gray-800/50 rounded-b-lg border-t border-green-500/20">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>Press ↑↓ for command history</span>
          <span>Type 'help' for commands</span>
        </div>
      </div>
    </div>
  )
}

export default InteractiveTerminal