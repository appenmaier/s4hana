"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[5330],{3905:(e,r,n)=>{n.d(r,{Zo:()=>s,kt:()=>b});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,_=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?t.createElement(_,p(p({ref:r},s),{},{components:n})):t.createElement(_,p({ref:r},s))}));function b(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=n[l];return t.createElement.apply(null,p)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},923:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=n(7462),a=(n(7294),n(3905));const o={title:"ZABAP_DEMO_ABAP_05",description:"Fallunterscheidungen"},p=void 0,c={unversionedId:"abap/code/reports/zabap_demo_abap_05",id:"abap/code/reports/zabap_demo_abap_05",title:"ZABAP_DEMO_ABAP_05",description:"Fallunterscheidungen",source:"@site/docs/abap/code/reports/zabap_demo_abap_05.md",sourceDirName:"abap/code/reports",slug:"/abap/code/reports/zabap_demo_abap_05",permalink:"/s4hana/docs/abap/code/reports/zabap_demo_abap_05",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/reports/zabap_demo_abap_05.md",tags:[],version:"current",frontMatter:{title:"ZABAP_DEMO_ABAP_05",description:"Fallunterscheidungen"},sidebar:"abapSidebar",previous:{title:"ZABAP_DEMO_ABAP_04",permalink:"/s4hana/docs/abap/code/reports/zabap_demo_abap_04"},next:{title:"ZABAP_DEMO_ABAP_06",permalink:"/s4hana/docs/abap/code/reports/zabap_demo_abap_06"}},i={},l=[],s={toc:l};function d(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},"REPORT zabap_demo_abap_05.\n\nDATA carrier_id TYPE s_carr_id VALUE 'LH'.\nDATA flight_date TYPE s_date VALUE '20211026'.\n\n*-------------------------------------------------------------------*\n* Einfache Fallunterscheidungen\n*-------------------------------------------------------------------*\nIF NOT ( flight_date >= '20210101' AND flight_date <= '20211231' ) OR carrier_id = 'LH'.\n  WRITE: 'true'.\nELSE.\n  WRITE: 'false'.\nENDIF.\n\nIF carrier_id IS INITIAL.\n  WRITE: / 'carrier_id IS INITIAL'.\nENDIF.\n\n*-------------------------------------------------------------------*\n* Komplexe Fallunterscheidungen\n*-------------------------------------------------------------------*\nCASE carrier_id.\n  WHEN 'LH' OR 'lh' OR 'lH' OR 'Lh'.\n    WRITE: / 'Lufthansa'.\n  WHEN 'AA'.\n    WRITE: / 'American Airlines'.\n  WHEN OTHERS.\n    WRITE: / carrier_id.\nENDCASE.\n")))}d.isMDXComponent=!0}}]);