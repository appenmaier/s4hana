"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[1856],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>u});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),p=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(i.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(t),u=n,b=m["".concat(i,".").concat(u)]||m[u]||l[u]||s;return t?r.createElement(b,c(c({ref:a},d),{},{components:t})):r.createElement(b,c({ref:a},d))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,c=new Array(s);c[0]=m;var o={};for(var i in a)hasOwnProperty.call(a,i)&&(o[i]=a[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<s;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9168:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=t(7462),n=(t(7294),t(3905));const s={title:"ZABAP_Demo05",description:"Arithmetische Ausdr\xfccke und Funktionen"},c=void 0,o={unversionedId:"abap-cds/code/cds-views/zabap_demo05",id:"abap-cds/code/cds-views/zabap_demo05",title:"ZABAP_Demo05",description:"Arithmetische Ausdr\xfccke und Funktionen",source:"@site/docs/abap-cds/code/cds-views/zabap_demo05.md",sourceDirName:"abap-cds/code/cds-views",slug:"/abap-cds/code/cds-views/zabap_demo05",permalink:"/s4hana/docs/abap-cds/code/cds-views/zabap_demo05",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-cds/code/cds-views/zabap_demo05.md",tags:[],version:"current",frontMatter:{title:"ZABAP_Demo05",description:"Arithmetische Ausdr\xfccke und Funktionen"},sidebar:"abapCDSSidebar",previous:{title:"ZABAP_Demo04",permalink:"/s4hana/docs/abap-cds/code/cds-views/zabap_demo04"},next:{title:"ZABAP_Demo06",permalink:"/s4hana/docs/abap-cds/code/cds-views/zabap_demo06"}},i={},p=[],d={toc:p};function l(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"@AbapCatalog.sqlViewName: 'ZABAPDEMO05'\n@AbapCatalog.compiler.compareFilter: true\n@AbapCatalog.preserveKey: true\n@AccessControl.authorizationCheck: #CHECK\n@EndUserText.label: 'Demo 5: Arithmetic Expressions and Type Casts'\ndefine view ZABAP_Demo05\n  as select from sflight\n{\n  seatsmax                                                              as MaxSeatsEconomy,\n  seatsocc                                                              as OccupiedSeatsEconomy,\n  seatsmax - seatsocc                                                   as FreeSeatsEconomy,\n  seatsmax_b                                                            as MaxSeatsBusiness,\n  seatsmax_f                                                            as MaxSeatsFirst,\n  seatsmax + seatsmax_b + seatsmax_f                                    as MaxSeatsTotal,\n  price                                                                 as OldPrice,\n  price * 2                                                             as DoublePrice,\n  cast(price as abap.fltp) * 1.1                                        as NewPrice,\n  ( cast(seatsocc as abap.fltp) / cast(seatsmax as abap.fltp) ) * 100.0 as OccupancyRate,\n  cast(2 as abap.dec(16,2))                                             as Decimal1,\n  'LH'                                                                  as Char1,\n  cast('LH' as s_carr_id)                                               as CarrierId\n}\n")))}l.isMDXComponent=!0}}]);