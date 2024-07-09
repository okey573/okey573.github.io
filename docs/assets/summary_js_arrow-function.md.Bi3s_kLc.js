import{_ as a,c as s,o as i,a4 as t}from"./chunks/framework.CbHUKvme.js";const g=JSON.parse('{"title":"箭头函数","description":"","frontmatter":{"title":"箭头函数","lastUpdated":"2024/06/27 17:44:28 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/js/arrow-function.md","filePath":"summary/js/arrow-function.md","lastUpdated":1720525210000}'),e={name:"summary/js/arrow-function.md"},n=t(`<h1 id="箭头函数" tabindex="-1">箭头函数 <a class="header-anchor" href="#箭头函数" aria-label="Permalink to &quot;箭头函数&quot;">​</a></h1><p>箭头函数表达式的语法比函数表达式更简洁，并且没有自己的 this，arguments，super 或 new.target。箭头函数表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数</p><h2 id="this" tabindex="-1">this <a class="header-anchor" href="#this" aria-label="Permalink to &quot;this&quot;">​</a></h2><ol><li>箭头函数没有自己的 this 对象，内部的 this 就是定义时上层作用域中的 this，也就是说，箭头函数内部的 this 指向是固定的</li><li>箭头函数的 this 不能被 call、apply、bind 改变</li></ol><h2 id="箭头函数的原型是-undefined" tabindex="-1">箭头函数的原型是 undefined <a class="header-anchor" href="#箭头函数的原型是-undefined" aria-label="Permalink to &quot;箭头函数的原型是 undefined&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> v</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> v</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// expect undefined</span></span></code></pre></div><h2 id="箭头函数不能当成一个构造函数" tabindex="-1">箭头函数不能当成一个构造函数 <a class="header-anchor" href="#箭头函数不能当成一个构造函数" aria-label="Permalink to &quot;箭头函数不能当成一个构造函数&quot;">​</a></h2><p>可以消除函数的二义性：因为一个函数，在 js 中可能被正常调用，也可能被当做构造函数使用 new 关键字调用，箭头函数表明了只能被正常调用。同理 class 也是如此</p><h2 id="不能使用-new-target" tabindex="-1">不能使用 new.target <a class="header-anchor" href="#不能使用-new-target" aria-label="Permalink to &quot;不能使用 new.target&quot;">​</a></h2><h2 id="箭头函数没有-arguments-对象" tabindex="-1">箭头函数没有 arguments 对象 <a class="header-anchor" href="#箭头函数没有-arguments-对象" aria-label="Permalink to &quot;箭头函数没有 arguments 对象&quot;">​</a></h2>`,10),h=[n];function r(l,o,d,p,c,k){return i(),s("div",null,h)}const m=a(e,[["render",r]]);export{g as __pageData,m as default};
