"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[211],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),k=p(n),c=r,N=k["".concat(s,".").concat(c)]||k[c]||m[c]||i;return n?a.createElement(N,l(l({ref:t},u),{},{components:n})):a.createElement(N,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Sandbox-System ST6 einrichten",description:"",sidebar_position:30,tags:[]},l=void 0,o={unversionedId:"introduction/instructions/setup-st6",id:"introduction/instructions/setup-st6",title:"Sandbox-System ST6 einrichten",description:"",source:"@site/docs/introduction/instructions/setup-st6.md",sourceDirName:"introduction/instructions",slug:"/introduction/instructions/setup-st6",permalink:"/s4hana/docs/introduction/instructions/setup-st6",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/introduction/instructions/setup-st6.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Sandbox-System ST6 einrichten",description:"",sidebar_position:30,tags:[]},sidebar:"introductionSidebar",previous:{title:"ABAP Development Tools (ADT)",permalink:"/s4hana/docs/introduction/instructions/adt"}},s={},p=[{value:"User f\xfcr ST6 beantragen",id:"user-f\xfcr-st6-beantragen",level:2},{value:"ABAP Development Tools installieren",id:"abap-development-tools-installieren",level:2},{value:"ABAP-Projekt anlegen",id:"abap-projekt-anlegen",level:2},{value:"ABAP-Entwicklungspaket anlegen",id:"abap-entwicklungspaket-anlegen",level:2},{value:"BAS einrichten",id:"bas-einrichten",level:2},{value:"SAP Cloud Connector einrichten",id:"sap-cloud-connector-einrichten",level:2},{value:"SAP BTP Trial Subaccount einrichten",id:"sap-btp-trial-subaccount-einrichten",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"user-f\xfcr-st6-beantragen"},"User f\xfcr ST6 beantragen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://vmw4958.wdf.sap.corp:44344/sap/bc/webdynpro/sap/grfn_service_map?WDCONFIGURATIONID=ZDLM_GRAC_FPM_AC_LPD_HOME&sap-config-mode=&sap-client=100&sap-language=EN"},"GRC Service Map"))," \xf6ffnen"),(0,r.kt)("li",{parentName:"ul"},"Funktion ",(0,r.kt)("strong",{parentName:"li"},"Create User Access Request")," ausf\xfchren"),(0,r.kt)("li",{parentName:"ul"},"Funktion ",(0,r.kt)("strong",{parentName:"li"},"User Access \u2013 Add \u2013 System")," ausf\xfchren"),(0,r.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"GO")," bet\xe4tigen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"System: ",(0,r.kt)("strong",{parentName:"li"},"ST6_001")))),(0,r.kt)("li",{parentName:"ul"},"Eintrag ",(0,r.kt)("strong",{parentName:"li"},"ST6_001")," markieren und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Add")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"OK")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Submit")," bet\xe4tigen")),(0,r.kt)("h2",{id:"abap-development-tools-installieren"},"ABAP Development Tools installieren"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JDK herunterladen und installieren"),(0,r.kt)("li",{parentName:"ul"},"Eclipse herunterladen, installieren und starten"),(0,r.kt)("li",{parentName:"ul"},"Funktion ",(0,r.kt)("strong",{parentName:"li"},"Help - Install new Software... - Install new Software...")," ausf\xfchren "),(0,r.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und ",(0,r.kt)("strong",{parentName:"li"},"Enter")," bet\xe4tigen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Work with: ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://tools.hana.ondemand.com/latest"},"https://tools.hana.ondemand.com/latest"))))),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"ABAP Development Tools")," ausw\xe4hlen und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Next >")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Next >")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"I accept the terms of the license agreements")," ausw\xe4hlen und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Finish")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Restart Now")," bet\xe4tigen")),(0,r.kt)("h2",{id:"abap-projekt-anlegen"},"ABAP-Projekt anlegen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SAP Logon herunterladen und installieren"),(0,r.kt)("li",{parentName:"ul"},"SAP Logon starten"),(0,r.kt)("li",{parentName:"ul"},"Funktion ",(0,r.kt)("strong",{parentName:"li"},"Neu")," ausf\xfchren"),(0,r.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und ",(0,r.kt)("strong",{parentName:"li"},"ENTER")," bet\xe4tigen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Suche nach: ",(0,r.kt)("strong",{parentName:"li"},"ST6")))),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"ST6")," markieren und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Weiter >")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"PUBLIC")," markieren und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Fertig stellen")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Eclipse starten"),(0,r.kt)("li",{parentName:"ul"},"Willkommensbildschirm schlie\xdfen"),(0,r.kt)("li",{parentName:"ul"},"Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Open Perspective")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Perspektive ",(0,r.kt)("strong",{parentName:"li"},"ABAP")," ausw\xe4hlen und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"OK")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"New")," bet\xe4tigen und Option ",(0,r.kt)("strong",{parentName:"li"},"ABAP Project")," ausw\xe4hlen"),(0,r.kt)("li",{parentName:"ul"},"Verbindung ",(0,r.kt)("strong",{parentName:"li"},"ST6")," ausw\xe4hlen und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Next >")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Next >")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Finish")," bet\xe4tigen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Client: ",(0,r.kt)("strong",{parentName:"li"},"001")),(0,r.kt)("li",{parentName:"ul"},"User: ",(0,r.kt)("em",{parentName:"li"},"Benutzername")),(0,r.kt)("li",{parentName:"ul"},"Password: ",(0,r.kt)("em",{parentName:"li"},"Passwort")),(0,r.kt)("li",{parentName:"ul"},"Language: ",(0,r.kt)("strong",{parentName:"li"},"EN"))))),(0,r.kt)("admonition",{title:"Hinweis",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Das ST6 ist von au\xdferhalb des SAP Netzwerks nur \xfcber VPN (Big IP Client oder Global Protect) erreichbar.")),(0,r.kt)("h2",{id:"abap-entwicklungspaket-anlegen"},"ABAP-Entwicklungspaket anlegen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rechtsklick auf ",(0,r.kt)("em",{parentName:"li"},"ABAP-Projekt")),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"New \u2013 ABAP Package")," ausw\xe4hlen"),(0,r.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Next >")," bet\xe4tigen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Name: ",(0,r.kt)("strong",{parentName:"li"},"TEST_"),(0,r.kt)("em",{parentName:"li"},"I-User")),(0,r.kt)("li",{parentName:"ul"},"Description: ",(0,r.kt)("em",{parentName:"li"},"Name")))),(0,r.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Next >")," bet\xe4tigen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Software Component: ",(0,r.kt)("strong",{parentName:"li"},"LOCAL"))))),(0,r.kt)("h2",{id:"bas-einrichten"},"BAS einrichten"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"So noch nicht geschehen, einen Trial Account f\xfcr die SAP BTP erstellen (",(0,r.kt)("em",{parentName:"li"},"S4DEV - Col21 - Participant Handbook - Exercise 8"),")"),(0,r.kt)("li",{parentName:"ul"},"So noch nicht geschehen, einen Dev Space f\xfcr das Business Application Studio anlegen (",(0,r.kt)("em",{parentName:"li"},"S4DEV - Col21 - Participant Handbook - Exercise 9"),")")),(0,r.kt)("h2",{id:"sap-cloud-connector-einrichten"},"SAP Cloud Connector einrichten"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SAP Cloud Connector ",(0,r.kt)("a",{parentName:"li",href:"https://tools.hana.ondemand.com/#cloud"},"herunterladen")," und installieren/entpacken "),(0,r.kt)("li",{parentName:"ul"},"SAP Cloud Connector starten (",(0,r.kt)("strong",{parentName:"li"},"go.bat"),")"),(0,r.kt)("li",{parentName:"ul"},"Browser starten"),(0,r.kt)("li",{parentName:"ul"},"Zu ",(0,r.kt)("strong",{parentName:"li"},"https://localhost:8443")," navigieren"),(0,r.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Login")," bet\xe4tigen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Name: ",(0,r.kt)("strong",{parentName:"li"},"Administrator")),(0,r.kt)("li",{parentName:"ul"},"Description: ",(0,r.kt)("strong",{parentName:"li"},"manage")))),(0,r.kt)("li",{parentName:"ul"},"Passwort \xe4ndern"),(0,r.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Save")," bet\xe4tigen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Region: ",(0,r.kt)("em",{parentName:"li"},"SAP BTP Trial Account - Subaccount - Region")),(0,r.kt)("li",{parentName:"ul"},"Subaccount: ",(0,r.kt)("em",{parentName:"li"},"SAP BTP Trial Account - Subaccount - Subaccount ID")),(0,r.kt)("li",{parentName:"ul"},"Display Name: ",(0,r.kt)("em",{parentName:"li"},"Name")),(0,r.kt)("li",{parentName:"ul"},"Subaccount User: ",(0,r.kt)("em",{parentName:"li"},"SAP BTP E-Mail-Adresse")),(0,r.kt)("li",{parentName:"ul"},"Password: ",(0,r.kt)("em",{parentName:"li"},"SAP BTP Passwort")))),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"Cloud To On Premise")," ausw\xe4hlen und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Add (Mapping Virtual To Internal System)")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"ABAP-System")," ausw\xe4hlen und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Next")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"HTTPS")," ausw\xe4hlen und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Next")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Next")," bet\xe4tigen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Internal Host: ",(0,r.kt)("strong",{parentName:"li"},"ldcist6.wdf.sap.corp")),(0,r.kt)("li",{parentName:"ul"},"Internal Port: ",(0,r.kt)("strong",{parentName:"li"},"44300")))),(0,r.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Next")," bet\xe4tigen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Internal Host: ",(0,r.kt)("strong",{parentName:"li"},"st6")),(0,r.kt)("li",{parentName:"ul"},"Internal Port: ",(0,r.kt)("strong",{parentName:"li"},"44300")))),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"None")," ausw\xe4hlen und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Next")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"Use Virtual Host")," ausw\xe4hlen und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Next")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"Check Internal Host")," markieren und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Next")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Eintrag ",(0,r.kt)("strong",{parentName:"li"},"st6:44300")," markieren und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Add (Resources Of st6:44300)")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben, Option ",(0,r.kt)("strong",{parentName:"li"},"Path and All Sub-Paths")," ausw\xe4hlen und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Save")," bet\xe4tigen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"URL path: ",(0,r.kt)("strong",{parentName:"li"},"sap/opu")))),(0,r.kt)("li",{parentName:"ul"},"Optional: Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Check availablity of internal host")," bet\xe4tigen")),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Weitere Informationen zur Installation und Konfiguration k\xf6nnen ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html"},"hier")," gefunden werden.")),(0,r.kt)("h2",{id:"sap-btp-trial-subaccount-einrichten"},"SAP BTP Trial Subaccount einrichten"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An der SAP BTP anmelden"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"SAP BTP Trial Account - Subaccount - Connectivity - Destinations")," ausw\xe4hlen und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"New Destination")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Folgende Informationen eingeben und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"New Property")," bet\xe4tigen",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Name: ",(0,r.kt)("strong",{parentName:"li"},"ST6_001")),(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("strong",{parentName:"li"},"HTTP")),(0,r.kt)("li",{parentName:"ul"},"Description: ",(0,r.kt)("strong",{parentName:"li"},"ST6_001")),(0,r.kt)("li",{parentName:"ul"},"URL: ",(0,r.kt)("strong",{parentName:"li"},"https://st6:44300")),(0,r.kt)("li",{parentName:"ul"},"Proxy Type: ",(0,r.kt)("strong",{parentName:"li"},"OnPremise")),(0,r.kt)("li",{parentName:"ul"},"Authentication: ",(0,r.kt)("strong",{parentName:"li"},"NoAuthentication")))),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"HTML5.DynamicDestiantion")," ausw\xe4hlen, als Wert ",(0,r.kt)("strong",{parentName:"li"},"true")," eingeben und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"New Property")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"sap-client")," ausw\xe4hlen, als Wert ",(0,r.kt)("strong",{parentName:"li"},"001")," eingeben und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"New Property")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"WebIDEEnabled")," ausw\xe4hlen, als Wert ",(0,r.kt)("strong",{parentName:"li"},"true")," eingeben und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"New Property")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("strong",{parentName:"li"},"WebIDEUsage")," ausw\xe4hlen, als Wert ",(0,r.kt)("strong",{parentName:"li"},"dev_abap,odata_abap")," eingeben und Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Save")," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Optional: Drucktaste ",(0,r.kt)("strong",{parentName:"li"},"Check availability of destination connection")," bet\xe4tigen")))}m.isMDXComponent=!0}}]);