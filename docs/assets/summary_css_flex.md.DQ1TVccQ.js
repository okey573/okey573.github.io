import{_ as e,c as a,o as l,a4 as i}from"./chunks/framework.CbHUKvme.js";const p=JSON.parse('{"title":"flex 布局","description":"","frontmatter":{"title":"flex 布局","outline":[2,3]},"headers":[],"relativePath":"summary/css/flex.md","filePath":"summary/css/flex.md","lastUpdated":1720785406000}'),r={name:"summary/css/flex.md"},t=i('<h1 id="flex-布局" tabindex="-1">flex 布局 <a class="header-anchor" href="#flex-布局" aria-label="Permalink to &quot;flex 布局&quot;">​</a></h1><h2 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h2><p>采用 Flex 布局的元素，称为 Flex 容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称&quot;项目&quot;。</p><p>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做 cross start，结束位置叫做 cross end。</p><p>项目默认沿主轴排列。单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size</p><h2 id="容器的属性" tabindex="-1">容器的属性 <a class="header-anchor" href="#容器的属性" aria-label="Permalink to &quot;容器的属性&quot;">​</a></h2><h3 id="flex-direction" tabindex="-1">flex-direction <a class="header-anchor" href="#flex-direction" aria-label="Permalink to &quot;flex-direction&quot;">​</a></h3><p>flex-direction 属性决定主轴的方向（即项目的排列方向）</p><h4 id="值域" tabindex="-1">值域 <a class="header-anchor" href="#值域" aria-label="Permalink to &quot;值域&quot;">​</a></h4><ul><li>row（默认值）：主轴为水平方向，起点在左端。</li><li>row-reverse：主轴为水平方向，起点在右端。</li><li>column：主轴为垂直方向，起点在上沿。</li><li>column-reverse：主轴为垂直方向，起点在下沿。</li></ul><h3 id="flex-wrap" tabindex="-1">flex-wrap <a class="header-anchor" href="#flex-wrap" aria-label="Permalink to &quot;flex-wrap&quot;">​</a></h3><p>默认情况下，项目都排在一条线（又称&quot;轴线&quot;）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。</p><h4 id="值域-1" tabindex="-1">值域 <a class="header-anchor" href="#值域-1" aria-label="Permalink to &quot;值域&quot;">​</a></h4><ul><li>nowrap：不换行</li><li>wrap：换行，第一行在上方</li><li>wrap-reverse：换行，第一行在下方</li></ul><h3 id="flex-flow" tabindex="-1">flex-flow <a class="header-anchor" href="#flex-flow" aria-label="Permalink to &quot;flex-flow&quot;">​</a></h3><p>flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。</p><h3 id="justify-content" tabindex="-1">justify-content <a class="header-anchor" href="#justify-content" aria-label="Permalink to &quot;justify-content&quot;">​</a></h3><p>justify-content属性定义了项目在主轴上的对齐方式。</p><h4 id="值域-2" tabindex="-1">值域 <a class="header-anchor" href="#值域-2" aria-label="Permalink to &quot;值域&quot;">​</a></h4><ul><li>flex-start（默认值）：左对齐</li><li>flex-end：右对齐</li><li>center： 居中</li><li>space-between：两端对齐，项目之间的间隔都相等。</li><li>space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</li></ul><h3 id="align-items" tabindex="-1">align-items <a class="header-anchor" href="#align-items" aria-label="Permalink to &quot;align-items&quot;">​</a></h3><p>align-items属性定义项目在交叉轴上如何对齐。</p><h4 id="值域-3" tabindex="-1">值域 <a class="header-anchor" href="#值域-3" aria-label="Permalink to &quot;值域&quot;">​</a></h4><ul><li>flex-start：交叉轴的起点对齐。</li><li>flex-end：交叉轴的终点对齐。</li><li>center：交叉轴的中点对齐。</li><li>baseline: 项目的第一行文字的基线对齐。</li><li>stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。</li></ul><h3 id="align-content" tabindex="-1">align-content <a class="header-anchor" href="#align-content" aria-label="Permalink to &quot;align-content&quot;">​</a></h3><p>align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</p><h4 id="值域-4" tabindex="-1">值域 <a class="header-anchor" href="#值域-4" aria-label="Permalink to &quot;值域&quot;">​</a></h4><ul><li>flex-start：与交叉轴的起点对齐。</li><li>flex-end：与交叉轴的终点对齐。</li><li>center：与交叉轴的中点对齐。</li><li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li><li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li><li>stretch（默认值）：轴线占满整个交叉轴。</li></ul><h2 id="项目的属性" tabindex="-1">项目的属性 <a class="header-anchor" href="#项目的属性" aria-label="Permalink to &quot;项目的属性&quot;">​</a></h2><h3 id="order" tabindex="-1">order <a class="header-anchor" href="#order" aria-label="Permalink to &quot;order&quot;">​</a></h3><p>order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</p><h3 id="flex-grow" tabindex="-1">flex-grow <a class="header-anchor" href="#flex-grow" aria-label="Permalink to &quot;flex-grow&quot;">​</a></h3><p>flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</p><p>如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</p><h3 id="flex-shrink" tabindex="-1">flex-shrink <a class="header-anchor" href="#flex-shrink" aria-label="Permalink to &quot;flex-shrink&quot;">​</a></h3><p>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</p><p>如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。</p><p>负值对该属性无效。</p><h3 id="flex-basis" tabindex="-1">flex-basis <a class="header-anchor" href="#flex-basis" aria-label="Permalink to &quot;flex-basis&quot;">​</a></h3><p>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</p><p>它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。</p><h3 id="flex" tabindex="-1">flex <a class="header-anchor" href="#flex" aria-label="Permalink to &quot;flex&quot;">​</a></h3><p>flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。</p><h3 id="align-self" tabindex="-1">align-self <a class="header-anchor" href="#align-self" aria-label="Permalink to &quot;align-self&quot;">​</a></h3><p>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank" rel="noreferrer">Flex 布局教程：语法篇</a></li></ul>',47),o=[t];function n(s,h,f,c,d,x){return l(),a("div",null,o)}const m=e(r,[["render",n]]);export{p as __pageData,m as default};
