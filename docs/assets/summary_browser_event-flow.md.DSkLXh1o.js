import{_ as a,c as e,o as s,a4 as t}from"./chunks/framework.CbHUKvme.js";const g=JSON.parse('{"title":"事件流","description":"","frontmatter":{"title":"事件流","outline":[2,6]},"headers":[],"relativePath":"summary/browser/event-flow.md","filePath":"summary/browser/event-flow.md","lastUpdated":1718711073000}'),i={name:"summary/browser/event-flow.md"},l=t(`<h1 id="事件流描述了html页面接受事件的顺序" tabindex="-1">事件流描述了html页面接受事件的顺序 <a class="header-anchor" href="#事件流描述了html页面接受事件的顺序" aria-label="Permalink to &quot;事件流描述了html页面接受事件的顺序&quot;">​</a></h1><h2 id="事件的传播模式" tabindex="-1">事件的传播模式 <a class="header-anchor" href="#事件的传播模式" aria-label="Permalink to &quot;事件的传播模式&quot;">​</a></h2><h4 id="事件冒泡" tabindex="-1">事件冒泡 <a class="header-anchor" href="#事件冒泡" aria-label="Permalink to &quot;事件冒泡&quot;">​</a></h4><p>事件由最具体的元素接收，不断经过上级节点，直到 body，最后到页面元素 document</p><h4 id="事件捕获" tabindex="-1">事件捕获 <a class="header-anchor" href="#事件捕获" aria-label="Permalink to &quot;事件捕获&quot;">​</a></h4><p>事件由最外层页面元素接收，不断经过下级节点，直到触发的目标节点</p><p><em>IE浏览器没有事件捕获</em></p><blockquote><p>我们现在使用DOM标准事件流的传播顺序的是W3C统一后的标准——先捕获后冒泡。即当出发DOM事件时，会先进行事件捕获，捕获到事件源之后通过事件传播进行事件冒泡</p></blockquote><h4 id="事件监听器-addeventlistener" tabindex="-1">事件监听器 addEventListener <a class="header-anchor" href="#事件监听器-addeventlistener" aria-label="Permalink to &quot;事件监听器 addEventListener&quot;">​</a></h4><p>useCapture 指定事件传播模式，表示以哪个顺序接收事件。false (默认) 冒泡传播 true 捕获传播</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(eventName, callback, useCapture)</span></span></code></pre></div><h2 id="三个阶段" tabindex="-1">三个阶段 <a class="header-anchor" href="#三个阶段" aria-label="Permalink to &quot;三个阶段&quot;">​</a></h2><ul><li>冒泡阶段： 冒泡传播模式中，由目标节点到document的过程，叫冒泡阶段。</li><li>目标阶段： 事件不断传递(或直接触发)，最终在具体元素(目标节点)上触发的时候，叫做目标阶段。</li><li>捕获阶段：捕获传播模式中，由document到目标节点的过程，叫捕获阶段。</li></ul><p>可打印e.eventPhase判断当前属于什么阶段：1-捕获 2-目标 3-冒泡</p><blockquote><p>也就是在 <code>addEventListener</code> 的回调中，可以获取到 e.eventPhase , 中间的节点就是 <strong>1</strong> 或者 <strong>3</strong> 最终目标节点就是 <strong>2</strong></p></blockquote><h2 id="事件委托" tabindex="-1">事件委托 <a class="header-anchor" href="#事件委托" aria-label="Permalink to &quot;事件委托&quot;">​</a></h2><h4 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h4><p>利用了事件冒泡机制，就是当事件触发时，把要做的事委托给父元素来处理。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e.target)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 可根据e的一些属性或nodeName判断是子元素还是父元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h4 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h4><ul><li>减少内存占用，减少事件注册</li><li>js新增子元素动态绑定事件（无需再次对其绑定）</li></ul><h4 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h4><p>使用“事件委托”时，并不是说把事件委托给的元素越靠近顶层就越好。事件冒泡的过程也需要耗时，越靠近顶层，事件的”事件传播链”越长，也就越耗时。如果DOM嵌套结构很深，事件冒泡通过大量祖先元素会导致性能损失</p><h2 id="阻止默认事件" tabindex="-1">阻止默认事件 <a class="header-anchor" href="#阻止默认事件" aria-label="Permalink to &quot;阻止默认事件&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">preventDefault</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="阻止事件冒泡或者捕获" tabindex="-1">阻止事件冒泡或者捕获 <a class="header-anchor" href="#阻止事件冒泡或者捕获" aria-label="Permalink to &quot;阻止事件冒泡或者捕获&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">event.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stopPropagation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="currenttarget-和-target" tabindex="-1">currentTarget 和 target <a class="header-anchor" href="#currenttarget-和-target" aria-label="Permalink to &quot;currentTarget 和 target&quot;">​</a></h2><ul><li>target：触发事件的元素</li><li>currentTarget：事件绑定的元素</li></ul>`,29),n=[l];function r(h,o,p,d,c,k){return s(),e("div",null,n)}const E=a(i,[["render",r]]);export{g as __pageData,E as default};
