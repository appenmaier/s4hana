"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[1224],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6734:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const i={title:"Strukturen",description:"",sidebar_position:100,tags:[]},a=void 0,u={unversionedId:"documentation/abap/structures",id:"documentation/abap/structures",title:"Strukturen",description:"",source:"@site/docs/documentation/abap/structures.md",sourceDirName:"documentation/abap",slug:"/documentation/abap/structures",permalink:"/s4hana/documentation/abap/structures",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/documentation/abap/structures.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Strukturen",description:"",sidebar_position:100,tags:[]},sidebar:"documentationSidebar",previous:{title:"Klassenmethoden",permalink:"/s4hana/documentation/abap/class-methods"},next:{title:"Interne Tabellen",permalink:"/s4hana/documentation/abap/internal-tables"}},c={},l=[{value:"Definition von globalen Strukturtypen",id:"definition-von-globalen-strukturtypen",level:2},{value:"Deklaration von Strukturen",id:"deklaration-von-strukturen",level:2},{value:"Zugriff auf Strukturkomponenten",id:"zugriff-auf-strukturkomponenten",level:2},{value:"Kopieren von Strukturen",id:"kopieren-von-strukturen",level:2}],p={toc:l};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Strukturen fassen logisch zusammenh\xe4ngende Werte in einem Datenobjekt zusammen."),(0,o.kt)("h2",{id:"definition-von-globalen-strukturtypen"},"Definition von globalen Strukturtypen"),(0,o.kt)("p",null,"Globale Strukturtypen werden mit Hilfe der Data Definition Language (DDL) der ABAP Core Data Services (ABAP CDS) definiert."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"@EndUserText.label : 'Connection'\n@AbapCatalog.enhancementCategory : #NOT_EXTENSIBLE\ndefine structure connection {\n  carrier_id      : /dmo/carrier_id;\n  connection_id   : /dmo/connection_id;\n  airport_from_id : /dmo/airport_from_id;\n  airport_to_id   : /dmo/airport_to_id;\n}\n")),(0,o.kt)("h2",{id:"deklaration-von-strukturen"},"Deklaration von Strukturen"),(0,o.kt)("p",null,"Strukturen werden, wie elementare Datenobjekte, mit der DATA-Anweisung deklariert."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-abap",metastring:"showLineNumbers",showLineNumbers:!0},"DATA connection TYPE connection.\n")),(0,o.kt)("h2",{id:"zugriff-auf-strukturkomponenten"},"Zugriff auf Strukturkomponenten"),(0,o.kt)("p",null,"Mit dem Komponentenselektor ",(0,o.kt)("inlineCode",{parentName:"p"},"-")," kann auf die einzelnen Komponenten einer Struktur zugegriffen werden (lesend als auch schreibend)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-abap",metastring:"showLineNumbers",showLineNumbers:!0},"DATA connection TYPE connection.\n\nconnection-carrier_id = 'LH'.\nconnection-connection_id = '0400'.\n\nWRITE: connection-carrier_id, connection-connection_id.\n")),(0,o.kt)("h2",{id:"kopieren-von-strukturen"},"Kopieren von Strukturen"),(0,o.kt)("p",null,"Strukturen mit dem gleichen Strukturtypen k\xf6nnen \xfcber den Zuweisungsoperator ",(0,o.kt)("inlineCode",{parentName:"p"},"=")," kopiert werden. Der Operator ",(0,o.kt)("inlineCode",{parentName:"p"},"CORRESPONDING")," erm\xf6glicht das komponentenweise Kopieren von Inhalten einer Quellstruktur in eine Zielstruktur."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-abap",metastring:"showLineNumbers",showLineNumbers:!0},'DATA flight TYPE flight.\nDATA connection TYPE connection.\nDATA connection2 TYPE connection.\nDATA flight_extended TYPE flight_extended.\n\n"Kopieren typgleicher Strukturen\nconnection2 = connection.\n\n"Kopieren namensgleicher Komponenten\nflight_extended = CORRESPONDING #( flight ).\nflight_extended = CORRESPONDING #( BASE ( flight_extended ) connection ).\n')),(0,o.kt)("admonition",{title:"Hinweis",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Beim Kopieren mit ",(0,o.kt)("inlineCode",{parentName:"p"},"CORRESPONDING")," werden nur gleichnamige Komponenten ber\xfccksichtigt. Gegebenenfalls findet eine Typkonvertierung statt.")))}s.isMDXComponent=!0}}]);