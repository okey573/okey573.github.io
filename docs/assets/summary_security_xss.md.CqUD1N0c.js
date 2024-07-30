import{_ as e,c as a,o as t,a4 as s}from"./chunks/framework.CbHUKvme.js";const m=JSON.parse('{"title":"xss","description":"","frontmatter":{"title":"xss","outline":[2,6]},"headers":[],"relativePath":"summary/security/xss.md","filePath":"summary/security/xss.md","lastUpdated":1722324535000}'),r={name:"summary/security/xss.md"},o=s('<h1 id="xss" tabindex="-1">XSS <a class="header-anchor" href="#xss" aria-label="Permalink to &quot;XSS&quot;">​</a></h1><h2 id="什么是xss" tabindex="-1">什么是XSS <a class="header-anchor" href="#什么是xss" aria-label="Permalink to &quot;什么是XSS&quot;">​</a></h2><p>Cross-Site Scripting(跨站脚本攻击)，简称XSS(避免和CSS重名)，是一种代码注入攻击。攻击者通过在目标网站上注入恶意脚本，使之在用户的浏览器上运行。利用这些恶意脚本，攻击者可获取用户的敏感信息如Cookie、SessionID等，进而危害数据安全</p><h2 id="xss分类" tabindex="-1">XSS分类 <a class="header-anchor" href="#xss分类" aria-label="Permalink to &quot;XSS分类&quot;">​</a></h2><ul><li><strong>反射型(Reflected XSS)</strong> 所谓反射型就是，用户在网页中输入的内容经页面提交到服务器后，服务器没有对该数据进行存储到数据库，而是原封不动的反射回页面中，即用户输入什么内容，服务器就将其原封不动的显示到页面中，从而让用户立即被攻击。最常见的就是搜索引擎，当我们搜索一个无法搜索到的内容时，搜索引擎通常会直接在页面中提示，该内容无法搜索到，此时如果用户搜索的内容中包含一些攻击性的脚本同时服务器又没有对这些内容进行处理，那么就会被攻击</li><li><strong>存储型 (Stored XSS)</strong> 所谓存储型就是，用户在网页中输入的内容经页面提交到服务器后，服务器将该数据先原封不动的存储到数据库中，等到其他用户访问该网站的时候，从服务器中读取出数据，从而让其中包含的脚本执行，所以存储型不是立即被攻击，而是等其他用户访问该网站的时候才生效，但是其由于被存储到了数据库中，所以其攻击范围更广为网站的所有访问者。最常见的就是某个黑客用户提交了一篇文章，而文章中被注入了一段脚本，而该文章会被提交到数据库中，所以等到其他用户访问该文章的时候就会被攻击。 反射型和存储型XSS的区别是看用户提交的数据有没有被服务器存储起来。</li><li><strong>基于DOM (DOM-based or local XSS)</strong> 所谓基于DOM类型就是，使用到的数据没有经过服务器，而是直接从DOM、Window等对象中获取，比如，document.location、document.URL、document.referrer，将这些数据插入到DOM中后导致的XSS攻击。比较常见的就是，当我们在某个网站注册成功后，通常会跳转到一个验证页面，验证页面内容主要包括多少秒之后自动跳转到某个页面，或者点击链接立即跳转到某个页面，如: <code>http://localhost:3000/validate.html?redirectTo=javascript:alert(&#39;xss&#39;)</code> ，而我们的页面会根据传入的redirectTo的值进行跳转。基于DOM类型的XSS攻击关键是数据没有经过服务器，而是来自于DOM操作。</li></ul><h2 id="xss防御" tabindex="-1">XSS防御 <a class="header-anchor" href="#xss防御" aria-label="Permalink to &quot;XSS防御&quot;">​</a></h2><ul><li>将用于登录相关的cookie设置为httpOnly，避免被客户端脚本直接读取。</li><li>对用户输入和输出进行过滤，对其中注入的脚本进行转义</li><li>CSP（内容安全策略）以白名单的机制对网站加载或执行的资源起作用。在网页中，这样的策略通过 HTTP 头信息或者 meta 元素定义。CSP虽然提供了强大的安全保护</li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://www.cnblogs.com/tugenhua0707/p/10909284.html" target="_blank" rel="noreferrer">web安全之XSS攻击原理及防范</a></p></li><li><p><a href="https://blog.csdn.net/weixin_47450807/article/details/123224654" target="_blank" rel="noreferrer">内容安全策略(CSP)详解</a></p></li></ul>',9),l=[o];function i(n,c,S,d,h,u){return t(),a("div",null,l)}const p=e(r,[["render",i]]);export{m as __pageData,p as default};
