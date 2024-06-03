import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.CbHUKvme.js";const g=JSON.parse('{"title":"实现灵活控制SPA版本的vite插件","description":"","frontmatter":{"title":"实现灵活控制SPA版本的vite插件","outline":[2,6]},"headers":[],"relativePath":"achieve/awesome-version/index.md","filePath":"achieve/awesome-version/index.md","lastUpdated":1717397084000}'),l={name:"achieve/awesome-version/index.md"},t=n(`<h1 id="实现灵活控制spa版本的vite插件" tabindex="-1">实现灵活控制SPA版本的vite插件 <a class="header-anchor" href="#实现灵活控制spa版本的vite插件" aria-label="Permalink to &quot;实现灵活控制SPA版本的vite插件&quot;">​</a></h1><h2 id="解决的问题" tabindex="-1">解决的问题 <a class="header-anchor" href="#解决的问题" aria-label="Permalink to &quot;解决的问题&quot;">​</a></h2><h3 id="背景" tabindex="-1">背景 <a class="header-anchor" href="#背景" aria-label="Permalink to &quot;背景&quot;">​</a></h3><p>现在的 SPA 项目通常的部署方式是打包成一个 <strong>index.html</strong>， 在这个 html 中再加载 assets</p><p>访问页面 实际就是访问这个 <strong>index.html</strong></p><h3 id="问题" tabindex="-1">问题 <a class="header-anchor" href="#问题" aria-label="Permalink to &quot;问题&quot;">​</a></h3><p>发布新版本时，服务器上的 <strong>index.html</strong> 文件一但被替换，不考虑缓存的情况下，用户访问页面会立即发生变化。 若使用 ci/cd 流水线等自动化部署手段，静态文件的替换时间很难把控，且发生问题后不能快速回滚，需求修改代码重新发布</p><h2 id="插件原理" tabindex="-1">插件原理 <a class="header-anchor" href="#插件原理" aria-label="Permalink to &quot;插件原理&quot;">​</a></h2><p>用一句来概括就是：在 <strong>index.html</strong> 中读取指定版本后渲染对应版本的页面</p><h3 id="添加版本概念" tabindex="-1">添加版本概念 <a class="header-anchor" href="#添加版本概念" aria-label="Permalink to &quot;添加版本概念&quot;">​</a></h3><p>每次打包都以当前时间生成唯一一个版本号，例如 20240227d171504t</p><p>以这个版本号去重命名 index.html 和 assetsDir ，新的文件结构如下：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ytFhA" id="tab-ko9f0Ut" checked="checked"><label for="tab-ko9f0Ut">赋予版本后</label><input type="radio" name="group-ytFhA" id="tab-kHzssF5"><label for="tab-kHzssF5">赋予版本前</label></div><div class="blocks"><div class="language-markdown vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- dist</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|   |-- index.20240227d171504t.html</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|   |-- 20240227d171504t</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- a.css</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- b.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- c.js</span></span></code></pre></div><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- dist</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|   |-- index.html</span></span>
<span class="line highlighted"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|   |-- assets</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- a.css</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- b.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- c.js</span></span></code></pre></div></div></div><h3 id="生成新的-index-html" tabindex="-1">生成新的 index.html <a class="header-anchor" href="#生成新的-index-html" aria-label="Permalink to &quot;生成新的 index.html&quot;">​</a></h3><p>原本的 <strong>index.html</strong> 被重名成携带版本号的文件了，例如 <strong>index.20240227d171504t.html</strong></p><p>而访问页面时依旧访问的是 <strong>index.html</strong> 所以还需要生成一个 index 文件，这个文件要做的事就是<strong>读取指定版本后渲染对应版本的页面</strong></p><h3 id="增量部署" tabindex="-1">增量部署 <a class="header-anchor" href="#增量部署" aria-label="Permalink to &quot;增量部署&quot;">​</a></h3><p>要求部署时 不能删除之前版本的 assets 和 html 文件，一个部署了多次，有多个版本的结构可能如下：</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|-- dist</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|   |-- index.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|   |-- index.20240325d171504t.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|   |-- index.20240326d151630t.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|   |-- index.20240327d192245t.html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|   |-- 20240325d171504t</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- a.css</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- b.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- c.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|   |-- 20240326d151630t</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- d.css</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- e.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- f.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|   |-- 20240327d192245t</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- g.css</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|       |-- h.js</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>增量部署要求使用方自己完成，插件实现不了</p></div><h3 id="渲染指定版本-html-内容" tabindex="-1">渲染指定版本 html 内容 <a class="header-anchor" href="#渲染指定版本-html-内容" aria-label="Permalink to &quot;渲染指定版本 html 内容&quot;">​</a></h3><p>在 <strong>index.html</strong> 读取服务端的版本号，根据版本号获取 html 和 assets 完成渲染页面</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>其实到这里，可以想到有其它很多方案，比如配置一下 nginx 指向不同版本的 html ， 但这里不考虑这些方案</p></div><h2 id="插件实现" tabindex="-1">插件实现 <a class="header-anchor" href="#插件实现" aria-label="Permalink to &quot;插件实现&quot;">​</a></h2><p>显然，插件需要两部分：</p><ol><li>应用在前端代码中的 vite 插件</li><li>一个版本控制的服务端，提供配置和查询版本的能力：以 http 接口的形式提供</li></ol><p>这里只考虑前端 vite 插件，服务端的实现很普通，就一个简单的配置系统</p><h3 id="三个钩子" tabindex="-1">三个钩子 <a class="header-anchor" href="#三个钩子" aria-label="Permalink to &quot;三个钩子&quot;">​</a></h3><p>首先定义一个 vite 插件，在这个插件中使用到了三个钩子函数</p><ul><li>config 修改打包的 assetsDir 配置</li><li>generateBundle 将原本的 index.html 重命名</li><li>closeBundle 生成新的 index.html</li></ul><details class="details custom-block"><summary>查看伪代码</summary><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 生成一个版本号</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> date2version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">conf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      build: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        assetsDir: version,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 需要增量部署，不清空之前的文件</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        emptyOutDir: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  generateBundle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">bundle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    bundle[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;index.html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">].fileName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`index.\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}.html\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  closeBundle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 考虑到用户可能修改了默认 outDir， 所以要通过配置获取到真整的 outDir  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dest</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(path.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cwd, outDir), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`index.html\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 写入新的 html</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dest, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeHTMLByTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><h3 id="通过版本号读取html后渲染" tabindex="-1">通过版本号读取html后渲染 <a class="header-anchor" href="#通过版本号读取html后渲染" aria-label="Permalink to &quot;通过版本号读取html后渲染&quot;">​</a></h3><h4 id="获取-html-字符串" tabindex="-1">获取 html 字符串 <a class="header-anchor" href="#获取-html-字符串" aria-label="Permalink to &quot;获取 html 字符串&quot;">​</a></h4><p>众所周知，处于安全考虑，浏览器是不允许读取本地文件的，所以通过一个 http 请求获取到版本号后怎么获取到对应的 html 内容成了个问题。对此有两个解决办法：</p><ul><li>服务端直接存储 html 字符串内容</li><li>浏览器获取到版本号后，拼接成完整的网络链接，再访问读取 html</li></ul><h4 id="通过-html-渲染页面" tabindex="-1">通过 html 渲染页面 <a class="header-anchor" href="#通过-html-渲染页面" aria-label="Permalink to &quot;通过 html 渲染页面&quot;">​</a></h4><p>获取到 html 字符串后就可以渲染页面了，这里采用的实现方式如下：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> newWin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> window.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;_self&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">newWin.document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(htmlStr)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">newWin.document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">close</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><details class="details custom-block"><summary>查看 writeHTMLByTemplate 伪代码</summary><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // options 参数是应用的一些配置信息，包括应用名，秘钥等信息</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`&lt;!DOCTYPE html&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;html lang=&quot;en&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;head&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;meta charset=&quot;UTF-8&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;title&gt;vite-plugin-awesome-version&lt;/title&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;script&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      var newWin = window.open(&#39;&#39;, &#39;_self&#39;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      // 使用 XHR 不用 fetch api 提高兼容性</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      var xhr = new XMLHttpRequest()</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      // 发起请求 获取版本号</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      xhr.open(&#39;get&#39;, &#39;http://localhost:3000?app=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">options</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&amp;appKey=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">options</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">appKey</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&#39;)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      xhr.send()</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      xhr.onload = function () {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        var response = xhr.response</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        var data = JSON.parse(response)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        // 这里采用的是直接在服务端存储 html 字符串的方式，若存储的是版本号，还需要发起一个 get 请求去远程获取 html 字符串</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        newWin.document.write(data.html)</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        newWin.document.close()</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      }</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;/script&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;/head&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;body&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;/body&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;/html&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></details><h2 id="其他思考" tabindex="-1">其他思考 <a class="header-anchor" href="#其他思考" aria-label="Permalink to &quot;其他思考&quot;">​</a></h2><h3 id="安全性" tabindex="-1">安全性 <a class="header-anchor" href="#安全性" aria-label="Permalink to &quot;安全性&quot;">​</a></h3><p>其实 html 内容本就是公开的，所以提供一个免验签的查询 html 字符串的接口 也不会有什么风险</p><h3 id="保存-html-的时机" tabindex="-1">保存 html 的时机 <a class="header-anchor" href="#保存-html-的时机" aria-label="Permalink to &quot;保存 html 的时机&quot;">​</a></h3><p>关于版本控制的服务端，如果不想做界面，也可以直接操作数据库。切换生效版本的版本时一个 sql 就搞定</p><p>在打包新版本之后，若要保存新版本到服务端，默认是采用手动的方式，把版本号复制下来，然后插入数据库。或者还有一个做法是：在 vite 插件的 closeBundle 钩子函数中，发起一个 http 请求，采用自动调接口的方式插入数据</p><h2 id="完整代码" tabindex="-1">完整代码 <a class="header-anchor" href="#完整代码" aria-label="Permalink to &quot;完整代码&quot;">​</a></h2><p><em>TODO: 后面把项目传到 github 然后把链接贴上来</em></p>`,47),h=[t];function e(p,k,d,r,E,c){return a(),i("div",null,h)}const y=s(l,[["render",e]]);export{g as __pageData,y as default};
