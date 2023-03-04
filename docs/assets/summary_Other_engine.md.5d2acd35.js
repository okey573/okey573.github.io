import{_ as e,c as a,o as i,a as r}from"./app.c6564c1c.js";const n="/docs/images/render-engine.png",u=JSON.parse('{"title":"浏览器引擎","description":"","frontmatter":{"title":"浏览器引擎","outline":[2,6]},"headers":[{"level":2,"title":"js 引擎","slug":"js-引擎","link":"#js-引擎","children":[{"level":3,"title":"v8","slug":"v8","link":"#v8","children":[]},{"level":3,"title":"JaegerMonkey","slug":"jaegermonkey","link":"#jaegermonkey","children":[]},{"level":3,"title":"其他","slug":"其他","link":"#其他","children":[]},{"level":3,"title":"参考","slug":"参考","link":"#参考","children":[]}]},{"level":2,"title":"渲染引擎","slug":"渲染引擎","link":"#渲染引擎","children":[]}],"relativePath":"summary/Other/engine.md","lastUpdated":1677948287000}'),l={name:"summary/Other/engine.md"},t=r('<h1 id="浏览器引擎分为-js-引擎和渲染引擎" tabindex="-1">浏览器引擎分为 js 引擎和渲染引擎 <a class="header-anchor" href="#浏览器引擎分为-js-引擎和渲染引擎" aria-hidden="true">#</a></h1><h2 id="js-引擎" tabindex="-1">js 引擎 <a class="header-anchor" href="#js-引擎" aria-hidden="true">#</a></h2><h3 id="v8" tabindex="-1">v8 <a class="header-anchor" href="#v8" aria-hidden="true">#</a></h3><p>谷歌， nodejs 以及 deno 都是使用的v8引擎，也是使用范围最广的 js 引擎。</p><p>它是用C++编写，实现了ECMAScript和WebAssembly</p><h3 id="jaegermonkey" tabindex="-1">JaegerMonkey <a class="header-anchor" href="#jaegermonkey" aria-hidden="true">#</a></h3><p>Firefox 目前使用的引擎，前身是 java 编写的 SpiderMonkey</p><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-hidden="true">#</a></h3><p>ie 使用的Chakra (JScript引擎)，中文译名为查克拉</p><h3 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h3><p><a href="https://www.wangshaoxing.com/blog/javascript-engines.html" target="_blank" rel="noreferrer">https://www.wangshaoxing.com/blog/javascript-engines.html</a></p><h2 id="渲染引擎" tabindex="-1">渲染引擎 <a class="header-anchor" href="#渲染引擎" aria-hidden="true">#</a></h2><p>主流： Gecko、Trident、Webkit、Blink、Chromium</p><ul><li>1997年 Trident</li><li>1998年 KHTML</li><li>2000年 Gecko</li><li>2001年 WebKit</li><li>2003年 Presto</li><li>2008年 Chromium</li><li>2010年 混合引擎(双核）</li><li>2013年 Blink</li><li>2015年 EdgeHtml</li></ul><p>火狐：Gecko 谷歌：Blink Edge：EdgeHTML 后来改用 Chromium</p><p><img src="'+n+'" alt="关系图"></p>',16),s=[t];function h(d,o,c,p,g,m){return i(),a("div",null,s)}const k=e(l,[["render",h]]);export{u as __pageData,k as default};
