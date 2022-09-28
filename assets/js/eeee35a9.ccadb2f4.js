"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[5586],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>h});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},f=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=c(t),h=i,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return t?r.createElement(g,o(o({ref:n},f),{},{components:t})):r.createElement(g,o({ref:n},f))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2176:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={title:"Demo ABAP-12",description:"Interne Tabellen",sidebar_position:120},o=void 0,l={unversionedId:"abap/code/demo12",id:"abap/code/demo12",title:"Demo ABAP-12",description:"Interne Tabellen",source:"@site/docs/abap/code/demo12.md",sourceDirName:"abap/code",slug:"/abap/code/demo12",permalink:"/s4hana/docs/abap/code/demo12",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap/code/demo12.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{title:"Demo ABAP-12",description:"Interne Tabellen",sidebar_position:120},sidebar:"abapSidebar",previous:{title:"Demo ABAP-11",permalink:"/s4hana/docs/abap/code/demo11"},next:{title:"Demo ABAP-13",permalink:"/s4hana/docs/abap/code/demo13"}},s={},c=[],f={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-abap"},"REPORT zabap_demo_abap_12.\n\n*-------------------------------------------------------------------*\n* Deklaration interner Tabellen\n*-------------------------------------------------------------------*\nDATA flights TYPE TABLE OF zabap_flight.\nDATA flights2 TYPE zabap_flights.\nDATA flight TYPE zabap_flight.\nDATA flight2 TYPE REF TO zabap_flight.\n\n*-------------------------------------------------------------------*\n* Hinzuf\xfcgen von Datens\xe4tzen\n*-------------------------------------------------------------------*\nflights = VALUE #(\n  ( carrier_id = 'LH' connection_id = '0400' flight_date = sy-datlo )\n  ( carrier_id = 'LH' connection_id = '0401' flight_date = sy-datlo) ).\n\nflight-carrier_id = 'LH'.\nflight-connection_id = '0402'.\nflight-flight_date = sy-datlo.\n\nflights = VALUE #( BASE flights (flight ) ).\nAPPEND flight TO flights.\n\n*-------------------------------------------------------------------*\n* Lesen von Datens\xe4tzen\n*-------------------------------------------------------------------*\n* Lesen eines Einzelsatzes\nflight = flights[ 1 ].\nflight = flights[ carrier_id = 'LH' connection_id = '0400' flight_date = sy-datlo ].\n\n* Lesen mehrerer Datens\xe4tze\nLOOP AT flights INTO flight WHERE flight_date >= sy-datlo.\n  WRITE: / |{ flight-carrier_id } { flight-connection_id }|.\nENDLOOP.\n\n* Fehlerbehandlung bei Tabellenausdr\xfccken\nIF line_exists(flights[ 1 ] ).\n  flight = flights[ 1 ].\nENDIF.\n\n*-------------------------------------------------------------------*\n* \xc4ndern von Datens\xe4tzen\n*-------------------------------------------------------------------*\n* \xc4ndern eines Einzelsatzes\nflights[ 1 ]-price = 1000.\nflights[ carrier_id = 'LH' connection_id = '0400' flight_date = sy-datlo ]-price = 1000.\n\n* \xc4ndern mehrerer Datens\xe4tze\nLOOP AT flights REFERENCE INTO flight2.\n  flight2->price = 1000.\nENDLOOP.\n\n*-------------------------------------------------------------------*\n* Sortieren interner Tabellen\n*-------------------------------------------------------------------*\nSORT flights BY carrier_id ASCENDING connection_id DESCENDING flight_date ASCENDING.\n\n*-------------------------------------------------------------------*\n* L\xf6schen von Datens\xe4tzen\n*-------------------------------------------------------------------*\n* L\xf6schen eines Einzelsatzes\nDELETE flights INDEX 1.\n\n* L\xf6schen mehrerer Datens\xe4tze\nDELETE flights WHERE flight_date < sy-datlo.\n\n*-------------------------------------------------------------------*\n* Gr\xf6\xdfe von internen Tabellen\n*-------------------------------------------------------------------*\nDATA(number_of_flights) = lines(flights ).\nWRITE: / number_of_flights.\n")))}d.isMDXComponent=!0}}]);