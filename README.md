<div align="center">

<img src="public/avatar.webp" alt="梯子Clash Logo" width="88" height="88" style="border-radius: 50%;" />

# 梯子Clash · 独立网络可观测与专线测速实验室

**Dark Network Observatory · 2026 跨境网络链路审计与全平台代理生态指南**

[![Website](https://img.shields.io/badge/Website-tiziclash.cc-e8b458?style=flat-square&logo=google-chrome&logoColor=white)](https://tiziclash.cc/)
[![Astro](https://img.shields.io/badge/Astro-SSG_Static-ff5d01?style=flat-square&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Biome](https://img.shields.io/badge/Code_Style-Biome-60a5fa?style=flat-square&logo=biome&logoColor=white)](https://biomejs.dev/)
[![SEO Ready](https://img.shields.io/badge/SEO_%26_GEO-100%25_Verified-22c55e?style=flat-square)](https://tiziclash.cc/sitemap.xml)
[![License](https://img.shields.io/badge/License-MIT-a1a1aa?style=flat-square)](LICENSE)

[🌐 访问正式站 (tiziclash.cc)](https://tiziclash.cc/) · [📊 2026 专线梯队榜](https://tiziclash.cc/rankings/) · [🗂️ 42 家品牌全库](https://tiziclash.cc/brands/) · [⚡ 万字免费白皮书](https://tiziclash.cc/free/) · [💻 客户端大全](https://tiziclash.cc/clients/)

</div>

---

## 📖 项目简介

**梯子Clash (`https://tiziclash.cc`)** 是一座采用 **Dark Network Observatory（深色网络可观测大盘）** 视觉美学的独立网络评测与技术科普站点。

针对当前跨境网络领域充斥虚假测速截图、公网中转冒充物理专线、跑路盘频发的行业痛点，本项目通过**结构化数据工程**与**分布式探针实测标准**，全景收录并持续追踪 **42 家主流机场品牌** 的晚高峰 TCP/TLS 延迟、吞吐稳定性、AI 工具（ChatGPT / Claude / Gemini）连通率以及流媒体（Netflix / Disney+ / YouTube 4K）解锁表现。

---

## ✨ 核心架构与工程特性

### 1. 🔭 深色可观测大盘视觉 (Observatory UI)
- **极客暗黑与琥珀光学配色**：基于 `#0b0b0c` 深邃底色与 `#e8b458` 琥珀高亮信号灯体系，辅以微噪点纹理（Subtle Grain）与等宽数据排版（`JetBrains Mono`），呈现精密仪器级的阅读体验。
- **零客户端运行时开销 (Zero Runtime JS)**：全站采用 Astro 纯静态预渲染（SSG），无臃肿前端框架运行时，首屏 LCP 达到毫秒级响应。
- **100% 本地化字体子集**：内置自动化脚本 `scripts/build-fonts.mjs`，构建时预生成高压缩率 `.woff2` 字体切片，彻底剥离第三方 CDN 隐私追踪与跨域阻塞。

### 2. 🏛️ 8 大战略语义支柱与内容矩阵
全站围绕用户真实搜索意图与生成式 AI 引擎（GEO / AEO）引用偏好，构建了扁平化（点击深度 ≤ 3）的支柱专题矩阵：

| 核心路由 | 专题名称 | 内容定位与数据颗粒度 |
| :--- | :--- | :--- |
| `/` | **首页可观测大盘** | 实验室核心指标看板、旗舰专线速览、全站核心集群入口与方法论声明 |
| `/rankings/` & `/jichang/` | **2026 机场推荐梯队榜** | T0 旗舰专线、T1 主力高性价比、T2 轻量备用梯队横向实测对比与选型建议 |
| `/brands/` | **42 家机场品牌全景库** | 完整收录 42 家品牌结构化档案（入口架构、协议支持、起付门槛、流媒体解锁、风险评级），含 11 家重点品牌独立深度测评页（`/brands/[slug]/`） |
| `/free/` | **万字免费资源白皮书** | 13,800+ 字深度白皮书：涵盖 GitHub 开源订阅池、Cloudflare Workers + 优选 IP 零成本自建 VLESS 教程、MITM 蜜罐安全审计与双轨分流覆写配置 |
| `/clients/` & `/clash/` | **全平台代理客户端生态** | 覆盖 Windows、macOS、iOS、Android、Linux 及 OpenWrt 软路由（Clash Verge Rev、FlClash、Shadowrocket、v2rayN、Mihomo Party 等）官方源与排错指南 |
| `/vpn/` | **传统 VPN vs 专线机场** | 从 OSI 网络模型与过墙协议原理对比 ExpressVPN/NordVPN 与 IEPL/IPLC 专线的技术代差 |
| `/nodes/` | **全球 PoP 节点延迟实测** | 香港（HK）、日本（JP）、新加坡（SG）、美国（US）四大核心机房在三大运营商晚高峰下的真实表现 |
| `/tizi/` & `/tutorial/` | **零基础入门与防坑指南** | 面向新手的 4 步订阅导入实操、TUN 模式解析、系统代理排错与防跑路黄金法则 |
| `/guide/` | **专线硬核科普与 GEO 问答** | 深度拆解 IEPL/IPLC 物理内网专线、BGP 三网优选、QoS 晚高峰限速机制与 AI 封号规避方案 |

### 3. 🛡️ 企业级预防性 SEO 与 GEO 基础设施
- **严格的规范化矩阵 (Canonical Matrix)**：全局强制 `trailingSlash: 'always'`，100% 锁定 `https://tiziclash.cc/.../` 绝对路径，消除协议/尾斜杠重复收录。
- **Answer-First & 结构化语义**：每个核心页面均在首屏提供机器可读的 TL;DR 核心结论卡片、原生语义化 `<table>` 参数对比矩阵与 `<details>/<summary>` 折叠问答。
- **100% 对齐的 JSON-LD Schema**：全站精准注入 `WebSite`、`Organization`、`BreadcrumbList`、`CollectionPage`、`Article`、`HowTo`、`FAQPage` 及带实测认证的 `Product` 标记，杜绝隐藏标记（Hidden Schema）欺诈。
- **合规外链与风控隔离**：所有商业推广外链 100% 严格包裹 `rel="nofollow sponsored noopener"`，阻断权重流失与外链连坐风险；全站 **0 死链（Zero Broken Links）**。
- **四大搜索引擎原生就绪**：`robots.txt` 与 `<head>` 原生支持 Google (`Googlebot`)、Bing (`bingbot`)、百度 (`Baiduspider`)、神马 (`yisouspider`) 抓取与站长所有权 Meta 验证。

---

## 📂 项目目录结构

```text
tomoshibi/
├── public/                     # 静态资源 (Avatar, Favicon, OG Image, Webmanifest)
├── scripts/
│   └── build-fonts.mjs         # 离线字体构建与 CSS 生成脚本
├── src/
│   ├── components/             # 模块化 Astro UI 组件
│   │   ├── About.astro         # 实验室方法论与背景介绍
│   │   ├── BrandCard.astro     # 品牌数据库卡片组件 (支持合规外链与状态标签)
│   │   ├── ClientTable.astro   # 全平台客户端矩阵表格
│   │   ├── Contact.astro       # 实验室联络与勘误反馈
│   │   ├── GuideFaq.astro      # 深度科普与 FAQ 折叠面板
│   │   ├── Hero.astro          # 首屏网络可观测大盘 Hero
│   │   ├── SiteFooter.astro    # 页脚与 8 大核心支柱网状内链索引
│   │   ├── SiteHeader.astro    # 顶部响应式导航栏
│   │   └── TopRanking.astro    # 精选梯队排行榜对比组件
│   ├── data/                   # 强类型结构化数据源
│   │   ├── brands.ts           # 42 家机场品牌全景数据库与 11 家深度评测档案
│   │   ├── clients.ts          # 全平台代理客户端下载与教程参数
│   │   ├── faqs.ts             # 专线原理与 GEO 高频问答库
│   │   ├── site.ts             # 全局站点配置、导航、SEO 关键词与站长验证预留
│   │   └── types.ts            # TypeScript 严格接口定义
│   ├── layouts/
│   │   └── Base.astro          # 全局 HTML5 骨架、Meta、Canonical 与验证标签注入
│   ├── pages/                  # 静态路由与动态生成端点
│   │   ├── brands/             # /brands/ 品牌全库及 /brands/[slug]/ 独立详情页
│   │   ├── clash/              # /clash/ Clash 生态专题页
│   │   ├── clients/            # /clients/ 客户端下载指南页
│   │   ├── free/               # /free/ 万字免费节点与自建白皮书
│   │   ├── guide/              # /guide/ 专线科普与问答页
│   │   ├── jichang/            # /jichang/ 机场推荐核心着陆页
│   │   ├── nodes/              # /nodes/ 全球节点延迟实测页
│   │   ├── rankings/           # /rankings/ 2026 梯队榜单页
│   │   ├── tizi/               # /tizi/ 科学上网梯子选型指南页
│   │   ├── tutorial/           # /tutorial/ 零基础使用教程与排错页
│   │   ├── vpn/                # /vpn/ 传统 VPN 与专线机场横评页
│   │   ├── 404.astro           # 404 异常页 (严格配置 noindex, nofollow)
│   │   ├── index.astro         # 首页大盘
│   │   ├── robots.txt.ts       # 动态生成标准 robots.txt
│   │   └── sitemap.xml.ts      # 自动聚合全站 23 个规范路由生成 sitemap.xml
│   └── styles/                 # 视觉令牌与组件样式表
│       ├── components.css      # 核心布局与组件级样式
│       ├── global.css          # 样式入口
│       ├── prose.css           # 长文排版与表格样式
│       ├── reset.css           # 现代 CSS Reset
│       └── tokens.css          # 颜色、间距、字体设计变量 (Design Tokens)
├── astro.config.mjs            # Astro 静态构建、域名锁定与尾斜杠规范配置
├── biome.json                  # Biome 代码格式化与静态检查规则
├── package.json                # 项目依赖与工程脚本
└── tsconfig.json               # TypeScript 严格模式配置
```

---

## 🚀 快速开始 (Local Development)

### 环境要求
- **Node.js**: `>= 22.12.0` (推荐 `v24.x`)
- **包管理器**: `pnpm` (`>= 10.x`)

### 常用开发指令

```bash
# 1. 进入工程目录并安装依赖
pnpm install

# 2. 启动本地开发服务器 (自动预构建字体并开启热更新)
pnpm run dev

# 3. 代码规范与格式化检查 (Biome)
pnpm run check
pnpm run fix

# 4. TypeScript 与 Astro 严格类型检查
pnpm run typecheck

# 5. 生成生产环境静态产物 (输出至 dist/ 目录)
pnpm run build

# 6. 本地预览生产环境构建结果
pnpm run preview
```

---

## 🔍 搜索引擎站长平台验证配置

在部署上线后，如需配置 Google Search Console、Bing Webmaster Tools、百度搜索资源平台或神马站长平台的 HTML 标签验证，只需编辑 [`src/data/site.ts`](src/data/site.ts)：

```ts
export const site: SiteConfig = {
  url: 'https://tiziclash.cc',
  // ...
  verification: {
    google: '填入_GOOGLE_验证_TOKEN',
    bing: '填入_BING_验证_TOKEN',
    baidu: '填入_BAIDU_验证_TOKEN',
    shenma: '填入_SHENMA_验证_TOKEN',
  },
}
```
保存并重新执行 `pnpm run build`，[`src/layouts/Base.astro`](src/layouts/Base.astro) 会自动在服务端渲染出对应的 `<meta name="...-verification" content="..." />` 标签。

---

## ☁️ 生产部署指南 (Cloudflare Pages / Vercel / Nginx)

本项目构建产物为 100% 纯静态文件（`dist/`），可直接托管于任何现代边缘计算平台或静态服务器：

| 配置项 | 推荐值 |
| :--- | :--- |
| **生产分支 (Production Branch)** | `main` |
| **构建命令 (Build Command)** | `pnpm run build` |
| **输出目录 (Output Directory)** | `dist` |
| **Node.js 版本环境变量** | `NODE_VERSION = 22` 或 `24` |

---

## ⚖️ 免责声明与评测准则

1. **中立客观声明**：本仓库及对应站点仅提供网络链路可观测性技术分析、公开协议科普与客户端软件使用教程，所有测速数据均标注测试基准周期与运营商环境。
2. **合规推广标注**：页面中涉及的第三方服务商外部链接均遵循搜索引擎规范添加 `rel="nofollow sponsored noopener"` 属性。
3. **合法合规使用**：请严格遵守所在国家或地区的法律法规，相关网络工具仅限用于跨境学术研究、海外流媒体娱乐、国际贸易通讯与软件工程开发。

---

## 📄 开源许可

本项目基于 [MIT License](LICENSE) 协议开源。
Copyright © 2026 **梯子Clash (tiziclash.cc) · 独立网络评测实验室**.
