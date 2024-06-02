import{_ as e,c as r,o as a,a4 as o}from"./chunks/framework.CbHUKvme.js";const h=JSON.parse('{"title":"WebWorker","description":"","frontmatter":{"title":"WebWorker"},"headers":[],"relativePath":"summary/api/web-worker.md","filePath":"summary/api/web-worker.md","lastUpdated":1717299184000}'),t={name:"summary/api/web-worker.md"},i=o('<h1 id="webworker" tabindex="-1">WebWorker <a class="header-anchor" href="#webworker" aria-label="Permalink to &quot;WebWorker&quot;">​</a></h1><p>Javascript是运行在单线程环境中，也就是说无法同时运行多个脚本。假设用户点击一个按钮，触发了一段用于计算的Javascript代码，那么在这段代码执行完毕之前，页面是无法响应用户操作的。但是，如果将这段代码交给Web Worker去运行的话，那么情况就不一样了：浏览器会在后台启动一个独立的worker线程来专门负责这段代码的运行，因此，页面在这段Javascript代码运行期间依然可以响应用户的其他操作</p><h2 id="webworker-线程数据通讯方式" tabindex="-1">WebWorker 线程数据通讯方式 <a class="header-anchor" href="#webworker-线程数据通讯方式" aria-label="Permalink to &quot;WebWorker 线程数据通讯方式&quot;">​</a></h2><p>Worker 与其主页面之间的通信是通过 onmessage 事件和 postMessage() 方法实现的</p><h2 id="webworker-适合使用的场景" tabindex="-1">WebWorker 适合使用的场景 <a class="header-anchor" href="#webworker-适合使用的场景" aria-label="Permalink to &quot;WebWorker 适合使用的场景&quot;">​</a></h2><ul><li>加密数据</li><li>预取数据</li><li>预渲染</li><li>复杂数据处理场景</li><li>预加载图片</li></ul>',6),s=[i];function l(c,n,_,k,b,d){return a(),r("div",null,s)}const w=e(t,[["render",l]]);export{h as __pageData,w as default};
