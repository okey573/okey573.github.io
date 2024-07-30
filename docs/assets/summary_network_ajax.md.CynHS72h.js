import{_ as t,c as a,o as e,a4 as o}from"./chunks/framework.CbHUKvme.js";const g=JSON.parse('{"title":"ajax","description":"","frontmatter":{"title":"ajax","outline":[2,6]},"headers":[],"relativePath":"summary/network/ajax.md","filePath":"summary/network/ajax.md","lastUpdated":1722324535000}'),r={name:"summary/network/ajax.md"},l=o('<h1 id="ajax" tabindex="-1">ajax <a class="header-anchor" href="#ajax" aria-label="Permalink to &quot;ajax&quot;">​</a></h1><blockquote><p>AJAX 是异步的 JavaScript 和 XML（Asynchronous JavaScript And XML）。简单点说，就是使用 XMLHttpRequest 对象与服务器通信。它可以使用 JSON，XML，HTML 和 text 文本等格式发送和接收数据。AJAX 最吸引人的就是它的“异步”特性，也就是说它可以在不重新刷新页面的情况下与服务器通信，交换数据，或更新页面。 <br><br> 你可以使用 AJAX 最主要的两个特性做下列事： <br></p><ul><li><p>在不重新加载页面的情况下发送请求给服务器。</p></li><li><p>接受并使用从服务器发来的数据。</p></li></ul></blockquote><h2 id="请求方法" tabindex="-1">请求方法 <a class="header-anchor" href="#请求方法" aria-label="Permalink to &quot;请求方法&quot;">​</a></h2><ul><li>GET: get 方法一般用于获取服务器资源</li><li>POST: post 方法一般用于传输实体主体</li><li>PUT: put 方法一般用于传输文件</li><li>DELETE: delete 方法用于删除文件</li><li>HEAD: head 方法用于获取报文首部，不返回报文主体</li><li>OPTIONS: options 方法用于询问请求URI资源支持的方法</li></ul><h2 id="get-和-post-的区别" tabindex="-1">get 和 post 的区别 <a class="header-anchor" href="#get-和-post-的区别" aria-label="Permalink to &quot;get 和 post 的区别&quot;">​</a></h2><h4 id="表面答案" tabindex="-1">表面答案 <a class="header-anchor" href="#表面答案" aria-label="Permalink to &quot;表面答案&quot;">​</a></h4><ul><li>get 在浏览器回退时是无害的，而 post 会再次提交请求</li><li>get 产生的URL地址可以被Bookmark，而 post 不可以</li><li>get 请求会被浏览器主动cache，而 post 不会，除非手动设置</li><li>get 请求只能进行url编码，而 post 支持多种编码方式</li><li>get 请求参数会被完整保留在浏览器历史记录里，而 post 中的参数不会被保留</li><li>get 请求在URL中传送的参数是有长度限制的，而 post 么有</li><li>对参数的数据类型，get 只接受ASCII字符，而 post 没有限制</li><li>get 比 post 更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息</li><li>get 参数通过URL传递， post 放在Request body中</li></ul><h4 id="真的答案" tabindex="-1">真的答案 <a class="header-anchor" href="#真的答案" aria-label="Permalink to &quot;真的答案&quot;">​</a></h4><p>get 和 post 都是 http 协议的请求方法，它们都是基于 tcp/ip 协议族的，所以本质上它们是没有区别的， post 也可以再 url 上加参数，get 也可以加 request body</p><p>总结就是： 由于 http 的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同</p><blockquote><p><strong>另外：GET产生一个TCP数据包；POST产生两个TCP数据包</strong></p><p>对于 get 方式的请求，浏览器会把 http header 和 data 一并发送出去，服务器响应200（返回数据）</p><p>而对于 post，浏览器先发送 header，服务器响应 100 continue，浏览器再发送 data，服务器响应 200 ok（返回数据）</p><p><strong>但是</strong>并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次。</p></blockquote><p>上面这段话，我晕了，tcp 不是传输层的协议吗，和浏览器有什么关系？</p><h2 id="简单请求和复杂请求" tabindex="-1">简单请求和复杂请求 <a class="header-anchor" href="#简单请求和复杂请求" aria-label="Permalink to &quot;简单请求和复杂请求&quot;">​</a></h2><h4 id="简单请求" tabindex="-1">简单请求 <a class="header-anchor" href="#简单请求" aria-label="Permalink to &quot;简单请求&quot;">​</a></h4><ol><li>请求方法是 <strong>get</strong> <strong>post</strong> <strong>head</strong> 之一</li><li>不能有自定义请求头，如 <strong>Authorization</strong>，请求头有限制</li><li>content-type 是 <strong>text/plain</strong> <strong>multipart/form-data</strong> <strong>application/x-www-form-urlencoded</strong> 之一</li></ol><h4 id="复杂请求" tabindex="-1">复杂请求 <a class="header-anchor" href="#复杂请求" aria-label="Permalink to &quot;复杂请求&quot;">​</a></h4><p>除了简单请求都是复杂请求，复杂请求在跨域时会先发送预检请求</p><h2 id="fetch-和-ajax-的区别" tabindex="-1">fetch 和 ajax 的区别 <a class="header-anchor" href="#fetch-和-ajax-的区别" aria-label="Permalink to &quot;fetch 和 ajax 的区别&quot;">​</a></h2><p>准确来说，应该要对比的是 <strong>fetch</strong> 和 <strong>xhr</strong> 的区别</p><p>因为 <strong>fetch</strong> 也是对 <strong>ajax</strong> 的一种实现，是基于 promise 的</p><h4 id="fetch-的优点" tabindex="-1">fetch 的优点 <a class="header-anchor" href="#fetch-的优点" aria-label="Permalink to &quot;fetch 的优点&quot;">​</a></h4><ul><li>fetch的语法简洁，更语义化</li><li>基于promise，支持 async / await</li><li>同构方便，使用 isomorphic-fetch</li></ul><h4 id="fetch-的缺点" tabindex="-1">fetch 的缺点 <a class="header-anchor" href="#fetch-的缺点" aria-label="Permalink to &quot;fetch 的缺点&quot;">​</a></h4><ul><li>fetch 只对网络请求报错，对400，500都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。</li><li>fetch默认不会带cookie，需要添加配置项： fetch(url, {credentials: &#39;include&#39;})</li><li>fetch不支持abort，不支持超时控制，使用setTimeout及Promise.reject的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费</li><li>fetch没有办法用原生监测异步请求，而XHR可以</li></ul><h2 id="abortcontroller" tabindex="-1">AbortController <a class="header-anchor" href="#abortcontroller" aria-label="Permalink to &quot;AbortController&quot;">​</a></h2><p>AbortController 接口表示一个控制器对象，允许你根据需要中止一个或多个 Web 请求。可以使用AbortController.AbortController()构造函数创建一个新的 AbortController 。使用AbortSignal对象可以完成与 DOM 请求的通信。</p><p>fetch 可以使用 AbortController 来终止请求</p><p>xhr 对象也有 abort 方法</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/logsharing/p/8448446.html" target="_blank" rel="noreferrer">GET和POST两种基本请求方法的区别</a></li></ul>',30),i=[l];function n(h,s,c,p,d,u){return e(),a("div",null,i)}const f=t(r,[["render",n]]);export{g as __pageData,f as default};
