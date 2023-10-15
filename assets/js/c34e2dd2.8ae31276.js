"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[495],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return t?i.createElement(g,o(o({ref:n},d),{},{components:t})):i.createElement(g,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7988:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const r={title:"10. Hervorhebungen implementieren",description:"",sidebar_position:100},o=void 0,l={unversionedId:"rap-cookbook/implement-highlighting",id:"rap-cookbook/implement-highlighting",title:"10. Hervorhebungen implementieren",description:"",source:"@site/docs/rap-cookbook/implement-highlighting.md",sourceDirName:"rap-cookbook",slug:"/rap-cookbook/implement-highlighting",permalink:"/s4hana/rap-cookbook/implement-highlighting",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap-cookbook/implement-highlighting.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"10. Hervorhebungen implementieren",description:"",sidebar_position:100},sidebar:"rapCookbookSidebar",previous:{title:"9. Textelemente implementieren",permalink:"/s4hana/rap-cookbook/implement-text-elements"},next:{title:"11. Sortierung implementieren",permalink:"/s4hana/rap-cookbook/implement-sorting"}},s={},c=[{value:"Restricted Interface View ZR_Travel",id:"restricted-interface-view-zr_travel",level:2},{value:"Projection View ZC_Travel",id:"projection-view-zc_travel",level:2},{value:"Metadata Extension ZC_TRAVEL",id:"metadata-extension-zc_travel",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"TODO",type:"danger"}),(0,a.kt)("h2",{id:"restricted-interface-view-zr_travel"},"Restricted Interface View ZR_Travel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"@AccessControl.authorizationCheck: #NOT_REQUIRED\n@EndUserText.label: 'Travel'\ndefine root view entity ZR_Travel\n  as select from zatravel\n  composition [0..*] of ZR_Booking      as _Bookings\n  association [1..1] to ZI_CustomerText as _CustomerText on $projection.CustomerId = _CustomerText.CustomerId\n{\n  key travel_uuid        as TravelUuid,\n      travel_id          as TravelId,\n      agency_id          as AgencyId,\n      @ObjectModel.text.element: ['CustomerName']\n      customer_id        as CustomerId,\n      begin_date         as BeginDate,\n      end_date           as EndDate,\n      @Semantics.amount.currencyCode: 'CurrencyCode'\n      booking_fee        as BookingFee,\n      @Semantics.amount.currencyCode: 'CurrencyCode'\n      total_price        as TotalPrice,\n      currency_code      as CurrencyCode,\n      description        as Description,\n      status             as Status,\n\n      /* Administrative Data */\n      created_by         as CreatedBy,\n      created_at         as CreatedAt,\n      last_changed_by    as LastChangedBy,\n      last_changed_at    as LastChangedAt,\n\n      /* Transient Data */\n      _CustomerText.Name as CustomerName,\n//highlight-start\n      case when dats_days_between($session.user_date, begin_date) >= 14 then 3\n           when dats_days_between($session.user_date, begin_date) >= 7 then 2\n           when dats_days_between($session.user_date, begin_date) >= 0 then 1\n           else 0\n      end                as BeginDateCriticality,\n      case status when 'B' then 3\n                  when 'N' then 0\n                  when 'X' then 1\n                  else 0\n      end                as StatusCriticality,\n//highlight-end\n\n      /* Associations */\n      _Bookings\n}\n")),(0,a.kt)("h2",{id:"projection-view-zc_travel"},"Projection View ZC_Travel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"@EndUserText.label: 'Travel'\n@AccessControl.authorizationCheck: #NOT_REQUIRED\n@Search.searchable: true\n@Metadata.allowExtensions: true\ndefine root view entity ZC_Travel\n  provider contract transactional_query\n  as projection on ZR_Travel\n{\n  key TravelUuid,\n      TravelId,\n      @Consumption.valueHelpDefinition: [{ entity: { name: '/DMO/I_AgencyStdVH', element: 'AgencyId' }]\n      AgencyId,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_CustomerVH', element: 'CustomerId' } }]\n      CustomerId,\n      BeginDate,\n      EndDate,\n      BookingFee,\n      TotalPrice,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]\n      CurrencyCode,\n      @Search.defaultSearchElement: true\n      @Search.fuzzinessThreshold: 0.7\n      Description,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_StatusVH', element: 'Status' } }]\n      Status,\n\n      /* Administrative Data */\n      CreatedBy,\n      CreatedAt,\n      LastChangedBy,\n      LastChangedAt,\n\n      /* Transient Data */\n      CustomerName,\n//highlight-start\n      BeginDateCriticality,\n      StatusCriticality,\n//highlight-end\n\n      /* Associations */\n      _Bookings : redirected to composition child ZC_Booking\n}\n")),(0,a.kt)("h2",{id:"metadata-extension-zc_travel"},"Metadata Extension ZC_TRAVEL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"@Metadata.layer: #CUSTOMER\n@UI.headerInfo:\n{\n  typeNamePlural: 'Travels',\n  typeName: 'Travel',\n  title.value: 'TravelId',\n  description.value: 'Description'\n}\nannotate view ZC_Travel with\n{\n\n  /* Facets */\n  @UI.facet:\n  [\n    { position: 10, targetQualifier: 'TravelDetails', label: 'Travel Details', type: #FIELDGROUP_REFERENCE },\n    { position: 20, targetQualifier: 'AdminData', label: 'Administrative Data', type: #FIELDGROUP_REFERENCE },\n    { position: 30, targetElement: '_Bookings', label: 'Bookings', type: #LINEITEM_REFERENCE }\n  ]\n\n  /* Fields */\n  @UI.fieldGroup: [{ position: 10, qualifier: 'AdminData' }]\n  TravelUuid;\n\n  @UI.lineItem: [{ position: 10 }]\n  @UI.fieldGroup: [{ position: 10, qualifier: 'TravelDetails' }]\n  TravelId;\n\n  @UI.lineItem: [{ position: 20 }]\n  @UI.selectionField: [{ position: 10 }]\n  @UI.fieldGroup: [{ position: 20, qualifier: 'TravelDetails' }]\n  AgencyId;\n\n  @UI.lineItem: [{ position: 30 }]\n  @UI.selectionField: [{ position: 20 }]\n  @UI.fieldGroup: [{ position: 30, qualifier: 'TravelDetails' }]\n  CustomerId;\n\n  @UI.lineItem: [{ position: 40 }]\n  @UI.selectionField: [{ position: 30 }]\n  @UI.fieldGroup: [{ position: 40, qualifier: 'TravelDetails' }]\n  BeginDate;\n\n  @UI.lineItem: [{ position: 50 }]\n  @UI.selectionField: [{ position: 40 }]\n  @UI.fieldGroup: [{ position: 50, qualifier: 'TravelDetails' }]\n  EndDate;\n\n  @UI.fieldGroup: [{ position: 60, qualifier: 'TravelDetails' }]\n  BookingFee;\n\n  @UI.lineItem: [{ position: 60 }]\n  @UI.selectionField: [{ position: 50 }]\n  @UI.fieldGroup: [{ position: 70, qualifier: 'TravelDetails' }]\n  TotalPrice;\n\n  //  @UI.hidden: true\n  //  CurrencyCode;\n\n//highlight-start\n  @UI.lineItem: [{ position: 70, criticality: 'BeginDateCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n//highlight-end\n  @UI.fieldGroup: [{ position: 80, qualifier: 'TravelDetails' }]\n  Description;\n\n//highlight-start\n  @UI.lineItem: [{ position: 80, criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n//highlight-end\n  @UI.selectionField: [{ position: 60 }]\n//highlight-start\n  @UI.fieldGroup: [{ position: 90, qualifier: 'TravelDetails', criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n//highlight-end\n  Status;\n\n  @UI.fieldGroup: [{ position: 20, qualifier: 'AdminData' }]\n  Createdby;\n\n  @UI.fieldGroup: [{ position: 30, qualifier: 'AdminData' }]\n  Createdat;\n\n  @UI.fieldGroup: [{ position: 40, qualifier: 'AdminData' }]\n  Lastchangedby;\n\n  @UI.fieldGroup: [{ position: 50, qualifier: 'AdminData' }]\n  Lastchangedat;\n\n}\n")))}p.isMDXComponent=!0}}]);