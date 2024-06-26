import{_ as e,c as t,o as a,a4 as r}from"./chunks/framework.CbHUKvme.js";const m=JSON.parse('{"title":"实现create-custom-app","description":"","frontmatter":{"title":"实现create-custom-app","outline":[2,6]},"headers":[],"relativePath":"achieve/create-custom-app/index.md","filePath":"achieve/create-custom-app/index.md","lastUpdated":1719405336000}'),o={name:"achieve/create-custom-app/index.md"},c=r('<p>实现一个类似create-react-app, create-vue类似的工具</p><h2 id="准备" tabindex="-1">准备 <a class="header-anchor" href="#准备" aria-label="Permalink to &quot;准备&quot;">​</a></h2><p>一个npm账号，以及发布npm包相关知识</p><h2 id="实现" tabindex="-1">实现 <a class="header-anchor" href="#实现" aria-label="Permalink to &quot;实现&quot;">​</a></h2><blockquote><p><a href="https://github.com/okey573/create-custom-app.git" target="_blank" rel="noreferrer">https://github.com/okey573/create-custom-app.git</a></p></blockquote><p><strong>主要是参考<a href="https://github.com/vuejs/create-vue" target="_blank" rel="noreferrer">create-vue</a></strong></p><p>但是create-vue是把模板源码放在这里，和工具一起发布的，就相当于把模板代码开源公开了，这种操作在实际工作中一般都是违反公司规定的。</p><p>所以改成了从git读取模板代码，把模板代码放在一个指定repo，这个repo肯定是有权限控制的，如果创建模板时没有登录git或者没有相关权限就会报错退出，从而解决了代码私密性这个问题。</p><h4 id="检查版本更新的问题" tabindex="-1">检查版本更新的问题 <a class="header-anchor" href="#检查版本更新的问题" aria-label="Permalink to &quot;检查版本更新的问题&quot;">​</a></h4><p>这个工具还实现了在使用时可以检查本地是不是最新版本</p><p>实现方法: 读取cdn@latest中package.json的version信息 <a href="https://github.com/okey573/create-custom-app/blob/master/utils/checkLatestVersion.js" target="_blank" rel="noreferrer">链接</a></p>',11),p=[c];function s(n,i,h,l,u,_){return a(),t("div",null,p)}const b=e(o,[["render",s]]);export{m as __pageData,b as default};
