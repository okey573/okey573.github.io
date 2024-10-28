import{_ as a,c as e,o as r,a4 as t,ab as l,ac as i}from"./chunks/framework.CbHUKvme.js";const b=JSON.parse('{"title":"计算机网络","description":"","frontmatter":{"title":"计算机网络","outline":[2,6]},"headers":[],"relativePath":"summary/network/01.md","filePath":"summary/network/01.md","lastUpdated":1724051358000}'),o={name:"summary/network/01.md"},n=t('<h1 id="计算机网络" tabindex="-1">计算机网络 <a class="header-anchor" href="#计算机网络" aria-label="Permalink to &quot;计算机网络&quot;">​</a></h1><p><img src="'+l+'" alt="计算机网络层级结构"></p><p>现在所说的 <strong>TCP/IP</strong> 协议不单单是指 TCP 和 IP 这两个协议，而是指 TCP/IP 这整个协议族。</p><h2 id="通信传输流程" tabindex="-1">通信传输流程 <a class="header-anchor" href="#通信传输流程" aria-label="Permalink to &quot;通信传输流程&quot;">​</a></h2><p>发送端在层与层之间传输数据时，每经过一层时会被打上一个该层所属的首部信息。反之，接收端在层与层之间传输数据时，每经过一层时会把对应的首部信息去除</p><p><img src="'+i+'" alt="通信流程"></p><p>下面主要分析 TCP/IP 协议的五层体系架构。</p><h2 id="_1-应用层" tabindex="-1">1. 应用层 <a class="header-anchor" href="#_1-应用层" aria-label="Permalink to &quot;1. 应用层&quot;">​</a></h2><p><strong>应用层</strong>的任务是通过应用进程间的交互来完成特定网络应用。应用层协议定义的是应用进程（进程：主机中正在运行的程序）间的通信和交互的规则。</p><p>如： DNS 协议， HTTP 协议， SMTP 协议（电子邮件）</p><h2 id="_2-运输层" tabindex="-1">2. 运输层 <a class="header-anchor" href="#_2-运输层" aria-label="Permalink to &quot;2. 运输层&quot;">​</a></h2><p><strong>运输层</strong>的主要任务就是负责向两台主机进程之间的通信提供通用的数据传输服务。</p><p>运输层主要使用以下两种协议:</p><p><strong>传输控制协议</strong> TCP（Transmission Control Protocol）--提供面向连接的，可靠的数据传输服务。</p><p><strong>用户数据协议</strong> UDP（User Datagram Protocol）--提供无连接的，尽最大努力的数据传输服务（不保证数据传输的可靠性）。</p><h4 id="tcp-协议的三次握手" tabindex="-1">TCP 协议的三次握手 <a class="header-anchor" href="#tcp-协议的三次握手" aria-label="Permalink to &quot;TCP 协议的三次握手&quot;">​</a></h4><ol><li>client 向 server 发送报文，server 确认可以接受来自 client 的报文</li><li>server 向 client 回复报文，client 确认可以收到来自 server 的报文，以及 server 可以收到自己发送的报文</li><li>client 向 server 发送报文，server 确认 client 可以收到自己发送的报文</li></ol><h4 id="tcp-协议的四次挥手" tabindex="-1">TCP 协议的四次挥手 <a class="header-anchor" href="#tcp-协议的四次挥手" aria-label="Permalink to &quot;TCP 协议的四次挥手&quot;">​</a></h4><ol><li>client 向 server 发送断开链接请求的报文</li><li>server 向 client 回复报文</li><li>server 在第二次挥手后不会马上断开链接。server 会先确保断开前所有数据是否已经传输完毕，一旦传输数据完毕会再进行第三次挥手</li><li>client 收到 server 的断开请求后，会回复服务端的断开请求</li></ol><h4 id="tcp-协议的流量控制" tabindex="-1">TCP 协议的流量控制 <a class="header-anchor" href="#tcp-协议的流量控制" aria-label="Permalink to &quot;TCP 协议的流量控制&quot;">​</a></h4><p>一般来说，我们总希望数据传输的更快一些。但如果发送方把数据发得过快，接收方就可能来不及接收，这就会造成数据的丢失。流量控制（flow control）就是让发送方的发送速率不要太快，要让接收方来得及接收。</p><p>利用<strong>滑动窗口</strong>机制可以很方便地在TCP连接上实现发送方流量控制。通过接收方的确认报文中的窗口字段，发送方能够准确地控制发送字节数。</p><p>tcp 协议头部有个 window 字段，这个字段是接收端告诉发送端自己有多少缓冲区可以接受数据。发送端会根据这个值来发送数据。所以窗口的大小是根据接收方反馈的信息来决定的。</p><h4 id="tcp-协议的拥塞控制" tabindex="-1">TCP 协议的拥塞控制 <a class="header-anchor" href="#tcp-协议的拥塞控制" aria-label="Permalink to &quot;TCP 协议的拥塞控制&quot;">​</a></h4><p>前面的流量控制是避免发送方的数据填满接收方的缓存，但并不知道网络中发生了什么。一般来说，计算机网络都处在一个共享的环境。因此也有可能会因为其他主机之间的通信使得网络拥堵。在网络出现拥堵时，如果继续发送大量的数据包，可能会导致数据包时延、丢失，这时 TCP 就会重传数据，但是⼀重传就会导致⽹络的负担更重，于是会导致更⼤的延迟以及更多的丢包，这个情况就会进⼊恶性循环被不断地放⼤…</p><p>于是，就有了拥塞控制，控制的⽬的就是避免「发送⽅」的数据填满整个⽹络。为了在「发送⽅」调节所要发送数据的数据量，定义了⼀个叫做「拥塞窗⼝」的概念。拥塞窗⼝ cwnd是发送⽅维护的⼀个的状态变ᰁ，它会根据⽹络的拥塞程度动态变化的。</p><p>四种算法：</p><ul><li>慢启动</li><li>拥塞避免</li><li>快重传</li><li>快恢复</li></ul><h2 id="_3-网络层" tabindex="-1">3. 网络层 <a class="header-anchor" href="#_3-网络层" aria-label="Permalink to &quot;3. 网络层&quot;">​</a></h2><p>在计算机网络中进行通信的两个计算机之间可能会经过很多个数据链路，也可能还要经过很多通信子网。 <strong>网络层</strong>的任务就是选择合适的网间路由和交换结点， 确保数据及时传送。 在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组和包进行传送。 在 TCP/IP 体系结构中，由于网络层使用 <strong>IP 协议</strong>，因此分组也叫 IP 数据报 ，简称 数据报。</p><h2 id="_4-数据链路层" tabindex="-1">4. 数据链路层 <a class="header-anchor" href="#_4-数据链路层" aria-label="Permalink to &quot;4. 数据链路层&quot;">​</a></h2><p><strong>数据链路层</strong>通常简称为链路层。两台主机之间的数据传输，总是在一段一段的链路上传送的，这就需要使用专门的链路层的协议。 在两个相邻节点之间传送数据时，数据链路层将网络层交下来的 IP 数据报组装成帧，在两个相邻节点间的链路上传送帧。每一帧包括数据和必要的控制信息（如同步信息，地址信息，差错控制等）。</p><h2 id="_5-物理层" tabindex="-1">5. 物理层 <a class="header-anchor" href="#_5-物理层" aria-label="Permalink to &quot;5. 物理层&quot;">​</a></h2><p><strong>物理层</strong>的作用是实现相邻计算机节点之间比特流的透明传送，尽可能屏蔽掉具体传输介质和物理设备的差异， 使其上面的数据链路层不必考虑网络的具体传输介质是什么。“透明传送比特流”表示经实际电路传送后的比特流没有发生变化，对传送的比特流来说，这个电路好像是看不见的。</p><p>上面的所有层都是封装数据和管理，物理层是传输数据的唯一出口，所有数据到达物理层都会变成二进制的载波信号。</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ul><li><p><a href="https://blog.csdn.net/m0_57659908/article/details/123956310" target="_blank" rel="noreferrer">计算机网络中的层次结构</a></p></li><li><p><a href="https://blog.csdn.net/summer_fish/article/details/125263574" target="_blank" rel="noreferrer">计算机网络分层</a></p></li><li><p><a href="https://blog.csdn.net/m0_38106923/article/details/108292454" target="_blank" rel="noreferrer">一文搞懂TCP的三次握手和四次挥手</a></p></li><li><p><a href="https://blog.csdn.net/ZBraveHeart/article/details/123820768" target="_blank" rel="noreferrer">TCP的流量控制</a></p></li><li><p><a href="https://www.yisu.com/zixun/595109.html" target="_blank" rel="noreferrer">TCP的流量控制与拥塞控制的区别</a></p></li><li><p><a href="https://blog.csdn.net/bandaoyu/article/details/106891569" target="_blank" rel="noreferrer">【TCP】TCP的流量控制（TCP滑动窗口和拥塞控制）</a></p></li></ul>',37),s=[n];function p(h,c,d,P,_,u){return r(),e("div",null,s)}const g=a(o,[["render",p]]);export{b as __pageData,g as default};