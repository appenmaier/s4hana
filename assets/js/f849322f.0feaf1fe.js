"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[7260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),b=n,d=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return r?a.createElement(d,p(p({ref:t},s),{},{components:r})):a.createElement(d,p({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var l=2;l<o;l++)p[l]=r[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9736:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={title:"ZABAP_DEMO_ABAP_01",description:"Allgemeine Syntax und Kommentare"},p=void 0,c={unversionedId:"abap/code/reports/zabap_demo_abap_01",id:"abap/code/reports/zabap_demo_abap_01",title:"ZABAP_DEMO_ABAP_01",description:"Allgemeine Syntax und Kommentare",source:"@site/docs/abap/code/reports/zabap_demo_abap_01.md",sourceDirName:"abap/code/reports",slug:"/abap/code/reports/zabap_demo_abap_01",permalink:"/s4hana/docs/abap/code/reports/zabap_demo_abap_01",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/reports/zabap_demo_abap_01.md",tags:[],version:"current",frontMatter:{title:"ZABAP_DEMO_ABAP_01",description:"Allgemeine Syntax und Kommentare"},sidebar:"abapSidebar",previous:{title:"ABAP Programme",permalink:"/s4hana/docs/abap/code/reports/"},next:{title:"ZABAP_DEMO_ABAP_02",permalink:"/s4hana/docs/abap/code/reports/zabap_demo_abap_02"}},i={},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-abap"},"REPORT zabap_demo_abap_01.\n\nDATA text TYPE string. \"Deklaration\ntext = 'Hallo'. \"Wertzuweisung\nWRITE: text, 'Welt'. \"Ausgabe\n")))}u.isMDXComponent=!0}}]);