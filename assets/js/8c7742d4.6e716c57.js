"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[840],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(b,s(s({ref:r},p),{},{components:t})):n.createElement(b,s({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=u;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5787:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const o={title:"ABAP-CDS-07",description:""},s=void 0,i={unversionedId:"exercises/abap-cds/abap-cds-07",id:"exercises/abap-cds/abap-cds-07",title:"ABAP-CDS-07",description:"",source:"@site/docs/exercises/abap-cds/abap-cds-07.md",sourceDirName:"exercises/abap-cds",slug:"/exercises/abap-cds/abap-cds-07",permalink:"/s4hana/exercises/abap-cds/abap-cds-07",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/exercises/abap-cds/abap-cds-07.md",tags:[],version:"current",frontMatter:{title:"ABAP-CDS-07",description:""},sidebar:"exercisesSidebar",previous:{title:"ABAP-CDS-06",permalink:"/s4hana/exercises/abap-cds/abap-cds-06"},next:{title:"ABAP-CDS-08",permalink:"/s4hana/exercises/abap-cds/abap-cds-08"}},c={},l=[{value:"ER-Modell",id:"er-modell",level:2}],p={toc:l};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Erstelle mit Hilfe des abgebildeten ER-Modells die ABAP CDS View ",(0,a.kt)("inlineCode",{parentName:"li"},"ZI_???_CustomerWithTravels")),(0,a.kt)("li",{parentName:"ol"},"Erstelle das ABAP-Programm ",(0,a.kt)("inlineCode",{parentName:"li"},"Z???_ABAP_CDS_07"),", welches alle Kunden liest und anzeigt. Verwende zum Lesen der Kunden die ABAP CDS View aus Aufgabenteil 1")),(0,a.kt)("h2",{id:"er-modell"},"ER-Modell"),(0,a.kt)("mermaid",{value:'erDiagram\n\n    I_Customer ||--|| DMOCUSTOMER : ""\n    I_Travel ||--|| DMOTRAVEL : ""\n    I_CustomerWithTravels ||--|| I_Customer : "Only Customers from Germany"\n    I_CustomerWithTravels ||--o{ I_Travel : ""\n\n    I_CustomerWithTravels {\n        numc(6) CustomerId PK\n        char(40) FirstName\n        char(40) LastName\n        char(10) Title\n        char(60) Street\n        char(10) PostalCode\n        char(40) City\n        association _Travels\n    }\n\n    I_Customer {\n        numc(6) CustomerId PK\n        char(40) FirstName\n        char(40) LastName\n        char(10) Title\n        char(60) Street\n        char(10) PostalCode\n        char(40) City\n        char(3) CountryCode\n    }'}))}d.isMDXComponent=!0}}]);