import{_ as a,c as s,o as e,a4 as n}from"./chunks/framework.CbHUKvme.js";const k=JSON.parse('{"title":"跨域","description":"","frontmatter":{"title":"跨域"},"headers":[],"relativePath":"summary/network/cross-domain.md","filePath":"summary/network/cross-domain.md","lastUpdated":1716198362000}'),t={name:"summary/network/cross-domain.md"},o=n(`<h1 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-label="Permalink to &quot;跨域&quot;">​</a></h1><h2 id="跨域的原因" tabindex="-1">跨域的原因 <a class="header-anchor" href="#跨域的原因" aria-label="Permalink to &quot;跨域的原因&quot;">​</a></h2><p>浏览器的同源策略，为了安全。。</p><h2 id="解决办法" tabindex="-1">解决办法 <a class="header-anchor" href="#解决办法" aria-label="Permalink to &quot;解决办法&quot;">​</a></h2><p>知道原因就知道怎么解决了。服务端没有跨域，不管是正向还是反向，用一个新服务做一层代理就行了。</p><p>script 标签， img 标签没有跨域限制，或者说限制比较宽松</p><p>官方推荐的 cors 方法，设置相关的 header</p><h3 id="cors" tabindex="-1">cors <a class="header-anchor" href="#cors" aria-label="Permalink to &quot;cors&quot;">​</a></h3><p>服务端设置响应头</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 允许跨域的站点</span></span>
<span class="line"><span>Access-Control-Allow-Origin: http://xxxx.com</span></span>
<span class="line"><span>// 同意接受 cookie</span></span>
<span class="line"><span>Access-Control-Allow-Credentials: true</span></span>
<span class="line"><span>// 接受的自定义请求 header</span></span>
<span class="line"><span>Access-Control-Expose-Headers: CustomHeader</span></span>
<span class="line"><span>// 请求的方法</span></span>
<span class="line"><span>Access-Control-Allow-Methods: PUT,GET,POST</span></span>
<span class="line"><span>// 预检的有效期，在有效时间内不再检测是否跨域</span></span>
<span class="line"><span>Access-Control-max-age: 3600</span></span></code></pre></div><p>客户端也要在请求中主动开启设置 cookie</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xhr.withCredentials </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span></code></pre></div><h3 id="jsonp" tabindex="-1">jsonp <a class="header-anchor" href="#jsonp" aria-label="Permalink to &quot;jsonp&quot;">​</a></h3><h3 id="代理" tabindex="-1">代理 <a class="header-anchor" href="#代理" aria-label="Permalink to &quot;代理&quot;">​</a></h3><h3 id="iframe-跨域" tabindex="-1">iframe 跨域 <a class="header-anchor" href="#iframe-跨域" aria-label="Permalink to &quot;iframe 跨域&quot;">​</a></h3><h3 id="postmessage-跨域" tabindex="-1">postMessage 跨域 <a class="header-anchor" href="#postmessage-跨域" aria-label="Permalink to &quot;postMessage 跨域&quot;">​</a></h3><h3 id="websocket-协议跨域" tabindex="-1">WebSocket 协议跨域 <a class="header-anchor" href="#websocket-协议跨域" aria-label="Permalink to &quot;WebSocket 协议跨域&quot;">​</a></h3>`,17),i=[o];function r(l,p,c,h,d,m){return e(),s("div",null,i)}const b=a(t,[["render",r]]);export{k as __pageData,b as default};
