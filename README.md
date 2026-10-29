# TiziClash · 现代化网络核心与极简技术实验室

> 专注于跨平台网络协议核心、Clash / Mihomo 配置生态、边缘计算工具与高性能 Web 基础设施研究。100% 独立自研、零暗桩、零数据上报。

---

## 🌟 核心特性

- **极致性能与轻量**：基于 Astro 7 纯静态 SSG 模式，生产环境零客户端 JS 运行时开销，毫秒级首屏加载（LCP < 0.6s）。
- **100% 纯净自研**：代码级完全剥离所有第三方依赖、分析脚本与外部暗链，所有静态资产与字体完全私有化自托管。
- **SEO 全链路优化**：
  - 符合 W3C 标准的语义化 HTML5 骨架与清晰层级结构。
  - 标准 Open Graph 与 Twitter Card 社交元数据矩阵。
  - 深度 Schema.org 结构化数据（包含 `WebSite`、`Organization`、`WebPage` 与 `BreadcrumbList` 面包屑导航）。
  - 符合 sitemaps.org 规范的自动更新 `sitemap.xml` 与爬虫友好的 `robots.txt`。
- **暗色高科技美学**：精心调校的琥珀色（Amber）科技光感、噪点微质感（Subtle Grain）与多端自适应响应式排版。

---

## 🛠 本地工程指令

```bash
# 安装依赖
pnpm install

# 预构建离线字体子集
pnpm run build:fonts

# 启动本地开发预览
pnpm run dev

# 静态生产构建
pnpm run build

# 启动生产产物预览
pnpm run preview
```

---

## 📁 目录架构

```text
├── public/                 # 独立静态资产 (Icons, Manifest, Screenshots)
├── src/
│   ├── components/         # 模块化 UI 组件
│   ├── data/
│   │   ├── site.ts         # 全局站点元数据与核心文案
│   │   ├── projects.ts     # 核心自研工程配置
│   │   └── types.ts        # TypeScript 强类型约束
│   ├── layouts/
│   │   └── Base.astro      # 全局 SEO 基础布局与结构化数据注入
│   ├── pages/              # 路由页面与 XML/TXT 动态端点
│   └── styles/             # 设计令牌与全局样式
└── astro.config.mjs        # Astro 构建与 CSP 静态导出配置
```

---

## 📄 开源许可证

本项目基于 [MIT License](LICENSE) 授权开源发布。
