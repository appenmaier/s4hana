"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[1458],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(p,".").concat(m)]||u[m]||l[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3678:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={title:"Demo 10",description:"",sidebar_position:100},i=void 0,c={unversionedId:"abap/code/demo10",id:"abap/code/demo10",title:"Demo 10",description:"",source:"@site/docs/abap/code/demo10.md",sourceDirName:"abap/code",slug:"/abap/code/demo10",permalink:"/s4hana/docs/abap/code/demo10",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/demo10.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Demo 10",description:"",sidebar_position:100},sidebar:"abapSidebar",previous:{title:"Demo 9",permalink:"/s4hana/docs/abap/code/demo09"},next:{title:"Demo 11",permalink:"/s4hana/docs/abap/code/demo11"}},p={},s=[],d={toc:s};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@EndUserText.label : 'Connection'\n@AbapCatalog.enhancementCategory : #NOT_EXTENSIBLE\ndefine structure zabap_s_connection {\n  carrier_id      : s_carr_id;\n  connection_id   : s_conn_id;\n  airport_from_id : s_from_airp;\n  airport_to_id   : s_to_airp;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-abap"},"REPORT zabap_demo_abap_10.\n\n\"Deklaration von Strukturen\nDATA connection TYPE zabap_s_connection.\n\n\"Zugriff auf Strukturkomponenten\nconnection-carrier_id = 'LH'.\nconnection-connection_id = '0400'.\nconnection-airport_from_id = 'FRA'.\nconnection-airport_to_id = 'JFK'.\n\nWRITE: connection-carrier_id, connection-connection_id.\n")))}l.isMDXComponent=!0}}]);