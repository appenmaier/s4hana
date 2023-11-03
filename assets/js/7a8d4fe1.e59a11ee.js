"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[6187],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?i.createElement(f,a(a({ref:n},c),{},{components:t})):i.createElement(f,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9892:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const o={title:"11. Sortierung implementieren",description:"",sidebar_position:110},a=void 0,l={unversionedId:"rap-cookbook/implement-sorting",id:"rap-cookbook/implement-sorting",title:"11. Sortierung implementieren",description:"",source:"@site/docs/rap-cookbook/implement-sorting.md",sourceDirName:"rap-cookbook",slug:"/rap-cookbook/implement-sorting",permalink:"/s4hana/rap-cookbook/implement-sorting",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap-cookbook/implement-sorting.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{title:"11. Sortierung implementieren",description:"",sidebar_position:110},sidebar:"rapCookbookSidebar",previous:{title:"10. Hervorhebungen implementieren",permalink:"/s4hana/rap-cookbook/implement-highlighting"},next:{title:"12. Statische Aktionen implementieren",permalink:"/s4hana/rap-cookbook/implement-static-actions"}},p={},s=[{value:"Metadata Extension <code>ZC_TRAVEL</code>",id:"metadata-extension-zc_travel",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Die Metadata Extension ",(0,r.kt)("inlineCode",{parentName:"p"},"ZC_TRAVEL")," um Annotationen zur Sortierung von Reisen erweitern."),(0,r.kt)("h2",{id:"metadata-extension-zc_travel"},"Metadata Extension ",(0,r.kt)("inlineCode",{parentName:"h2"},"ZC_TRAVEL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"@Metadata.layer: #CUSTOMER\n@UI.headerInfo:\n{\n  typeNamePlural: 'Travels',\n  typeName: 'Travel',\n  title.value: 'TravelId',\n  description.value: 'Description'\n}\n//highlight-start\n@UI.presentationVariant: [{sortOrder: [{ by: 'BeginDate', direction: #DESC }]}]\n//highlight-end\nannotate view ZC_Travel with\n{\n\n  /* Facets */\n  @UI.facet:\n  [\n    { position: 10, targetQualifier: 'TravelDetails', label: 'Travel Details', type: #FIELDGROUP_REFERENCE },\n    { position: 20, targetQualifier: 'AdminData', label: 'Administrative Data', type: #FIELDGROUP_REFERENCE },\n    { position: 30, targetElement: '_Bookings', label: 'Bookings', type: #LINEITEM_REFERENCE }\n  ]\n\n  /* Fields */\n  @UI.fieldGroup: [{ position: 10, qualifier: 'AdminData' }]\n  TravelUuid;\n\n  @UI.lineItem: [{ position: 10 }]\n  @UI.fieldGroup: [{ position: 10, qualifier: 'TravelDetails' }]\n  TravelId;\n\n  @UI.lineItem: [{ position: 20 }]\n  @UI.selectionField: [{ position: 10 }]\n  @UI.fieldGroup: [{ position: 20, qualifier: 'TravelDetails' }]\n  AgencyId;\n\n  @UI.lineItem: [{ position: 30 }]\n  @UI.selectionField: [{ position: 20 }]\n  @UI.fieldGroup: [{ position: 30, qualifier: 'TravelDetails' }]\n  CustomerId;\n\n  @UI.lineItem: [{ position: 40 }]\n  @UI.selectionField: [{ position: 30 }]\n  @UI.fieldGroup: [{ position: 40, qualifier: 'TravelDetails' }]\n  BeginDate;\n\n  @UI.lineItem: [{ position: 50 }]\n  @UI.selectionField: [{ position: 40 }]\n  @UI.fieldGroup: [{ position: 50, qualifier: 'TravelDetails' }]\n  EndDate;\n\n  @UI.fieldGroup: [{ position: 60, qualifier: 'TravelDetails' }]\n  BookingFee;\n\n  @UI.lineItem: [{ position: 60 }]\n  @UI.selectionField: [{ position: 50 }]\n  @UI.fieldGroup: [{ position: 70, qualifier: 'TravelDetails' }]\n  TotalPrice;\n\n  //  CurrencyCode;\n\n  @UI.lineItem: [{ position: 70, criticality: 'BeginDateCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n  @UI.fieldGroup: [{ position: 80, qualifier: 'TravelDetails' }]\n  Description;\n\n  @UI.lineItem: [{ position: 80, criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n  @UI.selectionField: [{ position: 60 }]\n  @UI.fieldGroup: [{ position: 90, qualifier: 'TravelDetails', criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n  Status;\n\n  @UI.fieldGroup: [{ position: 20, qualifier: 'AdminData' }]\n  Createdby;\n\n  @UI.fieldGroup: [{ position: 30, qualifier: 'AdminData' }]\n  Createdat;\n\n  @UI.fieldGroup: [{ position: 40, qualifier: 'AdminData' }]\n  Lastchangedby;\n\n  @UI.fieldGroup: [{ position: 50, qualifier: 'AdminData' }]\n  Lastchangedat;\n\n}\n")))}u.isMDXComponent=!0}}]);