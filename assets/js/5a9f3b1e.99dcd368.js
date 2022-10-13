"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[7554],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>u});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),d=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=d(e.components);return a.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=d(n),u=t,f=m["".concat(s,".").concat(u)]||m[u]||l[u]||o;return n?a.createElement(f,i(i({ref:r},p),{},{components:n})):a.createElement(f,i({ref:r},p))}));function u(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7127:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(7462),t=(n(7294),n(3905));const o={title:"ABAP CDS-View ZABAP_Demo08",description:""},i=void 0,c={unversionedId:"abap-cds/code/cds_view_zabap_demo08",id:"abap-cds/code/cds_view_zabap_demo08",title:"ABAP CDS-View ZABAP_Demo08",description:"",source:"@site/docs/abap-cds/code/cds_view_zabap_demo08.md",sourceDirName:"abap-cds/code",slug:"/abap-cds/code/cds_view_zabap_demo08",permalink:"/s4hana/docs/abap-cds/code/cds_view_zabap_demo08",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-cds/code/cds_view_zabap_demo08.md",tags:[],version:"current",frontMatter:{title:"ABAP CDS-View ZABAP_Demo08",description:""},sidebar:"abapCDSSidebar",previous:{title:"ABAP CDS-View ZABAP_Demo07",permalink:"/s4hana/docs/abap-cds/code/cds_view_zabap_demo07"},next:{title:"ABAP CDS-View ZABAP_Demo09",permalink:"/s4hana/docs/abap-cds/code/cds_view_zabap_demo09"}},s={},d=[],p={toc:d};function l(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"@AbapCatalog.sqlViewName: 'ZABAPDEMO08'\n@AbapCatalog.compiler.compareFilter: true\n@AbapCatalog.preserveKey: true\n@AccessControl.authorizationCheck: #CHECK\n@EndUserText.label: 'Demo 8: Outer Joins and Unions'\ndefine view ZABAP_Demo08\n  as select from spfli as Connection\n  //    inner join   scarr as Carrier on Connection.carrid = Carrier.carrid\n    left outer join scarr as Carrier on Connection.carrid = Carrier.carrid\n  //    right outer join scarr as Carrier on Connection.carrid = Carrier.carrid\n  //    cross join   scarr as Carrier\n{\n  key Carrier.carrid    as CarrierCarrid,\n  key Connection.carrid as ConnectionCarrid,\n  key Connection.connid as Connid,\n      carrname          as Carrname,\n      cityfrom          as Cityfrom,\n      cityto            as Cityto\n  union select from spfli as Connection\n    right outer join scarr as Carrier on Connection.carrid = Carrier.carrid\n{\n  key Carrier.carrid    as CarrierCarrid,\n  key Connection.carrid as ConnectionCarrid,\n  key Connection.connid as Connid,\n      carrname          as Carrname,\n      cityfrom          as Cityfrom,\n      cityto            as Cityto\n}\n")))}l.isMDXComponent=!0}}]);