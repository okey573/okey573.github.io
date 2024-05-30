import{_ as e,c as a,o as r,a4 as t}from"./chunks/framework.CbHUKvme.js";const m=JSON.parse('{"title":"csrf","description":"","frontmatter":{"title":"csrf","outline":[2,6]},"headers":[],"relativePath":"summary/security/csrf.md","filePath":"summary/security/csrf.md","lastUpdated":1717036200000}'),l={name:"summary/security/csrf.md"},i=t('<h1 id="csrf" tabindex="-1">CSRF <a class="header-anchor" href="#csrf" aria-label="Permalink to &quot;CSRF&quot;">​</a></h1><h2 id="什么是csrf" tabindex="-1">什么是CSRF <a class="header-anchor" href="#什么是csrf" aria-label="Permalink to &quot;什么是CSRF&quot;">​</a></h2><p>CSRF 全称为(Cross-Site Request Forgery)，即跨站请求伪造，也称为One Click Attack，一键攻击，因为其通常会通过一个图片或者链接并诱导用户去点击，当用户点击这个图片或者链接后，这个链接通常包含了一些攻击性的操作和参数，即所谓的伪造的请求，就会以用户的身份向服务器发起这个伪造的请求，服务器收到这个伪造的请求后，就会认为是用户自己许可的操作，导致用户数据丢失等。</p><h2 id="csrf的条件" tabindex="-1">CSRF的条件 <a class="header-anchor" href="#csrf的条件" aria-label="Permalink to &quot;CSRF的条件&quot;">​</a></h2><p>由于CSRF是伪造用户请求，并且以用户的身份向服务器发起请求，导致用户数据丢失，所以用户必须先登录获取对应的登录cookie之后，伪造的请求才会生效，才会导致用户数据丢失。所以CSRF攻击的前提条件是:</p><ul><li>用户必须先登录信任网站，并且在本地生成对应的cookie；</li><li>在用户没有登出的情况下，访问了危险网站；</li></ul><h2 id="csrf防御" tabindex="-1">CSRF防御 <a class="header-anchor" href="#csrf防御" aria-label="Permalink to &quot;CSRF防御&quot;">​</a></h2><ul><li>增加 token 校验</li><li>校验请求头的 referer 属性值</li><li>合理使用 cookie 的 sameSite 属性</li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://blog.csdn.net/qq_45803593/article/details/124727762" target="_blank" rel="noreferrer">CSRF简介</a></p></li><li><p><a href="https://blog.csdn.net/ihtml5/article/details/115283688" target="_blank" rel="noreferrer">什么是 CSRF 攻击</a></p></li></ul>',10),s=[i];function o(c,n,h,d,f,_){return r(),a("div",null,s)}const p=e(l,[["render",o]]);export{m as __pageData,p as default};
