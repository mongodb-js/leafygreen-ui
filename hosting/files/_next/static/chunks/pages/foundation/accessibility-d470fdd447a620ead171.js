_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[148],{"+I+c":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return a}))},"/FXl":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("mXGw"),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"===typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,h=m["".concat(r,".").concat(p)]||m[p]||d[p]||o;return n?i.a.createElement(h,s(s({ref:t},l),{},{components:n})):i.a.createElement(h,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"===typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},"/bO+":function(e,t,n){"use strict";n("mXGw");var a=n("OVsn"),i=n("6h0R");function o(e){var t=e.imageURL,n=e.className;return Object(i.jsx)("div",{className:Object(a.a)("margin:40px 0px;background-image:url('",t,"');background-position:center center;background-repeat:no-repeat;background-size:contain;",n,";","","")})}o.displayName="GuidelineImage",t.a=o},Fcif:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},M7YN:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n("Fcif"),i=n("dV/x"),o=(n("mXGw"),n("/FXl")),r=n("OVsn"),s=n("/zgD"),c=n("/bO+"),l=n("eHoq");var u="".concat(l.a,"/images/new-guidelines/A11Y"),d={};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h1",null,"Accessibility"),Object(o.a)("p",null,"Accessible design allows users with disabilities to easily interact with products, while also providing a better experience for everyone. The following guidelines emphasize component and text contrast requirements consistent with the accessibility requirements outlined in Section 508 of the WCAG 2.1."),Object(o.a)("p",null,"For a comprehensive list of accessibility requirements, including details on illustration, motion, sound, and engineering best practices, visit ",Object(o.a)(s.j,{href:"https://w3.org",arrowAppearance:"persist",mdxType:"Link"},"w3.org"),"."),Object(o.a)("h1",null,"Contrast requirements"),Object(o.a)("p",null,"Contrast requirements help low vision and/or colorblind users navigate our products. You can download the ",Object(o.a)(s.j,{href:"https://www.getstark.co/",arrowAppearance:"persist",mdxType:"Link"},"Stark plugin")," for a quick, easy way to check the contrast between different elements in your Figma file."),Object(o.a)(c.a,{imageURL:"".concat(u,"/A11y-guidelines-asset-1@3x.gif"),className:Object(r.a)({name:"16g5uct",styles:"width:100%;height:480px"}),mdxType:"GuidelineImage"}),Object(o.a)("h2",null,"Contrast for text elements"),Object(o.a)("p",null,"Text elements should meet a minimum of 4.5:1 contrast between the text and background color. For text 18px or greater, the required contrast drops to 3:1. Disabled text is exempt from contrast requirements."),Object(o.a)("p",null,"As shown below, MongoDB\u2019s lightest gray that still meets contrast requirements for text on a white background is Gray: Dark 1."),Object(o.a)(c.a,{imageURL:"".concat(u,"/A11y-guidelines-asset-2@3x.png"),className:Object(r.a)({name:"13h2mbx",styles:"width:100%;height:300px"}),mdxType:"GuidelineImage"}),Object(o.a)("p",null,"The 4.5:1 contrast standard also applies to text within components."),Object(o.a)(c.a,{imageURL:"".concat(u,"/A11y-guidelines-asset-3@3x..png"),className:Object(r.a)({name:"13h2mbx",styles:"width:100%;height:300px"}),mdxType:"GuidelineImage"}),Object(o.a)("h2",null,"Contrast for components"),Object(o.a)("p",null,"Any visual information that is necessary for a user to identify and operate a control must meet 3:1 contrast. This contrast requirement also applies to active states, focus states, and hover states."),Object(o.a)("p",null,"Inactive and disabled portions of a component are exempt from these contrast requirements. Similarly, if a component is not actually a control (for example, a tooltip) or if the fill or border is stylistic, these contrast requirements do not apply."),Object(o.a)("h2",null,"Required Contrast"),Object(o.a)("p",null,"If the green fill of this button indicating hit area is necessary for a user to identify and operate the control, then the green must meet 3:1 contrast with the adjacent white background."),Object(o.a)(c.a,{imageURL:"".concat(u,"/A11y-guidelines-asset-4@3x.png"),className:Object(r.a)({name:"13h2mbx",styles:"width:100%;height:300px"}),mdxType:"GuidelineImage"}),Object(o.a)("p",null,"Because contrast requirements apply to the edge of a component where it meets adjacent colors, a component with a border that meets 3:1 is accessible. The fill color and the contrast between the border and fill is not relevant."),Object(o.a)(c.a,{imageURL:"".concat(u,"/A11y-guidelines-asset-4@3x.png"),className:Object(r.a)({name:"13h2mbx",styles:"width:100%;height:300px"}),mdxType:"GuidelineImage"}),Object(o.a)("h2",null,"Exceptions to contrast requirements"),Object(o.a)("p",null,"Components that are not controls with distinct functions do not need to meet 3:1 contrast requirements. These include tooltips, banners, notifications, modals, and toasts. All text and actionable elements within components must still meet contrast requirements."),Object(o.a)("p",null,"For example, in the toast below, the contrast between the border and the background is only 1.34:1. Since the light green visual container itself is not essential information, the low contrast still meets accessibility requirements. The close icon is an actionable element and must meet the 3:1 contrast requirement."),Object(o.a)(c.a,{imageURL:"".concat(u,"/A11y-guidelines-asset-5@3x.png"),className:Object(r.a)({name:"1rwtc46",styles:"width:100%;height:344px"}),mdxType:"GuidelineImage"}),Object(o.a)("p",null,"Similarly, in the example below, the clickable area of the button can be determined from its context and copy. The button does not need to meet a fill area that meets contrast with the surrounding white. The close icon and text must still meet contrast requirements."),Object(o.a)(c.a,{imageURL:"".concat(u,"/A11y-guidelines-asset-6@3x.png"),className:Object(r.a)({name:"oy2dvw",styles:"width:100%;height:383px"}),mdxType:"GuidelineImage"}),Object(o.a)("h2",null,"Component states"),Object(o.a)("p",null,"All actionable components should have a focus state. The active state, hover state, and focus state of a component need to meet 3:1 contrast requirements with adjacent colors."),Object(o.a)(c.a,{imageURL:"".concat(u,"/A11y-guidelines-asset-7@3x.png"),className:Object(r.a)({name:"1qsq4k9",styles:"width:100%;height:197px"}),mdxType:"GuidelineImage"}),Object(o.a)("p",null,"The contrast between different states does not have a requirement. For example, the color difference between how a component appears in its active state compared to its hover state is not important to meet requirements."),Object(o.a)(c.a,{imageURL:"".concat(u,"/A11y-guidelines-asset-8@3x.png"),className:Object(r.a)({name:"19eul4",styles:"width:100%;height:220px"}),mdxType:"GuidelineImage"}),Object(o.a)("h2",null,"Icon contrast"),Object(o.a)("p",null,"Product icons should also meet 3:1 contrast requirements, however decorative marketing icons do not need to meet requirements."),Object(o.a)(c.a,{imageURL:"".concat(u,"/A11y-guidelines-asset-9@3x.png"),className:Object(r.a)({name:"1u41bln",styles:"width:100%;height:192px"}),mdxType:"GuidelineImage"}),Object(o.a)("h1",null,"Color"),Object(o.a)("h2",null,"Avoid relying on color"),Object(o.a)("p",null,"Color should not be used as the only means of communicating information. Consider adding a pattern, icon, or text to increase accessibility."),Object(o.a)("p",null,"For example, consider an input field: if this element only uses the color red to show that it\u2019s invalid, a user who is unable to perceive red may not be able to detect that change. Adding a warning icon helps signal that the input is invalid."),Object(o.a)(c.a,{imageURL:"".concat(u,"/A11y-guidelines-asset-10@3x.png"),className:Object(r.a)({name:"181xk3q",styles:"width:100%;height:396px"}),mdxType:"GuidelineImage"}),Object(o.a)("h1",null,"Keyboard navigation"),Object(o.a)("p",null,"Many users including those with vision impairments rely on keyboard navigation to use our products. For this reason, all components should be accessible via keyboard including links, buttons, and form controls."),Object(o.a)(c.a,{imageURL:"".concat(u,"/A11y-guidelines-asset-11@3x.png"),className:Object(r.a)({name:"1fiasbg",styles:"width:100%;height:258px"}),mdxType:"GuidelineImage"}),Object(o.a)("p",null,"Tab order should follow predictable, sequential hierarchy. Important screens should be annotated with tab order, direction, and any additional notes needed for developers and engineers to reference."))}m.isMDXComponent=!0},OVsn:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));n("KGyE"),n("nvok"),n("D+Av");var a=n("pl2K"),i=Object(a.a)({key:"css"}),o=(i.flush,i.hydrate,i.cx),r=(i.merge,i.getRegisteredStyles,i.injectGlobal,i.keyframes,i.css);i.sheet,i.cache},X7DO:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/foundation/accessibility",function(){return n("M7YN")}])},"dV/x":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("+I+c");function i(e,t){if(null==e)return{};var n,i,o=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},eHoq:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var a="/",i="https://d2va9gm4j17fy9.cloudfront.net"}},[["X7DO",0,1,4,2,3]]]);