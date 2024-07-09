import{_ as a,c as t,o as r,a4 as e,a9 as p}from"./chunks/framework.CbHUKvme.js";const u=JSON.parse('{"title":"ecmascript","description":"","frontmatter":{"title":"ecmascript","outline":[2,6],"lastUpdate":"Thu Jun 13 2024 16:45:08 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/js/ecmascript.md","filePath":"summary/js/ecmascript.md","lastUpdated":1720525210000}'),c={name:"summary/js/ecmascript.md"},i=e('<h1 id="ecmascript" tabindex="-1">ECMAScript <a class="header-anchor" href="#ecmascript" aria-label="Permalink to &quot;ECMAScript&quot;">​</a></h1><h2 id="ecmascript-和-javascript-的关系" tabindex="-1">ECMAScript 和 JavaScript 的关系 <a class="header-anchor" href="#ecmascript-和-javascript-的关系" aria-label="Permalink to &quot;ECMAScript 和 JavaScript 的关系&quot;">​</a></h2><p>1996 年 11 月，JavaScript 的创造者 Netscape 公司，决定将 JavaScript 提交给标准化组织 ECMA，希望这种语言能够成为国际标准。次年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这个版本就是 1.0 版。</p><p>该标准从一开始就是针对 JavaScript 语言制定的，但是之所以不叫 JavaScript，有两个原因。一是商标，Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法地使用 JavaScript 这个名字，且 JavaScript 本身也已经被 Netscape 公司注册为商标。二是想体现这门语言的制定者是 ECMA，不是 Netscape，这样有利于保证这门语言的开放性和中立性。</p><p>因此，ECMAScript 和 JavaScript 的关系是，前者是后者的规格，后者是前者的一种实现（另外的 ECMAScript 方言还有 JScript 和 ActionScript）。日常场合，这两个词是可以互换的。</p><h2 id="es6-与-ecmascript-2015-的关系" tabindex="-1">ES6 与 ECMAScript 2015 的关系 <a class="header-anchor" href="#es6-与-ecmascript-2015-的关系" aria-label="Permalink to &quot;ES6 与 ECMAScript 2015 的关系&quot;">​</a></h2><p>ECMAScript 2015（简称 ES2015）这个词，也是经常可以看到的。它与 ES6 是什么关系呢？</p><p>2011 年，ECMAScript 5.1 版发布后，就开始制定 6.0 版了。因此，ES6 这个词的原意，就是指 JavaScript 语言的下一个版本。</p><p>但是，因为这个版本引入的语法功能太多，而且制定过程当中，还有很多组织和个人不断提交新功能。事情很快就变得清楚了，不可能在一个版本里面包括所有将要引入的功能。常规的做法是先发布 6.0 版，过一段时间再发 6.1 版，然后是 6.2 版、6.3 版等等。</p><p>但是，标准的制定者不想这样做。他们想让标准的升级成为常规流程：任何人在任何时候，都可以向标准委员会提交新语法的提案，然后标准委员会每个月开一次会，评估这些提案是否可以接受，需要哪些改进。如果经过多次会议以后，一个提案足够成熟了，就可以正式进入标准了。这就是说，标准的版本升级成为了一个不断滚动的流程，每个月都会有变动。</p><p>标准委员会最终决定，标准在每年的 6 月份正式发布一次，作为当年的正式版本。接下来的时间，就在这个版本的基础上做改动，直到下一年的 6 月份，草案就自然变成了新一年的版本。这样一来，就不需要以前的版本号了，只要用年份标记就可以了。</p><p>ES6 的第一个版本，就这样在 2015 年 6 月发布了，正式名称就是《ECMAScript 2015 标准》（简称 ES2015）。2016 年 6 月，小幅修订的《ECMAScript 2016 标准》（简称 ES2016）如期发布，这个版本可以看作是 ES6.1 版，因为两者的差异非常小（只新增了数组实例的includes方法和指数运算符），基本上是同一个标准。根据计划，2017 年 6 月发布 ES2017 标准。</p><p>因此，ES6 既是一个历史名词，也是一个泛指，含义是 5.1 版以后的 JavaScript 的下一代标准，涵盖了 ES2015、ES2016、ES2017 等等，而 ES2015 则是正式名称，特指该年发布的正式版本的语言标准。本书中提到 ES6 的地方，一般是指 ES2015 标准，但有时也是泛指“下一代 JavaScript 语言”。</p><h2 id="语法提案的批准流程" tabindex="-1">语法提案的批准流程 <a class="header-anchor" href="#语法提案的批准流程" aria-label="Permalink to &quot;语法提案的批准流程&quot;">​</a></h2><p>任何人都可以向标准委员会（又称 TC39 委员会）提案，要求修改语言标准。</p><p>一种新的语法从提案到变成正式标准，需要经历五个阶段。每个阶段的变动都需要由 TC39 委员会批准。</p><p><a href="https://tc39.es/process-document/" target="_blank" rel="noreferrer">提案的说明</a></p><p><a href="https://github.com/tc39/proposals" target="_blank" rel="noreferrer">查看所有提案</a></p><h2 id="特性" tabindex="-1">特性 <a class="header-anchor" href="#特性" aria-label="Permalink to &quot;特性&quot;">​</a></h2><h3 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-label="Permalink to &quot;概览&quot;">​</a></h3><p><img src="'+p+'" alt="特性"></p><h3 id="weakmap" tabindex="-1">WeakMap <a class="header-anchor" href="#weakmap" aria-label="Permalink to &quot;WeakMap&quot;">​</a></h3><p>WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。<strong>最重要的区别是，WeakMap不会阻止在没有对键的引用时对键进行垃圾收集。</strong></p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://es6.ruanyifeng.com/#docs/intro" target="_blank" rel="noreferrer">ECMAScript 6 简介</a></p></li><li><p><a href="https://www.jianshu.com/p/d69986d04bf1" target="_blank" rel="noreferrer">从ES2016到ES2023，八个版本更新速览</a></p></li><li><p><a href="https://www.51cto.com/article/745333.html" target="_blank" rel="noreferrer">JavaScript 新特性最全指南：ES2023 ～ ES2016</a></p></li></ul>',25),s=[i];function o(l,n,h,S,d,m){return r(),t("div",null,s)}const _=a(c,[["render",o]]);export{u as __pageData,_ as default};
