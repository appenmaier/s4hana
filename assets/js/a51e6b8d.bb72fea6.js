"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[8198],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>b});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(t),b=n,u=d["".concat(c,".").concat(b)]||d[b]||m[b]||o;return t?a.createElement(u,p(p({ref:r},l),{},{components:t})):a.createElement(u,p({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,p=new Array(o);p[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=t[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4445:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(7462),n=(t(7294),t(3905));const o={title:"ABAP-Programm ZABAP_DEMO_ABAP_07",description:"Systemfelder",sidebar_position:70},p=void 0,i={unversionedId:"abap/code/report_zabap_demo_abap_07",id:"abap/code/report_zabap_demo_abap_07",title:"ABAP-Programm ZABAP_DEMO_ABAP_07",description:"Systemfelder",source:"@site/docs/abap/code/report_zabap_demo_abap_07.md",sourceDirName:"abap/code",slug:"/abap/code/report_zabap_demo_abap_07",permalink:"/s4hana/docs/abap/code/report_zabap_demo_abap_07",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/report_zabap_demo_abap_07.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"ABAP-Programm ZABAP_DEMO_ABAP_07",description:"Systemfelder",sidebar_position:70},sidebar:"abapSidebar",previous:{title:"ABAP-Programm ZABAP_DEMO_ABAP_06",permalink:"/s4hana/docs/abap/code/report_zabap_demo_abap_06"},next:{title:"ABAP-Programm ZABAP_DEMO_ABAP_08",permalink:"/s4hana/docs/abap/code/report_zabap_demo_abap_08"}},c={},s=[],l={toc:s};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-abap"},"REPORT zabap_demo_abap_07.\n\nWRITE: |Anmeldename: { sy-uname }|.\nWRITE: / |Datum des Clients: { sy-datlo DATE = ISO }|.\nWRITE: / |Zeit des Clients: { sy-timlo TIME = ISO }|.\nWRITE: / |Anmeldemandat: { sy-mandt }|.\nWRITE: / |Anmeldesprache: { sy-langu }|.\n")))}m.isMDXComponent=!0}}]);