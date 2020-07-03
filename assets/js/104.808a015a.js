(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{381:function(v,_,t){"use strict";t.r(_);var a=t(27),s=Object(a.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"《前端架构-从入门到微前端》"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#《前端架构-从入门到微前端》"}},[v._v("#")]),v._v(" 《前端架构-从入门到微前端》")]),v._v(" "),t("p",[v._v("最近一直在学习微服务方面的知识，看到这本书上架，马上就买了，这里总结一下微前端方面的内容。")]),v._v(" "),t("ul",[t("li",[v._v("微前端架构定义")]),v._v(" "),t("li",[v._v("微前端架构实现方式")]),v._v(" "),t("li",[v._v("微前端怎么拆分")])]),v._v(" "),t("h2",{attrs:{id:"微前端架构定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微前端架构定义"}},[v._v("#")]),v._v(" 微前端架构定义")]),v._v(" "),t("p",[t("strong",[v._v("微前端")]),v._v("是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将前端应用由单一的单体应用转变为多个小型前端应用聚合的应用。各个前端应用还可以独立开发、独立部署。同时，他们也可以进行并行开发，这些组件可以通过 npm，git 等工具进行代码管理。")]),v._v(" "),t("h3",{attrs:{id:"微前端的特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微前端的特点"}},[v._v("#")]),v._v(" 微前端的特点")]),v._v(" "),t("ul",[t("li",[v._v("应用自治\n"),t("ul",[t("li",[v._v("遵从统一的接口规或者框架，以便于系统集成在一起，因此，相互之间是不存在依赖关系的。")])])]),v._v(" "),t("li",[v._v("单一职责\n"),t("ul",[t("li",[v._v("不同模块之间理应满足单一职责原则。")])])]),v._v(" "),t("li",[v._v("技术栈无关\n"),t("ul",[t("li",[v._v("选择合适的语言和框架开发适合的服务，服务之间通过 api 进行通信。")])])])]),v._v(" "),t("h3",{attrs:{id:"为什么需要微前端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要微前端"}},[v._v("#")]),v._v(" 为什么需要微前端")]),v._v(" "),t("ul",[t("li",[v._v("遗留的系统迁移\n"),t("ul",[t("li",[v._v("不用花费大量时间维护遗留系统，不用学习过时的旧技术。")]),v._v(" "),t("li",[v._v("抽出人力使用新的技术栈来开发新的业务。")])])]),v._v(" "),t("li",[v._v("聚合前端应用\n"),t("ul",[t("li",[v._v("使用不同技术栈开发不同模块，解耦模块之间的依赖。")]),v._v(" "),t("li",[v._v("前端将每个模块聚合成一个大项目，用户只会感觉是一个产品。")])])]),v._v(" "),t("li",[v._v("热闹驱动开发\n"),t("ul",[t("li",[v._v("因为目前看来，微前端是一种前端架构的趋势，整个社区都比较热闹。")]),v._v(" "),t("li",[v._v("有些时候，我们在选择技术栈时，是因为这个技术栈比较流行，而不是考虑是否实用。")]),v._v(" "),t("li",[v._v("在微前端架构下，可以在一些小模块中运用新的技术栈，对其他模块没有影响。")])])])]),v._v(" "),t("h2",{attrs:{id:"微前端的技术拆分方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微前端的技术拆分方式"}},[v._v("#")]),v._v(" 微前端的技术拆分方式")]),v._v(" "),t("p",[v._v("实现微前端架构，就是要将一个大项目，拆分成若干个独立的小项目，常用的拆分方式如下：")]),v._v(" "),t("ul",[t("li",[v._v("路由分发式")]),v._v(" "),t("li",[v._v("前端微服务化")]),v._v(" "),t("li",[v._v("微应用")]),v._v(" "),t("li",[v._v("微件化")]),v._v(" "),t("li",[v._v("前端容器化")]),v._v(" "),t("li",[v._v("应用组件化")])]),v._v(" "),t("h3",{attrs:{id:"路由分发式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路由分发式"}},[v._v("#")]),v._v(" 路由分发式")]),v._v(" "),t("p",[t("strong",[v._v("路由分发式")]),v._v("是通过 http 服务器的反向代理功能，将请求路由到对应的而应用上。")]),v._v(" "),t("p",[v._v("这种方式看上去更像是多个前端应用的聚合，即我们只是将不同的前端应用拼凑在一起，使他们看起来像一个完整的整体。但他们并非是一个整体，每当用户从 A 应用转换到 B 应用的时候，往往需要刷新一个页面、重新加载资源文件。")]),v._v(" "),t("p",[v._v("注意事项：")]),v._v(" "),t("ul",[t("li",[v._v("需要考虑应用之间的数据传递方式。")]),v._v(" "),t("li",[v._v("缺少了对应用状态的管理，需要用户重新登录，用户体验不好。")]),v._v(" "),t("li",[v._v("一个页面只有唯一的一个应用。")])]),v._v(" "),t("h3",{attrs:{id:"前端微服务化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端微服务化"}},[v._v("#")]),v._v(" 前端微服务化")]),v._v(" "),t("p",[t("strong",[v._v("前端微服务化")]),v._v("是指在不同的架构之上设计通信和加载机制，用以在一个页面内加载对应的应用。")]),v._v(" "),t("p",[v._v("当我们单击指向某个应用的路由时，会加载，运行对应的应用。而原有的一个或多个应用，仍然可以在页面上保持运行的状态。")]),v._v(" "),t("p",[v._v("因为现有的前端框架都离不开基本的 html 元素 dom，所以实施起来只需要做到以下两点：")]),v._v(" "),t("ul",[t("li",[v._v("第一步，在页面合适的地方引入或者创建 dom。")]),v._v(" "),t("li",[v._v("第二步，用户操作时，加载对应的应用，并支持卸载应用。")])]),v._v(" "),t("p",[v._v("注意事项：")]),v._v(" "),t("ul",[t("li",[v._v("一个页面可以存在多个应用，应保证第三方依赖不冲突。")]),v._v(" "),t("li",[v._v("卸载应用时，需要针对不同技术栈做好对应的清理工作，移除 dom 元素，事件监听等。")])]),v._v(" "),t("h3",{attrs:{id:"微应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微应用"}},[v._v("#")]),v._v(" 微应用")]),v._v(" "),t("p",[t("strong",[v._v("微应用")]),v._v("通过软件工程的方式，在部署构建环境中，把多个独立的应用组合成一个单体应用。在开发时应用都是以单一、微小应用的形式存在的，而在运行时，则通过构建系统合并这些应用，并组成一个新的应用，微应用也可以称为组合式集成。")]),v._v(" "),t("p",[v._v("例如：将一个项目，拆分成 3 块组件，每一块组件都放在不同的项目中，执行构建时，将 3 个组件的代码，拷贝到一个统一的环境中执行构建。")]),v._v(" "),t("p",[v._v("注意事项：")]),v._v(" "),t("ul",[t("li",[v._v("这种方式，是通过是物理拆分代码方式，上手比较容易。")]),v._v(" "),t("li",[v._v("只能使用唯一的一种前端框架。")])]),v._v(" "),t("h3",{attrs:{id:"微件化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微件化"}},[v._v("#")]),v._v(" 微件化")]),v._v(" "),t("p",[t("strong",[v._v("微件化")]),v._v("是指开发一个新的构建系统，将部分业务功能构建成一个独立的 chunk 代码，使用时只需要远程加载即可。")]),v._v(" "),t("p",[v._v("微件（widget），是一段可以直接嵌入应用上的运行代码，它由开发人员预先编译好，在加载时不需要再做任何修改或编译。而微前端下的微件化指的是，每个业务团队编写自己的业务代码，并将编译好的代码部署到指定的服务器上。在运行时，我们只需要加载相应的业务模块即可。在更新代码的时候，我们只需要更新对应的模块即可。")]),v._v(" "),t("p",[v._v("为了支持微件化，我们需要做到以下几点：")]),v._v(" "),t("ul",[t("li",[v._v("持有一个完整的框架运行时以及编译环境。保证微件能正常使用，即可调用框架 api 等。")]),v._v(" "),t("li",[v._v("性能受影响。应用由提前编译变成运行时编译，会造成一些性能方面的影响，具体视组件的大小而定。")]),v._v(" "),t("li",[v._v("提前规划依赖。如果一个新的微件想使用新的依赖，需要从上游编译引入。")])]),v._v(" "),t("p",[v._v("此外，我们还需要一个支持上述功能的构建系统，它用于构建一个独立的微件模块。")]),v._v(" "),t("ul",[t("li",[v._v("分包构建出来的独立代码，如 webpack 构建出来的 chunk 文件。")]),v._v(" "),t("li",[v._v("使用 dsl 的方式编写出来的组件。")])]),v._v(" "),t("p",[v._v("为了实现这种方式，我们需要对前端应用的构建系统进行修改，如 webpack，使它可以支持构建出单个的代码段。这种方式的实施成本比微应用化成本高。")]),v._v(" "),t("h3",{attrs:{id:"前端容器化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端容器化"}},[v._v("#")]),v._v(" 前端容器化")]),v._v(" "),t("p",[t("strong",[v._v("前端容器化")]),v._v("是指将 iframe 作为容器来容纳其他前端应用。iframe 能有效地将另一个网页应用嵌入当前页面中，两个页面之间的 css 和 js 是相互隔离的，相当于创建了一个全新的独立宿主环境，类似于沙箱隔离，它意味着前端应用之间可以相互独立运行。")]),v._v(" "),t("p",[v._v("使用 iframe 的前提条件：")]),v._v(" "),t("ul",[t("li",[v._v("网站不需要 seo 支持。")]),v._v(" "),t("li",[v._v("设计响应的应用管理机制。")])]),v._v(" "),t("p",[v._v("可以作为其他方案不好实现的替代方案。")]),v._v(" "),t("h3",{attrs:{id:"应用组件化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用组件化"}},[v._v("#")]),v._v(" 应用组件化")]),v._v(" "),t("p",[t("strong",[v._v("应用组件化")]),v._v("是指借助于 web components 技术，来构建跨框架的前端应用。web components 是一套不同的技术，允许开发者创建可重用的定制元素，并且在 web 应用中使用它们。")]),v._v(" "),t("p",[v._v("真正在项目上使用 web components 技术，离现在的我们还有些距离，可是结合 web compoennts 来构建前端应用，是一种面向未来演进的架构。例如：angular 已经可以将当前应用构建成一个 web components 组件，并在其他支持 web components 组件的框架中使用，如 react。我们还可以使用 web components 构建出组件，在其他框架中引入。")]),v._v(" "),t("p",[v._v("为此，我们只需要在页面中通过 web components 引入业务模块即可，使用方式类似于微件化的方案。")]),v._v(" "),t("p",[v._v("注意事项：")]),v._v(" "),t("ul",[t("li",[v._v("web components 目前还比较新，浏览器兼容性不佳。")])]),v._v(" "),t("h2",{attrs:{id:"微前端怎么拆分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微前端怎么拆分"}},[v._v("#")]),v._v(" 微前端怎么拆分")]),v._v(" "),t("p",[v._v("与微服务类似，要划分前端边界并不是一件容易的事。就当前而言，有以下几种方案：")]),v._v(" "),t("ul",[t("li",[v._v("按照业务划分")]),v._v(" "),t("li",[v._v("按照权限划分")]),v._v(" "),t("li",[v._v("按照变更的频率划分")]),v._v(" "),t("li",[v._v("按照组织结构划分")]),v._v(" "),t("li",[v._v("跟随后端微服务划分")])]),v._v(" "),t("h3",{attrs:{id:"按照业务划分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按照业务划分"}},[v._v("#")]),v._v(" 按照业务划分")]),v._v(" "),t("p",[v._v("在大型前端应用里，往往包含了多个业务，这些业务在某种程度上存在关联，但并非强关联，我们可以通过这些业务来进行拆分。")]),v._v(" "),t("p",[v._v("例如：一个电商网站包含电子商务系统、物流系统、库存系统等，我们就可以拆分出 3 个模块。")]),v._v(" "),t("h3",{attrs:{id:"按照权限划分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按照权限划分"}},[v._v("#")]),v._v(" 按照权限划分")]),v._v(" "),t("p",[v._v("对于一个同时存在多种角色以及多种不同权限的网站来说，最适合不过了。尤其是这些权限在功能上是分开的，没有必要集中在一个前端应用中。")]),v._v(" "),t("p",[v._v("例如：一个教学网站，老师端和学生端所拥有的权限是不一样的，他们所看到的页面也不一样，我们可以根据权限，拆分出 2 个模块。")]),v._v(" "),t("h3",{attrs:{id:"按照变更的频率划分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按照变更的频率划分"}},[v._v("#")]),v._v(" 按照变更的频率划分")]),v._v(" "),t("p",[v._v("在一个前端应用中，并非所有模块和业务代码都在不断地修改、添加新的功能。不同的业务模块拥有不同的变更频率。有些功能可能在上线之后，因为用户少而几乎不修改。而有些功能是用户最常用的，所以在不断迭代和优化中。")]),v._v(" "),t("p",[v._v("因此，可以按照变更频率来拆分前端应用，这样可以保持稳定的模块一直稳定下去。")]),v._v(" "),t("h3",{attrs:{id:"按照组织结构划分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#按照组织结构划分"}},[v._v("#")]),v._v(" 按照组织结构划分")]),v._v(" "),t("p",[v._v("对于后端来说，按照组织结构拆分服务，几乎是一个默认的做法。团队之间使用 api 文档和契约，就可以轻松的进行协作，对于前端应用来说，同样可以采用这种方式来进行。")]),v._v(" "),t("p",[v._v("例如：根据公司组织结构，电子商务部门，物流部门，库存部门，可以分别进行开发对应模块。")]),v._v(" "),t("h3",{attrs:{id:"跟随后端微服务划分"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#跟随后端微服务划分"}},[v._v("#")]),v._v(" 跟随后端微服务划分")]),v._v(" "),t("p",[v._v("对于微服务的实施，后端在很久之前早就开始进行架构了，即后端拥有现成的拆分好的模块，前端也可以追随后端的拆分方式来进行拆分。")]),v._v(" "),t("p",[v._v("然而，后端采用的拆分方式，并不都适合于前端应用，可能多数时候并不适合，所以这种方式多数情况只能作为参考。")]),v._v(" "),t("h2",{attrs:{id:"微前端架构模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微前端架构模式"}},[v._v("#")]),v._v(" 微前端架构模式")]),v._v(" "),t("p",[v._v("从微前端应用间的关系来看，可以分为两种：")]),v._v(" "),t("ul",[t("li",[v._v("基座模式\n"),t("ul",[t("li",[v._v("通过一个主应用来管理其他应用。设计难度小，方便实践，但是通用度低。")])])]),v._v(" "),t("li",[v._v("自组织模式\n"),t("ul",[t("li",[v._v("应用之间平等，不存在相互管理的模式。设计难度大，不方便实施，但通用度高。")])])])]),v._v(" "),t("p",[v._v("就当前来看，基座模式实施起来比较方便，方案也很多。")]),v._v(" "),t("p",[v._v("不管哪一种方式，都需要体用一个查找应用的机制，在微前端中称为服务的注册表模式。它主要做以下一些事情：")]),v._v(" "),t("ul",[t("li",[v._v("应用发现。让主应用可以寻找到其他应用。")]),v._v(" "),t("li",[v._v("应用注册。即提供新的微前端应用，向应用注册表注册的功能。")]),v._v(" "),t("li",[v._v("第三方应用注册。即让第三方应用接入系统中。")]),v._v(" "),t("li",[v._v("访问权限等相关配置。")])]),v._v(" "),t("h3",{attrs:{id:"微前端设计理念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#微前端设计理念"}},[v._v("#")]),v._v(" 微前端设计理念")]),v._v(" "),t("p",[v._v("在实践微前端时，应该考虑以下几点：")]),v._v(" "),t("ul",[t("li",[v._v("中心化：应用注册表。")]),v._v(" "),t("li",[v._v("标识化应用。")]),v._v(" "),t("li",[v._v("应用生命周期管理。")]),v._v(" "),t("li",[v._v("高内聚，低耦合。")])]),v._v(" "),t("h4",{attrs:{id:"中心化：应用注册表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中心化：应用注册表"}},[v._v("#")]),v._v(" 中心化：应用注册表")]),v._v(" "),t("p",[v._v("对于一个服务注册中心：服务提供方要注册通告服务地址，服务的调用方要能发现目标服务。")]),v._v(" "),t("p",[v._v("以路由形式的注册表为例，当我们添加了一个新的应用时，相当于在网页上添加了一个菜单链接，用户就能知道哪个页面是可以使用的，也就能访问到这个新的应用。从代码上来说，就是我们需要有一个地方来管理应用，目前存在哪些应用，哪个应用使用哪个路由。")]),v._v(" "),t("h4",{attrs:{id:"标识化应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#标识化应用"}},[v._v("#")]),v._v(" 标识化应用")]),v._v(" "),t("p",[v._v("标识化应用是指，建立某种规则来区分不同的应用，类似于唯一标识符，即 id。我们通过这个 id 来表示不同的应用，以便在安装和卸载的时候能寻找到指定的应用。")]),v._v(" "),t("p",[v._v("如果存在大量的不需要审核的应用，那么可以由系统后台来生成唯一的标识符。")]),v._v(" "),t("h4",{attrs:{id:"应用生命周期管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#应用生命周期管理"}},[v._v("#")]),v._v(" 应用生命周期管理")]),v._v(" "),t("p",[v._v("当用户单机某个链接时，系统需要加载对应的应用，在这个过程中，还需要加载动画来响应用户的行为，并创建应用所需要的 dom 节点，将应用挂载到响应的 dom 节点上，然后运行应用。当用户不需要这个应用的时候，我们可以选择卸载应用，或者继续保留应用。这几个步骤所做的事情，就体现了应用的生命周期。")]),v._v(" "),t("p",[v._v("生命周期包括如下 3 个部分：")]),v._v(" "),t("ul",[t("li",[v._v("加载应用")]),v._v(" "),t("li",[v._v("运行应用")]),v._v(" "),t("li",[v._v("卸载应用")])]),v._v(" "),t("p",[v._v("具体的生命周期案例：")]),v._v(" "),t("ul",[t("li",[v._v("load，决定绑定哪个应用，并绑定生命周期。")]),v._v(" "),t("li",[v._v("bootstrap，获取静态资源。")]),v._v(" "),t("li",[v._v("mount，安装应用，如创建 dom 节点。")]),v._v(" "),t("li",[v._v("unload，删除应用的生命周期。")]),v._v(" "),t("li",[v._v("unmount，卸载应用，如删除 dom 节点，取消事件绑定。")])]),v._v(" "),t("h4",{attrs:{id:"高内聚，低耦合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高内聚，低耦合"}},[v._v("#")]),v._v(" 高内聚，低耦合")]),v._v(" "),t("p",[v._v("最后，在设计各个子应用以及主应用的过程中，需要遵循高内聚，低耦合的原则。")]),v._v(" "),t("p",[v._v("高内聚，即模块内的关系，一个软件模块只由相关性很强的代码组成。")]),v._v(" "),t("p",[v._v("低耦合，即模块间的关系，对于微服务来讲，修改一个模块不要影响到另一个模块。")])])}),[],!1,null,null,null);_.default=s.exports}}]);