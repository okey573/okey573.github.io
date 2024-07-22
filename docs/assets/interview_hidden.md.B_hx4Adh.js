import{_ as i,c as a,o as e,a4 as l}from"./chunks/framework.CbHUKvme.js";const m=JSON.parse('{"title":"Q & A","description":"","frontmatter":{"title":"Q & A","hidden":true},"headers":[],"relativePath":"interview/hidden.md","filePath":"interview/hidden.md","lastUpdated":1721638270000}'),s={name:"interview/hidden.md"},t=l('<h2 id="简历中所说的-cli-是什么" tabindex="-1">简历中所说的 cli 是什么 <a class="header-anchor" href="#简历中所说的-cli-是什么" aria-label="Permalink to &quot;简历中所说的 cli 是什么&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>一个主站系统包含了很多业务模板。在开发中，每个业务模块就单独创建一个工程，也是一个单独的 Repo，单独管理和发布部署。集成到主站的方式就是打包成指定格式的 js, css 及其它静态资源。我们把这样一个工程叫做接入域。</p><p>而这个 cli 就是用来创建和管理这些接入域工程的，包含的功能有像 vue-cli，create-react-app 类似的创建接入域工程，更新接入域中的 sdk ， 批量运行工程（根据mainfest.xml） 根据代码中的 url 生成文件等。 整体来说就是完成一些重复的工作</p></p></details><h2 id="简历中所说的-library-是什么" tabindex="-1">简历中所说的 library 是什么 <a class="header-anchor" href="#简历中所说的-library-是什么" aria-label="Permalink to &quot;简历中所说的 library 是什么&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>一个主站系统包含了很多业务模板。在开发中，每个业务模块就单独创建一个工程，也是一个单独的 Repo，单独管理和发布部署。集成到主站的方式就是打包成指定格式的 js, css 及其它静态资源。我们把这样一个工程叫做接入域。</p><p>每个接入域要正常集成到主站中，要额外的做一些修改，比如修改路由注册的方式，以及有一些可能公用的模块或组件，library 就是这样的一个sdk。它还提供了一些基础依赖，比如 vue 。</p><p>这个 sdk 是 umd 格式的，其中包含一个立即执行函数，一但被引用就被调用。 这个函数的功能包括 mock 登录，注册路由等等。</p><p>而对应的引用方式是可以直接在 script 标签中引用 或者通过 commonjs 的 requireJs (这里原本想用 Vite 打包成 esm 的，但是由于 vite 打的包不能接入qiankun， 虽然后面出了一个插件但是没有再研究 )， 它将被定义成一个全局变量，然后不管是 webpack 还是 vite 都有额外的配置或插件可以使得在代码中可以向其它依赖包一样正常使用其中的工具或组件</p></p></details><h2 id="简历中所说的-架构-是什么" tabindex="-1">简历中所说的 架构 是什么 <a class="header-anchor" href="#简历中所说的-架构-是什么" aria-label="Permalink to &quot;简历中所说的 架构 是什么&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>就是前面所说的 sdk , cli, 以及对应的使用文档，我是采用的 VitePress 搭建的 类似element-plus, antd 的源码，也是采用的 monorepo 的模式</p></p></details><h2 id="说说浏览器引擎" tabindex="-1">说说浏览器引擎 <a class="header-anchor" href="#说说浏览器引擎" aria-label="Permalink to &quot;说说浏览器引擎&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>现在大家所说的浏览器内核通常是渲染引擎也叫排版引擎、解释引擎</p><p>内核负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。JS 引擎则是解析 Javascript 语言，执行 javascript 语言来实现网页的动态效果</p><p>v8 是由 c++ 编写， 而 JaegerMonkey 是由 c/c++ 混合编写的。 v8 的性能比 JaegerMonkey出色，而且异步非阻塞IO的V8性能优势非常大。它们的 GC 都是分代式回收，v8 引擎还有 hidden。 另外它们的 jit 编译有所不同， v8 抛弃了字节码。</p><p>blink 是现在谷歌浏览器以及欧朋浏览器使用的渲染引擎，而 blink 是基于 Webkit 开发的。并且谷歌在之前也是使用的 Webkit 引擎，并且 Webkit 最开始是由 苹果开发的。</p><p>blink 目前的区别：</p><ol><li><p>跨进程的 iframe(out-of-process iframes)：为 iframes 内容创建单独的沙箱进程来渲染它们</p></li><li><p>将 DOM 移入 JavaScript 中，这样 JavaScript 可以更快的访问 DOM</p></li></ol></p></details><h2 id="工作中比较有成就感的事情" tabindex="-1">工作中比较有成就感的事情 <a class="header-anchor" href="#工作中比较有成就感的事情" aria-label="Permalink to &quot;工作中比较有成就感的事情&quot;">​</a></h2><details><summary><b>答案</b></summary><p><ul><li>小程序（微信生态）</li><li>后端接口的缓存器（Redis实现）</li><li>参与后端接口优化（数据库层面）</li><li>升级 vue 版本，并制定相关规范， 搭建文档中心</li><li>vite(create-vue) 还是 webpack(vue-cli) 打包 sdk</li><li>自定义 bpmn-js 的属性控制面板</li></ul></p></details><h2 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-label="Permalink to &quot;优化&quot;">​</a></h2><details><summary><b>答案</b></summary><p><p>有用户体验方面的优化：</p><ul><li>v-lazy指令</li><li>script的refer async 属性</li><li>gzip缓存，浏览器缓存等等</li><li>虚拟列表</li><li>preload</li></ul><p>有从编码规范带来的优化</p><ul><li>v8的快慢属性</li></ul><p>也有提升开发效率的优化：</p><ul><li>开发cli工具，给团队赋能</li><li>开发同步cookie插件，提升开发效率</li><li>打包速度等等，使用 HappyPack ParallelUglifyPlugin 等插件</li></ul></p></details><h2 id="遇到了哪些问题-如何解决" tabindex="-1">遇到了哪些问题，如何解决？ <a class="header-anchor" href="#遇到了哪些问题-如何解决" aria-label="Permalink to &quot;遇到了哪些问题，如何解决？&quot;">​</a></h2><details><summary><b>答案</b></summary><p><ul><li><p>NodeJS 环境中怎么获取某个npm包的最新版本？</p><p>使用 fetch 查询 cdn 中的 packge.json 文件</p></li><li><p>BPMN 自定义属性操作面板</p><p>翻源码，用 react jsx， 模拟实现一个 plugin</p></li><li><p>开发 create-app 原本使用esm + esBuild 打包的架构，但是 esBuild 不能解析 <code>import.meta.url</code></p><p>还是改成了使用CommonJS</p></li><li><p>cli 中判断 sdk 的版本实际只需要读取一个version文件就行，怎么避免把整个 repo clone 下来</p><p><code>git archive</code> 导出指定目录 zip 格式，然后解压</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">execute</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">`git archive -o ${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tempZipSdkDir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">} --remote &quot;${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">repo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot; &quot;${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">branch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot; &quot;${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">latestSdkPath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&quot;`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> compressing.zip.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">uncompress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tempZipSdkDir, tempSdkDir)</span></span></code></pre></div></li></ul></p></details><h2 id="最近新学到的内容" tabindex="-1">最近新学到的内容？ <a class="header-anchor" href="#最近新学到的内容" aria-label="Permalink to &quot;最近新学到的内容？&quot;">​</a></h2><details><summary><b>答案</b></summary><p><ul><li>scroll snap</li><li>fast-glob</li><li>Deno</li><li>vmin</li><li>字符串的码点和码元</li><li>WebContainer</li></ul></p></details><h2 id="对前端的看法" tabindex="-1">对前端的看法？ <a class="header-anchor" href="#对前端的看法" aria-label="Permalink to &quot;对前端的看法？&quot;">​</a></h2><details><summary><b>答案</b></summary><p><ul><li>deno 做 Python 的工作</li><li>浏览器自己实现虚拟 dom</li><li>WebComponent 抹平框架间的差异</li><li>前端页面就那么多东西，总要做点其他的</li></ul></p></details>',18),p=[t];function r(n,d,h,o,c,k){return e(),a("div",null,p)}const b=i(s,[["render",r]]);export{m as __pageData,b as default};