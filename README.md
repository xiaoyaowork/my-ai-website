# 一个文科生的AI学习之路

这是一个可以长期更新的静态个人网站。页面风格已经固定，日常只需要更新 `content.js`。

## 文件说明

- `index.html`：网站页面和样式，一般不用改。
- `content.js`：网站内容，以后主要更新这里。

## 本地预览

推荐用本地预览地址打开整个文件夹，或上传到 Netlify 后查看。上线时请上传整个 `ai-growth-site` 文件夹，不能只上传 `index.html`，因为页面还需要读取 `content.js`。

## 上线方式

推荐使用 Netlify：

1. 打开 Netlify，选择 Add new site。
2. 上传整个 `ai-growth-site` 文件夹。
3. 发布后会自动得到一个网址。

也可以使用 Vercel 或 GitHub Pages。这个网站是纯静态页面，不需要服务器、数据库或构建步骤。

## 更新成长档案

在 `content.js` 里找到 `timeline`，新增一段：

```js
{
  date: "2026-08-01",
  title: "新的学习阶段或事件",
  summary: "用一句话写清楚这次经历、卡点或收获。",
},
```

时间轴会自动按日期从旧到新排序，首页会自动展示最近 3-5 条记录。

## 更新学习笔记

在 `content.js` 里找到 `notes`，新增一段：

```js
{
  title: "笔记标题",
  body: "这里写整理后的正文或实践总结。",
  tags: ["Prompt", "心得"],
},
```

标签可以自己新增，例如：`Prompt`、`AI工具`、`实践项目`、`心得`、`工作流`、`其他`。

## 更新资源推荐

在 `content.js` 里找到 `resources`，新增一段：

```js
{
  name: "资源名称",
  audience: "适合什么人",
  reason: "为什么推荐",
  rating: "5/5",
  advice: "怎么使用更有效",
},
```

## 更新关于我

在 `content.js` 里找到 `about.sections`，修改或新增：

```js
{
  title: "新的小标题",
  content: "这里写介绍、初心或阶段性变化。",
},
```

## 更新网站定位

在 `content.js` 里可以修改：

- `siteTitle`：网站标题
- `siteDescription`：网站描述
- `homepage.currentLearning`：当前学习内容和卡点
- `contentStrategy`：内容目标、更新流程、可扩展性
