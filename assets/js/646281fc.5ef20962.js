"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[3175],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>_});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),d=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=d(e.components);return a.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(t),_=n,b=m["".concat(i,".").concat(_)]||m[_]||l[_]||o;return t?a.createElement(b,c(c({ref:r},s),{},{components:t})):a.createElement(b,c({ref:r},s))}));function _(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=m;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var d=2;d<o;d++)c[d]=t[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3145:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=t(7462),n=(t(7294),t(3905));const o={title:"ABAP-Programm ZABAP_DEMO_ABAPCDS_10",description:""},c=void 0,p={unversionedId:"abap-cds/code/report_zabap_demo_abapcds_10",id:"abap-cds/code/report_zabap_demo_abapcds_10",title:"ABAP-Programm ZABAP_DEMO_ABAPCDS_10",description:"",source:"@site/docs/abap-cds/code/report_zabap_demo_abapcds_10.md",sourceDirName:"abap-cds/code",slug:"/abap-cds/code/report_zabap_demo_abapcds_10",permalink:"/s4hana/docs/abap-cds/code/report_zabap_demo_abapcds_10",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-cds/code/report_zabap_demo_abapcds_10.md",tags:[],version:"current",frontMatter:{title:"ABAP-Programm ZABAP_DEMO_ABAPCDS_10",description:""},sidebar:"abapCDSSidebar",previous:{title:"ABAP-Programm ZABAP_DEMO_ABAPCDS_09",permalink:"/s4hana/docs/abap-cds/code/report_zabap_demo_abapcds_09"},next:{title:"ABAP-Programm ZABAP_DEMO_ABAPCDS_12",permalink:"/s4hana/docs/abap-cds/code/report_zabap_demo_abapcds_12"}},i={},d=[],s={toc:d};function l(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-abap"},"REPORT zabap_demo_abapcds_10.\n\nPARAMETERS p_carrid TYPE s_carr_id.\nPARAMETERS p_connid TYPE s_conn_id.\n\nDATA flights TYPE TABLE OF zabap_demo10.\n\nSELECT FROM zabap_demo10( p_carrierid = @p_carrid, p_connectionid = @p_connid )\n FIELDS *\n INTO TABLE @flights.\n\ncl_demo_output=>display( flights ).\n")))}l.isMDXComponent=!0}}]);