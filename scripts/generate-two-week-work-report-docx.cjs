/**
 * 医疗内容整改 — 两周工作汇报（仅已落地内容）
 * 运行：node scripts/generate-two-week-work-report-docx.cjs
 */
const fs = require('fs')
const path = require('path')
const {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  BorderStyle,
  Table,
  TableRow,
  TableCell,
  WidthType,
  ShadingType,
  Header,
  Footer,
  PageNumber,
  PageBreak,
  LevelFormat,
} = require('docx')

const FONT = 'Microsoft YaHei'
const OUT_DIR = path.join(__dirname, '..', 'docs')
const OUT = path.join(OUT_DIR, '医疗内容整改-两周工作汇报-20260717.docx')

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 200 },
    children: [new TextRun({ text, font: FONT, bold: true, size: 32 })],
  })
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 120 },
    children: [new TextRun({ text, font: FONT, bold: true, size: 28 })],
  })
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 80 },
    children: [new TextRun({ text, font: FONT, bold: true, size: 24 })],
  })
}

function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: opts.after ?? 120, line: 360 },
    alignment: opts.center ? AlignmentType.CENTER : AlignmentType.LEFT,
    children: [
      new TextRun({
        text,
        font: FONT,
        size: opts.size || 22,
        bold: !!opts.bold,
        italics: !!opts.italic,
        color: opts.color,
      }),
    ],
  })
}

function bullet(text, level = 0) {
  return new Paragraph({
    numbering: { reference: 'bullets', level },
    spacing: { after: 70, line: 340 },
    children: [new TextRun({ text, font: FONT, size: 21 })],
  })
}

function numbered(text) {
  return new Paragraph({
    numbering: { reference: 'numbers', level: 0 },
    spacing: { after: 70, line: 340 },
    children: [new TextRun({ text, font: FONT, size: 21 })],
  })
}

function note(text) {
  return new Paragraph({
    spacing: { before: 100, after: 140, line: 360 },
    indent: { left: 240 },
    border: {
      left: { style: BorderStyle.SINGLE, size: 12, color: '0066CC', space: 8 },
    },
    children: [
      new TextRun({ text: '说明：', font: FONT, bold: true, size: 20, color: '0066CC' }),
      new TextRun({ text: text, font: FONT, size: 20 }),
    ],
  })
}

function cell(text, opts = {}) {
  return new TableCell({
    shading: opts.header ? { fill: 'E8EEF7', type: ShadingType.CLEAR } : undefined,
    width: { size: opts.width || 2340, type: WidthType.DXA },
    margins: { top: 70, bottom: 70, left: 100, right: 100 },
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text: String(text),
            font: FONT,
            size: opts.size || 18,
            bold: !!opts.header || !!opts.bold,
            color: opts.color,
          }),
        ],
      }),
    ],
  })
}

function simpleTable(headers, rows, widths) {
  const cols = widths || headers.map(() => Math.floor(9360 / headers.length))
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: cols,
    rows: [
      new TableRow({
        children: headers.map((h, i) => cell(h, { header: true, width: cols[i] })),
      }),
      ...rows.map(
        (row) =>
          new TableRow({
            children: row.map((c, i) =>
              typeof c === 'object' && c !== null && 'text' in c
                ? cell(c.text, { width: cols[i], bold: c.bold, color: c.color })
                : cell(c, { width: cols[i] }),
            ),
          }),
      ),
    ],
  })
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] })
}

