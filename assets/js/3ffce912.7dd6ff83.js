"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[6066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=i,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||r;return n?a.createElement(k,l(l({ref:t},m),{},{components:n})):a.createElement(k,l({ref:t},m))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=n(7462),i=(n(7294),n(3905));const r={title:"R36 einrichten (DHBW)",description:"",sidebar_position:40,tags:[]},l=void 0,o={unversionedId:"additional-material/instructions/setup-r36",id:"additional-material/instructions/setup-r36",title:"R36 einrichten (DHBW)",description:"",source:"@site/docs/additional-material/instructions/setup-r36.md",sourceDirName:"additional-material/instructions",slug:"/additional-material/instructions/setup-r36",permalink:"/s4hana/additional-material/instructions/setup-r36",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/additional-material/instructions/setup-r36.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"R36 einrichten (DHBW)",description:"",sidebar_position:40,tags:[]},sidebar:"additionalMaterialSidebar",previous:{title:"ST6 einrichten (SAP)",permalink:"/s4hana/additional-material/instructions/setup-st6"},next:{title:"abapGit auf dem SAP NetWeaver verwenden",permalink:"/s4hana/additional-material/instructions/use-git-onpremise"}},p={},u=[{value:"ABAP-Projekt anlegen",id:"abap-projekt-anlegen",level:2},{value:"ABAP-Entwicklungspaket anlegen",id:"abap-entwicklungspaket-anlegen",level:2}],m={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"abap-projekt-anlegen"},"ABAP-Projekt anlegen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/s4hana/additional-material/adt"},"ABAP Development Tools")," starten"),(0,i.kt)("li",{parentName:"ul"},"Drucktaste ",(0,i.kt)("inlineCode",{parentName:"li"},"Open Perspective")," bet\xe4tigen"),(0,i.kt)("li",{parentName:"ul"},"Perspektive ",(0,i.kt)("inlineCode",{parentName:"li"},"ABAP")," ausw\xe4hlen und Drucktaste ",(0,i.kt)("inlineCode",{parentName:"li"},"OK")," bet\xe4tigen"),(0,i.kt)("li",{parentName:"ul"},"Drucktaste ",(0,i.kt)("inlineCode",{parentName:"li"},"New")," bet\xe4tigen und Option ",(0,i.kt)("inlineCode",{parentName:"li"},"ABAP Project")," ausw\xe4hlen"),(0,i.kt)("li",{parentName:"ul"},"Drucktaste ",(0,i.kt)("inlineCode",{parentName:"li"},"new system connection")," bet\xe4tigen"),(0,i.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben, Option ",(0,i.kt)("inlineCode",{parentName:"li"},"Activate Secure Network Communication (SNC)")," deaktivieren und Drucktaste ",(0,i.kt)("inlineCode",{parentName:"li"},"Next >")," bet\xe4tigen",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"System ID: ",(0,i.kt)("inlineCode",{parentName:"li"},"R36")),(0,i.kt)("li",{parentName:"ul"},"Connection Type: ",(0,i.kt)("inlineCode",{parentName:"li"},"Group Selection")),(0,i.kt)("li",{parentName:"ul"},"Message Server: ",(0,i.kt)("inlineCode",{parentName:"li"},"R36z")),(0,i.kt)("li",{parentName:"ul"},"Group: ",(0,i.kt)("inlineCode",{parentName:"li"},"UCC_Logon")),(0,i.kt)("li",{parentName:"ul"},"SAProuter String: ",(0,i.kt)("inlineCode",{parentName:"li"},"/H/141.44.38.2/S/3299")))),(0,i.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,i.kt)("inlineCode",{parentName:"li"},"Finish")," bet\xe4tigen",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Client: ",(0,i.kt)("inlineCode",{parentName:"li"},"233")),(0,i.kt)("li",{parentName:"ul"},"User: ",(0,i.kt)("inlineCode",{parentName:"li"},"DEVTG-")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"Deine Benutzernummer")),(0,i.kt)("li",{parentName:"ul"},"Password: ",(0,i.kt)("inlineCode",{parentName:"li"},"tlestart")),(0,i.kt)("li",{parentName:"ul"},"Language: ",(0,i.kt)("inlineCode",{parentName:"li"},"EN"))))),(0,i.kt)("h2",{id:"abap-entwicklungspaket-anlegen"},"ABAP-Entwicklungspaket anlegen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Rechtsklick auf das erstellte ABAP-Projekt"),(0,i.kt)("li",{parentName:"ul"},"Option ",(0,i.kt)("inlineCode",{parentName:"li"},"New - ABAP Package")," ausw\xe4hlen"),(0,i.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,i.kt)("inlineCode",{parentName:"li"},"Next >")," bet\xe4tigen",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"ZTG")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"Deine Benutzernummer")),(0,i.kt)("li",{parentName:"ul"},"Description: ",(0,i.kt)("inlineCode",{parentName:"li"},"Dein Name")))),(0,i.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,i.kt)("inlineCode",{parentName:"li"},"Next >")," bet\xe4tigen",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Software Component: ",(0,i.kt)("inlineCode",{parentName:"li"},"HOME")),(0,i.kt)("li",{parentName:"ul"},"Transport Layer: ",(0,i.kt)("inlineCode",{parentName:"li"},"ZR36")))),(0,i.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,i.kt)("inlineCode",{parentName:"li"},"Finish")," bet\xe4tigen",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Request Description: ",(0,i.kt)("inlineCode",{parentName:"li"},"Dein Name"))))))}s.isMDXComponent=!0}}]);