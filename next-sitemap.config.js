/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://erencanacioglu.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/server-sitemap.xml', '/admin/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/projects'),
    await config.transform(config, '/blog'),
    await config.transform(config, '/contact'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://erencanacioglu.com/sitemap.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority and changefreq for different pages
    const customConfig = {
      loc: path,
      changefreq: 'daily',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }

    // Homepage gets highest priority
    if (path === '/') {
      customConfig.priority = 1.0
      customConfig.changefreq = 'daily'
    }

    // Blog pages get high priority
    if (path.startsWith('/blog/')) {
      customConfig.priority = 0.8
      customConfig.changefreq = 'weekly'
    }

    // About and projects get medium-high priority
    if (path === '/about' || path === '/projects') {
      customConfig.priority = 0.9
      customConfig.changefreq = 'weekly'
    }

    return customConfig
  },
}
