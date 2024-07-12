import{_ as e,c as a,o,a4 as r}from"./chunks/framework.CbHUKvme.js";const b=JSON.parse('{"title":"标签页通信","description":"","frontmatter":{"title":"标签页通信","lastUpdated":"2024/07/08 15:43:44 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/browser/tab-communication.md","filePath":"summary/browser/tab-communication.md","lastUpdated":1720788835000}'),t={name:"summary/browser/tab-communication.md"},n=r('<h1 id="跨浏览器标签页通信" tabindex="-1">跨浏览器标签页通信 <a class="header-anchor" href="#跨浏览器标签页通信" aria-label="Permalink to &quot;跨浏览器标签页通信&quot;">​</a></h1><p>简单来分类，可以分为需要服务端和不需要服务端两类。不需要服务端就需要使用浏览器原生的一些 API</p><h2 id="cookie" tabindex="-1">Cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;Cookie&quot;">​</a></h2><p>使用 Cookie 进行数据存储和通信，并通过定时器轮询 (setInterval) 来检查数据变化</p><h2 id="localstorage-window-onstorage" tabindex="-1">LocalStorage &amp; window.onstorage <a class="header-anchor" href="#localstorage-window-onstorage" aria-label="Permalink to &quot;LocalStorage &amp; window.onstorage&quot;">​</a></h2><p>通过 LocalStorage 存储数据，并利用 window.onstorage 事件监听数据变化，实现不同标签页间的数据同步。这种方法也受限于同源策略</p><h2 id="indexeddb" tabindex="-1">IndexedDB <a class="header-anchor" href="#indexeddb" aria-label="Permalink to &quot;IndexedDB&quot;">​</a></h2><p>通过 IndexedDB 数据库存储数据，并使用定时器轮询 (setInterval) 来同步数据变化</p><h2 id="broadcastchannel" tabindex="-1">BroadcastChannel <a class="header-anchor" href="#broadcastchannel" aria-label="Permalink to &quot;BroadcastChannel&quot;">​</a></h2><p>这是一种允许同源的不同浏览器窗口、标签页、frame 或者 iframe 之间进行通信的技术。通过创建一个 BroadcastChannel 实例并监听消息事件，可以实现数据的实时广播和接收。但是，它受限于同源策略</p><h2 id="window-open-window-postmessage" tabindex="-1">window.open &amp; window.postMessage <a class="header-anchor" href="#window-open-window-postmessage" aria-label="Permalink to &quot;window.open &amp; window.postMessage&quot;">​</a></h2><p>使用 window.open 打开新的标签页，并通过 postMessage 方法安全地进行跨源通信。接收方通过监听 message 事件来接收数据</p><h2 id="serviceworker" tabindex="-1">ServiceWorker <a class="header-anchor" href="#serviceworker" aria-label="Permalink to &quot;ServiceWorker&quot;">​</a></h2><p>Service Worker 作为浏览器后台运行的脚本，可以拦截网络请求并处理消息事件，实现跨标签页通信</p><h2 id="sharedworker" tabindex="-1">SharedWorker <a class="header-anchor" href="#sharedworker" aria-label="Permalink to &quot;SharedWorker&quot;">​</a></h2><p>Shared Worker 允许多个标签页访问同一个 worker，通过内部通信实现数据共享</p><h2 id="websocket-eventsource" tabindex="-1">WebSocket &amp; EventSource <a class="header-anchor" href="#websocket-eventsource" aria-label="Permalink to &quot;WebSocket &amp; EventSource&quot;">​</a></h2><p>通过 WebSocket 服务器实现不同标签页之间的实时通信。服务器收到消息后，可以广播给所有连接的客户端</p>',18),s=[n];function i(d,c,l,h,p,m){return o(),a("div",null,s)}const u=e(t,[["render",i]]);export{b as __pageData,u as default};
