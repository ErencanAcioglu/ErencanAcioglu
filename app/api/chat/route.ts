import { NextRequest, NextResponse } from 'next/server'
import { rateLimit, sanitizeInput, validateRequest, securityHeaders } from '../../../lib/security'

export async function POST(request: NextRequest) {
  try {
    // Rate limiting (10 istek/dakika) - Geçici olarak devre dışı
    // const rateLimitCheck = rateLimit(10, 60000)
    // const { allowed } = rateLimitCheck(request)
    
    // if (!allowed) {
    //   return NextResponse.json(
    //     { response: 'Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyin.' },
    //     { status: 429, headers: { 'Retry-After': '60' } }
    //   )
    // }

    // Request validation - Geçici olarak devre dışı
    // const requestValidation = validateRequest(request)
    // if (!requestValidation.valid) {
    //   return NextResponse.json(
    //     { response: 'Geçersiz istek.' },
    //     { status: 403 }
    //   )
    // }

    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ response: 'Message is required' }, { status: 400 })
    }

    // Input sanitization - Geçici olarak devre dışı
    // const sanitizedMessage = sanitizeInput(message)
    const sanitizedMessage = message

    // Gemini API key kontrolü
    const apiKey = process.env.GEMINI_API_KEY
    console.log('API Key exists:', !!apiKey)
    console.log('API Key length:', apiKey?.length)
    
    if (!apiKey) {
      return NextResponse.json({ 
        response: 'Üzgünüm, AI asistan şu anda kullanılamıyor. Lütfen daha sonra tekrar deneyin.' 
      })
    }

    // Erencan hakkında context
    const context = `
Sen Erencan Acıoğlu'nun AI asistanısın. Erencan hakkında şu bilgilere sahipsin:

KİŞİSEL BİLGİLER:
- Ad: Erencan Acıoğlu
- Meslek: Full Stack Developer
- Lokasyon: İstanbul, Türkiye
- E-posta: erencan@erencanacioglu.com
- Telefon: +90 (505) 481 3545
- LinkedIn: linkedin.com/in/erencanacioglu
- GitHub: github.com/erencanacioglu

TEKNİK YETENEKLER:
- Frontend: React, Next.js, TypeScript, Tailwind CSS
- Backend: Node.js, Python, FastAPI, ASP.NET Core
- Database: MongoDB, PostgreSQL, MSSQL
- Mobile: React Native, Unity
- AI/ML: Machine Learning, Python
- Cloud: AWS, Docker
- Diğer: Unity (Oyun geliştirme)

DENEYİM:
- Software and Technology Lead - Pekel İnşaat Yatırım A.Ş. (Sep 2025 – Present)
- Full Stack Developer Intern - ON7 Yazılım Ltd. Şti. (Aug 2025 – Present)
- Full Stack Developer - Şafak Örme Sanayi ve Ticaret A.Ş. (May 2025 – Aug 2025)
- Freelance Full Stack Developer - TUAS Teknoloji A.Ş. (February 2025 – Present)
- Full Stack Web Developer - Oregon Teknoloji Hizmetleri A.Ş. (September 2024 – January 2025)
- Full Stack Web Developer Intern - Modaltrans (July 2024 – September 2024)
- Unity Game Developer - Google Oyun ve Uygulama Akademisi (December 2023 – August 2024)

EĞİTİM:
- Marmara University - Computer Engineering (September 2022 - Present)

PROJELER:
- CV Skill Hunter Game (React, TypeScript)
- Mobile CV Interface (React Native)
- YoourCargo Logistics Platform (ASP.NET Core, React)
- AI-Powered ERP Data Integration (Python, FastAPI)
- Corporate Website (TUAS Teknoloji)

GÖREVİN:
- Erencan hakkında soruları yanıtla
- Teknik konularda yardım et
- Projeler hakkında bilgi ver
- İletişim bilgilerini paylaş
- Dostane ve profesyonel bir ton kullan
- Türkçe yanıt ver
- Kısa ve öz yanıtlar ver

Kullanıcı sorusu: ${sanitizedMessage}
`

    // Gemini API çağrısı
    console.log('Sending request to Gemini API...')
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: context
          }]
        }]
      })
    })

    console.log('Gemini API response status:', response.status)
    console.log('Gemini API response headers:', response.headers)

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Gemini API error response:', errorText)
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`)
    }

    const data = await response.json()
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Üzgünüm, yanıt veremiyorum.'

    return NextResponse.json(
      { response: aiResponse },
      { headers: securityHeaders }
    )

  } catch (error) {
    console.error('Chat API error:', error)
    console.error('Error details:', error.message)
    return NextResponse.json({ 
      response: `Üzgünüm, bir hata oluştu: ${error.message}` 
    })
  }
}
