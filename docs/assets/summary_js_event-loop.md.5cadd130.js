import{_ as s,o as n,c as l,d as a}from"./app.cab8cfa4.js";const C=JSON.parse('{"title":"事件机制","description":"","frontmatter":{"title":"事件机制"},"headers":[{"level":2,"title":"写在前面","slug":"写在前面","link":"#写在前面","children":[]},{"level":2,"title":"事件执行顺序","slug":"事件执行顺序","link":"#事件执行顺序","children":[]},{"level":2,"title":"宏任务和微任务的区分","slug":"宏任务和微任务的区分","link":"#宏任务和微任务的区分","children":[]},{"level":2,"title":"vue的nextTick","slug":"vue的nexttick","link":"#vue的nexttick","children":[]},{"level":2,"title":"验证","slug":"验证","link":"#验证","children":[]},{"level":2,"title":"任务的执行时机","slug":"任务的执行时机","link":"#任务的执行时机","children":[]},{"level":2,"title":"新的事件循环","slug":"新的事件循环","link":"#新的事件循环","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"relativePath":"summary/js/event-loop.md","lastUpdated":1699926612000}'),p={name:"summary/js/event-loop.md"},o=a(`<h1 id="事件循环机制" tabindex="-1">事件循环机制 <a class="header-anchor" href="#事件循环机制" aria-hidden="true">#</a></h1><h2 id="写在前面" tabindex="-1">写在前面 <a class="header-anchor" href="#写在前面" aria-hidden="true">#</a></h2><p><em>js的运行机制在node环境和在浏览器环境是不同的</em></p><p>对于浏览器环境，主要是运行在浏览器的渲染进程中的 JS 引擎线程上，其他事件比如定时任务，运行在对应的定时触发器线程上</p><h2 id="事件执行顺序" tabindex="-1">事件执行顺序 <a class="header-anchor" href="#事件执行顺序" aria-hidden="true">#</a></h2><ol><li>所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。任务分为同步任务和异步任务，异步任务分为宏任务和微任务（并不是所有的宏任务都是异步任务，例如整个script块就是宏任务）</li><li>执行同步任务，异步任务进入event table，进入到event table的任务到了指定时间会进入event queue（比如ajax返回，setTimeout的延迟结束）</li><li>event queue分为宏任务的队列和微任务的队列，从event table进入到event queue时，会根据任务类型进入到不同的队列</li><li>执行宏任务</li><li>执行所有队列中的微任务，包括在执行过程中新进入队列的微任务</li><li>js线程挂起，gui接管 dom渲染更新</li><li>vue的nextTick就是在此时执行</li></ol><h2 id="宏任务和微任务的区分" tabindex="-1">宏任务和微任务的区分 <a class="header-anchor" href="#宏任务和微任务的区分" aria-hidden="true">#</a></h2><ul><li>宏任务：当前调用栈中执行的代码成为宏任务。（主代码快，宿主发起的任务也就是node或者浏览器发起的任务，定时器等等）。</li><li>微任务： 当前（此次事件循环中）宏任务执行完，在下一个宏任务开始之前需要执行的任务,可以理解为回调事件。（promise.then，proness.nextTick等等）。</li><li>宏任务中的事件放在callback queue中，由事件触发线程维护；微任务的事件放在微任务队列中，由js引擎线程维护</li></ul><h2 id="vue的nexttick" tabindex="-1">vue的nextTick <a class="header-anchor" href="#vue的nexttick" aria-hidden="true">#</a></h2><p>首先有个重点，dom的更新是实时的。DOM的操作是能够实时得到反馈的，上一行代码操作了DOM，下一行就能获取到；</p><p>但是Vue实现响应式并不是数据发生变化之后DOM立即变化，而是等同一事件循环中的所有数据变化完成之后，再统一进行视图更新。</p><p><em>Vue 开启一个异步队列，并缓冲在此事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次</em></p><p>nextTick声明了microTimerFunc和macroTimerFunc 2 个变量，它们分别对应的是 micro task 的函数和 macro task 的函数。</p><p>对于 macro task 的实现，优先检测是否支持原生 setImmediate，这是一个高版本 IE 和 Edge 才支持的特性，不支持的话再去检测是否支持原生的 MessageChannel（后来改用了MutationObserver），如果也不支持的话就会降级为 setTimeout 0； 而对于 micro task 的实现，则检测浏览器是否原生支持 Promise，不支持的话直接指向 macro task 的实现。</p><h2 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// setTimeout是宏任务</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">nextTick</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">5</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// nextTick是微任务</span></span>
<span class="line"><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">nextTick</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">6</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// promise.then是微任务, 本身是同步任务; promise.then的优先级低于nextTick</span></span>
<span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">7</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// setTimeout是宏任务</span></span>
<span class="line"><span style="color:#82AAFF;">setTimeout</span><span style="color:#A6ACCD;">(</span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">9</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">process</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">nextTick</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 7</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 6</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 8</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 4</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 5</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 9</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 11</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 10</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 12</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="任务的执行时机" tabindex="-1">任务的执行时机 <a class="header-anchor" href="#任务的执行时机" aria-hidden="true">#</a></h2><ol><li>从task任务队列中取第一个task（比如setTimeout、setInterval的回调，也可以将同一轮循环中的所有同步代码看作是一个宏任务），执行它。</li><li>执行微任务队列里的所有微任务。</li><li>浏览器判断是否更新渲染屏幕，如果需要重新绘制，则执行步骤4-13，如果不需要重新绘制，则流程回到步骤1，这样不断循环。</li><li>触发resize、scroll事件，建立媒体查询（执行一个任务中如果生成了微任务，则执行完任务该后就会执行所有的微任务，然后再执行下一个任务）。</li><li>建立css动画（执行一个任务中如果生成了微任务，则执行完该任务后就会执行所有的微任务，然后再执行下一个任务）。</li><li>执行requestAnimationFrame回调（执行一个任务中如果生成了微任务，则执行完该任务后就会执行所有的微任务，然后再执行下一个任务）。</li><li>执行 IntersectionObserver 回调（执行一个任务中如果生成了微任务，则执行完该任务后就会执行所有的微任务，然后再执行下一个任务）。</li><li>更新渲染屏幕。</li><li>浏览器判断当前帧是否还有空闲时间，如果有空闲时间，则执行步骤10-12。</li><li>从 requestIdleCallback回调函数队列中取第一个，执行它。</li><li>执行微任务队列里的所有微任务。</li><li>流程回到步骤9，直到requestIdleCallback回调函数队列清空或当前帧没有空闲时间。</li><li>流程回到步骤1，这样不断循环。</li></ol><h2 id="新的事件循环" tabindex="-1">新的事件循环 <a class="header-anchor" href="#新的事件循环" aria-hidden="true">#</a></h2><p>每个任务都有一个任务类型， 同⼀个类型的任务必须在⼀个队列， 不同类型的任务可以分属于不同的队列。</p><ul><li>延时队列：⽤于存放计时器到达后的回调任务，优先级「中」</li><li>交互队列：⽤于存放⽤户操作后产⽣的事件处理任务，优先级「⾼」</li><li>微队列：⽤户存放需要最快执⾏的任务，优先级「最⾼」</li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/weixin_43552879/article/details/127501860" target="_blank" rel="noreferrer">requestAnimationFrame和requestIdleCallback是宏任务还是微任务</a></li></ul>`,23),e=[o];function t(c,r,i,F,y,D){return n(),l("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};