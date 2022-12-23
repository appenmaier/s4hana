"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[9278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),p=a,g=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(g,l(l({ref:t},s),{},{components:n})):r.createElement(g,l({ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7294),a=n(6010),i=n(2802),l=n(9960),o=n(3919),c=n(5999);const u="cardContainer_fWXF",s="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:n}=e;return r.createElement(l.Z,{href:t,className:(0,a.Z)("card padding--lg",u)},n)}function p(e){let{href:t,icon:n,title:i,description:l}=e;return r.createElement(m,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",s),title:i},n," ",i),l&&r.createElement("p",{className:(0,a.Z)("text--truncate",d),title:l},l))}function g(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:null==a?void 0:a.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return r.createElement(b,e);const l=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},l.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},2651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905)),i=n(2991);const l={title:"Technisches Curriculum (SAP VT)",description:"",sidebar_position:50},o=void 0,c={unversionedId:"additional-material/vt/vt",id:"additional-material/vt/vt",title:"Technisches Curriculum (SAP VT)",description:"",source:"@site/docs/additional-material/vt/vt.md",sourceDirName:"additional-material/vt",slug:"/additional-material/vt/",permalink:"/s4hana/additional-material/vt/",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/additional-material/vt/vt.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Technisches Curriculum (SAP VT)",description:"",sidebar_position:50},sidebar:"additionalMaterialSidebar",previous:{title:"ABAP Development Tools verwenden",permalink:"/s4hana/additional-material/instructions/use-adt"},next:{title:"Aufgabenbeschreibung Programmier-Projekt",permalink:"/s4hana/additional-material/vt/project"}},u={},s=[],d={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Im Rahmen des VT Onboardings bekommen die neuen Duale Studierenden und Auszubildenden von SAP (DuSA), die oft \xfcber wenig bis keine\nProgrammier-Kenntnisse verf\xfcgen, eine Reihe von Schulungen. Die (programmier)technischen Schulungen des Onboardings werden dabei unter dem Begriff\n",(0,a.kt)("em",{parentName:"p"},"Technisches Curriculum")," zusammengefasst. Das Ziel des technischen Curriculums ist es, den DuSA grundlegende SAP-Technologien n\xe4her zu bringen und sie damit bestm\xf6glich auf die erste Praxisphase vorzubereiten. Die Schulungen sollen daher den Fokus auf die wichtigsten Grundlagen der\njeweiligen Technologie legen. Letztlich sollen die DuSA in der Lage sein, im Rahmen des Programmier-Projekts ein vorgegebenes, einfaches End-to-End-Szenario umzusetzen. Aktuell liegt der Fokus des technischen Curriculums dabei auf dem ABAP Programmiermodell f\xfcr SAP Fiori."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Schulung"),(0,a.kt)("th",{parentName:"tr",align:null},"Inhalte"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SAP01"),(0,a.kt)("td",{parentName:"tr",align:null},"\xdcberblick SAP Produkte und L\xf6sungen")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SAPTEC"),(0,a.kt)("td",{parentName:"tr",align:null},"Architektur und technologischer Aufbau von SAP-Systemen (Systemarchitektur, Navigation, Dialog-Verarbeitung, Hintergrund-Verarbeitung, Kommunikations- und Integrations-Technologien)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"S4D400"),(0,a.kt)("td",{parentName:"tr",align:null},"Prozedurales Programmieren in ABAP (Variablen, Debugging, Wiederverwendbaren Prozeduren, Strukturen, Interne Tabellen, Open SQL) und Objektorientiertes Programmieren in ABAP (Klassen, Attribute, Methode, Objekte, Vererbung, Interfaces)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"S4D430"),(0,a.kt)("td",{parentName:"tr",align:null},"Grundlegende SQL-Funktionen in CDS-Views (Projektionen, Selektionen, Inner Joins, Annotationen), weiterf\xfchrende SQL-Funktionen in CDS-Views (SQL-Ausdr\xfccke, eingebaute SQL-Funktionen, Geschachtelte Views, Aggregationen, Outer Joins, Unions) und weiterf\xfchrende Konzepte in CDS-Views (Eingabeparameter, Assoziationen, Erweiterungen, Berechtigungskontrollen)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"S4DEV"),(0,a.kt)("td",{parentName:"tr",align:null},"Das ABAP Programmiermodell f\xfcr SAP Fiori (Datenmodellierung, Service-Erstellung, Entwicklung grafischer Benutzeroberfl\xe4chen, Transaktionale Verarbeitung)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UX399"),(0,a.kt)("td",{parentName:"tr",align:null},"Grundlagen HTML, CSS, JavaScript")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"UX400"),(0,a.kt)("td",{parentName:"tr",align:null},"Grundlagen SAPUI5 (Dependency Management, Views und Controllers, Layout Controls, Fragmente, Datenmodelle und Data Binding, OData)")))),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);