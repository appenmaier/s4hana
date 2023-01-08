"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[9165],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>u});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),l=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},i=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},_={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),b=l(t),u=r,m=b["".concat(s,".").concat(u)]||b[u]||_[u]||c;return t?n.createElement(m,o(o({ref:a},i),{},{components:t})):n.createElement(m,o({ref:a},i))}));function u(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=b;var p={};for(var s in a)hasOwnProperty.call(a,s)&&(p[s]=a[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<c;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},9220:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>_,frontMatter:()=>c,metadata:()=>p,toc:()=>l});var n=t(7462),r=(t(7294),t(3905));const c={title:"ZABAP_DEMO_ABAPOO_06",description:"Downcast"},o=void 0,p={unversionedId:"abap-objects/code/reports/zabap_demo_abapoo_06",id:"abap-objects/code/reports/zabap_demo_abapoo_06",title:"ZABAP_DEMO_ABAPOO_06",description:"Downcast",source:"@site/docs/abap-objects/code/reports/zabap_demo_abapoo_06.md",sourceDirName:"abap-objects/code/reports",slug:"/abap-objects/code/reports/zabap_demo_abapoo_06",permalink:"/s4hana/abap-objects/code/reports/zabap_demo_abapoo_06",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-objects/code/reports/zabap_demo_abapoo_06.md",tags:[],version:"current",frontMatter:{title:"ZABAP_DEMO_ABAPOO_06",description:"Downcast"},sidebar:"abapObjectsSidebar",previous:{title:"ZABAP_DEMO_ABAPOO_05",permalink:"/s4hana/abap-objects/code/reports/zabap_demo_abapoo_05"},next:{title:"ZABAP_DEMO_ABAPOO_07",permalink:"/s4hana/abap-objects/code/reports/zabap_demo_abapoo_07"}},s={},l=[],i={toc:l};function _(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap"},"* Downcast\nREPORT zabap_demo_abapoo_06.\n\n*-------------------------------------------------------------------*\n* Deklarationen\n*-------------------------------------------------------------------*\nDATA vehicle TYPE REF TO zcl_abap_vehicle.\nDATA car TYPE REF TO zcl_abap_car.\nDATA truck TYPE REF TO zcl_abap_truck.\nDATA vehicles TYPE TABLE OF REF TO zcl_abap_vehicle.\n\n*-------------------------------------------------------------------*\n* Objekterzeugungen\n*-------------------------------------------------------------------*\nWRITE: / zcl_abap_vehicle=>get_number_of_vehicles( ).\n\nTRY.\n    car = new zcl_abap_car( make = 'Porsche' model = '911' seats = 2 ).\n  CATCH zcx_abap_initial_parameter INTO DATA(x).\n    MESSAGE x->get_text( ) TYPE 'E'.\nENDTRY. \nvehicles = VALUE #( BASE vehicles ( car ) ). \"Upcast\n\nTRY.\n    truck = new zcl_abap_truck( make = 'MAN' model = 'TGX' cargo = 500 ).\n  CATCH zcx_abap_initial_parameter INTO x.\n    MESSAGE x->get_text( ) TYPE 'E'.\nENDTRY. \nvehicles = VALUE #( BASE vehicles ( truck ) ). \"Upcast\n\nTRY.\n    car = new zcl_abap_car( make = 'Opel' model = 'Zafira Life' seats = 6 ).\n  CATCH zcx_abap_initial_parameter INTO x.\n    MESSAGE x->get_text( ) TYPE 'E'.\nENDTRY. \nvehicles = VALUE #( BASE vehicles ( car ) ). \"Upcast\n\nWRITE: / zcl_abap_vehicle=>get_number_of_vehicles( ).\n\n*-------------------------------------------------------------------*\n* Ausgabe\n*-------------------------------------------------------------------*\nLOOP AT vehicles INTO vehicle. \"Polymorphie\n  WRITE: / vehicle->to_string( ).\n  IF vehicle IS INSTANCE OF zcl_abap_car.\n    car = CAST #( vehicle ).\n    WRITE: / car->get_seats( ).\n  ENDIF.\nENDLOOP.\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/s4hana/abap-objects/code/classes/zcl_abap_vehicle_v4"},"Klasse ZCL_ABAP_VEHICLE (v4)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/s4hana/abap-objects/code/classes/zcl_abap_car"},"Klasse ZCL_ABAP_CAR")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/s4hana/abap-objects/code/classes/zcl_abap_truck"},"Klasse ZCL_ABAP_TRUCK")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/s4hana/abap-objects/code/classes/zcx_abap_initial_parameter"},"Ausnahmelasse ZCX_ABAP_INITIAL_PARAMETER")))}_.isMDXComponent=!0}}]);