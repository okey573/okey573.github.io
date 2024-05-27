import{_ as a,c as e,o as t,a4 as p}from"./chunks/framework.CbHUKvme.js";const m=JSON.parse('{"title":"1px 问题","description":"","frontmatter":{"title":"1px 问题"},"headers":[],"relativePath":"summary/css/1px.md","filePath":"summary/css/1px.md","lastUpdated":1716822511000}'),i={name:"summary/css/1px.md"},r=p('<h1 id="_1px问题" tabindex="-1">1px问题 <a class="header-anchor" href="#_1px问题" aria-label="Permalink to &quot;1px问题&quot;">​</a></h1><h2 id="现象及原因" tabindex="-1">现象及原因 <a class="header-anchor" href="#现象及原因" aria-label="Permalink to &quot;现象及原因&quot;">​</a></h2><p>1px问题现象是在高倍屏幕中设置1px的样式，例如1px的边框，看起来会比较粗的问题。</p><p>其实这个问题和DPR并没有关系，dpr可以用来解释不同分辨率手机呈现页面的精细度的差异，但并不能解释1px问题。</p><p>真正的原因：</p><p>我们做移动端页面时一般都会设置meta viewport的content=“width=device-width”， 这里就是把html视窗宽度大小设置等于设备宽度的大小，大多数手机的屏幕设备宽度都差不多，以iphoneX为例，屏幕宽度375px。</p><p>而UI给设计图的时候基本上都是给的二倍图甚至三倍图，假设设计图是750px的二倍图，在750px上设计了1px的边框，要拿到375px宽度的手机来显示，就相当于整体设计图缩小一倍，所以在375px手机上要以0.5px呈现才符合预期效果，然而css里最低只支持1px大小，不足1px就以1px显示，所以你看到的就显得边框较粗，实际上只是设计图整体缩小了，而1px的边框没有跟着缩小导致的。（ps：ios较新版已支持0.5px，安卓不支持，这里暂且忽略）</p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><ul><li>媒体查询</li><li>border-image</li><li>background-image</li><li>box-shadow</li><li>transform加伪类</li><li>viewport+rem实现</li></ul>',9),o=[r];function s(l,x,c,n,d,_){return t(),e("div",null,o)}const u=a(i,[["render",s]]);export{m as __pageData,u as default};
