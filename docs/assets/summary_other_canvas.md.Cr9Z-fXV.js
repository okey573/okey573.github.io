import{_,h as g,l as v,o as d,c as m,m as x,J as f,a4 as b}from"./chunks/framework.CbHUKvme.js";function c(r,e){return Math.floor(Math.random()*(e-r+1)+r)}class y{constructor(e,a,s=2){this.cvs=e,this.ctx=a,this.r=s,this.x=c(0,e.width-this.r/2),this.y=c(0,e.height-this.r/2),this.xSpeed=c(-30,30),this.ySpeed=c(-30,30),this.lastDrawTime=null}draw(){if(this.lastDrawTime){const e=(Date.now()-this.lastDrawTime)/1e3,a=this.xSpeed*e,s=this.ySpeed*e;let t=this.x+a,i=this.y+s;t>this.cvs.width-this.r/2?(t=this.cvs.width-this.r/2,this.xSpeed=-this.xSpeed):t<0&&(t=0,this.xSpeed=-this.xSpeed),i>this.cvs.height-this.r/2?(i=this.cvs.height-this.r/2,this.ySpeed=-this.ySpeed):i<0&&(i=0,this.ySpeed=-this.ySpeed),this.x=t,this.y=i}this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.fillStyle="rgb(200,200,200)",this.ctx.fill(),this.lastDrawTime=Date.now()}}class A{constructor(e,a,s=20,t){this.cvs=e,this.ctx=a,this.points=new Array(s).fill(0).map(()=>new y(e,a)),e.height,t||(t=Math.floor(e.height/5)),this.maxDis=t}draw(){requestAnimationFrame(()=>{this.draw()}),this.ctx.clearRect(0,0,this.cvs.width,this.cvs.height);for(let e=0;e<this.points.length;e++){const a=this.points[e];a.draw();for(let s=e+1;s<this.points.length;s++){const t=this.points[s],i=Math.sqrt((a.x-t.x)**2+(a.y-t.y)**2);i>this.maxDis||(this.ctx.beginPath(),this.ctx.moveTo(a.x,a.y),this.ctx.lineTo(t.x,t.y),this.ctx.closePath(),this.ctx.strokeStyle=`rgba(200,200,200,${1-i/this.maxDis})`,this.ctx.stroke())}}}}const q={class:"wrapper"},C={__name:"TheCanvas1",setup(r){const e=g();return v(()=>{const a=e.value,s=a.getContext("2d");a.width=a.clientWidth,a.height=a.clientHeight,new A(a,s).draw()}),(a,s)=>(d(),m("div",q,[x("canvas",{ref_key:"canvasRef",ref:e},null,512)]))}},P=_(C,[["__scopeId","data-v-5777cde3"]]),w={class:"wrapper"},S={__name:"TheCanvas2",setup(r){const e=g(),a=()=>"0123456789qwertyuiopasdfghjklzxcvbnm"[Math.floor(Math.random()*36)],s=({cvs:t,ctx:i,fontSize:h,columnCount:p,charIndex:l})=>{i.fillStyle="rgba(0,0,0,0.1)",i.fillRect(0,0,t.width,t.height),i.fillStyle="#6BE445",i.textBaseline="top";for(let n=0;n<p;n++){const o=a(),k=n*h,u=l[n]*h;i.fillText(o,k,u),u>t.height&&Math.random()>.999?l[n]=0:l[n]++}};return v(()=>{const t=e.value,i=t.getContext("2d");t.width=t.clientWidth,t.height=t.clientHeight;const h=10,p=`${h}px "Roboto Mono"`;i.font=p;const l=Math.floor(t.width/h),n=new Array(l).fill(0),o=()=>{requestAnimationFrame(o),s({cvs:t,ctx:i,fontSize:h,columnCount:l,charIndex:n})};o()}),(t,i)=>(d(),m("div",w,[x("canvas",{ref_key:"canvasRef",ref:e},null,512)]))}},D=_(S,[["__scopeId","data-v-72253542"]]),F=b(`<h1 id="canvas基本绘图api" tabindex="-1">Canvas基本绘图API <a class="header-anchor" href="#canvas基本绘图api" aria-label="Permalink to &quot;Canvas基本绘图API&quot;">​</a></h1><h2 id="获取绘制上下文" tabindex="-1">获取绘制上下文 <a class="header-anchor" href="#获取绘制上下文" aria-label="Permalink to &quot;获取绘制上下文&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// cvs为canvas元素</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cvs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getContext</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2d&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 之后使用上下文对象ctx完成后续绘图</span></span></code></pre></div><ul><li>所有的绘图都必须在上下文中完成</li><li>同一个canvas元素只能产生唯一的上下文</li><li>上下文类型可以是： <ul><li>2d：绘制2d图形</li><li>bitmaprenderer：绘制位图上下文</li><li>webgl：绘制3d的上下文，只在实现<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API" target="_blank" rel="noreferrer">WebGL</a>版本 1(OpenGL ES 2.0) 的浏览器上可用</li><li>webgl2：绘制3d的上下文，只在实现 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API" target="_blank" rel="noreferrer">WebGL</a> 版本 2 (OpenGL ES 3.0) 的浏览器上可用</li></ul></li></ul><h2 id="context2d绘图" tabindex="-1">Context2D绘图 <a class="header-anchor" href="#context2d绘图" aria-label="Permalink to &quot;Context2D绘图&quot;">​</a></h2><p>通过<code>cvs.getContext(&#39;2d&#39;)</code>，</p><p>会产生一个<code>CanvasRenderingContext2D</code>对象，它里面包含非常多的绘图方法。</p><p>利用这些绘图方法，我们可以完成下列图形的绘制：</p><ol><li><p>直线</p><p>有简易版的矩形API</p></li><li><p>曲线</p><p>有简易版的椭圆API</p></li><li><p>文字</p></li><li><p>图片</p></li></ol><p>利用上面基本形状以及它们的组合，再配合它提供的各种样式设置，就可以完成任意二维图像的绘制。</p><ul><li><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#reference" target="_blank" rel="noreferrer">完整的API</a></p></li><li><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D" target="_blank" rel="noreferrer">中文版</a></p></li></ul><h2 id="requestanimationframe" tabindex="-1">requestAnimationFrame <a class="header-anchor" href="#requestanimationframe" aria-label="Permalink to &quot;requestAnimationFrame&quot;">​</a></h2><p>它是一个浏览器的宏任务</p><p>requestAnimationFrame的用法与settimeout很相似，只是不需要设置时间间隔而已。requestAnimationFrame使用一个回调函数作为参数，这个回调函数会在浏览器重绘之前调用。它返回一个整数，表示定时器的编号，这个值可以传递给cancelAnimationFrame用于取消这个函数的执行</p><h4 id="requestanimationframe-特点" tabindex="-1">requestAnimationFrame 特点 <a class="header-anchor" href="#requestanimationframe-特点" aria-label="Permalink to &quot;requestAnimationFrame 特点&quot;">​</a></h4><p>【1】requestAnimationFrame会把每一帧中的所有DOM操作集中起来，在一次重绘或回流中就完成，并且重绘或回流的时间间隔紧紧跟随浏览器的刷新频率，如果系统绘制率是 60Hz，那么回调函数就会16.7ms再 被执行一次，如果绘制频率是75Hz，那么这个间隔时间就变成了 1000/75=13.3ms。换句话说就是，requestAnimationFrame的执行步伐跟着系统的绘制频率走。它能保证回调函数在屏幕每一次的绘制间隔中只被执行一次，这样就不会引起丢帧现象，也不会导致动画出现卡顿的问题。</p><p>【2】在隐藏或不可见的元素中，requestAnimationFrame将不会进行重绘或回流，这当然就意味着更少的CPU、GPU和内存使用量</p><p>【3】requestAnimationFrame是由浏览器专门为动画提供的API，在运行时浏览器会自动优化方法的调用，并且如果页面不是激活状态下的话，动画会自动暂停，有效节省了CPU开销</p><h4 id="跟-settimeout-和-setinterval-的对比" tabindex="-1">跟 setTimeout 和 setInterval 的对比 <a class="header-anchor" href="#跟-settimeout-和-setinterval-的对比" aria-label="Permalink to &quot;跟 setTimeout 和 setInterval 的对比&quot;">​</a></h4><p>setTimeout和setInterval的问题是，它们都不精确。它们的内在运行机制决定了时间间隔，参数实际上只是指定了把动画代码添加到浏览器UI线程队列中以等待执行的时间。如果队列前面已经加入了其他任务，那动画代码就要等前面的任务完成后再执行</p><p>requestAnimationFrame采用系统时间间隔，保持最佳绘制效率，不会因为间隔时间过短，造成过度绘制，增加开销；也不会因为间隔时间太长，使用动画卡顿不流畅，让各种网页动画效果能够有一个统一的刷新机制，从而节省系统资源，提高系统性能，改善视觉效果</p><h4 id="应用场景" tabindex="-1">应用场景 <a class="header-anchor" href="#应用场景" aria-label="Permalink to &quot;应用场景&quot;">​</a></h4><ul><li>监听 scroll 函数</li><li>大量数据渲染</li><li>监控卡顿方法</li><li>动画</li></ul>`,23),E=JSON.parse('{"title":"canvas","description":"","frontmatter":{"title":"canvas"},"headers":[],"relativePath":"summary/other/canvas.md","filePath":"summary/other/canvas.md","lastUpdated":1716293150000}'),I={name:"summary/other/canvas.md"},M=Object.assign(I,{setup(r){return(e,a)=>(d(),m("div",null,[F,f(P),f(D)]))}});export{E as __pageData,M as default};
