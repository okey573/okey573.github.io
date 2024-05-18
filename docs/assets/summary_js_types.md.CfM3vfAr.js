import{_ as t,c as e,o as l,a4 as n}from"./chunks/framework.CbHUKvme.js";const q=JSON.parse('{"title":"变量类型","description":"","frontmatter":{"title":"变量类型","outline":[2,6]},"headers":[],"relativePath":"summary/js/types.md","filePath":"summary/js/types.md","lastUpdated":1716001354000}'),a={name:"summary/js/types.md"},r=n('<h1 id="variable" tabindex="-1">variable <a class="header-anchor" href="#variable" aria-label="Permalink to &quot;variable&quot;">​</a></h1><p>变量类型可分为基本类型和引用类型（对象）</p><h2 id="基本类型" tabindex="-1">基本类型 <a class="header-anchor" href="#基本类型" aria-label="Permalink to &quot;基本类型&quot;">​</a></h2><p>在 JavaScript 中，基本类型（基本数值、基本数据类型）是一种既非对象也无方法或属性 (en-US)的数据。有 7 种原始数据类型</p><ul><li>string</li><li>number</li><li>bigint</li><li>boolean</li><li>undefined</li><li>symbol</li><li>null</li></ul><p>所有基本类型的值都是不可改变的。但需要注意的是，基本类型本身和一个赋值为基本类型的变量的区别。变量会被赋予一个新值，而基本类型不能像数组、对象以及函数那样被改变。</p><p>基本类型没有方法，但仍然表现得像有方法一样。当在基本类型上访问属性时，JavaScript 自动将值装入包装器对象中，并访问该对象上的属性。例如，&quot;foo&quot;.includes(&quot;f&quot;) 隐式创建了一个 String 包装对象，并在该对象上调用 String.prototype.includes()。这种自动装箱行为在 JavaScript 代码中是无法观察到的，但却是各种行为的一个很好的心理模型——例如，为什么“改变”基本类型不起作用（因为 str.Foo = 1 不是赋值给 str 本身的 Foo 属性，而是赋值给了一个临时包装器对象）</p><h2 id="引用类型-对象" tabindex="-1">引用类型（对象） <a class="header-anchor" href="#引用类型-对象" aria-label="Permalink to &quot;引用类型（对象）&quot;">​</a></h2><ul><li>Object</li><li>Function</li><li>Date</li><li>一大堆...</li></ul><h2 id="隐式类型转换" tabindex="-1">隐式类型转换 <a class="header-anchor" href="#隐式类型转换" aria-label="Permalink to &quot;隐式类型转换&quot;">​</a></h2><h3 id="转换为-string" tabindex="-1">转换为 String <a class="header-anchor" href="#转换为-string" aria-label="Permalink to &quot;转换为 String&quot;">​</a></h3><p>算法运算符（+）， 任何值和字符串做 + 时，都会先转换为字符串</p><h3 id="转换为number" tabindex="-1">转换为Number <a class="header-anchor" href="#转换为number" aria-label="Permalink to &quot;转换为Number&quot;">​</a></h3><p>算法运算符（- * / %），任何值做 - * / % ，都会将其转换为 Number ，再做运算</p><p>一元运算符（+），对于非 Number类型的值，会把任意变量都转换成数字</p><h3 id="转换为boolean" tabindex="-1">转换为Boolean <a class="header-anchor" href="#转换为boolean" aria-label="Permalink to &quot;转换为Boolean&quot;">​</a></h3><p>逻辑计算符（!非），! 对一个布尔值做取反运算；如果对非布尔值取反，则会将其转换为布尔值，再取反；</p><h3 id="字符串和数字运算" tabindex="-1">字符串和数字运算 <a class="header-anchor" href="#字符串和数字运算" aria-label="Permalink to &quot;字符串和数字运算&quot;">​</a></h3><ul><li>字符串加数字 数字就会转成字符串</li><li>数字减字符串，字符串转成数字。如果字符串不是纯数字就会转成NaN。字符串减数字也一样。两个字符串相减也先转成数字</li></ul><h3 id="运算时的类型转换" tabindex="-1">== 运算时的类型转换 <a class="header-anchor" href="#运算时的类型转换" aria-label="Permalink to &quot;== 运算时的类型转换&quot;">​</a></h3><ul><li>undefined == null</li><li>字符串和数字比较时，字符串转数字</li><li>数字为布尔比较时，布尔转数字</li><li>字符串和布尔比较时，两者转数字</li></ul><h3 id="类型转换表" tabindex="-1">类型转换表 <a class="header-anchor" href="#类型转换表" aria-label="Permalink to &quot;类型转换表&quot;">​</a></h3><table><thead><tr><th style="text-align:center;">始值</th><th style="text-align:center;">转换为数字</th><th style="text-align:center;">转换为字符串</th><th style="text-align:center;">转换为逻辑</th></tr></thead><tbody><tr><td style="text-align:center;">false</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;false&quot;</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">true</td><td style="text-align:center;">1</td><td style="text-align:center;">&quot;true&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">0</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;0&quot;</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">&quot;1&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">&quot;0&quot;</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;0&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">&quot;000&quot;</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;000&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">&quot;1&quot;</td><td style="text-align:center;">1</td><td style="text-align:center;">&quot;1&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">NaN</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;NaN&quot;</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">Infinity</td><td style="text-align:center;">Infinity</td><td style="text-align:center;">&quot;Infinity&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">-Infinity</td><td style="text-align:center;">-Infinity</td><td style="text-align:center;">&quot;-Infinity&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">&quot;20&quot;</td><td style="text-align:center;">20</td><td style="text-align:center;">&quot;20&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">&quot;twenty&quot;</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;twenty&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">[ ]</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">[20]</td><td style="text-align:center;">20</td><td style="text-align:center;">&quot;20&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">[10,20]</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;10,20&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">[&quot;twenty&quot;]</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;twenty&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">[&quot;ten&quot;,&quot;twenty&quot;]</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;ten,twenty&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">function(){}</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;function(){}&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">{}</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;[object Object]&quot;</td><td style="text-align:center;">true</td></tr><tr><td style="text-align:center;">null</td><td style="text-align:center;">0</td><td style="text-align:center;">&quot;null&quot;</td><td style="text-align:center;">false</td></tr><tr><td style="text-align:center;">undefined</td><td style="text-align:center;">NaN</td><td style="text-align:center;">&quot;undefined&quot;</td><td style="text-align:center;">false</td></tr></tbody></table><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://www.w3school.com.cn/js/js_type_conversion.asp" target="_blank" rel="noreferrer">JavaScript 类型转换</a></p></li><li><p><a href="https://juejin.cn/post/7006210269345120293" target="_blank" rel="noreferrer">js隐式类型转换</a></p></li></ul>',25),d=[r];function i(s,o,c,u,y,x){return l(),e("div",null,d)}const h=t(a,[["render",i]]);export{q as __pageData,h as default};
