import{_,h as g,l as v,o as d,c as m,m as x,J as f,a4 as b}from"./chunks/framework.CbHUKvme.js";function c(r,e){return Math.floor(Math.random()*(e-r+1)+r)}class y{constructor(e,a,s=2){this.cvs=e,this.ctx=a,this.r=s,this.x=c(0,e.width-this.r/2),this.y=c(0,e.height-this.r/2),this.xSpeed=c(-30,30),this.ySpeed=c(-30,30),this.lastDrawTime=null}draw(){if(this.lastDrawTime){const e=(Date.now()-this.lastDrawTime)/1e3,a=this.xSpeed*e,s=this.ySpeed*e;let t=this.x+a,i=this.y+s;t>this.cvs.width-this.r/2?(t=this.cvs.width-this.r/2,this.xSpeed=-this.xSpeed):t<0&&(t=0,this.xSpeed=-this.xSpeed),i>this.cvs.height-this.r/2?(i=this.cvs.height-this.r/2,this.ySpeed=-this.ySpeed):i<0&&(i=0,this.ySpeed=-this.ySpeed),this.x=t,this.y=i}this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.fillStyle="rgb(200,200,200)",this.ctx.fill(),this.lastDrawTime=Date.now()}}class A{constructor(e,a,s=20,t){this.cvs=e,this.ctx=a,this.points=new Array(s).fill(0).map(()=>new y(e,a)),e.height,t||(t=Math.floor(e.height/5)),this.maxDis=t}draw(){requestAnimationFrame(()=>{this.draw()}),this.ctx.clearRect(0,0,this.cvs.width,this.cvs.height);for(let e=0;e<this.points.length;e++){const a=this.points[e];a.draw();for(let s=e+1;s<this.points.length;s++){const t=this.points[s],i=Math.sqrt((a.x-t.x)**2+(a.y-t.y)**2);i>this.maxDis||(this.ctx.beginPath(),this.ctx.moveTo(a.x,a.y),this.ctx.lineTo(t.x,t.y),this.ctx.closePath(),this.ctx.strokeStyle=`rgba(200,200,200,${1-i/this.maxDis})`,this.ctx.stroke())}}}}const q={class:"wrapper"},C={__name:"TheCanvas1",setup(r){const e=g();return v(()=>{const a=e.value,s=a.getContext("2d");a.width=a.clientWidth,a.height=a.clientHeight,new A(a,s).draw()}),(a,s)=>(d(),m("div",q,[x("canvas",{ref_key:"canvasRef",ref:e},null,512)]))}},P=_(C,[["__scopeId","data-v-5777cde3"]]),w={class:"wrapper"},S={__name:"TheCanvas2",setup(r){const e=g(),a=()=>"0123456789qwertyuiopasdfghjklzxcvbnm"[Math.floor(Math.random()*36)],s=({cvs:t,ctx:i,fontSize:h,columnCount:p,charIndex:l})=>{i.fillStyle="rgba(0,0,0,0.1)",i.fillRect(0,0,t.width,t.height),i.fillStyle="#6BE445",i.textBaseline="top";for(let n=0;n<p;n++){const o=a(),k=n*h,u=l[n]*h;i.fillText(o,k,u),u>t.height&&Math.random()>.999?l[n]=0:l[n]++}};return v(()=>{const t=e.value,i=t.getContext("2d");t.width=t.clientWidth,t.height=t.clientHeight;const h=10,p=`${h}px "Roboto Mono"`;i.font=p;const l=Math.floor(t.width/h),n=new Array(l).fill(0),o=()=>{requestAnimationFrame(o),s({cvs:t,ctx:i,fontSize:h,columnCount:l,charIndex:n})};o()}),(t,i)=>(d(),m("div",w,[x("canvas",{ref_key:"canvasRef",ref:e},null,512)]))}},D=_(S,[["__scopeId","data-v-72253542"]]),F=b("",23),E=JSON.parse('{"title":"canvas","description":"","frontmatter":{"title":"canvas"},"headers":[],"relativePath":"summary/other/canvas.md","filePath":"summary/other/canvas.md","lastUpdated":1724051358000}'),I={name:"summary/other/canvas.md"},M=Object.assign(I,{setup(r){return(e,a)=>(d(),m("div",null,[F,f(P),f(D)]))}});export{E as __pageData,M as default};
