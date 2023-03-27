import{_ as e,o as a,c as l,a as s}from"./app.b1e773e0.js";const F=JSON.parse('{"title":"rel 属性","description":"","frontmatter":{"title":"rel 属性"},"headers":[{"level":2,"title":"preload","slug":"preload","link":"#preload","children":[]},{"level":2,"title":"prefetch","slug":"prefetch","link":"#prefetch","children":[]},{"level":2,"title":"preconnect","slug":"preconnect","link":"#preconnect","children":[]},{"level":2,"title":"dns-prefetch","slug":"dns-prefetch","link":"#dns-prefetch","children":[]},{"level":2,"title":"modulepreload","slug":"modulepreload","link":"#modulepreload","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"relativePath":"summary/browser/rel.md","lastUpdated":1679912014000}'),n={name:"summary/browser/rel.md"},r=s(`<h1 id="link-标签的-rel-属性" tabindex="-1">link 标签的 rel 属性 <a class="header-anchor" href="#link-标签的-rel-属性" aria-hidden="true">#</a></h1><h2 id="preload" tabindex="-1">preload <a class="header-anchor" href="#preload" aria-hidden="true">#</a></h2><p>指定用户代理必须根据 as 属性给出的潜在目的地（以及与相应目的地相关的优先级），为当前导航预先获取和缓存目标资源。</p><p>基本使用</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">preload</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">as</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">script</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="prefetch" tabindex="-1">prefetch <a class="header-anchor" href="#prefetch" aria-hidden="true">#</a></h2><p>指定用户代理应预先获取并缓存目标资源，因为后续的导航可能需要它。</p><h2 id="preconnect" tabindex="-1">preconnect <a class="header-anchor" href="#preconnect" aria-hidden="true">#</a></h2><p>向浏览器提供提示，建议它提前打开与链接网站的连接，而不透露任何私人信息或下载任何内容，以便在跟踪链接时能更快地获取链接内容。</p><h2 id="dns-prefetch" tabindex="-1">dns-prefetch <a class="header-anchor" href="#dns-prefetch" aria-hidden="true">#</a></h2><p>指定用户代理应预先获取并缓存目标资源，因为后续导航可能需要该资源。链接预取常见问题有关于哪些链接可以被预取以及替代方法的详细信息</p><h2 id="modulepreload" tabindex="-1">modulepreload <a class="header-anchor" href="#modulepreload" aria-hidden="true">#</a></h2><p>对于提高性能很有用，并且与文档中的 <link> 元素相关，设置 rel=&quot;modulepreload&quot; 告诉浏览器预先获取脚本（和依赖关系）并存储在文档的模块映射中，以便以后评估。 modulepreload 链接可以确保网络抓取时，模块映射中的模块已经准备好（但没有评估），然后才一定需要它。参见 modulepreload (en-US)。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-hidden="true">#</a></h2><ul><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/rel" target="_blank" rel="noreferrer">HTML 属性：rel</a></p></li><li><p><a href="https://juejin.cn/post/7128400578467594248" target="_blank" rel="noreferrer">性能优化之 preload、prefetch、preconnect 的区别与使用</a></p></li></ul>`,15),t=[r];function o(p,c,d,i,h,u){return a(),l("div",null,t)}const f=e(n,[["render",o]]);export{F as __pageData,f as default};
