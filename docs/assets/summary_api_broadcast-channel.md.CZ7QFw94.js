import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.CbHUKvme.js";const g=JSON.parse('{"title":"BroadcastChannel","description":"","frontmatter":{"title":"BroadcastChannel","lastUpdated":"2024/07/08 15:25:52 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/api/broadcast-channel.md","filePath":"summary/api/broadcast-channel.md","lastUpdated":1720885302000}'),e={name:"summary/api/broadcast-channel.md"},l=n(`<h1 id="broadcastchannel" tabindex="-1">BroadcastChannel <a class="header-anchor" href="#broadcastchannel" aria-label="Permalink to &quot;BroadcastChannel&quot;">​</a></h1><p><strong><code>BroadcastChannel</code></strong> 接口代理了一个命名频道，可以让指定 <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Origin" target="_blank" rel="noreferrer">origin</a> 下的任意 <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Browsing_context" target="_blank" rel="noreferrer">browsing context</a> 来订阅它。它允许同源的不同浏览器窗口，Tab 页，frame 或者 iframe 下的不同文档之间相互通信。通过触发一个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/BroadcastChannel/message_event" target="_blank" rel="noreferrer"><code>message</code></a> 事件，消息可以广播到所有监听了该频道的 <code>BroadcastChannel</code> 对象。</p><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><ul><li>同源策略：只能在相同源（协议、域名、端口都相同）的浏览上下文中使用。</li><li>广播消息：向所有同源的 BroadcastChannel 实例发送消息，无论它们在哪个浏览上下文。</li><li>自动连接：不需要显式连接或断开连接，实例化 BroadcastChannel 时自动连接。</li><li>事件驱动：使用 message 事件来接收消息</li></ul><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><ul><li>多标签页应用：在一个网站的不同标签页之间共享实时数据或状态。</li><li>跨 iframe 通信：在同一页面的不同 iframe 之间共享信息。</li></ul><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>假设你有一个网页应用，用户可以打开多个标签页，你希望在一个标签页中触发的操作能够被其他所有标签页感知。比如，一个实时更新的新闻网站，当新闻更新时，所有打开的标签页都应该显示最新的新闻。</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在所有标签页中创建一个 BroadcastChannel 实例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> channel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> BroadcastChannel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;newsUpdates&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 监听消息的函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> receiveNewsUpdate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;News update received:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, event.data);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 这里可以更新页面上的新闻内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 为 channel 添加消息监听器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">channel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;message&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, receiveNewsUpdate);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 发送消息的函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sendNewsUpdate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">news</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  channel.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">postMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(news);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 假设这是从服务器接收到的新闻更新</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> newNews</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { headline: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Breaking News!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, content: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Here is the latest news...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sendNewsUpdate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(newNews);</span></span></code></pre></div><p>在这个示例中，无论哪个标签页调用了 sendNewsUpdate 函数，所有其他标签页都会通过 receiveNewsUpdate 函数接收到更新。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel" target="_blank" rel="noreferrer">MessageChannel</a></p></li><li><p><a href="https://www.jianshu.com/p/4f07ef18b5d7" target="_blank" rel="noreferrer">MessageChannel是什么，怎么使用？</a></p></li></ul>`,12),t=[l];function h(p,r,k,d,o,c){return i(),a("div",null,t)}const y=s(e,[["render",h]]);export{g as __pageData,y as default};
