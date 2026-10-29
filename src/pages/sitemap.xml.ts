import type { APIRoute } from 'astro'
import { projects } from '../data/projects'
import { site as siteConfig } from '../data/site'

/**
 * Standard XML Sitemap with changefreq and priority for search engines.
 */
export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL(siteConfig.url)
  const lastmod = new Date().toISOString().slice(0, 10)

  const pages = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    ...projects.map((p) => ({
      path: `/projects/${p.slug}/`,
      priority: '0.8',
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
