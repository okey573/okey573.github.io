import{_ as a,c as e,o as i,a4 as r,a5 as l}from"./chunks/framework.CbHUKvme.js";const b=JSON.parse('{"title":"引擎","description":"","frontmatter":{"title":"引擎","outline":[2,6]},"headers":[],"relativePath":"summary/browser/engine.md","filePath":"summary/browser/engine.md","lastUpdated":1716363966000}'),o={name:"summary/browser/engine.md"},t=r('<h1 id="浏览器引擎" tabindex="-1">浏览器引擎 <a class="header-anchor" href="#浏览器引擎" aria-label="Permalink to &quot;浏览器引擎&quot;">​</a></h1><h2 id="js-引擎" tabindex="-1">js 引擎 <a class="header-anchor" href="#js-引擎" aria-label="Permalink to &quot;js 引擎&quot;">​</a></h2><h3 id="v8" tabindex="-1">v8 <a class="header-anchor" href="#v8" aria-label="Permalink to &quot;v8&quot;">​</a></h3><p>谷歌， nodejs 以及 deno 都是使用的v8引擎，也是使用范围最广的 js 引擎。 它是用 C++ 编写，实现了 ECMAScript 和 WebAssembly</p><h4 id="v8-引擎的主要工作" tabindex="-1">v8 引擎的主要工作 <a class="header-anchor" href="#v8-引擎的主要工作" aria-label="Permalink to &quot;v8 引擎的主要工作&quot;">​</a></h4><ul><li>编译和执行 js 代码</li><li>处理调用栈</li><li>内存的分配</li><li>垃圾的回收</li></ul><h4 id="v8-引擎的主要组成" tabindex="-1">v8 引擎的主要组成 <a class="header-anchor" href="#v8-引擎的主要组成" aria-label="Permalink to &quot;v8 引擎的主要组成&quot;">​</a></h4><ul><li>Parser: 解析器，负责将源代码解析成AST</li><li>Ignition: 解释器，负责将AST转换成字节码并执行，同时会标记热点代码</li><li>TurboFan: 编译器，负责将热点代码编译成机器码并执行</li><li>Orinoco: 垃圾回收器，负责进行内存空间回收</li></ul><h4 id="v8-引擎执行-js-代码的流程" tabindex="-1">v8 引擎执行 js 代码的流程 <a class="header-anchor" href="#v8-引擎执行-js-代码的流程" aria-label="Permalink to &quot;v8 引擎执行 js 代码的流程&quot;">​</a></h4><ol><li>经过 Parser 模块，将代码解析成抽象语法树（词法分析和语法分析）</li><li>经过 Ignition 模块，解释成字节码，这个字节码可以直接被解释器执行。如果一个函数被调用很多次，那这个函数会被标记成热点函数 (hot func), 会经过 TurboFan，转成优化之后的机器码</li><li>如果一个热点函数在调用的过程中，类型发生了改变，那么还是要经过 Ignition 来进行反优化，有机器码再转为字节码，然后再转为机器码进行运行。机器码执行效率高于字节码</li></ol><h4 id="v8-引擎为什么不直接翻译成机器码" tabindex="-1">v8 引擎为什么不直接翻译成机器码 <a class="header-anchor" href="#v8-引擎为什么不直接翻译成机器码" aria-label="Permalink to &quot;v8 引擎为什么不直接翻译成机器码&quot;">​</a></h4><p>因为无法确定这个代码会运行在怎样的环境上（windows，mac，linux），不同环境的 cpu 架构不同，不同 cpu 架构能执行的机器指令不同，所以无法确定机器指令，所以才转化为字节码。字节码可以跨平台，转化为机器指令后就可以运行了</p><h4 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h4><p>v8 引擎是使用了一种 jit (即时编译执行) 的模式</p><h3 id="spidermonkey" tabindex="-1">SpiderMonkey <a class="header-anchor" href="#spidermonkey" aria-label="Permalink to &quot;SpiderMonkey&quot;">​</a></h3><p>Firefox 目前使用的引擎，最开始由 C 语言实现，后来加上了 C++， C/C++共同编译。另外还有一个叫做Rhino的Java版本。</p><h4 id="编译器" tabindex="-1">编译器 <a class="header-anchor" href="#编译器" aria-label="Permalink to &quot;编译器&quot;">​</a></h4><p>SpiderMonkey 前后出现了 TraceMonkey , JägerMonkey ,IonMonkey 等 JIT 编译器</p><h4 id="解释执行" tabindex="-1">解释执行 <a class="header-anchor" href="#解释执行" aria-label="Permalink to &quot;解释执行&quot;">​</a></h4><p>SpiderMonkey 首先将 js 文件转换成抽象语法树(AST)再转换成字节码文件 (这一步与java等大多数语言类似), 这种字节码文件可以一行行的丢给解释引擎来执行,我们只需要根据不同 platform 开发出不同的解释引擎就可以了. 本质来讲, SpiderMonkey 就是一个虚拟机 VM. 解释引擎消化字节码的效率就是整个js文件被执行效率. 那我们为什么不直接把 AST 丢给解释器呢 ? 原因是字节码比 AST 有更好的内存布局,曾经有人做过实验,同样的逻辑使用字节码比使用 AST 效率高3倍以上,当然这紧紧是在解释执行层面上的结论. 对于编译执行的方式,直接使用 AST 也未尝不可</p><h4 id="总结-1" tabindex="-1">总结 <a class="header-anchor" href="#总结-1" aria-label="Permalink to &quot;总结&quot;">​</a></h4><p>SpiderMonkey 采用了解释执行 / jit (即时编译执行) 混合方式。</p><h3 id="v8-和-spidermonkey-的区别" tabindex="-1">v8 和 SpiderMonkey 的区别 <a class="header-anchor" href="#v8-和-spidermonkey-的区别" aria-label="Permalink to &quot;v8 和 SpiderMonkey 的区别&quot;">​</a></h3><ul><li>实现方式不同</li><li>编译方式不用， v8 是纯粹的 jit， 而 SpiderMonkey 采用了混合模式。另外，v8 曾经抛弃过字节码，将 js 代码直接编译成二进制机器代码，但由于编译时间过长，和编译过后的二进制代码占用更多空间等问题，又重新引入了二进制机器码</li></ul><h3 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h3><p>ie 使用的Chakra (JScript引擎)，中文译名为查克拉</p><h2 id="渲染引擎" tabindex="-1">渲染引擎 <a class="header-anchor" href="#渲染引擎" aria-label="Permalink to &quot;渲染引擎&quot;">​</a></h2><p>主流： Gecko、Trident、Webkit、Blink、Chromium</p><ul><li>1997年 Trident</li><li>1998年 KHTML</li><li>2000年 Gecko</li><li>2001年 WebKit</li><li>2003年 Presto</li><li>2008年 Chromium</li><li>2010年 混合引擎(双核）</li><li>2013年 Blink</li><li>2015年 EdgeHtml</li></ul><p>火狐：Gecko 谷歌：Blink Edge：EdgeHTML 后来改用 Chromium</p><p><img src="'+l+'" alt="关系图"></p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://www.wangshaoxing.com/blog/javascript-engines.html" target="_blank" rel="noreferrer">引擎浅谈 SpiderMonkey &amp; Google V8</a></p></li><li><p><a href="https://blog.csdn.net/kaimo313/article/details/125334521" target="_blank" rel="noreferrer">V8为什么又重新引入字节码</a></p></li></ul>',33),n=[t];function h(s,d,c,p,u,m){return i(),e("div",null,n)}const v=a(o,[["render",h]]);export{b as __pageData,v as default};
