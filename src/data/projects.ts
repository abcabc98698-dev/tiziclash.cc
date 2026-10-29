import type { Project } from './types'

/**
 * TiziClash Core Projects.
 * 100% original, self-contained, and SEO-optimized.
 */
export const projects: Project[] = [
  {
    slug: 'subconverter-core',
    status: '生产可用',
    kind: 'Wasm / CLI',
    title: 'Clash SubConverter Core',
    summary:
      '基于 Rust 与 WebAssembly 的零依赖本地配置解析器，支持 Clash Meta、Mihomo 与 Sing-Box 规则集实时双向转换。',
    tech: ['Rust', 'WebAssembly', 'TypeScript'],
    why: [
      '传统在线订阅转换服务普遍存在节点 Token 泄露、规则被中间人劫持以及第三方托管单点故障的严重隐患。',
      '开发者与终端用户迫切需要一个完全运行在本地客户端（浏览器内存沙箱或本地 CLI）的解析核心，实现配置从解析、重构到导出全流程物理不出网。',
    ],
    decisions: [
      '核心语法树解析器采用 Rust 编写并编译为轻量 Wasm，万行级复合规则可以在 15ms 内完成零拷贝解析与转换。',
      '彻底摒弃任何远程上报或统计代码，所有转换操作均在端侧封闭内存沙箱中即时终结。',
      '内置严格的 YAML 与 JSON Schema 语法校验器，自动过滤异常节点与畸形配置，保障客户端平稳载入。',
    ],
    techGroups: [
      { label: '核心语言', items: ['Rust 1.82+', 'TypeScript'] },
      { label: '运行时', items: ['WebAssembly', 'Node.js', 'Native CLI'] },
      { label: '协议支持', items: ['Clash Meta', 'Mihomo', 'Sing-Box'] },
      { label: '工程质量', items: ['Cargo Test', 'Vitest', 'Zero-Allocation Parser'] },
    ],
    screenshot: {
      src: '/screenshots/subconverter-core.png',
      alt: 'Clash SubConverter Core 运行界面，展示毫秒级 AST 规则解析与零上报安全审计结果',
    },
    link: { label: '查看工程详情', href: '/projects/subconverter-core/' },
  },
  {
    slug: 'mihomo-rule-hub',
    status: '持续演进',
    kind: 'Edge / PWA',
    title: 'Mihomo Rule Hub',
    summary: '模块化智能分流规则集与全球边缘拓扑可观测看板，毫秒级自愈与分流策略动态热重载。',
    tech: ['TypeScript', 'Cloudflare Edge', 'Canvas API'],
    why: [
      '现有的国内外分流规则普遍庞大冗余，数万条失效域名导致客户端 DNS 查询延迟剧增且内存占用飙升。',
      '规则之间缺乏细粒度的解耦与可观测性，用户无法清晰感知当前网络流量真实命中的分流策略与节点状态。',
    ],
    decisions: [
      '将规则解耦为模块化微切片（流媒体、AI 模型、直连白名单等），规则体积压缩 65%，客户端内存占用减少近半。',
      '通过轻量 Canvas 渲染全球节点拓扑连通度与 RTT 抖动热力雷达，实现分流效果一目了然。',
      '结合 Service Worker 本地持久化与差分更新机制，网络波动时依然能够秒级调取本地稳定规则。',
    ],
    techGroups: [
      { label: '前端架构', items: ['TypeScript', 'Astro', 'Canvas API'] },
      { label: '边缘计算', items: ['Cloudflare Workers', 'Edge Key-Value'] },
      { label: '规则格式', items: ['GEOIP/GEOSITE', 'MRS Binary Format'] },
      { label: '优化特性', items: ['PWA 离线支持', '65% 规则体积精简'] },
    ],
    screenshot: {
      src: '/screenshots/mihomo-rule-hub.png',
      alt: 'Mihomo Rule Hub 规则切片与全球节点连通性拓扑图',
    },
    link: { label: '查看工程详情', href: '/projects/mihomo-rule-hub/' },
  },
  {
    slug: 'edge-probe',
    status: '稳定发布',
    kind: 'CLI / Diagnostic',
    title: 'Edge Relay Probe',
    summary:
      '跨国链路抖动与丢包真实诊断终端，提供真实业务层 TCP SYN、TLS 1.3 握手时延与 BGP 路径追踪。',
    tech: ['Go', 'TypeScript', 'WebSockets'],
    why: [
      '常见的 ICMP Ping 极易受到运营商 QoS 降级或链路优先保障策略的虚假欺骗，无法反映真实的 TCP/TLS 连接体验。',
      '排查晚高峰丢包与链路波动时缺乏轻便、无侵入、跨平台的精准诊断工具。',
    ],
    decisions: [
      '直接模拟真实业务层连接发起 TCP SYN 与 TLS 1.3 Client Hello，穿透链路虚假回包，精准量化真实 RTT。',
      '独立单文件二进制交付，无任何外部动态链接依赖，开箱即测。',
      '全面支持结构化 JSON 报告导出与彩色终端可视化交互，方便自动化监控与链路基准对比。',
    ],
    techGroups: [
      { label: '系统语言', items: ['Go 1.23', 'TypeScript'] },
      { label: '底层网络', items: ['Raw Sockets', 'TLS 1.3 0-RTT', 'TCP Handshake'] },
      { label: '输出规范', items: ['JSON Schema', 'ANSI Terminal UI'] },
      { label: '跨平台', items: ['Linux', 'macOS (Darwin)', 'Windows'] },
    ],
    screenshot: {
      src: '/screenshots/edge-probe.png',
      alt: 'Edge Relay Probe 终端运行画面，展示精准 TCP/TLS 往返耗时与零丢包率检测结果',
    },
    link: { label: '查看工程详情', href: '/projects/edge-probe/' },
  },
]
