import{_ as e,c as a,o as t,a4 as r}from"./chunks/framework.CbHUKvme.js";const x=JSON.parse('{"title":"监控","description":"","frontmatter":{"title":"监控","outline":[2,3],"lastUpdated":"Fri May 24 2024 16:27:37 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/engineered/monitor.md","filePath":"summary/engineered/monitor.md","lastUpdated":1717397084000}'),l={name:"summary/engineered/monitor.md"},i=r('<h1 id="监控" tabindex="-1">监控 <a class="header-anchor" href="#监控" aria-label="Permalink to &quot;监控&quot;">​</a></h1><h2 id="前端监控" tabindex="-1">前端监控 <a class="header-anchor" href="#前端监控" aria-label="Permalink to &quot;前端监控&quot;">​</a></h2><h3 id="数据监控-监控用户行为" tabindex="-1">数据监控（监控用户行为） <a class="header-anchor" href="#数据监控-监控用户行为" aria-label="Permalink to &quot;数据监控（监控用户行为）&quot;">​</a></h3><ul><li>PV (page view)：即页面浏览量或点击量</li><li>UV：指访问某个站点或点击某条新闻的不同 IP 地址的人数</li><li>用户在每一个页面的停留时间、触发的行为......</li></ul><h3 id="性能监控-监控页面性能" tabindex="-1">性能监控（监控页面性能） <a class="header-anchor" href="#性能监控-监控页面性能" aria-label="Permalink to &quot;性能监控（监控页面性能）&quot;">​</a></h3><ul><li>FP</li><li>FCP</li><li>DCL</li><li>LCP</li><li>L</li></ul><h3 id="异常监控-监控系统异常" tabindex="-1">异常监控（监控系统异常） <a class="header-anchor" href="#异常监控-监控系统异常" aria-label="Permalink to &quot;异常监控（监控系统异常）&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">方式</th><th style="text-align:center;">特点</th></tr></thead><tbody><tr><td style="text-align:center;">window.onerror</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">window.addEventListener(&#39;error&#39;)</td><td style="text-align:center;">可以全局捕获资源加载异常的错误，会比window.onerror先触发</td></tr><tr><td style="text-align:center;">window.addEventListener(&#39;unhandledrejection&#39;)</td><td style="text-align:center;">捕获 promise reject 异常</td></tr><tr><td style="text-align:center;">框架的 error 生命周期</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">try catch</td><td style="text-align:center;"></td></tr></tbody></table><h4 id="异常处理" tabindex="-1">异常处理 <a class="header-anchor" href="#异常处理" aria-label="Permalink to &quot;异常处理&quot;">​</a></h4><ul><li>sourceMap</li></ul><h2 id="页面埋点" tabindex="-1">页面埋点 <a class="header-anchor" href="#页面埋点" aria-label="Permalink to &quot;页面埋点&quot;">​</a></h2><h3 id="手动埋点" tabindex="-1">手动埋点 <a class="header-anchor" href="#手动埋点" aria-label="Permalink to &quot;手动埋点&quot;">​</a></h3><h3 id="自动埋点" tabindex="-1">自动埋点 <a class="header-anchor" href="#自动埋点" aria-label="Permalink to &quot;自动埋点&quot;">​</a></h3><h2 id="数据上报" tabindex="-1">数据上报 <a class="header-anchor" href="#数据上报" aria-label="Permalink to &quot;数据上报&quot;">​</a></h2><h3 id="image-对象" tabindex="-1">image 对象 <a class="header-anchor" href="#image-对象" aria-label="Permalink to &quot;image 对象&quot;">​</a></h3><h3 id="xhr-和-fetch" tabindex="-1">xhr 和 fetch <a class="header-anchor" href="#xhr-和-fetch" aria-label="Permalink to &quot;xhr 和 fetch&quot;">​</a></h3><h3 id="beacon-api" tabindex="-1">Beacon API <a class="header-anchor" href="#beacon-api" aria-label="Permalink to &quot;Beacon API&quot;">​</a></h3><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://blog.csdn.net/xgangzai/article/details/136668414" target="_blank" rel="noreferrer">如何在线上使用 SourceMap ？</a></p></li><li><p><a href="https://www.51cto.com/article/695341.html" target="_blank" rel="noreferrer">Webpack 实战系列一：正确使用 Sourcemap</a></p></li><li><p><a href="https://juejin.cn/post/7016510600960278565" target="_blank" rel="noreferrer">一文看懂 webpack 的所有 source map ！</a></p></li></ul>',19),n=[i];function o(h,d,c,s,u,m){return t(),a("div",null,n)}const p=e(l,[["render",o]]);export{x as __pageData,p as default};
