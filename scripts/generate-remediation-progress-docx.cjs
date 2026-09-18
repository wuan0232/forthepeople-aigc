/**
 * 医疗内容整改 — 工作汇报 Word 文档
 * 运行：node scripts/generate-remediation-progress-docx.cjs
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
  PageBreak,
} = require('docx')

const FONT = 'Microsoft YaHei'
const OUT_DIR = path.join(__dirname, '..', 'docs')
const OUT = path.join(OUT_DIR, '医疗内容整改工作汇报.docx')

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
        bold: opts.bold || false,
        italics: opts.italic || false,
        color: opts.color,
      }),
    ],
  })
}

function bullet(text, level = 0) {
  return new Paragraph({
    bullet: { level },
    spacing: { after: 80, line: 340 },
    children: [new TextRun({ text, font: FONT, size: 22 })],
  })
}

function numbered(text) {
  return new Paragraph({
    numbering: { reference: 'numbers', level: 0 },
    spacing: { after: 80, line: 340 },
    children: [new TextRun({ text, font: FONT, size: 22 })],
  })
}

function note(text) {
  return new Paragraph({
    spacing: { before: 120, after: 120, line: 360 },
    indent: { left: 360 },
    border: {
      left: { style: BorderStyle.SINGLE, size: 12, color: '0066CC', space: 8 },
    },
    children: [
      new TextRun({ text: '说明：', font: FONT, bold: true, size: 22, color: '0066CC' }),
      new TextRun({ text: ' ' + text, font: FONT, size: 22 }),
    ],
  })
}

function cell(text, opts = {}) {
  return new TableCell({
    shading: opts.header ? { fill: 'E8EEF7', type: ShadingType.CLEAR } : undefined,
    width: { size: opts.width || 2500, type: WidthType.DXA },
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text,
            font: FONT,
            size: 20,
            bold: !!opts.header,
            color: opts.color,
          }),
        ],
      }),
    ],
  })
}

function statusCell(text, status) {
  const colors = {
    已完成: '107C10',
    进行中: 'C55A11',
    待开始: '666666',
    已调整: '0066CC',
  }
  return cell(text, { color: colors[status] || undefined, width: 1560 })
}

function simpleTable(headers, rows, colWidths) {
  const widths = colWidths || headers.map(() => Math.floor(9360 / headers.length))
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: widths,
    rows: [
      new TableRow({
        children: headers.map((h, i) => cell(h, { header: true, width: widths[i] })),
      }),
      ...rows.map(
        (row) =>
          new TableRow({
            children: row.map((c, i) =>
              typeof c === 'object' && c.status
                ? statusCell(c.text, c.status)
                : cell(String(c), { width: widths[i] }),
            ),
          }),
      ),
    ],
  })
}

const doc = new Document({
  numbering: {
    config: [
      {
        reference: 'numbers',
        levels: [
          {
            level: 0,
            format: 'decimal',
            text: '%1.',
            alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } },
          },
        ],
      },
    ],
  },
  styles: {
    default: { document: { run: { font: FONT, size: 22 } } },
    paragraphStyles: [
      {
        id: 'Heading1',
        name: 'Heading 1',
        basedOn: 'Normal',
        next: 'Normal',
        quickFormat: true,
        run: { size: 32, bold: true, font: FONT },
        paragraph: { spacing: { before: 240, after: 240 }, outlineLevel: 0 },
      },
      {
        id: 'Heading2',
        name: 'Heading 2',
        basedOn: 'Normal',
        next: 'Normal',
        quickFormat: true,
        run: { size: 28, bold: true, font: FONT },
        paragraph: { spacing: { before: 180, after: 180 }, outlineLevel: 1 },
      },
      {
        id: 'Heading3',
        name: 'Heading 3',
        basedOn: 'Normal',
        next: 'Normal',
        quickFormat: true,
        run: { size: 24, bold: true, font: FONT },
        paragraph: { spacing: { before: 120, after: 120 }, outlineLevel: 2 },
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 200 },
          children: [
            new TextRun({
              text: '医疗内容整改 — 工作汇报',
              font: FONT,
              bold: true,
              size: 44,
            }),
          ],
        }),
        p('项目：forthepeople-aigc（Nuxt 4 静态营销站）', { center: true }),
        p('汇报范围：自「整改方案」启动至当前进度', { center: true, size: 20, color: '666666' }),
        p('文档日期：2026 年 7 月 10 日', { center: true, size: 20, color: '666666', after: 360 }),

        h1('一、整改背景与目标'),
        p(
          '项目原形态为以律师获客为核心的个人 injury 律所营销站，与当前业务方向不一致。整改目标：以医疗事故与伤后医疗恢复为主线，辅以少量医疗法律科普，强调患者行动指南与医疗解决方案，弱化律师服务与诉讼转化。',
        ),
        bullet('主线：患者安全 → 症状识别 → 记录整理 → 专科复评 → 恢复随访'),
        bullet('内容语言：站点面向用户以英文为主'),
        bullet('技术形态：Nuxt 静态站 + constants 数据文件，便于后续接 API / Agent 自动发布'),

        h1('二、整改思路与总体架构'),
        h2('2.1 核心策略'),
        bullet('叙事转向：从「找律师 / 索赔」改为「伤后怎么处理、怎么随访、怎么准备医疗复核」'),
        bullet('结构复用：Practice Area 页面统一为「患者恢复指南」模板'),
        bullet('内容数据化：医疗文案抽离至 app/constants/medical/'),
        bullet('渐进改造：按 T01–T15 分优先级，先高影响低改动，再收口导航 / 首页 / SEO'),

        h2('2.2 整改后信息架构'),
        bullet('医疗 Hub：/practice-areas/medical-malpractice'),
        bullet('5 步行动指南：/medical/what-to-do'),
        bullet('6 个医疗亚型子页（动态 [slug]）'),
        bullet('关联恢复页：脑损伤、脊髓损伤、危险药品等'),
        bullet('博客：少量静态占位 + coming-soon 兜底，预留 API 发布'),

        h2('2.3 内容语气规范'),
        bullet('避免：lawyer、attorney、lawsuit、settlement、compensation-first'),
        bullet('优先：patient、follow-up、urgent symptoms、timeline、specialist review'),

        new Paragraph({ children: [new PageBreak()] }),

        h1('三、任务分解与进度（T01–T15）'),
        simpleTable(
          ['任务', '内容', '优先级', '状态'],
          [
            ['T01', '医疗语气规范 tone.ts', 'P0', { text: '已完成', status: '已完成' }],
            ['T02', '医疗 Hub 主页面', 'P0', { text: '已完成', status: '已完成' }],
            ['T03', '6 个医疗亚型分类与子页', 'P0', { text: '已完成', status: '已完成' }],
            ['T04', '5 步患者行动指南页', 'P0', { text: '已完成', status: '已完成' }],
            ['T05', '患者权利 / FAQ 数据化', 'P1', { text: '已完成', status: '已完成' }],
            ['T06', '医疗博客分类与文章页骨架', 'P1', { text: '已完成', status: '已完成' }],
            ['T07', '医疗相关页英文化', 'P0', { text: '已完成', status: '已完成' }],
            ['T08', '可点击分类卡片组件', 'P1', { text: '已完成', status: '已完成' }],
            ['T09', 'medical constants 统一导出', 'P2', { text: '已完成', status: '已完成' }],
            ['T10', '关联页面医疗化', 'P1', { text: '已完成', status: '已完成' }],
            ['T11', '博客扩展与链接', 'P2', { text: '已调整', status: '已调整' }],
            ['T12', '导航医疗主轴化', 'P1', { text: '已完成', status: '已完成' }],
            ['T13', '首页医疗主题化', 'P1', { text: '已完成', status: '已完成' }],
            ['T14', 'CTA 医疗化改造', 'P1', { text: '已完成', status: '已完成' }],
            ['T15', 'SEO + 占位链接收口', 'P2', { text: '待开始', status: '待开始' }],
          ],
          [900, 4200, 1200, 1560],
        ),
        p('', { after: 80 }),
        note(
          'T11 已按最新需求调整：不大量堆静态正文，保留 4 篇医疗文章（1 篇较完整 + 3 篇轻量占位），未知 slug 走 coming-soon 兜底，便于后续 API/Agent 发布。',
        ),

        h1('四、已实现内容（按模块）'),

        h2('4.1 医疗核心（constants + 页面）'),
        bullet('app/constants/medical/：hub、categories、category-details、patient-guide、rights-basics、faq-patient、tone'),
        bullet('Hub：medical-malpractice.vue — 患者导向，移除律师模块'),
        bullet('指南：medical/what-to-do.vue — 5 步结构化行动路径'),
        bullet('子页：medical-malpractice/[slug].vue — 6 类动态模板'),

        h2('4.2 关联页面医疗化（T10）'),
        bullet('spinal-cord-injury、brain-injury — Recovery / Follow-up 导向'),
        bullet('dangerous-drugs 主页 + depo-provera + weight-loss-drug — 用药安全'),
        bullet('共性：删除律师团队、战绩、 testimonial 等模块；FAQ 与导流指向医疗指南'),

        h2('4.3 博客体系'),
        bullet('归档：/blog/medical-malpractice'),
        bullet('详情：/blog/posts/[slug].vue — 静态数据优先，无数据则占位页'),
        bullet('保留 4 篇：medical-malpractice-vs-medical-dispute + 3 篇轻量占位'),
        bullet('blogLatestListPosts 与归档列表 slug 已对齐'),

        h2('4.4 全站入口与 CTA（T12–T14）'),
        bullet('AppHeader：Injury Recovery Guides；子菜单 Recovery 语义；Logo 副标医疗导向'),
        bullet('SiteLeadFeeSection：5-Step Medical Action Plan / Get My Medical Next Steps'),
        bullet('首页：Hero + HowWorks + Insights + CTA；移除律所战绩与律师面孔模块'),
        bullet('HomeHero / HomeHowWorks / HomeInsights 文案医疗化'),

        h2('4.5 工程状态'),
        bullet('npm run build 多次通过，改动文件 lint 无报错'),

        new Paragraph({ children: [new PageBreak()] }),

        h1('五、整改执行流程（分阶段）'),
        h3('阶段 1：定方向'),
        numbered('明确主轴：医疗事故 + 伤后医疗方案，律师层极弱化'),
        numbered('输出 T01–T15 任务文档（docs/医疗内容整改任务文档.docx）'),
        numbered('建立 tone 规范与页面模板约定'),

        h3('阶段 2：医疗 Hub 与指南'),
        numbered('Hub + 5 步指南 + 6 亚型 — 形成可演示闭环'),
        numbered('FAQ / Learn More 导流至指南与博客'),

        h3('阶段 3：关联页批量医疗化'),
        numbered('SCI、TBI、Dangerous Drugs 等按同一模板去律师化'),
        numbered('保留路由，仅改内容与组件组合'),

        h3('阶段 4：全站语气统一'),
        numbered('导航、首页、CTA 同步改为 medical recovery 叙事'),

        h3('阶段 5：SEO 与链接收口（待做）'),
        numbered('事故页 useHead 改为医疗恢复关键词'),
        numbered('清理 # 占位与旧诉讼导向链接'),
        numbered('Learn More 统一导向医疗 Hub、行动指南、博客归档'),

        h1('六、后续计划'),
        h2('6.1 短期 — T15'),
        bullet('car-accident、slip-and-fall、truck-accident 等改为「伤后医疗恢复指南」'),
        bullet('统一 SEO 与站内链接；内容可抽离至 app/constants/injury-recovery/'),

        h2('6.2 中期 — API / Agent 对接'),
        bullet('博客字段：slug、title、summary、sections[]、seo、publishedIso、categoryLabel'),
        bullet('前端从 API 替换 blogMedicalArticles 静态数组'),
        bullet('Agent 产出 JSON → 后台发布 → 前端渲染'),

        h2('6.3 事故页改造模板（已共识）'),
        bullet('红旗症状 → 48h 清单 → 7 天随访 → 记录模板 → FAQ'),
        bullet('保留业务入口 URL，内容重心转为伤后医疗处置与康复'),

        h1('七、汇报摘要（可直接口述）'),
        p(
          '本次整改将站点从「律所获客站」重构为「伤后医疗恢复与医疗事故教育资源站」。已完成医疗 Hub、5 步行动指南、6 个亚型子页、关联损伤/用药页面医疗化，以及导航、首页、CTA 的全站语气统一。博客采用少量静态占位策略，为后续 API/Agent 自动 SEO 发布预留结构。整体进度约 85%+，剩余主要为 T15（事故页医疗化 + SEO/死链收口）及 API 对接。',
        ),

        h2('关键交付物'),
        bullet('任务规划：docs/医疗内容整改任务文档.docx'),
        bullet('本汇报：docs/医疗内容整改工作汇报.docx'),
        bullet('医疗常量：app/constants/medical/'),
        bullet('博客数据：app/constants/blog.ts'),
      ],
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
