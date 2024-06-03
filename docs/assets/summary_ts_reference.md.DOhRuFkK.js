import{_ as e,c as t,o as i,a4 as a}from"./chunks/framework.CbHUKvme.js";const y=JSON.parse('{"title":"参考","description":"","frontmatter":{"title":"参考","lastUpdated":"Thu May 09 2024 18:01:26 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/ts/reference.md","filePath":"summary/ts/reference.md","lastUpdated":1717397084000}'),s={name:"summary/ts/reference.md"},l=a('<h1 id="reference" tabindex="-1">REFERENCE <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;REFERENCE&quot;">​</a></h1><h2 id="基础" tabindex="-1">基础 <a class="header-anchor" href="#基础" aria-label="Permalink to &quot;基础&quot;">​</a></h2><ul><li><code>&amp;</code> 交叉类型</li></ul><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> c</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可以理解成 `a` 这个类型既是 `b` 也是 `c`，所以会有 `b` 和 `c` 的全部属性</span></span></code></pre></div><ul><li><code>|</code> 联合类型</li></ul><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> c</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可以理解成 `a` 这个类型既可以是 `b` 也可以是 `c`，所以只会明确的有 `b` 和 `c` 的共有属性</span></span></code></pre></div><ul><li><code>keyof</code> 属性keys值</li></ul><h2 id="utility-types" tabindex="-1">Utility Types <a class="header-anchor" href="#utility-types" aria-label="Permalink to &quot;Utility Types&quot;">​</a></h2><ul><li><code>Partial&lt;T&gt;</code> 让T类型中的所有属性可选</li><li><code>Required&lt;T&gt;</code> 让T类型中的所有属性必选</li><li><code>Readonly&lt;T&gt;</code> 让T类型中的所有属性只读</li><li><code>Pick&lt;T, K extends keyof T&gt;</code> 从T中，选K对应的一组属性</li><li><code>Record&lt;K extends keyof any, T&gt;</code> K对应一组属性，都赋予T对应的类型</li><li><code>Exclude&lt;T, U&gt;</code> 从T中剔除可以赋值给U的类型</li><li><code>Extract&lt;T, U&gt;</code> 提取T中可以赋值给U的类型</li><li><code>Omit&lt;T, K extends keyof any&gt; = Pick&lt;T, Exclude&lt;keyof T, K&gt;&gt;</code> 从T中选取所有的属性值，然后移除属性名在K中的属性值</li><li><code>NonNullable&lt;T&gt;</code> 从T中剔除null和undefined</li><li><code>Parameters&lt;T extends (...args: any) =&gt; any&gt; = T extends (...args: infer P) =&gt; any ? P : never</code></li><li><code>ConstructorParameters&lt;T extends abstract new (...args: any) =&gt; any&gt; = T extends abstract new (...args: infer P) =&gt; any ? P : never</code></li><li><code>ReturnType&lt;T&gt;</code> 获取函数返回值类型。</li><li><code>InstanceType&lt;T&gt;</code> 获取构造函数类型的实例类型。</li><li><code>Uppercase&lt;S extends string&gt; = intrinsic</code></li><li><code>Lowercase&lt;S extends string&gt; = intrinsic</code></li><li><code>Capitalize&lt;S extends string&gt; = intrinsic</code></li><li><code>Uncapitalize&lt;S extends string&gt; = intrinsic</code></li><li><code>Optional&lt;T, K extends keyof T&gt; = Omit&lt;T, K&gt; &amp; Partial&lt;Pick&lt;T, K&gt;&gt;</code></li></ul><h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><ul><li><code>infer</code> <strong>还没搞懂</strong></li><li><code>intrinsic</code> <strong>一个内置关键字，还没搞懂</strong></li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://www.typescriptlang.org/docs/handbook/utility-types.html" target="_blank" rel="noreferrer">Utility Types</a></li></ul>',13),n=[l];function c(r,d,o,p,h,g){return i(),t("div",null,n)}const u=e(s,[["render",c]]);export{y as __pageData,u as default};
