import{_ as a,c as e,o as t,a4 as r}from"./chunks/framework.CbHUKvme.js";const f=JSON.parse('{"title":"点击劫持","description":"","frontmatter":{"title":"点击劫持"},"headers":[],"relativePath":"summary/security/clickjacking.md","filePath":"summary/security/clickjacking.md","lastUpdated":1719481514000}'),i={name:"summary/security/clickjacking.md"},c=r('<h1 id="点击劫持" tabindex="-1">点击劫持 <a class="header-anchor" href="#点击劫持" aria-label="Permalink to &quot;点击劫持&quot;">​</a></h1><h2 id="什么是点击劫持" tabindex="-1">什么是点击劫持 <a class="header-anchor" href="#什么是点击劫持" aria-label="Permalink to &quot;什么是点击劫持&quot;">​</a></h2><p>点击劫持是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌入自己的网页中，并将 iframe 设置为透明，然后诱使用户在该页面上进行操作，此时用户将在不知情的情况下点击透明的iframe页面</p><h2 id="防御办法" tabindex="-1">防御办法 <a class="header-anchor" href="#防御办法" aria-label="Permalink to &quot;防御办法&quot;">​</a></h2><p>使用一个HTTP响应头 <strong>X-Frame-Options</strong> 它有三个可选的值：</p><ul><li>DENY：浏览器会拒绝当前页面加载任何frame页面；</li><li>SAMEORIGIN：frame页面的地址只能为同源域名下的页面；</li><li>ALLOW-FROM origin：允许frame加载的页面地址；</li></ul>',6),o=[c];function s(l,n,_,m,d,h){return t(),e("div",null,o)}const p=a(i,[["render",s]]);export{f as __pageData,p as default};
