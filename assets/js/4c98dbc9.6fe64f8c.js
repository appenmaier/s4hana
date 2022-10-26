"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[7659],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6551:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Das SAP Flugdatenmodell",description:"",sidebar_position:10,tags:[]},o=void 0,l={unversionedId:"introduction/additional-material/sap-flightmodel",id:"introduction/additional-material/sap-flightmodel",title:"Das SAP Flugdatenmodell",description:"",source:"@site/docs/introduction/additional-material/sap-flightmodel.md",sourceDirName:"introduction/additional-material",slug:"/introduction/additional-material/sap-flightmodel",permalink:"/s4hana/introduction/additional-material/sap-flightmodel",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/introduction/additional-material/sap-flightmodel.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Das SAP Flugdatenmodell",description:"",sidebar_position:10,tags:[]},sidebar:"introductionSidebar",previous:{title:"Zusatzmaterial",permalink:"/s4hana/introduction/additional-material/"},next:{title:"SAP Namensrichtlinien",permalink:"/s4hana/introduction/additional-material/sap-naming-conventions"}},d={},c=[{value:"ER-Modell (Ausschnitt)",id:"er-modell-ausschnitt",level:2},{value:"Datenbanktabellen",id:"datenbanktabellen",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Das SAP Flugdatenmodell wird h\xe4ufig in Schulungen und ABAP-B\xfcchern als Demo-Datenmodell verwendet. Zum Flugdatenmodell geh\xf6rt das ABAP Programm ",(0,r.kt)("inlineCode",{parentName:"p"},"SAPBC_ DATA_GENERATOR"),", mit welchem die Datenbanktabellen des Flugdatenmodells bef\xfcllt werden k\xf6nnen."),(0,r.kt)("h2",{id:"er-modell-ausschnitt"},"ER-Modell (Ausschnitt)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/194999498-0852d296-5151-4d36-bbd9-250d3008b2d6.png",alt:"image"})),(0,r.kt)("h2",{id:"datenbanktabellen"},"Datenbanktabellen"),(0,r.kt)("p",null,"to be done"),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Alle Datenbanktabellen und Datentypen des Flugdatenmodells liegen im Paket 'SAPBC_DATAMODEL`.")))}u.isMDXComponent=!0}}]);