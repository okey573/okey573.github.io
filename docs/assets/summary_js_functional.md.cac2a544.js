import{_ as e,o as a,c as r,a as i}from"./app.3cc47310.js";const f=JSON.parse('{"title":"函数式编程","description":"","frontmatter":{"title":"函数式编程"},"headers":[{"level":2,"title":"纯函数","slug":"纯函数","link":"#纯函数","children":[]},{"level":2,"title":"pipe","slug":"pipe","link":"#pipe","children":[]},{"level":2,"title":"compose","slug":"compose","link":"#compose","children":[]},{"level":2,"title":"curry","slug":"curry","link":"#curry","children":[]},{"level":2,"title":"container & functor","slug":"container-functor","link":"#container-functor","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"relativePath":"summary/js/functional.md","lastUpdated":1679993466000}'),t={name:"summary/js/functional.md"},n=i('<h1 id="函数式编程" tabindex="-1">函数式编程 <a class="header-anchor" href="#函数式编程" aria-hidden="true">#</a></h1><h2 id="纯函数" tabindex="-1">纯函数 <a class="header-anchor" href="#纯函数" aria-hidden="true">#</a></h2><p>不会产生副作用，对于相同的参数每次执行结果都一样。例如 splice 和 slice 来说， splice 就不是纯函数， slice 是纯函数</p><h2 id="pipe" tabindex="-1">pipe <a class="header-anchor" href="#pipe" aria-hidden="true">#</a></h2><p>返回一个函数，参数是多个函数。返回的函数被调用时，参数函数从左到右执行</p><h2 id="compose" tabindex="-1">compose <a class="header-anchor" href="#compose" aria-hidden="true">#</a></h2><p>返回一个函数，参数是多个函数。返回的函数被调用时，参数函数从右到左执行</p><h2 id="curry" tabindex="-1">curry <a class="header-anchor" href="#curry" aria-hidden="true">#</a></h2><p>只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数</p><h2 id="container-functor" tabindex="-1">container &amp; functor <a class="header-anchor" href="#container-functor" aria-hidden="true">#</a></h2><p>产生一种对应的新数据结构，对数据封装，只能在容器内操作数据</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-hidden="true">#</a></h2><ul><li><a href="https://cheogo.github.io/learn-javascript/201710/functional.html" target="_blank" rel="noreferrer">JavaScript 函数式编程</a></li></ul>',13),c=[n];function l(o,h,s,d,p,u){return a(),r("div",null,c)}const m=e(t,[["render",l]]);export{f as __pageData,m as default};