import{_ as a,c as s,o as e,a as n}from"./app.dfd2d94d.js";const u=JSON.parse('{"title":"事件流","description":"","frontmatter":{"title":"事件流","outline":[2,6]},"headers":[{"level":2,"title":"事件的传播模式","slug":"事件的传播模式","link":"#事件的传播模式","children":[]},{"level":2,"title":"三个阶段","slug":"三个阶段","link":"#三个阶段","children":[]},{"level":2,"title":"事件委托","slug":"事件委托","link":"#事件委托","children":[]},{"level":2,"title":"阻止默认事件","slug":"阻止默认事件","link":"#阻止默认事件","children":[]},{"level":2,"title":"阻止事件冒泡或者捕获","slug":"阻止事件冒泡或者捕获","link":"#阻止事件冒泡或者捕获","children":[]}],"relativePath":"summary/Other/event-flow.md","lastUpdated":1677493695000}'),l={name:"summary/Other/event-flow.md"},t=n(`<h1 id="事件流描述了html页面接受事件的顺序" tabindex="-1">事件流描述了html页面接受事件的顺序 <a class="header-anchor" href="#事件流描述了html页面接受事件的顺序" aria-hidden="true">#</a></h1><h2 id="事件的传播模式" tabindex="-1">事件的传播模式 <a class="header-anchor" href="#事件的传播模式" aria-hidden="true">#</a></h2><h4 id="事件冒泡" tabindex="-1">事件冒泡 <a class="header-anchor" href="#事件冒泡" aria-hidden="true">#</a></h4><p>事件由最具体的元素接收，不断经过上级节点，直到 body，最后到页面元素 document</p><h4 id="事件捕获" tabindex="-1">事件捕获 <a class="header-anchor" href="#事件捕获" aria-hidden="true">#</a></h4><p>事件由最外层页面元素接收，不断经过下级节点，直到触发的目标节点</p><p><em>IE浏览器没有事件捕获</em></p><h4 id="事件监听器-addeventlistener" tabindex="-1">事件监听器 addEventListener <a class="header-anchor" href="#事件监听器-addeventlistener" aria-hidden="true">#</a></h4><p>useCapture 指定事件传播模式，表示以哪个顺序接收事件。false (默认) 冒泡传播 true 捕获传播</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(eventName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> callback</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> useCapture)</span></span>
<span class="line"></span></code></pre></div><h2 id="三个阶段" tabindex="-1">三个阶段 <a class="header-anchor" href="#三个阶段" aria-hidden="true">#</a></h2><ul><li>冒泡阶段： 冒泡传播模式中，由目标节点到document的过程，叫冒泡阶段。</li><li>目标阶段： 事件不断传递(或直接触发)，最终在具体元素(目标节点)上触发的时候，叫做目标阶段。</li><li>捕获阶段：捕获传播模式中，由document到目标节点的过程，叫捕获阶段。</li></ul><p>可打印e.eventPhase判断当前属于什么阶段：1-捕获 2-目标 3-冒泡</p><blockquote><p>也就是在 <code>addEventListener</code> 的回调中，可以获取到 e.eventPhase , 中间的节点就是 <strong>1</strong> 或者 <strong>3</strong> 最终目标节点就是 <strong>2</strong></p></blockquote><h2 id="事件委托" tabindex="-1">事件委托 <a class="header-anchor" href="#事件委托" aria-hidden="true">#</a></h2><h4 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-hidden="true">#</a></h4><p>利用了事件冒泡机制，就是当事件触发时，把要做的事委托给父元素来处理。</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">addEventListener</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 可根据e的一些属性或nodeName判断是子元素还是父元素</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h4 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-hidden="true">#</a></h4><ul><li>减少内存占用，减少事件注册</li><li>js新增子元素动态绑定事件（无需再次对其绑定）</li></ul><h4 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-hidden="true">#</a></h4><p>使用“事件委托”时，并不是说把事件委托给的元素越靠近顶层就越好。事件冒泡的过程也需要耗时，越靠近顶层，事件的”事件传播链”越长，也就越耗时。如果DOM嵌套结构很深，事件冒泡通过大量祖先元素会导致性能损失</p><h2 id="阻止默认事件" tabindex="-1">阻止默认事件 <a class="header-anchor" href="#阻止默认事件" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">preventDefault</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="阻止事件冒泡或者捕获" tabindex="-1">阻止事件冒泡或者捕获 <a class="header-anchor" href="#阻止事件冒泡或者捕获" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">event</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stopPropagation</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,26),o=[t];function p(r,c,i,d,h,y){return e(),s("div",null,o)}const A=a(l,[["render",p]]);export{u as __pageData,A as default};
