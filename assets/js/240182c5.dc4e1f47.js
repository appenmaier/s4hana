"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[360],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,b=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"ABAP-Programm ZABAP_DEMO_ABAP_01",description:"Allgemeine Syntax und Kommentare",sidebar_position:10},i=void 0,p={unversionedId:"abap/code/report_demo_01",id:"abap/code/report_demo_01",title:"ABAP-Programm ZABAP_DEMO_ABAP_01",description:"Allgemeine Syntax und Kommentare",source:"@site/docs/abap/code/report_demo_01.md",sourceDirName:"abap/code",slug:"/abap/code/report_demo_01",permalink:"/s4hana/docs/abap/code/report_demo_01",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/report_demo_01.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"ABAP-Programm ZABAP_DEMO_ABAP_01",description:"Allgemeine Syntax und Kommentare",sidebar_position:10},sidebar:"abapSidebar",previous:{title:"Quellcode",permalink:"/s4hana/docs/abap/code/"},next:{title:"ABAP-Programm ZABAP_DEMO_ABAP_02",permalink:"/s4hana/docs/abap/code/report_demo_02"}},c={},l=[],s={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},"REPORT zabap_demo_abap_01.\n\nDATA text TYPE string. \"Deklaration\ntext = 'Hallo'. \"Wertzuweisung\nWRITE: text, 'Welt'. \"Ausgabe\n")))}m.isMDXComponent=!0}}]);