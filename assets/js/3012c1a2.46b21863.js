"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[3818],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,u=m["".concat(c,".").concat(d)]||m[d]||b[d]||o;return n?r.createElement(u,p(p({ref:t},s),{},{components:n})):r.createElement(u,p({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"ABAP-Programm ZABAP_DEMO_ABAP_04",description:"Zeichenketten und Zeichenketten-Templates",sidebar_position:40},p=void 0,i={unversionedId:"abap/code/report_zabap_demo_abap_04",id:"abap/code/report_zabap_demo_abap_04",title:"ABAP-Programm ZABAP_DEMO_ABAP_04",description:"Zeichenketten und Zeichenketten-Templates",source:"@site/docs/abap/code/report_zabap_demo_abap_04.md",sourceDirName:"abap/code",slug:"/abap/code/report_zabap_demo_abap_04",permalink:"/s4hana/docs/abap/code/report_zabap_demo_abap_04",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/report_zabap_demo_abap_04.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"ABAP-Programm ZABAP_DEMO_ABAP_04",description:"Zeichenketten und Zeichenketten-Templates",sidebar_position:40},sidebar:"abapSidebar",previous:{title:"ABAP-Programm ZABAP_DEMO_ABAP_03",permalink:"/s4hana/docs/abap/code/report_zabap_demo_abap_03"},next:{title:"ABAP-Programm ZABAP_DEMO_ABAP_05",permalink:"/s4hana/docs/abap/code/report_zabap_demo_abap_05"}},c={},l=[],s={toc:l};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},"REPORT zabap_demo_abap_04.\n\n*-------------------------------------------------------------------*\n* Zeichenketten\n*-------------------------------------------------------------------*\nDATA text TYPE string VALUE 'Hallo'.\nDATA text2 TYPE string VALUE 'Welt'.\nDATA text3 TYPE string.\n\n*-------------------------------------------------------------------*\n* Zeichenketten-Templates\n*-------------------------------------------------------------------*\ntext3 = text && | | && text2.\nWRITE: text3.\nWRITE: / |{ text } { text2 }|.\n\n*-------------------------------------------------------------------*\n* Zeichenkettenfunktionen\n*-------------------------------------------------------------------*\nWRITE: / |Length: { strlen( text3 ) }|.\nWRITE: / |Replace: { replace( val = text sub = 'a' with = 'e' ) }|.\n")))}b.isMDXComponent=!0}}]);