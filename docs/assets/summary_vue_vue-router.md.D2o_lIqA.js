import{_ as a,c as s,o as e,a4 as i}from"./chunks/framework.CbHUKvme.js";const m=JSON.parse('{"title":"vue-router","description":"","frontmatter":{"title":"vue-router"},"headers":[],"relativePath":"summary/vue/vue-router.md","filePath":"summary/vue/vue-router.md","lastUpdated":1720426610000}'),t={name:"summary/vue/vue-router.md"},h=i(`<h1 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由&quot;">​</a></h1><p>这个路由是建立在spa的概念上的 路由分三个类型 hash, history, memory</p><h2 id="hash" tabindex="-1">hash <a class="header-anchor" href="#hash" aria-label="Permalink to &quot;hash&quot;">​</a></h2><p>hash模式在页面url上有个#号，是靠监听hash路由实现的</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;hashchange&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**...*/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="history" tabindex="-1">history <a class="header-anchor" href="#history" aria-label="Permalink to &quot;history&quot;">​</a></h2><p>history模式是靠window.history的api实现的</p><ul><li><code>back()</code>后退到上一个路由；</li><li><code>forward()</code>前进到下一个路由，如果有的话；</li><li><code>go(number)</code>进入到任意一个路由，正数为前进，负数为后退；</li><li><code>pushState(obj, title, url)</code>前进到指定的 URL，不刷新页面；</li><li><code>replaceState(obj, title, url)</code>用 url 替换当前的路由，不刷新页面；</li></ul><p>调用这几种方式时，都会只是修改了当前页面的 URL，页面的内容没有任何的变化。但前 3 个方法只是路由历史记录的前进或者后退，无法跳转到指定的 URL；而pushState和replaceState可以跳转到指定的 URL。如果有面试官问起这个问题“如何仅修改页面的 URL，而不发送请求”，那么答案就是这 5 种方法。</p><h2 id="memory" tabindex="-1">memory <a class="header-anchor" href="#memory" aria-label="Permalink to &quot;memory&quot;">​</a></h2><p>memory模式适合非浏览器，或者SSR</p><p>hash和history都有一个共同点 把所有数据存在路径后面，不论是/1还是/#1，这里的东西一变，所有的东西都改变</p><p>memory不使用路径，使用localstorage。只对单机有效，页面没有链接 复制给别人只能进入初始状态</p><h2 id="传统的前端页面路由也分为三种-传统路由实现-hash路由方式-h5-router" tabindex="-1">传统的前端页面路由也分为三种：传统路由实现，Hash路由方式，H5 Router <a class="header-anchor" href="#传统的前端页面路由也分为三种-传统路由实现-hash路由方式-h5-router" aria-label="Permalink to &quot;传统的前端页面路由也分为三种：传统路由实现，Hash路由方式，H5 Router&quot;">​</a></h2>`,14),r=[h];function o(l,n,p,d,c,u){return e(),s("div",null,r)}const y=a(t,[["render",o]]);export{m as __pageData,y as default};