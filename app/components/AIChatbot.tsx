'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showWelcomePopup, setShowWelcomePopup] = useState(true)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Merhaba! Ben Erencan\'ın AI asistanıyım. Size nasıl yardımcı olabilirim?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  // Welcome popup'ı chat açılana kadar göster
  useEffect(() => {
    if (isOpen) {
      setShowWelcomePopup(false)
    }
  }, [isOpen])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (message: string) => {
    if (!message.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })

      const data = await response.json()
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: data.response,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: 'Üzgünüm, bir hata oluştu. Lütfen tekrar deneyin.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(input)
  }

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        type: 'bot',
        content: 'Merhaba! Ben Erencan\'ın AI asistanıyım. Size nasıl yardımcı olabilirim?',
        timestamp: new Date()
      }
    ])
  }

  return (
    <>
      {/* Welcome Popup - Chat butonunun hemen üstünde, sağ alt köşede */}
      {showWelcomePopup && !isOpen && (
        <div 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-20 right-6 z-40 max-w-xs sm:max-w-sm sm:bottom-16 sm:right-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white p-4 rounded-lg shadow-2xl animate-bounce cursor-pointer hover:scale-105 transition-transform duration-200"
        >
          <div className="flex items-center space-x-2">
            <Bot className="w-5 h-5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm">Merhaba! 👋</p>
              <p className="text-xs opacity-90">Ben Erencan'ın AI asistanıyım. Size nasıl yardımcı olabilirim?</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowWelcomePopup(false)
              }}
              className="ml-2 text-white/70 hover:text-white flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          {/* Ok işareti - chat butonuna işaret ediyor */}
          <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary-500"></div>
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group sm:bottom-4 sm:right-4"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-color)',
          border: '1px solid'
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-colors duration-500" style={{ color: 'var(--text-primary)' }} />
        ) : (
          <MessageCircle className="w-6 h-6 transition-colors duration-500" style={{ color: 'var(--text-primary)' }} />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-96 h-96 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-96 lg:h-96 rounded-xl shadow-2xl transition-all duration-300 max-w-[calc(100vw-3rem)] max-h-[calc(100vh-8rem)] sm:bottom-20 sm:right-4 sm:w-auto sm:h-auto sm:max-w-none sm:max-h-[calc(100vh-6rem)]" style={{
          backgroundColor: 'var(--bg-secondary)',
          borderColor: 'var(--border-color)',
          border: '1px solid'
        }}>
          {/* Chat window'a da ok işareti ekleyelim */}
          <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary-500"></div>
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b rounded-t-xl" style={{
            backgroundColor: 'var(--bg-tertiary)',
            borderColor: 'var(--border-color)'
          }}>
            <div className="flex items-center space-x-2">
              <Bot className="w-5 h-5 transition-colors duration-500" style={{ color: 'var(--text-primary)' }} />
              <span className="font-semibold transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
                AI Asistan
              </span>
            </div>
            <button
              onClick={clearChat}
              className="text-xs px-2 py-1 rounded transition-colors duration-500 hover:bg-opacity-20"
              style={{ 
                color: 'var(--text-muted)',
                backgroundColor: 'var(--bg-primary)'
              }}
            >
              Temizle
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 h-64">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.type === 'user'
                      ? 'rounded-br-sm'
                      : 'rounded-bl-sm'
                  }`}
                  style={{
                    backgroundColor: message.type === 'user' 
                      ? 'var(--bg-primary)' 
                      : 'var(--bg-tertiary)',
                    color: 'var(--text-primary)'
                  }}
                >
                  <div className="flex items-start space-x-2">
                    {message.type === 'bot' && (
                      <Bot className="w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-500" style={{ color: 'var(--text-muted)' }} />
                    )}
                    {message.type === 'user' && (
                      <User className="w-4 h-4 mt-0.5 flex-shrink-0 transition-colors duration-500" style={{ color: 'var(--text-muted)' }} />
                    )}
                    <div className="text-sm">
                      {message.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2 px-3 py-2 rounded-lg" style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)'
                }}>
                  <Bot className="w-4 h-4 transition-colors duration-500" style={{ color: 'var(--text-muted)' }} />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Mesajınızı yazın..."
                className="flex-1 px-3 py-2 rounded-lg text-sm transition-colors duration-500"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  borderColor: 'var(--border-color)',
                  border: '1px solid'
                }}
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="p-2 rounded-lg transition-all duration-300 disabled:opacity-50"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)'
                }}
              >
                {isTyping ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default AIChatbot
