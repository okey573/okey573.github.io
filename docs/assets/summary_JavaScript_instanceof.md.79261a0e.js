import{_ as s,o as n,c as a,a as o}from"./app.ba060fcc.js";const i=JSON.parse('{"title":"instanceof","description":"","frontmatter":{"title":"instanceof"},"headers":[{"level":2,"title":"\u7406\u89E3","slug":"\u7406\u89E3","link":"#\u7406\u89E3","children":[]},{"level":2,"title":"\u5B9E\u73B0","slug":"\u5B9E\u73B0","link":"#\u5B9E\u73B0","children":[]}],"relativePath":"summary/JavaScript/instanceof.md","lastUpdated":1676364607000}'),l={name:"summary/JavaScript/instanceof.md"},p=o(`<h2 id="\u7406\u89E3" tabindex="-1">\u7406\u89E3 <a class="header-anchor" href="#\u7406\u89E3" aria-hidden="true">#</a></h2><p>\u5224\u65AD\u4E00\u4E2Afunction\u7684prototype\u662F\u5426\u5B58\u5728\u4E8E\u67D0\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A</p><ul><li><a href="/docs/summary/JavaScript/prototype-chain.html#\u56FE\u89E3">\u539F\u578B\u94FE</a></li></ul><h2 id="\u5B9E\u73B0" tabindex="-1">\u5B9E\u73B0 <a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> theInstanceof </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">object</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">constructor</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">object</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">object</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">constructor</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">function</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// getPrototypeOf\u8FD9\u4E2Aapi\u7B49\u4EF7\u4E8E\u76F4\u63A5\u8BBF\u95EE\u5BF9\u8C61\u7684__proto__\u5C5E\u6027</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPrototypeOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">object</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prototype</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">constructor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">prototype</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getPrototypeOf</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">proto</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">/********************* \u9A8C\u8BC1 *********************/</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Foo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> foo1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Foo</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> anyObj </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(foo1 </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#A6ACCD;"> === </span><span style="color:#FFCB6B;">theInstanceof</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">foo1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">Foo</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(anyObj </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Foo</span><span style="color:#A6ACCD;"> === </span><span style="color:#FFCB6B;">theInstanceof</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">anyObj</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">Foo</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(foo1 </span><span style="color:#89DDFF;">instanceof</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#A6ACCD;"> === </span><span style="color:#FFCB6B;">theInstanceof</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">foo1</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div>`,5),e=[p];function t(c,r,y,F,D,A){return n(),a("div",null,e)}const f=s(l,[["render",t]]);export{i as __pageData,f as default};