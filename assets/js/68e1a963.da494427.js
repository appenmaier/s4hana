"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[9270],{3905:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>f});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=a.createContext({}),s=function(e){var n=a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},d=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},b=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),b=s(r),f=t,u=b["".concat(p,".").concat(f)]||b[f]||l[f]||o;return r?a.createElement(u,c(c({ref:n},d),{},{components:r})):a.createElement(u,c({ref:n},d))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},6058:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),t=(r(7294),r(3905));const o={title:"ZABAP_DEMO_ABAP_14",description:"Lesende Datenbankzugriffe"},c=void 0,i={unversionedId:"abap/code/reports/zabap_demo_abap_14",id:"abap/code/reports/zabap_demo_abap_14",title:"ZABAP_DEMO_ABAP_14",description:"Lesende Datenbankzugriffe",source:"@site/docs/abap/code/reports/zabap_demo_abap_14.md",sourceDirName:"abap/code/reports",slug:"/abap/code/reports/zabap_demo_abap_14",permalink:"/s4hana/docs/abap/code/reports/zabap_demo_abap_14",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/reports/zabap_demo_abap_14.md",tags:[],version:"current",frontMatter:{title:"ZABAP_DEMO_ABAP_14",description:"Lesende Datenbankzugriffe"},sidebar:"abapSidebar",previous:{title:"ZABAP_DEMO_ABAP_13",permalink:"/s4hana/docs/abap/code/reports/zabap_demo_abap_13"},next:{title:"ZABAP_DEMO_ABAP_15",permalink:"/s4hana/docs/abap/code/reports/zabap_demo_abap_15"}},p={},s=[],d={toc:s};function l(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-abap"},"REPORT zabap_demo_abap_14.\n\nPARAMETERS p_carrid TYPE s_carr_id.\nPARAMETERS p_connid TYPE s_conn_id.\n\nDATA connection TYPE spfli.\nDATA connection2 TYPE zabap_connection.\nDATA flights TYPE TABLE OF sflight.\n\n*-------------------------------------------------------------------*\n* Lesen eines Einzelsatzes\n*-------------------------------------------------------------------*\nSELECT SINGLE FROM spfli\n FIELDS *\n WHERE carrid = @p_carrid AND connid = @p_connid\n INTO @connection.\nIF sy-subrc <> 0.\n  MESSAGE e002(zabap) WITH p_carrid p_connid.\nENDIF.\n\n*-------------------------------------------------------------------*\n* Lesen mehrerer Datens\xe4tze\n*-------------------------------------------------------------------*\nSELECT FROM sflight\n FIELDS *\n WHERE carrid = @p_carrid AND connid = @p_connid\n ORDER BY carrid, connid\n INTO TABLE @flights.\nIF sy-subrc <> 0.\n  MESSAGE e002(zabap) WITH p_carrid p_connid.\nENDIF.\n\n*-------------------------------------------------------------------*\n* Definition der Zielvariablen\n*-------------------------------------------------------------------*\n* Angabe einer passenden Zielvariablen\nSELECT SINGLE FROM spfli\n FIELDS carrid, connid, cityfr, cityto\n INTO @connection2.\n\n* Kopieren namensgleicher Felder\nSELECT SINGLE FROM spfli\n FIELDS carrid, connid, cityfr, cityto\n INTO CORRESPONDING FIELDS OF @connection.\n\n* Inlinedeklaration\nSELECT SINGLE FROM spfli\n FIELDS carrid, connid, cityfr, cityto\n INTO @DATA(connection3).\n")),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/s4hana/docs/abap/code/data-types/zabap_connection"},"Strukturtyp ZABAP_CONNECTION")),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/s4hana/docs/abap/code/message-classes/zabap"},"Nachrichtenklasse ZABAP")))}l.isMDXComponent=!0}}]);