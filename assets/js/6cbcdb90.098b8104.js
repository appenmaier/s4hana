"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[3900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||l[m]||o;return n?a.createElement(f,c(c({ref:t},d),{},{components:n})):a.createElement(f,c({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={title:"ABAP CDS-View ZABAP_Demo03",description:""},c=void 0,s={unversionedId:"abap-cds/code/cds_view_zabap_demo03",id:"abap-cds/code/cds_view_zabap_demo03",title:"ABAP CDS-View ZABAP_Demo03",description:"",source:"@site/docs/abap-cds/code/cds_view_zabap_demo03.md",sourceDirName:"abap-cds/code",slug:"/abap-cds/code/cds_view_zabap_demo03",permalink:"/s4hana/docs/abap-cds/code/cds_view_zabap_demo03",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-cds/code/cds_view_zabap_demo03.md",tags:[],version:"current",frontMatter:{title:"ABAP CDS-View ZABAP_Demo03",description:""},sidebar:"abapCDSSidebar",previous:{title:"ABAP CDS-View ZABAP_Demo02",permalink:"/s4hana/docs/abap-cds/code/cds_view_zabap_demo02"},next:{title:"ABAP CDS-View ZABAP_Demo04",permalink:"/s4hana/docs/abap-cds/code/cds_view_zabap_demo04"}},i={},p=[],d={toc:p};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@AbapCatalog.sqlViewName: 'ZABAPDEMO03'\n@AbapCatalog.compiler.compareFilter: true\n@AbapCatalog.preserveKey: true\n@AccessControl.authorizationCheck: #CHECK\n@EndUserText.label: 'Demo 3: Annotations'\ndefine view ZABAP_Demo03\n  as select from sflight\n{\n  key carrid     as Carrid,\n  key connid     as Connid,\n  key fldate     as Fldate,\n      @Semantics.amount.currencyCode: 'Currency'\n      price      as Price,\n      currency   as Currency,\n      planetype  as Planetype,\n      seatsmax   as Seatsmax,\n      seatsocc   as Seatsocc,\n      @Semantics.amount.currencyCode: 'Currency'\n      paymentsum as Paymentsum,\n      seatsmax_b as SeatsmaxB,\n      seatsocc_b as SeatsoccB,\n      seatsmax_f as SeatsmaxF,\n      seatsocc_f as SeatsoccF\n}\n// f\xfcr Betr\xe4ge und W\xe4hrungen: @Semantics.amount.currencyCode: '<W\xe4hrungsfeld>'\n// f\xfcr Mengen und Einheiten: @Semantics.quantity.unitOfMeasure: '<Einheitenfeld>'\n")))}l.isMDXComponent=!0}}]);