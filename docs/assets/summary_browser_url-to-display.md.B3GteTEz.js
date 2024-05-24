import{_ as l,c as a,o as e,a4 as i,a6 as r}from"./chunks/framework.CbHUKvme.js";const P=JSON.parse('{"title":"url 到页面显示","description":"","frontmatter":{"title":"url 到页面显示"},"headers":[],"relativePath":"summary/browser/url-to-display.md","filePath":"summary/browser/url-to-display.md","lastUpdated":1716540100000}'),o={name:"summary/browser/url-to-display.md"},t=i('<h1 id="在浏览器地址栏输入-url-到页面显示" tabindex="-1">在浏览器地址栏输入 URL 到页面显示 <a class="header-anchor" href="#在浏览器地址栏输入-url-到页面显示" aria-label="Permalink to &quot;在浏览器地址栏输入 URL 到页面显示&quot;">​</a></h1><h2 id="概览" tabindex="-1">概览 <a class="header-anchor" href="#概览" aria-label="Permalink to &quot;概览&quot;">​</a></h2><p><img src="'+r+'" alt="流程"></p><h2 id="_1-浏览器预处理" tabindex="-1">1. 浏览器预处理 <a class="header-anchor" href="#_1-浏览器预处理" aria-label="Permalink to &quot;1. 浏览器预处理&quot;">​</a></h2><ol><li>浏览器判断输入的内容是否符合 URL 规则，否则当做搜索内容处理。 <ol><li>搜索内容：浏览器默认搜索引擎 + 搜索内容拼接成新 URL</li><li>URL：将 URL + 协议，合成新的合法 URL</li></ol></li><li>此时按下回车，浏览器导航栏开始显示 loading 但还是之前的页面，这是因为此时还没获得新页面的数据</li></ol><h2 id="_2-浏览器解析-url-获得-ip-地址" tabindex="-1">2. 浏览器解析 URL 获得 IP 地址 <a class="header-anchor" href="#_2-浏览器解析-url-获得-ip-地址" aria-label="Permalink to &quot;2. 浏览器解析 URL 获得 IP 地址&quot;">​</a></h2><ol><li>浏览器主进程构建请求信息，通过进程通信（IPC）将 URL 请求发送给网络进程</li><li>网络进程获取到 URL 先判断是是否存在缓存 <ol><li>存在缓存：拦截 URL 请求，返回缓存内容，code 码为 200</li><li>不存在缓存：进入到网络请求</li></ol></li><li>系统首先判断本地 host 文件是否存在对应域名 <ol><li>存在：取得对应 IP 地址</li><li>不存在：提交 DNS 域名解析服务器进行 IP 地址的解析</li></ol></li></ol><ul><li><p>DNS 解析是一个递归的过程</p></li><li><p>DNS 缓存优化: 浏览器缓存，系统缓存，路由器缓存，IPS服务器缓存，根域名服务器缓存，顶级域名服务器缓存，主域名服务器缓存</p></li><li><p>DNS 负载均衡: DNS 可以返回一个合适的机器的 IP 给用户，例如可以根据每台机器的负载量，该机器离用户地理位置的距离等等，这种过程就是 DNS 负载均衡，又叫做 DNS 重定向。CDN (Content Delivery Network) 就是利用 DNS 的重定向技术</p></li></ul><h2 id="_3-通过-tcp-协议三次握手建立连接" tabindex="-1">3. 通过 TCP 协议三次握手建立连接 <a class="header-anchor" href="#_3-通过-tcp-协议三次握手建立连接" aria-label="Permalink to &quot;3. 通过 TCP 协议三次握手建立连接&quot;">​</a></h2><ol><li>Chrome 有个机制，同一个域名同时最多只能建立 6 个TCP 连接，如果在同一个域名下同时有 10 个请求发生，那么其中 4 个请求会进入排队等待状态，直至进行中的请求完成。如果当前请求数量少于6个，会直接建立 TCP 连接</li><li>TCP 三次握手建立连接，HTTP 请求加上 TCP 头部——包括源端口号、目的程序端口号和用于校验数据完整性的序号，向下传输</li></ol><h2 id="_4-数据传输" tabindex="-1">4. 数据传输 <a class="header-anchor" href="#_4-数据传输" aria-label="Permalink to &quot;4. 数据传输&quot;">​</a></h2><ol><li>数据传输到网络层（建立 TCP 连接实际上就在传输层了），网络层在数据包上加上 IP 头部——包括源 IP 地址和目的 IP 地址，继续向下传输到底层</li><li>数据包再经过数据链路层，物理层传输</li><li>在传输途中按层级依次解开数据头部，最终将数据传输给服务器应用层</li></ol><h2 id="_5-服务器处理数据" tabindex="-1">5. 服务器处理数据 <a class="header-anchor" href="#_5-服务器处理数据" aria-label="Permalink to &quot;5. 服务器处理数据&quot;">​</a></h2><ol><li>服务器通过 HTTP 协议，解析请求头和请求体</li><li>判断是否需要重定向 <ol><li>需要重定向：返回 301 或者 302 ，同时在响应头部的 Location 中附上重定向的目标地址，浏览器会根据 code 和 Location 执行重定向操作</li><li>不需要重定向：通过请求头中的 If-None-Match 和 If-Modified-Since 等信息判断是否命中缓存。如果命中缓存，返回 304 状态码。否则返回最新数据，状态码为 200，另外此时还可以设置 Cache-Control 强缓存头部信息</li></ol></li></ol><h2 id="_6-数据传输" tabindex="-1">6. 数据传输 <a class="header-anchor" href="#_6-数据传输" aria-label="Permalink to &quot;6. 数据传输&quot;">​</a></h2><ol><li>响应数据又顺着应用层——传输层——网络层——网络层——传输层——应用层的顺序返回到网络进程</li><li>数据传输完成后四次挥手断开连接，如果服务器或者浏览器设置了 keep-alive 则会保持连接</li></ol><h2 id="_7-浏览器处理数据" tabindex="-1">7. 浏览器处理数据 <a class="header-anchor" href="#_7-浏览器处理数据" aria-label="Permalink to &quot;7. 浏览器处理数据&quot;">​</a></h2><ol><li>网络进程将获取到的数据包进行解析，根据响应头中的Content-type来判断响应数据的类型，如果是字节流类型，就将该请求交给下载管理器，该导航流程结束，不再进行</li><li>如果是text/html类型，就通知浏览器进程获取到文档准备渲染</li></ol><h2 id="_8-渲染" tabindex="-1">8.渲染 <a class="header-anchor" href="#_8-渲染" aria-label="Permalink to &quot;8.渲染&quot;">​</a></h2><ol><li>浏览器主进程把数据发送到渲染进程，浏览器会判断是否满足公用渲染进程的条件，比如新打开的页面和之前的是同站点，就会复用之前的渲染进程，否则新创建一个渲染进程。</li><li>渲染进程接受到数据后，会发送一个“确认提交”的消息给浏览器主进程，浏览器接受到消息后会更新浏览器的状态，比如地址栏的URL，安全状态，前进和后退历史，更新页面（此时是空白）等等</li><li>渲染进程解析文档解析和子资源加载，HTML 标签通过 HTML 解析器转换成 DOM Tree， CSS 按照 CSS 规则和 CSS 解释器转换成 CSSOM Tree， 两个 Tree 结合变成 Render Tree</li><li>计算每个元素的位置和大小完成渲染</li><li>渲染完成后通知浏览器主进程，结束页面标签的 loading 状态</li></ol><h2 id="一些细节点" tabindex="-1">一些细节点 <a class="header-anchor" href="#一些细节点" aria-label="Permalink to &quot;一些细节点&quot;">​</a></h2><ul><li>复用渲染进程（鼠标左键直接打开和右键打开新链接不一样）</li><li>keep-alive</li><li>缓存</li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://zhuanlan.zhihu.com/p/573814007" target="_blank" rel="noreferrer">Web 服务器启用 connection - keep-alive 的一些前置条件</a></p></li><li><p><a href="https://www.cnblogs.com/xiaohuochai/p/9193083.html" target="_blank" rel="noreferrer">从输入URL到页面加载的全过程</a></p></li><li><p><a href="https://blog.csdn.net/weixin_43190804/article/details/123092074" target="_blank" rel="noreferrer">浏览器渲染页面的流程</a></p></li><li><p><a href="https://zhuanlan.zhihu.com/p/586060532" target="_blank" rel="noreferrer">浏览器渲染流程（精讲）</a></p></li></ul>',24),h=[t];function n(s,d,c,u,_,p){return e(),a("div",null,h)}const b=l(o,[["render",n]]);export{P as __pageData,b as default};
