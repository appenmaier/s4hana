"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[355],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(b,o(o({ref:n},c),{},{components:t})):r.createElement(b,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8651:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={title:"ABAP-07",description:""},o=void 0,s={unversionedId:"exercises/abap/abap-07",id:"exercises/abap/abap-07",title:"ABAP-07",description:"",source:"@site/docs/exercises/abap/abap-07.md",sourceDirName:"exercises/abap",slug:"/exercises/abap/abap-07",permalink:"/s4hana/exercises/abap/abap-07",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/exercises/abap/abap-07.md",tags:[],version:"current",frontMatter:{title:"ABAP-07",description:""},sidebar:"exercisesSidebar",previous:{title:"ABAP-06",permalink:"/s4hana/exercises/abap/abap-06"},next:{title:"ABAP-08",permalink:"/s4hana/exercises/abap/abap-08"}},l={},p=[{value:"Eingabe",id:"eingabe",level:2},{value:"Ausgabe",id:"ausgabe",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Erstelle die Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"ZCL_???_HELPER")),(0,a.kt)("li",{parentName:"ol"},"Erstelle die statische Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"ZABAP_TRAVEL_WITH_CUSTOMER GET_TRAVEL_WITH_CUSTOMER(TRAVEL_ID: /DMO/TRAVEL_ID)"),", welche Reiseinformationen sowie die dazugeh\xf6rigen Kundeninformationen zu einer eingehenden Reisenummer liest und zur\xfcckgibt. Verwende zum Lesen der Reiseinformationen die statische Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"ZABAP_TRAVEL GET_TRAVEL(TRAVEL_ID: /DMO/TRAVEL_ID)")," der Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"ZCL_ABAP_HELPER")," und zum Lesen der Kundeninformationen die statische Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"ZABAP_CUSTOMER GET_CUSTOMER(CUSTOMER_ID: /DMO/CUSTOMER_ID)")," der Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"ZCL_ABAP_HELPER")),(0,a.kt)("li",{parentName:"ol"},"Erstelle das ABAP-Programm ",(0,a.kt)("inlineCode",{parentName:"li"},"Z???_ABAP_07"),", welches Reiseinformationen sowie die dazugeh\xf6rigen Kundeninformationen zu einer eingegebenen Reisenummer liest und auf dem Bildschirm ausgibt. Verwende zum Lesen der Informationen die statische Methode aus Aufgabenteil 2")),(0,a.kt)("h2",{id:"eingabe"},"Eingabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Ausf\xfchren (F8)\n\nReisenummer: 743\n")),(0,a.kt)("h2",{id:"ausgabe"},"Ausgabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Beginn der Reise: 30.09.2023\nEnde der Reise:   03.10.2023\nBeschreibung:     Kurztrip nach New York\nKundennummer:     67\nErster Name:      Hans\nLetzter Name:     Maier\nStadt:            Walldorf\nLand:             DE\n")))}u.isMDXComponent=!0}}]);