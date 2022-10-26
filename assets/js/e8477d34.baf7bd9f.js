"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[4066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Mathematische Operatoren und Funktionen",description:"",sidebar_position:40,tags:[]},o=void 0,u={unversionedId:"abap/documentation/calculations",id:"abap/documentation/calculations",title:"Mathematische Operatoren und Funktionen",description:"",source:"@site/docs/abap/documentation/calculations.md",sourceDirName:"abap/documentation",slug:"/abap/documentation/calculations",permalink:"/s4hana/abap/documentation/calculations",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/documentation/calculations.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Mathematische Operatoren und Funktionen",description:"",sidebar_position:40,tags:[]},sidebar:"abapSidebar",previous:{title:"Datenobjekte",permalink:"/s4hana/abap/documentation/data-objects"},next:{title:"Zeichenketten und Zeichenketten-Templates",permalink:"/s4hana/abap/documentation/strings"}},l={},s=[],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ABAP kennt mathematische Operatoren f\xfcr die Addition, die Subtraktion, die Multiplikation, die Division, die Potenz, die ganzzahlige Division sowie den Divisionsrest (Modulo). Zudem besitzt ABAP f\xfcr jede Grundrechenart einen dazugeh\xf6rigen Zuweisungsoperatoren."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},'DATA result TYPE p LENGTH 16 DECIMALS 2.\n\nresult = 5 + 3. "Addition\nresult = 5 - 3. "Subtraktion\nresult = 5 * 3. "Multiplikation\nresult = 5 / 3. "Division\nresult = 5 ** 3. "Potenz\nresult = 5 DIV 3. "Ganzzahlige Division\nresult = 5 MOD 3. "Divisionsrest\nresult += 3.\nresult -= 3.\nresult *= 3.\nresult /= 3.\n')),(0,a.kt)("p",null,"F\xfcr weitere mathematische Berechnungen stellt ABAP eine Reihe eingebauter Funktionen zur Verf\xfcgung:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Allgemeine numerische Funktionen"),(0,a.kt)("li",{parentName:"ul"},"Ganzzahlige Potenzfunktion"),(0,a.kt)("li",{parentName:"ul"},"Numerische Extremwertfunktionen"),(0,a.kt)("li",{parentName:"ul"},"Gleitpunktfunktionen"),(0,a.kt)("li",{parentName:"ul"},"Rundungsfunktionen")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},'DATA result TYPE p LENGTH 16 DECIMALS 2.\n\nresult = abs( -1 ). "Betrag\nresult = ipow( base = 4 exp = 2 ). "Potenz\nresult = nmax( val1 = 3 val2 = 5 ). "Maximalwert\nresult = cos( \'6.2\' ). "Kosinus\nresult = round( val = \'3.426\' dec = 1 ). "Rundungsfunktion\n')))}p.isMDXComponent=!0}}]);