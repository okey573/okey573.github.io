import{_ as a,c as t,o as e,a4 as r}from"./chunks/framework.CbHUKvme.js";const p=JSON.parse('{"title":"中间人攻击","description":"","frontmatter":{"title":"中间人攻击"},"headers":[],"relativePath":"summary/security/middle-attack.md","filePath":"summary/security/middle-attack.md","lastUpdated":1716293150000}'),o={name:"summary/security/middle-attack.md"},s=r('<h1 id="中间人攻击" tabindex="-1">中间人攻击 <a class="header-anchor" href="#中间人攻击" aria-label="Permalink to &quot;中间人攻击&quot;">​</a></h1><h2 id="什么是中间人攻击" tabindex="-1">什么是中间人攻击 <a class="header-anchor" href="#什么是中间人攻击" aria-label="Permalink to &quot;什么是中间人攻击&quot;">​</a></h2><p>中间人攻击是攻击方同时与服务端和客户端建立起了连接，并让对方认为连接是安全的，但是实际上整个通信过程都被攻击者控制了。攻击者不仅能获得双方的通信信息，还能修改通信信息。中间人攻击的本质是客户端和服务端之间的认证和信任问题。</p><h2 id="防御办法" tabindex="-1">防御办法 <a class="header-anchor" href="#防御办法" aria-label="Permalink to &quot;防御办法&quot;">​</a></h2><p>对称加密、非对称加密、混合加密技术都没有有效防止中间人攻击，因为中间人可以截取首次传输的密钥并偷天换日，而客户端或服务端并无法得知。HTTPS作为防止中间人攻击的终极手段，引入证书机制解决了客户端和服务端的信任问题，从而较为有效的防止了中间人攻击。</p>',5),i=[s];function c(d,l,n,_,m,h){return e(),t("div",null,i)}const f=a(o,[["render",c]]);export{p as __pageData,f as default};
