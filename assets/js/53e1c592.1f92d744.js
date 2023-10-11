"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[5044],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=r,b=d["".concat(o,".").concat(u)]||d[u]||m[u]||l;return t?a.createElement(b,i(i({ref:n},p),{},{components:t})):a.createElement(b,i({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2942:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const l={title:"ABAP-Objects-09",description:""},i=void 0,s={unversionedId:"exercises/abap-objects/abap-objects-09",id:"exercises/abap-objects/abap-objects-09",title:"ABAP-Objects-09",description:"",source:"@site/docs/exercises/abap-objects/abap-objects-09.md",sourceDirName:"exercises/abap-objects",slug:"/exercises/abap-objects/abap-objects-09",permalink:"/s4hana/exercises/abap-objects/abap-objects-09",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/exercises/abap-objects/abap-objects-09.md",tags:[],version:"current",frontMatter:{title:"ABAP-Objects-09",description:""},sidebar:"exercisesSidebar",previous:{title:"ABAP-Objects-08",permalink:"/s4hana/exercises/abap-objects/abap-objects-08"},next:{title:"ABAP CDS",permalink:"/s4hana/exercises/abap-cds/"}},o={},c=[{value:"Informationen zum globalen Tabellentyp <code>Z???_PARTNERS</code>",id:"informationen-zum-globalen-tabellentyp-z_partners",level:2},{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zum Klasse <code>ZCL_???_TRAVEL_AGENCY</code>",id:"hinweise-zum-klasse-zcl__travel_agency",level:2}],p={toc:c};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Erstelle die Schnittstelle ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIF_???_PARTNER")," anhand des abgebildeten Klassendiagramms"),(0,r.kt)("li",{parentName:"ol"},"Passe die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"ZCL_???_CARRIER")," anhand des abgebildeten Klassendiagramms an"),(0,r.kt)("li",{parentName:"ol"},"Lege den globalen Tabellentypen ",(0,r.kt)("inlineCode",{parentName:"li"},"Z???_PARTNERS")," anhand der abgebildeten Informationen an"),(0,r.kt)("li",{parentName:"ol"},"Erstelle die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"ZCL_???_TRAVEL_AGENCY")," anhand des abgebildeten Klassendiagramms"),(0,r.kt)("li",{parentName:"ol"},"Passe das ABAP-Programm ",(0,r.kt)("inlineCode",{parentName:"li"},"Z???_MAIN_AIRPLANES")," so an, dass neben den Flugzeugen und der Fluggesellschaft auch ein Reiseb\xfcro erzeugt wird. Die Fluggesellschaft soll dem Reiseb\xfcro zugewiesen und alle Informationen des Reiseb\xfcros auf dem Bildschirm ausgegeben\nwerden")),(0,r.kt)("h2",{id:"informationen-zum-globalen-tabellentyp-z_partners"},"Informationen zum globalen Tabellentyp ",(0,r.kt)("inlineCode",{parentName:"h2"},"Z???_PARTNERS")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Referenztyp: ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIF_???_PARTNER")),(0,r.kt)("li",{parentName:"ul"},"Tabellenart: Standardtabelle"),(0,r.kt)("li",{parentName:"ul"},"Prim\xe4rschl\xfcssel: Standardschl\xfcssel")),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("mermaid",{value:"classDiagram\n    cl_carrier o-- cl_airplane\n    cl_airplane <|-- cl_passenger_plane\n    cl_airplane <|-- cl_cargo_plane\n    if_partner <|.. cl_carrier\n    cl_travel_agency o-- if_partner\n\n    class cl_airplane {\n      <<abstract>>\n      -name string\n      -plane_type string\n      -number_of_airplanes i$\n      +constructor(name string, plane_type string)\n      +to_string()* string\n    }\n\n    class cl_passenger_plane {\n      -number_of_seats i\n      +constructor(name string, plane_type string, number_of_seats i)\n      +to_string() string\n    }\n\n    class cl_cargo_plane {\n      -cargo_in_tons i\n      +constructor(name string, plane_type string, cargo_in_tons i)\n      +to_string() string\n    }\n\n    class cl_carrier {\n      -name string\n      -airplanes cl_airplane[*]\n      +constructor(name string)\n      +add_airplane(airplane cl_airplane) void\n      +get_biggest_cargo_plane() cl_cargo_plane\n      +to_string() string\n    }\n\n    class if_partner {\n      <<interface>>\n      +to_string() string\n    }\n\n    class cl_travel_agency {\n      -name string\n      -partners if_partner[*]\n      +constructor(name string)\n      +add_partner(partner if_partner) void\n      +to_string() string\n    }"}),(0,r.kt)("h2",{id:"hinweise-zum-klasse-zcl__travel_agency"},"Hinweise zum Klasse ",(0,r.kt)("inlineCode",{parentName:"h2"},"ZCL_???_TRAVEL_AGENCY")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"VOID TO_STRING()")," soll alle Instanzattribute zu einer Zeichenkette zusammenfassen und diese zur\xfcckgeben")))}m.isMDXComponent=!0}}]);