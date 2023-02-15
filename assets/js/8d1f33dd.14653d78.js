"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[5318],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=r,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||o;return t?a.createElement(m,i(i({ref:n},s),{},{components:t})):a.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={title:"ZC_ABAP_FlightTP",description:"Transactional Consumption-View: Flug"},i=void 0,c={unversionedId:"apmf/code/cds-views/zc_abap_flighttp",id:"apmf/code/cds-views/zc_abap_flighttp",title:"ZC_ABAP_FlightTP",description:"Transactional Consumption-View: Flug",source:"@site/docs/apmf/code/cds-views/zc_abap_flighttp.md",sourceDirName:"apmf/code/cds-views",slug:"/apmf/code/cds-views/zc_abap_flighttp",permalink:"/s4hana/apmf/code/cds-views/zc_abap_flighttp",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/apmf/code/cds-views/zc_abap_flighttp.md",tags:[],version:"current",frontMatter:{title:"ZC_ABAP_FlightTP",description:"Transactional Consumption-View: Flug"},sidebar:"apmfSidebar",previous:{title:"ZC_ABAP_ConnectionTP (v6)",permalink:"/s4hana/apmf/code/cds-views/zc_abap_connectiontp_v6"},next:{title:"ZI_ABAP_Connection",permalink:"/s4hana/apmf/code/cds-views/zi_abap_connection"}},p={},l=[],s={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@AbapCatalog.sqlViewName: 'ZCABAPFLITP'\n@AbapCatalog.compiler.compareFilter: true\n@AbapCatalog.preserveKey: true\n@AccessControl.authorizationCheck: #CHECK\n@EndUserText.label: 'Transactional Consumption-View: Flight'\n\n@VDM.viewType: #CONSUMPTION\n@Metadata.allowExtensions: true\n@ObjectModel: {\n    createEnabled: true,\n    updateEnabled: true,\n    deleteEnabled: true\n}\ndefine view ZC_ABAP_FlightTP\n  as select from ZI_ABAP_FlightTP\n  association [1..1] to ZI_ABAP_ConnectionTP as _Connection on $projection.CarrierID = _Connection.CarrierID\n                                                           and $projection.ConnectionID =_Connection.ConnectionID\n{\n  key CarrierID,\n  key ConnectionID,\n  key FlightDate\n      \u2026\n      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]\n      _Connection\n}\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/s4hana/apmf/code/cds-views/zi_abap_flighttp"},"ABAP CDS-View ZI_ABAP_FlightTP")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/s4hana/apmf/code/cds-views/zc_abap_connectiontp_v5"},"ABAP CDS-View ZC_ABAP_ConnectionTP (v5)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/s4hana/apmf/code/cds-views/zc_abap_connectiontp_v6"},"ABAP CDS-View ZC_ABAP_ConnectionTP (v6)")))}u.isMDXComponent=!0}}]);