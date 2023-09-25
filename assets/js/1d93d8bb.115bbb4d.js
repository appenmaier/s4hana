"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[7639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,E=d["".concat(c,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(E,s(s({ref:t},p),{},{components:n})):r.createElement(E,s({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6060:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Nachrichten festlegen",description:"",sidebar_position:120},s=void 0,i={unversionedId:"rap/cookbook/define-messages",id:"rap/cookbook/define-messages",title:"Nachrichten festlegen",description:"",source:"@site/docs/rap/cookbook/define-messages.md",sourceDirName:"rap/cookbook",slug:"/rap/cookbook/define-messages",permalink:"/s4hana/rap/cookbook/define-messages",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap/cookbook/define-messages.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{title:"Nachrichten festlegen",description:"",sidebar_position:120},sidebar:"rapSidebar",previous:{title:"Sortierung implementieren",permalink:"/s4hana/rap/cookbook/implement-sorting"},next:{title:"Aktionen festlegen",permalink:"/s4hana/rap/cookbook/define-actions"}},c={},l=[{value:"Message Class Z_TRAVEL",id:"message-class-z_travel",level:2},{value:"ABAP Class ZCM_TRAVEL",id:"abap-class-zcm_travel",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"TODO",type:"danger"}),(0,a.kt)("h2",{id:"message-class-z_travel"},"Message Class Z_TRAVEL"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Nachrichtennummer"),(0,a.kt)("th",{parentName:"tr",align:null},"Nachricht"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"000"),(0,a.kt)("td",{parentName:"tr",align:null},"Booking with ID &1 is already cancelled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"001"),(0,a.kt)("td",{parentName:"tr",align:null},"Booking with ID &1 successfully cancelled")))),(0,a.kt)("h2",{id:"abap-class-zcm_travel"},"ABAP Class ZCM_TRAVEL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-abap"},"CLASS zcm_travel DEFINITION\n  PUBLIC\n  INHERITING FROM cx_static_check\n  FINAL\n  CREATE PUBLIC .\n\n  PUBLIC SECTION.\n\n    \"Interfaces\n    INTERFACES if_abap_behv_message.\n    INTERFACES if_t100_message.\n    INTERFACES if_t100_dyn_msg.\n\n    \"Message Constants\n    CONSTANTS:\n      BEGIN OF booking_already_cancelled,\n        msgid TYPE symsgid VALUE 'Z_TRAVEL',\n        msgno TYPE symsgno VALUE '000',\n        attr1 TYPE scx_attrname VALUE 'BOOKING_ID',\n        attr2 TYPE scx_attrname VALUE '',\n        attr3 TYPE scx_attrname VALUE '',\n        attr4 TYPE scx_attrname VALUE '',\n      END OF booking_already_cancelled.\n\n    CONSTANTS:\n      BEGIN OF booking_cancelled_successfully,\n        msgid TYPE symsgid VALUE 'Z_TRAVEL',\n        msgno TYPE symsgno VALUE '001',\n        attr1 TYPE scx_attrname VALUE 'BOOKING_ID',\n        attr2 TYPE scx_attrname VALUE '',\n        attr3 TYPE scx_attrname VALUE '',\n        attr4 TYPE scx_attrname VALUE '',\n      END OF booking_cancelled.\n    \n    \"Attributs\n    DATA booking_id TYPE /dmo/booking_id.\n\n    \"Constructor\n    METHODS constructor\n      IMPORTING\n        severity   TYPE if_abap_behv_message=>t_severity DEFAULT if_abap_behv_message=>severity-error\n        textid     LIKE if_t100_message=>t100key DEFAULT if_t100_message=>default_textid\n        previous   LIKE previous OPTIONAL\n        booking_id TYPE /dmo/booking_id OPTIONAL.\n\n  PROTECTED SECTION.\n\n  PRIVATE SECTION.\n\nENDCLASS.\n\nCLASS zcm_travel IMPLEMENTATION.\n\n  METHOD constructor ##ADT_SUPPRESS_GENERATION.\n    super->constructor( previous = previous ).\n\n    if_t100_message~t100key = textid.\n    me->if_abap_behv_message~m_severity = severity.\n    me->booking_id = booking_id.\n  ENDMETHOD.\n\nENDCLASS.\n")))}m.isMDXComponent=!0}}]);