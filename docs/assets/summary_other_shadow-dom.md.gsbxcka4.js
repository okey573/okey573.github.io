import{_ as a,c as s,o as i,a4 as e}from"./chunks/framework.CbHUKvme.js";const E=JSON.parse('{"title":"shadow dom","description":"","frontmatter":{"title":"shadow dom"},"headers":[],"relativePath":"summary/other/shadow-dom.md","filePath":"summary/other/shadow-dom.md","lastUpdated":1718355690000}'),t={name:"summary/other/shadow-dom.md"},h=e(`<h1 id="shadow-dom" tabindex="-1">Shadow DOM <a class="header-anchor" href="#shadow-dom" aria-label="Permalink to &quot;Shadow DOM&quot;">​</a></h1><p><em>qiankun.js 采用了 shadow dom</em></p><h2 id="什么是-shadow-dom" tabindex="-1">什么是 shadow DOM <a class="header-anchor" href="#什么是-shadow-dom" aria-label="Permalink to &quot;什么是 shadow DOM&quot;">​</a></h2><p><strong>shadow dom</strong>（影子 dom）能够为 web 组件中的 dom 和 css 提供了封装，实际上是在浏览器渲染文档的时候会给指定的 dom 结构插入编写好的 dom 元素</p><p>但是插入的 shadow dom 会与主文档的 dom 保持分离，也就是说 shadow dom 不存在于主 dom 树上</p><p>类似 <code>input</code>, <code>video</code>, <code>audio</code>, 等标签，明明就是一个空元素，却能在页面上渲染出各种复杂的内容，就是因为采用了 shadow dom</p><h2 id="查看-shadow-dom" tabindex="-1">查看 shadow dom <a class="header-anchor" href="#查看-shadow-dom" aria-label="Permalink to &quot;查看 shadow dom&quot;">​</a></h2><p>以 chrome 为例。打开控制台，右上角齿轮按钮设置 -&gt; Preference -&gt; Elements -&gt; Show user anent shadow DOM</p><h2 id="shadow-dom-的用法" tabindex="-1">shadow dom 的用法 <a class="header-anchor" href="#shadow-dom-的用法" aria-label="Permalink to &quot;shadow dom 的用法&quot;">​</a></h2><ul><li>使用 <strong>attachShadow</strong> api 创建一个 shadow dom。 attachShadow 接受一个对象配置，改对象有一个 <strong>mode</strong> 属性，值可以是 open 或者 closed</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shadow </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> elementRef.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attachShadow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;open&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shadow </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> elementRef.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">attachShadow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;closed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span></code></pre></div><p>open 表示可以通过页面内的 JavaScript 方法来获取 Shadow DOM，例如使用 Element.shadowRoot 属性：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myShadowDom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> myCustomElem.shadowRoot;</span></span></code></pre></div><p>将 Shadow DOM 附加到一个元素之后，就可以使用 DOM APIs 对它进行操作，就和处理常规 DOM 一样</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> para </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;p&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">shadow.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">appendChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(para);</span></span></code></pre></div><p>要注意的是，不是每一种类型的元素都可以附加到 shadow root（影子根）下面。出于安全考虑，一些元素不能使用 shadow DOM</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noreferrer">使用 shadow DOM</a></p></li><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow" target="_blank" rel="noreferrer">Element.attachShadow()</a></p></li></ul>`,18),o=[h];function d(l,n,p,r,k,c){return i(),s("div",null,o)}const g=a(t,[["render",d]]);export{E as __pageData,g as default};
