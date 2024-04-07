import fs from 'fs'
import { join } from 'path'

export default function Sitemap() {
  return null
}

const staticPages = [
  ['', 1, 'weekly'],
  ['blog', 0.6, 'weekly'],
  ['geschenkkarten', 0.6, 'monthly'],
  ['spenden', 0.6, 'monthly'],
  ['ueberuns', 0.6, 'monthly'],
  ['rezept', 0.6, 'monthly'],
  ['projekte', 0.6, 'monthly'],
  ['datenschutz', 0.3, 'monthly'],
  ['impressum', 0.3, 'monthly'],
]

const host = 'https://watoto-kabisa.de'

export async function getServerSideProps({ res }) {
  const articles = fs.readdirSync(join(process.cwd(), '/pages/blog/'))

  const posts = articles.map(
    (id) => `<url>
  <loc>${host}/blog/${id.replace('.mdx', '')}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
 </url>`
  )

  const statics = staticPages.map(
    ([path, priority, changefreq]) => `<url>
  <loc>${host}/${path}</loc>
  <lastmod>${new Date().toISOString()}</lastmod>
  <changefreq>${changefreq}</changefreq>
  <priority>${priority}</priority>
</url>`
  )

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${statics}
  ${posts}
</urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}
