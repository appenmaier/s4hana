"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[7594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?i.createElement(k,l(l({ref:t},p),{},{components:n})):i.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const r={title:"Schulungs-System S4D einrichten",description:"",sidebar_position:10,tags:[]},l=void 0,o={unversionedId:"additional-material/instructions/setup-s4d",id:"additional-material/instructions/setup-s4d",title:"Schulungs-System S4D einrichten",description:"",source:"@site/docs/additional-material/instructions/setup-s4d.md",sourceDirName:"additional-material/instructions",slug:"/additional-material/instructions/setup-s4d",permalink:"/s4hana/additional-material/instructions/setup-s4d",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/additional-material/instructions/setup-s4d.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Schulungs-System S4D einrichten",description:"",sidebar_position:10,tags:[]},sidebar:"additionalMaterialSidebar",previous:{title:"Anleitungen",permalink:"/s4hana/additional-material/instructions/"},next:{title:"Sandbox-System ST6 einrichten",permalink:"/s4hana/additional-material/instructions/setup-st6"}},s={},u=[{value:"Schulungslandschaft einrichten",id:"schulungslandschaft-einrichten",level:2},{value:"ABAP Development Tools einrichten",id:"abap-development-tools-einrichten",level:2},{value:"ABAP-Entwicklungspaket anlegen",id:"abap-entwicklungspaket-anlegen",level:2},{value:"BAS einrichten (nur f\xfcr UX400 und S4DEV)",id:"bas-einrichten-nur-f\xfcr-ux400-und-s4dev",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"schulungslandschaft-einrichten"},"Schulungslandschaft einrichten"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://class.learning.sap.com"},"SAP Learning Class")," \xf6ffnen"),(0,a.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,a.kt)("inlineCode",{parentName:"li"},"Logon")," bet\xe4tigen",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"System: ",(0,a.kt)("inlineCode",{parentName:"li"},"Das Schulungssystem")," (z.B. ST-UT44S-016)"),(0,a.kt)("li",{parentName:"ul"},"Username: ",(0,a.kt)("inlineCode",{parentName:"li"},"Dein Schulungssystem Benutzername")," (z.B. A71674013-000)"),(0,a.kt)("li",{parentName:"ul"},"Password: ",(0,a.kt)("inlineCode",{parentName:"li"},"Dein Schulungssystem Passwort")," (z.B. fDE_S4D400_22)"))),(0,a.kt)("li",{parentName:"ul"},"WTS-Initialisierung starten (",(0,a.kt)("em",{parentName:"li"},"Start - Initialize Environment - Initialize ADM-WTS"),")"),(0,a.kt)("li",{parentName:"ul"},"Drucktaste ",(0,a.kt)("inlineCode",{parentName:"li"},"OK")," bet\xe4tigen"),(0,a.kt)("li",{parentName:"ul"},"Drucktaste ",(0,a.kt)("inlineCode",{parentName:"li"},"OK")," bet\xe4tigen")),(0,a.kt)("h2",{id:"abap-development-tools-einrichten"},"ABAP Development Tools einrichten"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SAP Logon starten (",(0,a.kt)("em",{parentName:"li"},"Start - SAP Applications - SAP Logon"),")"),(0,a.kt)("li",{parentName:"ul"},"Eclipse starten (",(0,a.kt)("em",{parentName:"li"},"Start - SAP Applications - Eclipse"),")"),(0,a.kt)("li",{parentName:"ul"},"Willkommensbildschirm schlie\xdfen"),(0,a.kt)("li",{parentName:"ul"},"Drucktaste ",(0,a.kt)("inlineCode",{parentName:"li"},"Open Perspective")," bet\xe4tigen"),(0,a.kt)("li",{parentName:"ul"},"Perspektive ",(0,a.kt)("inlineCode",{parentName:"li"},"ABAP")," ausw\xe4hlen und Drucktaste ",(0,a.kt)("inlineCode",{parentName:"li"},"OK")," bet\xe4tigen"),(0,a.kt)("li",{parentName:"ul"},"Drucktaste ",(0,a.kt)("inlineCode",{parentName:"li"},"New")," bet\xe4tigen und Option ",(0,a.kt)("inlineCode",{parentName:"li"},"ABAP Project")," ausw\xe4hlen"),(0,a.kt)("li",{parentName:"ul"},"Verbindung ",(0,a.kt)("inlineCode",{parentName:"li"},"S4D")," ausw\xe4hlen und Drucktaste ",(0,a.kt)("inlineCode",{parentName:"li"},"Next >")," bet\xe4tigen"),(0,a.kt)("li",{parentName:"ul"},"Drucktaste ",(0,a.kt)("inlineCode",{parentName:"li"},"Next ")," bet\xe4tigen"),(0,a.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,a.kt)("strong",{parentName:"li"},"Finish")," bet\xe4tigen",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Client: ",(0,a.kt)("inlineCode",{parentName:"li"},"100")),(0,a.kt)("li",{parentName:"ul"},"User: ",(0,a.kt)("inlineCode",{parentName:"li"},"Dein S4D Benutzername")," (z.B. TRAIN-00)"),(0,a.kt)("li",{parentName:"ul"},"Password: ",(0,a.kt)("inlineCode",{parentName:"li"},"Dein S4D Passwort")," (z.B. Welcome2022)"),(0,a.kt)("li",{parentName:"ul"},"Language: ",(0,a.kt)("inlineCode",{parentName:"li"},"EN"))))),(0,a.kt)("h2",{id:"abap-entwicklungspaket-anlegen"},"ABAP-Entwicklungspaket anlegen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Rechtsklick auf das erstellte ABAP Projekt"),(0,a.kt)("li",{parentName:"ul"},"Option ",(0,a.kt)("inlineCode",{parentName:"li"},"New - ABAP Package")," ausw\xe4hlen"),(0,a.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,a.kt)("inlineCode",{parentName:"li"},"Next >")," bet\xe4tigen",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"Z")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Deine Gruppennummer")," (z.B. Z00)"),(0,a.kt)("li",{parentName:"ul"},"Description: ",(0,a.kt)("inlineCode",{parentName:"li"},"Dein Name")," (z.B. Max M\xfcller)"))),(0,a.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,a.kt)("inlineCode",{parentName:"li"},"Next >")," bet\xe4tigen",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Software Component: ",(0,a.kt)("inlineCode",{parentName:"li"},"HOME")),(0,a.kt)("li",{parentName:"ul"},"Transport Layer: ",(0,a.kt)("inlineCode",{parentName:"li"},"ZS4D")))),(0,a.kt)("li",{parentName:"ul"},"Drucktaste ",(0,a.kt)("inlineCode",{parentName:"li"},"Finish")," bet\xe4tigen")),(0,a.kt)("h2",{id:"bas-einrichten-nur-f\xfcr-ux400-und-s4dev"},"BAS einrichten (nur f\xfcr UX400 und S4DEV)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"So noch nicht geschehen, einen Trial Account f\xfcr die SAP BTP erstellen (",(0,a.kt)("em",{parentName:"li"},"S4DEV - Col21 - Participant Handbook - Exercise 8"),")"),(0,a.kt)("li",{parentName:"ul"},"So noch nicht geschehen, einen Dev Space f\xfcr das Business Application Studio anlegen (",(0,a.kt)("em",{parentName:"li"},"S4DEV - Col21 - Participant Handbook - Exercise 9"),")"),(0,a.kt)("li",{parentName:"ul"},"Das Business Application Studio mit dem S4D verbinden (",(0,a.kt)("em",{parentName:"li"},"S4DEV - Col21 - Participant Handbook - Exercise 10"),")")),(0,a.kt)("admonition",{title:"Hinweis",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Bei der Anmeldung am Cloud Connector muss darauf geachtet werden, dass sich maximal 10 Teilnehmer:innen gleichzeitig anmelden k\xf6nnen. Nach der\nEinrichtung des Cloud Connectors also bitte wieder abmelden.")))}c.isMDXComponent=!0}}]);