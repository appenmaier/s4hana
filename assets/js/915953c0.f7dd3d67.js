"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[709],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(b,o(o({ref:n},p),{},{components:t})):r.createElement(b,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},861:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={title:"Allgemeine Syntax",description:"",sidebar_position:10,tags:[]},o=void 0,s={unversionedId:"documentation/abap/syntax",id:"documentation/abap/syntax",title:"Allgemeine Syntax",description:"",source:"@site/docs/documentation/abap/syntax.md",sourceDirName:"documentation/abap",slug:"/documentation/abap/syntax",permalink:"/s4hana/documentation/abap/syntax",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/documentation/abap/syntax.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Allgemeine Syntax",description:"",sidebar_position:10,tags:[]},sidebar:"documentationSidebar",previous:{title:"ABAP",permalink:"/s4hana/documentation/abap/"},next:{title:"Datentypen",permalink:"/s4hana/documentation/abap/data-types"}},c={},l=[],p={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ABAP-Quellcode besteht aus einzelnen Anweisungen. Diese d\xfcrfen beliebig einger\xfcckt werden, k\xf6nnen mehrere Zeilen lang sein und m\xfcssen mit einem Punkt abgeschlossen werden. W\xf6rter einer Anweisung m\xfcssen durch mindestens ein Leerzeichen getrennt werden."),(0,a.kt)("p",null,"Zeilen, die mit einem Stern beginnen, werden von Laufzeitsystem als Kommentarzeile erkannt und ignoriert. Doppelte Anf\xfchrungszeichen kennzeichnen den Rest einer Zeile als Kommentar."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap",metastring:"showLineNumbers",showLineNumbers:!0},'DATA text TYPE c LENGTH 25. "Deklaration\ntext = \'Ein Ring sie zu knechten\'. "Wertzuweisung\nWRITE text. "Ausgabe\n')),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"ABAP unterscheidet nicht zwischen Gro\xdf- und Kleinschreibung.")))}u.isMDXComponent=!0}}]);