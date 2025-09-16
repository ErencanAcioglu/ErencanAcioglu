import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Erencan (Erencan Acıoğlu) Kimdir?',
  description: 'Erencan Acıoğlu hakkında detaylı bilgi. Full Stack Developer olarak çalışan Erencan\'ın projeleri, deneyimleri ve iletişim bilgileri.',
  openGraph: {
    title: 'Erencan (Erencan Acıoğlu) Kimdir?',
    description: 'Erencan Acıoğlu hakkında detaylı bilgi. Full Stack Developer olarak çalışan Erencan\'ın projeleri, deneyimleri ve iletişim bilgileri.',
    images: ['/og.jpg']
  }
}

export default function ErencanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8">
          <h1 className="text-4xl font-bold gradient-text mb-8">
            Erencan (Erencan Acıoğlu) Kimdir?
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              <strong>Erencan Acıoğlu</strong>, modern web teknolojileri ve yapay zeka alanında uzmanlaşmış bir Full Stack Developer'dır. 
              Erencan, React, Node.js, Python ve Unity gibi teknolojilerle yenilikçi uygulamalar geliştirmektedir.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              Erencan'ın profesyonel kariyeri, web geliştirme, mobil uygulama geliştirme ve oyun geliştirme alanlarında 
              çeşitli projelerle şekillenmiştir. Özellikle AI destekli çözümler ve modern web teknolojileri konularında 
              derinlemesine bilgi sahibidir.
            </p>
            
            <p className="text-lg text-gray-300 mb-8">
              Erencan Acıoğlu, sürekli öğrenme ve teknoloji dünyasındaki gelişmeleri takip etme konusunda tutkulu bir 
              geliştiricidir. Projelerinde kullanıcı deneyimini ön planda tutarak, performanslı ve ölçeklenebilir 
              çözümler üretmektedir.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/" 
                className="btn-primary"
              >
                Ana Sayfaya Dön
              </Link>
              <Link 
                href="/acioglu" 
                className="btn-secondary"
              >
                Acıoğlu Hakkında
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
