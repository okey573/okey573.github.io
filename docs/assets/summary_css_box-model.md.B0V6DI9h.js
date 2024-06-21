import{_ as a,c as e,o as t,a4 as o}from"./chunks/framework.CbHUKvme.js";const u=JSON.parse('{"title":"盒模型","description":"","frontmatter":{"title":"盒模型","outline":[2,6]},"headers":[],"relativePath":"summary/css/box-model.md","filePath":"summary/css/box-model.md","lastUpdated":1718849887000}'),r={name:"summary/css/box-model.md"},i=o('<h1 id="盒模型" tabindex="-1">盒模型 <a class="header-anchor" href="#盒模型" aria-label="Permalink to &quot;盒模型&quot;">​</a></h1><h2 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h2><p>所有 HTML 元素都可以视为方块，它具有： content，padding，border，margin 四个属性。然后这个方块又包着几个小方块，如同盒子一层层的包裹着，这就是所谓的盒模型。</p><h2 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h2><h4 id="w3c-标准盒模型" tabindex="-1">W3C 标准盒模型 <a class="header-anchor" href="#w3c-标准盒模型" aria-label="Permalink to &quot;W3C 标准盒模型&quot;">​</a></h4><p>属性 width, height 只包含内容 content，不包含 border 和 padding</p><h4 id="ie-盒模型" tabindex="-1">IE 盒模型 <a class="header-anchor" href="#ie-盒模型" aria-label="Permalink to &quot;IE 盒模型&quot;">​</a></h4><p>属性 width,height 包含 border 和 padding，指的是 content + padding + border</p><h2 id="设置盒模型类型的方法" tabindex="-1">设置盒模型类型的方法 <a class="header-anchor" href="#设置盒模型类型的方法" aria-label="Permalink to &quot;设置盒模型类型的方法&quot;">​</a></h2><ul><li>css 设置标准模型：<code>box-sizing: context-box</code> (也是浏览器默认的盒模型)；</li><li>css 设置Ie模型：<code>box-sizing: border-box</code></li></ul>',10),d=[i];function n(s,c,l,h,_,b){return t(),e("div",null,d)}const p=a(r,[["render",n]]);export{u as __pageData,p as default};
