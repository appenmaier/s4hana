"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[6081],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=r,b=u["".concat(s,".").concat(m)]||u[m]||l[m]||i;return t?a.createElement(b,o(o({ref:n},p),{},{components:t})):a.createElement(b,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3920:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={title:"ABAP CDS",description:"",sidebar_position:10,tags:[]},o=void 0,c={unversionedId:"abap-cds/documentation/abap-cds",id:"abap-cds/documentation/abap-cds",title:"ABAP CDS",description:"",source:"@site/docs/abap-cds/documentation/abap-cds.md",sourceDirName:"abap-cds/documentation",slug:"/abap-cds/documentation/abap-cds",permalink:"/s4hana/abap-cds/documentation/abap-cds",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/abap-cds/documentation/abap-cds.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"ABAP CDS",description:"",sidebar_position:10,tags:[]},sidebar:"abapCDSSidebar",previous:{title:"Dokumentation",permalink:"/s4hana/abap-cds/documentation/"},next:{title:"ABAP CDS Views",permalink:"/s4hana/abap-cds/documentation/cds-view-basics"}},s={},d=[],p={toc:d};function l(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Das klassische Anwendungsdesign im SAP-Umfeld folgt dem Data-to-Code-Ansatz, was bedeutet, dass intensive Berechnungen in der Applikationsschicht durchgef\xfchrt werden. Bei modernen Datenbankplattformen wie SAP HANA bietet sich jedoch ein datensatzorientierter Ansatz an. Bei diesem erfolgen die intensiven Berechnungen in der Datenbankschicht, weswegen dieser Ansatz auch als Code-to-Data-Ansatz bezeichnet wird. "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/210434025-9ab05a86-7cbd-4cdf-a6e8-274040fa7caf.png",alt:"image"})),(0,r.kt)("p",null,"Die Core Data Services sind eine Sammlung dom\xe4nenspezifischer Sprachen und Services f\xfcr die Definition und Nutzung semantisch reicher Datenmodelle:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mit Hilfe der ",(0,r.kt)("em",{parentName:"li"},"Data Definition Language")," (DDL) k\xf6nnen Datenbanktabellen und Datenbankviews definiert werden"),(0,r.kt)("li",{parentName:"ul"},"Mit Hilfe der ",(0,r.kt)("em",{parentName:"li"},"Query Language")," (QL) k\xf6nnen die Daten von Datenbanktabellen und Datenbankviews gelesen werden"),(0,r.kt)("li",{parentName:"ul"},"Mit Hilfe der ",(0,r.kt)("em",{parentName:"li"},"Data Control Language")," (DCL) k\xf6nnen Zugriffsrechte definiert werden")),(0,r.kt)("p",null,"Im Gegensatz zu den HANA CDS, welche spezzfisch f\xfcr SAP HANA entwickelt wurden, sind die ABAP CDS datenbankunabh\xe4ngig."))}l.isMDXComponent=!0}}]);