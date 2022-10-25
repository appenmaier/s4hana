"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[7343],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=o(n),d=r,b=s["".concat(u,".").concat(d)]||s[d]||m[d]||l;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={title:"\xdcbungsaufgabe ABAP-11",description:""},i=void 0,p={unversionedId:"abap/exercises/abap-11",id:"abap/exercises/abap-11",title:"\xdcbungsaufgabe ABAP-11",description:"",source:"@site/docs/abap/exercises/abap-11.md",sourceDirName:"abap/exercises",slug:"/abap/exercises/abap-11",permalink:"/s4hana/abap/exercises/abap-11",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/exercises/abap-11.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe ABAP-11",description:""},sidebar:"abapSidebar",previous:{title:"\xdcbungsaufgabe ABAP-10",permalink:"/s4hana/abap/exercises/abap-10"},next:{title:"Quellcode",permalink:"/s4hana/abap/code/"}},u={},o=[{value:"M\xf6gliche Entwicklungsobjekte",id:"m\xf6gliche-entwicklungsobjekte",level:2},{value:"M\xf6gliche Eingabe",id:"m\xf6gliche-eingabe",level:2},{value:"M\xf6gliche Ausgabe",id:"m\xf6gliche-ausgabe",level:2}],c={toc:o};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Erstelle das ABAP-Programm ",(0,r.kt)("inlineCode",{parentName:"p"},"Z???_ABAP_11"),", welches eine einfach Kundenverwaltung erm\xf6glicht. Erstelle dazu entsprechende Dom\xe4nen, Datenelemente, Tabellentypen, transparente Tabellen und Funktionsbausteine."),(0,r.kt)("h2",{id:"m\xf6gliche-entwicklungsobjekte"},"M\xf6gliche Entwicklungsobjekte"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Entwicklungsobjekt"),(0,r.kt)("th",{parentName:"tr",align:null},"Typ"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z???_INT4"),(0,r.kt)("td",{parentName:"tr",align:null},"Dom\xe4ne")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z???_CHAR25"),(0,r.kt)("td",{parentName:"tr",align:null},"Dom\xe4ne")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z???_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Datenelement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z???_NAME"),(0,r.kt)("td",{parentName:"tr",align:null},"Datenelement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z???_CITY"),(0,r.kt)("td",{parentName:"tr",align:null},"Datenelement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z???_DISCOUNT"),(0,r.kt)("td",{parentName:"tr",align:null},"Datenelement")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z???CUSTOMER"),(0,r.kt)("td",{parentName:"tr",align:null},"Transparente Tabelle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z???_CUSTOMER"),(0,r.kt)("td",{parentName:"tr",align:null},"Strukturtyp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z???_CUSTOMERS"),(0,r.kt)("td",{parentName:"tr",align:null},"Tabellentyp")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z_???_INSERT_CUSTOMER"),(0,r.kt)("td",{parentName:"tr",align:null},"Funktionsbaustein")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z_???_UPDATE_CUSTOMER"),(0,r.kt)("td",{parentName:"tr",align:null},"Funktionsbaustein")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z_???_DELETE_CUSTOMER"),(0,r.kt)("td",{parentName:"tr",align:null},"Funktionsbaustein")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z_???_GET_CUSTOMER"),(0,r.kt)("td",{parentName:"tr",align:null},"Funktionsbaustein")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Z_???_GET_CUSTOMERS"),(0,r.kt)("td",{parentName:"tr",align:null},"Funktionsbaustein")))),(0,r.kt)("h2",{id:"m\xf6gliche-eingabe"},"M\xf6gliche Eingabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Ausf\xfchren (F8)\n\nKundenummer: 873\nName: Maier AG\nStadt: Frankfurt\nRabatt: 20\n\n[ ] Kunde anlegen\n[X] Kunde aktualisieren\n[ ] Kunde l\xf6schen\n[ ] Kunde ausgeben\n[ ] Alle Kunden ausgeben\n")),(0,r.kt)("h2",{id:"m\xf6gliche-ausgabe"},"M\xf6gliche Ausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Die Kundendaten zum Kunden 873 wurden erfolgreich aktualisiert.\n")))}m.isMDXComponent=!0}}]);