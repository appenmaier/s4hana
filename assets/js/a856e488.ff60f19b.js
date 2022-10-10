"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[4365],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(r),u=n,_=d["".concat(p,".").concat(u)]||d[u]||b[u]||o;return r?a.createElement(_,c(c({ref:t},s),{},{components:r})):a.createElement(_,c({ref:t},s))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},187:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={title:"ABAP-Program ZABAP_DEMO_ABAPOO_01",description:"Objekte und Referenzvariablen"},c=void 0,i={unversionedId:"abap-objects/code/report_zabap_demo_abapoo_01",id:"abap-objects/code/report_zabap_demo_abapoo_01",title:"ABAP-Program ZABAP_DEMO_ABAPOO_01",description:"Objekte und Referenzvariablen",source:"@site/docs/abap-objects/code/report_zabap_demo_abapoo_01.md",sourceDirName:"abap-objects/code",slug:"/abap-objects/code/report_zabap_demo_abapoo_01",permalink:"/s4hana/docs/abap-objects/code/report_zabap_demo_abapoo_01",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-objects/code/report_zabap_demo_abapoo_01.md",tags:[],version:"current",frontMatter:{title:"ABAP-Program ZABAP_DEMO_ABAPOO_01",description:"Objekte und Referenzvariablen"},sidebar:"abapObjectsSidebar",previous:{title:"Schnittstelle ZIF_ABAP_PARTNER",permalink:"/s4hana/docs/abap-objects/code/interface_zif_abap_partner"},next:{title:"ABAP-Program ZABAP_DEMO_ABAPOO_02",permalink:"/s4hana/docs/abap-objects/code/report_zabap_demo_abapoo_02"}},p={},l=[],s={toc:l};function b(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-abap"},'REPORT zabap_demo_abapoo_01.\n\n"Deklarationen\nDATA vehicle TYPE REF TO zcl_abap_vehicle.\nDATA vehicles TYPE TABLE OF REF TO zcl_abap_vehicle.\n\n"Objekterzeugungen\nvehicle = new #( ).\nvehicles = VALUE #( BASE vehicles (vehicle ) ).\nvehicle->set_make( |Porsche| ).\nvehicle->set_model( |911| ).\n\nvehicle = new #( ).\nvehicles = VALUE #( BASE vehicles (vehicle ) ).\nvehicle->set_make( |MAN| ).\nvehicle->set_model( |TGX| ).\n\nvehicle = new #( ).\nvehicles = VALUE #( BASE vehicles (vehicle ) ).\nvehicle->set_make( |Opel| ).\nvehicle->set_model( |Zafira Life| ).\n\n"Ausgabe\nLOOP AT vehicles INTO vehicle.\n  WRITE: / vehicle->to_string( ).\nENDLOOP.\n')),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/s4hana/docs/abap-objects/code/class_zcl_abap_vehicle_v1"},"Klasse ZCL_ABAP_VEHICLE (v1)")))}b.isMDXComponent=!0}}]);