import{_ as e,c as a,o as r,a4 as t}from"./chunks/framework.CbHUKvme.js";const _=JSON.parse('{"title":"fiber","description":"","frontmatter":{"title":"fiber","lastUpdated":"Tue May 07 2024 15:52:42 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/react/fiber.md","filePath":"summary/react/fiber.md","lastUpdated":1718711073000}'),i={name:"summary/react/fiber.md"},l=t('<h1 id="fiber" tabindex="-1">fiber <a class="header-anchor" href="#fiber" aria-label="Permalink to &quot;fiber&quot;">​</a></h1><h2 id="解决的问题" tabindex="-1">解决的问题 <a class="header-anchor" href="#解决的问题" aria-label="Permalink to &quot;解决的问题&quot;">​</a></h2><p>JavaScript 引擎和页面渲染引擎两个线程是互斥的，当其中一个线程执行时，另一个线程只能挂起等待</p><p>如果 JavaScript 线程长时间地占用了主线程，那么渲染层面的更新就不得不长时间地等待，界面长时间不更新，会导致页面响应度变差，用户可能会感觉到卡顿</p><p>而这也正是 React 15 的 Stack Reconciler 所面临的问题，当 React在渲染组件时，从开始到渲染完成整个过程是一气呵成的，无法中断</p><p>如果组件较大，那么js线程会一直执行，然后等到整棵 VDOM 树计算完成后，才会交给渲染的线程</p><p>这就会导致一些用户交互、动画等任务无法立即得到处理，导致卡顿的情况</p><p><a href="https://github.com/claudiopro/react-fiber-vs-stack-demo" target="_blank" rel="noreferrer">Fiber vs Stack Demo</a></p><h2 id="fiber-是什么" tabindex="-1">fiber 是什么 <a class="header-anchor" href="#fiber-是什么" aria-label="Permalink to &quot;fiber 是什么&quot;">​</a></h2><ul><li>从架构角度来看，Fiber 是对 React 核心算法（即调和过程）的重写</li><li>从运行机制上来解释，fiber是一种流程让出机制，它能让react中的同步渲染进行中断，并将渲染的控制权让回浏览器，从而达到不阻塞浏览器渲染的目的。</li><li>从数据角度来解释，fiber能细化成一种数据结构，或者一个执行单元。</li></ul><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h2><p>react 通过 MessageChannel + requestAnimationFrame 自己模拟实现了 requestIdleCallback 实现的</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://blog.csdn.net/echolunzi/article/details/125586636" target="_blank" rel="noreferrer">【react】什么是fiber？fiber解决了什么问题？从源码角度深入了解fiber运行机制与diff执行</a></p></li><li><p><a href="https://vue3js.cn/interview/React/Fiber.html" target="_blank" rel="noreferrer">面试官：说说对Fiber架构的理解？解决了什么问题？</a></p></li></ul>',14),c=[l];function o(s,n,f,h,b,d){return r(),a("div",null,c)}const u=e(i,[["render",o]]);export{_ as __pageData,u as default};
