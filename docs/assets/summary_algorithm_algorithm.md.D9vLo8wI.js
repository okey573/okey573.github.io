import{_ as a,c as e,o as r,a4 as l}from"./chunks/framework.CbHUKvme.js";const b=JSON.parse('{"title":"算法","description":"","frontmatter":{"title":"算法","lastUpdated":"Sun May 12 2024 13:13:52 GMT+0800 (中国标准时间)"},"headers":[],"relativePath":"summary/algorithm/algorithm.md","filePath":"summary/algorithm/algorithm.md","lastUpdated":1721305784000}'),t={name:"summary/algorithm/algorithm.md"},i=l('<h1 id="算法" tabindex="-1">算法 <a class="header-anchor" href="#算法" aria-label="Permalink to &quot;算法&quot;">​</a></h1><ul><li>排序算法：快速排序、归并排序、计数排序</li><li>搜索算法：回溯、递归、剪枝技巧</li><li>图论：最短路、最小生成树、网络流建模</li><li>动态规划：背包问题、最长子序列、计数问题</li><li>基础技巧：分治、倍增、二分、贪心</li></ul><h2 id="滑动窗口" tabindex="-1">滑动窗口 <a class="header-anchor" href="#滑动窗口" aria-label="Permalink to &quot;滑动窗口&quot;">​</a></h2><ul><li>滑动窗口初始化完成以后，滑动时只需要更新窗口的第一个元素和最后一个元素</li><li>滑动窗口的遍历条件：startIndex = 0; startIndex &lt;= arrayLength - windowSize; startIndex++</li></ul><h3 id="例题" tabindex="-1">例题 <a class="header-anchor" href="#例题" aria-label="Permalink to &quot;例题&quot;">​</a></h3><p><a href="https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/" target="_blank" rel="noreferrer">438. 找到字符串中所有字母异位词</a></p><h2 id="动态规划" tabindex="-1">动态规划 <a class="header-anchor" href="#动态规划" aria-label="Permalink to &quot;动态规划&quot;">​</a></h2><ul><li>动态规划的重点是找出转移方程</li><li>有时候 dp 的条件不一定要完全满足题目的要求，最终的结果也可以通过最后的 dp 数组再经过一些计算得到</li></ul><h3 id="例题-1" tabindex="-1">例题 <a class="header-anchor" href="#例题-1" aria-label="Permalink to &quot;例题&quot;">​</a></h3><p><a href="https://leetcode.cn/problems/maximum-subarray" target="_blank" rel="noreferrer">53. 最大子数组和</a></p><h2 id="前缀和" tabindex="-1">前缀和 <a class="header-anchor" href="#前缀和" aria-label="Permalink to &quot;前缀和&quot;">​</a></h2><ul><li>一维前缀和就是一个简单的 dp: dp[i] = dp[i - 1] + dp[i - 2]</li><li>二维前缀和 dp[x, y] = dp[x - 1, y] + dp[x, y - 1] - dp[x - 1, y - 1] + grip[x, y]</li></ul><h3 id="例题-2" tabindex="-1">例题 <a class="header-anchor" href="#例题-2" aria-label="Permalink to &quot;例题&quot;">​</a></h3><p><a href="https://leetcode.cn/problems/path-sum-iii/description/" target="_blank" rel="noreferrer">437. 路径总和 III</a></p><p><a href="https://leetcode.cn/problems/subarray-sum-equals-k/description/" target="_blank" rel="noreferrer">560. 和为 K 的子数组</a></p><h2 id="背包问题" tabindex="-1">背包问题 <a class="header-anchor" href="#背包问题" aria-label="Permalink to &quot;背包问题&quot;">​</a></h2><ul><li>0-1 背包一般可以使用动态规划解决 <code>dp[i][j]</code>是二维数组 表示从0到i的物品，背包容量为0到j的最大容量</li><li>初始化时分别对 i=0 和 j=0 的两种情况初始化</li><li>状态转移也分两种情况，<code>nums[i]</code> 大于 容量 <code>j</code>； <code>nums[i]</code> 小于等于 容量 <code>j</code></li></ul><h3 id="例题-3" tabindex="-1">例题 <a class="header-anchor" href="#例题-3" aria-label="Permalink to &quot;例题&quot;">​</a></h3><p><a href="https://leetcode.cn/problems/partition-equal-subset-sum/description/" target="_blank" rel="noreferrer">416. 分割等和子集</a></p><h2 id="回溯" tabindex="-1">回溯 <a class="header-anchor" href="#回溯" aria-label="Permalink to &quot;回溯&quot;">​</a></h2><ul><li>寻找所有可行解的题，都可以尝试用「搜索回溯」的方法来解决 (dfs)</li></ul><h3 id="例题-4" tabindex="-1">例题 <a class="header-anchor" href="#例题-4" aria-label="Permalink to &quot;例题&quot;">​</a></h3><p><a href="https://leetcode.cn/problems/combination-sum/description" target="_blank" rel="noreferrer">39. 组合总和</a></p><h2 id="二分查找" tabindex="-1">二分查找 <a class="header-anchor" href="#二分查找" aria-label="Permalink to &quot;二分查找&quot;">​</a></h2><ul><li>中点算法 <code>low + Math.floor((high - low) / 2)</code></li><li>复杂的条件，可以拆分成不同条件的多次二分查找。最终时间复杂度仍然为间复杂度为 O(log n)</li></ul><h2 id="广度优先-bfs" tabindex="-1">广度优先（BFS） <a class="header-anchor" href="#广度优先-bfs" aria-label="Permalink to &quot;广度优先（BFS）&quot;">​</a></h2><ul><li>使用队列先进先出的特性，读取节点时，把节点的子节点按顺序加入到队列的尾部</li></ul>',27),o=[i];function d(n,h,s,c,u,p){return r(),e("div",null,o)}const f=a(t,[["render",d]]);export{b as __pageData,f as default};
