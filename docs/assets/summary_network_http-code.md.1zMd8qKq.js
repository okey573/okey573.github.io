import{_ as e,c as t,o as i,a4 as l}from"./chunks/framework.CbHUKvme.js";const T=JSON.parse('{"title":"http code","description":"","frontmatter":{"title":"http code"},"headers":[],"relativePath":"summary/network/http-code.md","filePath":"summary/network/http-code.md","lastUpdated":1721638270000}'),a={name:"summary/network/http-code.md"},o=l('<p>HTTP 状态码是服务器端返回给客户端的响应状态码，根据（HTTP）状态码我们就能知道服务器端想要给客户端表达的具体含义，比如 200 就表示请求访问成功，500 就表示服务器端程序出错等。 HTTP 状态码可分为 5 大类：</p><h2 id="_1xx-消息状态码" tabindex="-1">1XX：消息状态码 <a class="header-anchor" href="#_1xx-消息状态码" aria-label="Permalink to &quot;1XX：消息状态码&quot;">​</a></h2><p><strong>消息状态码</strong>，其中：</p><ul><li>100: Continue 继续。客户端应继续其请求。</li><li>101: Switching Protocols 切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到 HTTP 的新版本协议。</li></ul><h2 id="_2xx-成功状态码" tabindex="-1">2XX：成功状态码 <a class="header-anchor" href="#_2xx-成功状态码" aria-label="Permalink to &quot;2XX：成功状态码&quot;">​</a></h2><p><strong>成功状态码</strong>，其中：</p><ul><li>200: OK 请求成功。一般用于 GET 与 POST 请求。</li><li>201: Created 已创建。成功请求并创建了新的资源。</li><li>202: Accepted 已接受。已经接受请求，但未处理完成。</li><li>203: Non-Authoritative Information 非授权信息。请求成功。但返回的 meta 信息不在原始的服务器，而是一个副本。</li><li>204: No Content 无内容。服务器成功处理，但未返回内容。在未更新网页的情况下，可确保浏览器继续显示当前文档。</li><li>205: Reset Content 重置内容。服务器处理成功，用户终端（例如：浏览器）应重置文档视图。可通过此返回码清除浏览器的表单域。</li><li>206: Partial Content 部分内容。服务器成功处理了部分 GET 请求。</li></ul><h2 id="_3xx-重定向状态码" tabindex="-1">3XX：重定向状态码 <a class="header-anchor" href="#_3xx-重定向状态码" aria-label="Permalink to &quot;3XX：重定向状态码&quot;">​</a></h2><p><strong>重定向状态码</strong>，其中：</p><ul><li>300: Multiple Choices 多种选择。请求的资源可包括多个位置，相应可返回一个资源特征与地址的列表用于用户终端（例如：浏览器）选择。</li><li>301: Moved Permanently 永久移动。请求的资源已被永久的移动到新 URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。今后任何新的请求都应使用新的 URI 代替。</li><li>302: Found 临时移动，与 301 类似。但资源只是临时被移动。客户端应继续使用原有URI。</li><li>303: See Other 查看其它地址。与 301 类似。使用 GET 和 POST 请求查看。</li><li>304: Not Modified 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源。</li><li>305: Use Proxy 使用代理。所请求的资源必须通过代理访问。</li><li>306: Unused 已经被废弃的 HTTP 状态码。</li><li>307: Temporary Redirect 临时重定向。与 302 类似。使用 GET 请求重定向。</li></ul><h2 id="_4xx-客户端错误状态码" tabindex="-1">4XX：客户端错误状态码 <a class="header-anchor" href="#_4xx-客户端错误状态码" aria-label="Permalink to &quot;4XX：客户端错误状态码&quot;">​</a></h2><p><strong>客户端错误状态码</strong>，其中：</p><ul><li>400: Bad Request 客户端请求的语法错误，服务器无法理解。</li><li>401: Unauthorized 请求要求用户的身份认证。</li><li>402: Payment Required 保留，将来使用。</li><li>403: Forbidden 服务器理解请求客户端的请求，但是拒绝执行此请求。</li><li>404: Not Found 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置&quot;您所请求的资源无法找到&quot;的个性页面。</li><li>405: Method Not Allowed 客户端请求中的方法被禁止。</li><li>406: Not Acceptable 服务器无法根据客户端请求的内容特性完成请求。</li><li>407: Proxy Authentication Required 请求要求代理的身份认证，与 401 类似，但请求者应当使用代理进行授权。</li><li>408: Request Time-out 服务器等待客户端发送的请求时间过长，超时。</li><li>409: Conflict 服务器完成客户端的 PUT 请求时可能返回此代码，服务器处理请求时发生了冲突。</li><li>410: Gone 客户端请求的资源已经不存在。410 不同于 404，如果资源以前有现在被永久删除了可使用 410 代码，网站设计人员可通过 301 代码指定资源的新位置。</li><li>411: Length Required 服务器无法处理客户端发送的不带 Content-Length 的请求信息。</li><li>412: Precondition Failed 客户端请求信息的先决条件错误。</li><li>413: Request Entity Too Large 由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个 Retry-After 的响应信息。</li><li>414: Request-URI Too Large 请求的 URI 过长（URI通常为网址），服务器无法处理。</li><li>415: Unsupported Media Type 服务器无法处理请求附带的媒体格式。</li><li>416: Requested range not satisfiable 客户端请求的范围无效。</li><li>417: Expectation Failed 服务器无法满足 Expect 的请求头信息。</li></ul><h2 id="_5xx-服务端错误状态码" tabindex="-1">5XX：服务端错误状态码 <a class="header-anchor" href="#_5xx-服务端错误状态码" aria-label="Permalink to &quot;5XX：服务端错误状态码&quot;">​</a></h2><p><strong>服务端错误状态码</strong>，其中：</p><ul><li>500: Internal Server Error 服务器内部错误，无法完成请求。</li><li>501: Not Implemented 服务器不支持请求的功能，无法完成请求。</li><li>502: Bad Gateway 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应。</li><li>503: Service Unavailable 由于超载或系统维护，服务器暂时的无法处理客户端的请求。延时的长度可包含在服务器的Retry-After头信息中。</li><li>504: Gateway Time-out 充当网关或代理的服务器，未及时从远端服务器获取请求。</li><li>505: HTTP Version not supported 服务器不支持请求的HTTP协议的版本，无法完成处理。</li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://blog.51cto.com/u_14180083/5153721" target="_blank" rel="noreferrer">HTTP 中的 301、302、303、307、308 响应状态码</a></li></ul>',18),r=[o];function n(d,s,u,h,c,p){return i(),t("div",null,r)}const x=e(a,[["render",n]]);export{T as __pageData,x as default};
