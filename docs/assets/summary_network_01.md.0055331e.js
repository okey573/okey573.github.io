import{_ as e,o as r,c as t,a}from"./app.3cc47310.js";const i="/docs/images/network.png",l="/docs/images/network_flow.jpg",P=JSON.parse('{"title":"计算机网络","description":"","frontmatter":{"title":"计算机网络","outline":[2,6]},"headers":[{"level":2,"title":"通信传输流程","slug":"通信传输流程","link":"#通信传输流程","children":[]},{"level":2,"title":"1. 应用层","slug":"_1-应用层","link":"#_1-应用层","children":[]},{"level":2,"title":"2. 运输层","slug":"_2-运输层","link":"#_2-运输层","children":[]},{"level":2,"title":"3. 网络层","slug":"_3-网络层","link":"#_3-网络层","children":[]},{"level":2,"title":"4. 数据链路层","slug":"_4-数据链路层","link":"#_4-数据链路层","children":[]},{"level":2,"title":"5. 物理层","slug":"_5-物理层","link":"#_5-物理层","children":[]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"relativePath":"summary/network/01.md","lastUpdated":1679993466000}'),n={name:"summary/network/01.md"},s=a('<h1 id="计算机网络" tabindex="-1">计算机网络 <a class="header-anchor" href="#计算机网络" aria-hidden="true">#</a></h1><p><img src="'+i+'" alt="计算机网络层级结构"></p><p>现在所说的 <strong>TCP/IP</strong> 协议不单单是指 TCP 和 IP 这两个协议，而是指 TCP/IP 这整个协议族。</p><h2 id="通信传输流程" tabindex="-1">通信传输流程 <a class="header-anchor" href="#通信传输流程" aria-hidden="true">#</a></h2><p>发送端在层与层之间传输数据时，每经过一层时会被打上一个该层所属的首部信息。反之，接收端在层与层之间传输数据时，每经过一层时会把对应的首部信息去除</p><p><img src="'+l+'" alt="通信流程"></p><p>下面主要分析 TCP/IP 协议的五层体系架构。</p><h2 id="_1-应用层" tabindex="-1">1. 应用层 <a class="header-anchor" href="#_1-应用层" aria-hidden="true">#</a></h2><p><strong>应用层</strong>的任务是通过应用进程间的交互来完成特定网络应用。应用层协议定义的是应用进程（进程：主机中正在运行的程序）间的通信和交互的规则。</p><p>如： DNS 协议， HTTP 协议， SMTP 协议（电子邮件）</p><h2 id="_2-运输层" tabindex="-1">2. 运输层 <a class="header-anchor" href="#_2-运输层" aria-hidden="true">#</a></h2><p><strong>运输层</strong>的主要任务就是负责向两台主机进程之间的通信提供通用的数据传输服务。</p><p>运输层主要使用以下两种协议:</p><p><strong>传输控制协议</strong> TCP（Transmission Control Protocol）--提供面向连接的，可靠的数据传输服务。</p><p><strong>用户数据协议</strong> UDP（User Datagram Protocol）--提供无连接的，尽最大努力的数据传输服务（不保证数据传输的可靠性）。</p><h4 id="tcp-协议的三次握手" tabindex="-1">TCP 协议的三次握手 <a class="header-anchor" href="#tcp-协议的三次握手" aria-hidden="true">#</a></h4><ol><li>client 向 server 发送报文，server 确认可以接受来自 client 的报文</li><li>server 向 client 回复报文，client 确认可以收到来自 server 的报文，以及 server 可以收到自己发送的报文</li><li>client 向 server 发送报文，server 确认 client 可以收到自己发送的报文</li></ol><h4 id="tcp-协议的四次挥手" tabindex="-1">TCP 协议的四次挥手 <a class="header-anchor" href="#tcp-协议的四次挥手" aria-hidden="true">#</a></h4><ol><li>client 向 server 发送断开链接请求的报文</li><li>server 向 client 回复报文</li><li>server 在第二次挥手后不会马上断开链接。server 会先确保断开前所有数据是否已经传输完毕，一旦传输数据完毕会再进行第三次挥手</li><li>client 收到 server 的断开请求后，会回复服务端的断开请求</li></ol><h2 id="_3-网络层" tabindex="-1">3. 网络层 <a class="header-anchor" href="#_3-网络层" aria-hidden="true">#</a></h2><p>在计算机网络中进行通信的两个计算机之间可能会经过很多个数据链路，也可能还要经过很多通信子网。 <strong>网络层</strong>的任务就是选择合适的网间路由和交换结点， 确保数据及时传送。 在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组和包进行传送。 在 TCP/IP 体系结构中，由于网络层使用 <strong>IP 协议</strong>，因此分组也叫 IP 数据报 ，简称 数据报。</p><h2 id="_4-数据链路层" tabindex="-1">4. 数据链路层 <a class="header-anchor" href="#_4-数据链路层" aria-hidden="true">#</a></h2><p><strong>数据链路层</strong>通常简称为链路层。两台主机之间的数据传输，总是在一段一段的链路上传送的，这就需要使用专门的链路层的协议。 在两个相邻节点之间传送数据时，数据链路层将网络层交下来的 IP 数据报组装成帧，在两个相邻节点间的链路上传送帧。每一帧包括数据和必要的控制信息（如同步信息，地址信息，差错控制等）。</p><h2 id="_5-物理层" tabindex="-1">5. 物理层 <a class="header-anchor" href="#_5-物理层" aria-hidden="true">#</a></h2><p><strong>物理层</strong>的作用是实现相邻计算机节点之间比特流的透明传送，尽可能屏蔽掉具体传输介质和物理设备的差异， 使其上面的数据链路层不必考虑网络的具体传输介质是什么。“透明传送比特流”表示经实际电路传送后的比特流没有发生变化，对传送的比特流来说，这个电路好像是看不见的。</p><p>上面的所有层都是封装数据和管理，物理层是传输数据的唯一出口，所有数据到达物理层都会变成二进制的载波信号。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-hidden="true">#</a></h2><ul><li><p><a href="https://blog.csdn.net/m0_57659908/article/details/123956310" target="_blank" rel="noreferrer">计算机网络中的层次结构</a></p></li><li><p><a href="https://blog.csdn.net/summer_fish/article/details/125263574" target="_blank" rel="noreferrer">计算机网络分层</a></p></li><li><p><a href="https://blog.csdn.net/m0_38106923/article/details/108292454" target="_blank" rel="noreferrer">一文搞懂TCP的三次握手和四次挥手</a></p></li></ul>',28),o=[s];function d(h,c,p,_,g,u){return r(),t("div",null,o)}const m=e(n,[["render",d]]);export{P as __pageData,m as default};