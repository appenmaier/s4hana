"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[6310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},E=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),E=c(n),u=r,d=E["".concat(l,".").concat(u)]||E[u]||p[u]||s;return n?a.createElement(d,o(o({ref:t},m),{},{components:n})):a.createElement(d,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=E;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}E.displayName="MDXCreateElement"},9069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const s={title:"12. Nachrichten festlegen",description:"",sidebar_position:120},o=void 0,i={unversionedId:"rap-cookbook/define-messages",id:"rap-cookbook/define-messages",title:"12. Nachrichten festlegen",description:"",source:"@site/docs/rap-cookbook/define-messages.md",sourceDirName:"rap-cookbook",slug:"/rap-cookbook/define-messages",permalink:"/s4hana/rap-cookbook/define-messages",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap-cookbook/define-messages.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{title:"12. Nachrichten festlegen",description:"",sidebar_position:120},sidebar:"rapCookbookSidebar",previous:{title:"11. Sortierung implementieren",permalink:"/s4hana/rap-cookbook/implement-sorting"},next:{title:"13. Aktionen festlegen",permalink:"/s4hana/rap-cookbook/define-actions"}},l={},c=[{value:"Message Class Z_TRAVEL",id:"message-class-z_travel",level:2},{value:"Nachrichtenklasse ZCM_TRAVEL",id:"nachrichtenklasse-zcm_travel",level:2}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Message Class f\xfcr Reisen erstellen"),(0,r.kt)("li",{parentName:"ul"},"Nachrichtenklasse f\xfcr Reisen erstellen")),(0,r.kt)("h2",{id:"message-class-z_travel"},"Message Class Z_TRAVEL"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Nachrichtennummer"),(0,r.kt)("th",{parentName:"tr",align:null},"Nachricht"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"000"),(0,r.kt)("td",{parentName:"tr",align:null},"This is a Test Message from &1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"001"),(0,r.kt)("td",{parentName:"tr",align:null},"Travel &1 is already cancelled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"002"),(0,r.kt)("td",{parentName:"tr",align:null},"Travel &1 was successfully cancelled")))),(0,r.kt)("h2",{id:"nachrichtenklasse-zcm_travel"},"Nachrichtenklasse ZCM_TRAVEL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap",metastring:'title="ZCM_TRAVEL.abap" showLineNumbers',title:'"ZCM_TRAVEL.abap"',showLineNumbers:!0},"//highlight-start\nCLASS zcm_travel DEFINITION PUBLIC\n  INHERITING FROM cx_static_check FINAL CREATE PUBLIC.\n\n  PUBLIC SECTION.\n\n    \"Interfaces\n    INTERFACES if_abap_behv_message.\n    INTERFACES if_t100_message.\n    INTERFACES if_t100_dyn_msg.\n\n    \"Message Constants\n    CONSTANTS:\n      BEGIN OF test_message,\n        msgid TYPE symsgid VALUE 'Z_TRAVEL',\n        msgno TYPE symsgno VALUE '000',\n        attr1 TYPE scx_attrname VALUE 'USER_NAME',\n        attr2 TYPE scx_attrname VALUE '',\n        attr3 TYPE scx_attrname VALUE '',\n        attr4 TYPE scx_attrname VALUE '',\n      END OF test_message.\n\n    CONSTANTS:\n      BEGIN OF travel_already_cancelled,\n        msgid TYPE symsgid VALUE 'Z_TRAVEL',\n        msgno TYPE symsgno VALUE '001',\n        attr1 TYPE scx_attrname VALUE 'TRAVEL',\n        attr2 TYPE scx_attrname VALUE '',\n        attr3 TYPE scx_attrname VALUE '',\n        attr4 TYPE scx_attrname VALUE '',\n      END OF travel_already_cancelled.\n\n    CONSTANTS:\n      BEGIN OF travel_cancelled_successfully,\n        msgid TYPE symsgid VALUE 'Z_TRAVEL',\n        msgno TYPE symsgno VALUE '002',\n        attr1 TYPE scx_attrname VALUE 'TRAVEL',\n        attr2 TYPE scx_attrname VALUE '',\n        attr3 TYPE scx_attrname VALUE '',\n        attr4 TYPE scx_attrname VALUE '',\n      END OF travel_cancelled_successfully.\n\n    \"Attributs\n    DATA user_name TYPE syuname.\n    DATA travel TYPE /dmo/description.\n\n    \"Constructor\n    METHODS constructor\n      IMPORTING\n        severity  TYPE if_abap_behv_message=>t_severity DEFAULT if_abap_behv_message=>severity-error\n        textid    LIKE if_t100_message=>t100key DEFAULT if_t100_message=>default_textid\n        previous  LIKE previous OPTIONAL\n        user_name TYPE syuname OPTIONAL\n        travel    TYPE /dmo/description OPTIONAL.\n\n  PROTECTED SECTION.\n\n  PRIVATE SECTION.\n\nENDCLASS.\n\nCLASS zcm_travel IMPLEMENTATION.\n\n  METHOD constructor ##ADT_SUPPRESS_GENERATION.\n    super->constructor( previous = previous ).\n\n    if_t100_message~t100key = textid.\n    me->if_abap_behv_message~m_severity = severity.\n    me->user_name = user_name.\n    me->travel = travel.\n  ENDMETHOD.\n\nENDCLASS.\n//highlight-end\n")))}p.isMDXComponent=!0}}]);