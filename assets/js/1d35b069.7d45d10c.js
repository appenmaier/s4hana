"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[3194],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={title:"Laufzeitartefakte",description:"",sidebar_position:20,tags:[]},o=void 0,c={unversionedId:"documentation/rap/runtime-artifacts",id:"documentation/rap/runtime-artifacts",title:"Laufzeitartefakte",description:"",source:"@site/docs/documentation/rap/runtime-artifacts.md",sourceDirName:"documentation/rap",slug:"/documentation/rap/runtime-artifacts",permalink:"/s4hana/documentation/rap/runtime-artifacts",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/documentation/rap/runtime-artifacts.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Laufzeitartefakte",description:"",sidebar_position:20,tags:[]},sidebar:"documentationSidebar",previous:{title:"Aktionen implementieren",permalink:"/s4hana/documentation/rap/cookbook/implement-actions"},next:{title:"UI-Annotationen",permalink:"/s4hana/documentation/rap/ui-annotations"}},s={},l=[],p={toc:l};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"F\xfcr die Entwicklung von SAP-Fiori-Apps nach RAP kommen nachfolgende Laufzeitartefakte zum Einsatz:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Restricted Interface Views")," und ",(0,i.kt)("em",{parentName:"li"},"Projection Views")," legen das Datenmodell fest"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Metadata Extensions")," legen die Oberfl\xe4che fest"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Access Controls")," steuern die Lesezugriffe"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Behavior Definitions")," legen das transaktionale Verhalten fest"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Behavior Implementation Classes")," beinhalten die Verhaltensimplementierungen"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Service Definitions")," legen den Umfang fest"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Service Bindings")," legen das Kommunikationsprotokoll sowie die Art des Gesch\xe4ftsservices fest")),(0,i.kt)("mermaid",{value:"flowchart\n    serviceBinding ---\x3e serviceDefinition\n    serviceDefinition ---\x3e projectionView\n    projectionView ---\x3e restrictedInterfaceView\n    restrictedInterfaceView ---\x3e databaseTable\n    accessControl2 ---\x3e projectionView\n    accessControl1 ---\x3e restrictedInterfaceView\n    behaviorDefinition2 ---\x3e projectionView\n    behaviorDefinition1 ---\x3e restrictedInterfaceView\n    behaviorDefinition1 ---\x3e behaviorImplementationClass\n    metadataExtension ---\x3e projectionView\n\n\n    serviceBinding(Service Binding)\n    serviceDefinition(Service Definition)\n    behaviorImplementationClass[[Behavior Implementation Class]]\n    behaviorDefinition1(Behavior Definition)\n    behaviorDefinition2(Behavior Definition)\n    accessControl1(Access Control)\n    accessControl2(Access Control)\n    metadataExtension(Metadata Extension)\n    projectionView[Projection View]\n    restrictedInterfaceView[Restricted Interface View]\n    databaseTable[(Database Table)]"}))}m.isMDXComponent=!0}}]);