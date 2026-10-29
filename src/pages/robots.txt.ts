import type { APIRoute } from 'astro'
import { site as siteConfig } from '../data/site'

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL(siteConfig.url)
  const body = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: bingbot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: yisouspider
Allow: /

Sitemap: ${new URL('/sitemap.xml', origin).href}
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
