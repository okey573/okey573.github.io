import{_ as e,o as r,c as a,a as t}from"./app.b1e773e0.js";const f=JSON.parse('{"title":"总览","description":"","frontmatter":{"title":"总览"},"headers":[{"level":2,"title":"vue2 和 vue3 的区别","slug":"vue2-和-vue3-的区别","link":"#vue2-和-vue3-的区别","children":[]},{"level":2,"title":"vue 的 ref","slug":"vue-的-ref","link":"#vue-的-ref","children":[]}],"relativePath":"summary/Vue/01.md","lastUpdated":1679912014000}'),d={name:"summary/Vue/01.md"},i=t('<p>个人看法： vue2 到 vue3 是做加法，而vue3 到 vue4 可能是做会减法</p><h2 id="vue2-和-vue3-的区别" tabindex="-1">vue2 和 vue3 的区别 <a class="header-anchor" href="#vue2-和-vue3-的区别" aria-hidden="true">#</a></h2><h4 id="proxy-和-object-defineproperty" tabindex="-1">proxy 和 Object.defineProperty <a class="header-anchor" href="#proxy-和-object-defineproperty" aria-hidden="true">#</a></h4><h4 id="diff-算法区别" tabindex="-1">diff 算法区别 <a class="header-anchor" href="#diff-算法区别" aria-hidden="true">#</a></h4><h4 id="声明周期不同" tabindex="-1">声明周期不同 <a class="header-anchor" href="#声明周期不同" aria-hidden="true">#</a></h4><h4 id="vue3-有静态提升" tabindex="-1">vue3 有静态提升 <a class="header-anchor" href="#vue3-有静态提升" aria-hidden="true">#</a></h4><p><code>template</code> 模板在编译成 render 函数时，会把静态节点提升到 render 函数外部。render 函数会多次执行，这样就不会静态节点就不会创建多次重复的对象，包括 class 属性这些也是存在静态提升的; 但是如果是自己写的 render 函数就不会有变化，需要自己做静态提升</p><h2 id="vue-的-ref" tabindex="-1">vue 的 <code>ref</code> <a class="header-anchor" href="#vue-的-ref" aria-hidden="true">#</a></h2><p><strong>问：</strong> 为什么 vue 有<code>ref</code>这样看起来冗余的函数，然而 Svelte 却可以？</p><p><strong>答：</strong> React hooks 通过重复调用模拟 algebraic effects ，从而使得每次 useState 变量都能拿到最新的值。但只是在获取值的时候不需要 .value，改动的时候需要调用函数，而且带来很多其他限制和代价（比如必须要给 useEffect 传递正确的依赖数组，不然回调里的变量引用就会是过期的）</p><p>Svelte 通过分析组件 script AST 进行编译来改写你的源码，比如 a = 1 后面会插入一个 $$invalidate() 函数来通知组件</p><p>带来的问题：</p><ul><li>只能通过给变量赋值来触发更新，<code>Array.push</code> 就不能触发更新</li><li>嵌套的函数内声明的变量就不能触发更新，也不能传递出去。</li><li>跟 hooks 一样跟组件上下文强绑定。脱离组件上下文就不能使用赋值响应式，而必须用另一套 store API。</li><li>强依赖编译。没有编译这一步就不能用。</li></ul><p>Vue 3 的响应式系统本身最大的特点是不仅不依赖编译，而且跟组件上下文无关，甚至跟 Vue 框架其它部分也是解耦的。同一套系统你可以用在 Vue 组件里，组件外，其他框架里，甚至用在后端。</p><p>在无编译的前提下，JS 是不可能做到靠赋值触发更新的。或者说靠赋值触发更新本身就是披着 js 外衣但做着 js 做不到的行为的黑魔法。有些人会觉得违背 js 标准行为不好，但有些人觉得比起带来的开发体验收益，这么一点点黑魔法是可以接受的。</p><p>开头提到的 ref transform 就是在以 Vue 的响应式系统做基础，配合编译的前提，做到能够对用 $ 开头的 API 声明的变量以赋值触发更新。比起 Svelte 还顺道解决了一些问题：</p><ul><li>因为底下依然是 Vue 的响应式系统，所以对对象的操作也能触发更新，比如 arr.push(1) 就能正常工作。 -能够在嵌套函数内使用，并且用配套的 $$ 宏传递出去。</li><li>跟组件上下文解耦，在 ts/js 里也能使用。组件内外依然使用同一套系统，同一套语法。</li></ul><p>总的来说，由于 js 的语言限制，响应式系统是逃不过类似于 atom 的概念的。Svelte 是组件内外两套系统并且强依赖编译，Vue 则是基于同一套不依赖编译的系统，并在可以编译的情况下提供改善体验的语法糖。</p>',18),s=[i];function u(o,l,n,c,h,p){return r(),a("div",null,s)}const _=e(d,[["render",u]]);export{f as __pageData,_ as default};
