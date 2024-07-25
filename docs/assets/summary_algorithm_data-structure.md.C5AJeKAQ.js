import{_ as e,c as a,o as t,a4 as l}from"./chunks/framework.CbHUKvme.js";const _=JSON.parse('{"title":"数据结构","description":"","frontmatter":{"title":"数据结构","lastUpdated":"Thu May 30 2024 10:29:35 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/algorithm/data-structure.md","filePath":"summary/algorithm/data-structure.md","lastUpdated":1721897753000}'),r={name:"summary/algorithm/data-structure.md"},i=l('<h1 id="数据结构" tabindex="-1">数据结构 <a class="header-anchor" href="#数据结构" aria-label="Permalink to &quot;数据结构&quot;">​</a></h1><ul><li>数组与链表：单 / 双向链表、跳舞链</li><li>栈与队列</li><li>树与图：最近公共祖先、并查集</li><li>哈希表</li><li>堆：大 / 小根堆、可并堆</li><li>字符串：字典树、后缀树</li></ul><h2 id="区间数组" tabindex="-1">区间数组 <a class="header-anchor" href="#区间数组" aria-label="Permalink to &quot;区间数组&quot;">​</a></h2><ul><li>和并两个区间数组，一共有6种可能情况。经排序后，可合并成3种情况</li><li>合并多个区间，可排序后两两合并</li></ul><h3 id="例题" tabindex="-1">例题 <a class="header-anchor" href="#例题" aria-label="Permalink to &quot;例题&quot;">​</a></h3><p><a href="https://leetcode.cn/problems/merge-intervals/description/" target="_blank" rel="noreferrer">438. 找到字符串中所有字母异位词</a></p><h3 id="参考题解" tabindex="-1">参考题解 <a class="header-anchor" href="#参考题解" aria-label="Permalink to &quot;参考题解&quot;">​</a></h3><p><a href="https://leetcode.cn/problems/merge-intervals/solutions/204805/chi-jing-ran-yi-yan-miao-dong-by-sweetiee/?envType=study-plan-v2&amp;envId=top-100-liked" target="_blank" rel="noreferrer">吃🐳！🤷‍♀️竟然一眼秒懂合并区间！</a></p><h2 id="二叉树" tabindex="-1">二叉树 <a class="header-anchor" href="#二叉树" aria-label="Permalink to &quot;二叉树&quot;">​</a></h2><ul><li>二叉树的遍历 <ul><li>先序遍历： 先访问根节点，然后访问左子树， 最后访问右子树</li><li>中序遍历： 先访问左子树，然后访问根节点， 最后访问右子树</li><li>后序遍历： 先访问左子树，然后访问右子树， 最后访问根节点</li></ul></li><li>二叉树的很多问题基本都是用递归解决的</li><li>满二叉树 &gt; 完全二叉树</li><li>前缀树 Trie树，即字典，又称单词查找树或键树，是一种树形结构，是一种哈希树的变种。 <ul><li>典型应用是用于统计和排序大量的字符串（但不仅限于字符串），所以经常被搜索引擎系统用于文本词频统计。</li><li>优点是：利用字符串的公共前缀来减少查询时间，最大限度地减少无谓的字符串比较</li></ul></li></ul><h2 id="链表" tabindex="-1">链表 <a class="header-anchor" href="#链表" aria-label="Permalink to &quot;链表&quot;">​</a></h2><ul><li><p>相交链表 消除步差 <a href="https://leetcode.cn/problems/intersection-of-two-linked-lists/solutions/10774/tu-jie-xiang-jiao-lian-biao-by-user7208t/" target="_blank" rel="noreferrer">判断链表相交</a></p></li><li><p>用一个 Map 递归深拷贝带有随机指针的链表</p></li></ul><h3 id="例题-1" tabindex="-1">例题 <a class="header-anchor" href="#例题-1" aria-label="Permalink to &quot;例题&quot;">​</a></h3><p><a href="https://leetcode.cn/problems/copy-list-with-random-pointer/description/" target="_blank" rel="noreferrer">138. 随机链表的复制</a></p>',14),o=[i];function n(s,h,d,c,u,p){return t(),a("div",null,o)}const b=e(r,[["render",n]]);export{_ as __pageData,b as default};
