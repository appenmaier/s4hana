"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[6559],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},4407:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"ABAP-CDS-05",description:""},s=void 0,o={unversionedId:"exercises/abap-cds/abap-cds-05",id:"exercises/abap-cds/abap-cds-05",title:"ABAP-CDS-05",description:"",source:"@site/docs/exercises/abap-cds/abap-cds-05.md",sourceDirName:"exercises/abap-cds",slug:"/exercises/abap-cds/abap-cds-05",permalink:"/s4hana/exercises/abap-cds/abap-cds-05",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/exercises/abap-cds/abap-cds-05.md",tags:[],version:"current",frontMatter:{title:"ABAP-CDS-05",description:""},sidebar:"exercisesSidebar",previous:{title:"ABAP-CDS-04",permalink:"/s4hana/exercises/abap-cds/abap-cds-04"},next:{title:"ABAP-CDS-06",permalink:"/s4hana/exercises/abap-cds/abap-cds-06"}},l={},c=[{value:"ER-Modell",id:"er-modell",level:2},{value:"Hinweise",id:"hinweise",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Erstelle mit Hilfe des abgebildeten ER-Modells die ABAP CDS View ",(0,a.kt)("inlineCode",{parentName:"p"},"ZI_???_CustomerKPIs"),"."),(0,a.kt)("h2",{id:"er-modell"},"ER-Modell"),(0,a.kt)("mermaid",{value:'erDiagram\n\n    I_Customer ||--|| DMOCUSTOMER : ""\n    I_Travel ||--|| DMOTRAVEL : ""\n    I_TravelWithCustomer }o--|| I_Customer : "Only Customers from Germany"\n    I_TravelWithCustomer ||--|| I_Travel : ""\n    I_CustomerKPIs ||--o{ I_TravelWithCustomer : "Only Customers with Total Revenue >= 5.000 Euros"\n\n    I_CustomerKPIs {\n        numc(6) CustomerId PK\n        char(92) CustomerName\n        char(60) Street\n        char(10) PostalCode\n        char(40) City\n        curr(17-2) TotalRevenue "Sum of all Total Prices and Total Booking Fees"\n        dec(16) AverageDuration "Average of Travel Duration"\n        int4(10) NumberOfDifferentAgencys "Number of different Agencys"\n    }\n\n    I_TravelWithCustomer {\n        numc(8) TravelId PK\n        numc(6) AgencyId\n        dats(8) BeginDate\n        dats(8) EndDate\n        int4(10) Duration "Days between Begin Date and End Date"\n        curr(16-2) BookingFee "Converted into Euros"\n        curr(16-2) TotalPrice "Converted into Euros"\n        cuky(5) CurrencyCode "EUR"\n        string(1024) Description\n        char(1) Status\n        char(60) StatusText "Status Text"\n        numc(6) CustomerId\n        char(92) CustomerName "Title FirstName LastName"\n        char(60) Street\n        char(10) PostalCode\n        char(40) City\n    }'}),(0,a.kt)("h2",{id:"hinweise"},"Hinweise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Das Feld ",(0,a.kt)("inlineCode",{parentName:"li"},"TotalRevenue")," soll den gesamten Umsatz aller Reisen eines Kunden ausgeben"),(0,a.kt)("li",{parentName:"ul"},"Das Feld ",(0,a.kt)("inlineCode",{parentName:"li"},"AverageDuration")," soll die durchschnittliche Reisedauer ausgeben"),(0,a.kt)("li",{parentName:"ul"},"Das Feld ",(0,a.kt)("inlineCode",{parentName:"li"},"NumberOfDifferentAgencys")," soll die Anzahl unterschiedlicher Reiseb\xfcros eines Kunden ausgeben")))}d.isMDXComponent=!0}}]);