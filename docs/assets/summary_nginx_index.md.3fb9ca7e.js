import{_ as s,o as a,c as n,a as l}from"./app.8a31ff5a.js";const y=JSON.parse('{"title":"nginx","description":"","frontmatter":{"title":"nginx"},"headers":[{"level":2,"title":"基本命令","slug":"基本命令","link":"#基本命令","children":[]},{"level":2,"title":"配置文件","slug":"配置文件","link":"#配置文件","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"relativePath":"summary/nginx/index.md","lastUpdated":1685442036000}'),e={name:"summary/nginx/index.md"},p=l(`<h1 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h1><h2 id="基本命令" tabindex="-1">基本命令 <a class="header-anchor" href="#基本命令" aria-hidden="true">#</a></h2><ul><li>查看版本号</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span></code></pre></div><ul><li>启动 nginx</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/nginx</span></span>
<span class="line"></span></code></pre></div><ul><li>检查 nginx 配置文件是否正确命令</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span></span>
<span class="line"></span></code></pre></div><ul><li>指定检测特定 nginx 配置文件：-c 表示 configuration，指定配置文件</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span></code></pre></div><ul><li>nginx 指定启动配置文件命令</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/nginx/conf/nginx.conf</span></span>
<span class="line"></span></code></pre></div><ul><li>暴力停止 nginx 服务器命令</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stop</span></span>
<span class="line"></span></code></pre></div><ul><li>停止 nginx 服务器命令</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">quit</span></span>
<span class="line"></span></code></pre></div><ul><li>nginx 重新加载配置文件命令</li></ul><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">/nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reload</span></span>
<span class="line"></span></code></pre></div><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-hidden="true">#</a></h2><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-hidden="true">#</a></h2><ul><li><a href="https://blog.csdn.net/erik_tse/article/details/121966757" target="_blank" rel="noreferrer">Nginx proxy_pass详解</a></li></ul>`,21),t=[p];function o(i,c,r,d,h,g){return a(),n("div",null,t)}const u=s(e,[["render",o]]);export{y as __pageData,u as default};
