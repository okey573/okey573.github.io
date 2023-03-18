import{_ as s,o as a,c as n,a as e}from"./app.2e7f410a.js";const d=JSON.parse('{"title":"实现action自动部署pages","description":"","frontmatter":{"title":"实现action自动部署pages","outline":[2,6]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"relativePath":"achieve/action/index.md","lastUpdated":1679136122000}'),l={name:"achieve/action/index.md"},o=e(`<p>使用github的action自动部署vitepress文档工程到github.io的静态站点pages</p><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-hidden="true">#</a></h2><h4 id="需要掌握的内容" tabindex="-1">需要掌握的内容 <a class="header-anchor" href="#需要掌握的内容" aria-hidden="true">#</a></h4><ul><li>VitePress</li><li><a href="https://docs.github.com/en/pages" target="_blank" rel="noreferrer">GitHub Action</a></li><li><a href="https://docs.github.com/en/actions" target="_blank" rel="noreferrer">GitHub Pages</a> <em>也可以看<a href="https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html" target="_blank" rel="noreferrer">阮一峰的入门教程</a></em></li></ul><h4 id="项目说明-共涉及两个repo" tabindex="-1">项目说明（共涉及两个Repo） <a class="header-anchor" href="#项目说明-共涉及两个repo" aria-hidden="true">#</a></h4><ol><li>采用VitePress搭建的文档工程，也就是本站的源码工程 <a href="https://github.com/okey573/heels-of-giants" target="_blank" rel="noreferrer">源码链接</a></li><li>GitHub Pages工程，也就是username.github.io工程 <a href="https://github.com/okey573/okey573.github.io" target="_blank" rel="noreferrer">源码链接</a></li></ol><h4 id="实现的功能" tabindex="-1">实现的功能 <a class="header-anchor" href="#实现的功能" aria-hidden="true">#</a></h4><p>在VitePress工程中编写或更新文档，将相关改动push到远程后，实现自动打包部署，然后可以在页面上最新改动。</p><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-hidden="true">#</a></h2><h4 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-hidden="true">#</a></h4><p>跟着上面提到的<a href="https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html" target="_blank" rel="noreferrer">阮一峰的入门教程</a>操作就能理解。但是这个文章是很古老的版本的，里面用到action的配置现在都不对了，要注意甄别。</p><p>然而现在的和它有几点不用之处，也就是本文需要解决的问题</p><ol><li>cra创建的工程，默认打开输出是在项目根目录下，而VitePress打包之后的目录是在/docs/.vitepress/dist</li><li>现在我们要做的是把文档工程打包，然后把打包后的产物提交到另外一个专门用来放pages的工程，然后由github再重新部署。所以我们要做的事情就是<strong>npm run build-&gt;将build产物dist文件夹push到pages工程对应分支的对应位置</strong></li></ol><h4 id="代码" tabindex="-1">代码 <a class="header-anchor" href="#代码" aria-hidden="true">#</a></h4><p>在文档工程的根目录下添加.github/workflows/ci.yml文件，内容如下</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">CI</span></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">build-and-deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Checkout 🛎️</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v3</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">persist-credentials</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Install and Build 🔧</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">|</span></span>
<span class="line"><span style="color:#C3E88D;">          npm ci</span></span>
<span class="line"><span style="color:#C3E88D;">          npm run build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy 🚀</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JamesIves/github-pages-deploy-action@v4</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">folder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">branch</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">token</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.personal_access_token }}</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">repository-name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">okey573/okey573.github.io</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">target-folder</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs</span></span>
<span class="line"></span></code></pre></div><h4 id="针对上面yml的说明" tabindex="-1">针对上面YML的说明 <a class="header-anchor" href="#针对上面yml的说明" aria-hidden="true">#</a></h4><p>上面两个step都好理解，checkout和打包，主要说明<strong>Deploy</strong>步骤里的with参数</p><ul><li>folder 打包产物的路径，就正常写从根目录开始的真实路径就行了</li><li>branch 要推送到哪个Repo的哪个分支</li><li>token 就是github的token，怎么生成的可以参考<a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank" rel="noreferrer">官方文档</a></li><li>repository-name 要推送到哪个Repo，就是github的Repo的完整路径（例如<code>https://github.com/okey573/okey573.github.io</code>）<code>https://github.com/</code>后面的部分（也就是<code>okey573/okey573.github.io</code>）。</li><li>target-folder就是要推送目标Repo的哪个目录</li></ul>`,19),p=[o];function t(r,c,i,y,h,D){return a(),n("div",null,p)}const A=s(l,[["render",t]]);export{d as __pageData,A as default};