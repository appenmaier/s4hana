"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[7157],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>m});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=a.createContext({}),s=function(e){var r=a.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):p(p({},r),e)),n},u=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},l=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=s(n),m=t,_=l["".concat(c,".").concat(m)]||l[m]||b[m]||o;return n?a.createElement(_,p(p({ref:r},u),{},{components:n})):a.createElement(_,p({ref:r},u))}));function m(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,p=new Array(o);p[0]=l;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:t,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1966:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),t=(n(7294),n(3905));const o={title:"ABAP-Programm ZABAP_DEMO_ABAP_09",description:"Funktionsbausteine",sidebar_position:90},p=void 0,i={unversionedId:"abap/code/report_zabap_demo_abap_09",id:"abap/code/report_zabap_demo_abap_09",title:"ABAP-Programm ZABAP_DEMO_ABAP_09",description:"Funktionsbausteine",source:"@site/docs/abap/code/report_zabap_demo_abap_09.md",sourceDirName:"abap/code",slug:"/abap/code/report_zabap_demo_abap_09",permalink:"/s4hana/docs/abap/code/report_zabap_demo_abap_09",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/report_zabap_demo_abap_09.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{title:"ABAP-Programm ZABAP_DEMO_ABAP_09",description:"Funktionsbausteine",sidebar_position:90},sidebar:"abapSidebar",previous:{title:"ABAP-Programm ZABAP_DEMO_ABAP_08",permalink:"/s4hana/docs/abap/code/report_zabap_demo_abap_08"},next:{title:"ABAP-Programm ZABAP_DEMO_ABAP_10",permalink:"/s4hana/docs/abap/code/report_zabap_demo_abap_10"}},c={},s=[],u={toc:s};function b(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-abap"},"REPORT zabap_demo_abap_09.\n\nPARAMETERS p_num1 TYPE i.\nPARAMETERS p_num2 TYPE i.\n\nDATA result TYPE i.\n\nCALL FUNCTION 'Z_ABAP_SUM'\n  EXPORTING\n    i_number_1       = p_num1\n    i_number_2       = p_num2\n  IMPORTING\n    e_result         = result  \n  EXCEPTIONS\n    initial_number_1 = 1\n    initial_number_2 = 2\n    OTHERS           = 3.\nCASE sy-subrc.\n  WHEN 1.\n    MESSAGE e000(zabap) WITH 'Number 1'.\n  WHEN 2.\n    MESSAGE e000(zabap) WITH 'Number 2'.\n  WHEN 3.\n    MESSAGE e001(zabap).\nENDCASE.\n\nWRITE: result.\n")),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/s4hana/docs/abap/code/function_module_z_abap_sum"},"Funktionsbaustein Z_ABAP_SUM")),(0,t.kt)("p",null,(0,t.kt)("a",{parentName:"p",href:"/s4hana/docs/abap/code/message_class_zabap"},"Nachrichtenklasse ZABAP")))}b.isMDXComponent=!0}}]);