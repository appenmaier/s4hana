"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[4569],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),d=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||o;return t?i.createElement(f,a(a({ref:n},l),{},{components:t})):i.createElement(f,a({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8289:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const o={title:"Assoziationen",description:"",sidebar_position:80,tags:[]},a=void 0,s={unversionedId:"documentation/abap-cds/associations",id:"documentation/abap-cds/associations",title:"Assoziationen",description:"",source:"@site/docs/documentation/abap-cds/associations.md",sourceDirName:"documentation/abap-cds",slug:"/documentation/abap-cds/associations",permalink:"/s4hana/documentation/abap-cds/associations",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/documentation/abap-cds/associations.md",tags:[],version:"current",sidebarPosition:80,frontMatter:{title:"Assoziationen",description:"",sidebar_position:80,tags:[]},sidebar:"documentationSidebar",previous:{title:"Views mit Parametern",permalink:"/s4hana/documentation/abap-cds/parameters"},next:{title:"View-Erweiterungen",permalink:"/s4hana/documentation/abap-cds/view-extensions"}},c={},d=[{value:"Definition von Assoziationen",id:"definition-von-assoziationen",level:2},{value:"Verwendung von Assoziationen",id:"verwendung-von-assoziationen",level:2}],l={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Mit Hilfe von Assoziationen k\xf6nnen Beziehungen zwischen zwei Entit\xe4ten festgelegt werden. Technisch gesehen handelt es sich bei Assoziationen dabei um Left Outer Joins, die allerdings nur bei Bedarf umgesetzt werden (",(0,r.kt)("em",{parentName:"p"},"Join On-Demand"),")."),(0,r.kt)("h2",{id:"definition-von-assoziationen"},"Definition von Assoziationen"),(0,r.kt)("p",null,"Nach der Definition einer Assoziation wird diese durch Angabe in der Feldliste exponiert, also zur Verf\xfcgung gestellt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"@AccessControl.authorizationCheck: #CHECK\n@EndUserText.label: 'Connection'\ndefine view entity I_Connection\n  as select from /dmo/connection as Connection\n  association [0..*] to /dmo/flight  as _Flights on  $projection.carrier_id    = _Flights.carrier_id\n                                                 and $projection.connection_id = _Flights.connection_id\n  association [1..1] to /dmo/carrier as _Carrier on  $projection.carrier_id = _Carrier.carrier_id\n{\n  key Connection.carrier_id    as CarrierId,\n  key Connection.connection_id as ConnectionId,\n      airport_from_id          as AirportFromId,\n      airport_to_id            as AirportToId,\n\n      /* Associations */\n      _Flights,\n      _Carrier\n}\n")),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Die Kardinalit\xe4t wird in der Form ",(0,r.kt)("em",{parentName:"p"},"[Untere Grenze..Obere Grenze]")," angegeben.")),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Zur besseren Unterscheidung von Feldern und Assoziationen sollten letztgenannte immer mit einem Unterstrich beginnen.")),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In der Join-Bedingung kann \xfcber die Anweisung ",(0,r.kt)("inlineCode",{parentName:"p"},"$projection")," auf Elemente der Feldliste zugegriffen werden.")),(0,r.kt)("h2",{id:"verwendung-von-assoziationen"},"Verwendung von Assoziationen"),(0,r.kt)("p",null,"\xdcber sogenannte Pfadausdr\xfccke kann auf exponierte Assoziationen zugegriffen werden. Pfadausr\xfccke setzen sich aus dem Namen der Assoziation sowie dem entsprechenden Feld zusammen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"@AccessControl.authorizationCheck: #CHECK\n@EndUserText.label: 'Connection with Carrier'\ndefine view entity I_ConnectionWithCarrier\n  as select from I_Connection as Connection\n{\n  key CarrierId,\n  key ConnectionId,\n      AirportFromId,\n      AirportToId,\n      _Carrier.carrier_name as CarrierName\n\n      /* Associations */\n      _Flights\n}\n")),(0,r.kt)("p",null,"In Open SQL werden Pfadausdr\xfccke durch ",(0,r.kt)("inlineCode",{parentName:"p"},"\\")," eingeleitet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap",metastring:"shwoLineNumbers",shwoLineNumbers:!0},"SELECT FROM I_Connection\n  FIELDS CarrierId, ConnectionId, AirportFromId, AirportToId, \\_Carrier-carrier_name AS CarrierName\n  INTO TABLE @DATA(connections_with_carrier).\n")))}p.isMDXComponent=!0}}]);