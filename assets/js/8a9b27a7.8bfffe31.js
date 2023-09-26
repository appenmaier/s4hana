"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[5996],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>m});var i=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},a=Object.keys(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)t=a[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=i.createContext({}),u=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},d=function(n){var e=u(n.components);return i.createElement(s.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},l=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,s=n.parentName,d=c(n,["components","mdxType","originalType","parentName"]),l=u(t),m=r,f=l["".concat(s,".").concat(m)]||l[m]||p[m]||a;return t?i.createElement(f,o(o({ref:e},d),{},{components:t})):i.createElement(f,o({ref:e},d))}));function m(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,o=new Array(a);o[0]=l;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=n,c.mdxType="string"==typeof n?n:r,o[1]=c;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}l.displayName="MDXCreateElement"},6881:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var i=t(7462),r=(t(7294),t(3905));const a={title:"Eingebaute Funktionen",description:"",sidebar_position:50,tags:[]},o=void 0,c={unversionedId:"abap-cds/documentation/built-in-functions",id:"abap-cds/documentation/built-in-functions",title:"Eingebaute Funktionen",description:"",source:"@site/docs/abap-cds/documentation/built-in-functions.md",sourceDirName:"abap-cds/documentation",slug:"/abap-cds/documentation/built-in-functions",permalink:"/s4hana/abap-cds/documentation/built-in-functions",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-cds/documentation/built-in-functions.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{title:"Eingebaute Funktionen",description:"",sidebar_position:50,tags:[]},sidebar:"abapCDSSidebar",previous:{title:"Arithmetische Ausdr\xfccke",permalink:"/s4hana/abap-cds/documentation/arithmetic-expressions"},next:{title:"Aggregatfunktionen",permalink:"/s4hana/abap-cds/documentation/aggregat-functions"}},s={},u=[],d={toc:u};function p(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,i.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Die ABAP CDS stellen verschiedene numerische Funktionen, Zeichenkettenfunktionen, Funktionen zur W\xe4hrungs- und Einheitenumrechnung sowie Datums- und Zeitfunktionen zur Verf\xfcgung."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"@AccessControl.authorizationCheck: #CHECK\n@EndUserText.label: 'Connection'\ndefine view entity Connection\n  as select from /dmo/connection\n{\n  key carrier_id                                               as CarrierId,\n  key connection_id                                            as ConnectionId,\n\n      /* Numerische Funktionen */\n      div(5, 3)                                                as Div1,\n      mod(5, 3)                                                as Mod1,\n      division(5, 3, 2)                                        as Division1,\n\n      /* Zeichenkettenfunktionen */\n      concat_with_space('Hello', 'World', 1)                   as ConcatWithSpace1,\n\n      /* W\xe4hrungs- und Einheitenumrechnung */\n      distance                                                 as OldDistance,\n      distance_unit                                            as OldDistanceUnit,\n      @Semantics.quantity.unitOfMeasure: 'ConvertedDistanceUnit'\n      unit_conversion(\n        quantity => distance,\n        source_unit => distance_unit,\n        target_unit => cast('KM' as abap.unit) )               as ConvertedDistance,\n      cast('KM' as abap.unit)                                  as ConvertedDistanceUnit,\n\n      /* Datums- und Zeitfunktionen */\n      dats_add_days(cast('20230101' as abap.dats), 14, 'FAIL') as DatsAddDays1\n}\n")))}p.isMDXComponent=!0}}]);