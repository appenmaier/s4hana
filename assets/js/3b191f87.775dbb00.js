"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[6882],{3905:(t,e,n)=>{n.d(e,{Zo:()=>o,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),g=m(n),c=r,k=g["".concat(d,".").concat(c)]||g[c]||u[c]||i;return n?a.createElement(k,l(l({ref:e},o),{},{components:n})):a.createElement(k,l({ref:e},o))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=g;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,l[1]=p;for(var m=2;m<i;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5210:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={title:"RESTful ABAP Programmiermodell (RAP)",description:"",sidebar_position:10},l=void 0,p={unversionedId:"rap/documentation/rap",id:"rap/documentation/rap",title:"RESTful ABAP Programmiermodell (RAP)",description:"",source:"@site/docs/rap/documentation/rap.md",sourceDirName:"rap/documentation",slug:"/rap/documentation/rap",permalink:"/s4hana/rap/documentation/rap",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap/documentation/rap.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"RESTful ABAP Programmiermodell (RAP)",description:"",sidebar_position:10},sidebar:"rapSidebar",previous:{title:"Dokumentation",permalink:"/s4hana/rap/documentation/"},next:{title:"\xdcbungsaufgaben",permalink:"/s4hana/rap/exercises/"}},d={},m=[{value:"Architektur",id:"architektur",level:2},{value:"Laufzeitartefakte",id:"laufzeitartefakte",level:2},{value:"Anwendungsszenario",id:"anwendungsszenario",level:2},{value:"UI-Annotationen: List Report",id:"ui-annotationen-list-report",level:2},{value:"UI-Annotationen: Object Page",id:"ui-annotationen-object-page",level:2},{value:"EML-Anweisungen",id:"eml-anweisungen",level:2},{value:"R\xfcckgabeoperanden",id:"r\xfcckgabeoperanden",level:2},{value:"Aufbau der abgeleiteten Datentypen",id:"aufbau-der-abgeleiteten-datentypen",level:2}],o={toc:m};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Hinweis",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Work in Progress")),(0,r.kt)("h2",{id:"architektur"},"Architektur"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/202891827-c294a4bd-efe5-464c-bc30-43de79816a62.png",alt:"image"})),(0,r.kt)("h2",{id:"laufzeitartefakte"},"Laufzeitartefakte"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/202892502-6dbfc72d-928c-4dd7-a717-a88a0201e4bb.png",alt:"image"})),(0,r.kt)("h2",{id:"anwendungsszenario"},"Anwendungsszenario"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/202892529-9e9f0ca1-6830-4cd9-9568-f735de72b9f3.png",alt:"image"})),(0,r.kt)("h2",{id:"ui-annotationen-list-report"},"UI-Annotationen: List Report"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/202893358-7a914f1c-78b6-47c9-b8aa-7c9f574a6ad0.png",alt:"image"})),(0,r.kt)("h2",{id:"ui-annotationen-object-page"},"UI-Annotationen: Object Page"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/202980258-4e2c817d-b86d-44d8-a3e2-f443461755fd.png",alt:"image"})),(0,r.kt)("h2",{id:"eml-anweisungen"},"EML-Anweisungen"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Anweisung"),(0,r.kt)("th",{parentName:"tr",align:null},"Abgeleiteter Datentyp"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"READ ENTITY <Entit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR READ IMPORT <Entit\xe4t>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"READ ENTITY <Entit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR READ RESULT <Entit\xe4t>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Read"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"READ ENTITY <Entit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR READ LINK <Entit\xe4t>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Create"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MODIFY ENTITY <Entit\xe4t> CREATE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR CREATE <Entit\xe4t>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Update"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MODIFY ENTITY <Entit\xe4t> UPDATE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR UPDATE <Entit\xe4t>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Delete"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MODIFY ENTITY <Entit\xe4t> DELETE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR DELETE <Entit\xe4t>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Execute Action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MODIFY ENTITY <Entit\xe4t> EXECUTE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR ACTION IMPORT <Entit\xe4t>~<Action>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Execute Action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MODIFY ENTITY <Entit\xe4t> EXECUTE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR ACTION RESULT <Entit\xe4t>~<Action>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Execute Action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MODIFY ENTITY <Entit\xe4t> EXECUTE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR ACTION REQUEST <Entit\xe4t>~<Action>"))))),(0,r.kt)("h2",{id:"r\xfcckgabeoperanden"},"R\xfcckgabeoperanden"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operand"),(0,r.kt)("th",{parentName:"tr",align:null},"Abgeleiteter Datentyp"),(0,r.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FAILED")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RESPONSE FOR FAILED <Wurzelentit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},"Alle Entit\xe4ten, bei denen die EML-Anweisung fehlschlug")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"REPORTED")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RESPONSE FOR REPORTED <Wurzelentit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},"Alle Nachrichten")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"MAPPED")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RESPONSE FOR MAPPED <Wurzelentit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},"Alle tempor\xe4ren Schl\xfcssel")))),(0,r.kt)("h2",{id:"aufbau-der-abgeleiteten-datentypen"},"Aufbau der abgeleiteten Datentypen"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Abgeleitete Datentypen"),(0,r.kt)("th",{parentName:"tr",align:null},"Aufbau der abgeleiteten Datentypen"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR READ IMPORT <Entit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://user-images.githubusercontent.com/47243617/202980604-18edce03-d570-46f2-8685-f07c4e7f4848.png",alt:"image"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR READ RESULT <Entit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://user-images.githubusercontent.com/47243617/202980589-4365ce22-3f87-490a-959c-f4354695ecbd.png",alt:"image"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR CREATE <Entit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://user-images.githubusercontent.com/47243617/202980642-77a95760-4750-4928-a706-f88b63aae06c.png",alt:"image"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR UPDATE <Entit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://user-images.githubusercontent.com/47243617/202980678-32034d53-119a-4652-a680-0b2491621017.png",alt:"image"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"FOR DELETE <Entit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://user-images.githubusercontent.com/47243617/202980707-30e9a89b-1f19-4b54-a451-4e952b4dce7f.png",alt:"image"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RESPONSE FOR FAILED <Wurzelentit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://user-images.githubusercontent.com/47243617/202980427-cee0fcae-3575-4978-bc59-427dc7c9843f.png",alt:"image"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RESPONSE FOR REPORTED <Wurzelentit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://user-images.githubusercontent.com/47243617/202980405-b85e2dcb-040e-4eec-a89a-c05ad50a1c40.png",alt:"image"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RESPONSE FOR MAPPED <Wurzelentit\xe4t>")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://user-images.githubusercontent.com/47243617/202980435-6594bfde-bb28-4e28-9721-8a7cf593e36d.png",alt:"image"}))))))}u.isMDXComponent=!0}}]);