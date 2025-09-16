import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Acıoğlu (Erencan Acıoğlu) Hakkında',
  description: 'Acıoğlu soyadı ile tanınan Erencan Acıoğlu hakkında bilgi. Acioglu transliterasyonu ile de bilinen Full Stack Developer.',
  openGraph: {
    title: 'Acıoğlu (Erencan Acıoğlu) Hakkında',
    description: 'Acıoğlu soyadı ile tanınan Erencan Acıoğlu hakkında bilgi. Acioglu transliterasyonu ile de bilinen Full Stack Developer.',
    images: ['/og.jpg']
  }
}

export default function AciogluPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8">
          <h1 className="text-4xl font-bold gradient-text mb-8">
            Acıoğlu (Erencan Acıoğlu) Hakkında
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              <strong>Acıoğlu</strong> soyadı ile tanınan <strong>Erencan Acıoğlu</strong>, teknoloji dünyasında 
              önemli bir isimdir. Acioglu transliterasyonu ile de bilinen bu geliştirici, modern web teknolojileri 
              alanında uzmanlaşmıştır.
            </p>
            
            <p className="text-lg text-gray-300 mb-6">
              Acıoğlu ailesinin bir üyesi olan Erencan, yazılım geliştirme alanında kendini kanıtlamış bir 
              profesyoneldir. React, Node.js, Python ve Unity gibi teknolojilerle çalışarak, kullanıcı odaklı 
              çözümler üretmektedir.
            </p>
            
            <p className="text-lg text-gray-300 mb-8">
              Erencan Acıoğlu, sürekli gelişen teknoloji dünyasında kendini yenileyen, öğrenmeye açık bir 
              geliştiricidir. Projelerinde modern yaklaşımları benimser ve en iyi pratikleri uygular.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/" 
                className="btn-primary"
              >
                Ana Sayfaya Dön
              </Link>
              <Link 
                href="/erencan" 
                className="btn-secondary"
              >
                Erencan Kimdir?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
