import{_ as a,c as e,o as i,a4 as t}from"./chunks/framework.CbHUKvme.js";const m=JSON.parse('{"title":"图片的懒加载和预加载","description":"","frontmatter":{"title":"图片的懒加载和预加载","outline":[2,6],"lastUpdated":"2024/07/09 15:47:00 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/other/lazy-pre-load.md","filePath":"summary/other/lazy-pre-load.md","lastUpdated":1721032547000}'),s={name:"summary/other/lazy-pre-load.md"},l=t('<h1 id="图片的懒加载和预加载" tabindex="-1">图片的懒加载和预加载 <a class="header-anchor" href="#图片的懒加载和预加载" aria-label="Permalink to &quot;图片的懒加载和预加载&quot;">​</a></h1><h2 id="懒加载" tabindex="-1">懒加载 <a class="header-anchor" href="#懒加载" aria-label="Permalink to &quot;懒加载&quot;">​</a></h2><h3 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>延迟加载图片，当用户需要的时候再去加载图片</p><h3 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h3><p>利用自定义属性将图片的 URL 存放到图片标签身上 ， 图片的 src 为空或者用其他较小的图片资源代替（提示加载中）</p><p>图片的懒加载主要是监听 body 或者其他存放图片且滚动的元素的 scroll 事件.</p><p>在每一次事件触发时，通过相关的 API 和属性，检查图片是否显示 。</p><p>如果显示就将 URL 填到 src 属性中 ，加载图片 。如果没有显示则不进行操作。</p><h4 id="如何检测图片是否显示" tabindex="-1">如何检测图片是否显示 <a class="header-anchor" href="#如何检测图片是否显示" aria-label="Permalink to &quot;如何检测图片是否显示&quot;">​</a></h4><ul><li>滚动监听+scrollTop+offsetTop+innerHeight</li><li>滚动监听+getBoundingClientRect()</li><li>IntersectionObserver</li></ul><h3 id="原生实现" tabindex="-1">原生实现 <a class="header-anchor" href="#原生实现" aria-label="Permalink to &quot;原生实现&quot;">​</a></h3><p>将 loading 属性设置为 lazy</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> loading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lazy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="预加载" tabindex="-1">预加载 <a class="header-anchor" href="#预加载" aria-label="Permalink to &quot;预加载&quot;">​</a></h2><h3 id="定义-1" tabindex="-1">定义 <a class="header-anchor" href="#定义-1" aria-label="Permalink to &quot;定义&quot;">​</a></h3><p>提前加载图片，当用户需要查看时可直接从本地缓存中渲染。</p><h3 id="实现-1" tabindex="-1">实现 <a class="header-anchor" href="#实现-1" aria-label="Permalink to &quot;实现&quot;">​</a></h3><ul><li>使用 css 属性，将 img 标签移到看不到或者缩小到看不到，但不能使用display:none。 使用到已经预加载好的图片时，会直接使用缓存好的图片资源，而不需要向服务器发送请求</li><li>创建一个 image 对象 new Image() 。将 image 对象的 src 属性的值指定为预加载图片的 URL</li></ul>',19),r=[l];function h(o,n,d,p,c,u){return i(),e("div",null,r)}const g=a(s,[["render",h]]);export{m as __pageData,g as default};
