import{_ as a,c as t,o as l,a4 as i}from"./chunks/framework.bPmW087-.js";const D=JSON.parse('{"title":"virtual dom","description":"","frontmatter":{"title":"virtual dom"},"headers":[],"relativePath":"summary/other/virtual-dom.md","filePath":"summary/other/virtual-dom.md","lastUpdated":1711331125000}'),r={name:"summary/other/virtual-dom.md"},e=i('<h1 id="virtual-dom" tabindex="-1">virtual DOM <a class="header-anchor" href="#virtual-dom" aria-label="Permalink to &quot;virtual DOM&quot;">​</a></h1><h2 id="什么是-virtual-dom" tabindex="-1">什么是 virtual DOM <a class="header-anchor" href="#什么是-virtual-dom" aria-label="Permalink to &quot;什么是 virtual DOM&quot;">​</a></h2><p>Virtual DOM是对真实 DOM 的抽象,本质上是 JavaScript 对象,这个对象就是更加轻量级的对 DOM 的描述.</p><h2 id="virtual-dom-的优点" tabindex="-1">Virtual DOM 的优点 <a class="header-anchor" href="#virtual-dom-的优点" aria-label="Permalink to &quot;Virtual DOM 的优点&quot;">​</a></h2><ul><li>可以减少操作 dom 的次数，不仅是因为操作 dom 相对较慢，更因为频繁变动DOM会造成浏览器的回流或者重绘，因此我们需要这一层抽象，在 patch 过程中尽可能地一次性将差异更新到 DOM 中,这样保证了 DOM 不会出现性能很差的情况。</li><li>现代框架都是数据驱动视图，要求无须操作dom</li><li>更好的跨平台，更好的实现SSR</li></ul><h2 id="virtual-dom-的缺点" tabindex="-1">Virtual DOM 的缺点 <a class="header-anchor" href="#virtual-dom-的缺点" aria-label="Permalink to &quot;Virtual DOM 的缺点&quot;">​</a></h2><ul><li>无法极致性能优化</li><li>初始化 dom 时，因为多了一层计算，会比正常的慢</li></ul><h2 id="virtual-dom-的要素" tabindex="-1">Virtual DOM 的要素 <a class="header-anchor" href="#virtual-dom-的要素" aria-label="Permalink to &quot;Virtual DOM 的要素&quot;">​</a></h2><ul><li>Virtual DOM 创建</li><li>Virtual DOM Tree 创建</li><li>Virtual DOM 更新</li><li>Virtual DOM Diff 算法</li></ul>',9),o=[e];function u(d,m,h,s,n,c){return l(),t("div",null,o)}const v=a(r,[["render",u]]);export{D as __pageData,v as default};
