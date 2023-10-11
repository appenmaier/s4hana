"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[5431],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=t.createContext({}),c=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},u=function(e){var r=c(e.components);return t.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,f=b["".concat(p,".").concat(d)]||b[d]||l[d]||i;return n?t.createElement(f,s(s({ref:r},u),{},{components:n})):t.createElement(f,s({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=b;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}b.displayName="MDXCreateElement"},906:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(7462),a=(n(7294),n(3905));const i={title:"ABAP-09",description:""},s=void 0,o={unversionedId:"exercises/abap/abap-09",id:"exercises/abap/abap-09",title:"ABAP-09",description:"",source:"@site/docs/exercises/abap/abap-09.md",sourceDirName:"exercises/abap",slug:"/exercises/abap/abap-09",permalink:"/s4hana/exercises/abap/abap-09",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/exercises/abap/abap-09.md",tags:[],version:"current",frontMatter:{title:"ABAP-09",description:""},sidebar:"exercisesSidebar",previous:{title:"ABAP-08",permalink:"/s4hana/exercises/abap/abap-08"},next:{title:"ABAP-10",permalink:"/s4hana/exercises/abap/abap-10"}},p={},c=[{value:"Eingabe",id:"eingabe",level:2},{value:"Ausgabe",id:"ausgabe",level:2}],u={toc:c};function l(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Passe das ABAP-Programm ",(0,a.kt)("inlineCode",{parentName:"p"},"Z???_ABAP_09")," aus \xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"p",href:"/s4hana/exercises/abap/abap-08"},"ABAP-08")," wie folgt an: L\xf6sche vor der Ausgabe alle Reisen, bei denen der Beginn der Reise in der Vergangenheit liegt, erh\xf6he bei allen \xfcbrigen Reisen die Buchungsgeb\xfchren um 10% und sortiere die Reisen aufsteigend nach der Reisebeschreibung."),(0,a.kt)("h2",{id:"eingabe"},"Eingabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Ausf\xfchren (F8)\n\nKundenummer: 67\n")),(0,a.kt)("h2",{id:"ausgabe"},"Ausgabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Reisenummer, Beginn der Reise, Ende der Reise, Beschreibung, Buchungsgeb\xfchr\n987, 24.06.2024, 30.06.2024, Pfingsturlaub Griechenland, 44 EUR\n988, 07.08.2024, 21.08.2024, Sommerurlaub Australien, 77 AUD\n")))}l.isMDXComponent=!0}}]);