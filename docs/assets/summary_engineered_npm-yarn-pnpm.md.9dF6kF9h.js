import{_ as a,c as n,o as p,a4 as e}from"./chunks/framework.CbHUKvme.js";const k=JSON.parse('{"title":"npm yarn pnpm 发展历程","description":"","frontmatter":{"title":"npm yarn pnpm 发展历程"},"headers":[],"relativePath":"summary/engineered/npm-yarn-pnpm.md","filePath":"summary/engineered/npm-yarn-pnpm.md","lastUpdated":1716540100000}'),r={name:"summary/engineered/npm-yarn-pnpm.md"},m=e('<p><em>从上往下按发布时间排序</em></p><h4 id="npm-v1-npm-v2" tabindex="-1">npm v1 / npm v2 <a class="header-anchor" href="#npm-v1-npm-v2" aria-label="Permalink to &quot;npm v1 / npm v2&quot;">​</a></h4><p>不足：依赖包嵌套的问题，导致 node_modules 体积越来越大；没有cahce，没有离线功能</p><h4 id="npm-v3" tabindex="-1">npm v3 <a class="header-anchor" href="#npm-v3" aria-label="Permalink to &quot;npm v3&quot;">​</a></h4><p>peerDependencies不再导致隐式安装任何东西。如果缺少包 peerDependencies，npm会发出警告；</p><p>扁平化 node_modules</p><h4 id="pnpm-发布-默默无名" tabindex="-1">pnpm 发布（默默无名） <a class="header-anchor" href="#pnpm-发布-默默无名" aria-label="Permalink to &quot;pnpm 发布（默默无名）&quot;">​</a></h4><h4 id="yarn-发布初始版本-kpm" tabindex="-1">yarn 发布初始版本（kpm） <a class="header-anchor" href="#yarn-发布初始版本-kpm" aria-label="Permalink to &quot;yarn 发布初始版本（kpm）&quot;">​</a></h4><p>lockfiles(yarn.lock)</p><p>与 npm 和 bower 工作流程兼容</p><p>更加语义化</p><p>更加简洁，可读的cli输出</p><p>各指标超越npm</p><h4 id="npm-v4" tabindex="-1">npm v4 <a class="header-anchor" href="#npm-v4" aria-label="Permalink to &quot;npm v4&quot;">​</a></h4><p>npm-shrinkwrap.json确保你在其中指定的模块完全按照指定的内容安装（package-lock.json前身）</p><h4 id="npm-v5" tabindex="-1">npm v5 <a class="header-anchor" href="#npm-v5" aria-label="Permalink to &quot;npm v5&quot;">​</a></h4><p>package-lock.json默认生成，并兼容npm-shrinkwrap.json</p><p>重构npm-cache，提升下载速度</p><p>对离线模式及缓存安装进行了优化</p><h4 id="npm-v5-2" tabindex="-1">npm v5.2 <a class="header-anchor" href="#npm-v5-2" aria-label="Permalink to &quot;npm v5.2&quot;">​</a></h4><p>发布npx命令</p><h4 id="yarn-1-0-0发布" tabindex="-1">yarn@1.0.0发布 <a class="header-anchor" href="#yarn-1-0-0发布" aria-label="Permalink to &quot;yarn@1.0.0发布&quot;">​</a></h4><p>Yarn Workspaces 更加友好。它可以让人们自动聚合来自多个 package.json 文件的所有依赖项，并一次性安装它们。</p><p>根目录使用单个 yarn.lock 文件，将它们全部锁定。</p><p>Yarn 将在碰巧相互依赖的所有工作区之间创建符号链接，以便最终在所有项目中始终使用最新的代码。</p><h4 id="npm-v6" tabindex="-1">npm v6 <a class="header-anchor" href="#npm-v6" aria-label="Permalink to &quot;npm v6&quot;">​</a></h4><p>发布npm init</p><h4 id="pnpm-1-0-0发布" tabindex="-1">pnpm@1.0.0发布 <a class="header-anchor" href="#pnpm-1-0-0发布" aria-label="Permalink to &quot;pnpm@1.0.0发布&quot;">​</a></h4><p>节约磁盘空间并提升安装速度，解决依赖分身（doppelgangers）的问题</p><p>创建非扁平化的 node_modules 文件夹，软连接结构，解决幽灵依赖的问题</p><h4 id="pnpm-2-0-0发布" tabindex="-1">pnpm@2.0.0发布 <a class="header-anchor" href="#pnpm-2-0-0发布" aria-label="Permalink to &quot;pnpm@2.0.0发布&quot;">​</a></h4><h4 id="pnpm-3-0-0发布" tabindex="-1">pnpm@3.0.0发布 <a class="header-anchor" href="#pnpm-3-0-0发布" aria-label="Permalink to &quot;pnpm@3.0.0发布&quot;">​</a></h4><h4 id="pnpm-4-0-0发布" tabindex="-1">pnpm@4.0.0发布 <a class="header-anchor" href="#pnpm-4-0-0发布" aria-label="Permalink to &quot;pnpm@4.0.0发布&quot;">​</a></h4><p>修复bug、优化性能、提高兼容性</p><h4 id="yarn-2-0-0" tabindex="-1">yarn 2.0.0 <a class="header-anchor" href="#yarn-2-0-0" aria-label="Permalink to &quot;yarn 2.0.0&quot;">​</a></h4><p>可读性更高的 CLI 输出</p><p>更好的 workspaces 支持</p><p>yarn dlx（与 npx 类似）</p><h4 id="pnpm-5-0-0发布" tabindex="-1">pnpm@5.0.0发布 <a class="header-anchor" href="#pnpm-5-0-0发布" aria-label="Permalink to &quot;pnpm@5.0.0发布&quot;">​</a></h4><h4 id="npm-v7-支持workspaces概念" tabindex="-1">npm v7 支持workspaces概念 <a class="header-anchor" href="#npm-v7-支持workspaces概念" aria-label="Permalink to &quot;npm v7 支持workspaces概念&quot;">​</a></h4><p>自动安装peerDependencies中的依赖</p><h4 id="pnpm-6-0-0发布" tabindex="-1">pnpm@6.0.0发布 <a class="header-anchor" href="#pnpm-6-0-0发布" aria-label="Permalink to &quot;pnpm@6.0.0发布&quot;">​</a></h4><h4 id="yarn-3-0-0发布" tabindex="-1">yarn@3.0.0发布 <a class="header-anchor" href="#yarn-3-0-0发布" aria-label="Permalink to &quot;yarn@3.0.0发布&quot;">​</a></h4><p>支持 node 的exports字段</p><p>不再支持 Node 10</p><h4 id="npm-v8" tabindex="-1">npm v8 <a class="header-anchor" href="#npm-v8" aria-label="Permalink to &quot;npm v8&quot;">​</a></h4><p>不再支持node10, node11</p><p>不再支持require(&#39;npm&#39;)</p>',48),o=[m];function t(h,i,l,s,d,c){return p(),n("div",null,o)}const b=a(r,[["render",t]]);export{k as __pageData,b as default};
