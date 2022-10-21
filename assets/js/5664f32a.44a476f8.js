"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[1739],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},_={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},E=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),E=l(t),m=a,b=E["".concat(s,".").concat(m)]||E[m]||_[m]||c;return t?r.createElement(b,o(o({ref:n},p),{},{components:t})):r.createElement(b,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=E;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}E.displayName="MDXCreateElement"},1328:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>_,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const c={title:"ZCL_ABAP_VEHICLE (v5)",description:"Fahrzeug"},o=void 0,i={unversionedId:"abap-objects/code/classes/zcl_abap_vehicle_v5",id:"abap-objects/code/classes/zcl_abap_vehicle_v5",title:"ZCL_ABAP_VEHICLE (v5)",description:"Fahrzeug",source:"@site/docs/abap-objects/code/classes/zcl_abap_vehicle_v5.md",sourceDirName:"abap-objects/code/classes",slug:"/abap-objects/code/classes/zcl_abap_vehicle_v5",permalink:"/s4hana/docs/abap-objects/code/classes/zcl_abap_vehicle_v5",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-objects/code/classes/zcl_abap_vehicle_v5.md",tags:[],version:"current",frontMatter:{title:"ZCL_ABAP_VEHICLE (v5)",description:"Fahrzeug"},sidebar:"abapObjectsSidebar",previous:{title:"ZCL_ABAP_VEHICLE (v4)",permalink:"/s4hana/docs/abap-objects/code/classes/zcl_abap_vehicle_v4"},next:{title:"ZCX_ABAP_INITIAL_PARAMETER",permalink:"/s4hana/docs/abap-objects/code/classes/zcx_abap_initial_parameter"}},s={},l=[],p={toc:l};function _(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},"CLASS zcl_abap_vehicle DEFINITION PUBLIC ABSTRACT CREATE PUBLIC.\n\n  PUBLIC SECTION.\n    METHODS constructor\n      IMPORTING\n        i_make  TYPE string\n        i_model TYPE string\n      RAISING\n        zcx_abap_initial_parameter.\n\n    METHODS get_make FINAL\n      RETURNING VALUE(r_make) TYPE string.\n\n    METHODS get_model FINAL\n      RETURNING VALUE(r_model) TYPE string.\n\n    METHODS to_string ABSTRACT\n      RETURNING VALUE(r_string) TYPE string.\n\n    CLASS-METHODS get_number_of_vehicles\n      RETURNING VALUE(r_number_of_vehicles) TYPE i.\n\n  PROTECTED SECTION.\n\n  PRIVATE SECTION.\n    DATA make TYPE string.\n    DATA model TYPE string.\n    CLASS-DATA g_number_of_vehicles TYPE i.\n\nENDCLASS.\n\nCLASS zcl_abap_vehicle IMPLEMENTATION.\n\n  METHOD constructor.\n    IF i_make IS INITIAL.\n      RAISE EXCPETION TYPE zcx_abap_initial_parameter EXPORTING i_parameter = 'I_MAKE'.\n    ENDIF.\n    \n    IF i_model IS INITIAL.\n      RAISE EXCPETION TYPE zcx_abap_initial_parameter EXPORTING i_parameter = 'I_MODEL'.\n    ENDIF.\n\n    make = i_make.\n    model = i_model.\n    g_number_of_vehicles += 1.\n  ENDMETHOD.\n\n  METHOD get_make.\n    r_make = make.\n  ENDMETHOD.\n\n  METHOD get_model.\n    r_model = model.\n  ENDMETHOD.\n\n  METHOD get_number_of_vehicles.\n    r_number_of_vehicles = g_number_of_vehicles.\n  ENDMETHOD.\n\nENDCLASS.\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/s4hana/docs/abap-objects/code/classes/zcx_abap_initial_parameter"},"Ausnahmeklasse ZCX_ABAP_INITIAL_PARAMETER")))}_.isMDXComponent=!0}}]);