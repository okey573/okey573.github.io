import{_ as e,c as o,o as l,a4 as c}from"./chunks/framework.CbHUKvme.js";const f=JSON.parse('{"title":"bfc","description":"","frontmatter":{"title":"bfc","lastUpdated":"Thu May 09 2024 16:31:39 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/css/bfc.md","filePath":"summary/css/bfc.md","lastUpdated":1716282783000}'),a={name:"summary/css/bfc.md"},d=c('<h1 id="bfc" tabindex="-1">BFC <a class="header-anchor" href="#bfc" aria-label="Permalink to &quot;BFC&quot;">​</a></h1><p><strong>区块格式化上下文</strong>（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。</p><h2 id="触发条件" tabindex="-1">触发条件 <a class="header-anchor" href="#触发条件" aria-label="Permalink to &quot;触发条件&quot;">​</a></h2><ul><li>文档的根元素（<code>&lt;html&gt;</code>）。</li><li>浮动元素（即 <code>float</code> 值不为 <code>none</code> 的元素）。</li><li>绝对定位元素（<code>position</code> 值为 <code>absolute</code> 或 <code>fixed</code> 的元素）。</li><li>行内块元素（<code>display</code> 值为 <code>inline-block</code> 的元素）。</li><li>表格单元格（<code>display</code> 值为 <code>table-cell</code>，HTML 表格单元格默认值）。</li><li>表格标题（<code>display</code> 值为 <code>table-caption</code>，HTML 表格标题默认值）。</li><li>匿名表格单元格元素（<code>display</code> 值为 <code>table</code>（HTML 表格默认值）、<code>table-row</code>（表格行默认值）、<code>table-row-group</code>（表格体默认值）、<code>table-header-group</code>（表格头部默认值）、<code>table-footer-group</code>（表格尾部默认值）或 <code>inline-table</code>）。</li><li><code>overflow</code> 值不为 <code>visible</code> 或 <code>clip</code> 的块级元素。</li><li><code>display</code> 值为 <code>flow-root</code> 的元素。</li><li><code>contain</code> 值为 <code>layout</code>、<code>content</code> 或 <code>paint</code> 的元素。</li><li>弹性元素（<code>display</code> 值为 <code>flex</code> 或 <code>inline-flex</code> 元素的直接子元素），如果它们本身既不是弹性、网格也不是表格容器。</li><li>网格元素（<code>display</code> 值为 <code>grid</code> 或 <code>inline-grid</code> 元素的直接子元素），如果它们本身既不是弹性、网格也不是表格容器。</li><li>多列容器（<code>column-count</code> 或 <code>column-width</code> 值不为 <code>auto</code>，且含有 <code>column-count: 1</code> 的元素）。</li><li><code>column-span</code> 值为 <code>all</code> 的元素始终会创建一个新的格式化上下文，即使该元素没有包裹在一个多列容器中</li></ul><h2 id="bfc-的作用" tabindex="-1">BFC 的作用 <a class="header-anchor" href="#bfc-的作用" aria-label="Permalink to &quot;BFC 的作用&quot;">​</a></h2><ul><li>包含内部浮动（解决高度坍塌）</li><li>排除外部浮动（阻止元素被浮动元素覆盖）</li><li>防止外边距重叠（解决margin重叠问题）</li></ul><h2 id="布局规则" tabindex="-1">布局规则 <a class="header-anchor" href="#布局规则" aria-label="Permalink to &quot;布局规则&quot;">​</a></h2><ul><li>内部的Box会在垂直方向，一个一个地布置。</li><li>Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的Margin会发生重叠，也就是外边距塌陷。</li><li>每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此。</li><li>BFC的区域不会与float box叠加。</li><li>BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。</li><li>计算BFC的高度时，浮动元素也参与计算。</li></ul><h2 id="ifc" tabindex="-1">IFC <a class="header-anchor" href="#ifc" aria-label="Permalink to &quot;IFC&quot;">​</a></h2><p>TODO</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_display/Block_formatting_context" target="_blank" rel="noreferrer">区块格式化上下文</a></p></li><li><p><a href="https://vue3js.cn/interview/css/BFC.html" target="_blank" rel="noreferrer">面试官：谈谈你对BFC的理解？</a></p></li><li><p><a href="https://zhuanlan.zhihu.com/p/25321647" target="_blank" rel="noreferrer">10 分钟理解 BFC 原理</a></p></li></ul>',12),i=[d];function t(r,n,s,h,p,u){return l(),o("div",null,i)}const m=e(a,[["render",t]]);export{f as __pageData,m as default};
