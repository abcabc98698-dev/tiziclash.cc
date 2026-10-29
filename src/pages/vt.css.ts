import type { APIRoute } from 'astro'
import { brands } from '../data/brands'

/**
 * Cross-document view transition styling for brand details.
 */
export const GET: APIRoute = () => {
  const body = brands
    .filter((brand) => brand.hasDetailPage)
    .map((brand) => `#cover-${brand.slug}{view-transition-name:cover-${brand.slug}}`)
    .join('\n')
  return new Response(`${body}\n`, { headers: { 'Content-Type': 'text/css; charset=utf-8' } })
}
