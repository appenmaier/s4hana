"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[9446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(r),u=a,d=f["".concat(p,".").concat(u)]||f[u]||b[u]||o;return r?n.createElement(d,c(c({ref:t},l),{},{components:r})):n.createElement(d,c({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8220:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"Schnittstelle ZIF_ABAP_PARTNER",description:""},c=void 0,i={unversionedId:"abap-objects/code/interface_zif_abap_partner",id:"abap-objects/code/interface_zif_abap_partner",title:"Schnittstelle ZIF_ABAP_PARTNER",description:"",source:"@site/docs/abap-objects/code/interface_zif_abap_partner.md",sourceDirName:"abap-objects/code",slug:"/abap-objects/code/interface_zif_abap_partner",permalink:"/s4hana/docs/abap-objects/code/interface_zif_abap_partner",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-objects/code/interface_zif_abap_partner.md",tags:[],version:"current",frontMatter:{title:"Schnittstelle ZIF_ABAP_PARTNER",description:""},sidebar:"abapObjectsSidebar",previous:{title:"Ausnahmeklasse ZCX_ABAP_INITIAL_PARAMETER",permalink:"/s4hana/docs/abap-objects/code/class_zcx_abap_initial_parameter"},next:{title:"ABAP-Program ZABAP_DEMO_ABAPOO_01",permalink:"/s4hana/docs/abap-objects/code/report_zabap_demo_abapoo_01"}},p={},s=[],l={toc:s};function b(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},"INTERFACE zif_abap_partner PUBLIC.\n\n  METHODS to_string\n    RETURNING VALUE(r_string) TYPE string.\n\nENDINTERFACE.\n")))}b.isMDXComponent=!0}}]);