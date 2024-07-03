import{_ as t,c as e,o as a,a4 as c}from"./chunks/framework.CbHUKvme.js";const w=JSON.parse('{"title":"computed 和 watch","description":"","frontmatter":{"title":"computed 和 watch"},"headers":[],"relativePath":"summary/vue/computed-watch.md","filePath":"summary/vue/computed-watch.md","lastUpdated":1719972587000}'),l={name:"summary/vue/computed-watch.md"},d=c('<h1 id="computed-和-watch" tabindex="-1">computed 和 watch <a class="header-anchor" href="#computed-和-watch" aria-label="Permalink to &quot;computed 和 watch&quot;">​</a></h1><h2 id="computed-和-watch-的区别" tabindex="-1">computed 和 watch 的区别 <a class="header-anchor" href="#computed-和-watch-的区别" aria-label="Permalink to &quot;computed 和 watch 的区别&quot;">​</a></h2><h4 id="computed" tabindex="-1">computed <a class="header-anchor" href="#computed" aria-label="Permalink to &quot;computed&quot;">​</a></h4><ul><li>是计算值</li><li>需要主动调用</li><li>不支持异步</li><li>不应该具有副作用（改变程序里的状态）</li><li>具有缓存能力只有数据再次改变才会重新渲染，否则就会直接拿取缓存中的数据。</li></ul><h4 id="watch" tabindex="-1">watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;watch&quot;">​</a></h4><ul><li>是观察的动作</li><li>不需要主动调用</li><li>支持异步</li><li>可以具有副作用</li><li>监听数据必须是data中声明过或者父组件传递过来的props中的数据。可以配合computed使用。完成异步或同步任务</li></ul><h2 id="watch和watcheffect" tabindex="-1">watch和watchEffect <a class="header-anchor" href="#watch和watcheffect" aria-label="Permalink to &quot;watch和watchEffect&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">对比</th><th style="text-align:center;">是否惰性</th><th style="text-align:center;">参数</th><th style="text-align:center;">获得值</th></tr></thead><tbody><tr><td style="text-align:center;">watch</td><td style="text-align:center;">有惰性，数值再次改变后执行监听函数</td><td style="text-align:center;">可以侦听多个数据的变</td><td style="text-align:center;">参数可以拿到当前值和原始值</td></tr><tr><td style="text-align:center;">watchEffect</td><td style="text-align:center;">立即执行没有惰性，至少会执行一次</td><td style="text-align:center;">不需要传递侦听内容，自动感知代码依赖</td><td style="text-align:center;">不需要传递到很多参数，不能获取原始值，返回一个stop函数</td></tr></tbody></table>',8),h=[d];function i(r,o,n,s,u,m){return a(),e("div",null,h)}const _=t(l,[["render",i]]);export{w as __pageData,_ as default};
