"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[6262],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=d(t),h=r,u=g["".concat(o,".").concat(h)]||g[h]||p[h]||a;return t?i.createElement(u,l(l({ref:n},c),{},{components:t})):i.createElement(u,l({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=g;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<a;d++)l[d]=t[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4154:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const a={title:"Interne Tabellen",description:"",sidebar_position:110,tags:[]},l=void 0,s={unversionedId:"documentation/abap/internal-tables",id:"documentation/abap/internal-tables",title:"Interne Tabellen",description:"",source:"@site/docs/documentation/abap/internal-tables.md",sourceDirName:"documentation/abap",slug:"/documentation/abap/internal-tables",permalink:"/s4hana/documentation/abap/internal-tables",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/documentation/abap/internal-tables.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{title:"Interne Tabellen",description:"",sidebar_position:110,tags:[]},sidebar:"documentationSidebar",previous:{title:"Strukturen",permalink:"/s4hana/documentation/abap/structures"},next:{title:"Datenbankzugriffe mit Open SQL",permalink:"/s4hana/documentation/abap/open-sql"}},o={},d=[{value:"Deklaration interner Tabellen",id:"deklaration-interner-tabellen",level:2},{value:"Einf\xfcgen von Datens\xe4tzen",id:"einf\xfcgen-von-datens\xe4tzen",level:2},{value:"Lesen von Datens\xe4tzen",id:"lesen-von-datens\xe4tzen",level:2},{value:"Fehlerbehandlung bei Tabellenausdr\xfccken",id:"fehlerbehandlung-bei-tabellenausdr\xfccken",level:2},{value:"\xc4ndern von Datens\xe4tzen",id:"\xe4ndern-von-datens\xe4tzen",level:2},{value:"L\xf6schen von Datens\xe4tzen",id:"l\xf6schen-von-datens\xe4tzen",level:2},{value:"Sortieren interner Tabellen",id:"sortieren-interner-tabellen",level:2},{value:"Einspaltige Tabellen",id:"einspaltige-tabellen",level:2}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Eine interne Tabelle ist ein Datenobjekt, welches zur Laufzeit mehrere gleich strukturierte Datens\xe4tze halten kann. Die Gr\xf6\xdfe der internen Tabelle wird dabei vom Laufzeitsystem automatisch verwaltet."),(0,r.kt)("h2",{id:"deklaration-interner-tabellen"},"Deklaration interner Tabellen"),(0,r.kt)("p",null,"Die Deklaration einer internen Tabellen kann entweder direkt im Programm erfolgen (selbstst\xe4ndige Definition) oder durch Angabe eines globalen Tabellentyps. Hierf\xfcr m\xfcssen folgende Angaben gemacht werden:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Der Zeilentyp beschreibt den Aufbau der internen Tabelle"),(0,r.kt)("li",{parentName:"ul"},"Die Tabellenart definiert die Zugriffsart (per Schl\xfcssel oder per Index)"),(0,r.kt)("li",{parentName:"ul"},"Der Prim\xe4rschl\xfcssel definiert die Schl\xfcsselfelder inklusive ihrer Reihenfolge")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap",metastring:"showLineNumbers",showLineNumbers:!0},"DATA flights TYPE TABLE OF /dmo/flight.\nDATA flights2 TYPE /dmo/t_flight.\n")),(0,r.kt)("h2",{id:"einf\xfcgen-von-datens\xe4tzen"},"Einf\xfcgen von Datens\xe4tzen"),(0,r.kt)("p",null,"Der Operator ",(0,r.kt)("inlineCode",{parentName:"p"},"VALUE")," erm\xf6glicht das Einf\xfcgen von Datens\xe4tzen in interne Tabellen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap",metastring:"showLineNumbers",showLineNumbers:!0},"DATA flight TYPE /dmo/flight.\nDATA flights TYPE /dmo/t_flight.\n\n\" Insert data\nflights = VALUE #(\n  ( carrier_id = 'LH' connection_id = '0400' flight_date = '20231013' )\n  ( carrier_id = 'LH' connection_id = '0401' flight_date = '20230928' ) ).\n\n\" Append data\nflight-carrier_id = 'LH'.\nflight-connection_id = '0402'.\nflight-flight_date = '20230607'.\nflights = VALUE #( BASE flights ( flight ) ).\n\nflight-flight_date = '20231231'.\nAPPEND flight TO flights.\n")),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Der Operator ",(0,r.kt)("inlineCode",{parentName:"p"},"BASE")," erm\xf6glicht das Erweitern einer internen Tabelle.")),(0,r.kt)("h2",{id:"lesen-von-datens\xe4tzen"},"Lesen von Datens\xe4tzen"),(0,r.kt)("p",null,"Tabellenausdr\xfccke erm\xf6glichen das Lesen eines Einzelsatzes per Index bzw. per Schl\xfcssel, die LOOP-Schleife erm\xf6glicht das zeilenweise Auslesen von internen Tabellen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap",metastring:"showLineNumbers",showLineNumbers:!0},"DATA flight TYPE /dmo/flight.\nDATA flights TYPE /dmo/t_flight.\n\nflights = VALUE #(\n  ( carrier_id = 'LH' connection_id = '0400' flight_date = '20231013' )\n  ( carrier_id = 'LH' connection_id = '0401' flight_date = '20230928' ) ).\n\n\" Read single entry\nflight = flights[ 1 ].\nflight = flights[ carrier_id = 'LH' connection_id = '0401' flight_date = '20230928' ].\n\n\" Read multiple entries\nLOOP AT flights INTO flight WHERE flight_date >= '20230101'.\n  out->write( flight-carrier_id ).\nENDLOOP.\n")),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Durch den Zusatz ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE")," k\xf6nnen bei einer LOOP-Schleife die auszulesenden Zeilen eingeschr\xe4nkt werden.")),(0,r.kt)("p",null,"Die eingebaute ABAP-Funktion ",(0,r.kt)("inlineCode",{parentName:"p"},"LINES")," gibt die Gr\xf6\xdfe einer internen Tabelle zur\xfcck."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap",metastring:"showLineNumbers",showLineNumbers:!0},"DATA(number_of_flights) = lines( flights ).\n")),(0,r.kt)("h2",{id:"fehlerbehandlung-bei-tabellenausdr\xfccken"},"Fehlerbehandlung bei Tabellenausdr\xfccken"),(0,r.kt)("p",null,"Die Fehlerbehandlung bei Tabellenausdr\xfccken kann mit Hilfe der eingebauten Pr\xe4dikatsfunktion ",(0,r.kt)("inlineCode",{parentName:"p"},"LINE_EXISTS")," erfolgen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap",metastring:"showLineNumbers",showLineNumbers:!0},"DATA flight TYPE /dmo/flight.\nDATA flights TYPE /dmo/t_flight.\n\nIF line_exists( flights[ 1 ] ).\n  flight = flights[ 1 ].\nENDIF.\n")),(0,r.kt)("h2",{id:"\xe4ndern-von-datens\xe4tzen"},"\xc4ndern von Datens\xe4tzen"),(0,r.kt)("p",null,"Tabellenausdr\xfccke erm\xf6glichen das \xc4ndern eines Einzelsatzes per Index bzw. per Schl\xfcssel und \xfcber Datenreferenzen k\xf6nnen mehrere Datens\xe4tze sequentiell ge\xe4ndert werden."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap",metastring:"showLineNumbers",showLineNumbers:!0},"DATA flight TYPE REF TO /dmo/flight.\nDATA flights TYPE /dmo/t_flight.\nFIELD-SYMBOL <flight> TYPE /dmo/flight.\n\nflights = VALUE #(\n  ( carrier_id = 'LH' connection_id = '0400' flight_date = '20231013' )\n  ( carrier_id = 'LH' connection_id = '0401' flight_date = '20230928' ) ).\n\n\" Change single entry\nflights[ 1 ]-price = 1000.\nflights[ carrier_id = 'LH' connection_id = '0400' flight_date = '20231013' ]-price = 1000.\n\n\" Change multiple entries with data references\nLOOP AT flights REFERENCE INTO flight.\n  flight->price = 1000.\nENDLOOP.\n\n\" Change multiple entries with field symboles\nLOOP AT flights ASSIGNING <flight>.\n  <flight>-price = 500.\nENDLOOP.\n")),(0,r.kt)("h2",{id:"l\xf6schen-von-datens\xe4tzen"},"L\xf6schen von Datens\xe4tzen"),(0,r.kt)("p",null,"Die Anweisung ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," erm\xf6glicht das L\xf6schen eines oder mehrerer Datens\xe4tze"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap",metastring:"showLineNumbers",showLineNumbers:!0},"DATA flight TYPE /dmo/flight.\nDATA flights TYPE /dmo/t_flight.\n\nflights = VALUE #(\n  ( carrier_id = 'LH' connection_id = '0400' flight_date = '20231013' )\n  ( carrier_id = 'LH' connection_id = '0401' flight_date = '20230928' ) ).\n\n\" Delete single entry\nDELETE flights INDEX 1.\n\n\" Delete multiple entries\nDELETE flights WHERE flight_date < '20240101'.\n")),(0,r.kt)("h2",{id:"sortieren-interner-tabellen"},"Sortieren interner Tabellen"),(0,r.kt)("p",null,"Die Anweisung ",(0,r.kt)("inlineCode",{parentName:"p"},"SORT")," erm\xf6glicht das Sortieren von internen Tabellen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap",metastring:"showLineNumbers",showLineNumbers:!0},"DATA flights TYPE /dmo/t_flight.\n\nflights = VALUE #(\n  ( carrier_id = 'LH' connection_id = '0400' flight_date = '20231013' )\n  ( carrier_id = 'LH' connection_id = '0401' flight_date = '20230928' ) ).\n\nSORT flights BY carrier_id ASCENDING connection_id DESCENDING flight_date ASCENDING.\n")),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Die Zus\xe4tze ",(0,r.kt)("inlineCode",{parentName:"p"},"ASCENDING")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"DESCENDING")," legen die Sortierreihenfolge fest.")),(0,r.kt)("h2",{id:"einspaltige-tabellen"},"Einspaltige Tabellen"),(0,r.kt)("p",null,"Interne Tabellen, die als Zeilentyp keine Struktur, sondern ein Datenelement, einen ABAP-Standardtyp oder einen Referenzdatentypen verwenden, bezeichnet man als ",(0,r.kt)("em",{parentName:"p"},"einspaltige Tabellen"),". Das Schl\xfcsselwort ",(0,r.kt)("inlineCode",{parentName:"p"},"TABLE_LINE")," erm\xf6glicht bei einspaltigen Tabellen den\nZugriff auf die Spalte."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap"},"DATA carrier_ids TYPE TABLE OF /dmo/carrier_id.\nDATA carrier_id TYPE /dmo/carrier_id.\n\ncarrier_ids = VALUE #( ( 'BA' ) ( 'LH') ( 'UA' ) ).\ncarrier_id = carrier_ids[ table_line = 'LH' ].\n")))}p.isMDXComponent=!0}}]);