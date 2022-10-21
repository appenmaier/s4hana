"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[2255],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>_});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),_=a,f=u["".concat(s,".").concat(_)]||u[_]||d[_]||o;return t?r.createElement(f,c(c({ref:n},p),{},{components:t})):r.createElement(f,c({ref:n},p))}));function _(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7237:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={title:"ZCL_D_ABAP_LOCATIONS",description:"Determinierung: Ziel- und Startlokation"},c=void 0,i={unversionedId:"apmf/code/classes/zcl_d_abap_locations",id:"apmf/code/classes/zcl_d_abap_locations",title:"ZCL_D_ABAP_LOCATIONS",description:"Determinierung: Ziel- und Startlokation",source:"@site/docs/apmf/code/classes/zcl_d_abap_locations.md",sourceDirName:"apmf/code/classes",slug:"/apmf/code/classes/zcl_d_abap_locations",permalink:"/s4hana/docs/apmf/code/classes/zcl_d_abap_locations",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/apmf/code/classes/zcl_d_abap_locations.md",tags:[],version:"current",frontMatter:{title:"ZCL_D_ABAP_LOCATIONS",description:"Determinierung: Ziel- und Startlokation"},sidebar:"apmfSidebar",previous:{title:"ZCL_A_ABAP_SWITCH_PLANETYPE",permalink:"/s4hana/docs/apmf/code/classes/zcl_a_abap_switch_planetype"},next:{title:"ZCL_V_ABAP_AIRPORTS",permalink:"/s4hana/docs/apmf/code/classes/zcl_v_abap_airports"}},s={},l=[],p={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},'\u2026    \n    DATA connections TYPE ztiabap_connectiontp.\n\n    "Daten lesen\n    io_read->retrieve(\n      EXPORTING\n        iv_node       = is_ctx-node_key\n        it_key        = it_key\n      IMPORTING\n        eo_message    = eo_message\n        et_data       = connections\n        et_failed_key = et_failed_key ).\n\n    "Nachrichten-Container erstellen\n    IF eo_message IS NOT BOUND.\n      eo_message = /bobf/cl_frw_factory=>get_message( ).\n    ENDIF.\n\n    "Daten sequentiell durchlaufen\n    LOOP AT connections REFERENCE INTO DATA(connection).\n      "Daten \xe4ndern und zur\xfcckschreiben\n      SELECT SINGLE FROM scitairp\n       FIELDS *\n       WHERE airport = connection->departureairportid\n       INTO @DATA(departure_city).\n      IF sy-subrc <> 0.\n        CONTINUE.\n      ENDIF.\n      SELECT SINGLE FROM scitairp\n       FIELDS *\n       WHERE airport = connection->arrivalairportid\n       INTO @DATA(arrival_city).\n      IF sy-subrc <> 0.\n        CONTINUE.\n      ENDIF.\n      connection->departurecity = departure_city-city.\n      connection->departurecountrycode = departure_city-country.\n      connection->arrivalcity = arrival_city-city.\n      connection->arrivalcountrycode = arrival_city-country.\n      io_modify->update(\n        EXPORTING\n          iv_node = is_ctx-node_key\n          iv_key  = connection->key\n          is_data = connection ).\n    ENDLOOP.\n\u2026\n')))}d.isMDXComponent=!0}}]);