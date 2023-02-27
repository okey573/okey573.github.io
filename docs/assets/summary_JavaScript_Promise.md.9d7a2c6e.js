import{_ as e,c as i,o as r,a as s}from"./app.dfd2d94d.js";const _=JSON.parse('{"title":"Promise","description":"","frontmatter":{"title":"Promise"},"headers":[{"level":2,"title":"Promise解决的问题","slug":"promise解决的问题","link":"#promise解决的问题","children":[]},{"level":2,"title":"Promise的状态","slug":"promise的状态","link":"#promise的状态","children":[]},{"level":2,"title":"Promise的一些特性","slug":"promise的一些特性","link":"#promise的一些特性","children":[]},{"level":2,"title":"Promise A+","slug":"promise-a","link":"#promise-a","children":[]},{"level":2,"title":"实现Promise","slug":"实现promise","link":"#实现promise","children":[]}],"relativePath":"summary/JavaScript/Promise.md","lastUpdated":1677493695000}'),a={name:"summary/JavaScript/Promise.md"},o=s('<h1 id="promise是什么" tabindex="-1">Promise是什么？ <a class="header-anchor" href="#promise是什么" aria-hidden="true">#</a></h1><p>Promise 是异步编程的一种解决方案： 从语法上讲，promise是一个对象，从它可以获取异步操作的消息</p><h2 id="promise解决的问题" tabindex="-1">Promise解决的问题 <a class="header-anchor" href="#promise解决的问题" aria-hidden="true">#</a></h2><ul><li>回调地狱，代码难以维护， 常常第一个的函数的输出是第二个函数的输入这种现象</li><li>promise可以支持多个并发的请求，获取并发请求中的数据</li><li>这个promise可以解决异步的问题，本身不能说promise是异步的</li></ul><h2 id="promise的状态" tabindex="-1">Promise的状态 <a class="header-anchor" href="#promise的状态" aria-hidden="true">#</a></h2><p>promise 有 3 个状态，分别是 pending, fulfilled 和 rejected</p><p>在 pending 状态，promise 可以切换到 fulfilled 或 rejected</p><p>在 fulfilled 状态，不能迁移到其它状态，必须有个不可变的 value</p><p>在 rejected 状态，不能迁移到其它状态，必须有个不可变的 reason</p><h2 id="promise的一些特性" tabindex="-1">Promise的一些特性 <a class="header-anchor" href="#promise的一些特性" aria-hidden="true">#</a></h2><ul><li>Promise构造函数是同步执行的，promise.then中的函数是异步执行的</li><li>构造函数中的 resolve 或 reject 只有第一次执行有效，多次调用没有任何作用</li><li>promise 可以链式调用。promise 每次调用 .then 或者 .catch 都会返回一个新的 promise，从而实现了链式调用</li><li>promise 的 .then 或者 .catch 可以被调用多次，但这里 Promise 构造函数只执行一次。或者说 promise 内部状态一经改变，并且有了一个值，那么后续每次调用 .then 或者 .catch 都会直接拿到该值</li><li>.then 或者 .catch 中 return 一个 error 对象并不会抛出错误，所以不会被后续的 .catch 捕获。可以使用Promise.reject或者throw new Error</li><li>.then 或者 .catch 的参数期望是函数，传入非函数则会发生值穿透</li><li>promise.then属于microtask</li></ul><h2 id="promise-a" tabindex="-1">Promise A+ <a class="header-anchor" href="#promise-a" aria-hidden="true">#</a></h2><p>Promise A+ 是一个规范，只要是满足这个规范的对象，都可以当成ES6的promise来使用，例如使用await关键字等</p><p><a href="https://promisesaplus.com/" target="_blank" rel="noreferrer">https://promisesaplus.com/</a></p><h2 id="实现promise" tabindex="-1">实现Promise <a class="header-anchor" href="#实现promise" aria-hidden="true">#</a></h2><p><em>coming soon...</em></p>',16),t=[o];function l(m,p,n,h,c,d){return r(),i("div",null,t)}const P=e(a,[["render",l]]);export{_ as __pageData,P as default};
