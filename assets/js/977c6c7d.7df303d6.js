"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[3029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,b=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(b,i(i({ref:t},s),{},{components:n})):r.createElement(b,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"ABAP-06",description:""},i=void 0,o={unversionedId:"abap/exercises/abap-06",id:"abap/exercises/abap-06",title:"ABAP-06",description:"",source:"@site/docs/abap/exercises/abap-06.md",sourceDirName:"abap/exercises",slug:"/abap/exercises/abap-06",permalink:"/s4hana/abap/exercises/abap-06",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/exercises/abap-06.md",tags:[],version:"current",frontMatter:{title:"ABAP-06",description:""},sidebar:"abapSidebar",previous:{title:"ABAP-05",permalink:"/s4hana/abap/exercises/abap-05"},next:{title:"ABAP-07",permalink:"/s4hana/abap/exercises/abap-07"}},p={},u=[{value:"Komponenten\xfcbersicht des Strukturtypen <code>Z???_CUSTOMER</code>",id:"komponenten\xfcbersicht-des-strukturtypen-z_customer",level:2},{value:"Eingabe",id:"eingabe",level:2},{value:"Ausgabe",id:"ausgabe",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Erstelle mit Hilfe der abgebildeten Komponenten\xfcbersicht den Strukturtypen ",(0,a.kt)("inlineCode",{parentName:"li"},"Z???_CUSTOMER")),(0,a.kt)("li",{parentName:"ol"},"Erstelle das ABAP-Programm ",(0,a.kt)("inlineCode",{parentName:"li"},"Z???_ABAP_06"),", welches Kundeninformationen (Name, Stadt, Rabatt) zu einer eingegebenen Kundennummer liest und auf dem Bildschirm ausgibt. Verwende zum Lesen der Kundeninformationen den Funktionsbaustein ",(0,a.kt)("inlineCode",{parentName:"li"},"Z_ABAP_GET_CUSTOMER"))),(0,a.kt)("h2",{id:"komponenten\xfcbersicht-des-strukturtypen-z_customer"},"Komponenten\xfcbersicht des Strukturtypen ",(0,a.kt)("inlineCode",{parentName:"h2"},"Z???_CUSTOMER")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Komponente"),(0,a.kt)("th",{parentName:"tr",align:null},"Komponententyp"),(0,a.kt)("th",{parentName:"tr",align:null},"Bezeichnung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CUSTOMER_ID"),(0,a.kt)("td",{parentName:"tr",align:null},"S_CUSTOMER"),(0,a.kt)("td",{parentName:"tr",align:null},"Kundennummer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NAME"),(0,a.kt)("td",{parentName:"tr",align:null},"S_CUSTNAME"),(0,a.kt)("td",{parentName:"tr",align:null},"Name")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CITY"),(0,a.kt)("td",{parentName:"tr",align:null},"CITY"),(0,a.kt)("td",{parentName:"tr",align:null},"Stadt")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DISCOUNT"),(0,a.kt)("td",{parentName:"tr",align:null},"S_DISCOUNT"),(0,a.kt)("td",{parentName:"tr",align:null},"Rabatt")))),(0,a.kt)("h2",{id:"eingabe"},"Eingabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Ausf\xfchren (F8)\n\nKundenummer: 1\n")),(0,a.kt)("h2",{id:"ausgabe"},"Ausgabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Kundenummer: 1\nName: SAP SE\nStadt: Walldorf\nRabatt: 10%\n")))}c.isMDXComponent=!0}}]);