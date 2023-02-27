import{_ as e,c as a,o as t,a as r}from"./app.0748e82a.js";const k=JSON.parse('{"title":"keep-alive","description":"","frontmatter":{"title":"keep-alive","outline":[2,6]},"headers":[{"level":2,"title":"\u4F5C\u7528","slug":"\u4F5C\u7528","link":"#\u4F5C\u7528","children":[]},{"level":2,"title":"\u58F0\u660E\u5468\u671F","slug":"\u58F0\u660E\u5468\u671F","link":"#\u58F0\u660E\u5468\u671F","children":[]},{"level":2,"title":"\u5305\u542B/\u6392\u9664","slug":"\u5305\u542B-\u6392\u9664","link":"#\u5305\u542B-\u6392\u9664","children":[]},{"level":2,"title":"\u539F\u7406","slug":"\u539F\u7406","link":"#\u539F\u7406","children":[]}],"relativePath":"summary/Vue/keep-alive.md","lastUpdated":1677489973000}'),d={name:"summary/Vue/keep-alive.md"},i=r('<p>vue\u7684\u5185\u7F6E\u7EC4\u4EF6<a href="https://cn.vuejs.org/guide/built-ins/keep-alive.html#keepalive" target="_blank" rel="noreferrer"><code>keep-alive</code></a></p><h2 id="\u4F5C\u7528" tabindex="-1">\u4F5C\u7528 <a class="header-anchor" href="#\u4F5C\u7528" aria-hidden="true">#</a></h2><p>keep-alive\u7684\u4F5C\u7528\u662F\u591A\u4E2A\u7EC4\u4EF6\u95F4\u52A8\u6001\u5207\u6362\u65F6\u7F13\u5B58\u88AB\u79FB\u9664\u7684\u7EC4\u4EF6\u5B9E\u4F8B</p><h2 id="\u58F0\u660E\u5468\u671F" tabindex="-1">\u58F0\u660E\u5468\u671F <a class="header-anchor" href="#\u58F0\u660E\u5468\u671F" aria-hidden="true">#</a></h2><p>keep-alive\u7EC4\u4EF6\u4F1A\u589E\u52A0\u4E24\u4E2A\u751F\u547D\u5468\u671F\uFF1Aactivated\u548Cdeactivated</p><p>\u82E5\u5F53\u524D\u7EC4\u4EF6\u52A0\u5165\u4E86keep-alive</p><p>\u7B2C\u4E00\u6B21\u8FDB\u5165\u8FD9\u4E2A\u7EC4\u4EF6\u4F1A\u6267\u884CbeforeCreate\u3001created\u3001beforeMount\u3001mounted\u548Cactivated\u4E94\u4E2A\u751F\u547D\u5468\u671F</p><p>\u7B2C\u4E8C\u6B21\u6216\u8005\u7B2CN\u6B21\u8FDB\u53BB\u7EC4\u4EF6\u53EA\u4F1A\u6267\u884C\u4E00\u4E2A\u751F\u547D\u5468\u671Factivated</p><h2 id="\u5305\u542B-\u6392\u9664" tabindex="-1">\u5305\u542B/\u6392\u9664 <a class="header-anchor" href="#\u5305\u542B-\u6392\u9664" aria-hidden="true">#</a></h2><p>keep-alive\u9ED8\u8BA4\u4F1A\u7F13\u5B58\u5185\u90E8\u7684\u6240\u6709\u7EC4\u4EF6\u5B9E\u4F8B\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 include \u548C exclude prop \u6765\u5B9A\u5236\u8BE5\u884C\u4E3A</p><h2 id="\u539F\u7406" tabindex="-1">\u539F\u7406 <a class="header-anchor" href="#\u539F\u7406" aria-hidden="true">#</a></h2><p>\u5B9A\u4E49\u4E00\u4E2AKeepAlive\u7EC4\u4EF6\uFF0C\u5B9A\u4E49\u4E86\u4E00\u4E2Aabstract\u5C5E\u6027\uFF0Cprops\u63A5\u53D7\u6240\u6709\u652F\u6301\u7684\u53C2\u6570</p><p>keep-alive\u5728\u5B83\u751F\u547D\u5468\u671F\u5185\u5B9A\u4E49\u4E86\u4E09\u4E2A\u94A9\u5B50\u51FD\u6570\uFF1A</p><h4 id="created" tabindex="-1">created <a class="header-anchor" href="#created" aria-hidden="true">#</a></h4><p>\u521D\u59CB\u5316\u4E24\u4E2A\u5BF9\u8C61\u5206\u522B\u7F13\u5B58VNode\uFF08\u865A\u62DFDOM\uFF09\u548CVNode\u5BF9\u5E94\u7684\u952E\u96C6\u5408</p><h4 id="destroyed" tabindex="-1">destroyed <a class="header-anchor" href="#destroyed" aria-hidden="true">#</a></h4><p>\u5220\u9664this.cache\u4E2D\u7F13\u5B58\u7684VNode\u5B9E\u4F8B\u3002\u6211\u4EEC\u7559\u610F\u5230\uFF0C\u8FD9\u91CC\u4E0D\u662F\u7B80\u5355\u5730\u5C06this.cache\u7F6E\u4E3Anull\uFF0C\u800C\u662F\u904D\u5386\u8C03\u7528pruneCacheEntry\u51FD\u6570\u5220\u9664\u3002</p><p>\u5220\u9664\u7F13\u5B58VNode\u8FD8\u8981\u5BF9\u5E94\u6267\u884C\u7EC4\u4EF6\u5B9E\u4F8B\u7684destory\u94A9\u5B50\u51FD\u6570\u3002</p><h4 id="mounted" tabindex="-1">mounted <a class="header-anchor" href="#mounted" aria-hidden="true">#</a></h4><p>\u5728mounted\u8FD9\u4E2A\u94A9\u5B50\u4E2D\u5BF9include\u548Cexclude\u53C2\u6570\u8FDB\u884C\u76D1\u542C\uFF0C\u7136\u540E\u5B9E\u65F6\u5730\u66F4\u65B0\uFF08\u5220\u9664\uFF09this.cache\u5BF9\u8C61\u6570\u636E\u3002pruneCache\u51FD\u6570\u7684\u6838\u5FC3\u4E5F\u662F\u53BB\u8C03\u7528pruneCacheEntry\u3002</p><h4 id="render" tabindex="-1">render <a class="header-anchor" href="#render" aria-hidden="true">#</a></h4><ul><li>\u7B2C\u4E00\u6B65\uFF1A\u83B7\u53D6keep-alive\u5305\u88F9\u7740\u7684\u7B2C\u4E00\u4E2A\u5B50\u7EC4\u4EF6\u5BF9\u8C61\u53CA\u5176\u7EC4\u4EF6\u540D\uFF1B</li><li>\u7B2C\u4E8C\u6B65\uFF1A\u6839\u636E\u8BBE\u5B9A\u7684\u9ED1\u767D\u540D\u5355\uFF08\u5982\u679C\u6709\uFF09\u8FDB\u884C\u6761\u4EF6\u5339\u914D\uFF0C\u51B3\u5B9A\u662F\u5426\u7F13\u5B58\u3002\u4E0D\u5339\u914D\uFF0C\u76F4\u63A5\u8FD4\u56DE\u7EC4\u4EF6\u5B9E\u4F8B\uFF08VNode\uFF09\uFF0C\u5426\u5219\u6267\u884C\u7B2C\u4E09\u6B65\uFF1B</li><li>\u7B2C\u4E09\u6B65\uFF1A\u6839\u636E\u7EC4\u4EF6ID\u548Ctag\u751F\u6210\u7F13\u5B58Key\uFF0C\u5E76\u5728\u7F13\u5B58\u5BF9\u8C61\u4E2D\u67E5\u627E\u662F\u5426\u5DF2\u7F13\u5B58\u8FC7\u8BE5\u7EC4\u4EF6\u5B9E\u4F8B\u3002\u5982\u679C\u5B58\u5728\uFF0C\u76F4\u63A5\u53D6\u51FA\u7F13\u5B58\u503C\u5E76\u66F4\u65B0\u8BE5key\u5728this.keys\u4E2D\u7684\u4F4D\u7F6E\uFF08\u66F4\u65B0key\u7684\u4F4D\u7F6E\u662F\u5B9E\u73B0LRU\u7F6E\u6362\u7B56\u7565\u7684\u5173\u952E\uFF09\uFF0C\u5426\u5219\u6267\u884C\u7B2C\u56DB\u6B65\uFF1B</li><li>\u7B2C\u56DB\u6B65\uFF1A\u5728this.cache\u5BF9\u8C61\u4E2D\u5B58\u50A8\u8BE5\u7EC4\u4EF6\u5B9E\u4F8B\u5E76\u4FDD\u5B58key\u503C\uFF0C\u4E4B\u540E\u68C0\u67E5\u7F13\u5B58\u7684\u5B9E\u4F8B\u6570\u91CF\u662F\u5426\u8D85\u8FC7max\u7684\u8BBE\u7F6E\u503C\uFF0C\u8D85\u8FC7\u5219\u6839\u636ELRU\u7F6E\u6362\u7B56\u7565\u5220\u9664\u6700\u8FD1\u6700\u4E45\u672A\u4F7F\u7528\u7684\u5B9E\u4F8B\uFF08\u5373\u662F\u4E0B\u6807\u4E3A0\u7684\u90A3\u4E2Akey\uFF09\u3002</li><li>\u7B2C\u4E94\u6B65\uFF1A\u6700\u540E\u5E76\u4E14\u5F88\u91CD\u8981\uFF0C\u5C06\u8BE5\u7EC4\u4EF6\u5B9E\u4F8B\u7684keepAlive\u5C5E\u6027\u503C\u8BBE\u7F6E\u4E3Atrue\u3002</li></ul><h4 id="\u4E0D\u751F\u6210\u771F\u6B63\u7684dom\u8282\u70B9" tabindex="-1">\u4E0D\u751F\u6210\u771F\u6B63\u7684dom\u8282\u70B9 <a class="header-anchor" href="#\u4E0D\u751F\u6210\u771F\u6B63\u7684dom\u8282\u70B9" aria-hidden="true">#</a></h4><p>Vue\u5728\u521D\u59CB\u5316\u751F\u547D\u5468\u671F\u7684\u65F6\u5019\uFF0C\u4E3A\u7EC4\u4EF6\u5B9E\u4F8B\u5EFA\u7ACB\u7236\u5B50\u5173\u7CFB\u4F1A\u6839\u636Eabstract\u5C5E\u6027\u51B3\u5B9A\u662F\u5426\u5FFD\u7565\u67D0\u4E2A\u7EC4\u4EF6\u3002\u5728keep-alive\u4E2D\uFF0C\u8BBE\u7F6E\u4E86abstract: true\uFF0C\u90A3Vue\u5C31\u4F1A\u8DF3\u8FC7\u8BE5\u7EC4\u4EF6\u5B9E\u4F8B\u3002</p><h4 id="\u53EA\u6267\u884C\u4E00\u6B21\u7684\u94A9\u5B50\u51FD\u6570" tabindex="-1">\u53EA\u6267\u884C\u4E00\u6B21\u7684\u94A9\u5B50\u51FD\u6570 <a class="header-anchor" href="#\u53EA\u6267\u884C\u4E00\u6B21\u7684\u94A9\u5B50\u51FD\u6570" aria-hidden="true">#</a></h4><p>\u5F53vnode.componentInstance\u548CkeepAlive\u540C\u65F6\u4E3Atruly\u503C\u65F6\uFF0C\u4E0D\u518D\u8FDB\u5165$mount\u8FC7\u7A0B\uFF0C\u90A3mounted\u4E4B\u524D\u7684\u6240\u6709\u94A9\u5B50\u51FD\u6570\uFF08beforeCreate\u3001created\u3001mounted\uFF09\u90FD\u4E0D\u518D\u6267\u884C\u3002</p>',26),l=[i];function n(h,c,p,o,s,u){return t(),a("div",null,l)}const _=e(d,[["render",n]]);export{k as __pageData,_ as default};