import{_ as e,c as o,o as t,a4 as c}from"./chunks/framework.CbHUKvme.js";const m=JSON.parse('{"title":"实现一个同步cookies的浏览器插件","description":"","frontmatter":{"title":"实现一个同步cookies的浏览器插件"},"headers":[],"relativePath":"achieve/extension/index.md","filePath":"achieve/extension/index.md","lastUpdated":1716732715000}'),i={name:"achieve/extension/index.md"},a=c('<p>有些系统是通过登录后在 cookie 中注入 token，然后在不同系统通过携带 cookie 信息进行认证的（也就是 cas 单点登录）。</p><p>有时候需要本地开发，调用线上的接口，这时候需要先登录线上系统拿到 cookie，然后再写到本地开发环境里，否则因为本地 localhost 和系统域名肯定是不在一个域的，所以请求时肯定不会携带 cookie，所以在开发时模拟登录后需要手动写入 cookie。</p><p>然后浏览器插件是有操作 cookie 的权限的，所以用一个插件把线上系统的 cookie 同步到 localhost 来，也就是省略一个步骤。</p><p>其实对于这个问题，还有很多解决办法：</p><ul><li>比如新加一个 host: <code>127.0.0.1 domain.com</code>，然后开发调试的时候不要打开localhost或者127.0.0.1，而是用 <code>domain.com</code>，这样先登录线上系统后改 host 然后打开开发页面也会有 cookie</li><li>如果这个前端项目包含了登录的代码，也就是在这个前端工程内完成登录的，那么用 http-proxy 的 cookieRewrite 相关的属性，把 cookie 写到 localhost 也行</li></ul><p><a href="https://github.com/okey573/awesome-dev-tool" target="_blank" rel="noreferrer">在 github 中查看源码</a></p>',6),s=[a];function n(l,r,_,d,p,h){return t(),o("div",null,s)}const x=e(i,[["render",n]]);export{m as __pageData,x as default};
