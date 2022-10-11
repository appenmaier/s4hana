"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[3836],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>_});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},i=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=p(a),_=r,d=u["".concat(l,".").concat(_)]||u[_]||b[_]||c;return a?n.createElement(d,s(s({ref:t},i),{},{components:a})):n.createElement(d,s({ref:t},i))}));function _(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,s=new Array(c);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<c;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8784:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const c={title:"Klasse ZCL_ABAP_CAR",description:""},s=void 0,o={unversionedId:"abap-objects/code/class_zcl_abap_car",id:"abap-objects/code/class_zcl_abap_car",title:"Klasse ZCL_ABAP_CAR",description:"",source:"@site/docs/abap-objects/code/class_zcl_abap_car.md",sourceDirName:"abap-objects/code",slug:"/abap-objects/code/class_zcl_abap_car",permalink:"/s4hana/docs/abap-objects/code/class_zcl_abap_car",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-objects/code/class_zcl_abap_car.md",tags:[],version:"current",frontMatter:{title:"Klasse ZCL_ABAP_CAR",description:""},sidebar:"abapObjectsSidebar",previous:{title:"Quellcode",permalink:"/s4hana/docs/abap-objects/code/"},next:{title:"Klasse ZCL_ABAP_RENTAL",permalink:"/s4hana/docs/abap-objects/code/class_zcl_abap_rental"}},l={},p=[],i={toc:p};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap"},"CLASS zcl_abap_car DEFINITION PUBLIC FINAL CREATE PUBLIC INHERITING FROM zcl_abap_vehicle.\n\n  PUBLIC SECTION.\n    METHODS constructor\n      IMPORTING\n        i_make  TYPE string\n        i_model TYPE string\n        i_seats TYPE i\n      RAISING\n        zcx_abap_initial_parameter.\n\n    METHODS to_string REDEFINITION.\n\n    METHODS get_seats\n      RETURNING VALUE(r_seats) TYPE i.\n\n  PROTECTED SECTION.\n\n  PRIVATE SECTION.\n    DATA seats TYPE i.\n\nENDCLASS.\n\nCLASS zcl_abap_car IMPLEMENTATION.\n\n  METHOD constructor.\n    super->constructor( make = i_make model = i_model ).\n    seats = i_seats.\n  ENDMETHOD.\n\n  METHOD get_seats.\n    r_seats = seats.\n  ENDMETHOD.\n\n  METHOD to_string.\n    r_string = |{ get_make( ) } { get_model( ) } ({ seats }-Sitzer)|.\n  ENDMETHOD.\n  \nENDCLASS.\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/s4hana/docs/abap-objects/code/class_zcl_abap_vehicle_v4"},"Klasse ZCL_ABAP_VEHICLE (v4)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/s4hana/docs/abap-objects/code/class_zcx_abap_initial_parameter"},"Ausnahmeklasse ZCX_ABAP_INITIAL_PARAMETER")))}b.isMDXComponent=!0}}]);