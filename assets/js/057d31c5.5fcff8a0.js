"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Arithmetische Ausdr\xfccke",description:"",sidebar_position:30,tags:[]},o=void 0,s={unversionedId:"documentation/abap-cds/arithmetic-expressions",id:"documentation/abap-cds/arithmetic-expressions",title:"Arithmetische Ausdr\xfccke",description:"",source:"@site/docs/documentation/abap-cds/arithmetic-expressions.md",sourceDirName:"documentation/abap-cds",slug:"/documentation/abap-cds/arithmetic-expressions",permalink:"/s4hana/documentation/abap-cds/arithmetic-expressions",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/documentation/abap-cds/arithmetic-expressions.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Arithmetische Ausdr\xfccke",description:"",sidebar_position:30,tags:[]},sidebar:"documentationSidebar",previous:{title:"Verzweigungen",permalink:"/s4hana/documentation/abap-cds/cases"},next:{title:"Eingebaute Funktionen",permalink:"/s4hana/documentation/abap-cds/built-in-functions"}},c={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"F\xfcr arithmetische Ausdr\xfccke k\xf6nnen in den ABAP CDS die Operatoren ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"-"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"*")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," verwendet werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"@AccessControl.authorizationCheck: #CHECK\n@EndUserText.label: 'Flight'\ndefine view entity I_Flight\n  as select from /dmo/flight\n{\n  key carrier_id                                                                 as CarrierId,\n  key connection_id                                                              as ConnectionId,\n  key flight_date                                                                as FlightDate,\n      seats_max                                                                  as SeatsMax,\n      seats_occupied                                                             as SeatsOccupied,\n      seats_max - seats_occupied                                                 as SeatsFree,\n      price                                                                      as OldPrice,\n      price * 2                                                                  as DoublePrice,\n      cast(price as abap.fltp) * 1.1                                             as NewPrice,\n      100 * ( cast(seats_occupied as abap.fltp) / cast(seats_max as abap.fltp) ) as OccupancyRate,\n}\n")),(0,a.kt)("admonition",{title:"Hinweis",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Da der Divisionsoperator ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," nur Gleitkommazahlen unterst\xfctzt, muss gegebenenfalls eine Typumwandlung mit Hilfe der cast-Operation erfolgen.")))}u.isMDXComponent=!0}}]);