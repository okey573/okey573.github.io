import{_ as e,c as t,o as a,a4 as r}from"./chunks/framework.CbHUKvme.js";const _=JSON.parse('{"title":"vite","description":"","frontmatter":{"title":"vite"},"headers":[],"relativePath":"summary/bundler/vite.md","filePath":"summary/bundler/vite.md","lastUpdated":1718849887000}'),i={name:"summary/bundler/vite.md"},l=r('<h1 id="vite" tabindex="-1"><a href="https://cn.vitejs.dev/" target="_blank" rel="noreferrer">Vite</a> <a class="header-anchor" href="#vite" aria-label="Permalink to &quot;[Vite](https://cn.vitejs.dev/)&quot;">​</a></h1><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><blockquote><p>Vite 是一种新型前端构建工具，能够显著提升前端开发体验。它主要由两部分组成：<br>一个开发服务器，它基于 原生 ES 模块 提供了 丰富的内建功能，如速度快到惊人的 模块热更新（HMR）。<br>一套构建指令，它使用 Rollup 打包你的代码，并且它是预配置的，可输出用于生产环境的高度优化过的静态资源。</p></blockquote><h2 id="和-webpack的区别" tabindex="-1">和 Webpack的区别 <a class="header-anchor" href="#和-webpack的区别" aria-label="Permalink to &quot;和 Webpack的区别&quot;">​</a></h2><ul><li>Webpack启动的时候，要根据entry找到所有的依赖模块，然后对代码进行编译、打包、压缩的。所以Webpack是 bundle based dev server</li><li>Vite的核心思想是：利用浏览器的能力，将解析依赖和获取JS模块的工具交给浏览器去做。 <strong>本地服务器支队模块进行基本的transform，减少了分析依赖跟源码打包的成本。</strong> 因此，Vite的原理是Native ESM based dev server</li></ul><h4 id="理解" tabindex="-1">理解 <a class="header-anchor" href="#理解" aria-label="Permalink to &quot;理解&quot;">​</a></h4><p><strong>并不能直接说 Vite 比 Webpack 快。</strong></p><ul><li><p>Vite 启动开发服务非常快，因为是 Native ESM based dev server 的原理，把部分在 webpack 启动时做的工作，交给了浏览器去做了。</p></li><li><p>Vite 首次启动后加载慢。因为模块以 ES6 原生的模块加载机制的方式被浏览器加载，没有对代码进行打包跟压缩处理，因此请求数会更多，下载文件也会更大。</p></li><li><p>Vite 是牺牲了页面首次加载时间来加快项目启动时间，但是仅仅是首次！Vite的第二次启动是会有缓存的。</p></li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://juejin.cn/post/7129041114174062628" target="_blank" rel="noreferrer">为什么有人说 vite 快，有人却说 vite 慢？</a></p></li><li><p><a href="https://github.com/antfu-collective/vite-plugin-inspect" target="_blank" rel="noreferrer">vite-plugin-inspect</a></p></li></ul>',10),n=[l];function o(s,c,p,d,h,u){return a(),t("div",null,n)}const v=e(i,[["render",o]]);export{_ as __pageData,v as default};
