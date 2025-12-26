# 图片资源说明

本目录包含演示文稿所需的所有图片和数据可视化资源。

## 已创建的SVG图表

### 1. labor-income-trend.svg
**劳动收入占GDP比重变化趋势图 (2014-2024)**
- 展示全球劳动收入占比从53.0%下降到52.4%的趋势
- 数据来源: ILO《世界就业和社会展望2025》
- 用于: 第一部分 - 问题界定

### 2. wage-comparison.svg
**美国平台工人时薪对比图**
- 对比平台工人实际时薪($5.12) vs 联邦最低工资($7.25) vs 生活工资($17.00)
- 数据来源: Human Rights Watch "The Gig Trap" (2025年5月)
- 用于: 第一部分 - 实证数据

### 3. capital-labor-polarization.svg
**资本积累与劳动者贫困的两极分化**
- 展示Uber、DoorDash等平台的巨额市值与工人贫困的对比
- 包含马克思《资本论》引用
- 用于: 第二部分 - 剩余价值理论

### 4. algorithm-control.svg
**算法控制机制示意图**
- 展示算法如何通过工作分配、绩效监控、工资计算、惩罚机制控制工人
- 用于: 第二部分 - 劳动异化理论

## 建议添加的照片资源

为了让演示更加生动，建议添加以下类型的图片（可从免费图片网站获取）:

### 推荐图片来源网站
- Unsplash (unsplash.com) - 高质量免费图片
- Pexels (pexels.com) - 免费商用图片
- Pixabay (pixabay.com) - 免费图片和视频

### 建议添加的图片类型

#### 1. 平台工作者照片 (workers/)
- `delivery-worker.jpg` - 外卖配送员骑车送餐的场景
- `uber-driver.jpg` - 网约车司机驾驶场景
- `warehouse-worker.jpg` - 仓库工人分拣包裹
- `gig-workers-protest.jpg` - 平台工人抗议示威

搜索关键词:
- "food delivery worker"
- "uber driver"
- "gig economy worker"
- "delivery person rain"
- "warehouse worker"

#### 2. 马克思主义相关 (theory/)
- `marx-portrait.jpg` - 马克思肖像
- `communist-manifesto.jpg` - 《共产党宣言》封面
- `capital-book.jpg` - 《资本论》书籍

搜索关键词:
- "Karl Marx portrait"
- "Communist Manifesto"
- "Das Kapital"

#### 3. 工人团结与组织 (solidarity/)
- `workers-union.jpg` - 工人集会
- `protest-march.jpg` - 工人游行
- `solidarity-fist.jpg` - 团结的拳头标志

搜索关键词:
- "labor union"
- "workers solidarity"
- "protest march"
- "raised fist solidarity"

#### 4. 技术与算法 (technology/)
- `algorithm-code.jpg` - 代码和算法
- `smartphone-apps.jpg` - 智能手机应用界面
- `surveillance.jpg` - 监控摄像头

搜索关键词:
- "algorithm code"
- "mobile app interface"
- "surveillance camera"
- "digital control"

#### 5. 社会不平等 (inequality/)
- `wealth-gap.jpg` - 贫富差距对比
- `homeless-city.jpg` - 城市中的无家可归者
- `luxury-poverty.jpg` - 奢华与贫困对比

搜索关键词:
- "wealth inequality"
- "poverty contrast"
- "social inequality"

## 图片使用规范

1. **文件命名**: 使用小写字母和连字符，描述性命名
2. **格式**: 优先使用 .jpg 用于照片，.svg 用于图标和图表
3. **大小**: 照片建议宽度1920px，控制在500KB以内
4. **版权**: 仅使用CC0或允许商用的免费图片

## 当前文件结构

```
src/images/
├── README.md                          # 本说明文件
├── labor-income-trend.svg             # 劳动收入趋势图
├── wage-comparison.svg                # 工资对比图
├── capital-labor-polarization.svg     # 两极分化图
├── algorithm-control.svg              # 算法控制图
└── [待添加照片]
```

## 未来扩展

可以考虑添加:
- 交互式图表 (使用Chart.js或D3.js)
- 动画效果 (CSS动画或JavaScript)
- 视频片段 (平台工人访谈)
