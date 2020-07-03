(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{385:function(v,_,t){"use strict";t.r(_);var a=t(27),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"tcp-协议总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议总结"}},[v._v("#")]),v._v(" TCP 协议总结")]),v._v(" "),t("p",[v._v("这一节来总结一下 TCP 的常用概念。")]),v._v(" "),t("ul",[t("li",[v._v("TCP 协议定义")]),v._v(" "),t("li",[v._v("TCP 首部格式")]),v._v(" "),t("li",[v._v("TCP 握手过程")]),v._v(" "),t("li",[v._v("TCP 可靠传输原理")]),v._v(" "),t("li",[v._v("TCP 流量控制")]),v._v(" "),t("li",[v._v("TCP 拥塞控制")])]),v._v(" "),t("h2",{attrs:{id:"tcp-协议定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议定义"}},[v._v("#")]),v._v(" TCP 协议定义")]),v._v(" "),t("p",[v._v("TCP（Transmission Control Protocol 传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议，由 IETF 的 RFC 793 定义。在简化的计算机网络 OSI 模型中，它完成第四层传输层所指定的功能。")]),v._v(" "),t("p",[v._v("TCP 协议的特点是：")]),v._v(" "),t("ul",[t("li",[v._v("面向连接。")]),v._v(" "),t("li",[v._v("点对点（一对一）。")]),v._v(" "),t("li",[v._v("可靠交付。")]),v._v(" "),t("li",[v._v("面向字节流，也就是说仅仅把上层协议传递过来的数据当成字节传输。")])]),v._v(" "),t("p",[v._v("为了实现 TCP 上述的特点，TCP 协议主要从面向连接（建立连接和关闭连接的方式）、可靠传输（错误确认和重传）、流量控制（发送方和接收方的传输速率协调）、拥塞控制四个方面去优化。")]),v._v(" "),t("h2",{attrs:{id:"tcp-首部格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-首部格式"}},[v._v("#")]),v._v(" TCP 首部格式")]),v._v(" "),t("p",[v._v("TCP 协议首部最小长度是 20 字节，首部有一个长度可变的选项部分，最大 40 字节，所以 TCP 首部长度是 20-60 字节大小。具体如图：")]),v._v(" "),t("p",[t("img",{attrs:{src:"osi-tcp-header.png",alt:"tcp 首部字段"}})]),v._v(" "),t("p",[v._v("字段解释如下：")]),v._v(" "),t("ul",[t("li",[v._v("序号：TCP 传输的时候每一个字节都按顺序编号；协议中的序号是本报文段所发送数据第一个字节的序号。序号也用于建立和结束连接时候使用。")]),v._v(" "),t("li",[v._v("确认号：用于可靠传输中，返回确认报文序号。")]),v._v(" "),t("li",[v._v("数据偏移：指出数据段在报文中开始的位置。")]),v._v(" "),t("li",[v._v("窗口：可靠连接和流量控制中所用到的窗口大小。")])]),v._v(" "),t("p",[v._v("上图中有六个控制位，对于建立和结束连接非常关键：")]),v._v(" "),t("ul",[t("li",[v._v("URG(Urgent):紧急字段，可以让该报文不按报文顺序优先被处理。比如用户突然终止传输关闭连接。")]),v._v(" "),t("li",[v._v("ACK(Acknowledge):所有建立连接后传送的报文 ACK 必须为 1.")]),v._v(" "),t("li",[v._v("PSH(Push):发送方将该报文推送向前，可以不用等缓存填满先提交给应用程序。")]),v._v(" "),t("li",[v._v("RST(Reset):连接出现严重差错时候设为 1，重新建立连接。也可用于拒绝建立连接。")]),v._v(" "),t("li",[v._v("SYN(Synchronize):建立连接时候的同步标志。SYN=1 而 ACK=0 时表示建立连接请求。")]),v._v(" "),t("li",[v._v("FIN(Finish):终止连接时的标志位。")])]),v._v(" "),t("p",[v._v("另外，在选项中有这么几种选择：")]),v._v(" "),t("ul",[t("li",[v._v("最大报文长度 MSS(Maxium Segment Size)，指的是一个 TCP 报文数据段的最大长度。要尽可能大一些但是又不需要 IP 拆分。推荐是 536 字节，这样整个 TCP 报文长度是 536 + 20 = 556 字节。")]),v._v(" "),t("li",[v._v("窗口扩大选项。可用于控制传输窗口大小。")]),v._v(" "),t("li",[v._v("时间戳。可用于计算往返时间 RTT 、区分重复报文。因为报文的序号只能是 2^32-1 个，所以很容易就重复了，加上时间戳可以进行区分。")])]),v._v(" "),t("h2",{attrs:{id:"tcp-握手过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-握手过程"}},[v._v("#")]),v._v(" TCP 握手过程")]),v._v(" "),t("p",[v._v("每一次 TCP 连接的建立和断开都需要经过通过客户端和服务器端的协商，这个协商的过程我们称之为握手。")]),v._v(" "),t("ul",[t("li",[v._v("三次握手")]),v._v(" "),t("li",[v._v("四次挥手")])]),v._v(" "),t("h3",{attrs:{id:"三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三次握手"}},[v._v("#")]),v._v(" 三次握手")]),v._v(" "),t("p",[v._v("TCP 在建立连接时，需要进行 3 次确认，俗称三次握手。")]),v._v(" "),t("p",[t("img",{attrs:{src:"osi-tcp-connect.png",alt:"三次握手"}})]),v._v(" "),t("h4",{attrs:{id:"第一次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一次握手"}},[v._v("#")]),v._v(" 第一次握手")]),v._v(" "),t("p",[v._v("客户端向服务端发送连接请求报文段。该报文段中包含自身的数据通讯初始序号 seq=x。请求发送后，客户端便进入 SYN-SENT 状态。")]),v._v(" "),t("h4",{attrs:{id:"第二次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二次握手"}},[v._v("#")]),v._v(" 第二次握手")]),v._v(" "),t("p",[v._v("服务端收到连接请求报文段后，如果同意连接，则会发送一个应答，该应答中也会包含自身的数据通讯初始序号 ack=x+1，发送完成后便进入 SYN-RECEIVED 状态。")]),v._v(" "),t("h4",{attrs:{id:"第三次握手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三次握手"}},[v._v("#")]),v._v(" 第三次握手")]),v._v(" "),t("p",[v._v("当客户端收到连接同意的应答后，还要向服务端发送一个确认报文。客户端发完这个报文段后便进入 ESTABLISHED 状态，服务端收到这个应答后也进入 ESTABLISHED 状态，此时连接建立成功。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TCP 快速打开 TFO")]),v._v(" "),t("p",[v._v("TCP 快速打开（Fast Open，简称 TFO）是对计算机网络中传输控制协议（TCP）连接的一种简化握手手续的拓展，用于提高两端点间连接的打开速度。")]),v._v(" "),t("p",[v._v("它通过握手开始时的 SYN 包中的 TFO cookie（一个 TCP 选项）来验证一个之前连接过的客户端。如果验证成功，它可以在第三次握手最终的 ACK 包收到之前就开始发送数据，这样便跳过了一个绕路的行为，更在传输开始时就降低了延迟。这个加密的 Cookie 被存储在客户端，在一开始的连接时被设定好。然后每当客户端连接时，这个 Cookie 被重复返回。")]),v._v(" "),t("p",[v._v("简单来说，就是通过快速打开（TFO）技术在服务器端第二次握手时校验 cookie 有效性，如果有效，则不用等到第三次握手后才传递数据，可以立即发送数据。")])]),v._v(" "),t("p",[t("strong",[v._v("为什么 TCP 建立连接需要三次握手，明明两次就可以建立起连接？")])]),v._v(" "),t("p",[v._v("这是为了防止出现失效的连接请求报文被服务端接收的情况。")]),v._v(" "),t("p",[v._v("可以想象如下场景。客户端发送了一个连接请求 A，但是因为网络原因造成了超时，这时 TCP 会启动超时重传的机制再次发送一个连接请求 B。此时请求顺利到达服务端，服务端应答完就建立了请求，然后接收数据后释放了连接。")]),v._v(" "),t("p",[v._v("如果这时候连接请求 A 在两端关闭后终于抵达了服务端，那么此时服务端会认为客户端又需要建立 TCP 连接，从而应答了该请求并进入 ESTABLISHED 状态。但是客户端其实是 CLOSED 的状态，那么就会导致服务端一直等待，造成资源的浪费。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("SYN Flood 攻击")]),v._v(" "),t("p",[v._v("在建立连接中，任意一端掉线，TCP 都会重发 SYN 包，一般会重试五次，假设一个用户向服务器发送了 SYN 报文后突然死机或掉线，那么服务器在发出 SYN+ACK 应答报文后是无法收到客户端的 ACK 报文的（第三次握手无法完成）。")]),v._v(" "),t("p",[v._v("这种情况下服务器端会重试（再次发送 SYN+ACK 给客户端）并等待一段时间，如果等待超时，就会丢弃这个未完成的连接，这段时间的长度我们称为 SYN Timeout，一般来说这个时间是分钟的数量级（大约为 30 秒-2 分钟）。")]),v._v(" "),t("p",[v._v("恶意攻击者可以利用 SYN Timeout 大量模拟这种情况，服务器端将为了维护一个非常大的半连接列表而消耗非常多的资源（数以万计的半连接），即使是简单的保存并遍历也会消耗非常多的 CPU 时间和内存。最后的结果往往是服务器堆栈溢出崩溃。")]),v._v(" "),t("p",[v._v("遇到这种情况你可以选择"),t("strong",[v._v("调低重试次数")]),v._v("或者干脆"),t("strong",[v._v("在不能处理的情况下拒绝请求")]),v._v("。")])]),v._v(" "),t("h3",{attrs:{id:"四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手"}},[v._v("#")]),v._v(" 四次挥手")]),v._v(" "),t("p",[v._v("TCP 在断开连接时，需要进行 4 次确认，俗称四次挥手。")]),v._v(" "),t("p",[t("img",{attrs:{src:"osi-tcp-cancel.png",alt:"四次握手"}})]),v._v(" "),t("h4",{attrs:{id:"第一次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一次挥手"}},[v._v("#")]),v._v(" 第一次挥手")]),v._v(" "),t("p",[v._v("客户端 A 认为数据发送完成，它需要向服务端 B 发送连接释放请求。")]),v._v(" "),t("h4",{attrs:{id:"第二次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二次挥手"}},[v._v("#")]),v._v(" 第二次挥手")]),v._v(" "),t("p",[v._v("B 收到连接释放请求后，会告诉应用层要释放 TCP 链接。然后会发送 ACK 包，并进入 CLOSE_WAIT 状态，此时表明 A 到 B 的连接已经释放，不再接收 A 发的数据了。但是因为 TCP 连接是双向的，所以 B 仍旧可以发送数据给 A。")]),v._v(" "),t("h4",{attrs:{id:"第三次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三次挥手"}},[v._v("#")]),v._v(" 第三次挥手")]),v._v(" "),t("p",[v._v("B 如果此时还有没发完的数据会继续发送，完毕后会向 A 发送连接释放请求，然后 B 便进入 LAST-ACK 状态。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),t("p",[v._v("通过延迟确认的技术（通常有时间限制，否则对方会误认为需要重传），可以将第二次和第三次握手合并，延迟 ACK 包的发送。")])]),v._v(" "),t("h4",{attrs:{id:"第四次挥手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第四次挥手"}},[v._v("#")]),v._v(" 第四次挥手")]),v._v(" "),t("p",[v._v("A 收到释放请求后，向 B 发送确认应答，此时 A 进入 TIME-WAIT 状态。该状态会持续 2MSL（最大段生存期，指报文段在网络中生存的时间，超时会被抛弃）时间，若该时间段内没有 B 的重发请求的话，就进入 CLOSED 状态。当 B 收到确认应答后，也便进入 CLOSED 状态。")]),v._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[v._v("为什么 A 要进入 TIME-WAIT 状态，等待 2MSL 时间后才进入 CLOSED 状态？")]),v._v(" "),t("p",[v._v("答：为了保证 B 能收到 A 的确认应答。若 A 发完确认应答后直接进入 CLOSED 状态，如果确认应答因为网络问题一直没有到达，那么会造成 B 不能正常关闭。")])]),v._v(" "),t("h2",{attrs:{id:"tcp-可靠传输原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-可靠传输原理"}},[v._v("#")]),v._v(" TCP 可靠传输原理")]),v._v(" "),t("p",[v._v("TCP 底层使用 "),t("strong",[v._v("超时重传机制（ARQ）")]),v._v(" 来保证传输的可靠性，ARQ 协议包含 "),t("strong",[v._v("停止等待 ARQ")]),v._v(" 和 "),t("strong",[v._v("连续 ARQ")]),v._v(" 两种协议。")]),v._v(" "),t("h3",{attrs:{id:"停止等待-arq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止等待-arq"}},[v._v("#")]),v._v(" 停止等待 ARQ")]),v._v(" "),t("p",[t("strong",[v._v("停止等待 ARQ")]),v._v(" 指的是客户端每发送一个报文，就需要等待服务器端确认，只有收到确认后，才会继续发送下一个报文。")]),v._v(" "),t("p",[v._v("例如：A 向 B 发送一段报文的同时，会在 A 端启动一个定时器，等待 B 端回应，在定时器时间内接收到 B 端应答就取消定时器，并发送下一段报文。")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),t("p",[v._v("一般定时器设定的时间都会大于一个 RTT(发送端发送数据到接收到对端数据所需的往返时间) 的平均时间。")])]),v._v(" "),t("p",[v._v("什么时候会出现重传？")]),v._v(" "),t("ul",[t("li",[v._v("丢包\n"),t("ul",[t("li",[v._v("如果在报文传输的过程中出现了丢包。这时候超过定时器设定的时间就会再次发送丢失的数据直到对端响应，所以需要每次都备份发送的数据。")])])]),v._v(" "),t("li",[v._v("报文出错\n"),t("ul",[t("li",[v._v("即使报文正常的传输到对端，也可能出现在传输过程中报文出错的问题。这时候对端会抛弃该报文并等待 A 端重传。")])])]),v._v(" "),t("li",[v._v("定时器超时\n"),t("ul",[t("li",[v._v("对端传输的应答也可能出现丢失或超时的情况。那么超过定时器时间 A 端照样会重传报文。这时候 B 端收到相同序号的报文会丢弃该报文并重传应答，直到 A 端发送下一个序号的报文。")])])])]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("TIP")]),v._v(" "),t("p",[v._v("在超时的情况下也可能出现应答很迟到达，这时 A 端会判断该序号是否已经接收过，如果接收过只需要丢弃应答即可。")])]),v._v(" "),t("p",[v._v("从上面的描述中大家肯定可以发现这肯定不是一个高效的方式。假设在良好的网络环境中，每次发送数据都需要等待片刻肯定是不能接受的。接下来我们来继续学习更高效的可靠传输方式。")]),v._v(" "),t("h3",{attrs:{id:"连续-arq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连续-arq"}},[v._v("#")]),v._v(" 连续 ARQ")]),v._v(" "),t("p",[v._v("在连续 ARQ 中，发送端拥有一个发送窗口，可以在没有收到应答的情况下持续发送窗口内的数据，相比停止等待 ARQ 协议来说减少了等待时间，提高了效率。")]),v._v(" "),t("p",[t("img",{attrs:{src:"osi-tcp-arq.png",alt:"超时重传机制"}})]),v._v(" "),t("h4",{attrs:{id:"累计确认"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#累计确认"}},[v._v("#")]),v._v(" 累计确认")]),v._v(" "),t("p",[v._v("连续 ARQ 中，接收端会持续不断收到报文。通过累计确认，可以在收到多个报文以后统一回复一个应答报文。报文中的 ACK 标志位可以用来告诉发送端这个序号之前的数据已经全部接收到了，下次请发送这个序号后的数据。")]),v._v(" "),t("p",[v._v("但累计确认也有一个弊端。在连续接收报文时，可能会遇到接收到序号 5 的报文后，并未接收到序号 6 的报文，然而序号 7 以后的报文已经接收。遇到这种情况时，ACK 只能回复 6，这样就会重发 6 之后的（包括 7）报文，就造成重复发送数据的问题。")]),v._v(" "),t("h2",{attrs:{id:"tcp-流量控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-流量控制"}},[v._v("#")]),v._v(" TCP 流量控制")]),v._v(" "),t("p",[t("strong",[v._v("TCP 流量控制")]),v._v(" 简单来说就是要控制 TCP 发送速率，不能发送得太快，以免数据来不及处理，也不能发送得太慢，以免浪费资源。")]),v._v(" "),t("p",[v._v("在 TCP 中，发送端和接收端其实都维护着对应的窗口：分别为"),t("strong",[v._v("发送端窗口")]),v._v("和"),t("strong",[v._v("接收端窗口")]),v._v("。")]),v._v(" "),t("p",[v._v("发送端窗口包含：已发送但未收到应答的数据、可以发送但是未发送的数据。")]),v._v(" "),t("p",[v._v("发送端窗口是由接收窗口剩余大小决定的。接收方会把当前接收窗口的剩余大小写入应答报文，发送端收到应答后根据该值和当前网络拥塞情况设置发送窗口的大小，所以发送窗口的大小是不断变化的，这个不断变化的窗口就叫做"),t("strong",[v._v("滑动窗口")]),v._v("。")]),v._v(" "),t("p",[t("strong",[v._v("滑动窗口")]),v._v("是一个很重要的概念，"),t("strong",[v._v("它帮助 TCP 实现了流量控制的功能")]),v._v("。接收方通过报文告知发送方还可以发送多少数据，从而"),t("strong",[v._v("保证接收方能够来得及接收数据")]),v._v("，防止出现接收方带宽已满，但是发送方还一直发送数据的情况。")]),v._v(" "),t("h3",{attrs:{id:"zero-窗口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zero-窗口"}},[v._v("#")]),v._v(" Zero 窗口")]),v._v(" "),t("p",[v._v("在发送报文的过程中，可能会接收到零窗口大小的情况。在该情况下，发送端会停止发送数据，并启动 persistent timer 定时器。该定时器会定时发送请求给对端，让接收端告知窗口大小。在重试次数超过一定次数后，可能会中断 TCP 连接。")]),v._v(" "),t("h2",{attrs:{id:"tcp-拥塞控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-拥塞控制"}},[v._v("#")]),v._v(" TCP 拥塞控制")]),v._v(" "),t("p",[t("strong",[v._v("拥塞控制")]),v._v("作用于网络，目的是"),t("strong",[v._v("防止过多的数据拥塞网络，避免出现网络负载过大，带宽被大量占用的情况")]),v._v("。")]),v._v(" "),t("p",[v._v("常见的 TCP 拥塞控制方法包括四种：")]),v._v(" "),t("ul",[t("li",[v._v("慢开始")]),v._v(" "),t("li",[v._v("拥塞避免")]),v._v(" "),t("li",[v._v("快速重传")]),v._v(" "),t("li",[v._v("快速恢复")])]),v._v(" "),t("h3",{attrs:{id:"慢开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#慢开始"}},[v._v("#")]),v._v(" 慢开始")]),v._v(" "),t("p",[v._v("慢开始算法，顾名思义，就是在传输开始时将发送窗口慢慢的指数级扩大，从而避免一开始就传输大量数据导致网络拥塞。想必大家都下载过资源，每当我们开始下载的时候都会发现下载速度是慢慢提升的，而不是一蹴而就直接拉满带宽。")]),v._v(" "),t("p",[v._v("慢开始算法步骤具体如下：")]),v._v(" "),t("ul",[t("li",[v._v("连接初始设置拥塞窗口（Congestion Window） 为 1 MSS（一个分段的最大数据量）。")]),v._v(" "),t("li",[v._v("每过一个 RTT 就将窗口大小乘二。")]),v._v(" "),t("li",[v._v("指数级增长肯定不能没有限制的，所以有一个阈值限制，当窗口大小大于阈值时就会启动拥塞避免算法。")])]),v._v(" "),t("h3",{attrs:{id:"拥塞避免"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拥塞避免"}},[v._v("#")]),v._v(" 拥塞避免")]),v._v(" "),t("p",[v._v("拥塞避免算法相比简单点，每过一个 RTT 窗口大小只加一（线性增长），这样能够避免指数级增长导致网络拥塞，慢慢将大小调整到最佳值。")]),v._v(" "),t("p",[v._v("在传输过程中可能出现定时器超时的情况，这时候 TCP 会认为网络拥塞了，会马上进行以下步骤：")]),v._v(" "),t("ul",[t("li",[v._v("将阈值设为当前拥塞窗口的一半。")]),v._v(" "),t("li",[v._v("将拥塞窗口设为 1 MSS。")]),v._v(" "),t("li",[v._v("启动拥塞避免算法。")])]),v._v(" "),t("h3",{attrs:{id:"快速重传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速重传"}},[v._v("#")]),v._v(" 快速重传")]),v._v(" "),t("p",[v._v("快速重传一般和快恢复一起出现。一旦接收端收到的报文出现失序的情况，接收端只会回复最后一个顺序正确的报文序号。如果发送端收到三个重复的 ACK，"),t("strong",[v._v("无需等待定时器超时而是直接启动快速重传算法")]),v._v("。具体算法分为两种：")]),v._v(" "),t("ul",[t("li",[v._v("TCP Taho 算法")]),v._v(" "),t("li",[v._v("TCP Reno 算法")])]),v._v(" "),t("p",[t("img",{attrs:{src:"osi-tcp-resend.png",alt:"快速重传"}})]),v._v(" "),t("h4",{attrs:{id:"tcp-taho-实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-taho-实现"}},[v._v("#")]),v._v(" TCP Taho 实现")]),v._v(" "),t("ul",[t("li",[v._v("将阈值设为当前拥塞窗口的一半。")]),v._v(" "),t("li",[v._v("将拥塞窗口设为 1 MSS。")]),v._v(" "),t("li",[v._v("重新开始慢开始算法。")])]),v._v(" "),t("h4",{attrs:{id:"tcp-reno-实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-reno-实现"}},[v._v("#")]),v._v(" TCP Reno 实现")]),v._v(" "),t("ul",[t("li",[v._v("拥塞窗口减半。")]),v._v(" "),t("li",[v._v("将阈值设为当前拥塞窗口。")]),v._v(" "),t("li",[v._v("进入快恢复阶段（重发对端需要的包，一旦收到一个新的 ACK 答复就退出该阶段），这种方式在丢失多个包的情况下就不那么好了。")]),v._v(" "),t("li",[v._v("使用拥塞避免算法。")])]),v._v(" "),t("h4",{attrs:{id:"tcp-new-ren-改进后的快恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tcp-new-ren-改进后的快恢复"}},[v._v("#")]),v._v(" TCP New Ren 改进后的快恢复")]),v._v(" "),t("p",[t("img",{attrs:{src:"osi-tcp-resend-congestion-avoidance.png",alt:"快速重传后的拥塞窗口"}})]),v._v(" "),t("p",[v._v("TCP New Reno 算法改进了之前 TCP Reno 算法的缺陷。在之前，快恢复中只要收到一个新的 ACK 包，就会退出快恢复。")]),v._v(" "),t("p",[v._v("在 TCP New Reno 中，TCP 发送方先记下三个重复 ACK 的分段的最大序号。")]),v._v(" "),t("p",[v._v("假如我有一个分段数据是 1 ~ 10 这十个序号的报文，其中丢失了序号为 3 和 7 的报文，那么该分段的最大序号就是 10。发送端只会收到 ACK 序号为 3 的应答。这时候重发序号为 3 的报文，接收方顺利接收的话就会发送 ACK 序号为 7 的应答。这时候 TCP 知道对端是有多个包未收到，会继续发送序号为 7 的报文，接收方顺利接收并会发送 ACK 序号为 11 的应答，这时发送端认为这个分段接收端已经顺利接收，接下来会退出快恢复阶段。")]),v._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[v._v("#")]),v._v(" 总结")]),v._v(" "),t("p",[v._v("这一章节几乎全理论知识，需要反复理解记忆。")]),v._v(" "),t("ul",[t("li",[v._v("建立连接需要三次握手，断开连接需要四次挥手。")]),v._v(" "),t("li",[v._v("超时重传机制保证每一次传输的数据都是可靠的。")]),v._v(" "),t("li",[v._v("滑动窗口动态调整发送端窗口大小，保证接收方来得及接收数据。")]),v._v(" "),t("li",[v._v("拥塞窗口动态调整发送端窗口大小，防止过多的数据拥塞网络，出现网络带宽不够用的情况。")])]),v._v(" "),t("h2",{attrs:{id:"相关链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[v._v("#")]),v._v(" 相关链接")]),v._v(" "),t("p",[t("a",{attrs:{href:"https://www.jianshu.com/p/f35f386ea9c1",target:"_blank",rel:"noopener noreferrer"}},[v._v("TCP 协议概述"),t("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=s.exports}}]);