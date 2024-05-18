import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.CbHUKvme.js";const E=JSON.parse('{"title":"一些命令","description":"","frontmatter":{"title":"一些命令","outline":[2,6]},"headers":[],"relativePath":"code/command/command.md","filePath":"code/command/command.md","lastUpdated":1716001354000}'),t={name:"code/command/command.md"},l=n(`<p>用到过但是不常用的命令</p><h2 id="shell" tabindex="-1">shell <a class="header-anchor" href="#shell" aria-label="Permalink to &quot;shell&quot;">​</a></h2><h4 id="获取时间戳" tabindex="-1">获取时间戳 <a class="header-anchor" href="#获取时间戳" aria-label="Permalink to &quot;获取时间戳&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">current</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;+%Y-%m-%d %H:%M:%S&quot;\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">timeStamp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$current</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot; +%s\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">currentTimeStamp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">$((timeStamp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">#\`date &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+%</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">N&quot;\`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000000</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">))</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> #将current转换为时间戳，精确到毫秒</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> \${currentTimeStamp}</span></span></code></pre></div><h2 id="git" tabindex="-1">git <a class="header-anchor" href="#git" aria-label="Permalink to &quot;git&quot;">​</a></h2><h4 id="获取上一次的commit-message" tabindex="-1">获取上一次的commit message <a class="header-anchor" href="#获取上一次的commit-message" aria-label="Permalink to &quot;获取上一次的commit message&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> log</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --pretty=format:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;%s&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -1</span></span></code></pre></div><h4 id="导出单个文件或文件夹" tabindex="-1">导出单个文件或文件夹 <a class="header-anchor" href="#导出单个文件或文件夹" aria-label="Permalink to &quot;导出单个文件或文件夹&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> archive</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--format=&lt;fmt&gt;] [--list] [--prefix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">prefix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/] [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">extra</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              [-o </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> --output</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] [--worktree-attributes]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              [--remote</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">repo</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [--exec</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">git-upload-archive</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tree-ish&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              [</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">...]</span></span></code></pre></div><h4 id="更新已经推送的-commit-信息" tabindex="-1">更新已经推送的 commit 信息 <a class="header-anchor" href="#更新已经推送的-commit-信息" aria-label="Permalink to &quot;更新已经推送的 commit 信息&quot;">​</a></h4><p>先执行下面的脚本</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> filter-branch</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --env-filter</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">an=&quot;$GIT_AUTHOR_NAME&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">am=&quot;$GIT_AUTHOR_EMAIL&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cn=&quot;$GIT_COMMITTER_NAME&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cm=&quot;$GIT_COMMITTER_EMAIL&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">oldName=&quot;ruifeng.kuang&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">oldEmail=&quot;ruifeng.kuang@vipshop.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">newName=&quot;okey573&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">newEmail=&quot;854647481@qq.com&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">if [ &quot;$GIT_COMMITTER_EMAIL&quot; = &quot;$oldEmail&quot; ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    cn=&quot;$newName&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    cm=&quot;$newEmail&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">if [ &quot;$GIT_COMMITTER_NAME&quot; -eq &quot;$oldName&quot; ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    cn=&quot;$newName&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    cm=&quot;$newEmail&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fi</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">if [ &quot;$GIT_AUTHOR_EMAIL&quot; = &quot;$oldEmail&quot; ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    an=&quot;$newName&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    am=&quot;$newEmail&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">if [ &quot;$GIT_AUTHOR_NAME&quot; -eq &quot;$oldName&quot; ]</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    an=&quot;$newName&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    am=&quot;$newEmail&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">export GIT_AUTHOR_NAME=&quot;$an&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">export GIT_AUTHOR_EMAIL=&quot;$am&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">export GIT_COMMITTER_NAME=&quot;$cn&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">export GIT_COMMITTER_EMAIL=&quot;$cm&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;</span></span></code></pre></div><p>然后强制推送</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --force</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tags</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;refs/heads/*&#39;</span></span></code></pre></div>`,14),h=[l];function p(e,k,r,d,F,o){return a(),i("div",null,h)}const c=s(t,[["render",p]]);export{E as __pageData,c as default};
