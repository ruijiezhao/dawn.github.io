(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{425:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"css-ifc-总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-ifc-总结"}},[t._v("#")]),t._v(" CSS IFC 总结")]),t._v(" "),a("p",[t._v("最近在公司遇到一个问题，一个 div 的高度总是比子元素的高度要高几 px，调试了很久，发现对 IFC 的概念还不够深入，根据这篇文章再总结一下。")]),t._v(" "),a("ul",[a("li",[t._v("CSS 内联格式化上下文")]),t._v(" "),a("li",[t._v("CSS 内联元素常见问题")])]),t._v(" "),a("h2",{attrs:{id:"css-内联格式化上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-内联格式化上下文"}},[t._v("#")]),t._v(" CSS 内联格式化上下文")]),t._v(" "),a("p",[t._v("IFC(Inline Formatting Context) 直译为"),a("strong",[t._v("内联格式化上下文")]),t._v("。我们可以简单理解为每个盒子都有一个 FC 特性，不同的 FC 值代表一组盒子中不同的排列方式。有的 FC 表示盒子从上到下垂直排列，有的 FC 表示盒子从左到右水平排列等等。而 IFC 则是表示盒子从左到右的水平排列方式。")]),t._v(" "),a("p",[t._v("CSS 内联盒子模型主要是用来渲染内容的，它决定了页面中的文本，图片等内联元素如何显示。")]),t._v(" "),a("ul",[a("li",[t._v("内联盒子模型")]),t._v(" "),a("li",[t._v("IFC 内部元素排列规则")])]),t._v(" "),a("h3",{attrs:{id:"内联盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内联盒子模型"}},[t._v("#")]),t._v(" 内联盒子模型")]),t._v(" "),a("p",[a("img",{attrs:{src:"css-ifc-box.jpg",alt:"css-ifc-box.jpg"}})]),t._v(" "),a("p",[t._v("CSS 中的内联盒子模型可以分为以下几个部分：")]),t._v(" "),a("p",[t._v("1、内容区域(content area)。")]),t._v(" "),a("p",[a("strong",[t._v("内容区域")]),t._v("指一种围绕文字看不见的盒子，其大小仅受字符本身特性控制。我们可以把文本选中的背景色区域作为内容区域。")]),t._v(" "),a("p",[t._v("2、内联盒子(inline box)。")]),t._v(" "),a("p",[a("strong",[t._v("内联盒子")]),t._v("不会让内容成块显示，而是排成一行，该盒子又可以细分为内联盒子和匿名内联盒子两类:")]),t._v(" "),a("ul",[a("li",[t._v("内联盒子，用"),a("code",[t._v("<span>")]),t._v("、"),a("code",[t._v("<a>")]),t._v("和"),a("code",[t._v("<em>")]),t._v("等标签包裹的盒子。")]),t._v(" "),a("li",[t._v("匿名内联盒子，直接写的文字部分。")])]),t._v(" "),a("p",[t._v("3、行框盒子(line box)。")]),t._v(" "),a("p",[a("strong",[t._v("行框盒子")]),t._v("是由一个一个内联盒子组成的，每一行就是一个行框盒子。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这是一行普通的文字，这里有个 "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("em")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("em"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("em")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 标签。"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("code",[t._v("<p>")]),t._v(" 标签中的每一行就是一个行框盒子，每个行框盒子又是由一个一个内联盒子组成的。如果文字超长，会自动换行，新的一行，就会被创建成一个全新的行框盒子，每一行都是一个行框盒子。")]),t._v(" "),a("p",[t._v("4、包含盒子(containing box)。")]),t._v(" "),a("p",[a("strong",[t._v("包含盒子")]),t._v("是由一个一个行框盒子组成的，包裹着行框盒子。")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这是一行普通的文字，这里有个 "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("em")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("em"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("em")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" 标签。"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("code",[t._v("<p>")]),t._v("标签就是一个包含盒子，此盒子由一行一行的行框盒子组成。")]),t._v(" "),a("p",[t._v("5、幽灵空白节点(strut)。")]),t._v(" "),a("p",[a("strong",[t._v("幽灵空白节点")]),t._v("指的是：在 HTML 文档声明中，内联元素的所有解析和渲染表现就如同每个行框盒子的"),a("strong",[t._v("前面")]),t._v("有一个空白节点一样。")]),t._v(" "),a("h3",{attrs:{id:"ifc-内部元素排列规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ifc-内部元素排列规则"}},[t._v("#")]),t._v(" IFC 内部元素排列规则")]),t._v(" "),a("p",[t._v("我们先看一下行内元素的对齐线，也就是垂直方向上的对齐方式，可以通过 vertical-align 进行控制。")]),t._v(" "),a("p",[a("img",{attrs:{src:"css-ifc-baseline.jpg",alt:"css-ifc-baseline"}})]),t._v(" "),a("ul",[a("li",[t._v("水平垂直方向上的排列。\n"),a("ul",[a("li",[t._v("内联元素在水平线上一个接一个排列，默认通过基线排列。\n"),a("ul",[a("li",[t._v("如果行内元素能在一行装下，子元素的排列方式由 text-align 决定。")]),t._v(" "),a("li",[t._v("如果行内元素不能在一行装下，默认此行内框会被分割，根据 white-space 决定。")])])]),t._v(" "),a("li",[t._v("内部元素水平方向上的 margin、padding、border 有效，垂直方向上无效。")]),t._v(" "),a("li",[t._v("垂直方向上有多种对齐方式: 顶部、底部、基线，根据 vertical-align 属性决定。")])])]),t._v(" "),a("li",[t._v("line box 的计算规则。\n"),a("ul",[a("li",[t._v("line box 的宽度由包含其元素的宽度决定。")]),t._v(" "),a("li",[t._v("line box 的高度受当前行所有内联元素的高度影响，可能比内部最高的元素还要高（由基线对齐所导致）。")])])])]),t._v(" "),a("h2",{attrs:{id:"css-内联元素常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-内联元素常见问题"}},[t._v("#")]),t._v(" CSS 内联元素常见问题")]),t._v(" "),a("p",[t._v("这里分析两个比较常见的问题。")]),t._v(" "),a("h3",{attrs:{id:"普通内联元素导致的图片间隙问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#普通内联元素导致的图片间隙问题"}},[t._v("#")]),t._v(" 普通内联元素导致的图片间隙问题")]),t._v(" "),a("p",[t._v("第一个问题，也就是最常见的内联图片元素，导致的间隙问题，如图所示。")]),t._v(" "),a("p",[a("img",{attrs:{src:"css-ifc-img1.png",alt:"css-ifc-img1"}})]),t._v(" "),a("p",[t._v("图中的代码如下：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#e5edff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://image.zhangxinxu.com/image/study/s/s256/mm1.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("案例中有一个 div 和一张图片，可以看到图片底部到 div 底部出现了明显的间隙，这是为什么呢？")]),t._v(" "),a("p",[t._v("我们先把图片后面增加一个文本节点，再来看一下。")]),t._v(" "),a("p",[a("img",{attrs:{src:"css-ifc-img2.png",alt:"css-ifc-img1"}})]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#e5edff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://image.zhangxinxu.com/image/study/s/s256/mm1.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("x"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("我们可以看到，其实是由于文本节点高度把这个 div 撑大了。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("产生问题的原因")]),t._v(" "),a("p",[t._v("1、普通的内联元素（非 inline-block 元素）的高度是由 line-height 直接决定的。")]),t._v(" "),a("p",[t._v("2、默认的内联元素都是基线对齐，也就是字符 x 的下边缘。")]),t._v(" "),a("p",[t._v("3、图片是一个 inline-block 元素，他的基线就是 margin box，也就是图片的下边缘。")]),t._v(" "),a("p",[t._v("4、所以这里的图片就和 x 的下边缘对齐了。")]),t._v(" "),a("p",[t._v("5、文本节点也是有高度的，并根据高度会产生行距，即上下间隙，所以就撑大了 div。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("解决问题的方案")]),t._v(" "),a("p",[t._v("1、将图片变成 block 元素，就不存在这个问题了。")]),t._v(" "),a("p",[t._v("2、改变 vertical-align 对齐方式，如 top bottom middle 都可以。")]),t._v(" "),a("p",[t._v("3、将 line-height 设置为为足够小，例如 0，这样文本的高度就为 0 就不会撑大 div 了。")]),t._v(" "),a("p",[t._v("4、将 font-size 设置为为足够小，间接计算出的 line-height 就为 0 ，也就不会撑大 div 了。")])]),t._v(" "),a("h3",{attrs:{id:"inline-block-内联元素导致的对齐问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inline-block-内联元素导致的对齐问题"}},[t._v("#")]),t._v(" inline-block 内联元素导致的对齐问题")]),t._v(" "),a("p",[t._v("第二个问题，也就是常见的 inline-block 内联元素对齐问题，如图所示。")]),t._v(" "),a("p",[a("img",{attrs:{src:"css-ifc-img3.png",alt:"css-ifc-img1"}})]),t._v(" "),a("p",[t._v("图中的代码如下：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("#e5edff")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" orange")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    content\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token style-attr language-css"}},[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('="')]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("案例中的 div 中包含 2 个 inline-block 的盒子，一个盒子中包含内容，另一个却没有包含，呈现出来的样子就是一种错位的样子。")]),t._v(" "),a("p",[t._v("我们使用同样的方式，在父级 div 后面增加一个文本节点，并加上背景图。")]),t._v(" "),a("p",[a("img",{attrs:{src:"css-ifc-img4.png",alt:"css-ifc-img1"}})]),t._v(" "),a("p",[t._v("可以看到，现在第一个盒子的 content 文本，第二个盒子的底部，以及 x 的下边缘都在一条直线上。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("产生问题的原因")]),t._v(" "),a("p",[t._v("1、内联元素的排列方式，默认是按基线对齐。")]),t._v(" "),a("p",[t._v("2、没有内容的 inline-block 元素的基线是 margin box 的底部，也就是方块的底部。")]),t._v(" "),a("p",[t._v("3、有内容的 inline-block 元素的基线就是元素里面最后一行内联元素的基线。")]),t._v(" "),a("p",[t._v("4、所以这里的 content 就和第二个盒子的底部对齐了，div 就被撑大了。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("解决问题的方案")]),t._v(" "),a("p",[t._v("1、给第二个盒子加一个空白节点，如："),a("code",[t._v("&nbsp")]),t._v("。")]),t._v(" "),a("p",[t._v("2、改变两个盒子的 vertical-align 对齐方式，如 top bottom middle 都可以（如果只改一个，也会出现问题 1 中的问题）。")])]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 深入理解 vertical-align 和 line-height 的基友关系"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);