import{_ as t,c as e,o as a,a4 as r}from"./chunks/framework.CbHUKvme.js";const b=JSON.parse('{"title":"微前端","description":"","frontmatter":{"title":"微前端","outline":[2,6]},"headers":[],"relativePath":"summary/engineered/micro-frontend.md","filePath":"summary/engineered/micro-frontend.md","lastUpdated":1720698251000}'),o={name:"summary/engineered/micro-frontend.md"},n=r('<h1 id="微前端" tabindex="-1">微前端 <a class="header-anchor" href="#微前端" aria-label="Permalink to &quot;微前端&quot;">​</a></h1><h2 id="什么是微前端" tabindex="-1">什么是微前端 <a class="header-anchor" href="#什么是微前端" aria-label="Permalink to &quot;什么是微前端&quot;">​</a></h2><blockquote><p>微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略。</p></blockquote><h2 id="微前端的特性" tabindex="-1">微前端的特性 <a class="header-anchor" href="#微前端的特性" aria-label="Permalink to &quot;微前端的特性&quot;">​</a></h2><ul><li>技术栈无关</li><li>各自独立部署</li><li>增量升级</li><li>独立运行时</li><li>提升效率</li></ul><h2 id="微前端的实现方式" tabindex="-1">微前端的实现方式 <a class="header-anchor" href="#微前端的实现方式" aria-label="Permalink to &quot;微前端的实现方式&quot;">​</a></h2><table><thead><tr><th><strong>方案</strong></th><th><strong>描述</strong></th><th><strong>优点</strong></th><th><strong>缺点</strong></th></tr></thead><tbody><tr><td>Nginx路由转发</td><td>通过Nginx配置反向代理来实现不同路径映射到不同应用，例如 www.abc.com/app1 对应app1， www.abc.com/app2 对应app2，这种方案本身并不属于前端层面的改造，更多的是运维的配置。</td><td>简单，快速，易配置</td><td>在切换应用时会触发浏览器刷新，影响体验</td></tr><tr><td>iframe嵌套</td><td>父应用单独是一个页面，每个子应用嵌套一个iframe，父子通信可采用postMessage或者contentWindow方式</td><td>实现简单，子应用之间自带沙箱，天然隔离，互不影响</td><td>iframe的样式显示，滚动条可能在页面中间、通信成本，url不能同步显示，cookie问题，兼容性等都具有局限性；太过简单而显得low</td></tr><tr><td>Web Components</td><td>每个子应用需要采用纯Web Components技术编写组件，是一套全新的开发模式</td><td>每个子应用拥有独立的script和css，也可单独部署</td><td>对于历史系统改造成本高，子应用通信较为复杂易踩坑</td></tr><tr><td>组合式应用路由分发</td><td>每个子应用独立构建和部署，运行时由父应用来进行路由管理，应用加载，启动，卸载，以及通信机制</td><td>纯前端改造，体验良好，可无感知切换，子应用相互隔离</td><td>需要设计和开发，由于父子应用处于同一页面运行，需要解决子应用的样式冲突，变量对象污染，通信机制等技术点</td></tr></tbody></table><h2 id="微前端的路由分发" tabindex="-1">微前端的路由分发 <a class="header-anchor" href="#微前端的路由分发" aria-label="Permalink to &quot;微前端的路由分发&quot;">​</a></h2><p>作为微前端的基座应用，是整个应用的入口，负责承载当前微应用的展示和对其他路由微应用的转发，对于当前微应用的展示，一般是由以下几步构成：</p><ol><li><p>作为一个SPA的基座应用，本身是一套纯前端项目，要想展示微应用的页面除了采用iframe之外，要能先拉取到微应用的页面内容， 这就需要远程拉取机制。</p></li><li><p>远程拉取机制通常会采用fetch API来首先获取到微应用的HTML内容，然后通过解析将微应用的JavaScript和CSS进行抽离，采用eval方法来运行JavaScript，并将CSS和HTML内容append到基座应用中留给微应用的展示区域，当微应用切换走时，同步卸载这些内容，这就构成的当前应用的展示流程。</p></li><li><p>当然这个流程里会涉及到CSS样式的污染以及JavaScript对全局对象的污染，这个涉及到隔离问题会在后面讨论，而目前针对远程拉取机制这套流程，已有现成的库来实现，可以参考import-html-entry和system.js。</p></li></ol><p>对于路由分发而言，以采用vue-router开发的基座SPA应用来举例，主要是下面这个流程：</p><p>当浏览器的路径变化后，vue-router会监听hashchange或者popstate事件，从而获取到路由切换的时机。 最先接收到这个变化的是基座的router，通过查询注册信息可以获取到转发到那个微应用，经过一些逻辑处理后，采用修改hash方法或者pushState方法来路由信息推送给微应用的路由，微应用可以是手动监听hashchange或者popstate事件接收，或者采用React-router，vue-router接管路由，后面的逻辑就由微应用自己控制。</p><h2 id="微前端的应用隔离" tabindex="-1">微前端的应用隔离 <a class="header-anchor" href="#微前端的应用隔离" aria-label="Permalink to &quot;微前端的应用隔离&quot;">​</a></h2><p>应用隔离问题主要分为主应用和微应用，微应用和微应用之间的JavaScript执行环境隔离，CSS样式隔离，我们先来说下CSS的隔离。</p><p>CSS隔离：当主应用和微应用同屏渲染时，就可能会有一些样式会相互污染，如果要彻底隔离CSS污染，可以采用CSS Module 或者命名空间的方式，给每个微应用模块以特定前缀，即可保证不会互相干扰，可以采用webpack的postcss插件，在打包时添加特定的前缀。</p><p>而对于微应用与微应用之间的CSS隔离就非常简单，在每次应用加载时，将该应用所有的link和style 内容进行标记。在应用卸载后，同步卸载页面上对应的link和style即可。</p><p>JavaScript隔离：每当微应用的JavaScript被加载并运行时，它的核心实际上是对全局对象Window的修改以及一些全局事件的改变，例如jQuery这个js运行后，会在Window上挂载一个window.$对象，对于其他库React，Vue也不例外。为此，需要在加载和卸载每个微应用的同时，尽可能消除这种冲突和影响，最普遍的做法是采用沙箱机制（SandBox）。</p><p>沙箱机制的核心是让局部的JavaScript运行时，对外部对象的访问和修改处在可控的范围内，即无论内部怎么运行，都不会影响外部的对象。通常在Node.js端可以采用vm模块，而对于浏览器，则需要结合with关键字和window.Proxy对象来实现浏览器端的沙箱。</p><h2 id="微前端的消息通信" tabindex="-1">微前端的消息通信 <a class="header-anchor" href="#微前端的消息通信" aria-label="Permalink to &quot;微前端的消息通信&quot;">​</a></h2><p>应用间通信有很多种方式，当然，要让多个分离的微应用之间要做到通信，本质上仍离不开中间媒介或者说全局对象。所以对于消息订阅（pub/sub）模式的通信机制是非常适用的，在基座应用中会定义事件中心Event，每个微应用分别来注册事件，当被触发事件时再有事件中心统一分发，这就构成了基本的通信机制</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://www.jianshu.com/p/0ac8e1a666cf" target="_blank" rel="noreferrer">17个可以实现微前端的方案</a></p></li><li><p><a href="https://www.jianshu.com/p/5576598993c6" target="_blank" rel="noreferrer">微前端-最容易看懂的微前端知识</a></p></li><li><p><a href="https://blog.csdn.net/huangpb123/article/details/123215785" target="_blank" rel="noreferrer">什么是微前端</a></p></li><li><p><a href="https://juejin.cn/post/7148075486403362846" target="_blank" rel="noreferrer">Qiankun 原理-js沙箱是怎么做隔离的</a></p></li><li><p><a href="https://juejin.cn/post/7153140440777097224" target="_blank" rel="noreferrer">Qiankun实践——实现一个CSS沙箱</a></p></li><li><p><a href="https://www.cnblogs.com/dtux/p/17729670.html" target="_blank" rel="noreferrer">聊聊 QianKun JS 沙箱的那些事</a></p></li><li><p><a href="https://juejin.cn/post/6920110573418086413" target="_blank" rel="noreferrer">15分钟快速理解qiankun的js沙箱原理及其实现</a></p></li></ul>',22),i=[n];function l(p,d,s,h,c,u){return a(),e("div",null,i)}const f=t(o,[["render",l]]);export{b as __pageData,f as default};
