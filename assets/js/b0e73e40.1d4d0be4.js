"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[5733],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=r,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return t?i.createElement(m,a(a({ref:n},c),{},{components:t})):i.createElement(m,a({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4357:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=t(7462),r=(t(7294),t(3905));const o={title:"3. Oberfl\xe4che festlegen",description:"",sidebar_position:30,tags:[]},a=void 0,l={unversionedId:"rap-cookbook/define-ui",id:"rap-cookbook/define-ui",title:"3. Oberfl\xe4che festlegen",description:"",source:"@site/docs/rap-cookbook/define-ui.md",sourceDirName:"rap-cookbook",slug:"/rap-cookbook/define-ui",permalink:"/s4hana/rap-cookbook/define-ui",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap-cookbook/define-ui.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"3. Oberfl\xe4che festlegen",description:"",sidebar_position:30,tags:[]},sidebar:"rapCookbookSidebar",previous:{title:"2. Business Service festlegen",permalink:"/s4hana/rap-cookbook/define-service"},next:{title:"4. BO erweitern",permalink:"/s4hana/rap-cookbook/extend-bo"}},s={},p=[{value:"BO Projection View ZC_Travel",id:"bo-projection-view-zc_travel",level:2},{value:"Metadata Extension ZC_TRAVEL",id:"metadata-extension-zc_travel",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"BO Projection View um Annotationen f\xfcr Suchen und Metadata Extensions erweitern"),(0,r.kt)("li",{parentName:"ul"},"Metadata Extension f\xfcr die BO Projection View f\xfcr Reisen erstellen")),(0,r.kt)("h2",{id:"bo-projection-view-zc_travel"},"BO Projection View ZC_Travel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"@EndUserText.label: 'Travel'\n@AccessControl.authorizationCheck: #NOT_REQUIRED\n//highlight-start\n@Search.searchable: true\n@Metadata.allowExtensions: true\n//highlight-end\ndefine root view entity ZC_Travel\n  as projection on ZR_Travel\n{\n  key TravelUuid,\n      TravelId,\n      AgencyId,\n      CustomerId,\n      BeginDate,\n      EndDate,\n      BookingFee,\n      TotalPrice,\n      CurrencyCode,\n//highlight-start\n      @Search.defaultSearchElement: true\n      @Search.fuzzinessThreshold: 0.7\n//highlight-end\n      Description,\n      Status,\n\n      /* Administrative Data */\n      CreatedBy,\n      CreatedAt,\n      LastChangedBy,\n      LastChangedAt\n}\n")),(0,r.kt)("h2",{id:"metadata-extension-zc_travel"},"Metadata Extension ZC_TRAVEL"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"//highlight-start\n@Metadata.layer: #CUSTOMER\n@UI.headerInfo:\n{\n  typeNamePlural: 'Travels',\n  typeName: 'Travel',\n  title.value: 'TravelId',\n  description.value: 'Description'\n}\nannotate view ZC_Travel with\n{\n\n  /* Facets */\n  @UI.facet:\n  [\n    { position: 10, targetQualifier: 'TravelDetails', label: 'Travel Details', type: #FIELDGROUP_REFERENCE },\n    { position: 20, targetQualifier: 'AdminData', label: 'Administrative Data', type: #FIELDGROUP_REFERENCE }\n  ]\n\n  /* Fields */\n  @UI.fieldGroup: [{ position: 10, qualifier: 'AdminData' }]\n  TravelUuid;\n\n  @UI.lineItem: [{ position: 10 }]\n  @UI.fieldGroup: [{ position: 10, qualifier: 'TravelDetails' }]\n  TravelId;\n\n  @UI.lineItem: [{ position: 20 }]\n  @UI.selectionField: [{ position: 10 }]\n  @UI.fieldGroup: [{ position: 20, qualifier: 'TravelDetails' }]\n  AgencyId;\n\n  @UI.lineItem: [{ position: 30 }]\n  @UI.selectionField: [{ position: 20 }]\n  @UI.fieldGroup: [{ position: 30, qualifier: 'TravelDetails' }]\n  CustomerId;\n\n  @UI.lineItem: [{ position: 40 }]\n  @UI.selectionField: [{ position: 30 }]\n  @UI.fieldGroup: [{ position: 40, qualifier: 'TravelDetails' }]\n  BeginDate;\n\n  @UI.lineItem: [{ position: 50 }]\n  @UI.selectionField: [{ position: 40 }]\n  @UI.fieldGroup: [{ position: 50, qualifier: 'TravelDetails' }]\n  EndDate;\n\n  @UI.fieldGroup: [{ position: 60, qualifier: 'TravelDetails' }]\n  BookingFee;\n\n  @UI.lineItem: [{ position: 60 }]\n  @UI.selectionField: [{ position: 50 }]\n  @UI.fieldGroup: [{ position: 70, qualifier: 'TravelDetails' }]\n  TotalPrice;\n\n  //  CurrencyCode;\n\n  @UI.lineItem: [{ position: 70 }]\n  @UI.fieldGroup: [{ position: 80, qualifier: 'TravelDetails' }]\n  Description;\n\n  @UI.lineItem: [{ position: 80 }]\n  @UI.selectionField: [{ position: 60 }]\n  @UI.fieldGroup: [{ position: 90, qualifier: 'TravelDetails' }]\n  Status;\n\n  @UI.fieldGroup: [{ position: 20, qualifier: 'AdminData' }]\n  Createdby;\n\n  @UI.fieldGroup: [{ position: 30, qualifier: 'AdminData' }]\n  Createdat;\n\n  @UI.fieldGroup: [{ position: 40, qualifier: 'AdminData' }]\n  Lastchangedby;\n\n  @UI.fieldGroup: [{ position: 50, qualifier: 'AdminData' }]\n  Lastchangedat;\n\n}\n//highlight-end\n")))}u.isMDXComponent=!0}}]);