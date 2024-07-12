import{_ as e,c as t,o as a,a4 as r}from"./chunks/framework.CbHUKvme.js";const h=JSON.parse('{"title":"template","description":"","frontmatter":{"title":"template"},"headers":[],"relativePath":"summary/vue/template.md","filePath":"summary/vue/template.md","lastUpdated":1720785406000}'),l={name:"summary/vue/template.md"},n=r('<h1 id="vue-的-template" tabindex="-1">vue 的 template <a class="header-anchor" href="#vue-的-template" aria-label="Permalink to &quot;vue 的 template&quot;">​</a></h1><h2 id="vue-的编译流程" tabindex="-1">vue 的编译流程 <a class="header-anchor" href="#vue-的编译流程" aria-label="Permalink to &quot;vue 的编译流程&quot;">​</a></h2><ol><li>通过 html-parser 将 template 解析成 ast抽象语法树</li><li>通过 optimize 优化 ast 并标记静态节点和静态根节点</li><li>通过 generate 将 ast 抽象语法树编译成 render 字符串并将静态部分放到 staticRenderFns 中，最后通过 new Function(render) 生成 render 函数</li><li>在 beforeMount 和 mounted 之间执行 render 函数生成 VNode，然后通过 patch(VNode) 生成 dom 树并挂载，调用 mounted</li></ol><h2 id="和-render-函数的联系和区别" tabindex="-1">和 render 函数的联系和区别 <a class="header-anchor" href="#和-render-函数的联系和区别" aria-label="Permalink to &quot;和 render 函数的联系和区别&quot;">​</a></h2><ul><li>render 函数跟 template 一样都是创建 html 模板</li><li>render 的性能较高，template 性能较低。因为没有编译过程</li><li>render 优先级高于 template</li></ul>',5),o=[n];function i(d,m,s,u,p,c){return a(),t("div",null,o)}const v=e(l,[["render",i]]);export{h as __pageData,v as default};
