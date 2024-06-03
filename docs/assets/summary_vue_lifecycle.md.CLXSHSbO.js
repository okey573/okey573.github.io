import{_ as e,c as a,o as l,a4 as i,ah as t,ai as r}from"./chunks/framework.CbHUKvme.js";const v=JSON.parse('{"title":"生命周期","description":"","frontmatter":{"title":"生命周期"},"headers":[],"relativePath":"summary/vue/lifecycle.md","filePath":"summary/vue/lifecycle.md","lastUpdated":1717397084000}'),o={name:"summary/vue/lifecycle.md"},d=i('<h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h1><p>vue 实例从创建到销毁的过程，具体来说就是 vue 实例从开始创建、初始化数据、编译模板、挂载 Dom、渲染数据、更新数据、最后销毁这样的一个过程</p><h2 id="vue2-生命周期" tabindex="-1">vue2 生命周期 <a class="header-anchor" href="#vue2-生命周期" aria-label="Permalink to &quot;vue2 生命周期&quot;">​</a></h2><ol><li>beforeCreate</li><li>created</li><li>beforeMount</li><li>mounted</li><li>beforeUpdate</li><li>updated</li><li>activated(keep-alive组件特有)</li><li>deactivated(keep-alive组件特有)</li><li>beforeDestroy</li><li>destroyed</li><li>errorCaptured(2.5.0+ 新增)</li></ol><p><img src="'+t+'" alt="生命周期"></p><h2 id="vue3-生命周期" tabindex="-1">vue3 生命周期 <a class="header-anchor" href="#vue3-生命周期" aria-label="Permalink to &quot;vue3 生命周期&quot;">​</a></h2><p>vue3 的生命周期，在使用时，区分选项式和组合式</p><h4 id="选项式" tabindex="-1">选项式 <a class="header-anchor" href="#选项式" aria-label="Permalink to &quot;选项式&quot;">​</a></h4><ol><li>beforeCreate</li><li>created</li><li>beforeMount</li><li>mounted</li><li>beforeUpdate</li><li>updated</li><li>beforeUnmount</li><li>unmounted</li><li>errorCaptured</li><li>renderTracked(dev only)</li><li>renderTriggered(dev only)</li><li>activated(keep-alive组件特有)</li><li>deactivated(keep-alive组件特有)</li><li>serverPrefetch(ssr only 当组件实例在服务器上被渲染之前要完成的异步函数)</li></ol><h4 id="组合式" tabindex="-1">组合式 <a class="header-anchor" href="#组合式" aria-label="Permalink to &quot;组合式&quot;">​</a></h4><ol start="0"><li>setup(beforeCreate &amp; created)</li><li>onBeforeMount</li><li>onMounted</li><li>onBeforeUpdate</li><li>onUpdated</li><li>onBeforeUnmount</li><li>onUnmounted</li><li>onErrorCaptured</li><li>onRenderTracked(dev only)</li><li>onRenderTriggered(dev only)</li><li>onActivated(keep-alive组件特有)</li><li>onDeactivated(keep-alive组件特有)</li><li>onServerPrefetch(ssr only 当组件实例在服务器上被渲染之前要完成的异步函数)</li></ol><p><img src="'+r+'" alt="生命周期"></p><h2 id="父子组件生命周期执行顺序" tabindex="-1">父子组件生命周期执行顺序 <a class="header-anchor" href="#父子组件生命周期执行顺序" aria-label="Permalink to &quot;父子组件生命周期执行顺序&quot;">​</a></h2><h4 id="挂载阶段" tabindex="-1">挂载阶段 <a class="header-anchor" href="#挂载阶段" aria-label="Permalink to &quot;挂载阶段&quot;">​</a></h4><p>父 beforeCreate -&gt; 父 created -&gt; 父 beforeMount -&gt; 子 beforeCreate -&gt; 子 created -&gt; 子 beforeMount -&gt; 子 mounted -&gt; 父 mounted</p><h4 id="更新阶段" tabindex="-1">更新阶段 <a class="header-anchor" href="#更新阶段" aria-label="Permalink to &quot;更新阶段&quot;">​</a></h4><p>父 beforeUpdate -&gt; 子 beforeUpdate -&gt; 子 updated -&gt; 父 updated</p><h4 id="销毁阶段" tabindex="-1">销毁阶段 <a class="header-anchor" href="#销毁阶段" aria-label="Permalink to &quot;销毁阶段&quot;">​</a></h4><p>父 beforeDestroy -&gt; 子 beforeDestroy -&gt; 子 destroyed -&gt; 父 destroyed</p><p>规律就是：父组件先开始执行，然后等到子组件执行完，父组件收尾。</p>',20),n=[d];function u(c,s,h,p,f,m){return l(),a("div",null,n)}const _=e(o,[["render",u]]);export{v as __pageData,_ as default};
