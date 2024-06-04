import{_ as t,c as e,o as l,a4 as r}from"./chunks/framework.CbHUKvme.js";const f=JSON.parse('{"title":"伪元素和伪类","description":"","frontmatter":{"title":"伪元素和伪类"},"headers":[],"relativePath":"summary/css/pseudo.md","filePath":"summary/css/pseudo.md","lastUpdated":1717516946000}'),n={name:"summary/css/pseudo.md"},d=r('<h1 id="伪元素和伪类" tabindex="-1">伪元素和伪类 <a class="header-anchor" href="#伪元素和伪类" aria-label="Permalink to &quot;伪元素和伪类&quot;">​</a></h1><h2 id="伪元素" tabindex="-1">伪元素 <a class="header-anchor" href="#伪元素" aria-label="Permalink to &quot;伪元素&quot;">​</a></h2><p>伪元素为 DOM 树没有定义的虚拟元素。不同于其他选择器，它不以元素为最小选择单元，它选择的是元素指定内容。比如 ::before 表示选择元素内容的之前内容，也就是 &quot;&quot; ； ::selection 表示选择元素被选中的内容。</p><ul><li>::after</li><li>::before</li><li>::first-letter</li><li>::first-line</li><li>::selection</li><li>::placeholder</li></ul><h2 id="伪类" tabindex="-1">伪类 <a class="header-anchor" href="#伪类" aria-label="Permalink to &quot;伪类&quot;">​</a></h2><p>伪类用于选择 DOM 树之外的信息，或是不能用简单选择器进行表示的信息。前者包含那些匹配指定状态的元素，比如 :visited， :active； 后者包含那些满足一定逻辑条件的DOM树中的元素，比如 :first-child， :first-of-type， :target</p><table><thead><tr><th style="text-align:center;">Selector</th><th style="text-align:center;">Meaning</th><th style="text-align:center;">CSS</th></tr></thead><tbody><tr><td style="text-align:center;">:active</td><td style="text-align:center;">选择正在被激活的元素</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">:hover</td><td style="text-align:center;">选择被鼠标悬浮着元素</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">:link</td><td style="text-align:center;">选择未被访问的元素</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">:visited</td><td style="text-align:center;">选择已被访问的元素</td><td style="text-align:center;">1</td></tr><tr><td style="text-align:center;">:first-child</td><td style="text-align:center;">选择满足是其父元素的第一个子元素的元素</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">:lang</td><td style="text-align:center;">选择带有指定 lang 属性的元素</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">:focus</td><td style="text-align:center;">选择拥有键盘输入焦点的元素</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">:enable</td><td style="text-align:center;">选择每个已启动的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:disable</td><td style="text-align:center;">选择每个已禁止的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:checked</td><td style="text-align:center;">选择每个被选中的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:target</td><td style="text-align:center;">选择当前的锚点元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:first-of-type</td><td style="text-align:center;">选择满足是其父元素的第一个某类型子元素的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:last-of-type</td><td style="text-align:center;">选择满足是其父元素的最后一个某类型子元素的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:only-of-type</td><td style="text-align:center;">选择满足是其父元素的唯一一个某类型子元素的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:nth-of-type(n)</td><td style="text-align:center;">选择满足是其父元素的第n个某类型子元素的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:nth-last-of-type(n)</td><td style="text-align:center;">选择满足是其父元素的倒数第n个某类型的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:only-child</td><td style="text-align:center;">选择满足是其父元素的唯一一个子元素的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:last-child</td><td style="text-align:center;">选择满足是其父元素的最后一个元素的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:nth-child(n)</td><td style="text-align:center;">选择满足是其父元素的第n个子元素的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:nth-last-child(n)</td><td style="text-align:center;">选择满足是其父元素的倒数第n个子元素的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:empty</td><td style="text-align:center;">选择满足没有子元素的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:in-range</td><td style="text-align:center;">选择满足值在指定范围内的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:out-of-range</td><td style="text-align:center;">选择值不在指定范围内的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:invalid</td><td style="text-align:center;">选择满足值为无效值的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:valid</td><td style="text-align:center;">选择满足值为有效值的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:not(selector)</td><td style="text-align:center;">选择不满足selector的元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:optional</td><td style="text-align:center;">选择为可选项的表单元素，即没有“required”属性</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:read-only</td><td style="text-align:center;">选择有&quot;readonly&quot;的表单元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:read-write</td><td style="text-align:center;">选择没有&quot;readonly&quot;的表单元素</td><td style="text-align:center;">3</td></tr><tr><td style="text-align:center;">:root</td><td style="text-align:center;">选择根元素</td><td style="text-align:center;">3</td></tr></tbody></table><h2 id="区别和比较" tabindex="-1">区别和比较 <a class="header-anchor" href="#区别和比较" aria-label="Permalink to &quot;区别和比较&quot;">​</a></h2><ul><li>伪类本质上是为了弥补常规CSS选择器的不足，以便获取到更多信息；</li><li>伪元素本质上是创建了一个有内容的虚拟容器；</li><li>CSS3 中伪类和伪元素的语法不同； 伪类 :link :hover 伪元素 ::before ::after</li></ul><h2 id="after-after和-before-before的异同" tabindex="-1">:after/::after和:before/::before的异同 <a class="header-anchor" href="#after-after和-before-before的异同" aria-label="Permalink to &quot;:after/::after和:before/::before的异同&quot;">​</a></h2><p>都可以用来表示伪类对象，用来设置对象前的内容， :before 和 ::before 写法是等效的; :after 和 ::after 写法是等效的， :before / :after 是 css1 (也可能是css2)的写法</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://blog.csdn.net/qq_45025670/article/details/125588463" target="_blank" rel="noreferrer">伪元素与伪类</a></li></ul>',13),a=[d];function i(s,c,y,g,x,o){return l(),e("div",null,a)}const u=t(n,[["render",i]]);export{f as __pageData,u as default};
