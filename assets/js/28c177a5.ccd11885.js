"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[3077],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(t),c=r,b=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return t?a.createElement(b,l(l({ref:n},p),{},{components:t})):a.createElement(b,l({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,l[1]=u;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const i={title:"\xdcbungsaufgabe ABAP-07",description:""},l=void 0,u={unversionedId:"abap/exercises/abap-07",id:"abap/exercises/abap-07",title:"\xdcbungsaufgabe ABAP-07",description:"",source:"@site/docs/abap/exercises/abap-07.md",sourceDirName:"abap/exercises",slug:"/abap/exercises/abap-07",permalink:"/s4hana/docs/abap/exercises/abap-07",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/exercises/abap-07.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe ABAP-07",description:""},sidebar:"abapSidebar",previous:{title:"\xdcbungsaufgabe ABAP-06",permalink:"/s4hana/docs/abap/exercises/abap-06"},next:{title:"\xdcbungsaufgabe ABAP-08",permalink:"/s4hana/docs/abap/exercises/abap-08"}},o={},s=[{value:"Schnittstellendefinition des Funktionsbausteins <code>Z_???_GET_BOOKING_WITH_CUSTOMER</code>",id:"schnittstellendefinition-des-funktionsbausteins-z__get_booking_with_customer",level:2},{value:"Eingabe",id:"eingabe",level:2},{value:"Ausgabe",id:"ausgabe",level:2}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Erstelle die Funktionsgruppe ",(0,r.kt)("inlineCode",{parentName:"li"},"Z???_CUSTOMER")),(0,r.kt)("li",{parentName:"ol"},"Erstelle mit Hilfe der abgebildeten Schnittstellendefinition den Funktionsbaustein ",(0,r.kt)("inlineCode",{parentName:"li"},"Z_???_GET_BOOKING_WITH_CUSTOMER"),", welcher Buchungsinformationen (Kundennummer, Kundentyp) sowie die dazugeh\xf6rigen Kundeninformationen (Name, Stadt, Rabatt) zu einer\neingehenden Buchung liest und zur\xfcckgibt. Verwende zum Lesen der Buchungsinformationen den Funktionsbaustein ",(0,r.kt)("inlineCode",{parentName:"li"},"Z_ABAP_GET_BOOKING")," und zum Lesen der Kundeninformationen den Funktionsbaustein ",(0,r.kt)("inlineCode",{parentName:"li"},"Z_ABAP_GET_CUSTOMER")),(0,r.kt)("li",{parentName:"ol"},"Erstelle das ABAP-Programm ",(0,r.kt)("inlineCode",{parentName:"li"},"Z???_ABAP_07"),", welches Buchungsinformationen (Kundennummer, Kundentyp) sowie die dazugeh\xf6rigen Kundeninformationen (Name, Stadt, Rabatt) zu einer eingegebenen Buchung liest und auf dem Bildschirm ausgibt. Verwende zum Lesen der\nInformationen den Funktionsbaustein aus Aufgabenteil 2")),(0,r.kt)("h2",{id:"schnittstellendefinition-des-funktionsbausteins-z__get_booking_with_customer"},"Schnittstellendefinition des Funktionsbausteins ",(0,r.kt)("inlineCode",{parentName:"h2"},"Z_???_GET_BOOKING_WITH_CUSTOMER")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Datentyp"),(0,r.kt)("th",{parentName:"tr",align:null},"Bezeichnung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"I_CARRIER_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"S_CARR_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"ID der Fluggesellschaft")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"I_CONNECTION_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"S_CONN_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Verbindungsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"I_FLIGHT_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"S_DATE"),(0,r.kt)("td",{parentName:"tr",align:null},"Flugdatum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"I_BOOKING_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"S_BOOK_ID"),(0,r.kt)("td",{parentName:"tr",align:null},"Buchungsnummer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E_BOOKING_WITH_CUSTOMER"),(0,r.kt)("td",{parentName:"tr",align:null},"ZABAP_BOOKING_WITH_CUSTOMER"),(0,r.kt)("td",{parentName:"tr",align:null},"Buchung mit Kundeninformationen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NO_DATA"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"Ausnahme: keine Daten")))),(0,r.kt)("h2",{id:"eingabe"},"Eingabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Ausf\xfchren (F8)\n\nID der Fluggesellschaft: LH\nVerbindungsnummer:       0400\nFlugdatum:               31.03.2022\nBuchungsnummer:          84\n")),(0,r.kt)("h2",{id:"ausgabe"},"Ausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Kundennummer: 1\nKundentyp: B\nName: SAP SE\nStadt: Walldorf\nRabatt: 10%\n")))}d.isMDXComponent=!0}}]);