import type {
  AboutConfig,
  ContactConfig,
  FooterConfig,
  HeroConfig,
  NavItem,
  SiteConfig,
  UiLabels,
} from './types'

/**
 * Site-wide configuration and copy for TiziClash (https://tiziclash.cc).
 * 100% independent, zero template residue, and SEO optimized.
 */
export const site: SiteConfig = {
  url: 'https://tiziclash.cc',
  name: 'TiziClash',
  author: 'TiziClash Lab',
  title: 'TiziClash · 现代网络核心与极简技术实验室',
  description:
    'TiziClash 专注于跨平台网络核心、Clash / Mihomo 配置生态、边缘计算工具与高性能 Web 基础设施研究。提供 100% 独立自研的开源工具链与技术实践。',
  keywords:
    'TiziClash, Clash, Mihomo, 订阅转换, 规则分流, 节点测速, 边缘计算, 网络工具, 独立实验室, WebAssembly, 隐私保护',
  email: 'contact@tiziclash.cc',
  lang: 'zh-CN',
  ogLocale: 'zh_CN',
  themeColor: '#0b0b0c',
  links: {
    github: 'https://github.com/tiziclash',
  },
  feedUrl: null,
  person: {
    name: 'TiziClash',
    alternateName: 'TiziClash Lab',
    jobTitle: '网络核心与边缘计算研发团队',
  },
  security: {
    contact: 'mailto:security@tiziclash.cc',
    preferredLanguages: 'zh-CN, en',
  },
}

/** Header navigation */
export const nav: NavItem[] = [
  { label: '自研工程', href: '/#projects', external: false },
  { label: '技术视野', href: '/#about', external: false },
  { label: '联系协作', href: '/#contact', external: false },
  { label: 'GitHub', href: 'https://github.com/tiziclash', external: true, icon: 'code' },
]

export const hero: HeroConfig = {
  eyebrow: 'tiziclash.cc',
  name: 'TiziClash',
  handle: '@tiziclash',
  lead: [
    '专注于高性能跨平台网络工具集、Clash/Mihomo 规则生态与边缘计算架构研发。',
    '坚持 100% 独立开发、零第三方暗桩、零数据上报，打造极简、安全、可信赖的技术工具与开源实践。',
  ],
  actions: {
    primary: { label: '探索核心工程', href: '#projects' },
    secondary: { label: '技术视野与理念', href: '#about' },
  },
  facts: [
    { label: '核心方向', value: '网络协议 / Clash 生态 / Wasm 引擎' },
    { label: '架构理念', value: '零运行时 JS / 隐私无上报 / 极致轻量' },
    { label: '技术栈', value: 'Rust / TypeScript / Astro / Go' },
  ],
}

export const about: AboutConfig = {
  lead: [
    'TiziClash 始于对纯净、高效网络体验的极致追求。在现代网络环境中，各种臃肿的客户端、暗藏后门与强制上报的在线转换工具屡见不鲜。',
    '我们秉承“极简架构、可信透明、纯净无暗桩”的工程原则，重构了从本地规则解析、配置转换到边缘加速拓扑的可观测工具链，让网络配置与性能掌控权真正回归用户。',
  ],
  next: [
    'Sing-Box 与 Mihomo 跨内核通用规则 AST 编译标准推进',
    '基于 WebAssembly 的客户端无损配置热重载引擎',
    '全内存型零缓存无日志边缘转发协议研究与实践',
  ],
  facts: [
    { label: '核心语言', items: ['Rust', 'Go', 'TypeScript', 'SQL'] },
    { label: '网络协议', items: ['TCP/TLS 1.3', 'HTTP/3', 'QUIC', 'DoH'] },
    { label: '工具链与架构', items: ['WebAssembly', 'Clash/Mihomo', 'Sing-Box', 'Astro'] },
    { label: '安全与可观测', items: ['零暗桩审计', '无日志内存沙箱', 'BGP/RTT 探针'] },
  ],
}

export const contact: ContactConfig = {
  heading: '探讨网络架构、工具共建或安全反馈，欢迎直接来信。',
  note: '来信通常在 24 小时内回复',
}

export const footer: FooterConfig = {
  tagline: '现代化网络核心与极简技术实验室',
}

/** Fixed UI strings in natural, idiomatic Simplified Chinese. */
export const ui: UiLabels = {
  skipToContent: '跳转至主要内容',
  header: { homeAria: '主页', mainNavAria: '主导航', externalNavAria: '外部链接' },
  footer: { navAria: '页脚导航', builtWith: '独立架构 · 100% 纯净自研' },
  projects: { eyebrow: '自研工程', heading: '核心项目与工具' },
  posts: { eyebrow: '技术专栏', heading: '近期架构洞察', viewAll: '查看全部文章' },
  about: { eyebrow: '技术视野', heading: '架构与工程理念', nextHeading: '重点研发方向' },
  contact: { eyebrow: '联系与协作' },
  project: {
    breadcrumbAria: '位置导航',
    home: '首页',
    projects: '自研工程',
    why: '研发背景与痛点',
    decisions: '关键技术架构决策',
    stack: '技术栈',
    otherAria: '其他项目浏览',
    prev: '← 上一个项目',
    next: '下一个项目 →',
    backToList: '← 返回工程列表',
    toList: '工程列表 →',
    listTitle: '自研工程',
  },
  notFound: {
    title: '404 页面未找到',
    description: '您访问的资源不存在或已迁移至新路径。',
    home: '返回首页',
    blog: '探索自研工程',
  },
}
