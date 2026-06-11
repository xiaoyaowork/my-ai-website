window.SITE_CONTENT = {
  siteTitle: "一个文科生的AI学习之路",
  siteDescription:
    "记录学习、实践、失败与思考，让普通人看到进入AI领域也能成长，即使碰壁也没关系。",

  navigation: [
    {
      name: "成长档案",
      type: "timeline",
      anchor: "#timeline",
      description: "按时间顺序记录学习历程、实践尝试、成功与失败。自动按发布日期排序。",
      contentRules: {
        requiredFields: ["日期", "学习阶段/事件", "一行总结"],
        displayOrder: "时间轴，从旧到新",
        updateMethod: "每新增经历自动加入时间轴",
      },
    },
    {
      name: "学习笔记1111",
      type: "articleCollection",
      anchor: "#notes",
      description: "整理过的小红书笔记及实践总结，支持标签分类，便于查找与归纳。",
      contentRules: {
        requiredFields: ["标题", "正文", "标签"],
        tags: ["Prompt", "AI工具", "实践项目", "心得", "工作流", "其他"],
        canGrow: true,
      },
    },
    {
      name: "资源推荐",
      type: "recommendationCollection",
      anchor: "#resources",
      description: "经过自己亲测的书籍、课程、工具与其他资源。",
      contentRules: {
        requiredFields: ["名称", "适合人群", "推荐理由", "评分/星级", "使用建议"],
        canGrow: true,
      },
    },
    {
      name: "关于我",
      type: "staticPage",
      anchor: "#about",
      description: "介绍自己、网站定位、目标和初心。稳定更新。",
    },
  ],

  homepage: {
    hero: {
      eyebrow: "文科生 / 外行人 / 正在学习中",
      title: "一个文科生的AI学习之路",
      subtitle: "记录学习、实践、失败与思考，让你发现：学习AI并没有那么难。",
      ctaButtons: [
        { text: "查看成长档案", link: "#timeline" },
        { text: "从第一篇学习笔记开始", link: "#notes" },
      ],
    },
    currentLearning: {
      title: "我现在在学什么？",
      items: ["Prompt", "AI工作流"],
      currentChallenge: "Agent到底是什么？",
    },
    recentRecords: {
      title: "最新成长记录",
      displayRule: "展示最近3-5条时间轴记录",
    },
    quickLinks: {
      title: "如果你刚开始学习AI",
      intro:
        "不用一开始就懂所有概念。先从一个真实问题开始，记录问题、尝试和结果，成长会慢慢变得可见。",
      links: [
        { text: "资源推荐", link: "#resources" },
        { text: "学习笔记", link: "#notes" },
        { text: "成长档案", link: "#timeline" },
      ],
    },
  },

  timeline: [
    {
      date: "2026-06-01",
      title: "开始认真学习AI",
      summary: "第一次系统接触AI，觉得陌生，但决定先开始。",
    },
    {
      date: "2026-06-10",
      title: "搭建个人AI学习网站",
      summary: "把学习过程做成可持续更新的网站，开始留下自己的成长轨迹。",
    },
    {
      date: "2026-07-01",
      title: "第一次尝试Prompt",
      summary: "提问并不只是把需求丢给AI，而是一步步把问题说清楚。",
    },
  ],

  notes: [
    {
      title: "Prompt不是咒语，而是沟通",
      body:
        "我开始意识到，Prompt的重点不是背模板，而是把目标、背景、限制和期待结果讲清楚。越像和一个协作者沟通，结果越稳定。",
      tags: ["Prompt", "心得"],
    },
    {
      title: "囤课程不能替代真正动手",
      body:
        "买课会带来一种正在努力的错觉，但真正改变我的，是把一个小问题拆开，然后用AI陪我完成一个可见的小成果。",
      tags: ["心得", "实践项目"],
    },
    {
      title: "第一次理解AI工作流",
      body:
        "工作流不是把工具堆起来，而是把一个重复任务拆成稳定步骤：输入、处理、检查、输出。AI只是其中一个环节。",
      tags: ["工作流", "AI工具"],
    },
  ],

  resources: [
    {
      name: "AI入门文章清单",
      audience: "刚开始接触AI、害怕术语太多的人",
      reason: "比起厚重教材，短文章更容易帮我建立第一层概念。",
      rating: "4/5",
      advice: "先读能解决你当前问题的内容，不要试图一次性补完所有知识。",
    },
    {
      name: "Prompt练习模板",
      audience: "想练习提问、总结、改写和规划的人",
      reason: "它能让我从空白开始，逐步学会描述任务。",
      rating: "5/5",
      advice: "每次只改一个变量，观察AI回答的变化。",
    },
    {
      name: "AI工具体验表",
      audience: "想比较多个AI工具但容易眼花的人",
      reason: "把工具放到同一个任务里比较，比看宣传页更真实。",
      rating: "4/5",
      advice: "用同一个任务测试不同工具，再记录优点、缺点和适合场景。",
    },
  ],

  about: {
    sections: [
      {
        title: "我是谁？",
        content: "一个普通的AI学习者。",
      },
      {
        title: "为什么做这个网站？",
        content: "希望让更多普通人看到，学习AI并没有想象中那么难。",
      },
      {
        title: "希望带给别人什么？",
        content: "陪伴、勇气和启发。",
      },
    ],
  },

  contentStrategy: {
    coreGoal: "展示外行人成长历程，真实记录失败与成功，形成独立见解。",
    updateFlow: [
      "在小红书发布日记式随笔",
      "整理精选内容到网站学习笔记",
      "定期更新成长档案时间轴",
    ],
    scalability: [
      "标签和分类可以持续新增",
      "时间轴自动增长",
      "资源推荐模板固定，内容可持续增加",
    ],
  },
};