const children = [
  // —— 封面 ——
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200, before: 600 },
    children: [new TextRun({ text: '医疗内容整改项目', font: FONT, bold: true, size: 28, color: '0066CC' })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 280 },
    children: [new TextRun({ text: '两周工作汇报', font: FONT, bold: true, size: 48 })],
  }),
  p('项目：forthepeople-aigc（Nuxt 4 静态营销站）', { center: true, size: 22 }),
  p('品牌定位：For The People Clinic（伤后医疗恢复 / 医疗事故教育资源站）', { center: true, size: 20, color: '555555' }),
  p('汇报周期：约 2026-07-07 至 2026-07-17（两周）', { center: true, size: 20, color: '555555' }),
  p('文档日期：2026 年 7 月 17 日', { center: true, size: 20, color: '555555', after: 360 }),
  note(
    '本文件仅记录代码库中已落地、可演示的改动，不包含未实现的规划项。部分页面仍有旧律所文案残留，在文末「边界说明」中如实列出。',
  ),

  pageBreak(),

  // —— 一、背景与目标 ——
  h1('一、整改背景与目标'),
  h2('1.1 背景'),
  p(
    '项目原形态为以律师获客为核心的人身伤害（personal injury）律所营销站（Morgan & Morgan 模板风格）。业务方向调整后，需要将站点主叙事从「找律师 / 索赔 / 判赔」转向「伤后医疗恢复与医疗事故患者教育」。',
  ),
  h2('1.2 已落地目标（内容比例）'),
  bullet('主叙事（约 70%）：事故后 / 疑似医疗损害后的医疗恢复指引（红旗症状、48 小时与 7 天清单、专科随访）'),
  bullet('轻量权利教育（约 20%）：知情同意、病历与记录、投诉/复核渠道等概念说明，不讲诉讼策略与律师费'),
  bullet('诊所与医生宣传（约 10%）：For The People Clinic、Dr. Y. Michael Li 档案与入口'),
  h2('1.3 技术策略（已执行）'),
  bullet('先抽数据到 app/constants/，再改页面渲染；同一类恢复指南尽量复用模板组件'),
  bullet('保留原有路由，优先改内容与组件组合，再补 301 别名到新语义路径'),
  bullet('面向用户文案以英文为主；内部任务/汇报文档可用中文'),
  bullet('博客采用「少量完整静态文章 + coming-soon 占位」，为后续 API/Agent 发布预留结构'),

  // —— 二、两周成果总览 ——
  h1('二、两周成果总览'),
  p('以下为可量化的已交付范围：'),
  simpleTable(
    ['类别', '已落地数量 / 说明'],
    [
      ['品牌与导航', '诊所品牌头/尾、Injury Recovery Guides 主导航、电话与邮箱更新'],
      ['首页', 'Hero 无 PII 清单工具 + How It Works 插图 + Clinic 区块 + Insights 五步面板 + CTA'],
      ['医疗 Hub / 指南', '医疗事故总览 + 6 个子类详情 + 5 步行动指南页'],
      ['恢复指南页', '车祸/跌倒/卡车等 17+ 条 practice-area 路由医疗化'],
      ['无 PII 工具', '15 情境 × 时间 × 症状变化 → /medical/your-plan 结果页'],
      ['诊所医生', 'Meet Our Doctors（Dr. Li 完整档案）+ WebP 头像'],
      ['恢复故事', '/recovery-stories 主路由 + 旧 /our-results 301'],
      ['搜索', '全屏搜索浮层 + /search 客户端检索'],
      ['About / Contact', 'Case Process、Testimonials、Locations、Contact 医疗化'],
      ['博客', '医疗分类归档 + 4 篇完整英文文章 + 未知 slug 占位页'],
      ['重定向', '/practice-areas、/our-results、/blog/posts、/about/blog 等 301'],
    ],
    [2800, 6560],
  ),
  p('', { after: 80 }),
  quoteTalk(
    '这两周把站点从「律所获客模板」落地改造成「伤后医疗恢复教育资源站」：核心指南页、无 PII 清单工具、医生页、首页与导航都已可演示；旧诉讼叙事在主路径上已大幅弱化。',
  ),

  pageBreak(),

  // —— 三、阶段与任务 ——
  h1('三、整改阶段与任务落地情况'),
  p('早期按 T01–T15 拆分推进，两周内已完成的主线如下（状态均为已落地）：'),
  simpleTable(
    ['任务', '内容', '状态'],
    [
      ['T01', '医疗语气规范 tone.ts、disclaimer 等', '已完成'],
      ['T02–T04', '医疗 Hub、6 亚型、5 步行动指南页', '已完成'],
      ['T05', '患者权利基础 / FAQ 数据化', '已完成'],
      ['T06/T08', '医疗博客分类、文章页、可点击分类卡', '已完成'],
      ['T07', '医疗相关页英文化统一', '已完成'],
      ['T10', 'SCI / 脑损 / 危险药品等关联页医疗化', '已完成'],
      ['T11', '博客改为少量完整文 + 占位策略', '已调整落地'],
      ['T12', '导航改为 Injury Recovery Guides 主轴', '已完成'],
      ['T13', '首页医疗化（Hero / HowWorks / Insights / Clinic）', '已完成'],
      ['T14', 'CTA 改为 Build Your Recovery Checklist', '已完成'],
      ['T15+', '事故类恢复指南 + SEO/301 + 诊所/医生/搜索/Locations', '已完成'],
    ],
    [1200, 5600, 2560],
  ),

  pageBreak(),

  // —— 四、首页 ——
  h1('四、首页（/）逐块说明'),
  p('文件：app/pages/index.vue。模块顺序：HomeHero → HomeHowWorks → HomeClinic → HomeInsights → SiteLeadFeeSection。已移除原律所战绩/律师面孔等模块（HomeIntroBigWins、HomeWaysFaces、HomeReviews）。'),

  h2('4.1 HomeHero（首屏）'),
  bullet('主标题与副文案改为伤后医疗行动 / 恢复计划导向'),
  bullet('右侧表单改为三项无 PII 选择：Injury/Medication Context、Timing、Worsening'),
  bullet('提交后经 useMedicalIntake().buildChecklist() 跳转 /medical/your-plan?context=&timing=&worsening='),
  bullet('明确声明：不收集姓名、电话、邮箱、医疗笔记'),
  bullet('按钮文案为医疗下一步（Get My Medical Next Steps 等）'),

  h2('4.2 HomeHowWorks（How It Works）'),
  bullet('三步文案诊所化：Reach Out Your Way → Meet Your Care Support → Build A Clear Recovery Plan'),
  bullet('左侧插图使用项目内图片：public/images/how-it-works/step-1-contact.png、step-2-care-team.png、step-3-recovery-plan.png'),
  bullet('CTA 分别指向 #contact、/about/meet-our-doctors、/medical/what-to-do'),

  h2('4.3 HomeClinic（Our Clinic & Doctors，新增）'),
  bullet('展示 CLINIC_SERVICES 四项服务与 CLINIC_DOCTORS（当前 Dr. Li）'),
  bullet('医生卡链至 Meet Our Doctors；CTA 含 5 步指南与 Contact'),

  h2('4.4 HomeInsights'),
  bullet('统计条改为医疗指标：5 步 / 48H / 1 timeline / 24/7'),
  bullet('原空视频深蓝占位改为「5-Step Action Guide」路径面板：Stabilize、Document、Second opinion、Review channels、Recovery plan，均可进入 /medical/what-to-do'),
  bullet('Patient Action Resources 四卡插图复用 Locations How It Works 四张图（loc-how-*.webp）'),
  bullet('保留 videoSrc 开关：有视频源时可切回播放器'),

  h2('4.5 SiteLeadFeeSection（全站 CTA）'),
  bullet('原「THE FEE IS FREE / See if you qualify」改为 Build Your Recovery Checklist'),
  bullet('复用无 PII 三项选择 + useMedicalIntake，支持 presetCaseType、sectionId'),
  bullet('无后端提交；结果页同样走 URL query'),

  pageBreak(),

  // —— 五、医疗核心页 ——
  h1('五、医疗核心页面'),

  h2('5.1 医疗事故 Hub：/practice-areas/medical-malpractice'),
  bullet('文件：app/pages/practice-areas/medical-malpractice.vue'),
  bullet('数据：app/constants/medical/hub.ts、categories.ts、faq-patient.ts 等'),
  bullet('删除律师团队、判赔、获客表单等模块；改为患者向认知结构：如何理解、如何区分、行动入口、FAQ'),
  bullet('导流至 5 步指南、子类页、博客归档'),

  h2('5.2 六个亚型详情：/practice-areas/medical-malpractice/[slug]'),
  bullet('文件：medical-malpractice/[slug].vue + category-details.ts'),
  bullet('已落地 slug：misdiagnosis、medication-errors、birth-injury、surgical-errors、anesthesia-errors、dental-malpractice'),
  bullet('统一结构：常见情形、建议行动、相关阅读、返回总览；未知 slug 404'),

  h2('5.3 五步行动指南：/medical/what-to-do'),
  bullet('文件：app/pages/medical/what-to-do.vue + patient-guide.ts'),
  bullet('五步：Stabilize → Preserve records → Second opinion → Complaint/review channels → Recovery plan'),
  bullet('每步含说明段落与 Action Checklist；接入 MEDICAL_RIGHTS_BASICS 轻量权利块与免责声明'),

  h2('5.4 无 PII 恢复清单结果页：/medical/your-plan'),
  bullet('文件：app/pages/medical/your-plan.vue + composables/useMedicalIntake.ts + constants/medical/intake.ts'),
  bullet('从 URL 读取 context / timing / worsening，渲染优先级横幅、红旗、48h/7d 清单'),
  bullet('15 种情境各有专属规则；getChecklistPresentation() 按时间与症状变化调整区块顺序与优先级（urgent / caution / routine）'),
  bullet('底部 CTA：医生页、Locations、Contact；全文强调不采集 PII'),

  pageBreak(),

  // —— 六、恢复指南 ——
  h1('六、Injury Recovery Guides（原 Practice Areas）'),

  h2('6.1 总览与路由对齐'),
  bullet('新主路径：/injury-recovery-guides（injury-recovery-guides.vue + PracticeAreaViewAll）'),
  bullet('旧路径 /practice-areas 301 重定向到 /injury-recovery-guides'),
  bullet('导航文案：Practice Areas → Injury Recovery Guides；子菜单改为 Recovery 语义（Car Crash Recovery 等）'),
  bullet('总览页含 featured 卡片、Other Pathways、Medication Safety、Practical Rights & Records 教育区'),

  h2('6.2 统一页面结构（已落地模板）'),
  p('多数恢复页采用以下结构（手写页或 PracticeAreaInjuryRecovery 组件）：'),
  numbered('Hero（面包屑 + 医疗向标题/导语）'),
  numbered('Clinical Priorities（临床优先级）'),
  numbered('Red Flags（急诊复评警示）'),
  numbered('Common Injury Patterns（常见损伤模式）'),
  numbered('48-hour / 7-day checklists'),
  numbered('Light Rights（轻量权利教育，来自 shared.ts）'),
  numbered('Meet Clinicians（PracticeAreaMeetClinicians → Dr. Li）'),
  numbered('5-Step Guide Promo'),
  numbered('SiteLeadFeeSection（可 presetCaseType）'),
  numbered('Related links + Patient FAQ（医疗教育审阅标注）'),

  h2('6.3 各恢复页清单'),
  simpleTable(
    ['路由', '实现方式', '数据源 / 要点'],
    [
      ['/practice-areas/car-accident', '手写模板', 'injury-recovery/car.ts'],
      ['/practice-areas/slip-and-fall', '手写模板', 'injury-recovery/fall.ts'],
      ['/practice-areas/truck-accident', '手写模板', 'injury-recovery/truck.ts'],
      ['/practice-areas/motorcycle-accident', '通用模板', 'phase-b motorcycleRecovery'],
      ['/practice-areas/personal-injury', '通用模板', 'phase-b personalInjuryRecovery'],
      ['/practice-areas/aviation-accident', '通用模板', 'phase-b aviationRecovery'],
      ['/practice-areas/boating-accident', '通用模板', 'phase-b boatingRecovery'],
      ['/practice-areas/burn-injury', '通用模板', 'phase-b burnRecovery'],
      ['/practice-areas/mesothelioma', '通用模板', 'phase-b mesotheliomaRecovery（明确非诉讼）'],
      ['/practice-areas/workers-compensation', '通用模板', 'phase-b workersCompRecovery（医疗优先）'],
      ['/practice-areas/brain-injury', '手写医疗页', 'TBI 优先事项、模式、指南导流'],
      ['/practice-areas/spinal-cord-injury', '手写医疗页', 'SCI 随访与急诊复评'],
      ['/practice-areas/dangerous-drugs', '手写医疗页', '用药安全总览'],
      ['.../depo-provera', '手写医疗页', 'Depo 患者安全与随访'],
      ['.../weight-loss-drug', '手写医疗页', 'GLP-1 / 减重药安全'],
    ],
    [3600, 2200, 3560],
  ),
  note('共性：删除 MeetLawyers / Fight / 判赔轮播 / 传统案件获客主叙事；FAQ 与 Learn More 指向医疗指南与博客。'),

  pageBreak(),

  // —— 七、诊所医生 ——
  h1('七、诊所与医生页'),

  h2('7.1 数据与资源'),
  bullet('app/constants/clinic/doctors.ts：当前唯一医生 Dr. Y. Michael Li, M.D., Ph.D.（神经外科），含 focus、教育、项目、差异点、论文与研究亮点'),
  bullet('app/constants/clinic/services.ts：四项诊所服务 + CLINIC_INTRO'),
  bullet('头像：public/images/doctors/y-michael-li.webp'),

  h2('7.2 /about/meet-our-doctors'),
  bullet('文件：app/pages/about/meet-our-doctors/index.vue'),
  bullet('在列表页直接展示 Dr. Li 完整档案（非多医生空列表）'),
  bullet('首屏左右比例约 43/57，头像 1:1，文案垂直居中；说明后续将增加更多 clinician'),
  bullet('动态详情页 [slug].vue 可按 slug 打开同一医生；未知 slug 404'),

  h2('7.3 站内引用'),
  bullet('首页 HomeClinic、HomeHowWorks Step 2'),
  bullet('各恢复页 PracticeAreaMeetClinicians'),
  bullet('your-plan 底部、About 下拉菜单 Meet Our Doctors'),

  // —— 八、恢复故事 ——
  h1('八、Recovery Stories（原 Our Results）'),
  bullet('主路由：/recovery-stories（recovery-stories.vue）'),
  bullet('/our-results 301 → /recovery-stories；旧 ourResult/our-results 路径保留同构内容'),
  bullet('组件：OurResultsCaseGrid（标题改为 Recovery Stories Focused On Care）、Explore、Corporations、WaysHelp + SiteLeadFeeSection'),
  bullet('叙事改为患者恢复路径与随访，弱化诉讼战绩'),

  // —— 九、About ——
  h1('九、About 相关页面'),

  h2('9.1 /about/the-case-process（Recovery Process）'),
  bullet('Hero / After Injury / Working With Care Team / Documents / Qualify 等组件文案医疗化'),
  bullet('数据源 the-case-process.ts：卡片与 FAQ 指向 /medical/what-to-do、Meet Our Doctors、Contact'),
  bullet('Attorney101 区块标题改为 Working With Our Clinic'),

  h2('9.2 /about/testimonials'),
  bullet('数据 testimonials.ts：患者恢复故事与评价语气'),
  bullet('Hero 右侧 Get in touch 跳转 /locations（不再锚点到清单区块）'),
  bullet('底部仍可挂载 SiteLeadFeeSection（section-id 可配置）'),

  h2('9.3 About 导航'),
  bullet('AboutNavDropdown：Meet Our Doctors、The Case Process、Testimonials、FAQ'),

  pageBreak(),

  // —— 十、Locations / Contact ——
  h1('十、Locations 与 Contact'),

  h2('10.1 /locations'),
  bullet('文件：app/pages/Location/locations.vue（nuxt hooks 注册路由）'),
  bullet('办公室数据统一自 constants/offices.ts：Flushing、Syracuse；电话 (929) 399-3134'),
  bullet('含地图、Google Maps 外链、How It Works 资源卡、医疗行动 plan CTA'),
  bullet('SEO title/description 诊所向'),

  h2('10.2 /contact'),
  bullet('ContactWhy / Inquiries 改为诊所支持与办公室入口（链到 /locations）'),
  bullet('主转化使用 SiteLeadFeeSection（无 PII 清单），而非传统案件 lead 提交'),
  bullet('邮箱落地：NY@spineandneurosurgery.com（页脚等处同步）'),

  // —— 十一、搜索与博客 ——
  h1('十一、搜索与博客'),

  h2('11.1 搜索'),
  bullet('SiteSearchOverlay：Header 搜索图标打开全屏 dialog，提交或点热门主题 → /search?q='),
  bullet('/search：客户端 searchSite() 对 title/summary 评分；分类展示 Recovery guide / Article / Page'),
  bullet('索引：constants/search.ts（恢复指南 + 站点页 + 医疗文章 + POPULAR_SEARCH_TOPICS）'),

  h2('11.2 博客'),
  bullet('/blog/medical-malpractice：医疗文章归档'),
  bullet('/blog/posts/[slug]：四篇完整英文长文已落地：'),
  bullet('medical-malpractice-vs-medical-dispute', 1),
  bullet('how-to-build-a-complete-medical-timeline', 1),
  bullet('second-medical-opinion-patient-checklist', 1),
  bullet('informed-consent-what-to-check-before-you-sign', 1),
  bullet('未知 slug 显示 Publishing Pipeline 占位页（明确标注后续可由 API 替换）'),
  bullet('/blog/posts 301 → /blog#blog-latest-posts'),

  // —— 十二、全局壳 ——
  h1('十二、全局导航、页脚与重定向'),

  h2('12.1 AppHeader'),
  bullet('品牌：FOR THE PEOPLE CLINIC / INJURY RECOVERY & MEDICAL GUIDANCE'),
  bullet('主导航：Recovery Stories、Locations、Injury Recovery Guides（含 Medication Safety 子菜单）、About、Blog、Contact'),
  bullet('电话：(929) 399-3134；搜索打开 SiteSearchOverlay'),

  h2('12.2 AppFooter'),
  bullet('Clinic / About / Quick Links 医疗化'),
  bullet('Social 改为 Share：X / Facebook / LinkedIn 分享当前页（不跳转 Morgan & Morgan 账号）'),
  bullet('删除 App Stores 无效区块'),
  bullet('双办公室地址 + Office Locations；医疗教育 disclaimer'),
  bullet('联系邮箱 NY@spineandneurosurgery.com'),

  h2('12.3 routeRules 301（nuxt.config.ts）'),
  bullet('/about/blog → /blog'),
  bullet('/blog/posts → /blog#blog-latest-posts'),
  bullet('/our-results → /recovery-stories'),
  bullet('/practice-areas → /injury-recovery-guides'),

  pageBreak(),

  // —— 十三、数据架构 ——
  h1('十三、内容数据架构（已落地）'),
  simpleTable(
    ['目录 / 文件', '职责'],
    [
      ['constants/brand.ts', '诊所品牌名、tagline'],
      ['constants/offices.ts', '双办公室 canonical 数据'],
      ['constants/clinic/*', '医生档案、服务、简介'],
      ['constants/medical/*', 'Hub、亚型、5 步指南、权利、FAQ、intake、tone、disclaimer'],
      ['constants/injury-recovery/*', '各事故类型恢复指南结构化数据 + Light Rights'],
      ['constants/search.ts', '搜索索引与热门主题'],
      ['constants/blog.ts', '博客分类、4 篇医疗长文、列表映射'],
      ['constants/the-case-process.ts', 'Recovery Process 全流程文案'],
      ['constants/testimonials.ts', 'Testimonials 故事与评价'],
      ['composables/useMedicalIntake.ts', '无 PII 清单跳转逻辑'],
    ],
    [3600, 5760],
  ),
  p('', { after: 80 }),
  p('Intake 工具细节：'),
  bullet('Context 15 项：Car / Slip / Truck / Motorcycle / Personal Injury / Aviation / Boating / Brain / Burn / Mesothelioma / Spinal Cord / Medical Malpractice / Dangerous Drugs / Depo-Provera / Weight Loss Drug'),
  bullet('Timing 4 项：today / 48h / week / later'),
  bullet('Worsening 3 项：yes / no / unsure'),
  bullet('worsening=yes → urgent 优先展示 48h；unsure → caution；timing=week/later → 先展示 7d'),

  // —— 十四、静态资源 ——
  h1('十四、新增静态资源'),
  bullet('public/images/doctors/y-michael-li.webp'),
  bullet('public/images/how-it-works/step-1-contact.png'),
  bullet('public/images/how-it-works/step-2-care-team.png'),
  bullet('public/images/how-it-works/step-3-recovery-plan.png'),
  bullet('Locations How It Works 插图（已有）：public/images/locations/loc-how-*.webp，并复用于首页 Patient Action Resources'),

  pageBreak(),

  // —— 十五、边界 ——
  h1('十五、边界说明（仍存在的旧文案 / 未统一项）'),
  p('以下内容仍存在于代码中，便于汇报时诚实说明「主路径已医疗化、边角尚未清零」：'),
  numbered('nuxt.config.ts 默认 app.head title/description 仍可能残留 Morgan & Morgan 模板默认值（各页 useHead 多数已覆盖）'),
  numbered('about-faq.ts 部分 FAQ 仍含 contingency fee / attorneys 等旧表述'),
  numbered('ContactHero 等个别组件仍可能残留 compensation / attorney 相关文案或图片 alt'),
  numbered('brand.ts 常量已建，但尚未被全站组件统一 import'),
  numbered('Locations 页内搜索输入框目前为 UI 占位，无过滤逻辑（全站搜索走 Header Overlay + /search）'),
  numbered('博客列表中仍可能混有旧模板标题（如 lawsuit 相关卡片），医疗分类与四篇长文为主路径'),

  // —— 十六、汇报摘要 ——
  h1('十六、汇报摘要（可直接口述）'),
  p(
    '本两周将 forthepeople-aigc 从律所获客模板落地改造为 For The People Clinic 伤后医疗恢复站。已完成：医疗 Hub 与 6 亚型、5 步行动指南、无 PII 情境化恢复清单工具、17+ 恢复指南页医疗化、首页与全站 CTA、Dr. Li 医生页、Locations/Contact、Recovery Stories、搜索浮层与结果页、医疗博客四篇长文及占位策略，以及关键 301 路由对齐。内容按「医疗指引 70% + 权利常识 20% + 诊所宣传 10%」落地；边角旧律所文案仍有残留，可列入下一阶段清扫。',
  ),

  h2('关键交付物路径'),
  bullet('本汇报：docs/医疗内容整改-两周工作汇报.docx'),
  bullet('历史任务文档（若存在）：docs/医疗内容整改任务文档.docx'),
  bullet('医疗常量：app/constants/medical/'),
  bullet('恢复指南常量：app/constants/injury-recovery/'),
  bullet('诊所常量：app/constants/clinic/'),
  bullet('生成脚本：scripts/generate-two-week-work-report-docx.cjs'),
]

