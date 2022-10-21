"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),b=a,f=u["".concat(p,".").concat(b)]||u[b]||d[b]||o;return n?r.createElement(f,c(c({ref:t},l),{},{components:n})):r.createElement(f,c({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={title:"ZABAP_CONNECTION",description:"Flugverbindung"},c=void 0,i={unversionedId:"abap/code/data-types/zabap_connection",id:"abap/code/data-types/zabap_connection",title:"ZABAP_CONNECTION",description:"Flugverbindung",source:"@site/docs/abap/code/data-types/zabap_connection.md",sourceDirName:"abap/code/data-types",slug:"/abap/code/data-types/zabap_connection",permalink:"/s4hana/docs/abap/code/data-types/zabap_connection",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/data-types/zabap_connection.md",tags:[],version:"current",frontMatter:{title:"ZABAP_CONNECTION",description:"Flugverbindung"},sidebar:"abapSidebar",previous:{title:"Datentypen",permalink:"/s4hana/docs/abap/code/data-types/"},next:{title:"ZABAP_FLIGHT",permalink:"/s4hana/docs/abap/code/data-types/zabap_flight"}},p={},s=[],l={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"@EndUserText.label : 'Connection'\n@AbapCatalog.enhancementCategory : #NOT_EXTENSIBLE\ndefine structure zabap_connection {\n  carrier_id    : s_carr_id;\n  connection_id : s_conn_id;\n  city_from     : s_from_cit;\n  city_to       : s_to_city;\n}\n")))}d.isMDXComponent=!0}}]);