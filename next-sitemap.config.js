/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://erencanacioglu.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://erencanacioglu.com/sitemap.xml',
    ],
  },
}
