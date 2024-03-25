import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.bPmW087-.js";const g=JSON.parse('{"title":"执行上下文和执行栈","description":"","frontmatter":{"title":"执行上下文和执行栈"},"headers":[],"relativePath":"summary/js/context.md","filePath":"summary/js/context.md","lastUpdated":1711331125000}'),l={name:"summary/js/context.md"},e=n(`<h1 id="执行上下文和执行栈" tabindex="-1">执行上下文和执行栈 <a class="header-anchor" href="#执行上下文和执行栈" aria-label="Permalink to &quot;执行上下文和执行栈&quot;">​</a></h1><h2 id="写在前面" tabindex="-1">写在前面 <a class="header-anchor" href="#写在前面" aria-label="Permalink to &quot;写在前面&quot;">​</a></h2><p><em>现在网上找到的很多执行上下文和执行栈相关的文章，都是ES3的旧解释。ES5和ES2018都有一些变化</em></p><h4 id="执行上下文在-es3-中-包含三个部分" tabindex="-1">执行上下文在 ES3 中，包含三个部分 <a class="header-anchor" href="#执行上下文在-es3-中-包含三个部分" aria-label="Permalink to &quot;执行上下文在 ES3 中，包含三个部分&quot;">​</a></h4><p>scope：作用域，也常常被叫做作用域链。</p><p>variable object：变量对象，用于存储变量的对象。</p><p>this value：this 值。</p><h4 id="在-es5-中-改进了命名方式-把执行上下文最初的三个部分改为下面这个样子" tabindex="-1">在 ES5 中，改进了命名方式，把执行上下文最初的三个部分改为下面这个样子 <a class="header-anchor" href="#在-es5-中-改进了命名方式-把执行上下文最初的三个部分改为下面这个样子" aria-label="Permalink to &quot;在 ES5 中，改进了命名方式，把执行上下文最初的三个部分改为下面这个样子&quot;">​</a></h4><p>lexical environment：词法环境，当获取变量时使用。</p><p>variable environment：变量环境，当声明变量时使用。</p><p>this value：this 值。</p><h4 id="在-es2018-中-执行上下文又变成了这个样子-this-值被归入-lexical-environment-但是增加了不少内容。" tabindex="-1">在 ES2018 中，执行上下文又变成了这个样子，this 值被归入 lexical environment，但是增加了不少内容。 <a class="header-anchor" href="#在-es2018-中-执行上下文又变成了这个样子-this-值被归入-lexical-environment-但是增加了不少内容。" aria-label="Permalink to &quot;在 ES2018 中，执行上下文又变成了这个样子，this 值被归入 lexical environment，但是增加了不少内容。&quot;">​</a></h4><p>lexical environment：词法环境，当获取变量或者 this 值时使用。</p><p>variable environment：变量环境，当声明变量时使用</p><p>code evaluation state：用于恢复代码执行位置。</p><p>Function：执行的任务是函数时使用，表示正在被执行的函数。</p><p>ScriptOrModule：执行的任务是脚本或者模块时使用，表示正在被执行的代码。</p><p>Realm：使用的基础库和内置对象实例。</p><p>Generator：仅生成器上下文有这个属性，表示当前生成器。</p><h2 id="执行上下文的类型" tabindex="-1">执行上下文的类型 <a class="header-anchor" href="#执行上下文的类型" aria-label="Permalink to &quot;执行上下文的类型&quot;">​</a></h2><p>在JavaScript中有三种类型的执行上下文</p><ul><li>全局执行上下文——这是默认的或基本的执行上下文。任何不在函数内部的代码位于全局执行上下文中。它执行两件事:它创建一个全局对象，它是一个window对象(在浏览器的情况下)，并将this的值设置为等于全局对象。一个程序中只能有一个全局执行上下文。</li><li>函数执行上下文——每次调用函数时，都会为该函数创建一个全新的执行上下文。每个函数都有自己的执行上下文，但它是在调用或调用（原文是it’s created when the function is invoked or called）函数时创建的。可以有任意数量的函数执行上下文。每当创建一个新的执行上下文时，它都会按照已定义的顺序执行一系列步骤。</li><li>Eval函数执行上下文——在Eval函数内部执行的代码也会获得它自己的执行上下文。</li></ul><h2 id="执行上下文的生命周期" tabindex="-1">执行上下文的生命周期 <a class="header-anchor" href="#执行上下文的生命周期" aria-label="Permalink to &quot;执行上下文的生命周期&quot;">​</a></h2><p>生命周期分为创建阶段和执行阶段</p><h4 id="创建阶段" tabindex="-1">创建阶段 <a class="header-anchor" href="#创建阶段" aria-label="Permalink to &quot;创建阶段&quot;">​</a></h4><ol><li>this 值的决定，即熟知的 This 绑定</li><li>创建词法环境组件。</li><li>创建变量环境组件。</li></ol><h4 id="执行阶段" tabindex="-1">执行阶段 <a class="header-anchor" href="#执行阶段" aria-label="Permalink to &quot;执行阶段&quot;">​</a></h4><p>完成对所有这些变量的分配，最后执行代码</p><p>在进入执行阶段之前，变量对象中的属性都不可访问。进入执行阶段后，变量对象 变成活动对象（Activation Object），里面的属性可以被访问了，然后执行代码(ES3)</p><h2 id="变量提升" tabindex="-1">变量提升 <a class="header-anchor" href="#变量提升" aria-label="Permalink to &quot;变量提升&quot;">​</a></h2><p>在ES6中,词法环境（LexicalEnvironment）组件和变量环境（VariableEnvironment）组件之间的一个区别是，前者用于存储函数声明和变量(let和const)绑定，而后者仅用于存储变量(var)绑定</p><p>let和const定义的变量在创建阶段没有任何关联的值，但是var定义的变量被设置为undefined。 这是因为，在创建阶段，代码被扫描以查找变量和函数声明，而函数声明被完整地存储在环境中，变量最初被设置为未定义(对于var)或保持未初始化(对于let和const)。 这就是为什么你可以在声明之前访问var定义的变量(虽然未定义)，但在声明之前访问let和const变量时会得到引用错误的原因。</p><p>这就是所谓的变量提升（hoisting）</p><h2 id="演练" tabindex="-1">演练 <a class="header-anchor" href="#演练" aria-label="Permalink to &quot;演练&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // undefined</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(bar)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // [Function: bar]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // console.log(a)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // error</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // console.log(b)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // error</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(c)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;a&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;c&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://juejin.cn/post/7129510217863299102" target="_blank" rel="noreferrer">ES2018 最新 【译】理解Javascript中的执行上下文和执行栈</a></p></li><li><p><a href="https://blog.csdn.net/sonicwater/article/details/112350423" target="_blank" rel="noreferrer">变量对象、活动对象</a></p></li></ul>`,37),t=[e];function h(p,r,k,o,c,d){return i(),a("div",null,t)}const y=s(l,[["render",h]]);export{g as __pageData,y as default};
