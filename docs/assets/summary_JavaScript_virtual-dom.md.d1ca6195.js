import{_ as a,o as i,c as l,a as t}from"./app.2e7f410a.js";const v=JSON.parse('{"title":"虚拟dom","description":"","frontmatter":{"title":"虚拟dom"},"headers":[{"level":2,"title":"什么是虚拟DOM","slug":"什么是虚拟dom","link":"#什么是虚拟dom","children":[]},{"level":2,"title":"Virtual DOM 的优点","slug":"virtual-dom-的优点","link":"#virtual-dom-的优点","children":[]},{"level":2,"title":"Virtual DOM 的缺点","slug":"virtual-dom-的缺点","link":"#virtual-dom-的缺点","children":[]},{"level":2,"title":"Virtual DOM 的要素","slug":"virtual-dom-的要素","link":"#virtual-dom-的要素","children":[]}],"relativePath":"summary/JavaScript/virtual-dom.md","lastUpdated":1679136122000}'),e={name:"summary/JavaScript/virtual-dom.md"},r=t('<h1 id="虚拟-dom" tabindex="-1">虚拟 DOM <a class="header-anchor" href="#虚拟-dom" aria-hidden="true">#</a></h1><h2 id="什么是虚拟dom" tabindex="-1">什么是虚拟DOM <a class="header-anchor" href="#什么是虚拟dom" aria-hidden="true">#</a></h2><p>Virtual DOM是对真实 DOM 的抽象,本质上是 JavaScript 对象,这个对象就是更加轻量级的对 DOM 的描述.</p><h2 id="virtual-dom-的优点" tabindex="-1">Virtual DOM 的优点 <a class="header-anchor" href="#virtual-dom-的优点" aria-hidden="true">#</a></h2><ul><li>可以减少操作 dom 的次数，不仅是因为操作 dom 相对较慢，更因为频繁变动DOM会造成浏览器的回流或者重绘，因此我们需要这一层抽象，在 patch 过程中尽可能地一次性将差异更新到 DOM 中,这样保证了 DOM 不会出现性能很差的情况。</li><li>现代框架都是数据驱动视图，要求无须操作dom</li><li>更好的跨平台，更好的实现SSR</li></ul><h2 id="virtual-dom-的缺点" tabindex="-1">Virtual DOM 的缺点 <a class="header-anchor" href="#virtual-dom-的缺点" aria-hidden="true">#</a></h2><ul><li>无法极致性能优化</li><li>初始化 dom 时，因为多了一层计算，会比正常的慢</li></ul><h2 id="virtual-dom-的要素" tabindex="-1">Virtual DOM 的要素 <a class="header-anchor" href="#virtual-dom-的要素" aria-hidden="true">#</a></h2><ul><li>Virtual DOM 创建</li><li>Virtual DOM Tree 创建</li><li>Virtual DOM 更新</li><li>Virtual DOM Diff 算法</li></ul>',9),d=[r];function o(u,n,h,m,s,c){return i(),l("div",null,d)}const D=a(e,[["render",o]]);export{v as __pageData,D as default};