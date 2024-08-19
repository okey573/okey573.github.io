import{_ as a,c as e,o as i,a4 as s}from"./chunks/framework.CbHUKvme.js";const E=JSON.parse('{"title":"link","description":"","frontmatter":{"title":"link"},"headers":[],"relativePath":"summary/html/link.md","filePath":"summary/html/link.md","lastUpdated":1724051358000}'),t={name:"summary/html/link.md"},l=s(`<h1 id="link-标签" tabindex="-1">link 标签 <a class="header-anchor" href="#link-标签" aria-label="Permalink to &quot;link 标签&quot;">​</a></h1><h2 id="link-标签的-rel-属性" tabindex="-1">link 标签的 rel 属性 <a class="header-anchor" href="#link-标签的-rel-属性" aria-label="Permalink to &quot;link 标签的 rel 属性&quot;">​</a></h2><h4 id="preload" tabindex="-1">preload <a class="header-anchor" href="#preload" aria-label="Permalink to &quot;preload&quot;">​</a></h4><p>指定用户代理必须根据 as 属性给出的潜在目的地（以及与相应目的地相关的优先级），为当前导航预先获取和缓存目标资源。</p><p>基本使用</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;preload&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h4 id="prefetch" tabindex="-1">prefetch <a class="header-anchor" href="#prefetch" aria-label="Permalink to &quot;prefetch&quot;">​</a></h4><p>指定用户代理应预先获取并缓存目标资源，因为后续的导航可能需要它。</p><h4 id="preconnect" tabindex="-1">preconnect <a class="header-anchor" href="#preconnect" aria-label="Permalink to &quot;preconnect&quot;">​</a></h4><p>向浏览器提供提示，建议它提前打开与链接网站的连接，而不透露任何私人信息或下载任何内容，以便在跟踪链接时能更快地获取链接内容。</p><h4 id="dns-prefetch" tabindex="-1">dns-prefetch <a class="header-anchor" href="#dns-prefetch" aria-label="Permalink to &quot;dns-prefetch&quot;">​</a></h4><p>指定用户代理应预先获取并缓存目标资源，因为后续导航可能需要该资源。链接预取常见问题有关于哪些链接可以被预取以及替代方法的详细信息</p><h4 id="modulepreload" tabindex="-1">modulepreload <a class="header-anchor" href="#modulepreload" aria-label="Permalink to &quot;modulepreload&quot;">​</a></h4><p>对于提高性能很有用，并且与文档中的 <link> 元素相关，设置 rel=&quot;modulepreload&quot; 告诉浏览器预先获取脚本（和依赖关系）并存储在文档的模块映射中，以便以后评估。 modulepreload 链接可以确保网络抓取时，模块映射中的模块已经准备好（但没有评估），然后才一定需要它。参见 modulepreload (en-US)。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/rel" target="_blank" rel="noreferrer">HTML 属性：rel</a></p></li><li><p><a href="https://juejin.cn/post/7128400578467594248" target="_blank" rel="noreferrer">性能优化之 preload、prefetch、preconnect 的区别与使用</a></p></li></ul>`,16),r=[l];function n(h,p,o,d,k,c){return i(),e("div",null,r)}const m=a(t,[["render",n]]);export{E as __pageData,m as default};
