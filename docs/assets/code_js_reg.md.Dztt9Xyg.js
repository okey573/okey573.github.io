import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.FeZHzeoi.js";const _=JSON.parse('{"title":"JS代码片段","description":"","frontmatter":{"title":"JS代码片段","outline":[2,6]},"headers":[],"relativePath":"code/js/reg.md","filePath":"code/js/reg.md","lastUpdated":1715091790000}'),e={name:"code/js/reg.md"},h=t('<p>正则表达式相关</p><h2 id="提取文本中的url链接" tabindex="-1">提取文本中的url链接 <a class="header-anchor" href="#提取文本中的url链接" aria-label="Permalink to &quot;提取文本中的url链接&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(https</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">ftp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">file):</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\/\\/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[-A-Za-z0-9+&amp;@#/%?=~_|!:,.;]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[-A-Za-z0-9+&amp;@#/%=~_|]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>',3),l=[h];function n(p,k,r,d,o,c){return a(),i("div",null,l)}const F=s(e,[["render",n]]);export{_ as __pageData,F as default};