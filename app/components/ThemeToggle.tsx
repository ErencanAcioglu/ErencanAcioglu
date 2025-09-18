'use client'

import { useTheme } from '../contexts/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  // Güvenli theme hook kullanımı
  let theme = 'dark'
  let toggleTheme = () => {}
  
  try {
    const themeContext = useTheme()
    theme = themeContext.theme
    toggleTheme = themeContext.toggleTheme
  } catch (error) {
    // ThemeProvider bulunamadığında varsayılan değerleri kullan
    console.warn('ThemeProvider not found, using default theme')
  }

  const handleClick = () => {
    console.log('Theme toggle clicked! Current theme:', theme)
    toggleTheme()
  }

  return (
    <button
      onClick={handleClick}
      className="relative p-3 rounded-full bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 hover:bg-primary-500/20 transition-all duration-300 group hover:scale-110 data-[theme=light]:bg-gray-100/50 data-[theme=light]:border-primary-300/20 data-[theme=light]:hover:bg-primary-100/20"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun 
          className={`absolute inset-0 w-6 h-6 text-yellow-400 transition-all duration-300 ${
            theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-75'
          }`} 
        />
        <Moon 
          className={`absolute inset-0 w-6 h-6 text-blue-400 transition-all duration-300 ${
            theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-75'
          }`} 
        />
      </div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-full transition-all duration-300 ${
        theme === 'light' 
          ? 'bg-yellow-400/20 shadow-lg shadow-yellow-400/25' 
          : 'bg-blue-400/20 shadow-lg shadow-blue-400/25'
      }`} />
      
    </button>
  )
}
