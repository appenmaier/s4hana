"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[9994],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),l=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),b=a,m=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=d;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},659:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const i={title:"ABAP-CDS-06",description:""},s=void 0,c={unversionedId:"exercises/abap-cds/abap-cds-06",id:"exercises/abap-cds/abap-cds-06",title:"ABAP-CDS-06",description:"",source:"@site/docs/exercises/abap-cds/abap-cds-06.md",sourceDirName:"exercises/abap-cds",slug:"/exercises/abap-cds/abap-cds-06",permalink:"/s4hana/exercises/abap-cds/abap-cds-06",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/exercises/abap-cds/abap-cds-06.md",tags:[],version:"current",frontMatter:{title:"ABAP-CDS-06",description:""},sidebar:"exercisesSidebar",previous:{title:"ABAP-CDS-05",permalink:"/s4hana/exercises/abap-cds/abap-cds-05"},next:{title:"ABAP-CDS-07",permalink:"/s4hana/exercises/abap-cds/abap-cds-07"}},o={},l=[{value:"Ausgabe",id:"ausgabe",level:2}],p={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Erweitere die ABAP CDS View ",(0,a.kt)("inlineCode",{parentName:"li"},"ZI_???_CustomerKPIs")," um einen Parameter, der es m\xf6glicht, die Kunden nach der Stadt zu filtern"),(0,a.kt)("li",{parentName:"ol"},"Erstelle die ausf\xfchrbare Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"ZCL_???_ABAP_CDS_06"),", welche alle Kunden aus einer eingegebenen Stadt liest und absteigend sortiert nach dem Umsatz anzeigt. Verwende zum Lesen der Kunden die ABAP CDS View aus Aufgabenteil 1")),(0,a.kt)("h2",{id:"ausgabe"},"Ausgabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"CUSTOMERID CUSTOMERNAME        TOTALREVENUE\n105        M\xfcller GmbH         23.800\n99         Frau Petra Fr\xf6hlich 8.999\n67         Herr Hans Maier     7.354\n")))}u.isMDXComponent=!0}}]);