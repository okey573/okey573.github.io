import{_ as e,c as a,o as l,a4 as o}from"./chunks/framework.CbHUKvme.js";const c=JSON.parse('{"title":"mvvm","description":"","frontmatter":{"title":"mvvm"},"headers":[],"relativePath":"summary/vue/mvvm.md","filePath":"summary/vue/mvvm.md","lastUpdated":1716001354000}'),i={name:"summary/vue/mvvm.md"},t=o('<h1 id="mvvm" tabindex="-1">mvvm <a class="header-anchor" href="#mvvm" aria-label="Permalink to &quot;mvvm&quot;">​</a></h1><p>mvvm 是 Model-View-ViewModel 的缩写，即 模型-视图-视图模型</p><h2 id="mvvm是什么" tabindex="-1">mvvm是什么 <a class="header-anchor" href="#mvvm是什么" aria-label="Permalink to &quot;mvvm是什么&quot;">​</a></h2><ul><li>Model：应用数据以及逻辑，后端传递的数据。(data，props，computed等部分）</li><li>View：代表 UI 组件，它负责将数据模型转化成 UI 展现出来。（template部分）</li><li>ViewModel：是一个同步View 和 Model的对象。MVVM模式的核心，它是连接Model和View的桥梁。</li></ul><p>vue的核心，双向绑定、监听（watch）、操作（methods）等部分</p><h2 id="为什么需要mvvm" tabindex="-1">为什么需要MVVM <a class="header-anchor" href="#为什么需要mvvm" aria-label="Permalink to &quot;为什么需要MVVM&quot;">​</a></h2><p>前端开发中暴露出了三个痛点问题：</p><ol><li>开发者在代码中大量调用相同的 DOM API，处理繁琐 ，操作冗余，使得代码难以维护。</li><li>大量的 DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。</li><li>当 Model 频繁发生变化，开发者需要主动更新到 View ；当用户的操作导致 Model 发生变化，开发者同样需要将变化的数据同步到 Model 中，这样的工作不仅繁琐，而且很难维护复杂多变的数据状态。</li></ol><p>早期 jquery 的出现就是为了前端能更简洁的操作 DOM 而设计的，但它只解决了第一个问题，另外两个问题始终伴随着前端一直存在</p><h2 id="mvvm的优点" tabindex="-1">MVVM的优点 <a class="header-anchor" href="#mvvm的优点" aria-label="Permalink to &quot;MVVM的优点&quot;">​</a></h2><p>在MVVM架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互， Model 和 ViewModel 之间的交互是双向的， 因此 View 数据的变化会同步到 Model 中，而 Model 数据的变化也会立即反应到View 上。 ViewModel 通过双向数据绑定把 View 和 Model 连接了起来，而 View 和 Model 之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM， 不需要关注数据状态的同步问题，复杂的数据状态维护完全由 MVVM 来统一管理。</p><h2 id="viewmodel的两个方向" tabindex="-1">ViewModel的两个方向 <a class="header-anchor" href="#viewmodel的两个方向" aria-label="Permalink to &quot;ViewModel的两个方向&quot;">​</a></h2><ol><li>将 Model 转化成 View ，即将后端传递的数据转化成所看到的页面。实现的方式是：数据绑定。</li><li>将 View 转化成 Model ，即将所看到的页面转化成后端的数据。实现的方式是：DOM 事件监听</li></ol><p>这两个方向都实现的，我们称之为数据的双向绑定</p><h2 id="mvc和mvp" tabindex="-1">MVC和MVP <a class="header-anchor" href="#mvc和mvp" aria-label="Permalink to &quot;MVC和MVP&quot;">​</a></h2><h4 id="mvc" tabindex="-1">MVC <a class="header-anchor" href="#mvc" aria-label="Permalink to &quot;MVC&quot;">​</a></h4><p>MVC表示模型-视图-控制器 Model-View-Controller</p><p>用户操作-&gt;View（负责接收用户的输入操作）-&gt;Controller（业务逻辑处理）-&gt;Model（数据持久化）-&gt;View（将结果反馈给View）</p><h4 id="mvp" tabindex="-1">MVP <a class="header-anchor" href="#mvp" aria-label="Permalink to &quot;MVP&quot;">​</a></h4><p>MVP表示模型-视图-演示者 Model-View-Presenter</p><p>View 与 Model之间不通信，都通过 Presenter 传递。Presenter完全把Model和View进行了分离，主要的程序逻辑在Presenter里实现</p>',21),r=[t];function m(d,M,v,V,h,n){return l(),a("div",null,r)}const p=e(i,[["render",m]]);export{c as __pageData,p as default};
