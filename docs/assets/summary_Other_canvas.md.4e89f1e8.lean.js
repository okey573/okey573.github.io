import{_ as f,r as v,e as x,o as d,c as m,b as g,f as u,a as C}from"./app.b4516dcc.js";function h(r,t){return Math.floor(Math.random()*(t-r+1)+r)}class A{constructor(t,a,i=2){this.cvs=t,this.ctx=a,this.r=i,this.x=h(0,t.width-this.r/2),this.y=h(0,t.height-this.r/2),this.xSpeed=h(-30,30),this.ySpeed=h(-30,30),this.lastDrawTime=null}draw(){if(this.lastDrawTime){const t=(Date.now()-this.lastDrawTime)/1e3,a=this.xSpeed*t,i=this.ySpeed*t;let e=this.x+a,s=this.y+i;e>this.cvs.width-this.r/2?(e=this.cvs.width-this.r/2,this.xSpeed=-this.xSpeed):e<0&&(e=0,this.xSpeed=-this.xSpeed),s>this.cvs.height-this.r/2?(s=this.cvs.height-this.r/2,this.ySpeed=-this.ySpeed):s<0&&(s=0,this.ySpeed=-this.ySpeed),this.x=e,this.y=s}this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.fillStyle="rgb(200,200,200)",this.ctx.fill(),this.lastDrawTime=Date.now()}}class b{constructor(t,a,i=20,e=200){this.cvs=t,this.ctx=a,this.points=new Array(i).fill(0).map(()=>new A(t,a)),this.maxDis=e}draw(){requestAnimationFrame(()=>{this.draw()}),this.ctx.clearRect(0,0,this.cvs.width,this.cvs.height);for(let t=0;t<this.points.length;t++){const a=this.points[t];a.draw();for(let i=t+1;i<this.points.length;i++){const e=this.points[i],s=Math.sqrt((a.x-e.x)**2+(a.y-e.y)**2);s>this.maxDis||(this.ctx.beginPath(),this.ctx.moveTo(a.x,a.y),this.ctx.lineTo(e.x,e.y),this.ctx.closePath(),this.ctx.strokeStyle=`rgba(200,200,200,${1-s/this.maxDis})`,this.ctx.stroke())}}}}const D={class:"wrapper"},w={__name:"TheCanvas1",setup(r){const t=v();return x(()=>{const a=t.value,i=a.getContext("2d");a.width=a.clientWidth,a.height=a.clientHeight,new b(a,i).draw()}),(a,i)=>(d(),m("div",D,[g("canvas",{ref_key:"canvasRef",ref:t},null,512)]))}},P=f(w,[["__scopeId","data-v-899b8c0f"]]);const F={class:"wrapper"},S={__name:"TheCanvas2",setup(r){const t=v(),a=()=>"0123456789qwertyuiopasdfghjklzxcvbnm"[Math.floor(Math.random()*36)],i=({cvs:e,ctx:s,fontSize:o,columnCount:p,charIndex:l})=>{s.fillStyle="rgba(0,0,0,0.1)",s.fillRect(0,0,e.width,e.height),s.fillStyle="#6BE445",s.textBaseline="top";for(let n=0;n<p;n++){const c=a(),y=n*o,_=l[n]*o;s.fillText(c,y,_),_>e.height&&Math.random()>.999?l[n]=0:l[n]++}};return x(()=>{const e=t.value,s=e.getContext("2d");e.width=e.clientWidth*devicePixelRatio,e.height=e.clientHeight*devicePixelRatio;const o=10*devicePixelRatio,p=`${o}px "Roboto Mono"`;s.font=p;const l=Math.floor(e.width/o),n=new Array(l).fill(0),c=()=>{requestAnimationFrame(c),i({cvs:e,ctx:s,fontSize:o,columnCount:l,charIndex:n})};c()}),(e,s)=>(d(),m("div",F,[g("canvas",{ref_key:"canvasRef",ref:t},null,512)]))}},q=f(S,[["__scopeId","data-v-9aff2e60"]]),T=C("",24),k=JSON.parse('{"title":"canvas","description":"","frontmatter":{"title":"canvas"},"headers":[{"level":2,"title":"获取绘制上下文","slug":"获取绘制上下文","link":"#获取绘制上下文","children":[]},{"level":2,"title":"Context2D绘图","slug":"context2d绘图","link":"#context2d绘图","children":[]},{"level":2,"title":"requestAnimationFrame","slug":"requestanimationframe","link":"#requestanimationframe","children":[]}],"relativePath":"summary/Other/canvas.md","lastUpdated":1678460949000}'),I={name:"summary/Other/canvas.md"},z=Object.assign(I,{setup(r){return(t,a)=>(d(),m("div",null,[T,u(P),u(q)]))}});export{k as __pageData,z as default};