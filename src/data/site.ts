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
 * tiziclash.cc - 梯子Clash · 专业网络可观测与机场测速实验室
 * 保留原主题极简暗黑与琥珀色调 UI 视觉，全面填补 42 家机场品牌数据与客户端指南。
 */
export const site: SiteConfig = {
  url: 'https://tiziclash.cc',
  name: '梯子Clash',
  author: '梯子Clash实验室',
  title: '梯子Clash (tiziclash.cc) · 2026专业网络可观测与机场测速推荐实验室',
  description:
    '梯子Clash (tiziclash.cc) 专注于中立严谨的机场品牌横向横评、真实晚高峰测速、IEPL/IPLC 物理专线链路可观测性分析、全平台客户端（Clash/小火箭/v2rayN）配置指南与流媒体/AI 解锁矩阵报告。主推光速云等高品质稳定专线。',
  keywords:
    '梯子clash, tiziclash, 2026机场推荐, 光速云, IEPL专线机场, IPLC专线, Clash订阅节点, Shadowrocket小火箭, v2rayN客户端, ChatGPT解锁机场, 4K流媒体机场, 跨境网络加速',
  email: 'contact@tiziclash.cc',
  lang: 'zh-CN',
  ogLocale: 'zh_CN',
  themeColor: '#0b0b0c',
  links: {
    github: 'https://github.com/tiziclash',
  },
  feedUrl: null,
  person: {
    name: '梯子Clash实验室',
    alternateName: 'TiziClash Lab',
    jobTitle: '网络可观测性与跨境传输链路评测团队',
  },
  security: {
    contact: 'mailto:security@tiziclash.cc',
    preferredLanguages: 'zh-CN, en',
  },
}

/**
 * 全站六大核心导航栏目
 * 严格遵照规划：首页(可观测大盘) · 机场推荐(精选梯队) · 品牌库(42家独立档案) · 免费资源(万字白皮书) · 客户端指南(多端下载教程) · 专线科普/GEO问答
 */
export const nav: NavItem[] = [
  { label: '首页大盘', href: '/', external: false, icon: 'dashboard' },
  { label: '机场推荐', href: '/rankings/', external: false, icon: 'shield' },
  { label: '品牌库', href: '/brands/', external: false, icon: 'apps' },
  { label: '免费资源 ⚡', href: '/free/', external: false, icon: 'gift' },
  { label: '客户端指南', href: '/clients/', external: false, icon: 'code' },
  { label: '专线科普 / GEO', href: '/guide/', external: false, icon: 'book' },
]

export const hero: HeroConfig = {
  eyebrow: 'tiziclash.cc · 2026 网络实验室',
  name: '梯子Clash 测速实验室',
  handle: '@tiziclash.cc',
  lead: [
    '依托真实晚高峰分布式探针，对全网主流机场展开持续性链路可观测性审计。',
    '拒绝虚构参数，坚持实测数据透明化：全景收录 42 家机场品牌，深度测评 IEPL/IPLC 专线稳定性、AI 工具连通率与 4K 流媒体解锁能力。',
  ],
  actions: {
    primary: { label: '查看 2026 精选梯队榜', href: '/rankings/' },
    secondary: { label: '检索 42 家品牌全库', href: '/brands/' },
  },
  facts: [
    { label: '主推旗舰', value: '光速云 (IEPL双专线 / 147永久套餐)' },
    { label: '数据口径', value: '2026晚高峰真实测速 / 绝不编造' },
    { label: '涵盖范围', value: '42家品牌 / 全平台代理客户端' },
  ],
}

export const about: AboutConfig = {
  lead: [
    '梯子Clash (tiziclash.cc) 诞生于对真实、可信赖网络评测数据的追求。当前网络上充斥着大量虚假宣传、公网中转冒充专线、随意编造测速截图的低质营销站点。',
    '我们采用 Dark Network Observatory（深色网络可观测大盘）视觉体系，联合专业跨境网络技术团队，通过全国多地网络接入点对各大机场进行真实 TCP/TLS 握手延时、晚高峰吞吐与 AI 解锁能力常态化监控，帮助用户规避跑路盘与劣质线路。',
  ],
  next: [
    '常态化自动化晚高峰多节点丢包与抖动雷达图',
    '全平台主流客户端（Clash Verge、小火箭、v2rayN）配置覆写库维护',
    '生成式 AI（ChatGPT / Claude / Gemini）风控阻断自愈分流策略演进',
  ],
  facts: [
    { label: '核心覆盖', items: ['光速云', '飞猫云', '微风网络', '暮光加速', '大佬云', '星岛梦'] },
    { label: '专线架构', items: ['IEPL物理专线', 'IPLC企业直连', 'BGP智能优选', 'VLESS协议'] },
    {
      label: '全平台客户端',
      items: ['Clash Verge Rev', 'Shadowrocket', 'v2rayN', 'FlClash', 'OpenClash'],
    },
    { label: '准则声明', items: ['合规标注推广链接', '数据缺口如实标记', '零虚构承诺'] },
  ],
}

export const contact: ContactConfig = {
  heading: '测速数据修正、机场收录申请或商务反馈，欢迎来信沟通。',
  note: '数据审核与反馈通常在 24 小时内完成核实',
}

export const footer: FooterConfig = {
  tagline: '专业网络可观测与机场测速推荐实验室 · 梯子Clash',
}

export const ui: UiLabels = {
  skipToContent: '跳转至主要内容',
  header: { homeAria: '主页', mainNavAria: '主导航', externalNavAria: '外部链接' },
  footer: { navAria: '页脚导航', builtWith: '梯子Clash · 独立网络评测实验室' },
  about: {
    eyebrow: '关于实验室',
    heading: '中立·严谨·透明的网络评测',
    nextHeading: '实验室路线图与持续观测计划',
  },
  brands: { eyebrow: '品牌全景', heading: '收录品牌数据库', countSuffix: '家' },
  clients: { eyebrow: '客户端生态', heading: '全平台代理软件下载与指南' },
  insights: { eyebrow: '硬核科普', heading: '专线原理与深度问答' },
  contact: { eyebrow: '实验室联络' },
  notFound: {
    title: '404 页面未找到',
    description: '您访问的测评页面不存在或已迁移至新路径。',
    home: '返回首页大盘',
    blog: '查看精选机场推荐',
  },
}
