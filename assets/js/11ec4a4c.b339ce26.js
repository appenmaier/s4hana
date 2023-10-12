"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[3380],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return t?i.createElement(f,o(o({ref:n},u),{},{components:t})):i.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(7462),r=(t(7294),t(3905));const a={title:"ABAP RESTful Application Programming Model (RAP)",description:"",sidebar_position:15,tags:[]},o=void 0,l={unversionedId:"documentation/rap",id:"documentation/rap",title:"ABAP RESTful Application Programming Model (RAP)",description:"",source:"@site/docs/documentation/rap.md",sourceDirName:"documentation",slug:"/documentation/rap",permalink:"/s4hana/documentation/rap",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/documentation/rap.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{title:"ABAP RESTful Application Programming Model (RAP)",description:"",sidebar_position:15,tags:[]},sidebar:"documentationSidebar",previous:{title:"Einf\xfchrung",permalink:"/s4hana/"},next:{title:"ABAP",permalink:"/s4hana/documentation/abap/"}},s={},c=[{value:"Architektur einer RAP-Anwendung",id:"architektur-einer-rap-anwendung",level:2},{value:"Laufzeitartefakte einer RAP-Anwendung",id:"laufzeitartefakte-einer-rap-anwendung",level:2}],u={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Das ",(0,r.kt)("em",{parentName:"p"},"ABAP RESTful Application Programming Model")," (RAP) wird vor allem f\xfcr die Anwendungsentwicklung in SAP S/4HANA (Cloud) verwendet. Es unterst\xfctzt die Entwicklung aller Arten von SAP Fiori Apps, Web APIs sowie Events und basiert auf erprobten Technologien und Frameworks wie den Core Data Services (CDS) zur Definition semantisch reichhaltiger Datenmodelle sowie einer Service-Infrastruktur zur Erstellung von OData-Services."),(0,r.kt)("h2",{id:"architektur-einer-rap-anwendung"},"Architektur einer RAP-Anwendung"),(0,r.kt)("p",null,"Die Architektur einer RAP-Anwendung umfasst die nachfolgenden Bereiche:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Datenmodellierung und Verhalten")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"RAP Business Objects")," (RAP BOs) legen das Datenmodell f\xfcr transaktionale Anwendungen fest und beinhalten neben den Daten auch die datenbezogene Logik, also das Verhalten"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"CDS Entities")," erm\xf6glichen die Definition von nicht-transaktionalen Datenmodellen, die f\xfcr Abfragen verwendet werden k\xf6nnen")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Service-Bereitstellung")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"RAP BO Projections")," und ",(0,r.kt)("em",{parentName:"li"},"Interfaces")," erm\xf6glichen die Definition spezifischer Gesch\xe4ftsservices"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Service Definitions")," legen den Umfang eines Gesch\xe4ftsservices fest"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Service Bindings")," legen das Kommunikationsprotokoll (OData v2 oder OData v4) sowie die Art des Gesch\xe4ftsservices (UI, Web API oder Event) fest")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Service-Verwendung")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"SAP Fiori UIs")," stellen Oberfl\xe4chen f\xfcr h\xe4ufig verwendete Anwendungsmuster bereit"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Web APIs")," bieten eine \xf6ffentliche Schnittstelle f\xfcr den Zugriff auf die Gesch\xe4ftsservices"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Events")," erm\xf6glichen das asynchrone Konsumieren von RAP BOs")),(0,r.kt)("mermaid",{value:"flowchart LR\n    binding ---\x3e api\n    binding ---\x3e ui\n    binding ---\x3e event\n    definition ---\x3e binding\n    projection ---\x3e definition\n    interface ---\x3e definition\n    bo ---\x3e projection\n    bo ---\x3e interface\n    entity --\x3e definition\n\n    subgraph Service-Verwendung\n        ui(SAP Fiori UI)\n        api(Web API)\n        event(Event)\n    end\n\n    subgraph Service-Bereitstellung\n        binding(Service Binding)\n        definition(Service Defintion)\n        projection(RAP BO Projection)\n        interface(Interface)\n    end\n\n    subgraph Datenmodellierung und Verhalten\n        bo(RAP Business Object)\n        entity(CDS Entity)\n    end"}),(0,r.kt)("h2",{id:"laufzeitartefakte-einer-rap-anwendung"},"Laufzeitartefakte einer RAP-Anwendung"),(0,r.kt)("p",null,"F\xfcr die Entwicklung von SAP Fiori Apps nach RAP kommen nachfolgende Laufzeitartefakte zum Einsatz:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Restricted Interface Views")," und ",(0,r.kt)("em",{parentName:"li"},"Projection Views")," legen das Datenmodell des RAP BOs fest"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Metadata Extensions")," legen die Oberfl\xe4che fest"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Access Controls")," steuern die Lesezugriffe"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Behavior Definitions")," und ",(0,r.kt)("em",{parentName:"li"},"Behavior Projections")," legen das transaktionale Verhalten des RAP BOs fest"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Behavior Implementation Classes")," beinhalten die Verhaltensimplementierungen"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Service Definitions")," legen den Umfang des Business Services fest"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Service Bindings")," legen das Kommunikationsprotokoll sowie die Art des Business Services fest")),(0,r.kt)("mermaid",{value:"flowchart\n    serviceBinding -.- serviceDefinition\n    serviceDefinition -.- projectionView\n    projectionView -.- restrictedInterfaceView\n    restrictedInterfaceView -.- databaseTable\n    accessControl2 -.- projectionView\n    accessControl1 -.- restrictedInterfaceView\n    behaviorProjection -.- projectionView\n    behaviorDefinition -.- restrictedInterfaceView\n    behaviorDefinition -.- behaviorImplementationClass\n    metadataExtension -.- projectionView\n\n    subgraph Business Services\n        serviceBinding(Service Binding)\n        serviceDefinition(Service Definition)\n    end\n\n    subgraph Source Code Library\n        behaviorImplementationClass(Behavior Implementation Class)\n    end\n\n    subgraph Core Data Services\n        behaviorDefinition(Behavior Definition)\n        behaviorProjection(Behavior Projection)\n        accessControl1(Access Control)\n        accessControl2(Access Control)\n        metadataExtension(Metadata Extension)\n        projectionView(Projection View)\n        restrictedInterfaceView(Restricted Interface View)\n    end\n\n    subgraph Dictionary\n        databaseTable[(Database Table)]\n    end"}))}p.isMDXComponent=!0}}]);