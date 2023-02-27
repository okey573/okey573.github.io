import{_ as s,c as a,o as n,a as l}from"./app.dfd2d94d.js";const C=JSON.parse('{"title":"面试总结","description":"","frontmatter":{"title":"面试总结","outline":[2,6]},"headers":[{"level":2,"title":"工作中比较有成就感的事情","slug":"工作中比较有成就感的事情","link":"#工作中比较有成就感的事情","children":[]},{"level":2,"title":"优化","slug":"优化","link":"#优化","children":[]},{"level":2,"title":"遇到了哪些问题，如何解决？","slug":"遇到了哪些问题-如何解决","link":"#遇到了哪些问题-如何解决","children":[]},{"level":2,"title":"最近新学到的内容？","slug":"最近新学到的内容","link":"#最近新学到的内容","children":[]},{"level":2,"title":"算法类题目","slug":"算法类题目","link":"#算法类题目","children":[]}],"relativePath":"interview/index.md","lastUpdated":1677493695000}'),p={name:"interview/index.md"},o=l(`<h1 id="面试中遇到的问题" tabindex="-1">面试中遇到的问题 <a class="header-anchor" href="#面试中遇到的问题" aria-hidden="true">#</a></h1><h2 id="工作中比较有成就感的事情" tabindex="-1">工作中比较有成就感的事情 <a class="header-anchor" href="#工作中比较有成就感的事情" aria-hidden="true">#</a></h2><details><summary><b>答案</b></summary><p><ul><li>工作一年独立负责前端</li><li>小程序（微信生态）</li><li>后端接口的缓存器（Redis实现）</li><li>参与后端接口优化（数据库层面）</li><li>升级 vue 版本，并制定相关规范， 搭建文档中心</li><li>vite(create-vue) 还是 webpack(vue-cli) 打包 sdk</li><li>自定义 bpmn-js 的属性控制面板</li></ul></p></details><h2 id="优化" tabindex="-1">优化 <a class="header-anchor" href="#优化" aria-hidden="true">#</a></h2><details><summary><b>答案</b></summary><p><p>有可量化的优化，也有很宏观的，主观的优化：</p><ul><li>优化界面渲染速度，打包速度等等。这部分甚至可以从快慢属性说起，然后到做网络缓存之类的</li><li>开发效率工具，给团队赋能</li></ul></p></details><h2 id="遇到了哪些问题-如何解决" tabindex="-1">遇到了哪些问题，如何解决？ <a class="header-anchor" href="#遇到了哪些问题-如何解决" aria-hidden="true">#</a></h2><details><summary><b>答案</b></summary><p><ul><li><p>NodeJS 环境中怎么获取某个npm包的最新版本？</p><p>使用 fetch 查询 cdn 中的 packge.json 文件</p></li><li><p>BPMN 自定义属性操作面板</p><p>翻源码，用 react jsx， 模拟实现一个 plugin</p></li><li><p>开发 create-app 原本使用esm + esBuild 打包的架构，但是 esBuild 不能解析 <code>i<wbr>mport.meta.url</code></p><p>还是改成了使用CommonJS</p></li><li><p>cli 中判断 sdk 的版本实际只需要读取一个version文件就行，怎么避免把整个 repo clone 下来</p><p><code>git archive</code> 导出指定目录 zip 格式，然后解压</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">execute</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">git archive -o </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">tempZipSdkDir</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;"> --remote &quot;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">repo</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&quot; &quot;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">branch</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&quot; &quot;</span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">latestSdkPath</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&quot;</span><span style="color:#89DDFF;">\`</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> compressing</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">zip</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">uncompress</span><span style="color:#A6ACCD;">(tempZipSdkDir</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> tempSdkDir)</span></span>
<span class="line"></span></code></pre></div></li></ul></p></details><h2 id="最近新学到的内容" tabindex="-1">最近新学到的内容？ <a class="header-anchor" href="#最近新学到的内容" aria-hidden="true">#</a></h2><details><summary><b>答案</b></summary><p><ul><li>scroll snap</li><li>fast-glob</li><li>Deno</li><li>vmin</li><li>字符串的码点和码元</li></ul></p></details><h2 id="算法类题目" tabindex="-1">算法类题目 <a class="header-anchor" href="#算法类题目" aria-hidden="true">#</a></h2><h4 id="一道考察括号匹配的问题" tabindex="-1">一道考察括号匹配的问题 <a class="header-anchor" href="#一道考察括号匹配的问题" aria-hidden="true">#</a></h4><details><summary><b>题目</b></summary><p><p>输入一个字符串，字符串包括数字、英文和英文括号，将该字符串反转，反转要求如下：</p><ol><li>英文左右括号内的内容连同左右括号当成一个整体处理，匹配的左右括号内无内容，将左右括号看成一个整体。</li><li>左右括号必须成对匹配，且左右括号内不能存在无匹配的左括号或右括号， 方能看做一个整体，只要文字被左右括号包围，就可将左右括号和括号内的内容看成一个整体。</li><li>左右括号内再包含匹配成功的左右括号，按照最外层括号看成整体。</li><li>无匹配的左括号和右括号当成一个单一元素处理，和数字、英文处理逻辑一致。</li></ol><p><strong>如</strong>: 输入 abcd 返回dcba</p><p>输入 abcd(efg 返回 gfe(dcba</p><p>输入 abcd(efg) 返回 (efg)dcba</p><p>输入 如abc(efg(dfg)) 返回 (efg(dfg))cba （每个左右括号都有右括号匹配，按照最外层匹配括号看成一个整体）</p><p>输入 abc(efg(dfg) 返回(dfg)gfe(cba (由于第一个左括号无右括号匹配)</p><p>输入 )abcd( 返回(dcba) (由于第一个左括号无右括号匹配)</p></p></details><details><summary><b>答案</b></summary><p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">str</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">输入==&gt;: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stack</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> []</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">str</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tempS</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">while</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">popS</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">pop</span><span style="color:#F07178;">()</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">popS</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">tempS</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tempS</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">)</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;font-style:italic;">break</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">tempS</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">popS</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tempS</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">tempS</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">tempS</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unshift</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">tempS</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unshift</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">unshift</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">输出==&gt;: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">stack</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reverse</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;">result</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\n</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></p></details>`,13),e=[o];function t(c,r,F,y,D,i){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
