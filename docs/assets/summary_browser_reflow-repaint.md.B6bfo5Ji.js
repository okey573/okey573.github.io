import{_ as l,c as e,o as i,a4 as t}from"./chunks/framework.CbHUKvme.js";const m=JSON.parse('{"title":"回流和重绘","description":"","frontmatter":{"title":"回流和重绘"},"headers":[],"relativePath":"summary/browser/reflow-repaint.md","filePath":"summary/browser/reflow-repaint.md","lastUpdated":1721032547000}'),a={name:"summary/browser/reflow-repaint.md"},o=t('<h1 id="回流和重绘" tabindex="-1">回流和重绘 <a class="header-anchor" href="#回流和重绘" aria-label="Permalink to &quot;回流和重绘&quot;">​</a></h1><p><em>回流也叫重排</em></p><ol><li>浏览器使用流式布局模型 (Flow Based Layout)。</li><li>浏览器会把HTML解析成DOM，把CSS解析成CSSOM，DOM和CSSOM合并就产生了Render Tree。</li><li>有了RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。</li><li>由于浏览器使用流式布局，对Render Tree的计算通常只需要遍历一次就可以完成，但table及其内部元素除外，他们可能需要多次计算，通常要花3倍于同等元素的时间，这也是为什么要避免使用table布局的原因之一</li></ol><p><strong>回流必将引起重绘，重绘不一定会引起回流</strong></p><h2 id="回流-reflow" tabindex="-1">回流 (Reflow) <a class="header-anchor" href="#回流-reflow" aria-label="Permalink to &quot;回流 (Reflow)&quot;">​</a></h2><p>当Render Tree中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。</p><p>会导致回流的操作：</p><ul><li>页面首次渲染</li><li>浏览器窗口大小发生改变</li><li>元素尺寸或位置发生改变</li><li>元素内容变化（文字数量或图片大小等等）</li><li>元素字体大小变化</li><li>添加或者删除可见的DOM元素</li><li>激活CSS伪类（例如 :hover）</li><li>查询某些属性或调用某些方法</li></ul><p>一些常用且会导致回流的属性和方法：</p><ul><li>clientWidth、clientHeight、clientTop、clientLeft</li><li>offsetWidth、offsetHeight、offsetTop、offsetLeft</li><li>scrollWidth、scrollHeight、scrollTop、scrollLeft</li><li>scrollIntoView()、scrollIntoViewIfNeeded()</li><li>getComputedStyle()</li><li>getBoundingClientRect()</li><li>scrollTo()</li></ul><h2 id="重绘-repaint" tabindex="-1">重绘 (Repaint) <a class="header-anchor" href="#重绘-repaint" aria-label="Permalink to &quot;重绘 (Repaint)&quot;">​</a></h2><p>当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。</p><h2 id="性能影响" tabindex="-1">性能影响 <a class="header-anchor" href="#性能影响" aria-label="Permalink to &quot;性能影响&quot;">​</a></h2><p><strong>回流比重绘的代价要更高。</strong></p><p>有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。 现代浏览器会对频繁的回流或重绘操作进行优化： 浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。 当你访问以下属性或方法时，浏览器会立刻清空队列：</p><ul><li>clientWidth、clientHeight、clientTop、clientLeft</li><li>offsetWidth、offsetHeight、offsetTop、offsetLeft</li><li>scrollWidth、scrollHeight、scrollTop、scrollLeft</li><li>width、height</li><li>getComputedStyle()</li><li>getBoundingClientRect()</li></ul><p>因为队列中可能会有影响到这些属性或方法返回值的操作，即使你希望获取的信息与队列中操作引发的改变无关，浏览器也会强行清空队列，确保你拿到的值是最精确的。</p><h2 id="如何避免" tabindex="-1">如何避免 <a class="header-anchor" href="#如何避免" aria-label="Permalink to &quot;如何避免&quot;">​</a></h2><h4 id="css" tabindex="-1">css <a class="header-anchor" href="#css" aria-label="Permalink to &quot;css&quot;">​</a></h4><ul><li>避免使用table布局。</li><li>尽可能在DOM树的最末端改变class。</li><li>避免设置多层内联样式。</li><li>将动画效果应用到position属性为absolute或fixed的元素上。</li><li>避免使用CSS表达式（例如：calc()）。</li><li>对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。</li></ul><h4 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h4><ul><li>避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性。</li><li>避免频繁操作DOM，创建一个documentFragment，在它上面应用所有DOM操作，最后再把它添加到文档中。</li><li>也可以先为元素设置display: none，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘。</li><li>避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。</li></ul>',22),r=[o];function s(n,c,d,h,p,f){return i(),e("div",null,r)}const _=l(a,[["render",s]]);export{m as __pageData,_ as default};
