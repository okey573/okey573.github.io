import{_ as e,c as t,o as a,a4 as o}from"./chunks/framework.CbHUKvme.js";const u=JSON.parse('{"title":"WebComponent","description":"","frontmatter":{"title":"WebComponent"},"headers":[],"relativePath":"summary/api/web-component.md","filePath":"summary/api/web-component.md","lastUpdated":1716363966000}'),n={name:"summary/api/web-component.md"},l=o('<h1 id="web-component" tabindex="-1">Web Component <a class="header-anchor" href="#web-component" aria-label="Permalink to &quot;Web Component&quot;">​</a></h1><p>Web Component是一组api，是一系列加入 w3c 的 HTML 和 DOM 的特性，使得开发者可以创建可复用的组件。由于 web components 是由 w3c 组织去推动的，因此它很有可能在不久的将来成为浏览器的一个标配。</p><h2 id="核心" tabindex="-1">核心 <a class="header-anchor" href="#核心" aria-label="Permalink to &quot;核心&quot;">​</a></h2><ul><li>Custom elements（自定义元素）：一组 JavaScript API，允许您定义 custom elements 及其行为，然后可以在您的用户界面中按照需要使用它们。</li><li>Shadow DOM（影子DOM）：一组 JavaScript API，用于将封装的 &quot;影子&quot; DOM 树 附加到元素（与主文档DOM分开呈现）并控制其关联的功能。通过这种方式，您可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。</li><li>HTML templates（HTML模板）：&lt; template &gt; 和 &lt; slot &gt; 元素使您可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。</li><li>HTML Imports（HTML导入）：一旦定义了自定义组件，最简单的重用它的方法就是使其定义细节保存在一个单独的文件中，然后使用导入机制将其导入到想要实际使用它的页面中。HTML 导入就是这样一种机制，尽管存在争议 — Mozilla 根本不同意这种方法，并打算在将来实现更合适的。</li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7045194698226401310" target="_blank" rel="noreferrer">脱离框架的组件化解决方案 - Web Component</a></li></ul>',6),r=[l];function i(s,m,p,c,_,d){return a(),t("div",null,r)}const b=e(n,[["render",i]]);export{u as __pageData,b as default};
