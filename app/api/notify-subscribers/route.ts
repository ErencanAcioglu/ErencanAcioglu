import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// E-posta abonelik listesi (gerçek uygulamada veritabanından gelecek)
let subscribers: string[] = []

export async function POST(request: NextRequest) {
  try {
    const { title, slug, excerpt, author, publishDate } = await request.json()

    if (!title || !slug || !excerpt) {
      return NextResponse.json(
        { error: 'Blog yazısı bilgileri eksik.' },
        { status: 400 }
      )
    }

    // Tüm abonelere e-posta gönder
    const emailPromises = subscribers.map(async (subscriberEmail) => {
      return resend.emails.send({
        from: 'Erencan Acıoğlu <onboarding@resend.dev>',
        to: [subscriberEmail],
        subject: `Yeni Blog Yazısı: ${title}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
              <h1 style="color: white; margin: 0; font-size: 24px;">Yeni Blog Yazısı!</h1>
            </div>
            
            <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-bottom: 20px; font-size: 22px;">${title}</h2>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p style="color: #666; line-height: 1.6; margin: 0; font-style: italic;">
                  "${excerpt}"
                </p>
              </div>
              
              <div style="display: flex; justify-content: space-between; align-items: center; margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                <div>
                  <strong style="color: #333;">Yazar:</strong> 
                  <span style="color: #666;">${author}</span>
                </div>
                <div>
                  <strong style="color: #333;">Tarih:</strong> 
                  <span style="color: #666;">${new Date(publishDate).toLocaleDateString('tr-TR')}</span>
                </div>
              </div>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="https://erencanacioglu.com/blog/${slug}" 
                   style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                          color: white; 
                          padding: 15px 40px; 
                          text-decoration: none; 
                          border-radius: 25px; 
                          display: inline-block; 
                          font-weight: bold;">
                  Yazıyı Oku
                </a>
              </div>
              
              <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
                <p style="color: #666; font-size: 14px; text-align: center;">
                  Bu e-postayı almak istemiyorsanız, 
                  <a href="https://erencanacioglu.com/blog" style="color: #667eea;">abonelikten çıkabilirsiniz</a>.
                </p>
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 20px; color: #999; font-size: 12px;">
              <p>© 2025 Erencan Acıoğlu. Tüm hakları saklıdır.</p>
            </div>
          </div>
        `
      })
    })

    // Tüm e-postaları gönder
    await Promise.all(emailPromises)

    return NextResponse.json(
      { 
        message: `${subscribers.length} aboneye bildirim gönderildi.`,
        sentTo: subscribers.length 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Bildirim gönderme hatası:', error)
    return NextResponse.json(
      { error: 'Bildirimler gönderilirken bir hata oluştu.' },
      { status: 500 }
    )
  }
}

// Bu fonksiyonlar başka bir dosyada tanımlanmalı
// Şimdilik sadece POST ve GET methodları kullanılacak
