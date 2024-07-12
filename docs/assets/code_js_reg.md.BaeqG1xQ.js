import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.CbHUKvme.js";const c=JSON.parse('{"title":"正则表达式","description":"","frontmatter":{"title":"正则表达式","outline":[2,6],"lastUpdated":"Wed May 08 2024 09:23:38 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"code/js/reg.md","filePath":"code/js/reg.md","lastUpdated":1720785406000}'),h={name:"code/js/reg.md"},e=t('<h1 id="正则表达式相关" tabindex="-1">正则表达式相关 <a class="header-anchor" href="#正则表达式相关" aria-label="Permalink to &quot;正则表达式相关&quot;">​</a></h1><h2 id="提取文本中的url链接" tabindex="-1">提取文本中的url链接 <a class="header-anchor" href="#提取文本中的url链接" aria-label="Permalink to &quot;提取文本中的url链接&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;text&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">match</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(https</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">ftp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">file):</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;--shiki-light-font-weight:bold;--shiki-dark-font-weight:bold;">\\/\\/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[-A-Za-z0-9+&amp;@#/%?=~_|!:,.;]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">[-A-Za-z0-9+&amp;@#/%=~_|]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="整数数字千分位" tabindex="-1">整数数字千分位 <a class="header-anchor" href="#整数数字千分位" aria-label="Permalink to &quot;整数数字千分位&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;1234567890&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">replace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\\B</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">(?=(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">{3}</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+$</span><span style="--shiki-light:#032F62;--shiki-dark:#DBEDFF;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">g</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;,&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div>',5),l=[e];function k(n,p,r,d,o,F){return a(),i("div",null,l)}const E=s(h,[["render",k]]);export{c as __pageData,E as default};
