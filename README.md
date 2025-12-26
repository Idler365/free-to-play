# 平台经济的劳动异化与阶级固化

> 算法资本主义时代的马克思主义批判分析

这是一个基于 [Reveal.js](https://revealjs.com/) 的演示文稿项目，深入探讨平台经济中的劳动异化、剩余价值榨取和阶级固化问题。

## 📋 项目概述

本项目从马克思主义政治经济学的视角，分析平台经济（零工经济）中算法控制、资本积累与工人困境的深层矛盾，并探讨改革路径与长远解决方案。

### 核心内容

- **问题界定**：全球平台经济现状、中国数据、技术演进历史
- **理论分析**：劳动异化四重表现、剩余价值榨取、阶级固化机制
- **解决方案**：国际立法进展、工人组织化、平台合作社、结构性变革

### 新增内容（v2.0）

- ✅ 平台经济技术演进时间线
- ✅ 4个SVG数据可视化图表
- ✅ 真实的平台工人案例故事
- ✅ 全球政策对比（欧洲/美国/中国）
- ✅ 工人抗争案例（英国、中国、美国等）
- ✅ 平台合作社替代模式
- ✅ 阶级固化的代际传递分析

## 🎨 特性

- 📊 **数据可视化**：包含4个自定义SVG图表
  - 劳动收入占比趋势图
  - 工资对比图
  - 资本积累vs劳动贫困对比图
  - 算法控制机制示意图

- 🎯 **模块化架构**：
  - CSS样式独立管理
  - JavaScript配置分离
  - 图片资源集中存放

- 📱 **响应式设计**：支持不同屏幕尺寸

- 🌐 **中文优化**：针对中文排版优化字体和间距

## 📂 项目结构

```
free-to-play/
├── index.html              # 主演示文件（旧版，已备份）
├── index-new.html          # 新版演示文件（扩充版）
├── package.json            # 项目配置
├── README.md               # 项目说明（本文件）
├── src/
│   ├── css/
│   │   └── style.css       # 自定义样式
│   ├── js/
│   │   └── main.js         # Reveal.js配置和自定义脚本
│   └── images/
│       ├── README.md       # 图片资源说明
│       ├── labor-income-trend.svg          # 劳动收入趋势图
│       ├── wage-comparison.svg             # 工资对比图
│       ├── capital-labor-polarization.svg  # 两极分化图
│       └── algorithm-control.svg           # 算法控制图
└── hello.py                # 示例Python文件
```

## 🚀 快速开始

### 方法1: 使用Python简易服务器

```bash
# 启动开发服务器
npm run dev

# 或直接使用Python
python3 -m http.server 8080
```

然后在浏览器中访问 `http://localhost:8080/index-new.html`

### 方法2: 直接打开

在浏览器中直接打开 `index-new.html` 文件（某些功能可能受限）

## 🎮 操作指南

### 基本导航

- **下一页**：→ / Space / N
- **上一页**：← / P
- **全屏**：F
- **概览模式**：Esc / O
- **演讲者备注**：S
- **暂停**：B / .

### 快捷功能

- **幻灯片编号**：显示在右下角（当前页/总页数）
- **进度条**：底部显示演示进度

## 📊 数据来源

- **ILO**《世界就业和社会展望2025》(2025年1月)
- **Human Rights Watch**《The Gig Trap》(2025年5月)
- 中国人社部《灵活就业人员权益保障》(2024)
- **Fairwork** Platform Economy Evaluation Reports (2024-2025)

## 🔧 自定义与扩展

### 修改样式

编辑 `src/css/style.css` 来自定义颜色、字体、布局等。

### 修改配置

编辑 `src/js/main.js` 来调整 Reveal.js 的行为，如过渡效果、自动播放等。

### 添加内容

直接编辑 `index-new.html`，按照 Reveal.js 的 `<section>` 结构添加新幻灯片。

### 添加图片

1. 将图片放入 `src/images/` 目录
2. 在 HTML 中使用 `<img src="src/images/your-image.jpg">`
3. 参考 `src/images/README.md` 了解建议的图片类型

## 📚 主要参考文献

### 经典理论
1. 马克思.《1844年经济学哲学手稿》
2. 马克思.《资本论》第一卷
3. 马克思、恩格斯.《共产党宣言》

### 现代研究
- Nick Srnicek. *Platform Capitalism* (2017)
- Antonio Aloisi & Valerio De Stefano. *Your Boss is an Algorithm* (2022)
- Jamie Woodcock & Mark Graham. *The Gig Economy: A Critical Introduction* (2020)

## 🤝 贡献

欢迎提出建议和改进！

## 📄 许可证

MIT License

## 👥 作者

第十七组 - 2025年12月

---

## 版本历史

### v2.0.0 (2025-12-26)
- ✨ 重构为模块化前端项目
- 📊 新增4个SVG数据可视化图表
- 📝 新增平台工人真实案例故事
- 🌍 新增全球政策对比章节
- 🔄 新增平台经济技术演进时间线
- 💪 新增工人抗争案例
- 🏢 新增平台合作社替代模式
- 📈 从18页扩充到30+页

### v1.0.0 (初始版本)
- 基础演示内容
- 单文件HTML结构

---

**让我们共同为工人阶级的解放而奋斗！**
