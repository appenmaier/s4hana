"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[7325],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=i(r),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return r?n.createElement(m,c(c({ref:t},l),{},{components:r})):n.createElement(m,c({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={title:"Zugriffskontrolle ZABAP_DEMO01",description:""},c=void 0,p={unversionedId:"abap-cds/code/access_control_zabap_demo01",id:"abap-cds/code/access_control_zabap_demo01",title:"Zugriffskontrolle ZABAP_DEMO01",description:"",source:"@site/docs/abap-cds/code/access_control_zabap_demo01.md",sourceDirName:"abap-cds/code",slug:"/abap-cds/code/access_control_zabap_demo01",permalink:"/s4hana/docs/abap-cds/code/access_control_zabap_demo01",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-cds/code/access_control_zabap_demo01.md",tags:[],version:"current",frontMatter:{title:"Zugriffskontrolle ZABAP_DEMO01",description:""},sidebar:"abapCDSSidebar",previous:{title:"Quellcode",permalink:"/s4hana/docs/abap-cds/code/"},next:{title:"ABAP CDS-View ZABAP_Demo01",permalink:"/s4hana/docs/abap-cds/code/cds_view_zabap_demo01"}},s={},i=[],l={toc:i};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"@EndUserText.label: 'Role for ZABAP_Demo01' \n@MappingRole: true \ndefine role ZABAP_DEMO01 { \n grant select on ZABAP_Demo01 where (Carrid) = aspect pfcg_auth(S_CARRID, CARRID, ACTVT = '03'); \n}\n")))}d.isMDXComponent=!0}}]);