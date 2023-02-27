"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[6205],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,g=m["".concat(c,".").concat(d)]||m[d]||l[d]||i;return t?a.createElement(g,o(o({ref:n},u),{},{components:t})):a.createElement(g,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4520:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const i={title:"Aggregatfunktionen",description:"",sidebar_position:50,tags:[]},o=void 0,s={unversionedId:"abap-cds/documentation/aggregat-functions",id:"abap-cds/documentation/aggregat-functions",title:"Aggregatfunktionen",description:"",source:"@site/docs/abap-cds/documentation/aggregat-functions.md",sourceDirName:"abap-cds/documentation",slug:"/abap-cds/documentation/aggregat-functions",permalink:"/s4hana/abap-cds/documentation/aggregat-functions",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-cds/documentation/aggregat-functions.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Aggregatfunktionen",description:"",sidebar_position:50,tags:[]},sidebar:"abapCDSSidebar",previous:{title:"Arithmetische Ausdr\xfccke",permalink:"/s4hana/abap-cds/documentation/arithmetic-expressions"},next:{title:"Eingebaute Funktionen",permalink:"/s4hana/abap-cds/documentation/built-in-functions"}},c={},p=[],u={toc:p};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Die ABAP CDS unterst\xfctzen die klassischen Aggregatfunktionen ",(0,r.kt)("inlineCode",{parentName:"p"},"count"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sum"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"avg"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"min")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"max"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@AbapCatalog.sqlViewName: 'ABAPCDSVIEW'\n@AbapCatalog.compiler.compareFilter: true\n@AbapCatalog.preserveKey: true\n@AccessControl.authorizationCheck: #CHECK\n@EndUserText.label: 'ABAP CDS View'\ndefine view AbapCdsView\n  as select from sflight\n{\n  carrid                                               as CarrierId,\n  connid                                               as ConnectionId,\n  count(*)                                             as NumberOfFlights,\n  count(distinct planetype)                            as NumberOfDifferentPlanetypes,\n  sum(seatsocc)                                        as TotalOccupiedSeats,\n  sum(paymentsum)                                      as TotalPaymentsum,\n  avg(price as abap.dec(16,2))                         as AveragePrice,\n  min(seatsocc)                                        as MinimumOccupiedSeats,\n  max(seatsocc)                                        as MaximumOccupiedSeats,\n  sum(case when seatsocc = seatsmax then 1 else 0 end) as NumberOfBookedUpFlights,\n  sum(case when seatsocc = 0 then 1 else 0 end)        as NumberOfEmptyFlights\n}\nwhere\n  price < 1000\ngroup by\n  carrid,\n  connid\nhaving\n  sum( paymentsum ) > 4500000\n")),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Alle nichtaggregierten Felder der Feldliste m\xfcssen nach dem Schl\xfcsselwort ",(0,r.kt)("inlineCode",{parentName:"p"},"group by")," aufgef\xfchrt werden.")),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Die aggregierten Daten k\xf6nnen mit Hilfe von ",(0,r.kt)("inlineCode",{parentName:"p"},"having")," gefiltert werden.")))}l.isMDXComponent=!0}}]);