"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[9819],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,b=u["".concat(p,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(b,c(c({ref:t},s),{},{components:r})):n.createElement(b,c({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={title:"ZABAP_FLIGHT",description:"Flug"},c=void 0,i={unversionedId:"abap/code/data-types/zabap_flight",id:"abap/code/data-types/zabap_flight",title:"ZABAP_FLIGHT",description:"Flug",source:"@site/docs/abap/code/data-types/zabap_flight.md",sourceDirName:"abap/code/data-types",slug:"/abap/code/data-types/zabap_flight",permalink:"/s4hana/docs/abap/code/data-types/zabap_flight",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/data-types/zabap_flight.md",tags:[],version:"current",frontMatter:{title:"ZABAP_FLIGHT",description:"Flug"},sidebar:"abapSidebar",previous:{title:"ZABAP_CONNECTION",permalink:"/s4hana/docs/abap/code/data-types/zabap_connection"},next:{title:"ZABAP_FLIGHT_WITH_CONNECTION",permalink:"/s4hana/docs/abap/code/data-types/zabap_flight_with_connection"}},p={},l=[],s={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"@EndUserText.label : 'Flight'\n@AbapCatalog.enhancementCategory : #NOT_EXTENSIBLE\ndefine structure zabap_flight {\n  carrier_id     : s_carr_id;\n  connection_id  : s_conn_id;\n  flight_date    : s_date;\n  @Semantics.amount.currencyCode : 'zabap_flight.currency_code'\n  price          : s_price;\n  currency_code  : s_currcode;\n}\n")))}d.isMDXComponent=!0}}]);