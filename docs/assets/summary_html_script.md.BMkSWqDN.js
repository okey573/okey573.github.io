import{_ as s,c as a,o as i,a4 as t,a8 as e}from"./chunks/framework.CbHUKvme.js";const g=JSON.parse('{"title":"script 标签","description":"","frontmatter":{"title":"script 标签"},"headers":[],"relativePath":"summary/html/script.md","filePath":"summary/html/script.md","lastUpdated":1716951648000}'),p={name:"summary/html/script.md"},n=t('<h1 id="script-标签相关的内容" tabindex="-1">script 标签相关的内容 <a class="header-anchor" href="#script-标签相关的内容" aria-label="Permalink to &quot;script 标签相关的内容&quot;">​</a></h1><h2 id="基础知识" tabindex="-1">基础知识 <a class="header-anchor" href="#基础知识" aria-label="Permalink to &quot;基础知识&quot;">​</a></h2><p>浏览器的解析规则是：如果遇到 script 标签，则暂停构建 DOM，转而开始执行 script 标签，如果是外部 script，那么浏览器还需要一直等待其「下载」并「执行」后，再继续解析后面的 HTML。</p><p>如果有多个 script 标签，是按照顺序下载然后执行的，但是 Chrome 针对这个情况做了个优化，会先并行下载，然后按原本的顺序执行。</p><p>结论： script 标签会阻塞浏览器解析 HTML，如果把 script 都放在 head 中，或者头部，在网络不佳的情况下，就会导致页面长期处于白屏状态。</p><h2 id="defer" tabindex="-1">defer <a class="header-anchor" href="#defer" aria-label="Permalink to &quot;defer&quot;">​</a></h2><blockquote><p>这个布尔属性被设定用来通知浏览器该脚本将在文档完成解析后，触发 DOMContentLoaded 事件前执行。有 defer 属性的脚本会阻止 DOMContentLoaded 事件，直到脚本被加载并且解析完成</p></blockquote><p>如果在 script 标签上设置了 defer 属性，那么在浏览器解析到这里时，会默默的在后台开始下载此脚本，并继续解析后面的 HTML，并不会阻塞解析操作。</p><p>等到 HTML 解析完成之后，浏览器会立即执行后台下载的脚本，脚本执行完成之后，才会触发 DOMContentLoaded 事件。</p><p><strong>2 个小细节：</strong></p><p>Q1： 如果 HTML 解析完成之后，设置了 defer 属性的脚本还没下载完成，会怎样？</p><p>A1： 浏览器会等脚本下载完成之后，再执行此脚本，执行完成之后，再触发 DOMContentLoaded 事件。</p><p>Q2： 如果有多个设置了 defer 属性的脚本，那浏览器会如何处理？</p><p>A2： 浏览器会并行的在后台下载这些脚本，等 HTML 解析完成，并且所有脚本下载完成之后，再按照他们在 HTML 中出现的相对顺序执行，等所有脚本执行完成之后，再触发 DOMContentLoaded 事件。</p><p><strong>最佳实践：</strong></p><p>建议所有的外联脚本都默认设置此属性，因为他不会阻塞 HTML 解析，可以并行下载 JavaScript 资源，还可以按照他们在 HTML 中的相对顺序执行，确保有依赖关系的脚本运行时，不会缺少依赖。</p><p>在 SPA 的应用中，可以考虑把所有的 script 标签加上 defer 属性，并且放到 body 的最后面。在现代浏览器中，可以并行下载提升速度，也可以确保在老浏览器中，不阻塞浏览器解析 HTML，起到降级的作用。</p><p><strong>注意：</strong></p><p>defer 属性仅适用于外部脚本，如果 script 脚本没有 src，则会忽略 defer 特性。</p><p>defer 属性对模块脚本（script type=‘module’）无效，因为模块脚本就是以 defer 的形式加载的。</p><h2 id="async" tabindex="-1">async <a class="header-anchor" href="#async" aria-label="Permalink to &quot;async&quot;">​</a></h2><blockquote><p>对于普通脚本，如果存在 async 属性，那么普通脚本会被并行请求，并尽快解析和执行。 对于模块脚本，如果存在 async 属性，那么脚本及其所有依赖都会在延缓队列中执行，因此它们会被并行请求，并尽快解析和执行。该属性能够消除解析阻塞的 Javascript。解析阻塞的 Javascript 会导致浏览器必须加载并且执行脚本，之后才能继续解析。</p></blockquote><p>浏览器在解析到带有 async 属性的 script 标签时，也不会阻塞页面，同样是在后台默默下载此脚本。当他下载完后，浏览器会暂停解析 HTML，立马执行此脚本。</p><p><strong>2 个小细节：</strong></p><p>Q1： 如果设置了 async 属性的 script 下载完之后，浏览器还没解析完 HTML，会怎样？</p><p>A1： 浏览器会暂停解析 HTML，立马执行此脚本，等执行完之后，再继续解析 HTML。</p><p>Q2： 如果有多个 async 属性的 script 标签，那等他们下载完成之后，会按照代码顺序执行吗？</p><p>A2： 不会。执行顺序是：谁先下载完成，谁先执行。async 的特点是「完全独立」，不依赖其他内容。</p><p><strong>最佳实践：</strong></p><p>当我们的项目，需要集成其他独立的第三方库时，可以使用此属性，他们不依赖我们，我们也不依赖于他们。 通过设置此属性，让浏览器异步下载并执行他，是个不错的优化方案。</p><p><strong>注意：</strong></p><p>async 特性仅适用于外部脚本，如果 script 脚本没有 src，则会忽略 async 特性。</p><h2 id="async-和-defer-总结" tabindex="-1">async 和 defer 总结 <a class="header-anchor" href="#async-和-defer-总结" aria-label="Permalink to &quot;async 和 defer 总结&quot;">​</a></h2><h4 id="defer-1" tabindex="-1">defer <a class="header-anchor" href="#defer-1" aria-label="Permalink to &quot;defer&quot;">​</a></h4><ul><li>不阻塞浏览器解析 HTML，等解析完 HTML 之后，才会执行 script。</li><li>会并行下载 JavaScript 资源。</li><li>会按照 HTML 中的相对顺序执行脚本。</li><li>会在脚本下载并执行完成之后，才会触发 DOMContentLoaded 事件。</li><li>在脚本执行过程中，一定可以获取到 HTML 中已有的元素。</li><li>defer 属性对模块脚本无效。</li><li>适用于：所有外部脚本（通过 src 引用的 script）</li></ul><h4 id="async-1" tabindex="-1">async <a class="header-anchor" href="#async-1" aria-label="Permalink to &quot;async&quot;">​</a></h4><ul><li>不阻塞浏览器解析 HTML，但是 script 下载完成后，会立即中断浏览器解析 HTML，并执行此 script。</li><li>会并行下载 JavaScript 资源。</li><li>互相独立，谁先下载完，谁先执行，没有固定的先后顺序，不可控。</li><li>由于没有确定的执行时机，所以在脚本里面可能会获取不到 HTML 中已有的元素。</li><li>DOMContentLoaded 事件和 script 脚本无相关性，无法确定他们的先后顺序。</li><li>适用于：独立的第三方脚本。</li></ul><h4 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h4><p>async 的优先级比 defer 高，也就是如果同时存在这 2 个属性，那么浏览器将会以 async 的特性去加载此脚本。 分两种情况：</p><ul><li><p>如果是「普通脚本」，浏览器会优先判断async属性是否存在，如果存在，则以async特性去加载此脚本，如果不存在，再去判断是否存在defer属性。</p></li><li><p>如果是「模块脚本」，浏览器会判断async属性是否存在：</p><p>如果存在，浏览器会并行下载此模块和他的所有依赖模块，等全部下载完成之后，会立刻执行此脚本。</p><p>如果不存在，浏览器也会并行下载此模块和他的所有依赖模块，然后等浏览器解析完 HTML 之后，再执行此脚本。</p></li></ul><h4 id="图解" tabindex="-1">图解 <a class="header-anchor" href="#图解" aria-label="Permalink to &quot;图解&quot;">​</a></h4><p><img src="'+e+`" alt="script"></p><h2 id="type-module" tabindex="-1">type=module <a class="header-anchor" href="#type-module" aria-label="Permalink to &quot;type=module&quot;">​</a></h2><p>这个布尔属性被设置来标明这个脚本在支持 ES2015 modules 的浏览器中不执行。 — 实际上，这可用于在不支持模块化 JavaScript 的旧浏览器中提供回退脚本</p><h2 id="type-importmap" tabindex="-1">type=importmap <a class="header-anchor" href="#type-importmap" aria-label="Permalink to &quot;type=importmap&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;importmap&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &quot;imports&quot;: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &quot;dayjs&quot;: &quot;https://cdn.skypack.dev/dayjs@1.10.7&quot;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dayjs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;dayjs&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dayjs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2019-01-25&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;YYYY-MM-DDTHH:mm:ssZ[Z]&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script" target="_blank" rel="noreferrer">script</a></p></li><li><p><a href="https://blog.csdn.net/qq449245884/article/details/126133582" target="_blank" rel="noreferrer">type=“module“ 你了解，但 type=“importmap“ 你知道吗</a></p></li></ul>`,48),l=[n];function r(h,d,o,c,k,E){return i(),a("div",null,l)}const u=s(p,[["render",r]]);export{g as __pageData,u as default};
