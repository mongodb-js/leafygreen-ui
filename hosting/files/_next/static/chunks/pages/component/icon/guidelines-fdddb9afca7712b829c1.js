_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[75],{"+I+c":function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,"a",(function(){return n}))},"/FXl":function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r("mXGw"),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"===typeof e?e(t):o(o({},t),e)),r},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,d=p["".concat(l,".").concat(b)]||p[b]||f[b]||i;return r?a.a.createElement(d,o(o({ref:t},s),{},{components:r})):a.a.createElement(d,o({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var i=r.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"===typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},"/bO+":function(e,t,r){"use strict";r("mXGw");var n=r("OVsn"),a=r("6h0R");function i(e){var t=e.imageURL,r=e.className;return Object(a.jsx)("div",{className:Object(n.a)("margin:40px 0px;background-image:url('",t,"');background-position:center center;background-repeat:no-repeat;background-size:contain;",r,";","","")})}i.displayName="GuidelineImage",t.a=i},"4Ki5":function(e,t,r){e.exports=function(e,t,r,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(t);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u,f,p={small:14,default:16,large:20,xlarge:24},b=["className","size","title","aria-label","aria-labelledby","fill","role"],d=function(e){var t,a=e.className,i=e.size,d=void 0===i?16:i,g=e.title,y=e["aria-label"],m=e["aria-labelledby"],h=e.fill,O=e.role,x=void 0===O?"img":O,j=c(e,b),v=r.css(u||(u=s(["\n    color: ",";\n  "])),h),w=r.css(f||(f=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,t,r){var n,a,i=r["aria-label"],o=r["aria-labelledby"],c=r.title;switch(e){case"img":return i||o||c?(l(n={},"aria-labelledby",o),l(n,"aria-label",i),l(n,"title",c),n):{"aria-label":(a=t,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(x,"Warning",(l(t={title:g},"aria-label",y),l(t,"aria-labelledby",m),t));return n.jsx("svg",o({className:r.cx(l({},v,null!=h),w,a),height:"number"==typeof d?d:p[d],width:"number"==typeof d?d:p[d],role:x},C,j,{viewBox:"0 0 16 16"}),n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.8639 2.51357C8.49039 1.82881 7.50961 1.82881 7.1361 2.51357L1.12218 13.5388C0.763263 14.1968 1.23814 15 1.98608 15H14.0139C14.7619 15 15.2367 14.1968 14.8778 13.5388L8.8639 2.51357ZM7 6C7 5.44772 7.44772 5 8 5C8.55228 5 9 5.44772 9 6V10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10V6ZM9 13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13C7 12.4477 7.44772 12 8 12C8.55228 12 9 12.4477 9 13Z",fill:"currentColor"}))};return d.displayName="Warning",d.isGlyph=!0,d.propTypes={fill:i.default.string,size:i.default.oneOfType([i.default.number,i.default.string]),className:i.default.string},d}(r("mXGw"),r("W0B4"),r("5MD+"),r("6h0R"))},"91KN":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("5iLb"),a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.literal,n=t.overlap,a=r?e:["&"].concat(e);function i(e){if("object"!==typeof e||null==e)return[];if(Array.isArray(e))return e.map(i);var t={},l={},o={};return Object.keys(e).forEach((function(c){var s=e[c];if(!Array.isArray(s)&&r&&(s=[s]),(r||Array.isArray(s))&&38!==c.charCodeAt(0)){var u=void 0;s.forEach((function(e,i){if((!n||u!==e)&&null!=e)if(u=e,0!==i||r)if(void 0===t[a[i]]){var l;t[a[i]]=((l={})[c]=e,l)}else t[a[i]][c]=e;else o[c]=e}))}else"object"===typeof s?l[c]=i(s):o[c]=s})),a.forEach((function(e){t[e]&&(o[e]=t[e])})),Object.assign(o,l),o}return function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.map(i)}}(Object.values(n.a).map((function(e){return"@media (min-width: ".concat(e,"px)")})),{literal:!0})},"Cj/M":function(e,t,r){e.exports=function(e,t,r,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(t);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u,f,p={small:14,default:16,large:20,xlarge:24},b=["className","size","title","aria-label","aria-labelledby","fill","role"],d=function(e){var t,a=e.className,i=e.size,d=void 0===i?16:i,g=e.title,y=e["aria-label"],m=e["aria-labelledby"],h=e.fill,O=e.role,x=void 0===O?"img":O,j=c(e,b),v=r.css(u||(u=s(["\n    color: ",";\n  "])),h),w=r.css(f||(f=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,t,r){var n,a,i=r["aria-label"],o=r["aria-labelledby"],c=r.title;switch(e){case"img":return i||o||c?(l(n={},"aria-labelledby",o),l(n,"aria-label",i),l(n,"title",c),n):{"aria-label":(a=t,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(x,"Beaker",(l(t={title:g},"aria-label",y),l(t,"aria-labelledby",m),t));return n.jsx("svg",o({className:r.cx(l({},v,null!=h),w,a),height:"number"==typeof d?d:p[d],width:"number"==typeof d?d:p[d],role:x},C,j,{viewBox:"0 0 16 16"}),n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.95288 1.8C5.95288 1.51997 5.95288 1.37996 6.00738 1.273C6.05532 1.17892 6.13181 1.10243 6.22589 1.0545C6.33284 1 6.47286 1 6.75288 1H9.15288C9.43291 1 9.57292 1 9.67988 1.0545C9.77396 1.10243 9.85045 1.17892 9.89839 1.273C9.95288 1.37996 9.95288 1.51997 9.95288 1.8V2.2C9.95288 2.48003 9.95288 2.62004 9.89839 2.727C9.85045 2.82108 9.77396 2.89757 9.67988 2.9455C9.57292 3 9.43291 3 9.15288 3H6.75288C6.47286 3 6.33284 3 6.22589 2.9455C6.13181 2.89757 6.05532 2.82108 6.00738 2.727C5.95288 2.62004 5.95288 2.48003 5.95288 2.2V1.8ZM6.00919 4.26951C5.95289 4.37788 5.95289 4.52025 5.95289 4.805V6H5.95288L2.94611 11.4122C2.28339 12.6051 1.95203 13.2015 2.01416 13.6895C2.06606 14.097 2.28284 14.4654 2.61388 14.7087C3.01025 15 3.69257 15 5.0572 15H10.8485C12.2132 15 12.8955 15 13.2919 14.7087C13.6229 14.4654 13.8397 14.097 13.8916 13.6895C13.9537 13.2015 13.6224 12.6051 12.9596 11.4122L12.9596 11.4122L9.95289 6.00003V4.805C9.95289 4.52025 9.95289 4.37788 9.8966 4.26951C9.84916 4.17819 9.7747 4.10373 9.68338 4.05629C9.57501 4 9.43264 4 9.14789 4H6.75789C6.47315 4 6.33077 4 6.2224 4.05629C6.13108 4.10373 6.05662 4.17819 6.00919 4.26951ZM9.33288 9L6.30288 9.5L5.01554 11.8106C4.79758 12.2019 4.6886 12.3975 4.70716 12.5576C4.72336 12.6973 4.79764 12.8237 4.9118 12.9059C5.04264 13 5.26656 13 5.71439 13H10.1939C10.641 13 10.8646 13 10.9954 12.906C11.1095 12.824 11.1838 12.6977 11.2001 12.5582C11.2189 12.3982 11.1104 12.2027 10.8934 11.8118L9.33288 9Z",fill:"currentColor"}))};return d.displayName="Beaker",d.isGlyph=!0,d.propTypes={fill:i.default.string,size:i.default.oneOfType([i.default.number,i.default.string]),className:i.default.string},d}(r("mXGw"),r("W0B4"),r("5MD+"),r("6h0R"))},Fcif:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return n}))},HV2J:function(e,t,r){e.exports=function(e,t,r,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(t);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u,f,p={small:14,default:16,large:20,xlarge:24},b=["className","size","title","aria-label","aria-labelledby","fill","role"],d=function(e){var t,a=e.className,i=e.size,d=void 0===i?16:i,g=e.title,y=e["aria-label"],m=e["aria-labelledby"],h=e.fill,O=e.role,x=void 0===O?"img":O,j=c(e,b),v=r.css(u||(u=s(["\n    color: ",";\n  "])),h),w=r.css(f||(f=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,t,r){var n,a,i=r["aria-label"],o=r["aria-labelledby"],c=r.title;switch(e){case"img":return i||o||c?(l(n={},"aria-labelledby",o),l(n,"aria-label",i),l(n,"title",c),n):{"aria-label":(a=t,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(x,"ImportantWithCircle",(l(t={title:g},"aria-label",y),l(t,"aria-labelledby",m),t));return n.jsx("svg",o({className:r.cx(l({},v,null!=h),w,a),height:"number"==typeof d?d:p[d],width:"number"==typeof d?d:p[d],role:x},C,j,{viewBox:"0 0 16 16"}),n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7 4.5C7 3.94772 7.44772 3.5 8 3.5C8.55228 3.5 9 3.94772 9 4.5V8.5C9 9.05228 8.55228 9.5 8 9.5C7.44772 9.5 7 9.05228 7 8.5V4.5ZM9 11.5C9 12.0523 8.55228 12.5 8 12.5C7.44772 12.5 7 12.0523 7 11.5C7 10.9477 7.44772 10.5 8 10.5C8.55228 10.5 9 10.9477 9 11.5Z",fill:"currentColor"}))};return d.displayName="ImportantWithCircle",d.isGlyph=!0,d.propTypes={fill:i.default.string,size:i.default.oneOfType([i.default.number,i.default.string]),className:i.default.string},d}(r("mXGw"),r("W0B4"),r("5MD+"),r("6h0R"))},Ipgj:function(e,t,r){e.exports=function(e,t,r,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(t);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u,f,p={small:14,default:16,large:20,xlarge:24},b=["className","size","title","aria-label","aria-labelledby","fill","role"],d=function(e){var t,a=e.className,i=e.size,d=void 0===i?16:i,g=e.title,y=e["aria-label"],m=e["aria-labelledby"],h=e.fill,O=e.role,x=void 0===O?"img":O,j=c(e,b),v=r.css(u||(u=s(["\n    color: ",";\n  "])),h),w=r.css(f||(f=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,t,r){var n,a,i=r["aria-label"],o=r["aria-labelledby"],c=r.title;switch(e){case"img":return i||o||c?(l(n={},"aria-labelledby",o),l(n,"aria-label",i),l(n,"title",c),n):{"aria-label":(a=t,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(x,"InfoWithCircle",(l(t={title:g},"aria-label",y),l(t,"aria-labelledby",m),t));return n.jsx("svg",o({className:r.cx(l({},v,null!=h),w,a),height:"number"==typeof d?d:p[d],width:"number"==typeof d?d:p[d],role:x},C,j,{viewBox:"0 0 16 16"}),n.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM9 4C9 4.55228 8.55228 5 8 5C7.44772 5 7 4.55228 7 4C7 3.44772 7.44772 3 8 3C8.55228 3 9 3.44772 9 4ZM8 6C8.55228 6 9 6.44772 9 7V11H9.5C9.77614 11 10 11.2239 10 11.5C10 11.7761 9.77614 12 9.5 12H6.5C6.22386 12 6 11.7761 6 11.5C6 11.2239 6.22386 11 6.5 11H7V7H6.5C6.22386 7 6 6.77614 6 6.5C6 6.22386 6.22386 6 6.5 6H8Z",fill:"currentColor"}))};return d.displayName="InfoWithCircle",d.isGlyph=!0,d.propTypes={fill:i.default.string,size:i.default.oneOfType([i.default.number,i.default.string]),className:i.default.string},d}(r("mXGw"),r("W0B4"),r("5MD+"),r("6h0R"))},OVsn:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return i}));r("KGyE"),r("nvok"),r("D+Av");var n=r("pl2K"),a=Object(n.a)({key:"css"}),i=(a.flush,a.hydrate,a.cx),l=(a.merge,a.getRegisteredStyles,a.injectGlobal,a.keyframes,a.css);a.sheet,a.cache},SmKr:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p}));var n=r("Fcif"),a=r("dV/x"),i=(r("mXGw"),r("/FXl")),l=r("OVsn"),o=r("/zgD"),c=(r("hD99"),r("/bO+")),s=r("eHoq"),u=r("91KN");var f={};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)(o.a,{className:Object(l.a)({name:"1d0nbku",styles:"margin-top:24px"}),mdxType:"Body"},"Icons can be used in a variety of settings, as support for text or standalone."),Object(i.a)(c.a,{imageURL:"".concat(s.a,"/images/new-guidelines/icons/icon-guidelines-1@3x.png"),className:Object(l.a)({name:"85x3x1",styles:"width:auto;height:52px"}),mdxType:"GuidelineImage"}),Object(i.a)(o.a,{mdxType:"Body"},"Caret icons are used in select inputs or standalone menu triggers. They always point down, and always open a new dropdown."),Object(i.a)(c.a,{imageURL:"".concat(s.a,"/images/new-guidelines/icons/icon-guidelines-2@3x.png"),className:Object(l.a)({name:"1d9ealh",styles:"width:auto;height:70px"}),mdxType:"GuidelineImage"}),Object(i.a)(o.a,{mdxType:"Body"},"When a menu button is not standalone, like on the cluster card or in a table row, use the ellipsis icon instead of the caret for menu triggers."," "),Object(i.a)(c.a,{imageURL:"".concat(s.a,"/images/new-guidelines/icons/icon-guidelines-3@3x.png"),className:Object(l.a)({name:"pfrdkh",styles:"width:auto;height:212px"}),mdxType:"GuidelineImage"}),Object(i.a)(o.a,{mdxType:"Body"},"Chevrons are used as an affordance for a collapsible/expandable, accordion, element. They do no open a new dropdown, but resize the existing container. Always point the chevron in the direction of the content when open, and to the opposite of its content when closed."),Object(i.a)(c.a,{imageURL:"".concat(s.a,"/images/new-guidelines/icons/icon-guidelines-4@3x.png"),className:Object(l.a)(Object(u.a)({width:["auto","auto","auto","791px"]})," height:334px;","",""),mdxType:"GuidelineImage"}),Object(i.a)(o.a,{mdxType:"Body"},"Icons should be contextual to the action or information they support. Don\u2019t use icons next to brand names."),Object(i.a)(c.a,{imageURL:"".concat(s.a,"/images/new-guidelines/icons/icon-guidelines-5@3x.png"),className:Object(l.a)({name:"nea3kb",styles:"width:auto;height:93px"}),mdxType:"GuidelineImage"}),Object(i.a)(o.l,{mdxType:"Subtitle"},"Accessibility Requirements"),Object(i.a)(o.a,{mdxType:"Body"},"Whether working in light or dark mode, ensure your icons are accessible and pass a 3:1 contrast ratio with their background. You can check this contrast ratio by using the"," ",Object(i.a)(o.j,{href:"https://www.figma.com/community/plugin/732603254453395948/Stark",mdxType:"Link"},"Stark plugin in Figma"),". (Gray Base is the lightest you can go in light mode for our gray palette.)"),Object(i.a)(c.a,{imageURL:"".concat(s.a,"/images/new-guidelines/icons/icon-guidelines-6@3x.png"),className:Object(l.a)({name:"ghz0xr",styles:"width:auto;height:417px"}),mdxType:"GuidelineImage"}))}p.isMDXComponent=!0},"dV/x":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("+I+c");function a(e,t){if(null==e)return{};var r,a,i=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}},eHoq:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));var n="/",a="https://d2va9gm4j17fy9.cloudfront.net"},hD99:function(e,t,r){"use strict";r.d(t,"a",(function(){return G}));r("mXGw");var n=r("W0B4"),a=r.n(n),i=r("5MD+"),l=r("G0rA"),o=r("x9F3"),c=r.n(o),s=r("HV2J"),u=r.n(s),f=r("Ipgj"),p=r.n(f),b=r("4Ki5"),d=r.n(b),g=r("Cj/M"),y=r.n(g),m=r("6h0R");function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var x,j,v,w,C,k,N,P,T,z,I,E,R,G={Note:"note",Tip:"tip",Important:"important",Warning:"warning",Example:"example"},M=Object(i.css)(x||(x=O(["\n  font-family: Euclid Circular A, \u2018Helvetica Neue\u2019, Helvetica, Arial, sans-serif; // TODO: Refresh \u2013 update to fontFamilies.default\n  background-color: ",";\n  border-radius: 16px;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    width: 16px;\n    left: -2px;\n    top: -2px;\n    bottom: -2px;\n    border-radius: 16px 0px 0px 16px;\n  }\n"])),l.a.white),H=Object(i.css)(j||(j=O(["\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 1px;\n  line-height: 16px;\n  padding: 12px 24px 12px 52px;\n  position: relative;\n  text-transform: uppercase;\n  width: 100%;\n  border-top-left-radius: 14px;\n  border-top-right-radius: 14px;\n"]))),S=Object(i.css)(v||(v=O(["\n  left: 20px;\n  position: absolute;\n"]))),V=Object(i.css)(w||(w=O(["\n  font-weight: 500;\n"]))),B=Object(i.css)(C||(C=O(["\n  display: flex;\n  flex-direction: column;\n  padding: 16px 24px 16px 52px;\n  font-weight: 400;\n"]))),A=(h(P={},13,Object(i.css)(k||(k=O(["\n    font-size: 13px;\n    line-height: 20px;\n  "])))),h(P,16,Object(i.css)(N||(N=O(["\n    font-size: 16px;\n    line-height: 24px;\n  "])))),P),L=(h(T={},G.Note,"Note"),h(T,G.Tip,"Tip"),h(T,G.Important,"Important"),h(T,G.Warning,"Warning"),h(T,G.Example,"Example"),T),Z=(h(z={},G.Note,p.a),h(z,G.Tip,c.a),h(z,G.Important,u.a),h(z,G.Warning,d.a),h(z,G.Example,y.a),z),D=(h(I={},G.Note,{header:{background:l.a.blue.light3,text:l.a.blue.dark1},text:l.a.blue.dark3,bar:l.a.blue.base,icon:l.a.blue.base,border:l.a.blue.light2}),h(I,G.Tip,{header:{background:l.a.purple.light3,text:l.a.purple.dark2},text:l.a.purple.dark3,bar:l.a.purple.base,icon:l.a.purple.base,border:l.a.purple.light2}),h(I,G.Important,{header:{background:l.a.yellow.light3,text:l.a.yellow.dark2},text:l.a.yellow.dark3,bar:l.a.yellow.base,icon:l.a.yellow.dark2,border:l.a.yellow.light2}),h(I,G.Warning,{header:{background:l.a.red.light3,text:l.a.red.dark2},text:l.a.red.dark3,bar:l.a.red.base,icon:l.a.red.base,border:l.a.red.light2}),h(I,G.Example,{header:{background:l.a.gray.light2,text:l.a.gray.dark2},text:l.a.gray.dark3,bar:l.a.gray.dark1,icon:l.a.gray.dark3,border:l.a.gray.light1}),I);function W(e){var t=e.variant,r=e.title,n=e.baseFontSize,a=void 0===n?13:n,l=e.className,o=e.children,c=D[t],s=Z[t];return Object(m.jsx)("div",{role:"note",className:Object(i.cx)(M,Object(i.css)(E||(E=O(["\n          color: ",";\n          border: 2px solid ",";\n          box-shadow: inset 0px 2px 0px 0px ","; // hides gap between the border and the header div when zoomed in.\n\n          &:after {\n            background: linear-gradient(\n              to left,\n              transparent 9px,\n              "," 9px\n            );\n          }\n        "])),c.text,c.border,c.header.background,c.bar),l)},Object(m.jsx)("div",{className:Object(i.cx)(H,Object(i.css)(R||(R=O(["\n            background-color: ",";\n            color: ",";\n          "])),c.header.background,c.header.text))},Object(m.jsx)(s,{fill:c.icon,className:S,role:"presentation"}),L[t]),Object(m.jsx)("div",{className:B},r&&Object(m.jsx)("div",{className:Object(i.cx)(V,A[a])},r),Object(m.jsx)("div",{className:A[a]},o)))}W.propTypes={variant:a.a.oneOf(Object.values(G)).isRequired,title:a.a.string,children:a.a.node.isRequired,className:a.a.string},t.b=W},lxbG:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/icon/guidelines",function(){return r("SmKr")}])},x9F3:function(e,t,r){e.exports=function(e,t,r,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(t);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u,f,p={small:14,default:16,large:20,xlarge:24},b=["className","size","title","aria-label","aria-labelledby","fill","role"],d=function(e){var t,a=e.className,i=e.size,d=void 0===i?16:i,g=e.title,y=e["aria-label"],m=e["aria-labelledby"],h=e.fill,O=e.role,x=void 0===O?"img":O,j=c(e,b),v=r.css(u||(u=s(["\n    color: ",";\n  "])),h),w=r.css(f||(f=s(["\n    flex-shrink: 0;\n  "]))),C=function(e,t,r){var n,a,i=r["aria-label"],o=r["aria-labelledby"],c=r.title;switch(e){case"img":return i||o||c?(l(n={},"aria-labelledby",o),l(n,"aria-label",i),l(n,"title",c),n):{"aria-label":(a=t,"".concat(a.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(x,"Bulb",(l(t={title:g},"aria-label",y),l(t,"aria-labelledby",m),t));return n.jsx("svg",o({className:r.cx(l({},v,null!=h),w,a),height:"number"==typeof d?d:p[d],width:"number"==typeof d?d:p[d],role:x},C,j,{viewBox:"0 0 16 16"}),n.jsx("path",{d:"M12.3311 8.5C12.7565 7.76457 13 6.91072 13 6C13 3.23858 10.7614 1 8 1C5.23858 1 3 3.23858 3 6C3 6.94628 3.26287 7.83117 3.71958 8.58561L5.40749 11.501C5.58628 11.8099 5.91607 12 6.27291 12H6.5V6C6.5 5.17157 7.17157 4.5 8 4.5C8.82843 4.5 9.5 5.17157 9.5 6V12H9.72368C10.0793 12 10.4082 11.8111 10.5874 11.5039L12.34 8.5H12.3311Z",fill:"currentColor"}),n.jsx("path",{d:"M7.5 6V12H8.5V6C8.5 5.72386 8.27614 5.5 8 5.5C7.72386 5.5 7.5 5.72386 7.5 6Z",fill:"currentColor"}),n.jsx("path",{d:"M10 14V13H6V14C6 14.5523 6.44772 15 7 15H9C9.55228 15 10 14.5523 10 14Z",fill:"currentColor"}))};return d.displayName="Bulb",d.isGlyph=!0,d.propTypes={fill:i.default.string,size:i.default.oneOfType([i.default.number,i.default.string]),className:i.default.string},d}(r("mXGw"),r("W0B4"),r("5MD+"),r("6h0R"))}},[["lxbG",0,1,4,2,3]]]);