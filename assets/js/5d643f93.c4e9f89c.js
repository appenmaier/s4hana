"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[5798],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>g});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=r.createContext({}),p=function(e){var n=r.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):u(u({},n),e)),a},c=function(e){var n=p(e.components);return r.createElement(o.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),g=t,d=b["".concat(o,".").concat(g)]||b[g]||l[g]||i;return a?r.createElement(d,u(u({ref:n},c),{},{components:a})):r.createElement(d,u({ref:n},c))}));function g(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,u=new Array(i);u[0]=b;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:t,u[1]=s;for(var p=2;p<i;p++)u[p]=a[p];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},4941:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(7462),t=(a(7294),a(3905));const i={title:"\xdcbungsaufgabe ABAP-09",description:""},u=void 0,s={unversionedId:"abap/exercises/abap-09",id:"abap/exercises/abap-09",title:"\xdcbungsaufgabe ABAP-09",description:"",source:"@site/docs/abap/exercises/abap-09.md",sourceDirName:"abap/exercises",slug:"/abap/exercises/abap-09",permalink:"/s4hana/abap/exercises/abap-09",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/exercises/abap-09.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe ABAP-09",description:""},sidebar:"abapSidebar",previous:{title:"\xdcbungsaufgabe ABAP-08",permalink:"/s4hana/abap/exercises/abap-08"},next:{title:"\xdcbungsaufgabe ABAP-10",permalink:"/s4hana/abap/exercises/abap-10"}},o={},p=[{value:"Eingabe",id:"eingabe",level:2},{value:"Ausgabe",id:"ausgabe",level:2}],c={toc:p};function l(e){let{components:n,...a}=e;return(0,t.kt)("wrapper",(0,r.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Passe das ABAP-Programm ",(0,t.kt)("inlineCode",{parentName:"p"},"Z???_ABAP_09")," aus \xdcbungsaufgabe ",(0,t.kt)("a",{parentName:"p",href:"/s4hana/abap/exercises/abap-08"},"ABAP-08")," wie folgt an: L\xf6sche vor der\nAusgabe alle Buchungen, bei denen das Flugdatum vor einem eingegebenen Datum liegt, \xe4ndere bei allen Fl\xfcgen das Flugdatum ab (neues Flugdatum = altes Flugdatum + 3 Tage) und sortiere die Buchungen aufsteigend nach der Buchungsnummer."),(0,t.kt)("h2",{id:"eingabe"},"Eingabe"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"Ausf\xfchren (F8)\n\nKundenummer: 1\nDeadline:    01.01.2020\n")),(0,t.kt)("h2",{id:"ausgabe"},"Ausgabe"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"ID der Fluggesellschaft, Verbindungsnummer, Flugdatum, Buchungsnummer\nUA, 3517, 27.04.2021, 9\nLH, 0400, 03.04.2022, 84\n")))}l.isMDXComponent=!0}}]);