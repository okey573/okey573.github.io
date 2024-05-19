import{_ as e,c as t,o as a,a4 as r}from"./chunks/framework.CbHUKvme.js";const m=JSON.parse('{"title":"合成事件","description":"","frontmatter":{"title":"合成事件","lastUpdate":"Wed May 08 2024 14:57:31 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/react/synthetic-event.md","filePath":"summary/react/synthetic-event.md","lastUpdated":1716126023000}'),n={name:"summary/react/synthetic-event.md"},i=r('<h1 id="合成事件-syntheticevent" tabindex="-1">合成事件 (SyntheticEvent) <a class="header-anchor" href="#合成事件-syntheticevent" aria-label="Permalink to &quot;合成事件 (SyntheticEvent)&quot;">​</a></h1><p>React 基于浏览器的事件机制自身实现了一套事件机制，包括事件注册、事件的合成、事件冒泡、事件派发等，这套事件机制被称之为合成事件。之所以要封装自己的一套事件机制，目的是为了实现全浏览器的一致性，抹平不同浏览器之间的差异性。</p><h2 id="实现机制" tabindex="-1">实现机制 <a class="header-anchor" href="#实现机制" aria-label="Permalink to &quot;实现机制&quot;">​</a></h2><p>在 React 底层，主要对合成事件做了两件事：事件委派 和 自动绑定。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://juejin.cn/post/6991645668934680584" target="_blank" rel="noreferrer">浅谈React合成事件</a></p></li><li><p><a href="https://tsejx.github.io/react-guidebook/foundation/advanced-guides/synthetic-event/" target="_blank" rel="noreferrer">合成事件</a></p></li></ul>',6),s=[i];function c(o,h,l,d,_,p){return a(),t("div",null,s)}const f=e(n,[["render",c]]);export{m as __pageData,f as default};
