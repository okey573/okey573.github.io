import{_ as e,o as i,c as l,a}from"./app.e25653d2.js";const r="/docs/images/vue2_lifecycle.png",t="/docs/images/vue3_lifecycle.png",m=JSON.parse('{"title":"\u58F0\u660E\u5468\u671F","description":"","frontmatter":{"title":"\u58F0\u660E\u5468\u671F"},"headers":[{"level":2,"title":"vue2\u58F0\u660E\u5468\u671F","slug":"vue2\u58F0\u660E\u5468\u671F","link":"#vue2\u58F0\u660E\u5468\u671F","children":[]},{"level":2,"title":"vue3\u58F0\u660E\u5468\u671F","slug":"vue3\u58F0\u660E\u5468\u671F","link":"#vue3\u58F0\u660E\u5468\u671F","children":[]},{"level":2,"title":"\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6267\u884C\u987A\u5E8F","slug":"\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6267\u884C\u987A\u5E8F","link":"#\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6267\u884C\u987A\u5E8F","children":[]}],"relativePath":"summary/Vue/lifecycle.md","lastUpdated":1675931531000}'),d={name:"summary/Vue/lifecycle.md"},o=a('<p>vue\u5B9E\u4F8B\u4ECE\u521B\u5EFA\u5230\u9500\u6BC1\u7684\u8FC7\u7A0B\uFF0C\u5177\u4F53\u6765\u8BF4\u5C31\u662Fvue\u5B9E\u4F8B\u4ECE\u5F00\u59CB\u521B\u5EFA\u3001\u521D\u59CB\u5316\u6570\u636E\u3001\u7F16\u8BD1\u6A21\u677F\u3001\u6302\u8F7DDom\u3001\u6E32\u67D3\u6570\u636E\u3001\u66F4\u65B0\u6570\u636E\u3001\u6700\u540E\u9500\u6BC1\u8FD9\u6837\u7684\u4E00\u4E2A\u8FC7\u7A0B</p><h2 id="vue2\u58F0\u660E\u5468\u671F" tabindex="-1">vue2\u58F0\u660E\u5468\u671F <a class="header-anchor" href="#vue2\u58F0\u660E\u5468\u671F" aria-hidden="true">#</a></h2><ol><li>beforeCreate</li><li>created</li><li>beforeMount</li><li>mounted</li><li>beforeUpdate</li><li>updated</li><li>activated(keep-alive\u7EC4\u4EF6\u7279\u6709)</li><li>deactivated(keep-alive\u7EC4\u4EF6\u7279\u6709)</li><li>beforeDestroy</li><li>destroyed</li><li>errorCaptured(2.5.0+ \u65B0\u589E)</li></ol><p><img src="'+r+'" alt="\u751F\u547D\u5468\u671F"></p><h2 id="vue3\u58F0\u660E\u5468\u671F" tabindex="-1">vue3\u58F0\u660E\u5468\u671F <a class="header-anchor" href="#vue3\u58F0\u660E\u5468\u671F" aria-hidden="true">#</a></h2><p>vue3\u7684\u58F0\u660E\u5468\u671F\uFF0C\u5728\u4F7F\u7528\u65F6\uFF0C\u533A\u5206\u9009\u9879\u5F0F\u548C\u7EC4\u5408\u5F0F</p><h4 id="\u9009\u9879\u5F0F" tabindex="-1">\u9009\u9879\u5F0F <a class="header-anchor" href="#\u9009\u9879\u5F0F" aria-hidden="true">#</a></h4><ol><li>beforeCreate</li><li>created</li><li>beforeMount</li><li>mounted</li><li>beforeUpdate</li><li>updated</li><li>beforeUnmount</li><li>unmounted</li><li>errorCaptured</li><li>renderTracked(dev only)</li><li>renderTriggered(dev only)</li><li>activated(keep-alive\u7EC4\u4EF6\u7279\u6709)</li><li>deactivated(keep-alive\u7EC4\u4EF6\u7279\u6709)</li><li>serverPrefetch(ssr only \u5F53\u7EC4\u4EF6\u5B9E\u4F8B\u5728\u670D\u52A1\u5668\u4E0A\u88AB\u6E32\u67D3\u4E4B\u524D\u8981\u5B8C\u6210\u7684\u5F02\u6B65\u51FD\u6570)</li></ol><h4 id="\u7EC4\u5408\u5F0F" tabindex="-1">\u7EC4\u5408\u5F0F <a class="header-anchor" href="#\u7EC4\u5408\u5F0F" aria-hidden="true">#</a></h4><ol start="0"><li>setup(beforeCreate &amp; created)</li><li>onBeforeMount</li><li>onMounted</li><li>onBeforeUpdate</li><li>onUpdated</li><li>onBeforeUnmount</li><li>onUnmounted</li><li>onErrorCaptured</li><li>onRenderTracked(dev only)</li><li>onRenderTriggered(dev only)</li><li>onActivated(keep-alive\u7EC4\u4EF6\u7279\u6709)</li><li>onDeactivated(keep-alive\u7EC4\u4EF6\u7279\u6709)</li><li>onServerPrefetch(ssr only \u5F53\u7EC4\u4EF6\u5B9E\u4F8B\u5728\u670D\u52A1\u5668\u4E0A\u88AB\u6E32\u67D3\u4E4B\u524D\u8981\u5B8C\u6210\u7684\u5F02\u6B65\u51FD\u6570)</li></ol><p><img src="'+t+'" alt="\u751F\u547D\u5468\u671F"></p><h2 id="\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6267\u884C\u987A\u5E8F" tabindex="-1">\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6267\u884C\u987A\u5E8F <a class="header-anchor" href="#\u7236\u5B50\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a></h2><h4 id="\u6302\u8F7D\u9636\u6BB5" tabindex="-1">\u6302\u8F7D\u9636\u6BB5 <a class="header-anchor" href="#\u6302\u8F7D\u9636\u6BB5" aria-hidden="true">#</a></h4><p>\u7236beforeCreate -&gt; \u7236created -&gt; \u7236beforeMount -&gt; \u5B50beforeCreate -&gt; \u5B50created -&gt; \u5B50beforeMount -&gt; \u5B50mounted -&gt; \u7236mounted</p><h4 id="\u66F4\u65B0\u9636\u6BB5" tabindex="-1">\u66F4\u65B0\u9636\u6BB5 <a class="header-anchor" href="#\u66F4\u65B0\u9636\u6BB5" aria-hidden="true">#</a></h4><p>\u7236beforeUpdate -&gt; \u5B50beforeUpdate -&gt; \u5B50updated -&gt; \u7236updated</p><h4 id="\u9500\u6BC1\u9636\u6BB5" tabindex="-1">\u9500\u6BC1\u9636\u6BB5 <a class="header-anchor" href="#\u9500\u6BC1\u9636\u6BB5" aria-hidden="true">#</a></h4><p>\u7236beforeDestroy -&gt; \u5B50beforeDestroy -&gt; \u5B50destroyed -&gt; \u7236destroyed</p><p>\u89C4\u5F8B\u5C31\u662F\uFF1A\u7236\u7EC4\u4EF6\u5148\u5F00\u59CB\u6267\u884C\uFF0C\u7136\u540E\u7B49\u5230\u5B50\u7EC4\u4EF6\u6267\u884C\u5B8C\uFF0C\u7236\u7EC4\u4EF6\u6536\u5C3E\u3002</p>',19),n=[o];function c(s,u,h,p,f,v){return i(),l("div",null,n)}const g=e(d,[["render",c]]);export{m as __pageData,g as default};
