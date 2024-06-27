import{_ as s,c as i,o as a,a4 as n,ag as l}from"./chunks/framework.CbHUKvme.js";const c=JSON.parse('{"title":"diff 算法","description":"","frontmatter":{"title":"diff 算法","outline":[2,6]},"headers":[],"relativePath":"summary/vue/diff.md","filePath":"summary/vue/diff.md","lastUpdated":1719481514000}'),h={name:"summary/vue/diff.md"},e=n('<h1 id="vue-的-diff算法" tabindex="-1">vue 的 diff算法 <a class="header-anchor" href="#vue-的-diff算法" aria-label="Permalink to &quot;vue 的 diff算法&quot;">​</a></h1><blockquote><p>diff算法就是进行虚拟节点对比，并返回一个patch对象，用来存储两个节点不同的地方，最后用patch记录的消息去局部更新Dom。</p></blockquote><p>换句话说就是</p><blockquote><p>diff的过程就是调用名为patch的函数，比较新旧节点，一边比较一边给真实的DOM打补丁</p></blockquote><h2 id="两个特点" tabindex="-1">两个特点 <a class="header-anchor" href="#两个特点" aria-label="Permalink to &quot;两个特点&quot;">​</a></h2><ul><li>比较只会在同层级进行, 不会跨层级比较</li><li>在diff比较的过程中，循环从两边向中间比较</li></ul><h2 id="diff算法流程图" tabindex="-1">diff算法流程图 <a class="header-anchor" href="#diff算法流程图" aria-label="Permalink to &quot;diff算法流程图&quot;">​</a></h2><p>当数据发生改变时，set方法会让调用Dep.notify通知所有订阅者Watcher，订阅者就会调用patch给真实的DOM打补丁，更新相应的视图。</p><p><img src="'+l+`" alt="生命周期"></p><h2 id="具体分析" tabindex="-1">具体分析 <a class="header-anchor" href="#具体分析" aria-label="Permalink to &quot;具体分析&quot;">​</a></h2><h3 id="patch" tabindex="-1">patch <a class="header-anchor" href="#patch" aria-label="Permalink to &quot;patch&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> patch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">oldVnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // some code</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sameVnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(oldVnode, vnode)) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    patchVnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(oldVnode, vnode)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> oEl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> oldVnode.el </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当前oldVnode对应的真实元素节点</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> parentEle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">parentNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(oEl)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 父元素</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    createEle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vnode)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 根据Vnode生成新元素</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (parentEle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">insertBefore</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(parentEle, vnode.el, api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nextSibling</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(oEl)) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将新元素添加进父元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChild</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(parentEle, oldVnode.el)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 移除以前的旧元素节点</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      oldVnode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // some code </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vnode</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>patch函数接收两个参数oldVnode和Vnode分别代表新的节点和之前的旧节点</p><ul><li>判断两节点是否值得比较，值得比较则执行patchVnode</li></ul><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sameVnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    a.key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b.key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // key值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    a.tag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b.tag </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 标签名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    a.isComment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b.isComment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 是否为注释节点</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 是否都定义了data，data包含一些具体信息，例如onclick , style</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    isDef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a.data) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> isDef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(b.data) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    sameInputType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a, b) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当标签是&lt;input&gt;的时候，type必须相同</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><p>不值得比较则用Vnode替换oldVnode。如果两个节点都是一样的，那么就深入检查他们的子节点。如果两个节点不一样那就说明Vnode完全被改变了，就可以直接替换oldVnode。</p><p>虽然这两个节点不一样但是他们的子节点一样怎么办？别忘了，diff可是逐层比较的，如果第一层不一样那么就不会继续深入比较第二层了。（我在想这算是一个缺点吗？相同子节点不能重复利用了...）</p></li></ul><h3 id="patchvnode" tabindex="-1">patchVnode <a class="header-anchor" href="#patchvnode" aria-label="Permalink to &quot;patchVnode&quot;">​</a></h3><p>当我们确定两个节点值得比较之后我们会对两个节点指定patchVnode方法</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> patchVnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">oldVnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">vnode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> el</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vnode.el </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> oldVnode.el</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i, oldCh </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> oldVnode.children, ch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vnode.children</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (oldVnode </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vnode) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (oldVnode.text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vnode.text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> oldVnode.text </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vnode.text) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTextContent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el, vnode.text)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    updateEle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el, vnode, oldVnode)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (oldCh </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ch </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> oldCh </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ch) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      updateChildren</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el, oldCh, ch)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (ch) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      createEle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(vnode) </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//create el&#39;s children dom</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (oldCh) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      api.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">removeChildren</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>这个函数做了以下事情：</p><ul><li>找到对应的真实dom，称为el</li><li>判断Vnode和oldVnode是否指向同一个对象，如果是，那么直接return</li><li>如果他们都有文本节点并且不相等，那么将el的文本节点设置为Vnode的文本节点。</li><li>如果oldVnode有子节点而Vnode没有，则删除el的子节点</li><li>如果oldVnode没有子节点而Vnode有，则将Vnode的子节点真实化之后添加到el</li><li>如果两者都有子节点，则执行updateChildren函数比较子节点，这一步很重要</li></ul><h3 id="updatechildren" tabindex="-1">updateChildren <a class="header-anchor" href="#updatechildren" aria-label="Permalink to &quot;updateChildren&quot;">​</a></h3><h4 id="vue2-的双端交叉指针" tabindex="-1">vue2 的双端交叉指针 <a class="header-anchor" href="#vue2-的双端交叉指针" aria-label="Permalink to &quot;vue2 的双端交叉指针&quot;">​</a></h4><p>这个函数做了如下的事：</p><ul><li>将 newChildren 和 oldChildren 提取出来(下面简称 new 和 old)</li><li>new 和 old 各设置 start 和 end 两组两个指针，共四个指针（双端交叉指针）</li><li>两组指针交叉比较，共有四种比较方式</li><li>如果找到相同节点则两个匹配到的节点都往中间靠拢，把匹配到的节点放到结果数组中</li><li>如果四次比较都没有匹配到，则会遍历 old 和 new 的第一个元素比较，然后找到对应的匹配节点，把这个节点移动到 当前 old 的前面，然后把它原本的位置设置成 undefined 后面再遇到 undefined 就跳过。然后重新开始判断移动</li><li>再如果上面的遍历 old 都没找到匹配的元素，那就说明 new 的第一个元素是新的，直接添加就行了</li><li>一旦 start &gt; end 表明 new 和 old 至少有一个已经遍历完了，就会结束比较</li><li>如果 new 没有剩余节点了，则匹配结束</li><li>如果 old 没有剩余节点了，则剩余的 new 节点插入</li></ul><h4 id="vue3-的双端快速-diff" tabindex="-1">vue3 的双端快速 diff <a class="header-anchor" href="#vue3-的双端快速-diff" aria-label="Permalink to &quot;vue3 的双端快速 diff&quot;">​</a></h4><p>这个函数做的事情：</p><ul><li>将 newChildren 和 oldChildren 提取出来(下面简称 new 和 old)</li><li>new 和 old 各设置 start 和 end 两组两个指针，共四个指针</li><li>从头部开始遍历，判断 new 的头部和 old 的头部，遇到相同节点则继续，下标 + 1，不同节点则跳出循环</li><li>从尾部开始遍历，遇到相同节点则继续，length - 1，不同节点则跳出循环</li><li>如果旧节点已遍历完毕，并且新节点还有剩余，则遍历剩下的进行新增</li><li>如果新节点已经遍历完毕，则说明多余的节点需要卸载</li><li>新旧节点都没有遍历完成的情况就有点麻烦，这里涉及到最长递增子序列。用下标找到不需要改动的 old 节点然后复用</li></ul><p>vue2 的算法复杂度是 o(n) vue3 的 复杂度是 o(n*Logn) 出发点是减少 dom 的移动, 用 js 消耗换浏览器渲染性能 是值得的</p><p>减少 dom 的移动, js 消耗换浏览器渲染性能 是值得的</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://segmentfault.com/a/1190000038654183?utm_source=sf-backlinks" target="_blank" rel="noreferrer">Vue 3 Virtual Dom Diff源码阅读</a></li></ul>`,32),p=[e];function t(k,d,E,r,o,g){return a(),i("div",null,p)}const u=s(h,[["render",t]]);export{c as __pageData,u as default};
