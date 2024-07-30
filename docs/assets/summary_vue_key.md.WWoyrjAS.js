import{_ as e,c as a,o as t,a4 as r}from"./chunks/framework.CbHUKvme.js";const p=JSON.parse('{"title":"key","description":"","frontmatter":{"title":"key","lastUpdated":"2024/07/18 20:27:00 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/vue/key.md","filePath":"summary/vue/key.md","lastUpdated":1722324535000}'),o={name:"summary/vue/key.md"},i=r('<h1 id="key" tabindex="-1">key <a class="header-anchor" href="#key" aria-label="Permalink to &quot;key&quot;">​</a></h1><p>在vue中使用v-for时需要，都会提示或要求使用: <strong>key</strong> attribute</p><h2 id="为什么要有key" tabindex="-1">为什么要有key <a class="header-anchor" href="#为什么要有key" aria-label="Permalink to &quot;为什么要有key&quot;">​</a></h2><blockquote><p>Vue 默认按照“就地更新”的策略来更新通过 v-for 渲染的元素列表。当数据项的顺序改变时，Vue 不会随之移动 DOM 元素的顺序，而是就地更新每个元素，确保它们在原本指定的索引位置上渲染。</p><p>默认模式是高效的，但只适用于列表渲染输出的结果不依赖子组件状态或者临时 DOM 状态 (例如表单输入值) 的情况。</p><p>为了给 Vue 一个提示，以便它可以跟踪每个节点的标识，从而重用和重新排序现有的元素，你需要为每个元素对应的块提供一个唯一的 key attribute</p></blockquote><h2 id="key的作用" tabindex="-1">key的作用 <a class="header-anchor" href="#key的作用" aria-label="Permalink to &quot;key的作用&quot;">​</a></h2><p>key 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。</p><p>有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。</p><p>一句话总结就是：<strong>key的作用主要是为了更高效的对比虚拟DOM中每个节点是否是相同节点</strong></p><h2 id="为什么key值不建议用index" tabindex="-1">为什么key值不建议用index <a class="header-anchor" href="#为什么key值不建议用index" aria-label="Permalink to &quot;为什么key值不建议用index&quot;">​</a></h2><h4 id="性能消耗问题" tabindex="-1">性能消耗问题 <a class="header-anchor" href="#性能消耗问题" aria-label="Permalink to &quot;性能消耗问题&quot;">​</a></h4><p>使用 index 做 key，破坏顺序操作的时候， 因为每一个节点都找不到对应的 key，导致部分节点不能复用,所有的新 vnode 都需要重新创建。</p><h4 id="数据错位" tabindex="-1">数据错位 <a class="header-anchor" href="#数据错位" aria-label="Permalink to &quot;数据错位&quot;">​</a></h4><p>input 框数据残留问题</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>用 index 作为 key 时，在对数据进行，逆序添加，逆序删除等破坏顺序的操作时，会产生没必要的真实 DOM更新，从而导致效率低</li><li>用 index 作为 key 时，如果结构中包含输入类的 DOM，会产生错误的 DOM 更新</li><li>在开发中最好每条数据使用唯一标识固定的数据作为 key，比如后台返回的 ID，手机号，身份证号等唯一值</li><li>如果不对数据进行逆序添加 逆序删除破坏顺序的操作， 只用于列表展示的话 使用index 作为Key没有毛病</li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7140446835311083534" target="_blank" rel="noreferrer">v-for 到底为啥要加上 key?</a></li></ul>',17),l=[i];function n(d,k,s,h,u,y){return t(),a("div",null,l)}const _=e(o,[["render",n]]);export{p as __pageData,_ as default};
