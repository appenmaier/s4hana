"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[8159],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,c(c({ref:n},l),{},{components:t})):r.createElement(f,c({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8792:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={title:"ZC_ABAP_ConnectionTP (v2)",description:"Transactional Consumption-View: Connection"},c=void 0,i={unversionedId:"apmf/code/cds-views/zc_abap_connectiontp_v2",id:"apmf/code/cds-views/zc_abap_connectiontp_v2",title:"ZC_ABAP_ConnectionTP (v2)",description:"Transactional Consumption-View: Connection",source:"@site/docs/apmf/code/cds-views/zc_abap_connectiontp_v2.md",sourceDirName:"apmf/code/cds-views",slug:"/apmf/code/cds-views/zc_abap_connectiontp_v2",permalink:"/s4hana/docs/apmf/code/cds-views/zc_abap_connectiontp_v2",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/apmf/code/cds-views/zc_abap_connectiontp_v2.md",tags:[],version:"current",frontMatter:{title:"ZC_ABAP_ConnectionTP (v2)",description:"Transactional Consumption-View: Connection"},sidebar:"apmfSidebar",previous:{title:"ZC_ABAP_ConnectionTP (v1)",permalink:"/s4hana/docs/apmf/code/cds-views/zc_abap_connectiontp_v1"},next:{title:"ZC_ABAP_ConnectionTP (v3)",permalink:"/s4hana/docs/apmf/code/cds-views/zc_abap_connectiontp_v3"}},p={},s=[],l={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@AbapCatalog.sqlViewName: 'ZCABAPCONNTP'\n@AbapCatalog.compiler.compareFilter: true\n@AbapCatalog.preserveKey: true\n@AccessControl.authorizationCheck: #CHECK\n@EndUserText.label: 'Transactional Consumption-View: Connection'\n\n@VDM.viewType: #CONSUMPTION\n@OData.publish: true\ndefine view ZC_ABAP_ConnectionTP\n  as select from ZI_ABAP_ConnectionTP\n{\n  key CarrierID,\n  key ConnectionID,\n      \u2026\n}\n")))}u.isMDXComponent=!0}}]);