function quoteTalk(text) {
  return new Paragraph({
    spacing: { before: 160, after: 160, line: 360 },
    indent: { left: 240 },
    border: {
      left: { style: BorderStyle.SINGLE, size: 14, color: '107C10', space: 8 },
    },
    children: [
      new TextRun({ text: '【汇报话术】', font: FONT, bold: true, size: 21, color: '107C10' }),
      new TextRun({ text: ' ' + text, font: FONT, size: 21, italics: true }),
    ],
  })
}

// Fix: quoteTalk used before defined in children array - need to rebuild children with function available
// Actually in JS function declarations are hoisted for function declarations but quoteTalk is a function declaration... 
// wait, I used function quoteTalk at the bottom AFTER children which references it. Function declarations are hoisted in JS, so quoteTalk should work.

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: FONT, size: 22 },
      },
    },
    paragraphStyles: [
      {
        id: 'Heading1',
        name: 'Heading 1',
        basedOn: 'Normal',
        next: 'Normal',
        quickFormat: true,
        run: { size: 32, bold: true, font: FONT, color: '0A1F44' },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 },
      },
      {
        id: 'Heading2',
        name: 'Heading 2',
        basedOn: 'Normal',
        next: 'Normal',
        quickFormat: true,
        run: { size: 26, bold: true, font: FONT, color: '0A1F44' },
        paragraph: { spacing: { before: 260, after: 120 }, outlineLevel: 1 },
      },
      {
        id: 'Heading3',
        name: 'Heading 3',
        basedOn: 'Normal',
        next: 'Normal',
        quickFormat: true,
        run: { size: 22, bold: true, font: FONT, color: '1F3A5F' },
        paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 2 },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: 'bullets',
        levels: [
          {
            level: 0,
            format: LevelFormat.BULLET,
            text: '•',
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
          {
            level: 1,
            format: LevelFormat.BULLET,
            text: '–',
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 1080, hanging: 360 } } },
          },
        ],
      },
      {
        reference: 'numbers',
        levels: [
          {
            level: 0,
            format: LevelFormat.DECIMAL,
            text: '%1.',
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.RIGHT,
              children: [
                new TextRun({
                  text: 'For The People Clinic · 医疗内容整改两周汇报',
                  font: FONT,
                  size: 16,
                  color: '888888',
                }),
              ],
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: '第 ', font: FONT, size: 16, color: '666666' }),
                new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: '666666' }),
                new TextRun({ text: ' 页', font: FONT, size: 16, color: '666666' }),
              ],
            }),
          ],
        }),
      },
      children,
    },
  ],
})

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })
  const buffer = await Packer.toBuffer(doc)
  fs.writeFileSync(OUT, buffer)
  console.log('Generated:', OUT)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
