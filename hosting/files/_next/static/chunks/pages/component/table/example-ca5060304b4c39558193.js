_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[122],{"81Kt":function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/table/example",function(){return s("Ap0h")}])},Ap0h:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return j}));var r=s("Fcif"),a=s("dV/x"),l=(s("mXGw"),s("olMD")),n=s("hnBo"),o=s("6h0R"),c=[{name:"First Project",clusters:"1 Cluster",users:"12 Users",teams:"0 Teams",alerts:"5 Alerts"},{name:"Second Project",clusters:"2 Clusters",users:"6 Users",teams:"4 Teams",alerts:"2 Alerts"},{name:"Third Project",clusters:"5 Clusters",users:"2 Users",teams:"0 Teams",alerts:"1 Alert"}],u={disabled:{type:"boolean",default:!1,label:"Disabled"},sortBy:{type:"boolean",default:!0,label:"Sort By"},baseFontSize:{type:"select",default:14,label:"Base Font Size",options:[14,16]},darkMode:{type:"boolean",default:!1,label:"Dark Mode"}};function b(e){var t=e.disabled,s=e.sortBy,n=e.darkMode,u=Object(a.a)(e,["disabled","sortBy","darkMode"]);return Object(o.jsx)(l.d,Object(r.a)({},u,{darkMode:n,data:c,columns:Object(o.jsx)(l.b,null,Object(o.jsx)(l.e,{key:"name",label:"Project Name"}),Object(o.jsx)(l.e,{label:"Clusters",sortBy:s?function(e){return e.clusters}:void 0,key:"clusters"}),Object(o.jsx)(l.e,{key:"users",label:"Users"}),Object(o.jsx)(l.e,{key:"teams",label:"Teams"}),Object(o.jsx)(l.e,{key:"alerts",label:"Alerts"}))}),(function(e){var s=e.datum;return Object(o.jsx)(l.c,{key:s.name,disabled:t&&"Second Project"===s.name},Object(o.jsx)(l.a,null,s.name),Object(o.jsx)(l.a,null,s.clusters),Object(o.jsx)(l.a,null,s.users),Object(o.jsx)(l.a,null,s.teams),Object(o.jsx)(l.a,null,s.alerts))}))}function j(){return Object(o.jsx)(n.a,{knobsConfig:u},(function(e){return Object(o.jsx)(b,e)}))}},"dV/x":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var r=s("+I+c");function a(e,t){if(null==e)return{};var s,a,l=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)s=n[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(l[s]=e[s])}return l}}},[["81Kt",0,1,4,2,3,5,6,7,8,9,12,17]]]);