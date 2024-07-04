import{_ as a,c as e,o as l,a4 as i}from"./chunks/framework.CbHUKvme.js";const b=JSON.parse('{"title":"浏览器进程","description":"","frontmatter":{"title":"浏览器进程","outline":[2,6]},"headers":[],"relativePath":"summary/browser/process.md","filePath":"summary/browser/process.md","lastUpdated":1720078357000}'),r={name:"summary/browser/process.md"},t=i('<h1 id="浏览器进程" tabindex="-1">浏览器进程 <a class="header-anchor" href="#浏览器进程" aria-label="Permalink to &quot;浏览器进程&quot;">​</a></h1><h2 id="五大进程" tabindex="-1">五大进程 <a class="header-anchor" href="#五大进程" aria-label="Permalink to &quot;五大进程&quot;">​</a></h2><h3 id="主进程" tabindex="-1">主进程 <a class="header-anchor" href="#主进程" aria-label="Permalink to &quot;主进程&quot;">​</a></h3><p>Browser 进程：浏览器的主进程（负责协调、主控），只有一个。</p><p>主要作用：</p><ul><li>负责浏览器界面显示，与用户交互。如前进，后退等</li><li>负责各个页面的管理，创建和销毁其他进程</li><li>将渲染（Renderer）进程得到的内存中的Bitmap（位图），绘制到用户界面上</li><li>网络资源的管理，下载等</li></ul><h3 id="插件进程" tabindex="-1">插件进程 <a class="header-anchor" href="#插件进程" aria-label="Permalink to &quot;插件进程&quot;">​</a></h3><p>第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件时才创建</p><h3 id="gpu-进程" tabindex="-1">GPU 进程 <a class="header-anchor" href="#gpu-进程" aria-label="Permalink to &quot;GPU 进程&quot;">​</a></h3><p>最多一个，用于 3D 绘制等</p><h3 id="渲染进程" tabindex="-1">渲染进程 <a class="header-anchor" href="#渲染进程" aria-label="Permalink to &quot;渲染进程&quot;">​</a></h3><p>浏览器渲染进程（即通常所说的浏览器内核）（Renderer 进程，内部是多线程的）：主要作用为页面渲染，脚本执行，事件处理等</p><h3 id="网络进程" tabindex="-1">网络进程 <a class="header-anchor" href="#网络进程" aria-label="Permalink to &quot;网络进程&quot;">​</a></h3><p>主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立处理，成为单独一个进程。</p><h2 id="渲染进程中的线程" tabindex="-1">渲染进程中的线程 <a class="header-anchor" href="#渲染进程中的线程" aria-label="Permalink to &quot;渲染进程中的线程&quot;">​</a></h2><h3 id="gui渲染线程" tabindex="-1">GUI渲染线程 <a class="header-anchor" href="#gui渲染线程" aria-label="Permalink to &quot;GUI渲染线程&quot;">​</a></h3><ul><li>负责渲染浏览器界面，解析 HTML，CSS，构建 DOM 树和 RenderObject 树，布局和绘制等。</li><li>当界面需要重绘 (Repaint) 或由于某种操作引发回流 (reflow) 时，该线程就会执行</li><li>注意，GUI 渲染线程与 JS 引擎线程是互斥的，当 JS 引擎执行时 GUI 线程会被挂起（相当于被冻结了），GUI 更新会被保存在一个队列中等到 JS 引擎空闲时立即被执行。</li></ul><h3 id="js引擎线程-单线程" tabindex="-1">JS引擎线程(单线程) <a class="header-anchor" href="#js引擎线程-单线程" aria-label="Permalink to &quot;JS引擎线程(单线程)&quot;">​</a></h3><ul><li>也称为 JS 内核，负责处理 Javascript 脚本程序。（例如常常听到的谷歌浏览器的 V8 引擎，新版火狐的 JaegerMonkey 引擎等）</li><li>JS 引擎线程负责解析 Javascript 脚本，运行代码。</li><li>JS 引擎一直等待着任务队列中任务的到来，然后加以处理，一个 Tab 页（renderer 进程）中无论什么时候都只有一个 JS 线程在运行 JS 程序</li><li>同样注意，GUI 渲染线程与 JS 引擎线程是互斥的，所以如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。</li></ul><h3 id="事件触发线程" tabindex="-1">事件触发线程 <a class="header-anchor" href="#事件触发线程" aria-label="Permalink to &quot;事件触发线程&quot;">​</a></h3><ul><li>归属于渲染进程而不是 JS 引擎，用来控制事件轮询（可以理解，JS 引擎自己都忙不过来，需要浏览器另开线程协助）</li><li>当 JS 引擎执行代码块如鼠标点击、AJAX 异步请求等，会将对应任务添加到事件触发线程中</li><li>当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理任务队列的队尾，等待 JS 引擎的处理</li><li>注意，由于 JS 的单线程关系，所以这些待处理队列中的事件都得排队等待 JS 引擎处理（当JS引擎空闲时才会去执行）</li></ul><h3 id="定时触发器线程" tabindex="-1">定时触发器线程 <a class="header-anchor" href="#定时触发器线程" aria-label="Permalink to &quot;定时触发器线程&quot;">​</a></h3><ul><li>定时器 setInterval 与 setTimeout 所在线程</li><li>浏览器定时计数器并不是由 JavaScript 引擎计数的,（因为 JavaScript 引擎是单线程的, 如果任务队列处于阻塞线程状态就会影响记计时的准确）</li><li>因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待 JS 引擎空闲后执行）</li><li>注意，W3C 在 HTML 标准中规定，规定要求 setTimeout 中低于 4ms 的时间间隔算为 4ms。</li></ul><h3 id="异步http请求线程" tabindex="-1">异步http请求线程 <a class="header-anchor" href="#异步http请求线程" aria-label="Permalink to &quot;异步http请求线程&quot;">​</a></h3><ul><li>用于处理请求 XMLHttpRequest，在连接后是通过浏览器新开一个线程请求。如 ajax，是浏览器新开一个 http 线程</li><li>将检测到状态变更（如 ajax 返回结果）时，如果设置有回调函数，异步线程就产生状态变更事件，将这个回调再放入 js 引擎线程的事件队列中。再由 JavaScript 引擎执行。</li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://www.cnblogs.com/ygunoil/p/15156671.html" target="_blank" rel="noreferrer">浏览器四大进程</a></li></ul>',27),o=[t];function h(s,n,d,c,u,p){return l(),e("div",null,o)}const S=a(r,[["render",h]]);export{b as __pageData,S as default};
