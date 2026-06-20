# Peifeng Precision Mold — SEO 计划书
## 目标：每月稳定获取询盘（RFQ 表单提交）

---

## 一、当前状态 (2026-06-20)

### 网站技术栈
- Next.js 16 + React 19 + TypeScript | 22 个静态页面 | 部署于 Vercel（推测）
- 域名：`www.peifengmold.com` | 年龄：未知 | SSL：已启用

### 已完成
- [x] Google Search Console 验证
- [x] Sitemap（19 个 URL，含博客和案例）
- [x] robots.txt 正确配置
- [x] Google Analytics 4（G-1YL7WFXEJV）
- [x] Organization JSON-LD Schema
- [x] 4 个服务页独立 Service Schema
- [x] FAQPage Schema
- [x] 3 篇 SEO 博客 + BlogPosting Schema
- [x] 3 个案例详情页
- [x] 联系页 RFQ 表单（含 CAD 上传 + NDA 提示 + 自动回复）
- [x] 基础 meta 标签（title、description、OG、canonical）

### 待完成
- [ ] 博客页添加目录（TOC）提升可读性
- [ ] 图片 alt 文本优化
- [ ] 页面速度优化（目前未测量 Core Web Vitals）
- [ ] Google Business Profile 注册
- [ ] Bing Webmaster Tools 注册
- [ ] 反向链接建设

---

## 二、关键词策略

### 核心关键词（高意向，买家搜索）

| 关键词 | 月搜索量（估算） | 目标页面 |
|--------|-----------------|---------|
| China mold supplier | 1,000-3,000 | 首页 |
| injection mold China | 800-2,000 | /services/injection-molds |
| die casting mold China | 500-1,500 | /services/die-casting-molds |
| mold manufacturer China | 1,000-3,000 | 首页 |
| precision mold tooling | 300-800 | /services |
| mold engineering services | 200-500 | /services |
| China tooling supplier | 500-1,500 | 首页 |

### 长尾关键词（中等意向，信息搜索）

| 关键词 | 目标页面 |
|--------|---------|
| how to import injection molds from China | /blog/import-injection-molds-from-china |
| injection mold cost breakdown | /blog/injection-mold-cost-breakdown |
| mold steel selection guide P20 718H | /blog/mold-steel-selection-guide |
| HASCO DME mold base standards | /services（钢表区） |
| injection mold cost $2000 $5000 | /blog/injection-mold-cost-breakdown |
| free DFM review mold China | /contact |

### 待开发关键词（需要新内容）

| 关键词 | 建议内容 |
|--------|---------|
| blow mold manufacturer China | /services/blow-molds（需扩展内容） |
| rapid tooling China 2 weeks | /services/rapid-prototyping（需扩展内容） |
| medical device mold ISO 13485 | /blog 新文章 |
| aluminum die casting mold cost | /blog 新文章 |
| mold import from China guide | /blog 新文章 |
| questions to ask China mold supplier | /blog（已有占位，待写） |
| mold base standards comparison | /blog（已有占位，待写） |

---

## 三、转化漏斗

```
  流量 (Google / 直接 / 引荐)
    │
    ▼
  首页 / 落地页 ←── SEO 博客 / 案例 引流
    │
    ▼ "Get a Free Quote" CTA
  联系页 (/contact)
    │
    ▼ 填写 RFQ 表单（含 CAD 上传）
   /api/rfq → 邮件通知 (Resend)
    │
    ▼ /thank-you 确认页
  询盘成功！
```

### 转化优化检查点

| 页面 | CTA 位置 | 当前状态 |
|------|---------|---------|
| 首页 | Hero + 底部 CTA Banner + 每个 Section | ✅ 但可增加悬浮 CTA 按钮（移动端） |
| 服务页 × 4 | 底部 "Talk to Our Engineers" | ✅ |
| 博客 × 3 | 文章底部 CTA Box | ✅ "Ready to Start Your Mold Project?" |
| 案例 × 3 | 文章底部 CTA Box | ✅ "Ready for a Similar Result?" |
| FAQ | 底部 "Contact Us" | ✅ |
| Process / Quality | 底部 CTA | 待检查 |

### 待优化
- [ ] 移动端悬浮 "Get Quote" 按钮
- [ ] 服务页顶部加 "Request Quote for [Service Type]" 按钮
- [ ] 退出意图弹窗（桌面端）

---

## 四、内容日历（未来 30 天）

### Week 1-2：完成已有占位

