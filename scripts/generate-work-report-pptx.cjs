/**
 * 近两周站点开发工作汇报 PPT（全中文）
 * 运行：node scripts/generate-work-report-pptx.js
 */
const pptxgen = require('pptxgenjs')
const path = require('path')

const C = {
  navy: '1E2761',
  ice: 'CADCFC',
  white: 'FFFFFF',
  charcoal: '2D3748',
  muted: '64748B',
  accent: '0066CC',
  sand: 'F5F7FA',
  gold: 'FFDE00',
}

const pres = new pptxgen()
pres.layout = 'LAYOUT_16x9'
pres.author = '开发团队'
pres.title = '近两周站点开发工作汇报'
pres.lang = 'zh-CN'

function addTitleSlide(title, subtitle) {
  const s = pres.addSlide()
  s.background = { color: C.navy }
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0,
    y: 4.6,
    w: 10,
    h: 1.02,
    fill: { color: C.accent, transparency: 15 },
  })
  s.addText(title, {
    x: 0.6,
    y: 1.4,
    w: 8.8,
    h: 1.2,
    fontFace: 'Microsoft YaHei',
    fontSize: 36,
    bold: true,
    color: C.white,
    margin: 0,
  })
  if (subtitle) {
    s.addText(subtitle, {
      x: 0.6,
      y: 2.75,
      w: 8.8,
      h: 0.8,
      fontFace: 'Microsoft YaHei',
      fontSize: 16,
      color: C.ice,
      margin: 0,
    })
  }
}

function addSectionSlide(title, tag) {
  const s = pres.addSlide()
  s.background = { color: C.sand }
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0,
    y: 0,
    w: 0.12,
    h: 5.625,
    fill: { color: C.accent },
  })
  s.addText(tag || '模块', {
    x: 0.55,
    y: 0.45,
    w: 3,
    h: 0.35,
    fontFace: 'Microsoft YaHei',
    fontSize: 11,
    color: C.accent,
    bold: true,
    margin: 0,
  })
  s.addText(title, {
    x: 0.55,
    y: 0.85,
    w: 9,
    h: 0.7,
    fontFace: 'Microsoft YaHei',
    fontSize: 28,
    bold: true,
    color: C.navy,
    margin: 0,
  })
}

function addContentSlide(title, blocks, techNote) {
  const s = pres.addSlide()
  s.background = { color: C.white }
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0,
    y: 0,
    w: 10,
    h: 0.85,
    fill: { color: C.navy },
  })
  s.addText(title, {
    x: 0.55,
    y: 0.22,
    w: 9,
    h: 0.5,
    fontFace: 'Microsoft YaHei',
    fontSize: 22,
    bold: true,
    color: C.white,
    margin: 0,
  })

  const lines = []
  for (const b of blocks) {
    if (b.heading) {
      lines.push({
        text: b.heading,
        options: { bold: true, fontSize: 14, color: C.navy, breakLine: true },
      })
    }
    for (const item of b.items || []) {
      lines.push({
        text: item,
        options: { bullet: true, fontSize: 12, color: C.charcoal, breakLine: true },
      })
    }
    lines.push({ text: '', options: { breakLine: true, fontSize: 6 } })
  }

  s.addText(lines, {
    x: 0.55,
    y: 1.05,
    w: techNote ? 5.6 : 9,
    h: techNote ? 4.2 : 4.4,
    fontFace: 'Microsoft YaHei',
    valign: 'top',
    margin: 0,
  })

  if (techNote) {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.35,
      y: 1.05,
      w: 3.35,
      h: 4.2,
      fill: { color: C.sand },
      rectRadius: 0.08,
      line: { color: C.ice, width: 1 },
    })
    s.addText('技术要点', {
      x: 6.55,
      y: 1.2,
      w: 3,
      h: 0.35,
      fontFace: 'Microsoft YaHei',
      fontSize: 13,
      bold: true,
      color: C.accent,
      margin: 0,
    })
    const techLines = techNote.map((t) => ({
      text: t,
      options: { bullet: true, fontSize: 11, color: C.muted, breakLine: true },
    }))
    s.addText(techLines, {
      x: 6.55,
      y: 1.6,
      w: 3,
      h: 3.5,
      fontFace: 'Microsoft YaHei',
      valign: 'top',
      margin: 0,
    })
  }
}

