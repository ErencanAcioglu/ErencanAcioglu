import { NextRequest } from 'next/server'
import validator from 'validator'

// Rate limiting için basit in-memory store
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

// Rate limiting middleware
export function rateLimit(limit: number, windowMs: number) {
  return (req: NextRequest): { allowed: boolean; remaining: number } => {
    const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown'
    const now = Date.now()
    const key = `${ip}:${Math.floor(now / windowMs)}`
    
    const current = rateLimitStore.get(key) || { count: 0, resetTime: now + windowMs }
    
    if (now > current.resetTime) {
      current.count = 0
      current.resetTime = now + windowMs
    }
    
    current.count++
    rateLimitStore.set(key, current)
    
    return {
      allowed: current.count <= limit,
      remaining: Math.max(0, limit - current.count)
    }
  }
}

// Basit input sanitization (XSS koruması)
export function sanitizeInput(input: string): string {
  if (!input) return ''
  
  // Sadece temel XSS koruması
  return input
    .replace(/[<>]/g, '') // < ve > karakterlerini kaldır
    .trim()
}

// E-posta doğrulama (gelişmiş)
export function validateEmail(email: string): boolean {
  return validator.isEmail(email) && 
         email.length <= 254 &&
         !email.includes('..') &&
         !email.startsWith('.') &&
         !email.endsWith('.')
}

// XSS koruması (basit HTML sanitization)
export function sanitizeHtml(html: string): string {
  if (!html) return ''
  
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // script tag'lerini kaldır
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '') // iframe tag'lerini kaldır
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '') // object tag'lerini kaldır
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, '') // embed tag'lerini kaldır
    .replace(/on\w+="[^"]*"/gi, '') // onclick, onload gibi event handler'ları kaldır
    .replace(/javascript:/gi, '') // javascript: protokolünü kaldır
}

// Bot detection (basit)
export function detectBot(userAgent: string): boolean {
  const botPatterns = [
    /bot/i, /crawler/i, /spider/i, /scraper/i,
    /curl/i, /wget/i, /python/i, /java/i,
    /postman/i, /insomnia/i, /httpie/i
  ]
  
  return botPatterns.some(pattern => pattern.test(userAgent))
}

// Honeypot field validation
export function validateHoneypot(honeypot: string): boolean {
  return !honeypot || honeypot.trim() === ''
}

// IP whitelist/blacklist
export function isAllowedIP(ip: string): boolean {
  const blacklistedIPs = [
    // Şüpheli IP'ler buraya eklenebilir
  ]
  
  const whitelistedIPs = [
    // Güvenilir IP'ler buraya eklenebilir
  ]
  
  if (whitelistedIPs.length > 0) {
    return whitelistedIPs.includes(ip)
  }
  
  return !blacklistedIPs.includes(ip)
}

// Security headers
export const securityHeaders = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://generativelanguage.googleapis.com;"
}

// Request validation
export function validateRequest(req: NextRequest): { valid: boolean; error?: string } {
  const userAgent = req.headers.get('user-agent') || ''
  
  // Bot detection
  if (detectBot(userAgent)) {
    return { valid: false, error: 'Bot detected' }
  }
  
  // IP validation
  const ip = req.ip || req.headers.get('x-forwarded-for') || 'unknown'
  if (!isAllowedIP(ip)) {
    return { valid: false, error: 'IP not allowed' }
  }
  
  return { valid: true }
}
