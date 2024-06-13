import{_ as e,c as t,o as a,a4 as i,ae as l,af as n}from"./chunks/framework.CbHUKvme.js";const f=JSON.parse('{"title":"生命周期","description":"","frontmatter":{"title":"生命周期","lastUpdated":"Wed May 08 2024 10:27:38 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/react/lifecycle.md","filePath":"summary/react/lifecycle.md","lastUpdated":1718268336000}'),s={name:"summary/react/lifecycle.md"},r=i('<h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h1><p>生命周期一般分为四个阶段：挂载阶段、更新阶段、卸载阶段、错误处理</p><h2 id="旧的生命周期" tabindex="-1">旧的生命周期 <a class="header-anchor" href="#旧的生命周期" aria-label="Permalink to &quot;旧的生命周期&quot;">​</a></h2><p><img src="'+l+'" alt="生命周期"></p><h3 id="挂载阶段" tabindex="-1">挂载阶段 <a class="header-anchor" href="#挂载阶段" aria-label="Permalink to &quot;挂载阶段&quot;">​</a></h3><ul><li>constructor</li><li>componentWillMount</li><li>render</li><li>componentDidMount</li></ul><h3 id="更新阶段" tabindex="-1">更新阶段 <a class="header-anchor" href="#更新阶段" aria-label="Permalink to &quot;更新阶段&quot;">​</a></h3><ul><li>componentWillReceiveProps</li><li>shouldComponentUpdate</li><li>componentWillUpdate</li><li>render</li><li>componentDidUpdate</li></ul><h3 id="卸载阶段" tabindex="-1">卸载阶段 <a class="header-anchor" href="#卸载阶段" aria-label="Permalink to &quot;卸载阶段&quot;">​</a></h3><ul><li>componentWillUnmount</li></ul><h3 id="错误处理" tabindex="-1">错误处理 <a class="header-anchor" href="#错误处理" aria-label="Permalink to &quot;错误处理&quot;">​</a></h3><ul><li>getDerivedStateFromError</li><li>componentDidCatch</li></ul><h2 id="新的生命周期" tabindex="-1">新的生命周期 <a class="header-anchor" href="#新的生命周期" aria-label="Permalink to &quot;新的生命周期&quot;">​</a></h2><p><img src="'+n+`" alt="新生命周期"></p><h3 id="挂载阶段-1" tabindex="-1">挂载阶段 <a class="header-anchor" href="#挂载阶段-1" aria-label="Permalink to &quot;挂载阶段&quot;">​</a></h3><ul><li>constructor</li><li>getDerivedStateFromProps</li><li>render</li><li>componentDidMount</li></ul><h3 id="更新阶段-1" tabindex="-1">更新阶段 <a class="header-anchor" href="#更新阶段-1" aria-label="Permalink to &quot;更新阶段&quot;">​</a></h3><ul><li>getDerivedStateFromProps</li><li>shouldComponentUpdate</li><li>render</li><li>getSnapshotBeforeUpdate</li><li>componentDidUpdate</li></ul><h3 id="卸载阶段-1" tabindex="-1">卸载阶段 <a class="header-anchor" href="#卸载阶段-1" aria-label="Permalink to &quot;卸载阶段&quot;">​</a></h3><ul><li>componentWillUnmount</li></ul><h3 id="卸载阶段-2" tabindex="-1">卸载阶段 <a class="header-anchor" href="#卸载阶段-2" aria-label="Permalink to &quot;卸载阶段&quot;">​</a></h3><ul><li>componentWillUnmount</li><li>componentDidCatch</li></ul><h2 id="新旧对比" tabindex="-1">新旧对比 <a class="header-anchor" href="#新旧对比" aria-label="Permalink to &quot;新旧对比&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-vadtF" id="tab-n3KqhhJ" checked="checked"><label for="tab-n3KqhhJ">挂载</label><input type="radio" name="group-vadtF" id="tab-5EdorKE"><label for="tab-5EdorKE">更新</label><input type="radio" name="group-vadtF" id="tab-DV9AOjB"><label for="tab-DV9AOjB">卸载</label><input type="radio" name="group-vadtF" id="tab-jdO2G-Z"><label for="tab-jdO2G-Z">错误处理</label></div><div class="blocks"><div class="language-diff vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">constructor</span></span>
<span class="line diff remove"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">componentWillMount</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">getDevicdeStatFromProp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">render</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">componentDidMount</span></span></code></pre></div><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark has-diff vp-code"><code><span class="line diff remove"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">componentWillReceiveProps</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">getDevicdeStatFromProp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">shouldComponentUpdate</span></span>
<span class="line diff remove"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">componentWillUpdate</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">render</span></span>
<span class="line diff add"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">getSnapshotBeforeUpdate</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">componentDidUpdate</span></span></code></pre></div><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">componentWillUnmount</span></span></code></pre></div><div class="language-diff vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">diff</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">getDerivedStateFromError</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">componentDidCatch</span></span></code></pre></div></div></div><h2 id="hook-和生命周期的等价写法" tabindex="-1">hook 和生命周期的等价写法 <a class="header-anchor" href="#hook-和生命周期的等价写法" aria-label="Permalink to &quot;hook 和生命周期的等价写法&quot;">​</a></h2><table><thead><tr><th style="text-align:center;">class 组件</th><th style="text-align:center;">Hooks 组件</th></tr></thead><tbody><tr><td style="text-align:center;">constructor</td><td style="text-align:center;">useState</td></tr><tr><td style="text-align:center;">getDerivedStateFromProps</td><td style="text-align:center;">useState 里面 update 函数</td></tr><tr><td style="text-align:center;">shouldComponentUpdate</td><td style="text-align:center;">useMemo</td></tr><tr><td style="text-align:center;">render</td><td style="text-align:center;">函数本身</td></tr><tr><td style="text-align:center;">componentDidMount</td><td style="text-align:center;">useEffect</td></tr><tr><td style="text-align:center;">componentDidUpdate</td><td style="text-align:center;">useEffect</td></tr><tr><td style="text-align:center;">componentWillUnmount</td><td style="text-align:center;">useEffect 里面返回的函数</td></tr><tr><td style="text-align:center;">componentDidCatch</td><td style="text-align:center;">无</td></tr><tr><td style="text-align:center;">getDerivedStateFromError</td><td style="text-align:center;">无</td></tr></tbody></table><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://zh-hans.legacy.reactjs.org/docs/react-component.html" target="_blank" rel="noreferrer">React.Component</a></p></li><li><p><a href="https://juejin.cn/post/6914112105964634119" target="_blank" rel="noreferrer">深入详解React生命周期</a></p></li><li><p><a href="https://blog.hhking.cn/2018/09/18/react-lifecycle-change/" target="_blank" rel="noreferrer">重新认识 React 生命周期</a></p></li><li><p><a href="https://juejin.cn/post/6844903901620092941" target="_blank" rel="noreferrer">Hooks 与 React 生命周期的关系</a></p></li></ul>`,28),o=[r];function d(p,c,h,u,m,k){return a(),t("div",null,o)}const E=e(s,[["render",d]]);export{f as __pageData,E as default};