function addFlowSlide(title, steps) {
  const s = pres.addSlide()
  s.background = { color: C.white }
  s.addText(title, {
    x: 0.55,
    y: 0.35,
    w: 9,
    h: 0.55,
    fontFace: 'Microsoft YaHei',
    fontSize: 24,
    bold: true,
    color: C.navy,
    margin: 0,
  })

  const stepW = 9 / steps.length
  steps.forEach((step, i) => {
    const x = 0.55 + i * stepW
    s.addShape(pres.shapes.OVAL, {
      x: x + stepW / 2 - 0.22,
      y: 1.15,
      w: 0.44,
      h: 0.44,
      fill: { color: C.accent },
    })
    s.addText(String(i + 1), {
      x: x + stepW / 2 - 0.22,
      y: 1.15,
      w: 0.44,
      h: 0.44,
      fontFace: 'Microsoft YaHei',
      fontSize: 14,
      bold: true,
      color: C.white,
      align: 'center',
      valign: 'middle',
      margin: 0,
    })
    s.addText(step.title, {
      x: x + 0.05,
      y: 1.75,
      w: stepW - 0.1,
      h: 0.45,
      fontFace: 'Microsoft YaHei',
      fontSize: 11,
      bold: true,
      color: C.navy,
      align: 'center',
      margin: 0,
    })
    s.addText(step.desc, {
      x: x + 0.05,
      y: 2.2,
      w: stepW - 0.1,
      h: 2.8,
      fontFace: 'Microsoft YaHei',
      fontSize: 10,
      color: C.charcoal,
      align: 'center',
      valign: 'top',
      margin: 0,
    })
    if (i < steps.length - 1) {
      s.addShape(pres.shapes.LINE, {
        x: x + stepW - 0.05,
        y: 1.35,
        w: 0.15,
        h: 0,
        line: { color: C.ice, width: 2 },
      })
    }
  })
}

// —— 封面 ——
addTitleSlide('近两周站点开发工作汇报', '摩根与摩根 injury 律所官网 · 模块内容与流程汇总\n汇报周期：约两周')

// —— 总览 ——
addSectionSlide('本期工作总览', '概览')
addContentSlide(
  '本期完成的主要模块',
  [
    {
      heading: '关于我们（About）',
      items: [
        '导航精简为三项：案件流程、客户评价、常见问题',
        '案件流程页：完整落地设计稿分区与插图',
        '客户评价页：评价、故事、资源引导全流程',
        '常见问题页：三分类手风琴与左侧联动导航',
      ],
    },
    {
      heading: '内容与营销',
      items: [
        '博客首页：精选文章、申报指引、分类归档',
        '办公地点页：全国办公室、流程科普四卡片',
      ],
    },
    {
      heading: '体验与基建',
      items: [
        '站点图标与静态资源路径优化',
        '多处页面路由与样式独立维护',
      ],
    },
  ],
  ['基于 Nuxt 4 单页应用', '页面级路由 + 独立样式表', '设计图插图解码为本地图片资源'],
)

// —— About 导航 ——
addSectionSlide('关于我们 · 导航调整', '关于我们')
addContentSlide(
  '导航展示内容',
  [
    {
      heading: '下拉菜单仅保留三项',
      items: [
        '案件流程 → 进入完整案件指引页',
        '客户评价 → 进入评价与故事页',
        '常见问题 → 进入三分类问答页',
      ],
    },
    {
      heading: '调整目的',
      items: [
        '与设计稿及当前交付范围对齐',
        '减少未完成入口，聚焦已上线模块',
      ],
    },
  ],
  ['顶部「关于」下拉菜单配置', '旧入口页面文件已清理'],
)

// —— 案件流程 ——
addSectionSlide('案件流程页', '/about/the-case-process')
addFlowSlide('用户浏览流程', [
  { title: '首屏', desc: '标题图 + 右侧流程插图\n说明受伤后如何开始' },
  { title: '受伤之后', desc: '三张主题卡片：\n事后清单、诉讼基础、保险须知' },
  { title: '是否符合条件', desc: '四项资格说明 + 配图\n引导用户自评是否有案' },
  { title: '律师入门', desc: '律师费如何运作\n案件价值评估图示' },
  { title: '合作阶段', desc: '时间线、付款方式、注意事项卡片' },
  { title: '文件与术语', desc: '文件清单插图 + 术语表\n可展开「了解更多」链接列表' },
])
addContentSlide(
  '页面分区展示内容',
  [
    {
      heading: '首屏区域',
      items: [
        '主标题图片与引导文案',
        '右侧案件流程主插图（设计稿还原）',
        '面包屑：首页 → 案件流程',
      ],
    },
    {
      heading: '受伤之后',
      items: [
        '事后行动清单（配图）',
        '人身伤害诉讼基础（配图）',
        '保险公司不愿告知的事（配图）',
        '每张卡片可点「了解更多」',
      ],
    },
    {
      heading: '是否符合代理条件',
      items: [
        '是否存在损害、是否有过错、是否在时效内、是否有保险',
        '手风琴展开详细说明',
      ],
    },
    {
      heading: '与律师合作',
      items: [
        '案件价值、律师费、时间线、该做与不该做等主题卡片',
        '底部统一线索表单区块',
      ],
    },
    {
      heading: '文件准备与术语',
      items: [
        '文件清单示意图',
        '术语表（图标 + 标题 + 释义）',
        '展开后显示相关学习链接分组',
      ],
    },
  ],
  [
    '插图由设计稿解码为 avif/webp/png',
    '「了解更多」通过页面内锚点展开链接区',
    '数据集中在常量文件，便于改文案',
  ],
)

