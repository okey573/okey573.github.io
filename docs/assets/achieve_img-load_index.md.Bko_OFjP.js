import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.CbHUKvme.js";const y=JSON.parse('{"title":"实现一个图片加载的指令","description":"","frontmatter":{"title":"实现一个图片加载的指令"},"headers":[],"relativePath":"achieve/img-load/index.md","filePath":"achieve/img-load/index.md","lastUpdated":1716540100000}'),h={name:"achieve/img-load/index.md"},t=n(`<h1 id="实现一个-vue-custom-directive" tabindex="-1">实现一个 vue custom directive <a class="header-anchor" href="#实现一个-vue-custom-directive" aria-label="Permalink to &quot;实现一个 vue custom directive&quot;">​</a></h1><p>作用： 用在 img 标签上， 可自动实现图片懒加载或者预加载</p><h2 id="懒加载" tabindex="-1">懒加载 <a class="header-anchor" href="#懒加载" aria-label="Permalink to &quot;懒加载&quot;">​</a></h2><h4 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vLazy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  mounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">binding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> lazy</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> binding.value</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">lazy) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      el.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> el.dataset.src</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    el.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;data:image/png;base64,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&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> observer</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IntersectionObserver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">entries</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">imgEntry</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> entries</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (imgEntry.isIntersecting) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        el.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> el.dataset.src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        observer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unobserve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    observer.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">observe</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h4><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-lazy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;true&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> data-src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://img0.baidu.com/it/u=2078471082,1063663748&amp;fm=253&amp;fmt=auto&amp;app=138&amp;f=JPEG&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="预加载" tabindex="-1">预加载 <a class="header-anchor" href="#预加载" aria-label="Permalink to &quot;预加载&quot;">​</a></h2><p>严格意义上来说，没有“预”加载，如果需要的话需要提前收集图片信息。只是用 worker 开启了一个线程加载 👻👻</p><h4 id="实现-1" tabindex="-1">实现 <a class="header-anchor" href="#实现-1" aria-label="Permalink to &quot;实现&quot;">​</a></h4><p>// main.js</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> vPre</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  mounted</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">el</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">binding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    el.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;data:image/png;base64,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&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> worker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Worker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;src/directives/v-lazy/worker.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    worker.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      el.src </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> el.dataset.src</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    worker.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(el.dataset.src)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>// worker.js</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">self.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(e.data)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  self.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;done&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,14),k=[t];function l(e,p,E,r,d,g){return a(),i("div",null,k)}const o=s(h,[["render",l]]);export{y as __pageData,o as default};
