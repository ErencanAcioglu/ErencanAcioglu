import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
}

export default function SEOHead({ 
  title = "Erencan Acıoğlu - Full Stack Developer | Web, Mobile & AI Expert",
  description = "Erencan Acıoğlu - Full Stack Developer specializing in web, mobile, and AI technologies. Building innovative applications with React, Node.js, Python, Unity, and modern development tools. Based in Istanbul, Turkey.",
  keywords = "Erencan Acıoğlu, Erencan Acioglu, Full Stack Developer, React Developer, Node.js Developer, Python Developer, AI Developer, Web Development, Mobile Development, Game Development, Machine Learning, TypeScript, Next.js, Unity Developer, Software Engineer, Istanbul Developer, Turkey Developer",
  canonical = "https://erencanacioglu.com",
  ogImage = "https://erencanacioglu.com/logo.png"
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Erencan Acıoğlu" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Erencan Acıoğlu Portfolio" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@erencanacioglu" />
      
      {/* Canonical */}
      <link rel="canonical" href={canonical} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo.svg" />
      
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Erencan Acıoğlu",
            "alternateName": ["Erencan Acioglu"],
            "url": "https://erencanacioglu.com",
            "image": "https://erencanacioglu.com/logo.png",
            "jobTitle": "Full Stack Developer",
            "description": "Full Stack Developer specializing in web, mobile, and AI technologies. Building innovative applications with React, Node.js, Python, Unity, and modern development tools.",
            "worksFor": {
              "@type": "Organization",
              "name": "YoourCargo",
              "url": "https://youourcargo.com"
            },
            "alumniOf": {
              "@type": "CollegeOrUniversity",
              "name": "Marmara University",
              "url": "https://www.marmara.edu.tr"
            },
            "sameAs": [
              "https://www.linkedin.com/in/erencanacioglu",
              "https://github.com/erencanacioglu",
              "https://instagram.com/erencanacioglu"
            ],
            "knowsAbout": [
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Python",
              "Machine Learning",
              "Web Development",
              "Mobile Development",
              "Game Development",
              "Unity",
              "AI Development",
              "Full Stack Development"
            ],
            "email": "erencanacioglu8@gmail.com",
            "telephone": "+90-505-481-3545",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Istanbul",
              "addressRegion": "Istanbul",
              "addressCountry": "TR"
            },
            "nationality": "Turkish",
            "birthPlace": "Turkey",
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Full Stack Developer",
              "occupationLocation": {
                "@type": "City",
                "name": "Istanbul"
              }
            },
            "memberOf": [
              {
                "@type": "Organization",
                "name": "YoourCargo",
                "url": "https://youourcargo.com"
              }
            ]
          })
        }}
      />
    </Head>
  )
}
