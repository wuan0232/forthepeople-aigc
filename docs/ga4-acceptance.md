# GA4 接入与验收

- 正式域名：https://accidentinjuryrecover.com/
- Measurement ID：`G-WXLT70ZM7P`
- 接入方式：Nuxt 公共布局 `app/layouts/default.vue` 调用 `useSiteAnalytics`，在浏览器 `<head>` 中插入一个异步 Google tag。
- 部署状态：仅完成本地代码配置，尚未部署；实际部署时间和时区待部署后记录（Asia/Shanghai，UTC+8）。

## 统计范围

覆盖使用默认公共布局的公开页面，包括首页、服务详情、About、Contact。首次访问和 Nuxt 页面切换各发送一次手动 `page_view`，携带当前 URL、标题和来源页面；同页锚点变化不产生新页面浏览。

整个 `/blog` 和 `/blog/**` 排除在新增接入之外，沿用其独立接入。直接访问博客不会加载本次新增标签；主站切换到博客时，本次接入不发送页面浏览，也不重新加载标签。已经在主站加载的脚本会保留在当前浏览器文档中。

若页面已有 Google tag、GTM 或 dataLayer `config` 命令，本次接入让位于已有系统，不新增第二个标签；此时须确认已有系统使用正确的 Measurement ID 并完成页面覆盖。

## 上线前必须确认

1. GA4 → 管理 → 数据流 → 本站网站数据流 → 增强型衡量 → 网页浏览 → 高级设置：关闭“基于浏览器历史记录事件的网页变化”自动页面浏览。代码使用 `send_page_view: false` 和手动上报；仅设置该参数不能关闭后台的历史记录自动上报。不要再添加另一套手动页面浏览触发器。
2. 本地仓库未发现 Cookie/Consent 组件。本次接入保留已有 dataLayer 和 gtag，不新增 consent 默认值或授予同意的命令。若生产环境通过平台注入 CMP，应先核实它的脚本阻止机制或 Consent Mode 默认设置与更新命令的顺序；未完成此检查不能声称生产同意流程已验证。
3. 本地仓库未发现 GTM 容器或现有博客 GA4 脚本；生产环境中的外部注入及博客独立接入尚未核实。

Google 官方说明：https://developers.google.com/analytics/devguides/collection/ga4/views

## 正式环境验收 URL

| 页面 | URL |
| --- | --- |
| 首页 | https://accidentinjuryrecover.com/ |
| 服务详情 | https://accidentinjuryrecover.com/practice-areas/car-accident |
| 普通页面 | https://accidentinjuryrecover.com/contact |
| About | https://accidentinjuryrecover.com/about |
| 排除验证 | https://accidentinjuryrecover.com/blog |

部署后使用 Tag Assistant 或浏览器 Network 核实：标签请求成功、仅出现本站 ID、刷新及路由切换各一个 page_view、路径和标题正确、无新增 JavaScript 错误。记录实际部署时间与时区，并附正式环境截图。

目前不能提供正式部署时间、正式环境 Network 截图或 GA4 后台验证结果；未获得部署入口及 GA4 后台访问权限。

## 本地验证结果

`npm run build` 和 `git diff --check` 通过。使用 Chrome 检查生产构建的首页、服务详情、Contact、About：每页 `<head>` 只有一个本站标签，`gtag.js` 请求均返回 HTTP 200，每页只有一条本次代码产生的 `page_view` 命令，页面标题和 URL 与实际页面一致，无浏览器 JavaScript 异常。站内首页 → 详情页切换复用标签且增加一条页面浏览命令；继续切换到博客不增加命令。直接访问博客不加载新增标签。

本地统计收集请求已拦截，避免污染正式数据，因此不代表 GA4 已接收数据或后台自动统计已关闭。证据位于 `.tmp/ga4-evidence/`：`results.json`、各页面截图和浏览器请求记录生成的 `network-report.png`（该报告截图不是 DevTools 截图）。
