import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.CbHUKvme.js";const g=JSON.parse('{"title":"hooks","description":"","frontmatter":{"title":"hooks","outline":[2,6],"lastUpdated":"Tue May 07 2024 14:19:42 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/react/hooks.md","filePath":"summary/react/hooks.md","lastUpdated":1719999023000}'),n={name:"summary/react/hooks.md"},e=t(`<h1 id="hooks" tabindex="-1">hooks <a class="header-anchor" href="#hooks" aria-label="Permalink to &quot;hooks&quot;">​</a></h1><p>Hook 是使用 JavaScript 函数定义的，但它们代表了一种特殊的可重用的 UI 逻辑，并且对它们可以被调用的位置有限制。</p><h2 id="诞生的原因及解决的问题" tabindex="-1">诞生的原因及解决的问题 <a class="header-anchor" href="#诞生的原因及解决的问题" aria-label="Permalink to &quot;诞生的原因及解决的问题&quot;">​</a></h2><p>React Hooks 是在 React 16.8 版本中引入的一个重要特性，它们的诞生主要是为了解决以下几个问题：</p><ol><li><strong>复杂组件逻辑难以重用：</strong> 在 Hooks 之前，如果你想在多个组件之间重用一些状态逻辑，你可能需要用到高阶组件（HOCs）或者渲染属性（render props）等模式。这些模式可以工作，但它们往往使得组件层次深且难以理解，也增加了代码的复杂度。</li><li><strong>难以理解的类组件：</strong> 类组件让许多开发者感到困惑，特别是对于初学者来说，需要理解 JavaScript 中的 <code>this</code> 关键字的工作方式，以及如何正确地绑定事件处理器方法。此外，类组件的生命周期方法经常让人头疼，尤其是当需要在不同生命周期方法中进行相同逻辑处理时。</li><li><strong>副作用代码分散：</strong> 在类组件中，相关的业务逻辑代码往往被分散在多个生命周期方法中（比如 <code>componentDidMount</code> 和 <code>componentDidUpdate</code> 中都需要进行数据的加载操作），这使得逻辑难以跟踪和维护。</li><li><strong>复杂的组件状态逻辑：</strong> 组件中状态逻辑经常和 UI 逻辑紧密耦合在一起，这使得状态逻辑难以测试和重用。</li></ol><p>React Hooks 的引入旨在解决这些问题，提供了一种更简单、更直观的方式来使用 React 的特性，而不需要编写类</p><p>Hooks 的设计使得状态和相关逻辑可以更容易地打包在一起，从而更易于重用和测试，并且可以在不改变组件层次结构的情况下共享。这些特性使得开发者可以写出更简洁、更易于维护的代码。</p><h2 id="class-组件和-function-组件的优劣对比" tabindex="-1">Class 组件和 Function 组件的优劣对比 <a class="header-anchor" href="#class-组件和-function-组件的优劣对比" aria-label="Permalink to &quot;Class 组件和 Function 组件的优劣对比&quot;">​</a></h2><p>React 中的类组件和函数组件各有优缺点，随着 React 的发展，这些差异也在不断演变。以下是它们的一些对比：</p><h3 id="类组件" tabindex="-1">类组件 <a class="header-anchor" href="#类组件" aria-label="Permalink to &quot;类组件&quot;">​</a></h3><p>优势</p><ol><li><strong>状态管理：</strong> 在引入 Hook 之前，类组件是唯一可以持有状态(state)的组件。</li><li><strong>生命周期方法：</strong> 提供丰富的生命周期方法（如 <code>componentDidMount</code>, <code>componentDidUpdate</code> 等），允许执行复杂的操作。</li><li><strong>可以使用 <code>this</code> 关键字：</strong> 访问或修改组件状态和属性。</li></ol><p>劣势</p><ol><li><strong>更复杂的语法：</strong> 类组件需要理解 JavaScript 中的 this 以及如何正确绑定事件处理函数。</li><li><strong>更大的尺寸：</strong> 类组件通常比函数组件大小要大，可能导致更大的包体积。</li><li><strong>性能开销：</strong> 类组件可能有轻微的性能开销，因为它们需要实例化。</li></ol><h3 id="函数组件" tabindex="-1">函数组件 <a class="header-anchor" href="#函数组件" aria-label="Permalink to &quot;函数组件&quot;">​</a></h3><p>优势</p><ol><li><strong>简洁性：</strong> 语法更简洁，没有this的复杂性，容易编写和理解。</li><li><strong>轻量级：</strong> 通常体积比类组件小，意味着更快的加载和解析。</li><li><strong>函数式编程：</strong> 更容易使用函数式编程范式，代码可能更清晰和易于测试。</li><li><strong>Hooks：</strong> 随着 React Hooks 的引入，函数组件几乎可以做到类组件的所有事情，并且能够更好地利用 React 的特性，如状态管理和副作用。</li></ol><p>劣势</p><ol><li><strong>生命周期管理：</strong> 在 Hooks 出现之前，函数组件没有直接对应于类组件生命周期方法的概念。</li><li><strong>学习成本：</strong> 对于习惯于使用类的开发者来说，切换到函数组件加上 Hooks 的模式可能需要一段时间来适应。</li></ol><h3 id="性能对比" tabindex="-1">性能对比 <a class="header-anchor" href="#性能对比" aria-label="Permalink to &quot;性能对比&quot;">​</a></h3><p>在性能方面，函数组件通常被视为略优于类组件，尤其是在 React Hooks 引入后。以下是一些性能方面的考虑：</p><ol><li><strong>组件尺寸与加载时间：</strong> 函数组件通常更加轻量，因为它们不需要额外的方法和生命周期的处理，这可以减少文件的大小，使得加载时间更短。</li><li><strong>实例化开销：</strong> 类组件需要通过 new 关键字来实例化，这个过程略微增加了运行时开销。函数组件避免了这种实例化开销，因为它们只是函数的调用。</li><li><strong>内存占用：</strong> 函数组件通常会占用较少的内存，因为它们不需要额外的内存来存储类的实例。</li><li><strong>渲染性能：</strong> 在实际的渲染性能方面，两者之间的差异通常可以忽略不计。 React 团队努力确保性能差异最小化，因此从性能角度来说，选择哪一种类型的组件主要应该基于其他因素，如开发体验和代码的可维护性。</li><li><strong>优化机制：</strong> React 提供了一些优化机制，如 React.memo 和 shouldComponentUpdate 生命周期方法，它们都可以帮助避免不必要的渲染。对于函数组件，React.memo 可以帮助你防止在 props 没有改变的情况下重新渲染。类似地，类组件可以通过实现 shouldComponentUpdate 方法来避免不必要的渲染。</li><li><strong>Hooks 的使用：</strong> 虽然 Hooks 使函数组件变得更加强大，但是如果使用不当，也可能对性能产生负面影响。例如，如果不正确使用 useEffect 的依赖数组，可能导致额外的渲染或副作用执行。</li></ol><p>在现代 React 应用程序中，函数组件与类组件在性能上的差异非常微小，很难成为选择组件类型的决定性因素。</p><h2 id="hooks-的闭包问题" tabindex="-1">hooks 的闭包问题 <a class="header-anchor" href="#hooks-的闭包问题" aria-label="Permalink to &quot;hooks 的闭包问题&quot;">​</a></h2><p>Hooks 中的闭包问题通常是由于函数组件的局部变量在创建时捕获了特定的作用域状态，而当这个函数组件重新渲染时，这些捕获的状态可能已经过时。这就导致了函数组件内部的事件处理器或者效果（effects）引用的状态不是最新的状态。</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { useEffect, useRef, useState } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> App</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">setState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ref</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // let times = 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> handleClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ref.current </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ref.current </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    alert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;You clicked &#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ref.current </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39; times!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 这里如果用 times 这个普通变量就会有问题：一但有 state 发生变化， 函数会被重新调用，times 又将初始化成 0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // times++</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // alert(&#39;You clicked &#39; + times + &#39; times!&#39;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  useEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> intervalId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // 这里的 state 值是这个闭包创建时的值，而不是最新的 state 值</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       * 解决办法1：使用 useRef</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       * const stateRef = useRef(state)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       * stateRef.current = state</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       * console.log(stateRef.current)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       * 解决办法2：useEffect 的 deps 里加上 state</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">       */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(state)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> clearInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(intervalId)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, [])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &lt;&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{handleClick}&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      点击！</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onClick</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">prevState</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prevState </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)}&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      {state}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="function-组件每次渲染都会重新执行-usestate-和-useref-如何保存值不被清除的" tabindex="-1">Function 组件每次渲染都会重新执行，useState 和 useRef 如何保存值不被清除的 <a class="header-anchor" href="#function-组件每次渲染都会重新执行-usestate-和-useref-如何保存值不被清除的" aria-label="Permalink to &quot;Function 组件每次渲染都会重新执行，useState 和 useRef 如何保存值不被清除的&quot;">​</a></h2><blockquote><p>你可能已经注意到，useState 在调用时没有任何关于它引用的是哪个 state 变量的信息。没有传递给 useState 的“标识符”，它是如何知道要返回哪个 state 变量呢？它是否依赖于解析函数之类的魔法？答案是否定的。</p><p>相反，为了使语法更简洁，在同一组件的每次渲染中，Hooks 都依托于一个稳定的调用顺序。这在实践中很有效，因为如果你遵循上面的规则（“只在顶层调用 Hooks”），Hooks 将始终以相同的顺序被调用。此外，linter 插件也可以捕获大多数错误。</p><p>在 React 内部，为每个组件保存了一个数组，其中每一项都是一个 state 对。它维护当前 state 对的索引值，在渲染之前将其设置为 “0”。每次调用 useState 时，React 都会为你提供一个 state 对并增加索引值。你可以在文章 React Hooks: not magic, just arrays中阅读有关此机制的更多信息。</p></blockquote><p>总的来说，React 的这些 Hooks 的工作原理依赖于 React 的 Fiber 架构，该架构允许 React 在内部追踪组件状态和引用。每当组件渲染时，它都会以正确的顺序和位置检索状态和引用，确保它们在多次渲染之间保持不变。这个设计使得函数组件可以在不失去其函数式和声明式特性的同时，使状态和引用在组件的整个生命周期中保持持久化。</p><h2 id="usecallback" tabindex="-1">useCallback <a class="header-anchor" href="#usecallback" aria-label="Permalink to &quot;useCallback&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">useCallback 是一个允许你在多次渲染中缓存函数的 React Hook</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cachedFn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(fn, dependencies)</span></span></code></pre></div><br><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 在 React 内部的简化实现</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useMemo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fn, dependencies);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div><h2 id="usememo" tabindex="-1">useMemo <a class="header-anchor" href="#usememo" aria-label="Permalink to &quot;useMemo&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">useMemo 是一个 React Hook，它在每次重新渲染的时候能够缓存计算的结果</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cachedValue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useMemo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(calculateValue, dependencies)</span></span></code></pre></div></div><h2 id="useeffect" tabindex="-1">useEffect <a class="header-anchor" href="#useeffect" aria-label="Permalink to &quot;useEffect&quot;">​</a></h2><blockquote><p>useEffect 是一个 React Hook，它允许你 将组件与外部系统同步。</p></blockquote><h2 id="uselayouteffect" tabindex="-1">useLayoutEffect <a class="header-anchor" href="#uselayouteffect" aria-label="Permalink to &quot;useLayoutEffect&quot;">​</a></h2><blockquote><p>useLayoutEffect 是 useEffect 的一个版本，在浏览器重新绘制屏幕之前触发。</p></blockquote><h2 id="useupdateeffect" tabindex="-1">useUpdateEffect <a class="header-anchor" href="#useupdateeffect" aria-label="Permalink to &quot;useUpdateEffect&quot;">​</a></h2><p>useUpdateEffect 是第三方库 <a href="https://ahooks.js.org/zh-CN/hooks/use-update-effect" target="_blank" rel="noreferrer">ahook</a> 中的一个 hook</p><blockquote><p>useUpdateEffect 用法等同于 useEffect，但是会忽略首次执行，只在依赖更新时执行。</p></blockquote><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://zh-hans.react.dev/learn/state-a-components-memory#how-does-react-know-which-state-to-return" target="_blank" rel="noreferrer">React 如何知道返回哪个 state</a></p></li><li><p><a href="https://zh-hans.react.dev/learn/referencing-values-with-refs#how-does-use-ref-work-inside" target="_blank" rel="noreferrer">useRef 内部是如何运行的？</a></p></li></ul>`,42),l=[e];function h(p,k,r,o,c,d){return a(),i("div",null,l)}const u=s(n,[["render",h]]);export{g as __pageData,u as default};
