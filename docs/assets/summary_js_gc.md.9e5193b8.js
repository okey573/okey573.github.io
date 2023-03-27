import{_ as e,o as a,c as r,a as n}from"./app.b1e773e0.js";const k=JSON.parse('{"title":"垃圾回收机制","description":"","frontmatter":{"title":"垃圾回收机制","outline":[2,6]},"headers":[{"level":2,"title":"内存分代","slug":"内存分代","link":"#内存分代","children":[]},{"level":2,"title":"新生代的垃圾回收(Scavenge)","slug":"新生代的垃圾回收-scavenge","link":"#新生代的垃圾回收-scavenge","children":[]},{"level":2,"title":"老生代的垃圾回收 (Mark-Sweep & Mark-Compact)","slug":"老生代的垃圾回收-mark-sweep-mark-compact","link":"#老生代的垃圾回收-mark-sweep-mark-compact","children":[]},{"level":2,"title":"Incremental Marking (增量标记)","slug":"incremental-marking-增量标记","link":"#incremental-marking-增量标记","children":[]},{"level":2,"title":"内存泄漏","slug":"内存泄漏","link":"#内存泄漏","children":[]}],"relativePath":"summary/js/gc.md","lastUpdated":1679912014000}'),i={name:"summary/js/gc.md"},t=n('<h1 id="垃圾回收机制" tabindex="-1">垃圾回收机制 <a class="header-anchor" href="#垃圾回收机制" aria-hidden="true">#</a></h1><p>V8引擎的垃圾回收机制是采用了一种<strong>分代式回收机制</strong>，根具对象存活时间进行分代，将内存分为新生代和老生代两块内存空间。</p><h2 id="内存分代" tabindex="-1">内存分代 <a class="header-anchor" href="#内存分代" aria-hidden="true">#</a></h2><ul><li>新生代：其中的对象存活时间较短</li><li>老生代：其中的存活时间较长或常驻内存的对象</li></ul><h2 id="新生代的垃圾回收-scavenge" tabindex="-1">新生代的垃圾回收(Scavenge) <a class="header-anchor" href="#新生代的垃圾回收-scavenge" aria-hidden="true">#</a></h2><p>新生代的对象主要通过 Scavenge 算法进行垃圾回收。Scavenge 算法的具体实现中采用了 Cheney 算法。</p><h4 id="内存一分为二" tabindex="-1">内存一分为二 <a class="header-anchor" href="#内存一分为二" aria-hidden="true">#</a></h4><p>Cheney 算法是一种采用复制的方式实现的垃圾回收算法。将堆内存一分为二，每一部分空间称为 semispace。在这两个 semispace 空间中，只有一个处于使用中，另一个处于闲置状态。处于使用状态的 semispace 空间称为 From 空间，处于闲置状态的空间称为 To 空间。</p><h4 id="翻转" tabindex="-1">翻转 <a class="header-anchor" href="#翻转" aria-hidden="true">#</a></h4><p>开始分配对象时，先在 From 中间中进行分配。进行垃圾回收时，会检查 From 空间中的存活对象，这些存活对象将被复制到 To 空间中，而非存活对象占用的空间将会被释放。</p><p>完成复制后，From 空间和 To 空间的角色发生对换（翻转）。</p><h4 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-hidden="true">#</a></h4><p>该算法的缺点很明显，只能使用堆内存中的一半，这是由划分空间和复制机制所决定的。但 Scavenge 算法由于只复制存活的对象，并且对于生命周期短的场景存活对象只占少部分，所以在时间效率上有优异的表现。</p><p>可以发现 Scavenge 算法非常适合应用在新生代中，因为新生代中对象的生命周期较短。</p><h4 id="晋升" tabindex="-1">晋升 <a class="header-anchor" href="#晋升" aria-hidden="true">#</a></h4><p>当一个对象经过多次复制依然存活时，它将会被认为是生命周期较长的对象。这种较长生命周期的对象随后会被移动到老生代中，采用新的算法进行管理。</p><p>对象从新生代移动到老生代中的过程称为晋升。</p><p>在单纯的 Scavenge 过程中， From 空间中的存活对象会被复制到 To 空间中去，然后两个空间的角色进行兑换。但在分代式垃圾回收的前提下，From 空间的存活对象在复制到 To 空间之前需要进行检查。如果符合对象晋升的条件，则需要将存活周期长的对象移动到老生代中，完成对象晋升</p><h2 id="老生代的垃圾回收-mark-sweep-mark-compact" tabindex="-1">老生代的垃圾回收 (Mark-Sweep &amp; Mark-Compact) <a class="header-anchor" href="#老生代的垃圾回收-mark-sweep-mark-compact" aria-hidden="true">#</a></h2><h4 id="不继续使用-scavenge-回收的原因" tabindex="-1">不继续使用 Scavenge 回收的原因 <a class="header-anchor" href="#不继续使用-scavenge-回收的原因" aria-hidden="true">#</a></h4><ul><li>老生代中的对象占比重大，存活对象多，复制存活对象的效率将会很低</li><li>浪费一半空间的问题</li></ul><h4 id="mark-sweep-标记清除" tabindex="-1">Mark-Sweep (标记清除) <a class="header-anchor" href="#mark-sweep-标记清除" aria-hidden="true">#</a></h4><p>分为标记和清除。</p><p><strong>标记：</strong> 该阶段会遍历堆中的所有对象，并标记活着的对象，在随后的清除阶段中，只清除没有被标记的对象。Scavenge 只复制活着的对象，因为活对象在新生代中只占较小的部分。 Mark-Sweep 只清理死亡对象，死对象在老生代中只占较小的部分。</p><p><strong>问题：</strong> 进行一次标记清除之后，内存空间会出现不连续的状态。（一块一块的）对后续的内存分配会造成问题，比如无法对大对象进行内存分配。</p><h4 id="mark-compact-标记整理" tabindex="-1">Mark-Compact (标记整理) <a class="header-anchor" href="#mark-compact-标记整理" aria-hidden="true">#</a></h4><p>Mark-Compact 对象在标记死亡后，在整理的过程中，将活着的对象往一端移动，移动完成后，直接清理掉边界外的内存。</p><p>在 V8 的回收策略中两者是结合使用的。</p><h2 id="incremental-marking-增量标记" tabindex="-1">Incremental Marking (增量标记) <a class="header-anchor" href="#incremental-marking-增量标记" aria-hidden="true">#</a></h2><p>以上介绍的3种垃圾回收机制，都需要将应用逻辑暂停下来，待执行完垃圾回收后再恢复执行阴影逻辑，这种行为被称为 “全停顿”（stop-the-world）。</p><p>一次小垃圾回收只收集新生代，新生代中存活对象通常较少，即便全停顿影响也不大。但老生代中通常存活对象较多，全堆垃圾回收（full 垃圾回收）的标记，清理，整理等动作造成的停顿就会很可怕。</p><p>为了降低全堆垃圾回收带来的停顿事件。V8 在标记阶段时会将原本需要一口气停顿完成的动作改为增量标记（Incremental Marking），即拆分为许多小“步进”，每做完一“步进”就让 JavaScript 应用逻辑执行一会，<strong>垃圾回收与应用逻辑交替执行直到标记阶段完成</strong>。</p><p>V8 后续还引入了延迟清理（lazy sweeping）与增量式整理（Incremental compaction），让清理和整理动作也变成增量式的。</p><h2 id="内存泄漏" tabindex="-1">内存泄漏 <a class="header-anchor" href="#内存泄漏" aria-hidden="true">#</a></h2><p>内存泄漏是指我们已经无法再通过 js 代码来引用到某个对象，但垃圾回收器却认为这个对象还在被引用，因此在回收的时候不会释放它。导致了分配的这块内存永远也无法被释放出来。如果这样的情况越来越多，会导致内存不够用而系统崩溃。</p><p>造成内存泄露的情况有很多，但本质只有一个，应该回收的对象出现意外而没有被回收，变成了常驻在老生代的对象。</p><p>通过造成内存泄露的原因：</p><ul><li>缓存</li><li>队列消费不及时</li><li>作用域未释放</li></ul>',38),c=[t];function h(l,s,d,p,o,m){return a(),r("div",null,c)}const u=e(i,[["render",h]]);export{k as __pageData,u as default};
