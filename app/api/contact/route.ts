import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, projectType, budget, timeline } = await request.json()

    // E-posta doğrulama
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Geçerli bir e-posta adresi giriniz.' },
        { status: 400 }
      )
    }

    if (!name || !subject || !message) {
      return NextResponse.json(
        { error: 'Ad, konu ve mesaj alanları zorunludur.' },
        { status: 400 }
      )
    }

    // Size e-posta gönder (proje önerisi)
    await resend.emails.send({
      from: 'Erencan Acıoğlu <onboarding@resend.dev>',
      to: ['erencanacioglu8@gmail.com'],
      subject: `Yeni Proje Önerisi: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Yeni Proje Önerisi!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">${subject}</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">İletişim Bilgileri:</h3>
              <p style="color: #666; margin: 5px 0;"><strong>Ad Soyad:</strong> ${name}</p>
              <p style="color: #666; margin: 5px 0;"><strong>E-posta:</strong> ${email}</p>
              ${projectType ? `<p style="color: #666; margin: 5px 0;"><strong>Proje Türü:</strong> ${projectType}</p>` : ''}
              ${budget ? `<p style="color: #666; margin: 5px 0;"><strong>Bütçe:</strong> ${budget}</p>` : ''}
              ${timeline ? `<p style="color: #666; margin: 5px 0;"><strong>Zaman Çizelgesi:</strong> ${timeline}</p>` : ''}
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Proje Detayları:</h3>
              <p style="color: #666; line-height: 1.6; margin: 0;">${message}</p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="mailto:${email}" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                        color: white; 
                        padding: 12px 30px; 
                        text-decoration: none; 
                        border-radius: 25px; 
                        display: inline-block;">
                E-posta ile Yanıtla
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
            <p>Bu e-posta erencanacioglu.com contact formundan gönderilmiştir.</p>
            <p>© 2025 Erencan Acıoğlu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      `
    })

    // Müşteriye onay e-postası gönder
    await resend.emails.send({
      from: 'Erencan Acıoğlu <onboarding@resend.dev>',
      to: [email],
      subject: 'Proje Öneriniz Alındı - Erencan Acıoğlu',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Proje Öneriniz Alındı!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-bottom: 20px;">Merhaba ${name}!</h2>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Proje öneriniz başarıyla alındı! En kısa sürede size geri dönüş yapacağım.
            </p>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Öneriniz:</h3>
              <p style="color: #666; margin: 5px 0;"><strong>Konu:</strong> ${subject}</p>
              <p style="color: #666; margin: 5px 0;"><strong>Mesaj:</strong> ${message}</p>
            </div>
            
            <div style="background: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Sonraki Adımlar:</h3>
              <ul style="color: #666; line-height: 1.8; margin: 0;">
                <li>Projenizi detaylı olarak inceleyeceğim</li>
                <li>Size uygun çözüm önerileri hazırlayacağım</li>
                <li>24 saat içinde size geri dönüş yapacağım</li>
                <li>Gerekirse görüşme planlayacağız</li>
              </ul>
            </div>
            
            <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
              Acil durumlar için: <a href="mailto:erencanacioglu8@gmail.com" style="color: #667eea;">erencanacioglu8@gmail.com</a>
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://erencanacioglu.com" 
                 style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                        color: white; 
                        padding: 12px 30px; 
                        text-decoration: none; 
                        border-radius: 25px; 
                        display: inline-block;">
                Web Sitemi Ziyaret Et
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
            <p>© 2025 Erencan Acıoğlu. Tüm hakları saklıdır.</p>
          </div>
        </div>
      `
    })

    return NextResponse.json(
      { message: 'Proje öneriniz başarıyla gönderildi! En kısa sürede size geri dönüş yapacağım.' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form hatası:', error)
    return NextResponse.json(
      { error: 'Mesaj gönderilirken bir hata oluştu.' },
      { status: 500 }
    )
  }
}
