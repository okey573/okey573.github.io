import{_ as a,c as e,o as t,a4 as i}from"./chunks/framework.CbHUKvme.js";const x=JSON.parse('{"title":"vuex 和 pinia","description":"","frontmatter":{"title":"vuex 和 pinia","outline":[2,6]},"headers":[],"relativePath":"summary/vue/store.md","filePath":"summary/vue/store.md","lastUpdated":1717756122000}'),o={name:"summary/vue/store.md"},r=i('<h1 id="vuex-和-pinia" tabindex="-1">vuex 和 pinia <a class="header-anchor" href="#vuex-和-pinia" aria-label="Permalink to &quot;vuex 和 pinia&quot;">​</a></h1><h2 id="vuex" tabindex="-1">vuex <a class="header-anchor" href="#vuex" aria-label="Permalink to &quot;vuex&quot;">​</a></h2><h4 id="state" tabindex="-1">state <a class="header-anchor" href="#state" aria-label="Permalink to &quot;state&quot;">​</a></h4><h4 id="getter" tabindex="-1">getter <a class="header-anchor" href="#getter" aria-label="Permalink to &quot;getter&quot;">​</a></h4><h4 id="mutation" tabindex="-1">mutation <a class="header-anchor" href="#mutation" aria-label="Permalink to &quot;mutation&quot;">​</a></h4><h4 id="action" tabindex="-1">action <a class="header-anchor" href="#action" aria-label="Permalink to &quot;action&quot;">​</a></h4><h4 id="module" tabindex="-1">module <a class="header-anchor" href="#module" aria-label="Permalink to &quot;module&quot;">​</a></h4><h2 id="pinia" tabindex="-1">pinia <a class="header-anchor" href="#pinia" aria-label="Permalink to &quot;pinia&quot;">​</a></h2><h4 id="state-1" tabindex="-1">state <a class="header-anchor" href="#state-1" aria-label="Permalink to &quot;state&quot;">​</a></h4><h4 id="getter-1" tabindex="-1">getter <a class="header-anchor" href="#getter-1" aria-label="Permalink to &quot;getter&quot;">​</a></h4><h4 id="mutation-1" tabindex="-1">mutation <a class="header-anchor" href="#mutation-1" aria-label="Permalink to &quot;mutation&quot;">​</a></h4><h2 id="对比" tabindex="-1">对比 <a class="header-anchor" href="#对比" aria-label="Permalink to &quot;对比&quot;">​</a></h2><ul><li>相比于Vuex，pinia是可以直接修改状态的。pinia去掉了mutations，所以在actions中修改state就行，而Vuex在mutations修改state一样。这样可以实现整个数据流程都在状态管理器内部，便于管理</li><li>pinia没有modules配置，每一个独立的仓库都是defineStore生成出来的</li></ul><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>pinia从各个角度来说,使用都更方便</p>',15),n=[r];function l(h,s,u,d,c,m){return t(),e("div",null,n)}const _=a(o,[["render",l]]);export{x as __pageData,_ as default};