| 优先级 | 内容 | 类型 | 目标关键词 |
|--------|------|------|-----------|
| P0 | Mold Base Standards: HASCO, DME, LKM, MISUMI Explained | 博客 | mold base standard comparison |
| P0 | 10 Questions to Ask Your China Mold Supplier | 博客 | questions to ask mold supplier |
| P1 | 给每个案例添加 1 张示意图/照片 | 图片 | N/A（提升信任感） |

### Week 3-4：扩展内容

| 优先级 | 内容 | 类型 | 目标关键词 |
|--------|------|------|-----------|
| P1 | How to Choose Between Injection Molding and Die Casting | 博客 | die casting vs injection molding |
| P1 | A Buyer's Guide to Blow Mold Sourcing from China | 博客 | blow mold China supplier |
| P1 | ISO 13485 Mold Manufacturing: What Medical Device Companies Need to Know | 博客 | medical device mold ISO 13485 |
| P2 | 扩展 Rapid Prototyping 服务页（加案例、加钢种推荐） | 服务页 | rapid tooling 2 weeks China |

---

## 五、外链建设

### 短期（0-30 天）
- [ ] Google Business Profile 注册 `Peifeng Precision Mold`（地址填深圳，服务区域填目标国家）
- [ ] Bing Places 注册
- [ ] Alibaba / Made-in-China 公司页面链接到网站
- [ ] 行业目录提交：ThomasNet、MFG.com、Kompass

### 中期（30-90 天）
- [ ] 在 LinkedIn 发布每篇博客摘要，链接回网站
- [ ] 在 Reddit r/manufacturing / r/injectionmolding 回答模具相关问题，自然提及网站（不硬推）
- [ ] 联系模具行业博客/媒体做 guest post 或获得提及

### 长期（90+ 天）
- [ ] 客户案例合作宣传（获得客户网站反向链接）
- [ ] 行业展会参展页面（NPE、K Show、Fakuma）

---

## 六、技术 SEO 待办

| 优先级 | 项目 | 说明 |
|--------|------|------|
| P1 | Core Web Vitals 测量 | PageSpeed Insights 测首页 + 服务页 + 博客 |
| P1 | 图片优化 | 目前没有本地图片。加案例图片时确保 WebP 格式 + 压缩 |
| P2 | BreadcrumbList Schema | 服务页和博客加面包屑 Schema |
| P2 | 404 页面优化 | 当前 /not-found 没有返回正确 404 状态码 |
| P3 | 结构化数据测试 | Google Rich Results Test 验证所有 Schema 有效 |

---

## 七、关键指标（KPI）

### 当前基准（需 2 周数据后才能填）

| 指标 | 当前 | 30 天目标 | 90 天目标 |
|------|------|---------|---------|
| 日均自然搜索点击 | ? | 5-10 | 20-50 |
| 月均 RFQ 提交 | ? | 2-5 | 5-15 |
| 平均排名（核心关键词） | 未收录 | 前 50 | 前 20 |
| 博客页面浏览量 | ? | 50-100/月 | 200-500/月 |
| 跳出率 | ? | <60% | <50% |

### 首月不做 KPI 考核
搜索排名需要时间。第一个月重点：**内容上线 + Google 收录 + 等待排名出现**。

---

## 八、执行优先级（做什么、什么时候）

```
本周：
  1. ✅ 所有 SEO 基础已完成（Schema、Sitemap、Analytics）
  2. [ ] Google Business Profile 注册
  3. [ ] Bing Webmaster Tools 注册

下周：
  4. [ ] 写 2 篇新博客（Mold Base Standards + 10 Questions to Ask）
  5. [ ] PageSpeed Insights 测速，修复低于 70 分的指标

第三周：
  6. [ ] 行业目录提交（ThomasNet 等）
  7. [ ] LinkedIn 内容营销开始

持续：
  8. 每月 2 篇博客
  9. 每月检查 Search Console 搜索词报告
  10. 追踪 GA4 转化数据
```

---

## 九、询盘转化预测

### 保守预估

| 时间线 | 月搜索展现 | 月点击 | 预估月询盘 |
|--------|----------|--------|-----------|
| 第 1 个月 | 100-500 | 5-20 | 0-2 |
| 第 2-3 个月 | 500-2,000 | 20-80 | 1-4 |
| 第 4-6 个月 | 2,000-5,000 | 50-200 | 3-8 |
| 第 6-12 个月 | 5,000-15,000 | 100-500 | 5-15 |

### 假设条件
- 网站转化率 2-3%（行业平均：B2B 制造 1.5-4%）
- 自然排名稳定在第 1-3 页
- 持续产出内容（每月最少 1 篇）
- 竞争对手 SEO 强度中等（模具行业 SEO 竞争不算激烈）

---

*最后更新：2026-06-20 | 下次复审：2026-07-20*
