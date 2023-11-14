import{_ as e,o as a,c as r,d as t}from"./app.cab8cfa4.js";const f=JSON.parse('{"title":"模块联邦","description":"","frontmatter":{"title":"模块联邦"},"headers":[{"level":2,"title":"解释","slug":"解释","link":"#解释","children":[]},{"level":2,"title":"用例","slug":"用例","link":"#用例","children":[]},{"level":2,"title":"一些例子","slug":"一些例子","link":"#一些例子","children":[]}],"relativePath":"summary/engineered/module-federation.md","lastUpdated":1699926612000}'),i={name:"summary/engineered/module-federation.md"},d=t('<h1 id="模块联邦" tabindex="-1">模块联邦 <a class="header-anchor" href="#模块联邦" aria-hidden="true">#</a></h1><p>模块联邦(Module Federation)是webpack5推出的新特性。vite现在也有<a href="https://github.com/originjs/vite-plugin-federation" target="_blank" rel="noreferrer">插件</a>支持。也是微前端的一种解决方案。</p><h2 id="解释" tabindex="-1">解释 <a class="header-anchor" href="#解释" aria-hidden="true">#</a></h2><p>模块分为本地模块和远程模块。本地模块即为普通模块，是当前构建的一部分。远程模块不属于当前构建，并在运行时从所谓的容器加载。</p><p>每个构建都充当一个容器，也可将其他构建作为容器。通过这种方式，每个构建都能够通过从对应容器中加载模块来访问其他容器暴露出来的模块。</p><p>共享模块是指既可重写的又可作为向嵌套容器提供重写的模块。它们通常指向每个构建中的相同模块，例如相同的库。</p><h2 id="用例" tabindex="-1">用例 <a class="header-anchor" href="#用例" aria-hidden="true">#</a></h2><h4 id="每个页面单独构建" tabindex="-1">每个页面单独构建 <a class="header-anchor" href="#每个页面单独构建" aria-hidden="true">#</a></h4><p>单页应用的每个页面都是在单独的构建中从容器暴露出来的。主体应用程序(application shell)也是独立构建，会将所有页面作为远程模块来引用。通过这种方式，可以单独部署每个页面。在更新路由或添加新路由时部署主体应用程序。主体应用程序将常用库定义为共享模块，以避免在页面构建中出现重复</p><h4 id="将组件库作为容器" tabindex="-1">将组件库作为容器 <a class="header-anchor" href="#将组件库作为容器" aria-hidden="true">#</a></h4><p>许多应用程序共享一个通用的组件库，可以将其构建成暴露所有组件的容器。每个应用程序使用来自组件库容器的组件。可以单独部署对组件库的更改，而不需要重新部署所有应用程序。应用程序自动使用组件库的最新版本。</p><h4 id="动态远程容器" tabindex="-1">动态远程容器 <a class="header-anchor" href="#动态远程容器" aria-hidden="true">#</a></h4><p>该容器接口支持 get 和 init 方法。 init 是一个兼容 async 的方法，调用时，只含有一个参数：共享作用域对象(shared scope object)。此对象在远程容器中用作共享作用域，并由 host 提供的模块填充。 可以利用它在运行时动态地将远程容器连接到 host 容器。</p><h2 id="一些例子" tabindex="-1">一些例子 <a class="header-anchor" href="#一些例子" aria-hidden="true">#</a></h2><p><a href="https://github.com/module-federation/module-federation-examples" target="_blank" rel="noreferrer">https://github.com/module-federation/module-federation-examples</a></p>',15),n=[d];function h(o,l,s,c,p,u){return a(),r("div",null,n)}const m=e(i,[["render",h]]);export{f as __pageData,m as default};