import{_ as s,o as n,c as a,a as l}from"./app.2e7f410a.js";const C=JSON.parse('{"title":"Generator","description":"","frontmatter":{"title":"Generator","outline":[2,6]},"headers":[{"level":2,"title":"Generator 函数的定义","slug":"generator-函数的定义","link":"#generator-函数的定义","children":[]},{"level":2,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[]},{"level":2,"title":"迭代器","slug":"迭代器","link":"#迭代器","children":[{"level":3,"title":"迭代器协议","slug":"迭代器协议","link":"#迭代器协议","children":[]}]},{"level":2,"title":"promise generator async/await","slug":"promise-generator-async-await","link":"#promise-generator-async-await","children":[]},{"level":2,"title":"generator 将异步同步化的例子","slug":"generator-将异步同步化的例子","link":"#generator-将异步同步化的例子","children":[]}],"relativePath":"summary/JavaScript/generator.md","lastUpdated":1679136122000}'),o={name:"summary/JavaScript/generator.md"},p=l(`<h1 id="generator-函数" tabindex="-1">Generator 函数 <a class="header-anchor" href="#generator-函数" aria-hidden="true">#</a></h1><h2 id="generator-函数的定义" tabindex="-1">Generator 函数的定义 <a class="header-anchor" href="#generator-函数的定义" aria-hidden="true">#</a></h2><ul><li>语法上，<code>Generator</code> 函数是一个状态机，封装了多个内部状态。</li><li>形式上，<code>Generator</code> 是一个函数。不同于普通函数，是可以暂停执行的，所以函数名之前要加星号，以示区别。</li><li>整个 <code>Generator</code> 函数就是一个封装的异步任务，或者说是异步任务的容器，异步操作需要暂停的地方，都用 <code>yield</code> 语句。</li></ul><blockquote><p>function 关键字和函数之间有一个星号(*),且内部使用yield表达式，定义不同的内部状态。 <br> 调用Generator函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象。</p></blockquote><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">g</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">x</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">x=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">y=</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">}\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">y</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 对于上面的这个函数，首先调用它，将不会有任何返回，函数内部也不会执行</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> t </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">g</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 此时不会有任何输出，而 t 是一个迭代器对象</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// console.log(Object.prototype.toString.call(t).match(/\\[object (.*?)\\]/)[1].toLowerCase())</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 输出 \`generator\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> t1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 此时函数将开始执行打印 x=1</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 而 t1 的值是一个迭代器对象，内部有两个属性 \`value\` 和 \`done\`</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// value 对应的值是 \`g\` 函数内部第一个 \`yield\` 的值，也就是 1 + 1 = 2</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// done 对应的值时 false , 因为函数还没执行完</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">t1 = </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(t1)</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> t2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">100</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 函数继续执行，这里传了一个参数 100 ， 它将被上面的 \`y\` 接受。</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// yield 返回的值和接受的值无关，也就是不管上面的 \`yield x + 1\` yield 后面是多少，或者是 undefined null 都行，只要 t2=t.next(100)，那么函数中的y始终是100</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">t2 = </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(t2)</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 这里t2.value = 101, 因为函数也执行完了，是return回来的，所以done=true</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 至此，已经迭代完了，如果继续执行next()也还是会返回对象，但是对象value=undefined，done=true</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> t3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> t</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">t3 = </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">JSON</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">stringify</span><span style="color:#A6ACCD;">(t3)</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="迭代器" tabindex="-1">迭代器 <a class="header-anchor" href="#迭代器" aria-hidden="true">#</a></h2><h3 id="迭代器协议" tabindex="-1">迭代器协议 <a class="header-anchor" href="#迭代器协议" aria-hidden="true">#</a></h3><p>定义了一种标准的方式来产生一个有限或无限序列的值； 当一个对象被认为是一个迭代器时，它实现了一个 next() 的方法，next()返回值如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> &quot;done&quot;:true, // false迭代是否结束，</span></span>
<span class="line"><span style="color:#A6ACCD;"> &quot;value&quot;: v, // 迭代器返回值</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="promise-generator-async-await" tabindex="-1">promise generator async/await <a class="header-anchor" href="#promise-generator-async-await" aria-hidden="true">#</a></h2><p>三者都是异步编程的解决方案</p><p>不同的是, promise为较早出来的, 其次generator, 最后为async/await。三者象征了前端进行解决异步编程的进化路程。</p><p>而且 async/await 就是generator函数的语法糖</p><h2 id="generator-将异步同步化的例子" tabindex="-1">generator 将异步同步化的例子 <a class="header-anchor" href="#generator-将异步同步化的例子" aria-hidden="true">#</a></h2><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">request</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://unpkg.com/vue/package.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 这里将获取到 vue 的 packageJson</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> it </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">request</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">url</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#82AAFF;">fetch</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">url</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">response</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 使用 fetch </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">response</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">json</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">it</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">next</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,16),e=[p];function t(c,r,y,i,F,D){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
