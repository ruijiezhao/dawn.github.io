(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{421:function(t,s,a){"use strict";a.r(s);var e=a(27),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react-使用总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-使用总结"}},[t._v("#")]),t._v(" React 使用总结")]),t._v(" "),a("p",[t._v("聊聊我对 react 的理解。")]),t._v(" "),a("ul",[a("li",[t._v("react 历史发展。")]),t._v(" "),a("li",[t._v("react 性能优化。")])]),t._v(" "),a("h2",{attrs:{id:"react-历史发展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-历史发展"}},[t._v("#")]),t._v(" React 历史发展")]),t._v(" "),a("h3",{attrs:{id:"jquery-时代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-时代"}},[t._v("#")]),t._v(" Jquery 时代")]),t._v(" "),a("p",[t._v("在 jquery 主流的时代，web 页面开发流程是通过 ajax 获取到后端数据，然后使用 jquery 生成 jquery 更新到页面中，但是随着业务发展，我们的项目可能会越来越复杂，我们每次请求到数据，或者数据有更改的时候，我们又需要重新组装一次 dom 结构，然后更新页面，这样我们手动同步 dom 和数据的成本就越来越高，而且频繁的操作 dom，也使我我们页面的性能慢慢的降低。")]),t._v(" "),a("p",[t._v("痛点："),a("strong",[t._v("手动同步 dom 和数据")]),t._v("，"),a("strong",[t._v("频繁地操作 dom")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"双向数据绑定-mvvm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#双向数据绑定-mvvm"}},[t._v("#")]),t._v(" 双向数据绑定 MVVM")]),t._v(" "),a("p",[t._v("要"),a("strong",[t._v("解决手动同步 dom 和数据")]),t._v("的问题，这个时候 mvvm 出现了。mvvm 的双向数据绑定可以让我们在数据修改的同时去更新 dom，dom 的更新也可以直接同步到数据的更改，这个特定可以大大降低我们手动去维护 dom 更新的成本。虽然 react 属于单项数据流，但是我们可以手动实现双向数据绑定。")]),t._v(" "),a("h3",{attrs:{id:"虚拟-dom"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟-dom"}},[t._v("#")]),t._v(" 虚拟 DOM")]),t._v(" "),a("p",[t._v("有了 mvvm 还不够，如果每次有数据做了更改，我们都全量更新 dom 结构的话，也没办法解决"),a("strong",[t._v("频繁操作 dom")]),t._v("的问题。为了解决这个问题，react 内部实现了一套虚拟 dom 结构，也就是用 js 模拟的一套 dom 结构，他的作用是将真实 dom 在 js 中做一套缓存，每次有数据更改的时候，react 内部先使用算法，也就是鼎鼎有名的 diff 算法对 dom 结构进行对比，找到那些我们需要新增、更新、删除的 dom 节点，然后一次性对真实 dom 进行更新，这样就能大大降低操作 dom 的次数。")]),t._v(" "),a("p",[t._v("那么 diff 算法是怎么运作的呢？")]),t._v(" "),a("ul",[a("li",[t._v("递归所有虚拟 dom 节点，逐层级，逐顺序进行比较。")]),t._v(" "),a("li",[t._v("类型不同的节点，会直接删除原来节点，并用新的节点来代替。")]),t._v(" "),a("li",[t._v("节点类型相同的节点，会对比这个节点的所有属性。\n"),a("ul",[a("li",[t._v("如果节点的所有属性相同，那么判定这个节点不需要更新。")]),t._v(" "),a("li",[t._v("如果节点属性不相同，那么只会更新这个节点的属性。")])])]),t._v(" "),a("li",[t._v("对于同一层级的元素，如果只是改变了顺序，diff 算法会根据 key 去优化。\n"),a("ul",[a("li",[t._v("有 key，算法只需要调整一下虚拟 dom 的顺序即可，不用删除，重建。")]),t._v(" "),a("li",[t._v("没有 key，会严格按顺序进行比较，发现不同就销毁，重建。")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("虚拟 dom 的其他优势")]),t._v(" "),a("ul",[a("li",[t._v("将 虚拟 dom 作为一个兼容层，让我们还能对接非 web 端的系统，实现跨端开发。")]),t._v(" "),a("li",[t._v("同样的，通过 虚拟 dom 我们可以渲染到其他的平台，比如实现 ssr、同构渲染等等。")]),t._v(" "),a("li",[t._v("实现组件的高度抽象化")])])]),t._v(" "),a("h3",{attrs:{id:"状态管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#状态管理"}},[t._v("#")]),t._v(" 状态管理")]),t._v(" "),a("p",[t._v("react 设计之初是主要负责 ui 层的渲染，每个组件有自己的状态，当状态需要变化的时候，需要使用 setState 更新我们的组件。但如果我们想渲染一个组件的兄弟组件，我们就需要将组件的状态提升到父组件当中，让父组件来管理这两个组件的渲染，当我们组件的层次越来越深的时候，状态需要一直往下传，无疑加大了我们代码的复杂度，"),a("strong",[t._v("我们需要一个状态管理中心")]),t._v("，来帮我们管理 state。")]),t._v(" "),a("h4",{attrs:{id:"redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" Redux")]),t._v(" "),a("p",[t._v("这个时候，redux 出现了，我们可以将所有的 state 交给 redux 去管理，当我们的某一个 state 有变化的时候，依赖到这个 state 的组件就会进行一次重渲染，这样就解决了我们的我们需要一直把 state 往下传的问题。redux 有 action、reducer 的概念。")]),t._v(" "),a("ul",[a("li",[t._v("action 为唯一修改 state 的来源。")]),t._v(" "),a("li",[t._v("reducer 为唯一确定 state 如何变化的入口。")])]),t._v(" "),a("p",[t._v("通过以上规范，使得 redux 的数据流变得非常清晰，但同时也暴露出了 redux 代码的复杂，"),a("strong",[t._v("本来那么简单的功能，却需要完成那么多的代码")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"mobx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobx"}},[t._v("#")]),t._v(" Mobx")]),t._v(" "),a("p",[t._v("后来，社区就出现了另外一套解决方案，也就是 mobx，它推崇代码简约易懂，只需要定义一个可观测的对象 store，哪个组件需要状态就进行状态注入，store 中的数据改变，会通知注入过状态的组件进行更新。")]),t._v(" "),a("p",[t._v("而且 mobx 内部实现了 shouldComponentUpdate 用来解决常用的性能问题，这使得我们使用 mobx 开发项目的时候可以简单快速的完成很多功能。但随着项目的不断变大，mobx 也不断暴露出了它的缺点，就是"),a("strong",[t._v("数据流太随意")]),t._v("，不好追溯数据的流向，这个缺点正好体现出了 redux 的优点所在，所以"),a("strong",[t._v("针对于小项目来说，社区推荐使用 mobx，对大项目推荐使用 redux")]),t._v("。")]),t._v(" "),a("h4",{attrs:{id:"context-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context-api"}},[t._v("#")]),t._v(" Context API")]),t._v(" "),a("p",[t._v("随着 react 生态不断发展，状态管理已成为 react 生态圈必不可少的技术，react 官方也在 v16.3.0 版本上推出了自带的状态管理 API。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建context")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ThemeContext "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createContext")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'light'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThemeProvider")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'light'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 给子组件提供 context")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ThemeContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("props"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ThemeContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Provider"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ThemedButton")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("React"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Component")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 子组件使用 context")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ThemeContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Consumer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("theme")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Button theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("theme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ThemeContext"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Consumer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])]),a("h2",{attrs:{id:"react-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-性能优化"}},[t._v("#")]),t._v(" React 性能优化")]),t._v(" "),a("p",[t._v("我们都知道，react 项目渲染时会分为 2 个阶段。")]),t._v(" "),a("ul",[a("li",[t._v("生成虚拟 dom。")]),t._v(" "),a("li",[t._v("虚拟 dom 渲染成真实 dom。")])]),t._v(" "),a("p",[t._v("其中，虚拟 dom 渲染成真实 dom 的过程，这部分是 React 内置的功能，我们不需要再进行优化，所以我们探讨一下生成虚拟 dom 阶段的优化。")]),t._v(" "),a("ul",[a("li",[t._v("避免直接操作 dom，将与 dom 操作的事都丢给 react 去做。")]),t._v(" "),a("li",[t._v("由于 dom diff 算法的问题，对于同一层级的组件，建议加上 key 属性，方便 react 进行 dom diff 时能够保持复用，而不至于直接创建一个新的元素。")]),t._v(" "),a("li",[t._v("抽离无状态组件，无状态组件渲染时不需要 new 实例化，可以提高 js 效率；由于无状态组件基于函数式编程思想，同样的属性，必定会渲染出相同的内容，可以起到缓存作用。")]),t._v(" "),a("li",[t._v("使用 immutable 库，避免修改引用类型造成副作用，高效实现对象深拷贝，比传统的 deepClone 效率高。")]),t._v(" "),a("li",[t._v("抽离 render 函数中的变量和方法，避免每一次 render 方法执行都要重新创建一次。例如我们常常使用 bind 函数区绑定 this，应提前到 constructor 中。")]),t._v(" "),a("li",[t._v("使用 PureComponent 代替 Component，相当于是用 shouldComponentUpdate 做了一次浅比较，可以优化不必要的渲染，但对于引用类型的属性，应做好 immutable 处理，以免造成组件不会渲染等问题。")]),t._v(" "),a("li",[t._v("使用 recompose 库通过函数式写法业务逻辑和组件分离，作者已停止维护，建议用 hooks 代替。")]),t._v(" "),a("li",[t._v("使用 react hooks 编写高度可复用的函数式组件，编写更少的代码，更精炼的生命周期实现更高的性能。")])]),t._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[t._v("#")]),t._v(" 相关链接")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/blog/library-React-hooks.html"}},[t._v("React hooks")])],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);