// —— 客户评价 ——
addSectionSlide('客户评价页', '/about/testimonials')
addFlowSlide('页面内容流程', [
  { title: '首屏', desc: '主标题 + 免责声明\n两个按钮：联系 / 查看故事' },
  { title: '五星评价', desc: '多条客户短评轮播\n署名与年份' },
  { title: '客户故事', desc: '大图 + 标准卡片故事\n真实案例叙述' },
  { title: '资源引导', desc: '探索 / 学习链接\n精选博客推荐' },
  { title: '联系表单', desc: '底部线索收集\n与全站统一' },
])
addContentSlide(
  '各区块展示内容',
  [
    {
      heading: '首屏',
      items: [
        '标题：Client success stories…（中文汇报可用「客户成功故事」）',
        '说明：15 万+ 五星评价、800+ 客户见证',
        '主按钮跳转联系区，次按钮跳转故事区',
      ],
    },
    {
      heading: '评价轮播',
      items: [
        '多条 1～2 句客户引用',
        '作者名 + 年份',
        '免责声明小字',
      ],
    },
    {
      heading: '客户故事',
      items: [
        'Antonia、Alysia、James 等案例标题与正文',
        '大图版 / 标准版两种卡片样式',
        '配图 +「阅读更多」',
      ],
    },
    {
      heading: '资源与洞察',
      items: [
        '「让我们帮您开始」引导文案',
        '探索：博客、案件流程、常见问题、媒体报道、判决结果',
        '学习：车祸、人身伤害、滑倒摔伤、卡车事故等业务入口',
        '精选博客：当周召回类文章摘要 + 了解更多',
      ],
    },
  ],
  ['独立页面路由与样式表', '评价/故事数据可配置扩展', '底部复用全站线索表单'],
)

// —— FAQ ——
addSectionSlide('常见问题页', '/about/faq')
addContentSlide(
  '页面布局与交互',
  [
    {
      heading: '左侧导航（三分类）',
      items: [
        '聘请摩根与摩根',
        '案件流程',
        '我们能提供的帮助',
        '点击或滚动时高亮当前分类，并滚动到对应区块',
      ],
    },
    {
      heading: '右侧问答手风琴',
      items: [
        '每个分类下有独立标题与问题列表',
        '点击「+」展开答案，同一时间仅展开一题',
        '再点其他问题会自动收起上一题',
      ],
    },
  ],
  [
    '滚动监听同步左侧高亮',
    '三分类共 22 道问答，文案在常量文件',
    '浅灰背景 + 白卡片，对齐设计稿',
  ],
)
addContentSlide(
  '三分类问题一览',
  [
    {
      heading: '聘请摩根与摩根（8 问）',
      items: [
        '为何选择我们、费用、律所故事、接案类型',
        '谁负责案件、不确定是否有案、是否需要律师、与其他律所差异',
      ],
    },
    {
      heading: '案件流程（8 问）',
      items: [
        '时长、案件价值、沟通方式、是否有案',
        '签约后流程、委托协议、结案时间、赔款到账',
      ],
    },
    {
      heading: '我们能提供的帮助（6 问）',
      items: [
        '车祸、集体诉讼、人身伤害律师',
        '工伤赔偿、医疗事故、其他案件类型',
      ],
    },
  ],
  null,
)

