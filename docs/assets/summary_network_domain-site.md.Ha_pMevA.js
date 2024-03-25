import{_ as e,c as a,o,a4 as t}from"./chunks/framework.bPmW087-.js";const b=JSON.parse('{"title":"domain & site","description":"","frontmatter":{"title":"domain & site","outline":[2,6]},"headers":[],"relativePath":"summary/network/domain-site.md","filePath":"summary/network/domain-site.md","lastUpdated":1711331125000}'),i={name:"summary/network/domain-site.md"},r=t('<h1 id="域和站" tabindex="-1">域和站 <a class="header-anchor" href="#域和站" aria-label="Permalink to &quot;域和站&quot;">​</a></h1><h2 id="域名是什么" tabindex="-1">域名是什么 <a class="header-anchor" href="#域名是什么" aria-label="Permalink to &quot;域名是什么&quot;">​</a></h2><p>域名，是由一串用点分隔的字符组成的互联网上某一台计算机或计算机组的名称，用于在数据传输时标识计算机的电子方位。域名可以说是一个IP地址的代称，目的是为了便于记忆后者。当我们使用域名的时候，会通过DNS去查找对应的ip，从而找到对应的计算机电子方位。</p><p>域名有一套复杂的定义规则，我们简单了解下。以www.baidu.com为例，其中.com就是顶级域名，.baidu则是二级域名，www是主机名。</p><p>额～主机名是啥？如果你在服务器手动放置静态HTML资源的时候，会不会发现一般都是放在www文件夹下？这就是主机名，它一般被附在域名系统（DNS）的域名之后，形成完整域名。当然，主机名也不一定非得是www，你可以随便定义</p><h2 id="顶级域名" tabindex="-1">顶级域名 <a class="header-anchor" href="#顶级域名" aria-label="Permalink to &quot;顶级域名&quot;">​</a></h2><ul><li>TLD：即Top-Level Domain，顶级域名，它是一个因特网域名的最后部分，也就是任何域名的最后一个点后面的字母组成的部分。比如：.com、.net、.edu等。</li><li>gTLD：即Generic top-level domain，通用顶级域名，是供一些特定组织使用的顶级域，以其代表组织英文名称的头几个英文字母代表，如 .com代表商业机构。</li><li>ccTLD：即Country Code Top Level Domain，国家顶级域名，嗯，只供国家使用的，比如 .cn。</li><li>eTLD：即Effective Top-Level Domain，有效顶级域名。</li></ul><h4 id="有效顶级域名-etld" tabindex="-1">有效顶级域名(eTLD) <a class="header-anchor" href="#有效顶级域名-etld" aria-label="Permalink to &quot;有效顶级域名(eTLD)&quot;">​</a></h4><p>顶级域名也就是TLD一般是指域名中的最后一个&quot;.&quot;后面的内容，TLD会记录在一个叫做Root Zone Database的列表中，它记录了所有的顶级域名，顶级域名并不一定只有一级，也不一定都是短单词。</p><p>有效顶级域名eTLD，存储在Public Suffix List中，因为顶级域名并不一定可以被所有需要注册域名的用户所使用，所以用户可以根据顶级域名注册自己想要的二级域名，比如example.com这样。所以有效顶级域名的存在根本的原因是让域名的控制权在使用者手中。比如.com.cn或者.github.io就是一个eTLD。</p><p><em><a href="https://publicsuffix.org/list/public_suffix_list.dat" target="_blank" rel="noreferrer">完整的Public Suffix List</a></em></p><h4 id="etld-1" tabindex="-1">eTLD+1 <a class="header-anchor" href="#etld-1" aria-label="Permalink to &quot;eTLD+1&quot;">​</a></h4><p><strong>eTLD+1表示eTLD再加一级域名，举例<code>a.github.io</code>或者<code>baidu.com.cn</code></strong></p><p>为什么<code>a.taobao.com</code>和<code>b.taobao.com</code>是同站，<code>a.github.io</code>和<code>b.github.io</code>却是跨站呢？</p><p>——因为<code>github.io</code>在公共后缀列表里，但<code>taobao.com</code>不在公共后缀列表里</p><h2 id="跨域和跨站" tabindex="-1">跨域和跨站 <a class="header-anchor" href="#跨域和跨站" aria-label="Permalink to &quot;跨域和跨站&quot;">​</a></h2><h4 id="跨域" tabindex="-1">跨域 <a class="header-anchor" href="#跨域" aria-label="Permalink to &quot;跨域&quot;">​</a></h4><p>跨域的定义，并不是指域名不同，或者域不同，而是不同源。其次，同源的定义则是需要协议、域名、端口号三者都相同的URL才行</p><h4 id="跨站" tabindex="-1">跨站 <a class="header-anchor" href="#跨站" aria-label="Permalink to &quot;跨站&quot;">​</a></h4><p>eTLD+1相同 + 协议相同</p><p>这里的跨站和cookie中的“跨站”不同。cookie中的SameSite认为eTLD+1相同就是同站，不论协议是否相同</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><a href="https://cloud.tencent.com/developer/article/2134072" target="_blank" rel="noreferrer">浏览器原理之跨域？跨站？你真的不懂我！</a></li></ul>',23),l=[r];function c(d,n,h,s,u,m){return o(),a("div",null,l)}const f=e(i,[["render",c]]);export{b as __pageData,f as default};
