import{_ as e,o as i,c as r,a as s}from"./app.ba060fcc.js";const _=JSON.parse('{"title":"Promise","description":"","frontmatter":{"title":"Promise"},"headers":[{"level":2,"title":"Promise\u89E3\u51B3\u7684\u95EE\u9898","slug":"promise\u89E3\u51B3\u7684\u95EE\u9898","link":"#promise\u89E3\u51B3\u7684\u95EE\u9898","children":[]},{"level":2,"title":"Promise\u7684\u72B6\u6001","slug":"promise\u7684\u72B6\u6001","link":"#promise\u7684\u72B6\u6001","children":[]},{"level":2,"title":"Promise\u7684\u4E00\u4E9B\u7279\u6027","slug":"promise\u7684\u4E00\u4E9B\u7279\u6027","link":"#promise\u7684\u4E00\u4E9B\u7279\u6027","children":[]},{"level":2,"title":"Promise A+","slug":"promise-a","link":"#promise-a","children":[]},{"level":2,"title":"\u5B9E\u73B0Promise","slug":"\u5B9E\u73B0promise","link":"#\u5B9E\u73B0promise","children":[]}],"relativePath":"summary/JavaScript/Promise.md","lastUpdated":1676364607000}'),a={name:"summary/JavaScript/Promise.md"},o=s('<h1 id="promise\u662F\u4EC0\u4E48" tabindex="-1">Promise\u662F\u4EC0\u4E48\uFF1F <a class="header-anchor" href="#promise\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h1><p>Promise \u662F\u5F02\u6B65\u7F16\u7A0B\u7684\u4E00\u79CD\u89E3\u51B3\u65B9\u6848\uFF1A \u4ECE\u8BED\u6CD5\u4E0A\u8BB2\uFF0Cpromise\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4ECE\u5B83\u53EF\u4EE5\u83B7\u53D6\u5F02\u6B65\u64CD\u4F5C\u7684\u6D88\u606F</p><h2 id="promise\u89E3\u51B3\u7684\u95EE\u9898" tabindex="-1">Promise\u89E3\u51B3\u7684\u95EE\u9898 <a class="header-anchor" href="#promise\u89E3\u51B3\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><ul><li>\u56DE\u8C03\u5730\u72F1\uFF0C\u4EE3\u7801\u96BE\u4EE5\u7EF4\u62A4\uFF0C \u5E38\u5E38\u7B2C\u4E00\u4E2A\u7684\u51FD\u6570\u7684\u8F93\u51FA\u662F\u7B2C\u4E8C\u4E2A\u51FD\u6570\u7684\u8F93\u5165\u8FD9\u79CD\u73B0\u8C61</li><li>promise\u53EF\u4EE5\u652F\u6301\u591A\u4E2A\u5E76\u53D1\u7684\u8BF7\u6C42\uFF0C\u83B7\u53D6\u5E76\u53D1\u8BF7\u6C42\u4E2D\u7684\u6570\u636E</li><li>\u8FD9\u4E2Apromise\u53EF\u4EE5\u89E3\u51B3\u5F02\u6B65\u7684\u95EE\u9898\uFF0C\u672C\u8EAB\u4E0D\u80FD\u8BF4promise\u662F\u5F02\u6B65\u7684</li></ul><h2 id="promise\u7684\u72B6\u6001" tabindex="-1">Promise\u7684\u72B6\u6001 <a class="header-anchor" href="#promise\u7684\u72B6\u6001" aria-hidden="true">#</a></h2><p>promise \u6709 3 \u4E2A\u72B6\u6001\uFF0C\u5206\u522B\u662F pending, fulfilled \u548C rejected</p><p>\u5728 pending \u72B6\u6001\uFF0Cpromise \u53EF\u4EE5\u5207\u6362\u5230 fulfilled \u6216 rejected</p><p>\u5728 fulfilled \u72B6\u6001\uFF0C\u4E0D\u80FD\u8FC1\u79FB\u5230\u5176\u5B83\u72B6\u6001\uFF0C\u5FC5\u987B\u6709\u4E2A\u4E0D\u53EF\u53D8\u7684 value</p><p>\u5728 rejected \u72B6\u6001\uFF0C\u4E0D\u80FD\u8FC1\u79FB\u5230\u5176\u5B83\u72B6\u6001\uFF0C\u5FC5\u987B\u6709\u4E2A\u4E0D\u53EF\u53D8\u7684 reason</p><h2 id="promise\u7684\u4E00\u4E9B\u7279\u6027" tabindex="-1">Promise\u7684\u4E00\u4E9B\u7279\u6027 <a class="header-anchor" href="#promise\u7684\u4E00\u4E9B\u7279\u6027" aria-hidden="true">#</a></h2><ul><li>Promise\u6784\u9020\u51FD\u6570\u662F\u540C\u6B65\u6267\u884C\u7684\uFF0Cpromise.then\u4E2D\u7684\u51FD\u6570\u662F\u5F02\u6B65\u6267\u884C\u7684</li><li>\u6784\u9020\u51FD\u6570\u4E2D\u7684 resolve \u6216 reject \u53EA\u6709\u7B2C\u4E00\u6B21\u6267\u884C\u6709\u6548\uFF0C\u591A\u6B21\u8C03\u7528\u6CA1\u6709\u4EFB\u4F55\u4F5C\u7528</li><li>promise \u53EF\u4EE5\u94FE\u5F0F\u8C03\u7528\u3002promise \u6BCF\u6B21\u8C03\u7528 .then \u6216\u8005 .catch \u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684 promise\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E86\u94FE\u5F0F\u8C03\u7528</li><li>promise \u7684 .then \u6216\u8005 .catch \u53EF\u4EE5\u88AB\u8C03\u7528\u591A\u6B21\uFF0C\u4F46\u8FD9\u91CC Promise \u6784\u9020\u51FD\u6570\u53EA\u6267\u884C\u4E00\u6B21\u3002\u6216\u8005\u8BF4 promise \u5185\u90E8\u72B6\u6001\u4E00\u7ECF\u6539\u53D8\uFF0C\u5E76\u4E14\u6709\u4E86\u4E00\u4E2A\u503C\uFF0C\u90A3\u4E48\u540E\u7EED\u6BCF\u6B21\u8C03\u7528 .then \u6216\u8005 .catch \u90FD\u4F1A\u76F4\u63A5\u62FF\u5230\u8BE5\u503C</li><li>.then \u6216\u8005 .catch \u4E2D return \u4E00\u4E2A error \u5BF9\u8C61\u5E76\u4E0D\u4F1A\u629B\u51FA\u9519\u8BEF\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u88AB\u540E\u7EED\u7684 .catch \u6355\u83B7\u3002\u53EF\u4EE5\u4F7F\u7528Promise.reject\u6216\u8005throw new Error</li><li>.then \u6216\u8005 .catch \u7684\u53C2\u6570\u671F\u671B\u662F\u51FD\u6570\uFF0C\u4F20\u5165\u975E\u51FD\u6570\u5219\u4F1A\u53D1\u751F\u503C\u7A7F\u900F</li><li>promise.then\u5C5E\u4E8Emicrotask</li></ul><h2 id="promise-a" tabindex="-1">Promise A+ <a class="header-anchor" href="#promise-a" aria-hidden="true">#</a></h2><p>Promise A+ \u662F\u4E00\u4E2A\u89C4\u8303\uFF0C\u53EA\u8981\u662F\u6EE1\u8DB3\u8FD9\u4E2A\u89C4\u8303\u7684\u5BF9\u8C61\uFF0C\u90FD\u53EF\u4EE5\u5F53\u6210ES6\u7684promise\u6765\u4F7F\u7528\uFF0C\u4F8B\u5982\u4F7F\u7528await\u5173\u952E\u5B57\u7B49</p><p><a href="https://promisesaplus.com/" target="_blank" rel="noreferrer">https://promisesaplus.com/</a></p><h2 id="\u5B9E\u73B0promise" tabindex="-1">\u5B9E\u73B0Promise <a class="header-anchor" href="#\u5B9E\u73B0promise" aria-hidden="true">#</a></h2><p><em>coming soon...</em></p>',16),t=[o];function l(m,p,n,h,c,d){return i(),r("div",null,t)}const P=e(a,[["render",l]]);export{_ as __pageData,P as default};
