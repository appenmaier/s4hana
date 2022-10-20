"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[4654],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=m(t,["components","mdxType","originalType","parentName"]),N=p(n),k=r,s=N["".concat(o,".").concat(k)]||N[k]||u[k]||l;return n?a.createElement(s,i(i({ref:e},d),{},{components:n})):a.createElement(s,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=N;var m={};for(var o in e)hasOwnProperty.call(e,o)&&(m[o]=e[o]);m.originalType=t,m.mdxType="string"==typeof t?t:r,i[1]=m;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},2044:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={title:"SAP Namensrichtlinien",description:"",sidebar_position:10,tags:[]},i=void 0,m={unversionedId:"introduction/additional-material/sap-naming-conventions",id:"introduction/additional-material/sap-naming-conventions",title:"SAP Namensrichtlinien",description:"",source:"@site/docs/introduction/additional-material/sap-naming-conventions.md",sourceDirName:"introduction/additional-material",slug:"/introduction/additional-material/sap-naming-conventions",permalink:"/s4hana/docs/introduction/additional-material/sap-naming-conventions",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/introduction/additional-material/sap-naming-conventions.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"SAP Namensrichtlinien",description:"",sidebar_position:10,tags:[]},sidebar:"introductionSidebar",previous:{title:"Annotationen",permalink:"/s4hana/docs/introduction/additional-material/annotations"},next:{title:"Downloads",permalink:"/s4hana/docs/introduction/additional-material/downloads"}},o={},p=[{value:"Namensrichtlinien f\xfcr Entwicklungsobjekte",id:"namensrichtlinien-f\xfcr-entwicklungsobjekte",level:2},{value:"Namensrichtlinien f\xfcr Datenobjekte",id:"namensrichtlinien-f\xfcr-datenobjekte",level:2}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Quelle: ",(0,r.kt)("a",{parentName:"p",href:"https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm"},"https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/index.htm")),(0,r.kt)("h2",{id:"namensrichtlinien-f\xfcr-entwicklungsobjekte"},"Namensrichtlinien f\xfcr Entwicklungsobjekte"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Typ"),(0,r.kt)("th",{parentName:"tr",align:null},"Bezeichner"),(0,r.kt)("th",{parentName:"tr",align:null},"Beispiel"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Paket"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZABAP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Klasse"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","CL","_","<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZCL_ABAP_FLIGHT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ausnahmenklasse"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","CX","_","<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZCX_ABAP_INVALID_TYPE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nachrichtenklasse"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","CM","_","<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZCM_ABAP_FLIGHT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Schnittstelle"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namesnraum",">","IF","_","<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZIF_ABAP_PARTNER"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Programm"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZABAP_DEMO"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Funktionsgruppe"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZABAP_FLIGHT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Funktionsbaustein"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","_","<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Z_ABAP_GET_FLIGHTS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dom\xe4ne"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZABAP_CHAR3"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datenelement"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZABAP_CARRIER_ID"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Strukturtyp"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZABAP_FLIGHT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tabellentyp"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZABAP_FLIGHTS"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datenbanktabelle"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZABAPFLIGHT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Datenbankview"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZABAPVFLIGHT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAP CDS: Basic Interface-View"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","I_<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZI_ABAP_Flight"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAP CDS: Composite Interface-View"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","I_<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZI_ABAP_FlightWithConnection"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAP CDS: Transactional Interface-View"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","I_<Komponente",">","_","<Beschreibung",">","TP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZI_ABAP_FlightTP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAP CDS: Consumption-View"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","C_<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZC_ABAP_Flight"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAP CDS: Transactional Consumption-View"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","C_<Komponente",">","_","<Beschreibung",">","TP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZC_ABAP_FlightTP"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAP CDS: Value Help"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","C_<Komponente",">","_","<Beschreibung",">","VH"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZC_ABAP_AirportVH"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAP CDS: Extension View"),(0,r.kt)("td",{parentName:"tr",align:null},"<Namensraum",">","E_<Komponente",">","_","<Beschreibung",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZE_ABAP_Flight"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAP CDS: Access Control"),(0,r.kt)("td",{parentName:"tr",align:null},"<Name der CDS-View",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZI_ABAP_FLIGHT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ABAP CDS: Metadaten-Extension"),(0,r.kt)("td",{parentName:"tr",align:null},"<Name der CDS-View",">"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ZC_ABAP_FLIGHT"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Namensraum"),(0,r.kt)("th",{parentName:"tr",align:null},"Beispiel"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefix-Namensraum"),(0,r.kt)("td",{parentName:"tr",align:null},"/DMO/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kunden-Namensraum"),(0,r.kt)("td",{parentName:"tr",align:null},"Z")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SAP-Namensraum"),(0,r.kt)("td",{parentName:"tr",align:null},"FLIGHTMODEL")))),(0,r.kt)("h2",{id:"namensrichtlinien-f\xfcr-datenobjekte"},"Namensrichtlinien f\xfcr Datenobjekte"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prefix"),(0,r.kt)("th",{parentName:"tr",align:null},"Beispiel"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"G: globale Datenobjekte"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"g_number_of_vehicles"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CO: Konstanten"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"co_pi"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"I: Import-Parameter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"i_carrier_id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E: Export-Parameter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"e_carriers"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"R: R\xfcckgabewert"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"r_carrier"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"P: Eingabe-Parameter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"p_carrid"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TY: Datentyp"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ty_carrier"))))))}u.isMDXComponent=!0}}]);