// —— 博客 ——
addSectionSlide('博客', '/blog')
addContentSlide(
  '博客首页展示内容',
  [
    {
      heading: '顶部社交与品牌',
      items: [
        '关注我们：脸书、X、领英、邮件',
        '「我们为您撑腰」品牌插图',
      ],
    },
    {
      heading: '精选文章',
      items: [
        '律所起源故事（主推大卡）',
        '夏季活动安全、超加工食品诉讼等文章',
        '阅读时长、分类标签、配图',
      ],
    },
    {
      heading: '申报指引三卡片',
      items: [
        '人身伤害案件流程 → 链到案件流程页',
        '工伤赔偿指引',
        '社会安全残疾申请指引',
      ],
    },
    {
      heading: '最新案件与分类',
      items: [
        '德波孕酮、超加工食品等热点案件卡片',
        '按主题分类入口（事故与事件等归档页）',
        '最新文章列表与「查看全部」',
      ],
    },
  ],
  [
    '从子分类页返回首页可恢复滚动位置',
    '旧路径重定向到新博客地址',
    '分类归档页独立路由',
  ],
)

// —— 办公地点 ——
addSectionSlide('办公地点页', '/locations')
addContentSlide(
  '页面分区内容',
  [
    {
      heading: '首屏',
      items: [
        '标题：我们附近有办公室',
        '城市/州/邮编搜索框',
        '本地办公室卡片（示例：洛杉矶）地址与电话',
      ],
    },
    {
      heading: '无需到访办公室',
      items: [
        '电子签约、上传文件、实时查看案件进度',
        '「开始您的索赔」链到联系页',
      ],
    },
    {
      heading: '全国 140+ 办公室',
      items: [
        '美国地图示意',
        '按州分列城市链接列表',
      ],
    },
    {
      heading: '流程科普（四卡片）',
      items: [
        '人身伤害诉讼基础（设计稿插图）',
        '案件值多少钱（设计稿插图）',
        '摩根与摩根有何不同（设计稿插图）',
        '哪些案件会被拒（灰色样式插图）',
        '四张并排居中展示，无轮播圆点',
      ],
    },
  ],
  [
    '四张插图由设计稿 webp 解码入库',
    '由横向轮播改为网格全展示',
    '底部统一线索表单',
  ],
)

// —— 其他 ——
addSectionSlide('其他优化与基建', '基建')
addContentSlide(
  '非页面模块的改进',
  [
    {
      heading: '站点图标',
      items: [
        '补充站点图标与矢量备用图',
        '避免浏览器请求图标时报错',
      ],
    },
    {
      heading: '路由与配置',
      items: [
        '博客、判决结果、办公地点等别名路由',
        '关于博客旧地址跳转到新博客首页',
      ],
    },
    {
      heading: '工程规范',
      items: [
        '各模块独立样式文件，避免样式互相污染',
        '设计图插图统一放在公共资源目录',
        '解码脚本便于后续替换设计稿资源',
      ],
    },
  ],
  null,
)

// —— 总结 ——
const end = pres.addSlide()
end.background = { color: C.navy }
end.addText('总结与后续', {
  x: 0.6,
  y: 0.5,
  w: 8.8,
  h: 0.6,
  fontFace: 'Microsoft YaHei',
  fontSize: 28,
  bold: true,
  color: C.white,
  margin: 0,
})
const summary = [
  { text: '本期完成 About 三大核心页 + 博客 + 办公地点流程科普，内容与设计稿对齐', options: { bullet: true, fontSize: 14, color: C.ice, breakLine: true } },
  { text: '各模块以「用户看到什么」为主：分区文案、插图、问答、故事、链接', options: { bullet: true, fontSize: 14, color: C.ice, breakLine: true } },
  { text: '技术侧：独立路由与样式、本地插图、滚动/手风琴等轻量交互', options: { bullet: true, fontSize: 14, color: C.ice, breakLine: true } },
  { text: '后续可继续：业务领域页细化、博客文章详情、办公地点搜索联调', options: { bullet: true, fontSize: 14, color: C.gold, breakLine: true } },
]
end.addText(summary, {
  x: 0.6,
  y: 1.35,
  w: 8.8,
  h: 3.5,
  fontFace: 'Microsoft YaHei',
  valign: 'top',
  margin: 0,
})
end.addText('谢谢', {
  x: 0.6,
  y: 4.85,
  w: 8.8,
  h: 0.5,
  fontFace: 'Microsoft YaHei',
  fontSize: 18,
  color: C.ice,
  align: 'right',
  margin: 0,
})

const out = path.join(__dirname, '..', 'docs', '近两周站点开发工作汇报.pptx')
pres.writeFile({ fileName: out }).then(() => {
  console.log('已生成：' + out)
})
