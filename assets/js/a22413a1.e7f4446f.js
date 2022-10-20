"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[5454],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,f=u["".concat(i,".").concat(m)]||u[m]||l[m]||o;return t?a.createElement(f,c(c({ref:n},d),{},{components:t})):a.createElement(f,c({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=u;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=t[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5955:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={title:"ABAP CDS-View ZABAP_Demo03",description:"Annotationen"},c=void 0,s={unversionedId:"abap-cds/code/cds-views/zabap_demo03",id:"abap-cds/code/cds-views/zabap_demo03",title:"ABAP CDS-View ZABAP_Demo03",description:"Annotationen",source:"@site/docs/abap-cds/code/cds-views/zabap_demo03.md",sourceDirName:"abap-cds/code/cds-views",slug:"/abap-cds/code/cds-views/zabap_demo03",permalink:"/s4hana/docs/abap-cds/code/cds-views/zabap_demo03",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-cds/code/cds-views/zabap_demo03.md",tags:[],version:"current",frontMatter:{title:"ABAP CDS-View ZABAP_Demo03",description:"Annotationen"},sidebar:"abapCDSSidebar",previous:{title:"ABAP CDS-View ZABAP_Demo02",permalink:"/s4hana/docs/abap-cds/code/cds-views/zabap_demo02"},next:{title:"ABAP CDS-View ZABAP_Demo04",permalink:"/s4hana/docs/abap-cds/code/cds-views/zabap_demo04"}},i={},p=[],d={toc:p};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@AbapCatalog.sqlViewName: 'ZABAPDEMO03'\n@AbapCatalog.compiler.compareFilter: true\n@AbapCatalog.preserveKey: true\n@AccessControl.authorizationCheck: #CHECK\n@EndUserText.label: 'Demo 3: Annotations'\ndefine view ZABAP_Demo03\n  as select from sflight\n{\n  key carrid     as Carrid,\n  key connid     as Connid,\n  key fldate     as Fldate,\n      @Semantics.amount.currencyCode: 'Currency'\n      price      as Price,\n      currency   as Currency,\n      planetype  as Planetype,\n      seatsmax   as Seatsmax,\n      seatsocc   as Seatsocc,\n      @Semantics.amount.currencyCode: 'Currency'\n      paymentsum as Paymentsum,\n      seatsmax_b as SeatsmaxB,\n      seatsocc_b as SeatsoccB,\n      seatsmax_f as SeatsmaxF,\n      seatsocc_f as SeatsoccF\n}\n// f\xfcr Betr\xe4ge und W\xe4hrungen: @Semantics.amount.currencyCode: '<W\xe4hrungsfeld>'\n// f\xfcr Mengen und Einheiten: @Semantics.quantity.unitOfMeasure: '<Einheitenfeld>'\n")))}l.isMDXComponent=!0}}]);