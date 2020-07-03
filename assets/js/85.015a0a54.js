(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{458:function(s,t,a){"use strict";a.r(t);var n=a(27),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"nginx-负载均衡配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx-负载均衡配置"}},[s._v("#")]),s._v(" Nginx 负载均衡配置")]),s._v(" "),a("p",[s._v("负载均衡是后端常见的部署方式，通过创建后端集群，分担每一台服务器的压力，能够实现大量请求的处理，即使某一台服务器挂掉，对整个应用也不会造成太大的影响。")]),s._v(" "),a("ul",[a("li",[s._v("负载均衡定义")]),s._v(" "),a("li",[s._v("反向代理定义")]),s._v(" "),a("li",[s._v("反向代理实战")])]),s._v(" "),a("h2",{attrs:{id:"负载均衡定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#负载均衡定义"}},[s._v("#")]),s._v(" 负载均衡定义")]),s._v(" "),a("p",[s._v("负载平衡（Load balancing）是一种计算机技术，用来在多个计算机（计算机集群）、网络连接、CPU、磁盘驱动器或其他资源中分配负载，以达到最优化资源使用、最大化吞吐率、最小化响应时间、同时避免过载的目的。 使用带有负载平衡的多个服务器组件，取代单一的组件，可以通过冗余提高可靠性。负载平衡服务通常是由专用软件和硬件来完成。 主要作用是将大量作业合理地分摊到多个操作单元上进行执行，用于解决互联网架构中的高并发和高可用的问题。")]),s._v(" "),a("p",[s._v("负载均衡示意图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"operation-nginx-load-balancing-loadBalancing.png",alt:"负载均衡"}})]),s._v(" "),a("h2",{attrs:{id:"反向代理定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向代理定义"}},[s._v("#")]),s._v(" 反向代理定义")]),s._v(" "),a("p",[s._v("反向代理在计算机网络中是代理服务器的一种。用户不直接请求服务器，而是请求反向代理服务器，再由反向代理服务器转发请求到其他服务器。客户端只知道反向代理的 IP 地址，而不知道在代理服务器后面的服务器集群的存在。"),a("strong",[s._v("反向代理是实现负载均衡的一种方式")]),s._v("。")]),s._v(" "),a("p",[s._v("反向代理示意图：")]),s._v(" "),a("p",[a("img",{attrs:{src:"operation-nginx-load-balancing-reverseProxy.png",alt:"反向代理"}})]),s._v(" "),a("p",[s._v("反向代理的作用：")]),s._v(" "),a("ul",[a("li",[s._v("复用 DNS 查询。")]),s._v(" "),a("li",[s._v("加密和 SSL 加速。")]),s._v(" "),a("li",[s._v("负载均衡。")]),s._v(" "),a("li",[s._v("缓存静态资源。")]),s._v(" "),a("li",[s._v("压缩。")]),s._v(" "),a("li",[s._v("减速上传。")]),s._v(" "),a("li",[s._v("安全。")]),s._v(" "),a("li",[s._v("外网发布。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("反向代理和正向代理")]),s._v(" "),a("ul",[a("li",[s._v("正向代理，服务器端无感知，因为服务器始终只和代理服务器通信，并不知道代理服务器还会向其他端转发信息。")]),s._v(" "),a("li",[s._v("反向代理，客户端无感知，因为客户端始终只和代理服务器通信，并不知道代理服务器还会将请求转发到其他的服务器。")])])]),s._v(" "),a("h2",{attrs:{id:"反向代理实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向代理实战"}},[s._v("#")]),s._v(" 反向代理实战")]),s._v(" "),a("p",[s._v("接下来我们使用 nginx 配置一个反向代理。")]),s._v(" "),a("div",{staticClass:"language-nginx line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-nginx"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_processes")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("events")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("worker_connections")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 定义负载均衡设备的 ip 及设备状态")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("upstream")]),s._v(" firsttest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ip_hash")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可选。每个请求按访问 ip 的 hash 结果分配，这样每个访客固定访问一个后端服务器，可以解决 session 的问题。")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111.13")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".103")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".91")]),s._v(" weight"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置权重为3，他被请求的概率是 3 / 4 = 75%。")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111.13")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".179")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".222")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111.13")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".179")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".333")]),s._v(" down"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表示当前的 server 暂时不参与负载。")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111.13")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".179")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".444")]),s._v(" backup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 其它所有的非 backup 机器 down 或者忙的时候，才会被请求。")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("111.13")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".179")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".555")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匹配根路由，然后代理到 firsttest 网络上。")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("firsttest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[s._v("#")]),s._v(" 相关链接")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86",target:"_blank",rel:"noopener noreferrer"}},[s._v("反向代理"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1",target:"_blank",rel:"noopener noreferrer"}},[s._v("负载均衡"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);