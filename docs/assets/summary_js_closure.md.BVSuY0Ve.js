import{_ as a,c as e,o as t,a4 as r}from"./chunks/framework.CbHUKvme.js";const m=JSON.parse('{"title":"闭包","description":"","frontmatter":{"title":"闭包"},"headers":[],"relativePath":"summary/js/closure.md","filePath":"summary/js/closure.md","lastUpdated":1716282783000}'),o={name:"summary/js/closure.md"},l=r('<h1 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h1><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><ul><li>闭包是一个可以访问外部作用域的内部函数，即使这个外部作用域已经执行结束。</li><li>定义在A方法内部的方法，可以访问定义在这个A方法内部的变量</li><li>闭包函数就是可以访问到上级作用域内变量的内部函数。</li></ul><h2 id="作用域链" tabindex="-1">作用域链 <a class="header-anchor" href="#作用域链" aria-label="Permalink to &quot;作用域链&quot;">​</a></h2><p>一般情况下，变量取值到创建这个变量的函数的作用域中取值。</p><p>但是如果在当前作用域中没有查到值，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。</p><h2 id="为什么闭包函数能够让局部变量的值始终保持在内存中" tabindex="-1">为什么闭包函数能够让局部变量的值始终保持在内存中 <a class="header-anchor" href="#为什么闭包函数能够让局部变量的值始终保持在内存中" aria-label="Permalink to &quot;为什么闭包函数能够让局部变量的值始终保持在内存中&quot;">​</a></h2><p>因为JS的垃圾回收机制只会回收不可访问的对象。</p><p>而闭包函数只要还被引用，绑定在作用域链上的对象就会因为闭包的关系不会被当做垃圾回收。 这也就是闭包能够让局部变量的值始终保持在内存中的原因。</p><h2 id="闭包函数什么时候释放内存" tabindex="-1">闭包函数什么时候释放内存 <a class="header-anchor" href="#闭包函数什么时候释放内存" aria-label="Permalink to &quot;闭包函数什么时候释放内存&quot;">​</a></h2><p>当闭包函数不被引用时，就会释放内存，即将该函数设为 null 时。</p>',11),s=[l];function i(n,c,h,d,_,u){return t(),e("div",null,s)}const f=a(o,[["render",i]]);export{m as __pageData,f as default};
