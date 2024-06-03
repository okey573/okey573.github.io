import{_ as s,c as a,o as i,a4 as t}from"./chunks/framework.CbHUKvme.js";const u=JSON.parse('{"title":"响应式布局和自适应布局","description":"","frontmatter":{"title":"响应式布局和自适应布局"},"headers":[],"relativePath":"summary/css/layout.md","filePath":"summary/css/layout.md","lastUpdated":1717397084000}'),e={name:"summary/css/layout.md"},h=t(`<h1 id="响应式布局和自适应布局" tabindex="-1">响应式布局和自适应布局 <a class="header-anchor" href="#响应式布局和自适应布局" aria-label="Permalink to &quot;响应式布局和自适应布局&quot;">​</a></h1><h2 id="响应式布局和自适应布局的区别" tabindex="-1">响应式布局和自适应布局的区别 <a class="header-anchor" href="#响应式布局和自适应布局的区别" aria-label="Permalink to &quot;响应式布局和自适应布局的区别&quot;">​</a></h2><p><em>网上怎么说的的都有，下面这个可能描述可能刚好相反...</em></p><ul><li>自适应布局是多个网页对应对各个设备，响应式布局是一套网页对应多个设备</li><li>自适应对页面做的屏幕适配是在一定范围：比如pc端一般要大于1024像素，手机端要小于768像素。而响应式布局全部适应</li><li>自适应布局如果屏幕太小会发生内容过于拥挤。而响应式布局正是为了解决这个问题而衍生出的概念，它可以自动识别屏幕宽度并做出相应调整的网页设计</li></ul><h4 id="meta标签定义" tabindex="-1">Meta标签定义 <a class="header-anchor" href="#meta标签定义" aria-label="Permalink to &quot;Meta标签定义&quot;">​</a></h4><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p>意思是网页宽度默认等于屏幕宽度，缩放比为1.0</p><h4 id="css" tabindex="-1">css <a class="header-anchor" href="#css" aria-label="Permalink to &quot;css&quot;">​</a></h4><p>不需要写固定的像素，改用%形式或者auto</p><h4 id="使用css中的-media" tabindex="-1">使用css中的@media <a class="header-anchor" href="#使用css中的-media" aria-label="Permalink to &quot;使用css中的@media&quot;">​</a></h4><p>使用媒体查询</p><h4 id="按照屏幕大小不同引入不同的css文件" tabindex="-1">按照屏幕大小不同引入不同的css文件 <a class="header-anchor" href="#按照屏幕大小不同引入不同的css文件" aria-label="Permalink to &quot;按照屏幕大小不同引入不同的css文件&quot;">​</a></h4><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/css&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> media</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;screen and (max-device-width: 1080px)&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;style/css/demo1.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/*也可以这样写*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@import url(&quot;demo1.css&quot;) screen and (max-device-width: 1080px);</span></span></code></pre></div><h4 id="使用流式-浮动栅格布局" tabindex="-1">使用流式，浮动栅格布局 <a class="header-anchor" href="#使用流式-浮动栅格布局" aria-label="Permalink to &quot;使用流式，浮动栅格布局&quot;">​</a></h4>`,14),l=[h];function n(p,r,d,k,o,c){return i(),a("div",null,l)}const m=s(e,[["render",n]]);export{u as __pageData,m as default};
