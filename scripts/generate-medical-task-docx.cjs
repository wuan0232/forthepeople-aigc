/**
 * 医疗内容整改任务文档 — Word
 * 运行：node scripts/generate-medical-task-docx.cjs
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
const OUT = path.join(OUT_DIR, '医疗内容整改任务文档.docx')

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
      new TextRun({ text: '提示：', font: FONT, bold: true, size: 22, color: '0066CC' }),
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

function simpleTable(headers, rows, colWidths) {
  const widths = colWidths || headers.map(() => Math.floor(9360 / headers.length))
  const total = widths.reduce((a, b) => a + b, 0)
  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: widths,
    rows: [
      new TableRow({
        children: headers.map((h, i) => cell(h, { header: true, width: widths[i] })),
      }),
      ...rows.map(
        (row) =>
          new TableRow({
            children: row.map((c, i) =>
              cell(typeof c === 'string' ? c : c.text, {
                width: widths[i],
                color: typeof c === 'object' ? c.color : undefined,
              })
            ),
          })
      ),
    ],
  })
}

function taskBlock(id, title, priority, effort, files, steps, acceptance) {
  const blocks = []
  blocks.push(h3(`任务 ${id}：${title}`))
  blocks.push(
    simpleTable(
      ['优先级', '难度', '预估工时', '风险'],
      [[priority, effort.difficulty, effort.hours, effort.risk]],
      [2340, 2340, 2340, 2340]
    )
  )
  blocks.push(new Paragraph({ spacing: { after: 120 } }))
  blocks.push(p('涉及文件：', { bold: true, after: 60 }))
  files.forEach((f) => blocks.push(bullet(f)))
  blocks.push(p('实现流程：', { bold: true, after: 60 }))
  steps.forEach((s) => blocks.push(numbered(s)))
  blocks.push(p('验收标准：', { bold: true, after: 60 }))
  acceptance.forEach((a) => blocks.push(bullet(a)))
  blocks.push(new Paragraph({ spacing: { after: 200 } }))
  return blocks
}

const children = []

// ========== 封面 ==========
children.push(
  new Paragraph({ spacing: { before: 2200 } }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [
      new TextRun({
        text: 'forthepeople-aigc',
        font: FONT,
        bold: true,
        size: 40,
        color: '1E2761',
      }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 120 },
    children: [
      new TextRun({
        text: '医疗内容整改任务文档',
        font: FONT,
        size: 36,
        color: '0066CC',
      }),
    ],
  }),
  p('定位：医疗事故科普为主 · 轻量权利常识 · 引出医疗解决方案 · 不涉及律师服务层', {
    center: true,
    size: 20,
  }),
  p('原则：从最好改的部分开始，先换文案与数据，再动页面结构，最后改全站导航与首页', {
    center: true,
    size: 20,
  }),
  p('生成日期：2026年7月7日', { center: true, size: 20 }),
  p('项目路径：d:\\AIH\\forthepeople-aigc', { center: true, size: 18, color: '666666' }),
  new Paragraph({ children: [new PageBreak()] })
)

// ========== 一、整改目标 ==========
children.push(h1('一、整改目标与内容边界'))
children.push(h2('1.1 核心目标'))
children.push(bullet('主轴：帮助患者与家属认清医疗事故、采取行动、找到医疗层面的解决方案'))
children.push(bullet('次要：轻量医疗法律常识（知情同意、病历权、鉴定概念），占比约 15%'))
children.push(bullet('避免：律师团队展示、判赔金额、诉讼策略、律师费、案件代理话术'))
children.push(h2('1.2 内容比例建议'))
children.push(
  simpleTable(
    ['层级', '占比', '示例主题'],
    [
      ['医疗事故认知', '约 70%', '并发症 vs 事故、按科室分类、常见类型'],
      ['轻量权利常识', '约 15%', '知情同意、病历复印、鉴定 vs 诉讼概念区分'],
      ['医疗解决方案', '约 15%', '第二诊疗意见、病历整理、康复资源、投诉渠道'],
    ],
    [2200, 1200, 5960]
  )
)
children.push(new Paragraph({ spacing: { after: 200 } }))
children.push(h2('1.3 语气转换对照（改写时必查）'))
children.push(
  simpleTable(
    ['原表述（禁用/弱化）', '改为（患者向）'],
    [
      ['Medical Malpractice Lawyers', '医疗事故指南 / 患者必读'],
      ['fight for compensation', '了解发生了什么、下一步怎么办'],
      ['free case evaluation', '获取行动清单 / 阅读完整指南'],
      ['Meet Our Attorneys', '删除或改为「相关医疗知识」'],
      ['verdicts and settlements', '删除判赔轮播模块'],
      ['hire Morgan & Morgan', '删除'],
      ['statute of limitations 详述', '一句带过「注意时效」，不展开诉讼'],
    ],
    [4680, 4680]
  )
)

children.push(new Paragraph({ children: [new PageBreak()] }))

// ========== 二、优先级总览 ==========
children.push(h1('二、任务优先级总览（从易到难）'))
children.push(
  p(
    '排序逻辑：① 只改文案/数据、不动 UI 的优先；② 单文件改动优先；③ 复用现有组件优先；④ 全站级改动放最后。'
  )
)
children.push(
  simpleTable(
    ['批次', '优先级', '任务编号', '任务名称', '难度', '工时', '依赖'],
    [
      ['第 1 批', 'P0', 'T01', '建立医疗内容 constants 骨架', '★☆☆', '0.5 天', '无'],
      ['第 1 批', 'P0', 'T02', '改写 about-faq 中医疗相关问答', '★☆☆', '0.5 天', 'T01'],
      ['第 1 批', 'P0', 'T03', '医疗主 Hub 页：删除律师模块 + 换文案', '★★☆', '1 天', 'T01'],
      ['第 2 批', 'P1', 'T04', '六大子类型卡片加链接与患者向文案', '★★☆', '0.5 天', 'T03'],
      ['第 2 批', 'P1', 'T05', '新建患者行动指南页（5 步）', '★★☆', '1 天', 'T01'],
      ['第 2 批', 'P1', 'T06', '主 Hub 链到行动指南 + 轻量权利区块', '★★☆', '0.5 天', 'T03,T05'],
      ['第 3 批', 'P1', 'T07', '首批 2 个子专题页（误诊、用药）', '★★☆', '1.5 天', 'T04'],
      ['第 3 批', 'P2', 'T08', '博客新增医疗分类 + 4 篇文章', '★★☆', '2 天', 'T01'],
      ['第 3 批', 'P2', 'T09', '补齐剩余 4 个子专题页', '★★☆', '2 天', 'T07'],
      ['第 4 批', 'P2', 'T10', '关联页医疗化（脑损伤/脊髓/用药）', '★★☆', '1.5 天', 'T03'],
      ['第 4 批', 'P2', 'T11', '博客补至 8–12 篇 + 打通 LearnMore 链接', '★★☆', '2 天', 'T08'],
      ['第 5 批', 'P3', 'T12', '导航精简为医疗主轴', '★★★', '1 天', 'T03,T07'],
      ['第 5 批', 'P3', 'T13', '首页改为医疗事故主题', '★★★', '1.5 天', 'T05,T08'],
      ['第 6 批', 'P3', 'T14', 'CTA 改造（SiteLeadFeeSection）', '★★★', '1 天', 'T13'],
      ['第 6 批', 'P3', 'T15', 'SEO 元信息 + 占位链接清零', '★★☆', '0.5 天', 'T11,T12'],
    ],
    [900, 700, 600, 2800, 600, 600, 2860]
  )
)
children.push(note('建议按「第 1 批 → 第 2 批 → …」顺序推进，每批验收通过后再进入下一批。'))

children.push(new Paragraph({ children: [new PageBreak()] }))

// ========== 三、详细任务 ==========
children.push(h1('三、详细任务说明与实现流程'))

// T01
children.push(
  ...taskBlock(
    'T01',
    '建立医疗内容 constants 骨架',
    'P0（最先做）',
    { difficulty: '★☆☆ 最易', hours: '0.5 天', risk: '低' },
    [
      '新建 app/constants/medical/index.ts',
      '新建 app/constants/medical/hub.ts（主 Hub 文案）',
      '新建 app/constants/medical/categories.ts（6 大子类型）',
      '新建 app/constants/medical/patient-guide.ts（5 步行动指南）',
      '新建 app/constants/medical/rights-basics.ts（轻量权利常识）',
      '新建 app/constants/medical/faq-patient.ts（患者 FAQ）',
      '新建 app/constants/medical/tone.ts（禁用词/推荐表述，内部参考）',
    ],
    [
      '在 app/constants/ 下新建 medical/ 目录',
      '定义 TypeScript 类型（可复用 app/types/practice-area.ts 中 FaqItem、IconCard 等）',
      '在 hub.ts 中写好 Hero 标题、导语、认知区块 3–4 条、判定三要素通俗版',
      '在 categories.ts 中为 6 个子类型定义 slug、title、summary、icon、href',
      '在 patient-guide.ts 中写 5 步行动清单，每步含 title、paragraphs、checklist 数组',
      '在 faq-patient.ts 中写 8–10 条患者向 FAQ，删除律师费/诉讼类问题',
      '在 index.ts 统一 export，供页面 import',
      '本地运行 npm run dev，确认无 TypeScript 报错',
    ],
    [
      'medical/ 目录 7 个文件创建完成',
      '所有文案为中文（或团队确认的语言）',
      '无 attorney/lawyer/lawsuit 主导表述',
      'index.ts 可被其他文件正常 import',
    ]
  )
)

// T02
children.push(
  ...taskBlock(
    'T02',
    '改写 about-faq 中医疗相关问答',
    'P0',
    { difficulty: '★☆☆ 最易', hours: '0.5 天', risk: '低' },
    ['app/constants/about-faq.ts'],
    [
      '打开 about-faq.ts，定位医疗事故相关条目（如 Does Morgan & Morgan handle medical malpractice cases?）',
      '将问答改为患者视角：「怀疑医疗事故该怎么办」而非「要不要请律师」',
      '删除或改写涉及律师费、案件代理的段落',
      '其他条目若提及 medical bills，保留医学/费用事实，删除诉讼导向',
      '保存后在 /about/faq 页面预览效果',
    ],
    [
      '医疗相关 FAQ 不再引导「联系律所」',
      '至少 1 条问答明确引导「先就医、保留病历」',
      '页面正常渲染，无报错',
    ]
  )
)

// T03
children.push(
  ...taskBlock(
    'T03',
    '医疗主 Hub 页：删除律师模块 + 换文案',
    'P0（核心）',
    { difficulty: '★★☆', hours: '1 天', risk: '中' },
    [
      'app/pages/practice-areas/medical-malpractice.vue',
      'app/constants/medical/hub.ts',
      'app/constants/medical/faq-patient.ts',
    ],
    [
      '打开 medical-malpractice.vue，在 <script setup> 顶部 import medical constants',
      '从 template 中删除 <PracticeAreaMeetLawyers> 组件块',
      '删除 <PracticeAreaResultsCarousel>（判赔轮播）',
      '删除 <PracticeAreaFight>（律所数据轮播）',
      '将 <PracticeAreaHero> 的 title/lead 改为 hub.ts 中的患者向文案',
      '将 differenceBlocks 数据改为「医疗事故认知」3–4 条（替换律所优势）',
      '将 claimParagraphs 改为「如何判断是否可能是医疗事故」',
      '将 lawsuitReqs 标签改为医学通俗版（如：不良后果 / 诊疗偏差 / 因果关系）',
      '将 faqItems 替换为 faq-patient.ts 的数据',
      '暂时保留 <SiteLeadFeeSection>（T14 再改），或改为静态引导文案',
      '更新 useHead 中的 title 和 description 为患者向 SEO',
      '运行 npm run dev，访问 /practice-areas/medical-malpractice 验收',
    ],
    [
      '页面无律师团队、无判赔金额、无 The Fee Is Free',
      '保留六大类型卡片 + FAQ + 认知区块',
      'Hero 与导语为患者/家属视角',
      '浏览器标签页 title 已更新',
    ]
  )
)

// T04
children.push(
  ...taskBlock(
    'T04',
    '六大子类型卡片加链接与患者向文案',
    'P1',
    { difficulty: '★★☆', hours: '0.5 天', risk: '低' },
    [
      'app/constants/medical/categories.ts',
      'app/pages/practice-areas/medical-malpractice.vue',
      'app/components/practice-areas/PracticeAreaWaysHelp.vue（如需支持 href）',
    ],
    [
      '在 categories.ts 为每个子类型设置 href（如 /practice-areas/medical-malpractice/misdiagnosis）',
      '将 waysHelp 卡片 text 从律师叙事改为场景科普（「什么情况需要警惕」）',
      '检查 PracticeAreaWaysHelp 是否支持链接；若不支持，给卡片加可点击包裹或扩展 IconCard 类型',
      '子页尚未建好时，href 可先指向锚点或「即将上线」占位页',
      '在主 Hub 预览 6 张卡片文案与点击行为',
    ],
    [
      '6 张卡片文案无 lawyer/attorney 字样',
      '每张卡片有明确跳转目标（或占位说明）',
      'categories.ts 为后续子页唯一数据源',
    ]
  )
)

// T05
children.push(
  ...taskBlock(
    'T05',
    '新建患者行动指南页（5 步）',
    'P1',
    { difficulty: '★★☆', hours: '1 天', risk: '中' },
    [
      '新建 app/pages/medical/what-to-do.vue（或 practice-areas/medical-malpractice/what-to-do.vue）',
      'app/constants/medical/patient-guide.ts',
      '复用：PracticeAreaHero、PracticeAreaTimeline 或 CaseProcess 类组件',
    ],
    [
      '选定路由：推荐 /medical/what-to-do 或 /practice-areas/medical-malpractice/what-to-do',
      '新建 .vue 页面，套用 PracticeAreaPage 包裹',
      '用 PracticeAreaHero 写标题「怀疑医疗事故后的行动指南」',
      '用 PracticeAreaTimeline 或自定义列表渲染 5 步（数据来自 patient-guide.ts）',
      '每步展示：标题、说明段落、可执行 checklist（复选框式条目）',
      '文末加「轻量权利常识」3 条（来自 rights-basics.ts），占比不超过页面 20%',
      '加免责声明：「本内容不构成医疗建议，请及时就医」',
      '配置 useHead SEO',
      '本地访问新路由验收',
    ],
    [
      '5 步结构完整，每步有 checklist',
      '全文无律师 CTA',
      '路由可正常访问',
      '含免责声明',
    ]
  )
)

children.push(new Paragraph({ children: [new PageBreak()] }))

// T06
children.push(
  ...taskBlock(
    'T06',
    '主 Hub 链到行动指南 + 轻量权利区块',
    'P1',
    { difficulty: '★★☆', hours: '0.5 天', risk: '低' },
    [
      'app/pages/practice-areas/medical-malpractice.vue',
      'app/constants/medical/rights-basics.ts',
      'PracticeAreaGuidePromo.vue',
      'PracticeAreaTakeaways.vue（或新建小组件）',
    ],
    [
      '将 PracticeAreaGuidePromo 的 link-href 指向 T05 行动指南路由',
      '改 title 为「怀疑医疗事故？查看 5 步行动清单」',
      '在 GuidePromo 下方插入轻量权利区块（复用 Takeaways 或 CardGrid）',
      'rights-basics 放 3–5 条：知情同意、病历复印、第二诊疗意见',
      '确认主 Hub 阅读路径：认知 → 类型 → 判断 → 行动指南 → 权利常识 → FAQ',
    ],
    [
      'GuidePromo 按钮可跳转到行动指南页',
      '权利常识区块可见且不含诉讼指引',
      '主 Hub 信息层次清晰',
    ]
  )
)

// T07
children.push(
  ...taskBlock(
    'T07',
    '首批 2 个子专题页（误诊、用药）',
    'P1',
    { difficulty: '★★☆', hours: '1.5 天', risk: '中' },
    [
      '新建 app/pages/practice-areas/medical-malpractice/misdiagnosis.vue',
      '新建 app/pages/practice-areas/medical-malpractice/medication-errors.vue',
      'app/constants/medical/categories.ts',
    ],
    [
      '复制 medical-malpractice.vue 为模板，删除律师/判赔/证言模块',
      '子页固定 5 块：Hero / 常见情形 / 如何识别 / 建议行动 / 相关阅读',
      '从 categories.ts 读取该子类型数据，避免硬编码',
      '「建议行动」区块链接回 T05 行动指南对应步骤',
      '「相关阅读」暂链 #，待 T08 博客完成后替换',
      '优先做误诊、用药（认知需求高，且用药可与 dangerous-drugs 联动）',
      '更新 categories.ts 中对应 href',
      '验收两个子页路由',
    ],
    [
      '误诊、用药两个子页可访问',
      '结构一致，无律师模块',
      '底部可回到主 Hub 和行动指南',
    ]
  )
)

// T08
children.push(
  ...taskBlock(
    'T08',
    '博客新增医疗分类 + 4 篇文章',
    'P2',
    { difficulty: '★★☆', hours: '2 天', risk: '中' },
    [
      'app/constants/blog.ts',
      '新建 app/pages/blog/[slug].vue（若尚无文章详情页）',
      'app/types/blog.ts（扩展 body 字段）',
    ],
    [
      '在 blog.ts 新增医疗分类 medical-malpractice',
      '新增 4 篇文章数据：并发症 vs 事故、如何整理就医时间线、第二诊疗意见指南、知情同意要点',
      '每篇含 slug、title、summary、readMinutes、tag、body（Markdown 或 HTML 字符串）',
      '若无 [slug].vue，新建文章详情页渲染 body',
      '在 /blog 首页增加医疗分类筛选入口',
      '将主 Hub learnLeft/learnRight 中 2–4 条链接指向真实文章',
    ],
    [
      '医疗分类在博客页可见',
      '至少 4 篇文章可点击阅读',
      '文章标题无「如何起诉」类表述',
    ]
  )
)

// T09-T15 abbreviated but still detailed
children.push(
  ...taskBlock(
    'T09',
    '补齐剩余 4 个子专题页',
    'P2',
    { difficulty: '★★☆', hours: '2 天', risk: '低' },
    [
      'birth-injury.vue / surgical-errors.vue / anesthesia-errors.vue / dental-malpractice.vue',
      'app/constants/medical/categories.ts',
    ],
    [
      '按 T07 同一模板批量创建 4 个子页',
      'surgical-errors 为新增类型（原无独立页）',
      '数据全部从 categories.ts 读取',
      '每页底部统一「回到主指南」组件',
      '更新导航占位链接（若有）',
    ],
    ['6 个子专题页全部可访问', '结构统一', 'categories 中 6 个 href 均已生效']
  )
)

children.push(
  ...taskBlock(
    'T10',
    '关联页医疗化（脑损伤/脊髓/用药）',
    'P2',
    { difficulty: '★★☆', hours: '1.5 天', risk: '中' },
    [
      'app/pages/practice-areas/brain-injury.vue',
      'app/pages/practice-areas/spinal-cord-injury.vue',
      'app/pages/practice-areas/dangerous-drugs/*.vue',
    ],
    [
      '脑损伤页：医源性脑损伤段落保留，改为识别与康复导向，删除诉讼三要素',
      '脊髓损伤页：手术/麻醉相关段落改为康复指南语气',
      '危险药品页：标题改为「用药安全与不良反应识别」，弱化 collective litigation',
      '各页 CTA 改链到医疗主 Hub 或行动指南，而非律师表单',
      '保留页面布局，仅改文案与模块取舍',
    ],
    ['三处关联页 CTA 指向医疗指南', '无判赔轮播主导叙事', '医学内容准确可读']
  )
)

children.push(new Paragraph({ children: [new PageBreak()] }))

children.push(
  ...taskBlock(
    'T11',
    '博客补至 8–12 篇 + 打通 LearnMore 链接',
    'P2',
    { difficulty: '★★☆', hours: '2 天', risk: '低' },
    ['app/constants/blog.ts', 'medical-malpractice.vue 中 learnLeft/learnRight'],
    [
      '按选题表补全文章至 8–12 篇（见附录）',
      '将主 Hub 与 6 个子页的「相关阅读」全部指向真实 slug',
      '清理 #blog 占位链接',
      '检查博客列表页医疗分类下文章数量与排序',
    ],
    ['占位链接清零', '医疗类文章 ≥ 8 篇', '主 Hub LearnMore 全部可点通']
  )
)

children.push(
  ...taskBlock(
    'T12',
    '导航精简为医疗主轴',
    'P3',
    { difficulty: '★★★', hours: '1 天', risk: '高' },
    ['app/components/AppHeader.vue', 'app/components/practice-areas/PracticeAreaViewAll.vue'],
    [
      '打开 AppHeader.vue，重组 practiceAreas 导航数组',
      '一级入口：医疗事故指南（含总览、行动指南、6 子类型）',
      '二级：相关健康主题（用药安全、脑损伤康复、脊髓康复）',
      '非医疗案件类型收到「更多」或暂时 hidden',
      'PracticeAreaViewAll 中清理 #practice 占位，或改为医疗专题列表',
      '全站点击导航验收所有链接',
    ],
    ['首屏导航以医疗为主', '≤2 次点击可达任意子专题', '无大量死链']
  )
)

children.push(
  ...taskBlock(
    'T13',
    '首页改为医疗事故主题',
    'P3',
    { difficulty: '★★★', hours: '1.5 天', risk: '高' },
    [
      'app/pages/index.vue',
      'app/components/home/HomeHero.vue',
      'HomeIntroBigWins.vue / HomeWaysFaces.vue / HomeHowWorks.vue / HomeInsights.vue',
    ],
    [
      'HomeHero：改为医疗事故主题主视觉与导语',
      'HomeIntroBigWins：改为「常见医疗问题类型」或删除',
      'HomeWaysFaces：改为 6 大子类型入口',
      'HomeHowWorks：改为「5 步行动指南」摘要，链到 T05',
      'HomeInsights：改为医疗博客精选（来自 blog.ts）',
      '首页预览：首屏无车祸/判赔主导内容',
    ],
    ['首页首屏为医疗主题', '6 子类型可从首页进入', '无律师团队展示']
  )
)

children.push(
  ...taskBlock(
    'T14',
    'CTA 改造（SiteLeadFeeSection）',
    'P3',
    { difficulty: '★★★', hours: '1 天', risk: '中' },
    ['app/components/SiteLeadFeeSection.vue', '各页面引用处'],
    [
      '将表单字段从「案件类型」改为「关注主题」或「订阅科普」',
      '主按钮文案：「查看完整行动指南」或「获取清单」',
      '弱化/移除 Free case evaluation、The Fee Is Free',
      '评估各页面是否仍需底部表单；医疗页可改为纯按钮导流',
      '全站预览 CTA 一致性',
    ],
    ['医疗相关页无「免费咨询律师」主导 CTA', 'CTA 动作为内容导流或留资（非案件）']
  )
)

children.push(
  ...taskBlock(
    'T15',
    'SEO 元信息 + 占位链接清零',
    'P3',
    { difficulty: '★★☆', hours: '0.5 天', risk: '低' },
    ['nuxt.config.ts', '全站 grep #blog #practice #guide'],
    [
      '修改 nuxt.config.ts 默认 title/description 为医疗患者指南',
      '全站搜索 #blog、#practice、#guide 占位 href 并替换或删除',
      '检查各页 useHead 是否与患者向定位一致',
      '运行 npm run build 确认构建通过',
    ],
    ['构建成功', '无关键占位链接', '站点级 SEO 已更新']
  )
)

children.push(new Paragraph({ children: [new PageBreak()] }))

// ========== 四、实施流程 ==========
children.push(h1('四、推荐实施流程（分步操作手册）'))
children.push(h2('4.1 开发环境准备'))
children.push(numbered('确认 Node.js 已安装，在项目根目录执行 npm install'))
children.push(numbered('执行 npm run dev，默认访问 http://localhost:3000'))
children.push(numbered('主要改动目录：app/constants/medical/、app/pages/practice-areas/、app/components/'))
children.push(numbered('每完成一个任务：保存 → 浏览器刷新验收 → git commit（可选）'))

children.push(h2('4.2 标准单任务工作流'))
children.push(
  simpleTable(
    ['步骤', '操作', '产出'],
    [
      ['1. 读', '打开任务涉及的文件，理解现有结构', '明确改哪些块'],
      ['2. 抽', '新文案先写入 constants，页面只负责引用', '数据与展示分离'],
      ['3. 删', '先删律师/判赔模块，再换文案（减少干扰）', '页面骨架清爽'],
      ['4. 换', '替换 Hero、FAQ、卡片等数据源', '患者向内容上线'],
      ['5. 链', '补上 href、路由、LearnMore 链接', '页面可跳转'],
      ['6. 验', '对照任务验收标准逐条检查', '任务可关闭'],
    ],
    [1200, 5160, 3000]
  )
)

children.push(h2('4.3 第 1 周执行清单（建议）'))
children.push(bullet('Day 1 上午：T01 建 constants 骨架'))
children.push(bullet('Day 1 下午：T02 改 FAQ + T03 开始删律师模块'))
children.push(bullet('Day 2：T03 完成主 Hub 文案替换'))
children.push(bullet('Day 3：T04 卡片链接 + T05 行动指南页'))
children.push(bullet('Day 4：T06 主 Hub 串联 + T07 首批 2 个子专题'))
children.push(bullet('Day 5：验收第 1–2 批，修复问题后再进博客'))

children.push(h2('4.4 组件复用速查'))
children.push(
  simpleTable(
    ['组件', '路径', '整改用途', '是否保留'],
    [
      ['PracticeAreaHero', 'components/practice-areas/', '各页标题区', '保留'],
      ['PracticeAreaWaysHelp', '同上', '6 大类型入口', '保留，加链接'],
      ['PracticeAreaClaimCopy', '同上', '如何判断是否医疗事故', '保留，改文案'],
      ['PracticeAreaGuidePromo', '同上', '导流行动指南', '保留，改链接'],
      ['PracticeAreaFaq', '同上', '患者 FAQ', '保留，换数据'],
      ['PracticeAreaTakeaways', '同上', '权利常识摘要', '保留/扩展'],
      ['PracticeAreaTimeline', '同上', '5 步时间线', '行动指南页用'],
      ['PracticeAreaMeetLawyers', '同上', '律师展示', '删除'],
      ['PracticeAreaResultsCarousel', '同上', '判赔轮播', '删除'],
      ['PracticeAreaFight', '同上', '律所数据', '删除'],
      ['SiteLeadFeeSection', 'components/', '底部 CTA', 'T14 再改'],
    ],
    [2200, 2600, 2600, 1960]
  )
)

children.push(new Paragraph({ children: [new PageBreak()] }))

// ========== 五、附录 ==========
children.push(h1('五、附录'))
children.push(h2('5.1 博客首批选题（8–12 篇）'))
children.push(
  simpleTable(
    ['序号', '类型', '选题', '优先级'],
    [
      ['1', '认知', '医疗事故和医疗纠纷有什么区别？', 'P1'],
      ['2', '认知', '什么是「诊疗规范」？普通人怎么理解', 'P1'],
      ['3', '场景', '手术并发症：哪些属正常、哪些要警惕', 'P1'],
      ['4', '场景', '漏诊延误：什么情况下需要警惕', 'P1'],
      ['5', '行动', '如何整理一份完整的就医时间线', 'P1'],
      ['6', '行动', '第二诊疗意见：挂什么科、问什么问题', 'P1'],
      ['7', '用药', '处方药不良反应 vs 用药错误', 'P2'],
      ['8', '产科', '新生儿窒息、产伤：家属早期观察要点', 'P2'],
      ['9', '权利', '知情同意书签字前要看什么', 'P2'],
      ['10', '权利', '如何申请复印和封存病历', 'P2'],
      ['11', '康复', '医疗伤害后的康复资源从哪里找', 'P3'],
      ['12', '沟通', '如何与主治医生有效沟通病情', 'P3'],
    ],
    [600, 900, 5160, 2700]
  )
)

children.push(h2('5.2 新建文件清单（汇总）'))
children.push(bullet('app/constants/medical/index.ts'))
children.push(bullet('app/constants/medical/hub.ts'))
children.push(bullet('app/constants/medical/categories.ts'))
children.push(bullet('app/constants/medical/patient-guide.ts'))
children.push(bullet('app/constants/medical/rights-basics.ts'))
children.push(bullet('app/constants/medical/faq-patient.ts'))
children.push(bullet('app/constants/medical/tone.ts'))
children.push(bullet('app/pages/medical/what-to-do.vue（或嵌套路由）'))
children.push(bullet('app/pages/practice-areas/medical-malpractice/misdiagnosis.vue'))
children.push(bullet('app/pages/practice-areas/medical-malpractice/medication-errors.vue'))
children.push(bullet('app/pages/practice-areas/medical-malpractice/birth-injury.vue'))
children.push(bullet('app/pages/practice-areas/medical-malpractice/surgical-errors.vue'))
children.push(bullet('app/pages/practice-areas/medical-malpractice/anesthesia-errors.vue'))
children.push(bullet('app/pages/practice-areas/medical-malpractice/dental-malpractice.vue'))
children.push(bullet('app/pages/blog/[slug].vue（若尚不存在）'))

children.push(h2('5.3 风险与注意事项'))
children.push(bullet('一次改太多容易失控：严格按批次验收后再推进'))
children.push(bullet('优先「删模块 + 换数据」，不要先重做 CSS'))
children.push(bullet('科普内容需加免责声明：不构成医疗建议，请及时就医'))
children.push(bullet('律师相关内容不是零，但控制在总篇幅 15% 以内，且仅作概念区分'))
children.push(bullet('若最终面向中文用户，从 T01 起就用中文写 constants，避免二次翻译'))

children.push(h2('5.4 批次验收检查表'))
children.push(
  simpleTable(
    ['批次', '验收项', '通过标准'],
    [
      ['第 1 批', 'constants + 主 Hub', '无律师模块；FAQ 患者向；TS 无报错'],
      ['第 2 批', '行动指南 + 卡片', '5 步指南可访问；GuidePromo 可跳转'],
      ['第 3 批', '子专题 + 博客', '≥2 子页上线；≥4 篇文章可读'],
      ['第 4 批', '关联页 + 博客补全', '关联页 CTA 指向医疗指南；文章 ≥8 篇'],
      ['第 5 批', '导航 + 首页', '首屏医疗主题；导航 ≤2 跳子专题'],
      ['第 6 批', 'CTA + SEO', '无律师表单主导；build 通过；占位清零'],
    ],
    [1200, 3360, 4800]
  )
)

children.push(
  p('— 文档结束 —', { center: true, size: 20, color: '666666', after: 400 })
)

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
            style: {
              paragraph: {
                indent: { left: 720, hanging: 360 },
              },
            },
          },
        ],
      },
    ],
  },
  styles: {
    default: {
      document: {
        run: { font: FONT, size: 22 },
      },
    },
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children,
    },
  ],
})

async function main() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })
  const buffer = await Packer.toBuffer(doc)
  fs.writeFileSync(OUT, buffer)
  console.log('已生成：' + OUT)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
