"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[7819],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,A=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(A,l(l({ref:t},p),{},{components:n})):r.createElement(A,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Einf\xfchrung",slug:"/",description:"",sidebar_position:10,tags:[]},l=void 0,o={unversionedId:"documentation/introduction",id:"documentation/introduction",title:"Einf\xfchrung",description:"",source:"@site/docs/documentation/introduction.md",sourceDirName:"documentation",slug:"/",permalink:"/s4hana/",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/documentation/introduction.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Einf\xfchrung",slug:"/",description:"",sidebar_position:10,tags:[]},sidebar:"documentationSidebar",next:{title:"ABAP RESTful Application Programming Model (RAP)",permalink:"/s4hana/documentation/rap"}},s={},u=[{value:"Architektur von SAP S/4HANA",id:"architektur-von-sap-s4hana",level:2},{value:"Evolution des ABAP Programmiermodells",id:"evolution-des-abap-programmiermodells",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Diese Webseite sowie die dazugeh\xf6rigen Schulungen bzw. die dazugeh\xf6rige Vorlesung sollen eine systematische Einf\xfchrung in die Anwendungsentwicklung in SAP S/4HANA erm\xf6glichen. Hierzu werden wichtige, praxisrelevante Konzepte und Methoden der Anwendungsentwicklung vorgestellt, wobei der Fokus auf der Entwicklung transaktionaler SAP Fiori elements Apps liegt."),(0,a.kt)("h2",{id:"architektur-von-sap-s4hana"},"Architektur von SAP S/4HANA"),(0,a.kt)("p",null,"Sowohl SAP S/4HANA als auch SAP S/4HANA Cloud basieren auf einem klassischen 3-Schichten-Modell:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die ",(0,a.kt)("em",{parentName:"li"},"Datenbankschicht")," ist f\xfcr die Verwaltung der Daten zust\xe4ndig"),(0,a.kt)("li",{parentName:"ul"},"Die ",(0,a.kt)("em",{parentName:"li"},"Applikationsschicht")," ist f\xfcr die Gesch\xe4fts- bzw. Servicelogik zust\xe4ndig"),(0,a.kt)("li",{parentName:"ul"},"Die ",(0,a.kt)("em",{parentName:"li"},"Pr\xe4sentationsschicht")," ist f\xfcr die Darstellung der Daten sowie die Interaktion mit dem Anwender zust\xe4ndig")),(0,a.kt)("p",null,"Technologisch setzen sowohl SAP S/4HANA als auch SAP S/4HANA Cloud auf eine SAP HANA als Datenbank sowie auf SAP Fiori UIs bzw. Web APIs zur Pr\xe4sentation. In SAP S/4HANA kommt als Applikationsserver ein SAP NetWeaver, bei SAP S/4HANA Cloud die ABAP Environment der SAP BTP zum Einsatz."),(0,a.kt)("mermaid",{value:"flowchart RL\n    bo --SQL--- saphana\n    query --SQL--- saphana\n    orchestrationframework --- bo\n    orchestrationframework --- query\n    sapgateway --- orchestrationframework\n    sapfioriui --OData/HTTP--- sapgateway\n    webapi --OData/HTTP --- sapgateway\n\n    subgraph Datenbankschicht\n        saphana[(SAP HANA)]\n    end\n\n    subgraph Applikationsschicht\n        subgraph Gesch\xe4ftslogik\n            bo(Business Object)\n            query(Query)\n        end\n        subgraph Laufzeitumgebung\n            sapgateway(SAP Gateway)\n            orchestrationframework(Orchestration Framework)\n        end\n    end\n\n    subgraph Pr\xe4sentationsschicht\n        sapfioriui(SAP Fiori UI)\n        webapi(Web API)\n    end\n\n    style Datenbankschicht fill:#9abcf2\n    style Applikationsschicht fill:#9abcf2\n    style Pr\xe4sentationsschicht fill:#9abcf2\n    style Gesch\xe4ftslogik fill:#fd9c9f\n    style Laufzeitumgebung fill:#fd9c9f"}),(0,a.kt)("h2",{id:"evolution-des-abap-programmiermodells"},"Evolution des ABAP Programmiermodells"),(0,a.kt)("p",null,"Das mittlerweile als ",(0,a.kt)("em",{parentName:"p"},"klassische ABAP Programmiermodell")," bekannte ABAP Programmiermodell wurde ursp\xfcnglich f\xfcr die Anwendungsentwicklung f\xfcr SAP R/3 entworfen. Es setzt \xfcberwiegend auf klassische SAP-Technologien wie klassisches ABAP, klassische Datenbankviews sowie klassische ABAP-Programme, Dynpros und WebDynpros. F\xfcr die Anwendungsentwicklung in SAP S/4HANA wurde ein neues Programmiermodell, das sogenannte ",(0,a.kt)("em",{parentName:"p"},"ABAP Programmiermodell f\xfcr SAP Fiori")," entwickelt. Dieses unterst\xfctzt die Entwicklung verschiedener Fiori-Anwendungen wie Transaktions-, Such-, Analyse- und Planungs-Apps und basiert auf erprobten Technologien wie ABAP CDS zur Definition semantisch reichhaltiger Datenmodelle, dem OData-Protokoll, dem Business Object Processing Framework (BOPF) sowie SAPUI5-basierten Benutzeroberfl\xe4chen. Das ",(0,a.kt)("em",{parentName:"p"},"ABAP RESTful Application Programming Model")," (RAP) wiederum stellt eine konsequente Weiterentwicklung des ABAP Programmiermodells f\xfcr SAP Fiori dar und wird vor allem f\xfcr die Anwendungsentwicklung in SAP S/4HANA (Cloud) verwendet."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null},"Classic ABAP"),(0,a.kt)("th",{parentName:"tr",align:null},"ABAP Programming Model for SAP Fiori"),(0,a.kt)("th",{parentName:"tr",align:null},"ABAP RESTful Application Programming Model (RAP)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Applikationsserver"),(0,a.kt)("td",{parentName:"tr",align:null},"SAP NetWeaver"),(0,a.kt)("td",{parentName:"tr",align:null},"SAP NetWeaver"),(0,a.kt)("td",{parentName:"tr",align:null},"SAP NetWeaver, SAP BTP - ABAP Environment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Entwicklungsumgebung"),(0,a.kt)("td",{parentName:"tr",align:null},"SAPUI, ADT"),(0,a.kt)("td",{parentName:"tr",align:null},"SAPGUI, ADT, SAP BAS"),(0,a.kt)("td",{parentName:"tr",align:null},"ADT, SAP BAS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Release Fokus"),(0,a.kt)("td",{parentName:"tr",align:null},"SAP R/3"),(0,a.kt)("td",{parentName:"tr",align:null},"SAP S/4HANA"),(0,a.kt)("td",{parentName:"tr",align:null},"SAP S/4HANA (Cloud)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Datenmodellierung"),(0,a.kt)("td",{parentName:"tr",align:null},"Data Dictionary"),(0,a.kt)("td",{parentName:"tr",align:null},"ABAP CDS"),(0,a.kt)("td",{parentName:"tr",align:null},"ABAP CDS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Service-Definition"),(0,a.kt)("td",{parentName:"tr",align:null},"SEGW"),(0,a.kt)("td",{parentName:"tr",align:null},"SEGW, @OData"),(0,a.kt)("td",{parentName:"tr",align:null},"Business Service")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Service-Implementierung"),(0,a.kt)("td",{parentName:"tr",align:null},"Classic ABAP, BOPF"),(0,a.kt)("td",{parentName:"tr",align:null},"ABAP, ABAP CDS, BOPF"),(0,a.kt)("td",{parentName:"tr",align:null},"ABAP, ABAP CDS, RAP BO")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Oberfl\xe4chen"),(0,a.kt)("td",{parentName:"tr",align:null},"Report, (Web-)Dynpro"),(0,a.kt)("td",{parentName:"tr",align:null},"SAPUI5"),(0,a.kt)("td",{parentName:"tr",align:null},"SAPUI5")))))}d.isMDXComponent=!0}}]);