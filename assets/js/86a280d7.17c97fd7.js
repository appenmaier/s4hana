"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[4057],{3905:(e,r,a)=>{a.d(r,{Zo:()=>d,kt:()=>b});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function p(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function c(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),i=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):p(p({},r),e)),a},d=function(e){var r=i(e.components);return t.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=i(a),b=n,u=m["".concat(s,".").concat(b)]||m[b]||l[b]||o;return a?t.createElement(u,p(p({ref:r},d),{},{components:a})):t.createElement(u,p({ref:r},d))}));function b(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<o;i++)p[i]=a[i];return t.createElement.apply(null,p)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6729:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=a(7462),n=(a(7294),a(3905));const o={title:"ABAP-Programm ZABAP_DEMO_ABAPCDS_09",description:"Parameter"},p=void 0,c={unversionedId:"abap-cds/code/reports/zabap_demo_abapcds_09",id:"abap-cds/code/reports/zabap_demo_abapcds_09",title:"ABAP-Programm ZABAP_DEMO_ABAPCDS_09",description:"Parameter",source:"@site/docs/abap-cds/code/reports/zabap_demo_abapcds_09.md",sourceDirName:"abap-cds/code/reports",slug:"/abap-cds/code/reports/zabap_demo_abapcds_09",permalink:"/s4hana/docs/abap-cds/code/reports/zabap_demo_abapcds_09",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-cds/code/reports/zabap_demo_abapcds_09.md",tags:[],version:"current",frontMatter:{title:"ABAP-Programm ZABAP_DEMO_ABAPCDS_09",description:"Parameter"},sidebar:"abapCDSSidebar",previous:{title:"ABAP-Programm ZABAP_DEMO_ABAPCDS_01",permalink:"/s4hana/docs/abap-cds/code/reports/zabap_demo_abapcds_01"},next:{title:"ABAP-Programm ZABAP_DEMO_ABAPCDS_10",permalink:"/s4hana/docs/abap-cds/code/reports/zabap_demo_abapcds_10"}},s={},i=[],d={toc:i};function l(e){let{components:r,...a}=e;return(0,n.kt)("wrapper",(0,t.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-abap"},"REPORT zabap_demo_abapcds_09.\n\nPARAMETERS p_carrid TYPE s_carr_id.\nPARAMETERS p_connid TYPE s_conn_id.\n\nDATA flights TYPE TABLE OF zabap_demo09.\n\nSELECT FROM zabap_demo09( p_carrierid = @p_carrid, p_connectionid = @p_connid )\n FIELDS *\n INTO TABLE @flights.\n\ncl_demo_output=>display( flights ).\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/s4hana/docs/abap-cds/code/cds-views/zabap_demo09"},"ABAP CDS View ZABAP_Demo09")))}l.isMDXComponent=!0}}]);