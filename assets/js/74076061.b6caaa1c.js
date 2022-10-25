"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[7094],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},_=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),_=l(t),b=a,d=_["".concat(i,".").concat(b)]||_[b]||s[b]||o;return t?r.createElement(d,p(p({ref:n},u),{},{components:t})):r.createElement(d,p({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,p=new Array(o);p[0]=_;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var l=2;l<o;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}_.displayName="MDXCreateElement"},3809:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const o={title:"ZABAP_DEMO_ABAP_11",description:"Kopieren von Strukturen"},p=void 0,c={unversionedId:"abap/code/reports/zabap_demo_abap_11",id:"abap/code/reports/zabap_demo_abap_11",title:"ZABAP_DEMO_ABAP_11",description:"Kopieren von Strukturen",source:"@site/docs/abap/code/reports/zabap_demo_abap_11.md",sourceDirName:"abap/code/reports",slug:"/abap/code/reports/zabap_demo_abap_11",permalink:"/s4hana/abap/code/reports/zabap_demo_abap_11",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/reports/zabap_demo_abap_11.md",tags:[],version:"current",frontMatter:{title:"ZABAP_DEMO_ABAP_11",description:"Kopieren von Strukturen"},sidebar:"abapSidebar",previous:{title:"ZABAP_DEMO_ABAP_10",permalink:"/s4hana/abap/code/reports/zabap_demo_abap_10"},next:{title:"ZABAP_DEMO_ABAP_12",permalink:"/s4hana/abap/code/reports/zabap_demo_abap_12"}},i={},l=[],u={toc:l};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},"* Copying of Structures\nREPORT zabap_demo_abap_11.\n\nDATA connection TYPE zabap_connection.\nDATA connection2 TYPE zabap_connection.\nDATA flight TYPE zabap_flight.\nDATA flight_with_connection TYPE zabap_flight_with_connection.\n\nconnection-carrier_id = 'LH'.\nconnection-connection_id = '0400'.\nconnection-city_from = 'FRANKFURT'.\nconnection-city_to = 'NEW YORK'.\n\nflight-carrier_id = 'LH'.\nflight-connection_id = '0400'.\nflight-flight_date = sy-datlo.\nflight-price = 500.\nflight-currency_code = 'EUR'.\n\n*-------------------------------------------------------------------*\n* Kopieren typgleicher Strukturen\n*-------------------------------------------------------------------*\nconnection2 = connection.\n\n*-------------------------------------------------------------------*\n* Kopieren namensgleicher Komponenten\n*-------------------------------------------------------------------*\nflight_with_connection = CORRESPONDING #( flight ).\nflight_with_connection = CORRESPONDING #( BASE ( flight_with_connection ) connection ).\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/s4hana/abap/code/data-types/zabap_connection"},"Strukturtyp ZABAP_CONNECTION")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/s4hana/abap/code/data-types/zabap_flight"},"Strukturtyp ZABAP_FLIGHT")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/s4hana/abap/code/data-types/zabap_flight_with_connection"},"Strukturtyp ZABAP_FLIGHT_WITH_CONNECTION")))}s.isMDXComponent=!0}}]);