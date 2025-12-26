// Reveal.js 配置和初始化

// 演讲者备注数据
const speakerNotes = {
    0: "开场:介绍主题,强调这是基于最新数据的马克思主义分析 (30秒)",
    2: "第一部分开始:问题界定 (3分钟总计)",
    3: "核心问题:强调算法和平台如何加剧矛盾 (1分钟)",
    4: "全球数据:重点是劳动收入占比下降和美国工人困境 (1分钟)",
    5: "中国数据:2亿+灵活就业,但保障严重不足 (1分钟)",
    7: "第二部分:马克思主义理论分析 (6分钟总计)",
    8: "四重异化:系统讲解,强调算法控制的新特点 (1.5分钟)",
    9: "算法控制:具体机制,与传统雇佣对比 (1分钟)",
    10: "剩余价值:平台的榨取方式,用Uber数据说明 (1.5分钟)",
    11: "两极分化:资本积累vs工人贫困,引用《资本论》 (1分钟)",
    12: "阶级固化:三重锁定机制,恶性循环 (1分钟)",
    14: "第三部分:解决方案 (5分钟总计)",
    15: "短期改革:国际国内立法进展,四项核心要求 (1分钟)",
    16: "工人组织:数字工会、合作社、跨国团结 (1分钟)",
    17: "结构性变革:平台公有化和算法民主化 (1分钟)",
    18: "数字社会主义:长远愿景,技术解放人类 (1分钟)",
    19: "行动呼吁:面向不同群体,引用《共产党宣言》 (1分钟)",
    21: "结论:四点核心观点 (1分钟)",
    22: "参考文献:展示研究基础 (快速翻过)",
    23: "结束:Q&A"
};

// 初始化Reveal.js
Reveal.initialize({
    // 基本配置
    hash: true,
    center: false,
    slideNumber: 'c/t',
    showSlideNumber: 'all',
    transition: 'slide',

    // 插件
    plugins: [RevealNotes],

    // 尺寸设置
    width: 1280,
    height: 720,
    margin: 0.04,

    // 控制选项
    controls: true,
    progress: true,
    history: true,

    // 演讲配置
    autoSlide: 0,
    autoSlideStoppable: true,

    // 键盘导航
    keyboard: true,

    // 触摸导航
    touch: true,

    // 循环
    loop: false,

    // 右转左语言支持
    rtl: false,

    // 导航模式
    navigationMode: 'default',

    // 随机幻灯片顺序
    shuffle: false,

    // 片段
    fragments: true,

    // 嵌入模式
    embedded: false,

    // 帮助覆盖层
    help: true,

    // 暂停覆盖层
    pause: true,

    // 演讲者备注
    showNotes: false,

    // 自动动画
    autoAnimate: true,
    autoAnimateMatcher: null,
    autoAnimateEasing: 'ease',
    autoAnimateDuration: 1.0,
    autoAnimateUnmatched: true,

    // 自动播放嵌入媒体
    autoPlayMedia: null,

    // 预加载iframe
    preloadIframes: null,

    // 视图距离
    viewDistance: 3,

    // 移动视图距离
    mobileViewDistance: 2,

    // PDF导出
    pdfMaxPagesPerSlide: 1,
    pdfSeparateFragments: true,
    pdfPageHeightOffset: -1,
});

// 添加自定义事件监听
Reveal.on('ready', event => {
    console.log('演示文稿已准备就绪');

    // 可以在这里添加更多初始化逻辑
    initializeCustomFeatures();
});

Reveal.on('slidechanged', event => {
    const slideIndex = event.indexh;
    if (speakerNotes[slideIndex]) {
        console.log(`幻灯片 ${slideIndex}: ${speakerNotes[slideIndex]}`);
    }
});

// 自定义功能初始化
function initializeCustomFeatures() {
    // 添加图片懒加载
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });

    // 添加代码高亮（如果需要）
    // 可以在这里集成Prism.js或highlight.js

    // 添加数据可视化初始化
    initializeCharts();
}

// 图表初始化（如果使用Chart.js）
function initializeCharts() {
    // 检查是否有图表容器
    const chartContainers = document.querySelectorAll('.chart-canvas');

    if (chartContainers.length > 0 && typeof Chart !== 'undefined') {
        // 初始化各个图表
        chartContainers.forEach(container => {
            const chartType = container.dataset.chartType;
            const chartData = JSON.parse(container.dataset.chartData || '{}');

            // 创建图表
            createChart(container, chartType, chartData);
        });
    }
}

// 创建图表的辅助函数
function createChart(canvas, type, data) {
    // 这里可以添加具体的图表创建逻辑
    console.log(`创建${type}类型的图表`);
}

// 导出功能
window.RevealConfig = {
    speakerNotes,
    initializeCustomFeatures,
    initializeCharts,
    createChart
};
