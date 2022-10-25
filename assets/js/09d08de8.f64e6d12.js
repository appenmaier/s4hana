"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[7283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||l;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const l={title:"\xdcbungsaufgabe ABAP-Objects-09",description:""},i=void 0,s={unversionedId:"abap-objects/exercises/abap-objects-09",id:"abap-objects/exercises/abap-objects-09",title:"\xdcbungsaufgabe ABAP-Objects-09",description:"",source:"@site/docs/abap-objects/exercises/abap-objects-09.md",sourceDirName:"abap-objects/exercises",slug:"/abap-objects/exercises/abap-objects-09",permalink:"/s4hana/abap-objects/exercises/abap-objects-09",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-objects/exercises/abap-objects-09.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe ABAP-Objects-09",description:""},sidebar:"abapObjectsSidebar",previous:{title:"\xdcbungsaufgabe ABAP-Objects-08",permalink:"/s4hana/abap-objects/exercises/abap-objects-08"},next:{title:"Quellcode",permalink:"/s4hana/abap-objects/code/"}},o={},c=[{value:"Informationen zum globalen Tabellentypen <code>Z???_PARTNERS</code>",id:"informationen-zum-globalen-tabellentypen-z_partners",level:2},{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zum Klasse <code>ZCL_???_TRAVEL_AGENCY</code>",id:"hinweise-zum-klasse-zcl__travel_agency",level:2}],p={toc:c};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Erstelle die Schnittstelle ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIF_???_PARTNER")," anhand des abgebildeten Klassendiagramms"),(0,r.kt)("li",{parentName:"ol"},"Passe die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"ZCL_???_CARRIER")," anhand des abgebildeten Klassendiagramms an"),(0,r.kt)("li",{parentName:"ol"},"Lege den globalen Tabellentypen ",(0,r.kt)("inlineCode",{parentName:"li"},"Z???_PARTNERS")," anhand der abgebildeten Informationen an"),(0,r.kt)("li",{parentName:"ol"},"Erstelle die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"ZCL_???_TRAVEL_AGENCY")," anhand des abgebildeten Klassendiagramms"),(0,r.kt)("li",{parentName:"ol"},"Passe das ABAP-Programm ",(0,r.kt)("inlineCode",{parentName:"li"},"Z???_ABAPOO_AIRPLANES")," so an, dass neben den Flugzeugen und der Fluggesellschaft auch ein Reiseb\xfcro erzeugt wird. Die Fluggesellschaft soll dem Reiseb\xfcro zugewiesen und alle Informationen des Reiseb\xfcros auf dem Bildschirm ausgegeben\nwerden")),(0,r.kt)("h2",{id:"informationen-zum-globalen-tabellentypen-z_partners"},"Informationen zum globalen Tabellentypen ",(0,r.kt)("inlineCode",{parentName:"h2"},"Z???_PARTNERS")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Referenztyp: ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIF_???_PARTNER")),(0,r.kt)("li",{parentName:"ul"},"Tabellenart: Standardtabelle"),(0,r.kt)("li",{parentName:"ul"},"Prim\xe4rschl\xfcssel: Standardschl\xfcssel")),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/194851629-0b630a4f-8cee-4b18-a31e-0a446396ab20.png",alt:"image"})),(0,r.kt)("h2",{id:"hinweise-zum-klasse-zcl__travel_agency"},"Hinweise zum Klasse ",(0,r.kt)("inlineCode",{parentName:"h2"},"ZCL_???_TRAVEL_AGENCY")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"TO_STRING()")," soll alle Instanzattribute zu einer Zeichenkette zusammenfassen und diese zur\xfcckgeben")))}b.isMDXComponent=!0}}]);