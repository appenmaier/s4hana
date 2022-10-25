"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[5302],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(k,o(o({ref:n},s),{},{components:t})):r.createElement(k,o({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={title:"Zeichenketten und Zeichenketten-Templates",description:"",sidebar_position:50,tags:[]},o=void 0,c={unversionedId:"abap/documentation/strings",id:"abap/documentation/strings",title:"Zeichenketten und Zeichenketten-Templates",description:"",source:"@site/docs/abap/documentation/strings.md",sourceDirName:"abap/documentation",slug:"/abap/documentation/strings",permalink:"/s4hana/abap/documentation/strings",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/documentation/strings.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Zeichenketten und Zeichenketten-Templates",description:"",sidebar_position:50,tags:[]},sidebar:"abapSidebar",previous:{title:"Mathematische Operatoren und Funktionen",permalink:"/s4hana/abap/documentation/calculations"},next:{title:"Fallunterscheidungen",permalink:"/s4hana/abap/documentation/cases"}},l={},p=[],s={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Zeichenketten werden in ABAP durch den ABAP-Standardtyp ",(0,a.kt)("inlineCode",{parentName:"p"},"STRING")," sowie den einfachen Hochkommata realisiert. Zeichenketten-Templates erm\xf6glichen in ABAP die Verwendung von Ausdr\xfccken und Steuerzeichen in Zeichenketten und werden mit den Trennstrichen realisiert.\nSowohl Zeichenketten als auch Zeichenketten-Templates k\xf6nnen mit dem Verkettungsoperator ",(0,a.kt)("inlineCode",{parentName:"p"},"&&")," oder dem Zuweisungsoperator ",(0,a.kt)("inlineCode",{parentName:"p"},"&&=")," verkn\xfcpft werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},"DATA text TYPE string VALUE 'Winter'.\nDATA text2 TYPE string VALUE 'is'.\nDATA text3 TYPE string.\n\n* Verkn\xfcpfung mehrerer Zeichenketten\ntext3 = text && | | && text2.\ntext3 &&= | Coming|.\n\n* Verwenden eines Zeichenketten-Templates\ntext3 = |{ text } { text2 } Coming|.\n")),(0,a.kt)("admonition",{title:"Hinweis",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},'Nachgestellte Leerzeichen werden vom Compiler "geschluckt".')),(0,a.kt)("p",null,"Die Anweisung ",(0,a.kt)("inlineCode",{parentName:"p"},"SPLIT")," erm\xf6glicht das Aufteilen einer Zeichenkette. F\xfcr weitere Operationen stehen eine Reihe eingebauter Funktionen zur Verf\xfcgung:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"L\xe4ngenfunktionen"),(0,a.kt)("li",{parentName:"ul"},"Z\xe4hlfunktionen"),(0,a.kt)("li",{parentName:"ul"},"Suchfunktionen"),(0,a.kt)("li",{parentName:"ul"},"Verdichtungsfunktionen"),(0,a.kt)("li",{parentName:"ul"},"Ersetzungsfunktionen"),(0,a.kt)("li",{parentName:"ul"},"Verschiebefunktionen"),(0,a.kt)("li",{parentName:"ul"},"Gro\xdf- und Kleinschreibungsfunktionen")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},"DATA text TYPE string VALUE 'Schnupper Gas B\xf6sewicht'.\nDATA result TYPE i.\n\nresult = strlen( text ). \"Zeichenkettenl\xe4nge\nresult = find( val = text sub = 'a' ). \"Suchen\ntext = to_upper( text ). \"Umsetzen\n")))}u.isMDXComponent=!0}}]);