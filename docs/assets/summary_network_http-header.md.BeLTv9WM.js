import{_ as t,c as e,o as n,a4 as r}from"./chunks/framework.CbHUKvme.js";const p=JSON.parse('{"title":"http header","description":"","frontmatter":{"title":"http header"},"headers":[],"relativePath":"summary/network/http-header.md","filePath":"summary/network/http-header.md","lastUpdated":1717397084000}'),d={name:"summary/network/http-header.md"},a=r('<h1 id="http-协议报文头" tabindex="-1">http 协议报文头 <a class="header-anchor" href="#http-协议报文头" aria-label="Permalink to &quot;http 协议报文头&quot;">​</a></h1><h2 id="通用头部" tabindex="-1">通用头部 <a class="header-anchor" href="#通用头部" aria-label="Permalink to &quot;通用头部&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">通用头部</th><th style="text-align:center;">作用（请求报文和响应报文都可能使用）</th></tr></thead><tbody><tr><td style="text-align:center;">Cache-Control</td><td style="text-align:center;">控制缓存的行为：no-cache（强制向服务器再次验证）、no-store（不做任何缓存）、max-age=111111（资源可缓存最大时间 秒）、public（客户端、代理服务器都可利用缓存）、private（代理服务器不可用缓存）</td></tr><tr><td style="text-align:center;">Connection</td><td style="text-align:center;">浏览器想要优先使用的连接类型： keep-alive close（开启和关闭持久连接）</td></tr><tr><td style="text-align:center;">Date</td><td style="text-align:center;">创建报文时间</td></tr><tr><td style="text-align:center;">Pragma</td><td style="text-align:center;">只用于请求报文，客户端要求中间服务器不返回缓存的资源</td></tr><tr><td style="text-align:center;">Via</td><td style="text-align:center;">代理服务器相关信息，每经过一个代理服务器就会添加相关信息，用逗号分割</td></tr><tr><td style="text-align:center;">Transfer-Encoding</td><td style="text-align:center;">传输编码方式：chunked分块传输</td></tr><tr><td style="text-align:center;">Upgrade</td><td style="text-align:center;">要求客户端使用的升级协议，需配合Connection: Upgrade一起使用：websocket</td></tr><tr><td style="text-align:center;">Warning</td><td style="text-align:center;">缓存相关问题的警告</td></tr></tbody></table><h2 id="请求头部" tabindex="-1">请求头部 <a class="header-anchor" href="#请求头部" aria-label="Permalink to &quot;请求头部&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">请求头部</th><th style="text-align:center;">作用（请求报文专用）</th></tr></thead><tbody><tr><td style="text-align:center;">Accept</td><td style="text-align:center;">能正确接收的媒体类型：application/json text/plain</td></tr><tr><td style="text-align:center;">Accept-Charset</td><td style="text-align:center;">能正确接收的字符集: unicode-1-1</td></tr><tr><td style="text-align:center;">Accept-Encoding</td><td style="text-align:center;">能正确接收的编码格式列表：gzip deflate</td></tr><tr><td style="text-align:center;">Accept-Language</td><td style="text-align:center;">能正确接收的语言列表：zh-cn,zh;1=0.9,en,1=0.8</td></tr><tr><td style="text-align:center;">Authorization</td><td style="text-align:center;">客户端认证信息：Bearer dSdSdFFlsfdjasd123，一般存token用</td></tr><tr><td style="text-align:center;">Cookie</td><td style="text-align:center;">发送给服务器的Cookie信息</td></tr><tr><td style="text-align:center;">Expect</td><td style="text-align:center;">期待服务端的指定行为</td></tr><tr><td style="text-align:center;">From</td><td style="text-align:center;">请求方邮箱地址</td></tr><tr><td style="text-align:center;">Host</td><td style="text-align:center;">服务器的域名，用于区分单台服务器多个域名的虚拟主机，是HTTP/1.1唯一必须包含的字段。</td></tr><tr><td style="text-align:center;">If-Match</td><td style="text-align:center;">两端资源标记比较，只有判断条件为真服务端才会接受请求：If-Mach: &quot;123456，和服务端文件标记比较</td></tr><tr><td style="text-align:center;">If-Modified-Since</td><td style="text-align:center;">本地资源未修改返回 304（比较时间）</td></tr><tr><td style="text-align:center;">If-None-Match</td><td style="text-align:center;">本地资源未修改返回 304（比较标记）</td></tr><tr><td style="text-align:center;">User-Agent</td><td style="text-align:center;">客户端信息</td></tr><tr><td style="text-align:center;">Max-Forwards</td><td style="text-align:center;">限制可被代理及网关转发的次数</td></tr><tr><td style="text-align:center;">Proxy-Authorization</td><td style="text-align:center;">向代理服务器发送验证信息</td></tr><tr><td style="text-align:center;">Range</td><td style="text-align:center;">请求某个内容的一部分，配合If-Range使用</td></tr><tr><td style="text-align:center;">Referer</td><td style="text-align:center;">请求发起页面的原始URI</td></tr><tr><td style="text-align:center;">TE</td><td style="text-align:center;">传输编码方式</td></tr></tbody></table><h2 id="响应头部" tabindex="-1">响应头部 <a class="header-anchor" href="#响应头部" aria-label="Permalink to &quot;响应头部&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">响应头部</th><th style="text-align:center;">作用（响应报文专用）</th></tr></thead><tbody><tr><td style="text-align:center;">Accept-Ranges</td><td style="text-align:center;">告知客户端服务器是否可接受范围请求，是bytes，否none</td></tr><tr><td style="text-align:center;">Age</td><td style="text-align:center;">资源在代理缓存中存在的时间</td></tr><tr><td style="text-align:center;">ETag</td><td style="text-align:center;">资源标识，资源发生变化时标识也会发生改变</td></tr><tr><td style="text-align:center;">Location</td><td style="text-align:center;">客户端重定向到某个 URL</td></tr><tr><td style="text-align:center;">Proxy-Authenticate</td><td style="text-align:center;">向代理服务器发送验证信息</td></tr><tr><td style="text-align:center;">Server</td><td style="text-align:center;">服务器名字：Apache Nginx</td></tr><tr><td style="text-align:center;">WWW-Authenticate</td><td style="text-align:center;">获取资源需要的认证方案</td></tr><tr><td style="text-align:center;">Set-Cookie</td><td style="text-align:center;">需要存在客户端的信息，一般用于识别用户身份</td></tr></tbody></table><h2 id="实体头部" tabindex="-1">实体头部 <a class="header-anchor" href="#实体头部" aria-label="Permalink to &quot;实体头部&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">实体头部</th><th style="text-align:center;">作用（补充请求报文或响应报文相关信息）</th></tr></thead><tbody><tr><td style="text-align:center;">Allow</td><td style="text-align:center;">资源的正确请求方式：GET HEAD POST</td></tr><tr><td style="text-align:center;">Content-Encoding</td><td style="text-align:center;">内容的编码格式：gzip deflate</td></tr><tr><td style="text-align:center;">Content-Language</td><td style="text-align:center;">内容使用的语言：zh-CN</td></tr><tr><td style="text-align:center;">Content-Length</td><td style="text-align:center;">request body 长度（即实体主体的大小）：</td></tr><tr><td style="text-align:center;">Content-Location</td><td style="text-align:center;">返回数据的备用地址</td></tr><tr><td style="text-align:center;">Content-MD5</td><td style="text-align:center;">Base64加密格式的内容 MD5检验值</td></tr><tr><td style="text-align:center;">Content-Range</td><td style="text-align:center;">响应主体的内容范围</td></tr><tr><td style="text-align:center;">Content-Type</td><td style="text-align:center;">内容的媒体类型（如&#39;application/json;charset=UTF-8&#39;则会发送预检请求）</td></tr><tr><td style="text-align:center;">Expires</td><td style="text-align:center;">内容的过期时间</td></tr><tr><td style="text-align:center;">Last_modified</td><td style="text-align:center;">内容的最后修改时间</td></tr></tbody></table>',9),l=[a];function i(c,s,g,x,y,o){return n(),e("div",null,l)}const b=t(d,[["render",i]]);export{p as __pageData,b as default};
