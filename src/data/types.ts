/**
 * TiziClash (https://tiziclash.cc) - Data Types & Schemas
 */

export type TechGroup = {
  label: string
  items: string[]
}

export type Link = {
  label: string
  href: string
  external?: boolean
}

export type NavIcon = 'posts' | 'code' | 'link' | 'dashboard' | 'apps' | 'book' | 'shield'

export type NavItem = Link & {
  external: boolean
  icon?: NavIcon
}

export type HeroConfig = {
  eyebrow: string
  name: string
  handle: string
  lead: string[]
  actions: {
    primary: Link
    secondary: Link
  }
  facts: { label: string; value: string }[]
}

export type AboutConfig = {
  lead: string[]
  next: string[]
  facts: TechGroup[]
}

export type ContactConfig = {
  heading: string
  note: string
}

export type FooterConfig = {
  tagline: string
}

export type SiteConfig = {
  url: string
  name: string
  author: string
  title: string
  description: string
  keywords?: string
  email: string
  lang: string
  ogLocale: string
  themeColor?: string
  links: {
    github?: string
    telegram?: string
    rss?: string
  }
  feedUrl: string | null
  person: {
    name: string
    alternateName?: string
    jobTitle?: string
  }
  security?: {
    contact: string
    preferredLanguages?: string
    expiresInDays?: number
  }
}

/** 机场套餐价格条目 */
export type BrandPricing = {
  name: string
  billing: '月付' | '季付' | '半年付' | '年付' | '一次性付费'
  price: string
  traffic: string
  cycle: '每月' | '一次性' | '每年'
  badge?: string
}

/** 测速数据 */
export type SpeedRecord = {
  region: '香港' | '台湾' | '新加坡' | '日本' | '美国' | '欧洲' | string
  latencyMs: number
  speedMbps: number
}

/** 服务解锁状态 */
export type UnlockStatus = {
  service:
    | 'ChatGPT'
    | 'Claude'
    | 'Gemini'
    | 'Netflix'
    | 'Disney+'
    | 'YouTube'
    | 'HBO Max'
    | 'TikTok'
    | 'Spotify'
  status: 'supported' | 'partial' | 'unsupported' | 'untested'
  note?: string
}

/** 机场品牌实体定义 */
export type Brand = {
  id: string
  slug: string
  name: string
  pinyin: string
  rank?: number
  isFeatured?: boolean
  promoCode?: string
  discountNote?: string
  affiliateUrl: string
  foundedYear: number | string
  entryPriceMonth: number | string
  entryTrafficMonth: string
  lineType: 'IEPL专线' | 'IPLC专线' | '双专线架构' | 'BGP中转' | '优质公网' | string
  protocols: string[]
  clientType: '自研客户端 + 第三方订阅' | '仅专属客户端' | '仅支持第三方订阅' | string
  nodeCoverage: string
  suitableFor: string[]
  unsuitableFor: string[]
  pros: string[]
  cons: string[]
  riskNotice: string
  intro: string
  pricing: BrandPricing[]
  speedTests?: SpeedRecord[]
  unlocks?: UnlockStatus[]
  hasDetailPage?: boolean
  verifiedDate: string
  updatedDate: string
}

/** 代理客户端实体 */
export type ClientItem = {
  name: string
  platform: 'Windows' | 'macOS' | 'iOS' | 'Android' | 'Linux' | 'OpenWrt'
  core: string
  features: string[]
  url: string
  isFree: boolean
  isOfficialOrRecommended: boolean
  tip?: string
}

/** 知识专栏 / GEO 问答条目 */
export type InsightArticle = {
  slug: string
  title: string
  summary: string
  category: '专线原理' | '流媒体解锁' | '客户端配置' | '选型决策'
  readTime: string
  updatedDate: string
  faqList: { question: string; answer: string }[]
  contentParagraphs: string[]
}

/** 全局 UI 文本 */
export type UiLabels = {
  skipToContent: string
  header: { homeAria: string; mainNavAria: string; externalNavAria: string }
  footer: { navAria: string; builtWith: string }
  about: { eyebrow: string; heading: string; nextHeading: string }
  brands: { eyebrow: string; heading: string; countSuffix: string }
  clients: { eyebrow: string; heading: string }
  insights: { eyebrow: string; heading: string }
  contact: { eyebrow: string }
  notFound: { title: string; description: string; home: string; blog: string }
}
