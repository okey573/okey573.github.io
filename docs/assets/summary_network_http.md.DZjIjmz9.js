import{_ as t,c as a,o as h,a4 as l,ad as e}from"./chunks/framework.CbHUKvme.js";const _=JSON.parse('{"title":"http","description":"","frontmatter":{"title":"http","outline":[2,6]},"headers":[],"relativePath":"summary/network/http.md","filePath":"summary/network/http.md","lastUpdated":1719304249000}'),p={name:"summary/network/http.md"},r=l('<h1 id="http" tabindex="-1">http <a class="header-anchor" href="#http" aria-label="Permalink to &quot;http&quot;">​</a></h1><p><strong>http</strong> 协议是一个<a href="/docs/summary/network/01.html#_1-应用层">应用层</a>协议</p><h2 id="http-1-0" tabindex="-1">http 1.0 <a class="header-anchor" href="#http-1-0" aria-label="Permalink to &quot;http 1.0&quot;">​</a></h2><p>最早的 http 只是使用在一些较为简单的网页上和网络请求上，所以比较简单，每次请求都打开一个新的 TCP 连接，收到响应之后立即断开连接。</p><h2 id="http-1-1" tabindex="-1">http 1.1 <a class="header-anchor" href="#http-1-1" aria-label="Permalink to &quot;http 1.1&quot;">​</a></h2><ul><li><p><strong>缓存处理</strong> 引入了更多的缓存控制策略，如 e-tag, if-modified-Since, f-Match, if-none-match 等</p></li><li><p><strong>允许范围请求</strong> 即在请求头中加入Range头部</p></li><li><p><strong>默认开启持久连接</strong> 在一个 tcp 连接上可以传送多个 http 请求和响应，减少了建立和关闭连接的消耗和延迟。</p></li><li><p><strong>Host头部</strong>请求消息和响应消息都必须包含 host 头部，以区分同一个物理主机中的不同虚拟主机的域名</p></li></ul><h2 id="http-2-0" tabindex="-1">http 2.0 <a class="header-anchor" href="#http-2-0" aria-label="Permalink to &quot;http 2.0&quot;">​</a></h2><ul><li><p><strong>多路复用</strong> http 2.0 支持多路复用，这是 http 1.1 持久连接的升级版。</p><p>多路复用，就是在一个 TCP 连接中可以存在多条流，也就是可以发送多个请求，服务端则可以通过帧中的标识知道该帧属于哪个流（即请求），通过重新排序还原请求。多路复用允许并发的发起多个请求，每个请求及该请求的响应不需要等待其他的请求或响应，避免了线头阻塞问题。这样某个请求任务耗时严重，不会影响到其它连接的正常执行,极大的提高传输性能。</p></li><li><p><strong>新的二进制格式</strong> http 1.x 的解析是基于文本的。基于文本协议的解析存在天然缺陷，文本的表现形式有多样性，要做到全面性考虑的场景必然很多。二进制则不同，只识别0和1的组合。基于这种考虑 http 2.0 的协议解析采用二进制格式，方便且强大</p></li><li><p><strong>头部压缩</strong> http 1.x 的请求和响应头部带有大量信息，而且每次请求都要重复发送，http 2.0 使用 encoder 来减少需要传输的头部大小，通讯双方各自 cache 一份头部 fields 表，既避免了重复头部的传输，又减小了需要传输的大小</p></li><li><p><strong>服务端推送</strong> 这里的服务端推送指把客户端所需要的css/js/img资源伴随着index.html一起发送到客户端，省去了客户端重复请求的步骤（从缓存中取）</p></li></ul><h2 id="http-3-0" tabindex="-1">http 3.0 <a class="header-anchor" href="#http-3-0" aria-label="Permalink to &quot;http 3.0&quot;">​</a></h2><p>http 2.0 使用了多路复用，一般来说同一域名下只需要使用一个 tcp 连接。但当这个连接中出现了丢包的情况，那就会导致整个 tcp 都要开始等待重传，也就导致了后面的所有数据都被阻塞了。反而对于 http 1.0 来说，可以开启多个 tcp 连接，出现丢包反倒只会影响其中一个连接，剩余的 tcp 连接还可以正常传输数据。</p><p>出现包阻塞的原因是因为底层TCP协议导致的问题，但是修改TCP协议是不现实的问题，就像 <code>typeof null === &#39;object&#39;</code> 一样，修改这个问题会导致出现更多的问题。既然不能修改你，那就另起一个协议取代你。Google 基于 udp 协议推出了一个的 quic 协议，并且使用在了 http 3.0 上。</p><ul><li><p><strong>避免包阻塞</strong>： 多个流的数据包在TCP连接上传输时，若一个流中的数据包传输出现问题，TCP需要等待该包重传后，才能继续传输其它流的数据包。但在基于UDP的QUIC协议中，不同的流之间的数据传输真正实现了相互独立互不干扰，某个流的数据包在出问题需要重传时，并不会对其他流的数据包传输产生影响。</p></li><li><p><strong>快速重启会话</strong>： 普通基于tcp的连接，是基于两端的ip和端口和协议来建立的。在网络切换场景，例如手机端切换了无线网，使用4G网络，会改变本身的ip，这就导致tcp连接必须重新创建。而QUIC协议使用特有的UUID来标记每一次连接，在网络环境发生变化的时候，只要UUID不变，就能不需要握手，继续传输数据。</p></li></ul><h2 id="https" tabindex="-1">https <a class="header-anchor" href="#https" aria-label="Permalink to &quot;https&quot;">​</a></h2><h4 id="http-存在的问题" tabindex="-1">http 存在的问题 <a class="header-anchor" href="#http-存在的问题" aria-label="Permalink to &quot;http 存在的问题&quot;">​</a></h4><ul><li>通信使用明文（不加密），内容可能被窃听</li><li>无法证明报文的完整性，所以可能遭篡改</li><li>不验证通信方的身份，因此有可能遭遇伪装</li></ul><h4 id="https-解决上面问题的方式" tabindex="-1">https 解决上面问题的方式 <a class="header-anchor" href="#https-解决上面问题的方式" aria-label="Permalink to &quot;https 解决上面问题的方式&quot;">​</a></h4><ul><li>通信使用明文（不加密），内容可能被窃听 <ul><li>用<strong>对称加密</strong>和消息秘钥加密消息</li><li>用<strong>非对称加密</strong>生成和传输消息秘钥</li></ul></li><li>无法证明报文的完整性，所以可能遭篡改 <ul><li>数字签名</li></ul></li><li>不验证通信方的身份，因此有可能遭遇伪装 <ul><li>第三方数字证书</li></ul></li></ul><h4 id="http-和-https-的区别" tabindex="-1">http 和 https 的区别 <a class="header-anchor" href="#http-和-https-的区别" aria-label="Permalink to &quot;http 和 https 的区别&quot;">​</a></h4><ul><li>https 比 http 更加安全，对搜索引擎更友好，利于 seo, 谷歌和百度优先索引 https 网页</li><li>https 需要用到 ssl 证书，而 http 不用</li><li>https 标准端口 443 http 标准端口80</li><li>https 基于传输层，http 基于应用层</li><li>https 在浏览器显示绿色安全锁，http 没有显示</li></ul><h4 id="https-流程" tabindex="-1">https 流程 <a class="header-anchor" href="#https-流程" aria-label="Permalink to &quot;https 流程&quot;">​</a></h4><p><img src="'+e+'" alt="https流程"></p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://juejin.cn/post/6844903844216832007" target="_blank" rel="noreferrer">前端基础篇之HTTP协议</a></p></li><li><p><a href="https://www.51cto.com/article/665542.html" target="_blank" rel="noreferrer">为什么如此安全的Https协议却仍然可以被抓包呢？</a></p></li><li><p><a href="https://juejin.cn/post/6844903830916694030" target="_blank" rel="noreferrer">深入理解HTTPS工作原理</a></p></li></ul>',23),i=[r];function o(s,n,c,d,u,m){return h(),a("div",null,i)}const f=t(p,[["render",o]]);export{_ as __pageData,f as default};
