import{_ as t,o as n,c as o,b as e,d as a}from"./app.b4516dcc.js";const w=JSON.parse('{"title":"Web Component","description":"","frontmatter":{"title":"Web Component"},"headers":[{"level":2,"title":"核心","slug":"核心","link":"#核心","children":[]}],"relativePath":"summary/Engineered/web-component.md","lastUpdated":1678343097000}'),l={name:"summary/Engineered/web-component.md"},s=e("p",null,"Web Component是一组api，是一系列加入 w3c 的 HTML 和 DOM 的特性，使得开发者可以创建可复用的组件。由于 web components 是由 w3c 组织去推动的，因此它很有可能在不久的将来成为浏览器的一个标配。",-1),r=e("h2",{id:"核心",tabindex:"-1"},[a("核心 "),e("a",{class:"header-anchor",href:"#核心","aria-hidden":"true"},"#")],-1),c=e("ul",null,[e("li",null,"Custom elements（自定义元素）：一组 JavaScript API，允许您定义 custom elements 及其行为，然后可以在您的用户界面中按照需要使用它们。"),e("li",null,'Shadow DOM（影子DOM）：一组 JavaScript API，用于将封装的 "影子" DOM 树 附加到元素（与主文档DOM分开呈现）并控制其关联的功能。通过这种方式，您可以保持元素的功能私有，这样它们就可以被脚本化和样式化，而不用担心与文档的其他部分发生冲突。'),e("li",null,"HTML templates（HTML模板）：< template > 和 < slot > 元素使您可以编写不在呈现页面中显示的标记模板。然后它们可以作为自定义元素结构的基础被多次重用。"),e("li",null,"HTML Imports（HTML导入）：一旦定义了自定义组件，最简单的重用它的方法就是使其定义细节保存在一个单独的文件中，然后使用导入机制将其导入到想要实际使用它的页面中。HTML 导入就是这样一种机制，尽管存在争议 — Mozilla 根本不同意这种方法，并打算在将来实现更合适的。")],-1),i=e("p",null,[e("a",{href:"https://juejin.cn/post/7045194698226401310",target:"_blank",rel:"noreferrer"},"Web Component")],-1),p=[s,r,c,i];function d(m,_,u,h,M,b){return n(),o("div",null,p)}const T=t(l,[["render",d]]);export{w as __pageData,T as default};
