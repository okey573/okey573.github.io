import{_ as a,c as s,o as i,a4 as t}from"./chunks/framework.CbHUKvme.js";const g=JSON.parse('{"title":"Volta","description":"","frontmatter":{"title":"Volta"},"headers":[],"relativePath":"summary/other/volta.md","filePath":"summary/other/volta.md","lastUpdated":1730101834000}'),e={name:"summary/other/volta.md"},l=t(`<h1 id="volta" tabindex="-1">Volta <a class="header-anchor" href="#volta" aria-label="Permalink to &quot;Volta&quot;">​</a></h1><blockquote><p>Volta，&quot;无忧的JavaScript工具管理器&quot;，是一个简化JavaScript环境管理的开源项目。</p></blockquote><h2 id="理解" tabindex="-1">理解 <a class="header-anchor" href="#理解" aria-label="Permalink to &quot;理解&quot;">​</a></h2><ul><li>Volta 不光可以管理 node npm pnpm 这些包管理器，其他的二进制包也可以管理</li><li>当前执行目录下，如果没有明确指定，则会使用默认的 node 及其他包管理器版本（通过 PIN 命令来指定）</li><li>和使用 NVM 不用，切换 node 版本或 npm 版本之后，之前全局安装的包也可以继续使用。实际上在 Volta 里是不存在切换 node 或 npm 等包的版本这一概念</li></ul><h2 id="常用的命令" tabindex="-1">常用的命令 <a class="header-anchor" href="#常用的命令" aria-label="Permalink to &quot;常用的命令&quot;">​</a></h2><h4 id="查看当前已安装的包的版本" tabindex="-1">查看当前已安装的包的版本 <a class="header-anchor" href="#查看当前已安装的包的版本" aria-label="Permalink to &quot;查看当前已安装的包的版本&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">volta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span></span></code></pre></div><h4 id="查看所有已安装的包" tabindex="-1">查看所有已安装的包 <a class="header-anchor" href="#查看所有已安装的包" aria-label="Permalink to &quot;查看所有已安装的包&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">volta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span></span></code></pre></div><h4 id="切换默认版本" tabindex="-1">切换默认版本 <a class="header-anchor" href="#切换默认版本" aria-label="Permalink to &quot;切换默认版本&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 其实就是重新安装一遍，安装时会设置成默认版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">volta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node@20.15.0</span></span></code></pre></div><h4 id="指定版本运行" tabindex="-1">指定版本运行 <a class="header-anchor" href="#指定版本运行" aria-label="Permalink to &quot;指定版本运行&quot;">​</a></h4><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 还有其他参数，具体可以用 help 命令查看: volta run --help</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">volta</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10.16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> node</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://volta.sh/" target="_blank" rel="noreferrer">Volta</a></li></ul>`,15),h=[l];function n(o,p,r,d,k,c){return i(),s("div",null,h)}const b=a(e,[["render",n]]);export{g as __pageData,b as default};