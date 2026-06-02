/**
 * 站点模块说明与工作汇报 — Word 文档（手机可正常打开中文）
 * 运行：node scripts/generate-work-report-docx.cjs
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
} = require('docx')

const FONT = 'Microsoft YaHei'
const OUT = path.join(__dirname, '..', 'docs', '站点工作汇报.docx')

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
    spacing: { after: 120, line: 360 },
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

function bullet(text) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 80, line: 340 },
    children: [new TextRun({ text, font: FONT, size: 22 })],
  })
}

function quote(text) {
  return new Paragraph({
    spacing: { before: 120, after: 120, line: 360 },
    indent: { left: 360 },
    border: {
      left: { style: BorderStyle.SINGLE, size: 12, color: '0066CC', space: 8 },
    },
    children: [
      new TextRun({ text: '【汇报话术】', font: FONT, bold: true, size: 22, color: '0066CC' }),
      new TextRun({ text: ' ' + text, font: FONT, size: 22, italics: true }),
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
          new TextRun({ text, font: FONT, size: 20, bold: !!opts.header }),
        ],
      }),
    ],
  })
}

function simpleTable(headers, rows) {
  const colW = Math.floor(9000 / headers.length)
  return new Table({
    width: { size: 9000, type: WidthType.DXA },
    rows: [
      new TableRow({
        children: headers.map((h) => cell(h, { header: true, width: colW })),
      }),
      ...rows.map(
        (row) =>
          new TableRow({
            children: row.map((c) => cell(c, { width: colW })),
          }),
      ),
    ],
  })
}

const children = []

// ========== 封面 ==========
children.push(
  new Paragraph({ spacing: { before: 2400 } }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 },
    children: [
      new TextRun({
        text: '摩根与摩根官网',
        font: FONT,
        bold: true,
        size: 44,
        color: '1E2761',
      }),
    ],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 120 },
    children: [
      new TextRun({
        text: '站点模块说明与工作汇报手册',
        font: FONT,
        size: 32,
        color: '0066CC',
      }),
    ],
  }),
  p('文档用途：说明导航对应哪个页面、每个模块展示什么内容、用户浏览顺序，以及可直接口述的汇报话术。', {
    center: true,
    size: 20,
  }),
  p('技术栈：Nuxt 4 + Vue 3，页面路由在 app/pages/ 下按文件夹自动生成。', {
    center: true,
    size: 20,
  }),
  p('生成日期：2026年5月', { center: true, size: 20 }),
  new Paragraph({ spacing: { before: 600 } }),
)

// ========== 一、项目结构 ==========
children.push(h1('一、项目结构概览'))
children.push(
  p(
    '本项目为摩根与摩根律所官网的前端站点，采用 Nuxt 4 框架配合 Vue 3 组件化开发。页面路由由 app/pages/ 目录结构自动生成，一个 .vue 文件对应一个网址。文案与业务数据集中在 app/constants/ 统一管理，便于后续对接 CMS 或批量修改。各模块样式独立存放在 app/assets/css/，静态图片资源放在 public/images/。'
  )
)
children.push(h3('目录结构'))
children.push(bullet('app/pages/ — 页面路由（首页、关于、博客、业务领域、联系等）'))
children.push(bullet('app/components/ — 可复用页面区块（Home*、About*、Blog* 等）'))
children.push(bullet('app/constants/ — 文案与数据配置（FAQ 问答、客户故事、博客列表等）'))
children.push(bullet('app/composables/ — 可复用逻辑（滚动定位、导航高亮、博客滚动记忆）'))
children.push(bullet('public/ — 图片、图标、favicon 等静态资源'))
children.push(h3('全站共用元素'))
children.push(bullet('顶部导航栏 AppHeader.vue — 全站固定，含判决结果、办公地点、业务领域、关于、博客、联系'))
children.push(bullet('页脚 AppFooter.vue — 品牌介绍、链接分组、社交与应用商店入口'))
children.push(bullet('底部线索表单 SiteLeadFeeSection.vue — 多页复用，收集免费案件评估线索'))

// ========== 二、导航对应关系 ==========
children.push(h1('二、顶部导航栏与模块对应关系'))
children.push(
  simpleTable(
    ['导航菜单', '中文含义', '网址', '完成度'],
    [
      ['Logo 首页', '首页', '/', '完整'],
      ['Our Results', '判决结果', '/our-results', '完整'],
      ['Locations', '办公地点', '/locations', '完整'],
      ['Practice Areas', '业务领域', '/practice-areas/*', '部分完整'],
      ['About', '关于我们', '见下拉', '三项完整'],
      ['Blog', '博客', '/blog', '完整'],
      ['Contact', '联系我们', '/contact', '完整'],
      ['电话', '咨询热线', 'tel 拨号', '—'],
    ]
  )
)
children.push(new Paragraph({ spacing: { after: 200 } }))
children.push(h2('关于我们（About）下拉 — 当前配置'))
children.push(
  simpleTable(
    ['下拉项', '网址', '说明'],
    [
      ['The Case Process', '/about/the-case-process', '案件流程 — 本期重点'],
      ['Testimonials', '/about/testimonials', '客户评价 — 本期重点'],
      ['FAQ', '/about/faq', '常见问题 — 本期重点'],
    ]
  )
)
children.push(
  p(
    '说明：/about 及 careers、attorneys 等页面文件仍存在，但已不在顶部下拉展示，多为标题加一句描述的占位页，汇报时可称「预留扩展」。'
  )
)

// ========== 三、各模块详细说明 ==========
children.push(h1('三、各模块详细说明'))

// --- 模块1 首页 ---
children.push(h2('模块 1：首页 /'))
children.push(h3('导航入口'))
children.push(p('点击顶部 Logo 进入首页。'))
children.push(h3('用户浏览流程'))
children.push(bullet('首屏视频与免费评估'))
children.push(bullet('大额判决亮点'))
children.push(bullet('多种帮助方式 + 客户面孔'))
children.push(bullet('客户短评'))
children.push(bullet('「如何运作」四步骤'))
children.push(bullet('资源洞察卡片'))
children.push(bullet('底部线索表单'))
children.push(h3('各区块内容主题'))
children.push(bullet('首屏：全美最大人身伤害律所，强调免费案件评估，媒体露出 Logo，可播放视频'))
children.push(bullet('大额判决：突出律所规模与胜诉金额类社会证明'))
children.push(bullet('帮助方式：不同案件类型/服务方向的图标卡片'))
children.push(bullet('评价：简短客户引用，建立信任'))
children.push(bullet('如何运作：四步（联系→评估→委托→获赔），每步配图与跳转链接'))
children.push(bullet('资源洞察：人身伤害诉讼基础、案件价值、律所差异、被拒案件等科普卡片'))
children.push(bullet('底部表单：收集案件类型、联系方式等线索'))
children.push(h3('技术要点'))
children.push(
  p(
    '首页首屏为深色背景，AppHeader 在滚动前为透明样式，滚动超过 32px 后切换为实心白底。全站「See if you qualify」类按钮通过 useScrollToSection 与 anchor-scroll 插件平滑滚动至 id=contact 的表单区。'
  )
)
children.push(
  quote(
    '首页是整个站点的门面，负责给用户留下品牌第一印象。从上到下依次展示律所规模、大额判决、我们能帮什么、客户评价，以及四步办案流程。最终目标是把用户引导到免费案件评估表单，或者进一步进入案件流程、业务领域等深层页面。技术上是 Nuxt 文件路由加组件化区块拼装，首屏还有透明导航栏的滚动切换效果。'
  )
)

// --- 模块2 判决结果 ---
children.push(h2('模块 2：判决结果 /our-results'))
children.push(h3('导航入口'))
children.push(p('顶部菜单 Our Results。'))
children.push(h3('用户浏览流程'))
children.push(bullet('首屏：累计为客户追回金额（大数字）'))
children.push(bullet('按地点/类型的重大案件卡片网格'))
children.push(bullet('「探索更多」引导区'))
children.push(bullet('对抗大企业案例故事'))
children.push(bullet('我们能帮什么（车祸/滑倒/工伤入口）'))
children.push(bullet('底部线索表单'))
children.push(h3('内容主题'))
children.push(bullet('金额首屏：300 亿美元级别叙事，多张案件卡（深水地平线、集体诉讼等）'))
children.push(bullet('对抗大企业：超加工食品、李斯特菌、化工污染、火车脱轨等集体诉讼短讯'))
children.push(bullet('我们能帮什么：车祸、滑倒摔伤、工伤三类场景卡片，链到业务领域页'))
children.push(
  quote(
    '判决结果页的核心是用大额判决和社会证明说服用户「这家律所有能力打赢难案」。首屏用大数字建立信任，中间展示重大案件卡片和对抗大企业的案例故事，底部再引导用户进入具体业务领域或提交咨询表单。'
  )
)

// --- 模块3 办公地点 ---
children.push(h2('模块 3：办公地点 /locations'))
children.push(h3('导航入口'))
children.push(p('顶部菜单 Locations。'))
children.push(h3('用户浏览流程'))
children.push(bullet('首屏：附近办公室 + 城市/邮编搜索 + 本地办公室示例'))
children.push(bullet('无需到访：电子签约、上传材料、实时查案 +「开始索赔」'))
children.push(bullet('全国 140+ 办公室：美国地图 + 各州城市列表'))
children.push(bullet('流程科普：四张并排卡片（全部展示、居中，无轮播）'))
children.push(bullet('底部线索表单'))
children.push(h3('四张流程科普卡片'))
children.push(
  simpleTable(
    ['卡片标题', '讲什么'],
    [
      ['人身伤害诉讼基础', '什么是人身伤害诉讼、入门概念'],
      ['案件值多少钱', '赔偿可能包含哪些部分、如何理解案件价值'],
      ['摩根与摩根有何不同', '律所规模、资源、品牌差异'],
      ['哪些案件会被拒', '不符合代理条件时的常见原因'],
    ]
  )
)
children.push(h3('技术要点'))
children.push(
  p(
    'How It Works 四张插图从设计稿 WebP 解码至 public/images/locations/，页面由轮播改为 loc-how__grid 四列居中网格，四张卡片同时展示。插图解码脚本：scripts/decode-loc-how-basics-webp.py。'
  )
)
children.push(
  quote(
    '办公地点页强调全国覆盖和可远程办案。用户可以先搜索附近办公室，也可以了解不用亲自到访就能电子签约、上传材料。页面下半部分有四张并排的普法卡片，分别讲诉讼基础、案件价值、律所差异和被拒案件，与首页和案件流程页形成内容呼应。近期我们把原来轮播改成了四张图全部居中展示，插图也换成了设计稿资源。'
  )
)

// --- 模块4 案件流程 ---
children.push(h2('模块 4：案件流程 /about/the-case-process'))
children.push(h3('导航入口'))
children.push(p('关于 ▼ → The Case Process。'))
children.push(h3('用户浏览流程'))
children.push(bullet('首屏：标题图 + 引导文案 + 右侧流程主插图'))
children.push(bullet('受伤之后：三张主题卡（可点「了解更多」）'))
children.push(bullet('是否符合代理条件：四项手风琴'))
children.push(bullet('律师入门：律师费如何运作 + 案件价值图示'))
children.push(bullet('合作阶段：时间线、多久拿到钱、注意事项'))
children.push(bullet('文件与术语：文件清单图 + 术语表'))
children.push(bullet('扩展学习链接列表'))
children.push(bullet('底部线索表单'))
children.push(h3('各区块内容'))
children.push(bullet('受伤之后：① 事后行动清单 ② 诉讼基础 ③ 保险公司不愿告知的信息'))
children.push(bullet('是否符合条件：有没有损失、是否他人过错、保险是否够赔、不确定可联系'))
children.push(bullet('律师入门：如何选律师、律师费模式、为何有些案会被拒、律所差异'))
children.push(bullet('合作阶段：案件时间线、付款节奏、办案该做/不该做'))
children.push(bullet('文件与术语：需要准备什么材料；法律名词通俗解释（损害、过失、和解等）'))
children.push(h3('技术要点'))
children.push(
  p(
    '页面拆分为 CaseProcessHero、CaseProcessAfterInjury、CaseProcessQualify 等多个 Vue 组件；文案与术语数据在 app/constants/the-case-process.ts；样式独立为 the-case-process.css；右侧主插图为 AVIF 格式。'
  )
)
children.push(
  quote(
    '案件流程页面向刚受伤、不知道下一步的用户，完整讲清从出事到委托律师的知识路径。从上到下依次是受伤后该做什么、是否符合代理条件、律师费和选律师、合作阶段时间线，以及文件清单和法律术语表。这是本期交付的重点页面之一，按设计稿做了全分区布局和插图资源。'
  )
)

// --- 模块5 客户评价 ---
children.push(h2('模块 5：客户评价 /about/testimonials'))
children.push(h3('导航入口'))
children.push(p('关于 ▼ → Testimonials。'))
children.push(h3('用户浏览流程'))
children.push(bullet('首屏：客户成功故事 + 免责声明 + 联系/查看故事按钮'))
children.push(bullet('五星评价区：多条短评轮播'))
children.push(bullet('客户故事：大图/标准卡片案例'))
children.push(bullet('资源与洞察：探索链接 + 学习链接 + 精选博客'))
children.push(bullet('底部线索表单'))
children.push(h3('内容主题'))
children.push(bullet('首屏：15 万+ 五星评价、800+ 见证；结果因个案而异的免责声明'))
children.push(bullet('评价轮播：残疾申请、选律所、获得和解等真实口吻引用'))
children.push(bullet('客户故事：超市滑倒、车祸、飓风保险、工伤等叙事型案例'))
children.push(bullet('资源区：博客、案件流程、FAQ、媒体、判决结果；以及各业务领域入口'))
children.push(
  quote(
    '客户评价页用评价加长故事加资源导流建立信任。首屏强调 15 万五星评价的规模，同时有合规免责声明。中间是短评轮播和多个客户成功故事，底部资源区把用户导向博客、FAQ、案件流程和业务领域。这也是本期重点交付页面。'
  )
)

// --- 模块6 FAQ ---
children.push(h2('模块 6：常见问题 /about/faq'))
children.push(h3('导航入口'))
children.push(p('关于 ▼ → FAQ。'))
children.push(h3('页面结构'))
children.push(p('左侧三分类导航 + 右侧对应分类下的问答手风琴。'))
children.push(h3('交互说明'))
children.push(bullet('点击左侧分类 → 页面滚到对应区块，左侧高亮'))
children.push(bullet('用户滚动页面 → 左侧自动跟随高亮当前分类（scroll-spy）'))
children.push(bullet('点击问题展开答案；同时只展开一题，展开新题时上一题自动收起'))
children.push(h3('三分类与问题主题'))
children.push(
  simpleTable(
    ['分类', '问题数', '主要讲什么'],
    [
      ['聘请摩根与摩根', '8 问', '为何选我们、费用、律所历史、接案类型、谁办案等'],
      ['案件流程', '8 问', '时长、案件价值、沟通方式、签约后流程、赔款到账等'],
      ['我们能提供的帮助', '6 问', '车祸、集体诉讼、人身伤害、工伤、医疗事故等'],
    ]
  )
)
children.push(h3('技术要点'))
children.push(
  p(
    '22 条问答数据在 app/constants/about-faq.ts；交互逻辑在 composables/useAboutFaqSectionNav.ts，实现 IntersectionObserver 滚动监听与 openKey 手风琴单开状态管理；样式为 about-faq.css。'
  )
)
children.push(
  quote(
    'FAQ 页把高频疑虑按三个场景分类：聘请律所、案件流程、我们能帮什么，一共 22 个问题。左侧导航和右侧手风琴联动，滚动时自动高亮当前分类，手风琴同时只展开一题。目的是让用户自助查阅、降低咨询门槛。这是本期新开发的完整页面。'
  )
)

// --- 模块7 博客 ---
children.push(h2('模块 7：博客 /blog'))
children.push(h3('导航入口'))
children.push(p('顶部 Blog；页脚 About → Blog；旧地址 /about/blog 会跳转到 /blog。'))
children.push(h3('用户浏览流程'))
children.push(bullet('页头 LAW SCHOOL + 标语 + 社交链接'))
children.push(bullet('精选文章（一大两小）'))
children.push(bullet('申报指引三卡片（人身伤害/工伤/社安残疾）'))
children.push(bullet('最新案件（Depo-Provera、超加工食品、减肥药物等）'))
children.push(bullet('事故发生后（4 篇图文卡）'))
children.push(bullet('提前准备（列表链接）'))
children.push(bullet('新闻室（4 篇媒体报道风卡片）'))
children.push(bullet('邮件订阅区「我们为您撑腰」'))
children.push(bullet('最新文章列表 + 分类入口（如 /blog/accidents-and-incidents）'))
children.push(h3('技术要点'))
children.push(
  p(
    '博客首页组件 BlogHomePage.vue；分类归档 BlogCategoryArchive.vue；从子分类返回首页时通过 useBlogScrollCache 与 blog-scroll-restore.client.ts 插件记住滚动位置，避免回到顶部。'
  )
)
children.push(
  quote(
    '博客是内容营销枢纽，把流量导向案件流程、业务领域和热点案件页。首页按区块组织：精选文章、申报指引、最新集体诉讼、事故后怎么办、提前准备、新闻室等。申报指引里人身伤害卡片直接链到案件流程页。分类归档页已搭好列表结构，文章详情多数仍链到占位路由。'
  )
)

// --- 模块8 联系 ---
children.push(h2('模块 8：联系我们 /contact'))
children.push(h3('导航入口'))
children.push(p('顶部 Contact；多处「开始索赔」「免费评估」链到此页或页内 #contact 表单锚点。'))
children.push(h3('用户浏览流程'))
children.push(bullet('联系页首屏（标题 + 说明）'))
children.push(bullet('为何选择我们（价值点）'))
children.push(bullet('客户证言（带头像轮播）'))
children.push(bullet('咨询方式/常见问题式说明'))
children.push(bullet('底部线索表单（可指定案件类型）'))
children.push(h3('内容主题'))
children.push(bullet('7×24 联系、免费咨询、全国办公室'))
children.push(bullet('客户引用强化信任'))
children.push(bullet('最终目标：提交线索'))
children.push(
  quote(
    '联系页是全站转化的收口页面。展示为何选择我们、客户证言和咨询方式，最终引导用户填写线索表单。全站多个页面的底部都复用同一套 SiteLeadFeeSection 表单组件，Contact 页是专门的联系入口。'
  )
)

// --- 模块9 业务领域 ---
children.push(h2('模块 9：业务领域 /practice-areas/*'))
children.push(h3('导航入口'))
children.push(p('顶部 Practice Areas 下拉各子项；博客/评价/判决结果页内链入。'))
children.push(h3('典型单页流程（以车祸页为例）'))
children.push(bullet('业务领域首屏（面包屑 + 标题 + 导语）'))
children.push(bullet('律师团队轮播'))
children.push(bullet('要点摘要'))
children.push(bullet('我们如何帮助 +「是否有索赔」说明'))
children.push(bullet('客户评价'))
children.push(bullet('诉讼三要素'))
children.push(bullet('事故后 8 步时间线'))
children.push(bullet('律所差异说明'))
children.push(bullet('对抗保险公司数据'))
children.push(bullet('线索表单（预设案件类型）'))
children.push(bullet('常见事故类型 + 常见伤情'))
children.push(bullet('常见问题手风琴'))
children.push(h3('内容主题'))
children.push(bullet('首屏：该类事故/伤害的法律帮助定位'))
children.push(bullet('是否有案：过错、损害、证据等是否满足起诉条件'))
children.push(bullet('时间线：事故发生后应立即做什么'))
children.push(bullet('FAQ：该类案件专属高频问题'))
children.push(h3('完成度说明'))
children.push(
  p(
    '约十余个领域页内容较完整（车祸、滑倒、卡车、摩托、人身伤害、医疗事故、航空、脑损伤等）；下拉里更多项仍为 #practice 占位链接，未单独建站。'
  )
)
children.push(
  quote(
    '业务领域页是 SEO 加精准获客的主力。每个事故类型一套完整说服逻辑：首屏定位、律师团队、是否有案、事故后时间线、FAQ，最后导向带案件类型字段的免费咨询表单。目前已完成十余个完整页面，下拉菜单中其余项为预留占位。'
  )
)

// --- 模块10 业务领域总览 ---
children.push(h2('模块 10：业务领域总览 /practice-areas'))
children.push(p('导航入口：Practice Areas 下拉底部 View All。'))
children.push(p('内容：业务领域入口列表/导航聚合，引导进入各子领域页。'))
children.push(
  quote('业务领域总览页是所有 Practice Areas 的聚合入口，方便用户浏览全部可代理的案件类型。')
)

// --- 模块11 占位页 ---
children.push(h2('模块 11：关于我们占位页（未进顶部下拉）'))
children.push(
  p('以下页面仅有标题加一句描述，用于路由预留，汇报时统称「待开发占位」：')
)
children.push(bullet('/about — 关于律所总览'))
children.push(bullet('/about/who-we-are — 我们是谁'))
children.push(bullet('/about/attorneys — 律师团队'))
children.push(bullet('/about/careers 及子页 — 招聘'))
children.push(bullet('/about/referrals — 案件转介'))
children.push(bullet('/about/shop — 周边商店'))
children.push(bullet('/about/mobile-app — 手机应用'))
children.push(bullet('/about/product-recalls — 产品召回'))
children.push(bullet('/about/tv-commercials — 电视广告'))
children.push(bullet('/about/en-espanol — 西班牙语'))

// ========== 四、页脚补充 ==========
children.push(h1('四、页脚链接与模块关系'))
children.push(
  simpleTable(
    ['页脚项', '实际指向', '说明'],
    [
      ['Locations', '首页锚点 #locations', '非 /locations 页'],
      ['Our Results', '/our-results', '真实路由'],
      ['Blog', '/blog', '真实路由'],
      ['Testimonials', '首页锚点 #testimonials', '完整页在 /about/testimonials'],
      ['FAQ', '首页锚点 #faq', '完整页在 /about/faq'],
    ]
  )
)
children.push(
  p(
    '汇报建议说明：完整 FAQ 和评价页在关于下拉中；页脚部分为首页快捷锚点，后续可统一改为真实路由。'
  )
)

// ========== 五、模块关系 ==========
children.push(h1('五、模块内容导流关系'))
children.push(
  p(
    '首页向下分流到判决结果、办公地点、业务领域三大模块。办公地点的四张科普图与案件流程页内容呼应。关于模块（案件流程、客户评价、FAQ）与博客、评价页互链，最终都导向联系页或底部线索表单。'
  )
)

// ========== 六、近两周交付 ==========
children.push(h1('六、近两周交付重点'))
children.push(
  simpleTable(
    ['优先级', '模块', '交付内容'],
    [
      ['高', '案件流程', '全分区 + 设计稿插图 + 术语表 + 了解更多'],
      ['高', '客户评价', '首屏、评价轮播、客户故事、资源引导'],
      ['高', '常见问题', '三分类 22 问 + 左侧导航与手风琴联动'],
      ['高', '办公地点', '搜索/地图/州列表 + 四张流程科普图'],
      ['中', '博客', '首页多区块 + 分类归档 + 滚动记忆'],
      ['中', '关于导航', '下拉精简为三项'],
      ['基建', '全站', 'favicon、锚点滚动、路由别名、模块独立样式与插图'],
    ]
  )
)

// ========== 七、演示路径 ==========
children.push(h1('七、现场演示路径建议'))
children.push(bullet('首页 → 说明品牌与四步流程（30 秒）'))
children.push(bullet('关于 → 案件流程 → 受伤后 → 条件 → 合作（2 分钟）'))
children.push(bullet('关于 → 客户评价 → 评价 + 一个故事 + 资源区（1 分钟）'))
children.push(bullet('关于 → 常见问题 → 演示左侧切换 + 手风琴单开（1 分钟）'))
children.push(bullet('办公地点 → 四张科普图居中展示（30 秒）'))
children.push(bullet('博客 → 精选 + 申报指引链到案件流程（30 秒）'))
children.push(bullet('业务领域（任选一个）→ 说明与博客/表单的衔接（30 秒）'))

// ========== 八、全站技术基建汇总 ==========
children.push(h1('八、全站技术基建（汇报可一句带过）'))
children.push(bullet('Nuxt 4 文件路由：app/pages/ 自动生成 URL'))
children.push(bullet('组件化：每模块独立 Vue 组件 + constants 数据层'))
children.push(bullet('样式隔离：各模块独立 CSS 文件'))
children.push(bullet('锚点滚动：useScrollToSection + anchor-scroll.client.ts + router.options.ts（hash 滚动 offset 88px）'))
children.push(bullet('设计稿插图：Python 解码脚本输出至 public/images/'))
children.push(bullet('博客滚动记忆：useBlogScrollCache + blog-scroll-restore.client.ts'))
children.push(bullet('FAQ 交互：useAboutFaqSectionNav（scroll-spy + 手风琴单开）'))
children.push(bullet('favicon：public/favicon.svg + server/routes/favicon.ico.get.ts 兜底'))

children.push(new Paragraph({ spacing: { before: 400 } }))
children.push(
  p('— 文档依据当前仓库 app/pages、app/components、app/constants 与顶部导航配置生成 —', {
    center: true,
    size: 18,
    italic: true,
  })
)

const doc = new Document({
  creator: '开发团队',
  title: '站点模块说明与工作汇报手册',
  description: '摩根与摩根官网各模块说明与汇报话术',
  sections: [{ properties: {}, children }],
})

async function main() {
  const buf = await Packer.toBuffer(doc)
  fs.mkdirSync(path.dirname(OUT), { recursive: true })
  fs.writeFileSync(OUT, buf)
  console.log('已生成:', OUT)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
