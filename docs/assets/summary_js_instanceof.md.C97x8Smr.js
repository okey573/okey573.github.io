import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.CbHUKvme.js";const g=JSON.parse('{"title":"instanceof","description":"","frontmatter":{"title":"instanceof"},"headers":[],"relativePath":"summary/js/instanceof.md","filePath":"summary/js/instanceof.md","lastUpdated":1717675244000}'),t={name:"summary/js/instanceof.md"},h=n(`<h1 id="instanceof-关键字" tabindex="-1">instanceof 关键字 <a class="header-anchor" href="#instanceof-关键字" aria-label="Permalink to &quot;instanceof 关键字&quot;">​</a></h1><h2 id="理解" tabindex="-1">理解 <a class="header-anchor" href="#理解" aria-label="Permalink to &quot;理解&quot;">​</a></h2><p>判断一个 function 的 prototype 是否存在于某一个对象的原型链上</p><ul><li><a href="/docs/summary/js/prototype-chain.html#图解">原型链</a></li></ul><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theInstanceof</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">object</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> object </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;object&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> constructor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;function&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // getPrototypeOf这个api等价于直接访问对象的__proto__属性</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> proto </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPrototypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(object)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (proto) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> prototype</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (proto </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prototype) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    proto </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getPrototypeOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(proto)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/********************* 验证 *********************/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> foo1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> anyObj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theInstanceof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo1, Foo))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(anyObj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Foo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theInstanceof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(anyObj, Foo))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">instanceof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Object</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theInstanceof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(foo1, Object))</span></span></code></pre></div><h2 id="和-typeof-tostring-的区别" tabindex="-1">和 <code>typeof</code> <code>toString</code> 的区别 <a class="header-anchor" href="#和-typeof-tostring-的区别" aria-label="Permalink to &quot;和 \`typeof\` \`toString\` 的区别&quot;">​</a></h2><ul><li>typeof 会返回一个运算数的基本类型，也就是 number string boolean bigint 那些基本类型；instanceof 返回的是布尔值</li><li>instanceof 可以准确判断引用数据类型，但是不能正确判断原始数据类型</li><li>typeof虽然可以判断原始数据类型（null 除外），但是无法判断引用数据类型（function 除外）</li><li>Object.prototype.toString.call() 返回的是对应的构造函数</li></ul>`,8),l=[h];function k(p,e,r,o,E,d){return a(),i("div",null,l)}const c=s(t,[["render",k]]);export{g as __pageData,c as default};
