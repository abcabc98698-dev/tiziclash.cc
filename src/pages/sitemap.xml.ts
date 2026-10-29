import type { APIRoute } from 'astro'
import { brands } from '../data/brands'
import { site as siteConfig } from '../data/site'

/**
 * Standard XML Sitemap with changefreq and priority for search engines.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL(siteConfig.url)
  const lastmod = new Date().toISOString().slice(0, 10)

  const pages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/rankings/', priority: '0.9', changefreq: 'daily' },
    { path: '/brands/', priority: '0.9', changefreq: 'daily' },
    { path: '/free/', priority: '0.9', changefreq: 'weekly' },
    { path: '/clients/', priority: '0.9', changefreq: 'weekly' },
    { path: '/guide/', priority: '0.9', changefreq: 'weekly' },
    // 核心战略语义支柱大类页 (Pillar Pages)
    { path: '/vpn/', priority: '0.9', changefreq: 'weekly' },
    { path: '/jichang/', priority: '0.9', changefreq: 'weekly' },
    { path: '/clash/', priority: '0.9', changefreq: 'weekly' },
    { path: '/nodes/', priority: '0.9', changefreq: 'weekly' },
    { path: '/tizi/', priority: '0.9', changefreq: 'weekly' },
    { path: '/tutorial/', priority: '0.9', changefreq: 'weekly' },
    // 独立品牌详情页
    ...brands
      .filter((b) => b.hasDetailPage)
      .map((b) => ({
        path: `/brands/${b.slug}/`,
        priority: b.isFeatured ? '0.9' : '0.8',
        changefreq: 'weekly',
      })),
  ]

  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${new URL(p.path, origin).href}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
    )
    .join('\n')

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
