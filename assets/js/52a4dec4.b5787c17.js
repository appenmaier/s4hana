"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[2350],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),b=a,m=d["".concat(s,".").concat(b)]||d[b]||u[b]||i;return t?n.createElement(m,c(c({ref:r},p),{},{components:t})):n.createElement(m,c({ref:r},p))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3538:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const i={title:"ABAP-CDS-01",description:""},c=void 0,o={unversionedId:"exercises/abap-cds/abap-cds-01",id:"exercises/abap-cds/abap-cds-01",title:"ABAP-CDS-01",description:"",source:"@site/docs/exercises/abap-cds/abap-cds-01.md",sourceDirName:"exercises/abap-cds",slug:"/exercises/abap-cds/abap-cds-01",permalink:"/s4hana/exercises/abap-cds/abap-cds-01",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/exercises/abap-cds/abap-cds-01.md",tags:[],version:"current",frontMatter:{title:"ABAP-CDS-01",description:""},sidebar:"exercisesSidebar",previous:{title:"ABAP CDS",permalink:"/s4hana/exercises/abap-cds/"},next:{title:"ABAP-CDS-02",permalink:"/s4hana/exercises/abap-cds/abap-cds-02"}},s={},l=[],p={toc:l};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Analysiere die ABAP CDS View ",(0,a.kt)("inlineCode",{parentName:"li"},"/DMO/C_Booking_Approver_M")," und beantworte folgende Fragen:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Von welchen Datenbanktabellen werden die Daten gelesen?"),(0,a.kt)("li",{parentName:"ul"},"Wie viele Buchungen existieren f\xfcr die Flugverbindung ",(0,a.kt)("inlineCode",{parentName:"li"},"LH 0400"),"?"))),(0,a.kt)("li",{parentName:"ol"},"Erstelle das ABAP-Programm ",(0,a.kt)("inlineCode",{parentName:"li"},"Z???_ABAP_CDS_01"),", welches alle Buchungen zu einer eingegebenen Flugverbindung liest und anzeigt. Verwende zum Lesen der Buchungen die ABAP CDS View aus Aufgabenteil 1")))}u.isMDXComponent=!0}}]);