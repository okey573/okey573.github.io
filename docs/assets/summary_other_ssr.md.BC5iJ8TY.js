import{_ as t,c as s,o as a,a4 as r}from"./chunks/framework.CbHUKvme.js";const m=JSON.parse('{"title":"ssr","description":"","frontmatter":{"title":"ssr"},"headers":[],"relativePath":"summary/other/ssr.md","filePath":"summary/other/ssr.md","lastUpdated":1721305784000}'),e={name:"summary/other/ssr.md"},o=r('<h1 id="ssr" tabindex="-1">SSR <a class="header-anchor" href="#ssr" aria-label="Permalink to &quot;SSR&quot;">​</a></h1><h2 id="ssr-优点" tabindex="-1">SSR 优点 <a class="header-anchor" href="#ssr-优点" aria-label="Permalink to &quot;SSR 优点&quot;">​</a></h2><ul><li><p><strong>更快的首屏加载</strong>：这一点在慢网速或者运行缓慢的设备上尤为重要。服务端渲染的 HTML 无需等到所有的 JavaScript 都下载并执行完成之后才显示，所以你的用户将会更快地看到完整渲染的页面。除此之外，数据获取过程在首次访问时在服务端完成，相比于从客户端获取，可能有更快的数据库连接。这通常可以带来更高的核心 Web 指标评分、更好的用户体验，而对于那些“首屏加载速度与转化率直接相关”的应用来说，这点可能至关重要。</p></li><li><p><strong>统一的心智模型</strong>：你可以使用相同的语言以及相同的声明式、面向组件的心智模型来开发整个应用，而不需要在后端模板系统和前端框架之间来回切换。</p></li><li><p><strong>更好的 SEO</strong>：搜索引擎爬虫可以直接看到完全渲染的页面。</p></li><li><p><strong>减少 HTTP 请求数</strong></p></li></ul><h2 id="ssg" tabindex="-1">SSG <a class="header-anchor" href="#ssg" aria-label="Permalink to &quot;SSG&quot;">​</a></h2><p><strong>静态站点生成</strong> (Static-Site Generation，缩写为 SSG)，也被称为预渲染，是另一种流行的构建快速网站的技术。如果用服务端渲染一个页面所需的数据对每个用户来说都是相同的，那么我们可以只渲染一次，提前在构建过程中完成，而不是每次请求进来都重新渲染页面。预渲染的页面生成后作为静态 HTML 文件被服务器托管。</p><p>SSG 保留了和 SSR 应用相同的性能表现：它带来了优秀的首屏加载性能。同时，它比 SSR 应用的花销更小，也更容易部署，因为它输出的是静态 HTML 和资源文件。这里的关键词是静态：SSG 仅可以用于消费静态数据的页面，即数据在构建期间就是已知的，并且在多次部署期间不会改变。每当数据变化时，都需要重新部署。</p>',6),n=[o];function i(l,S,c,_,p,d){return a(),s("div",null,n)}const u=t(e,[["render",i]]);export{m as __pageData,u as default};
