import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { rateLimit, sanitizeInput, validateEmail, validateRequest, securityHeaders } from '../../../lib/security'

const resend = new Resend(process.env.RESEND_API_KEY)

// E-posta abonelik listesi (gerçek uygulamada veritabanı kullanılmalı)
let subscribers: string[] = []

export async function POST(request: NextRequest) {
  try {
    // Rate limiting (3 istek/dakika) - Geçici olarak devre dışı
    // const rateLimitCheck = rateLimit(3, 60000)
    // const { allowed } = rateLimitCheck(request)
    
    // if (!allowed) {
    //   return NextResponse.json(
    //     { error: 'Çok fazla istek gönderdiniz. Lütfen bir dakika bekleyin.' },
    //     { status: 429, headers: { 'Retry-After': '60' } }
    //   )
    // }

    // Request validation - Geçici olarak devre dışı
    // const requestValidation = validateRequest(request)
    // if (!requestValidation.valid) {
    //   return NextResponse.json(
    //     { error: 'Geçersiz istek.' },
    //     { status: 403 }
    //   )
    // }

    const { email } = await request.json()

    // Input sanitization - Geçici olarak devre dışı
    // const sanitizedEmail = sanitizeInput(email || '')
    const sanitizedEmail = email || ''

    // E-posta doğrulama (gelişmiş)
    if (!email || !validateEmail(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      )
    }

    // Zaten abone olup olmadığını kontrol et
    if (subscribers.includes(email)) {
      return NextResponse.json(
        { message: 'Bu e-posta adresi zaten abone.' },
        { status: 200 }
      )
    }

    // Abone listesine ekle
    subscribers.push(email)

    // Onay e-postası gönder
    await resend.emails.send({
      from: 'Erencan Acıoğlu <onboarding@resend.dev>',
      to: [email],
      subject: 'Blog Aboneliği Onaylandı - Erencan Acıoğlu',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Blog Aboneliği Onaylandı!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Merhaba!</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Blog aboneliğiniz başarıyla onaylandı! Artık yeni yazılarım yayınlandığında 
              e-posta ile bildirim alacaksınız.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Neler bekleyebilirsiniz:</h3>
              <ul style="color: #666; line-height: 1.8;">
                <li>Web geliştirme ve teknoloji yazıları</li>
                <li>AI ve makine öğrenmesi içerikleri</li>
                <li>Unity oyun geliştirme rehberleri</li>
                <li>Freelance deneyimlerim ve ipuçları</li>
                <li>DevOps ve deployment süreçleri</li>
              </ul>
            </div>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Blog'umu ziyaret etmek için: 
              <a href="https://erencanacioglu.com/blog" style="color: #667eea; text-decoration: none;">
                erencanacioglu.com/blog
              </a>
            </p>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://erencanacioglu.com" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                        color: white; 
                        padding: 12px 30px; 
                        text-decoration: none; 
                        border-radius: 25px; 
                        display: inline-block;">
                Blog'u Ziyaret Et
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
            <p>Bu e-postayı istemediyseniz, abonelikten çıkabilirsiniz.</p>
            <p>© 2025 Erencan Acıoğlu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      `
    })

    return NextResponse.json(
      { message: 'Abonelik başarıyla oluşturuldu! Onay e-postası gönderildi.' },
      { 
        status: 200,
        headers: securityHeaders
      }
    )

  } catch (error) {
    console.error('Abonelik hatası:', error)
    return NextResponse.json(
      { error: 'Abonelik oluşturulurken bir hata oluştu.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json({ subscribers: subscribers.length })
}
