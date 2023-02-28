"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[3388],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return t?i.createElement(m,a(a({ref:n},p),{},{components:t})):i.createElement(m,a({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const o={title:"Oberfl\xe4che festlegen",description:"",sidebar_position:30,tags:[]},a=void 0,l={unversionedId:"rap/cookbook/define-ui",id:"rap/cookbook/define-ui",title:"Oberfl\xe4che festlegen",description:"",source:"@site/docs/rap/cookbook/define-ui.md",sourceDirName:"rap/cookbook",slug:"/rap/cookbook/define-ui",permalink:"/s4hana/rap/cookbook/define-ui",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap/cookbook/define-ui.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Oberfl\xe4che festlegen",description:"",sidebar_position:30,tags:[]},sidebar:"rapSidebar",previous:{title:"Gesch\xe4ftsservice festlegen",permalink:"/s4hana/rap/cookbook/define-service"},next:{title:"Gesch\xe4ftsobjekt erweitern",permalink:"/s4hana/rap/cookbook/extend-bo"}},c={},s=[{value:"Metadata Extension ZC_TRAVEL",id:"metadata-extension-zc_travel",level:2},{value:"Projection View ZC_Travel",id:"projection-view-zc_travel",level:2},{value:"UI-Annotationen f\xfcr List Report",id:"ui-annotationen-f\xfcr-list-report",level:2},{value:"UI-Annotationen f\xfcr Object Page",id:"ui-annotationen-f\xfcr-object-page",level:2}],p={toc:s};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Um die Oberfl\xe4che f\xfcr Reisen festzulegen, wird zun\xe4chst eine Metadata Extension erstellt, die s\xe4mtliche UI-Annotationen beinhaltet. Anschlie\xdfend wird die Projection View f\xfcr Reisen um Such-Annotationen erweitert."),(0,r.kt)("h2",{id:"metadata-extension-zc_travel"},"Metadata Extension ZC_TRAVEL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@Metadata.layer: #CUSTOMER\n@UI.headerInfo:\n{\n  typeNamePlural: 'Travels',\n  typeName: 'Travel',\n  title.value: 'TravelId',\n  description.value: 'Description'\n}\nannotate view ZC_Travel with\n{\n\n  /* Facets */\n  @UI.facet: [{ position: 10, type: #IDENTIFICATION_REFERENCE, label: 'Travel Details' }]\n\n  /* Fields */\n  @UI.hidden: true\n  TravelUuid;\n\n  @UI.lineItem: [{ position: 10 }]\n  @UI.selectionField: [{ position: 10 }]\n  @UI.identification: [{ position: 10 }]\n  TravelId;\n\n  @UI.lineItem: [{ position: 20 }]\n  @UI.selectionField: [{ position: 20 }]\n  @UI.identification: [{ position: 20 }]\n  CustomerId;\n\n  @UI.lineItem: [{ position: 30 }]\n  @UI.selectionField: [{ position: 30 }]\n  @UI.identification: [{ position: 30 }]\n  BeginDate;\n\n  @UI.lineItem: [{ position: 40 }]\n  @UI.selectionField: [{ position: 40 }]\n  @UI.identification: [{ position: 40 }]\n  EndDate;\n\n  @UI.lineItem: [{ position: 50 }]\n  @UI.identification: [{ position: 50 }]\n  Description;\n\n  @UI.lineItem: [{ position: 60 }]\n  @UI.selectionField: [{ position: 60 }]\n  @UI.identification: [{ position: 60 }]\n  TotalPrice;\n\n}\n")),(0,r.kt)("h2",{id:"projection-view-zc_travel"},"Projection View ZC_Travel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"@EndUserText.label: 'Projection View: Travel'\n@AccessControl.authorizationCheck: #NOT_REQUIRED\n@Search.searchable: true\n@Metadata.allowExtensions: true\ndefine root view entity ZC_Travel\n  as projection on ZI_Travel\n{\n  key TravelUuid,\n      TravelId,\n      CustomerId,\n      BeginDate,\n      EndDate,\n      @Search.defaultSearchElement: true\n      @Search.fuzzinessThreshold: 0.7\n      Description,\n      TotalPrice,\n      CurrencyCode\n}\n")),(0,r.kt)("h2",{id:"ui-annotationen-f\xfcr-list-report"},"UI-Annotationen f\xfcr List Report"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/210181800-d258f0ec-419e-4f6f-a862-2c8ff5a019b3.png",alt:"image"})),(0,r.kt)("h2",{id:"ui-annotationen-f\xfcr-object-page"},"UI-Annotationen f\xfcr Object Page"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/210181809-8e94d32e-6944-4085-adf7-05fbad16f550.png",alt:"image"})))}d.isMDXComponent=!0}}]);