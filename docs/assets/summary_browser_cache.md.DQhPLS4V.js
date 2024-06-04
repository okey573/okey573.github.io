import{_ as e,c as t,o,a4 as a}from"./chunks/framework.CbHUKvme.js";const u=JSON.parse('{"title":"cookie 和 web storage","description":"","frontmatter":{"title":"cookie 和 web storage","outline":[2,6]},"headers":[],"relativePath":"summary/browser/cache.md","filePath":"summary/browser/cache.md","lastUpdated":1717516946000}'),r={name:"summary/browser/cache.md"},i=a('<h1 id="cookie-sessionstorage-localstorage" tabindex="-1">Cookie SessionStorage LocalStorage <a class="header-anchor" href="#cookie-sessionstorage-localstorage" aria-label="Permalink to &quot;Cookie SessionStorage LocalStorage&quot;">​</a></h1><h2 id="cookie" tabindex="-1">Cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;Cookie&quot;">​</a></h2><p>cookie是客户端与服务器端进行会话使用的一个能够在浏览器本地化存储的技术。简言之，cookie是服务器端发给客户端的文本文件,但只能储存4kb的数据;目的是用于辨别用户身份，记录跟踪购物车的商品信息（如数量）、记录用户访问次数等。</p><blockquote><p>cookie的内容主要包括：名字name，值value，过期时间expires，路径path和域domain。路径和域一起构成cookie的作用范围。一般cookie储存在内存里，若设置了过期时间则储存在硬盘里，浏览器页面关闭也不会失效，直到设置的过期时间后才失效。若不设置cookie的过期时间，则有效期为浏览器窗口的会话期间，关闭浏览器窗口就失效。</p></blockquote><h4 id="cookie的httponly属性" tabindex="-1">Cookie的httpOnly属性 <a class="header-anchor" href="#cookie的httponly属性" aria-label="Permalink to &quot;Cookie的httpOnly属性&quot;">​</a></h4><p>设置httpOnly后，cookie不能在js中被读取。这也是防御XSS的一种方法。</p><h4 id="cookie的path属性" tabindex="-1">Cookie的Path属性 <a class="header-anchor" href="#cookie的path属性" aria-label="Permalink to &quot;Cookie的Path属性&quot;">​</a></h4><p>path决定了cookie的生效路径，生效路径为设置的path及其子目录。</p><p>一般都是设置成<code>/</code>， 全站可用。</p><h4 id="cookie的samesite属性" tabindex="-1">Cookie的SameSite属性 <a class="header-anchor" href="#cookie的samesite属性" aria-label="Permalink to &quot;Cookie的SameSite属性&quot;">​</a></h4><p>SameSite属性可以设置三个值：Strict、Lax、None</p><ul><li>Strict: 完全禁止第三方获取cookie，跨站点时，任何情况下都不会发送cookie；只有当前网页的 URL 与请求目标一致，才会带上 Cookie</li><li>Lax: 防范跨站，大多数情况下禁止获取cookie，除非导航到目标网址的GET请求（链接、预加载、GET表单）；设置了Strict或Lax以后，基本就杜绝了 CSRF 攻击</li></ul><table><thead><tr><th style="text-align:center;">请求类型</th><th style="text-align:center;">示例</th><th style="text-align:center;">正常情况</th><th style="text-align:center;">Lax</th></tr></thead><tbody><tr><td style="text-align:center;">连接</td><td style="text-align:center;"><code>&lt;a href=&quot;...&quot;&gt;&lt;/a&gt;</code></td><td style="text-align:center;">携带</td><td style="text-align:center;">携带</td></tr><tr><td style="text-align:center;">预加载</td><td style="text-align:center;"><code>&lt;link rel=&quot;prerender&quot; href=&quot;...&quot;/&gt;</code></td><td style="text-align:center;">携带</td><td style="text-align:center;">携带</td></tr><tr><td style="text-align:center;">GET 表单</td><td style="text-align:center;"><code>&lt;form method=&quot;GET&quot; action=&quot;...&quot;&gt;</code></td><td style="text-align:center;">携带</td><td style="text-align:center;">携带</td></tr><tr><td style="text-align:center;">POST 表单</td><td style="text-align:center;"><code>&lt;form method=&quot;POST&quot; action=&quot;...&quot;&gt;</code></td><td style="text-align:center;">携带</td><td style="text-align:center;">不携带</td></tr><tr><td style="text-align:center;">iframe</td><td style="text-align:center;"><code>&lt;iframe src=&quot;...&quot;&gt;&lt;/iframe&gt;</code></td><td style="text-align:center;">携带</td><td style="text-align:center;">不携带</td></tr><tr><td style="text-align:center;">AJAX</td><td style="text-align:center;"><code>$.get(&quot;...&quot;)</code></td><td style="text-align:center;">携带</td><td style="text-align:center;">不携带</td></tr><tr><td style="text-align:center;">Image</td><td style="text-align:center;"><code>&lt;img src=&quot;...&quot;&gt;</code></td><td style="text-align:center;">携带</td><td style="text-align:center;">不携带</td></tr></tbody></table><p>谷歌发布Chrome 80稳定版后，默认值改为Lax</p><p>这一默认值是可以在浏览器中修改的，<code>chrome://flags/#same-site-by-default-cookies</code>。但是在后来的某个版本中被去掉了</p><h4 id="cookie的sameparty属性" tabindex="-1">Cookie的SameParty属性 <a class="header-anchor" href="#cookie的sameparty属性" aria-label="Permalink to &quot;Cookie的SameParty属性&quot;">​</a></h4><p>在第一方Cookie和第三方Cookie被区别对待的情况下，Chrome新推出了一个First-Party Sets策略，它可以允许由同一实体拥有的不同关域名都被视为第一方</p><p>SameParty的cookie是配合First-Party Sets的使用，First-Party Sets的配置是托管在<code>/.well-known/first-party-set</code>路由下，members和owner都要配置</p><p>配置完成后，设置了SameParty属性的就能使用了</p><h2 id="web-storage" tabindex="-1">Web Storage <a class="header-anchor" href="#web-storage" aria-label="Permalink to &quot;Web Storage&quot;">​</a></h2><blockquote><p>web Storeage的概念和cookie很相似，区别在于web Storage更够储存各多的数据，cookie的大小是受限的，并且每次请求一个新的页面的时候都会被发送过去，无形中浪费了带宽，另外cookie还需要指定作用域，不可跨越调用。 HTML5增加了两个储存方式：localStorage和sessionStorage</p></blockquote><p>sessionStorage 和 localStorage是HTML5中新增的两种本地存储机制，使用它可以在客户端本地建立一个数据库，原本必须保存在服务器端数据库中的内容现在可以直接保存在客户端本地了，这大大减轻了服务器端的负担，同时也加快了访问数据的速度。</p><h4 id="sessionstorage" tabindex="-1">SessionStorage <a class="header-anchor" href="#sessionstorage" aria-label="Permalink to &quot;SessionStorage&quot;">​</a></h4><p>sessionStorage的生命周期是在仅在当前会话下有效。</p><blockquote><p>sessionStorage引入了一个“浏览器窗口”的概念，sessionStorage是在同源的窗口中始终存在的数据。只要这个浏览器窗口没有关闭，即使刷新页面或者进入同源另一个页面，数据依然存在。但是sessionStorage在关闭了浏览器窗口后就会被销毁。同时独立的打开同一个窗口同一个页面，sessionStorage也是不一样的。</p></blockquote><h4 id="localstorage" tabindex="-1">LocalStorage <a class="header-anchor" href="#localstorage" aria-label="Permalink to &quot;LocalStorage&quot;">​</a></h4><p>localStorage的生命周期是永久的，关闭页面或浏览器之后localStorage中的数据也不会消失。localStorage除非主动删除数据，否则数据永远不会消失</p><h2 id="区别" tabindex="-1">区别 <a class="header-anchor" href="#区别" aria-label="Permalink to &quot;区别&quot;">​</a></h2><ul><li>cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递，而sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存</li><li>存储大小限制也不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie、所以cookie只适合保存很小的数据，如会话标识。sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。</li><li>作用域不同，sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；localstorage在所有同源窗口中都是共享的；cookie也是在所有同源窗口中都是共享的。</li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://zhuanlan.zhihu.com/p/137408482" target="_blank" rel="noreferrer">CSRF 漏洞的末日？关于 Cookie SameSite 那些你不得不知道的事</a></p></li><li><p><a href="https://zhuanlan.zhihu.com/p/31852168" target="_blank" rel="noreferrer">这一次带你彻底了解Cookie</a></p></li></ul>',31),l=[i];function c(s,n,d,h,g,k){return o(),t("div",null,l)}const S=e(r,[["render",c]]);export{u as __pageData,S as default};
