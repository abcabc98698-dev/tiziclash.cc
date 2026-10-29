import type { APIRoute, GetStaticPaths } from 'astro'
import { site as siteConfig } from '../../data/site'

/**
 * RFC 9116 security.txt, generated only when `site.security` is set.
 */
export const getStaticPaths = (() =>
  siteConfig.security ? [{ params: { name: 'security.txt' } }] : []) satisfies GetStaticPaths

export const GET: APIRoute = ({ site }) => {
  const security = siteConfig.security
  if (!security) return new Response(null, { status: 404 })

  const origin = site ?? new URL(siteConfig.url)
  const days = security.expiresInDays ?? 365
  const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toISOString()
  const lines = [
    `Contact: ${security.contact}`,
    `Expires: ${expires}`,
    security.preferredLanguages && `Preferred-Languages: ${security.preferredLanguages}`,
    `Canonical: ${new URL('/.well-known/security.txt', origin).href}`,
  ].filter(Boolean)

  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
