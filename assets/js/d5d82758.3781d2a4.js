"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[9148],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?i.createElement(g,r(r({ref:n},d),{},{components:t})):i.createElement(g,r({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<a;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7266:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(7462),o=(t(7294),t(3905));const a={title:"Hervorhebungen implementieren",description:"",sidebar_position:100},r=void 0,s={unversionedId:"rap/cookbook/implement-highlighting",id:"rap/cookbook/implement-highlighting",title:"Hervorhebungen implementieren",description:"",source:"@site/docs/rap/cookbook/implement-highlighting.md",sourceDirName:"rap/cookbook",slug:"/rap/cookbook/implement-highlighting",permalink:"/s4hana/rap/cookbook/implement-highlighting",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap/cookbook/implement-highlighting.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{title:"Hervorhebungen implementieren",description:"",sidebar_position:100},sidebar:"rapSidebar",previous:{title:"Textelemente implementieren",permalink:"/s4hana/rap/cookbook/implement-text-elements"},next:{title:"Sortierung implementieren",permalink:"/s4hana/rap/cookbook/implement-sorting"}},l={},c=[{value:"Hervorhebung f\xfcr den Status",id:"hervorhebung-f\xfcr-den-status",level:2},{value:"Interface View ZI_Booking",id:"interface-view-zi_booking",level:3},{value:"Projection View ZC_Booking",id:"projection-view-zc_booking",level:3},{value:"Metadata Extension ZC_BOOKING",id:"metadata-extension-zc_booking",level:3},{value:"Hervorhebung f\xfcr das Startdatum",id:"hervorhebung-f\xfcr-das-startdatum",level:2},{value:"Interface View ZI_Travel",id:"interface-view-zi_travel",level:3},{value:"Projection View ZC_Travel",id:"projection-view-zc_travel",level:3},{value:"Metadata Extension ZC_TRAVEL",id:"metadata-extension-zc_travel",level:3}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"TODO",type:"danger"}),(0,o.kt)("h2",{id:"hervorhebung-f\xfcr-den-status"},"Hervorhebung f\xfcr den Status"),(0,o.kt)("h3",{id:"interface-view-zi_booking"},"Interface View ZI_Booking"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@AccessControl.authorizationCheck: #NOT_REQUIRED\n@EndUserText.label: 'Interface View: Booking'\ndefine view entity ZI_Booking\n  as select from z_booking\n  association to parent ZI_Travel as _Travel on $projection.TravelUuid = _Travel.TravelUuid\n{\n  key booking_uuid  as BookingUuid,\n      travel_uuid   as TravelUuid,\n      booking_id    as BookingId,\n      booking_date  as BookingDate,\n      carrier_id    as CarrierId,\n      connection_id as ConnectionId,\n      flight_date   as FlightDate,\n      @Semantics.amount.currencyCode: 'CurrencyCode'\n      flight_price  as FlightPrice,\n      currency_code as CurrencyCode,\n      status        as Status,\n\n      /* Transient Data */\n      case status when 'B' then 3\n                  when 'N' then 0\n                  when 'X' then 1\n                  else 0\n      end           as StatusCriticality,\n\n      /* Associations */\n      _Travel\n}\n")),(0,o.kt)("h3",{id:"projection-view-zc_booking"},"Projection View ZC_Booking"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@EndUserText.label: 'Projection View: Booking'\n@AccessControl.authorizationCheck: #NOT_REQUIRED\n@Metadata.allowExtensions: true\ndefine view entity ZC_Booking\n  as projection on ZI_Booking\n{\n  key BookingUuid,\n      TravelUuid,\n      BookingId,\n      BookingDate,\n      CarrierId,\n      ConnectionId,\n      FlightDate,\n      FlightPrice,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]\n      CurrencyCode,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_StatusVH', element: 'Status' } }]\n      Status,\n\n      /* Transient Data */\n      StatusCriticality,\n\n      /* Associations */\n      _Travel : redirected to parent ZC_Travel\n}\n")),(0,o.kt)("h3",{id:"metadata-extension-zc_booking"},"Metadata Extension ZC_BOOKING"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@Metadata.layer: #CUSTOMER\n@UI.headerInfo:\n{\n  typeName: 'Booking',\n  typeNamePlural: 'Bookings',\n  title.value: 'BookingId',\n  description.value: 'Status'\n}\nannotate view ZC_Booking with\n{\n\n  /* Facets */\n  @UI.facet: [{ position: 10, type: #IDENTIFICATION_REFERENCE, label: 'Booking Details' }]\n\n  /* Actions */\n  @UI.lineItem: [{ position: 10, type: #FOR_ACTION, dataAction: 'CANCEL_BOOKING', label: 'Cancel Booking' }]\n\n  /* Fields */\n  @UI.hidden: true\n  BookingUuid;\n\n  @UI.hidden: true\n  TravelUuid;\n\n  @UI.lineItem: [{ position: 10 }]\n  @UI.identification: [{ position: 10 }]\n  BookingId;\n\n  @UI.lineItem: [{ position: 20 }]\n  @UI.selectionField: [{ position: 10 }]\n  @UI.identification: [{ position: 20 }]\n  BookingDate;\n\n  @UI.lineItem: [{ position: 30 }]\n  @UI.selectionField: [{ position: 20 }]\n  @UI.identification: [{ position: 30 }]\n  CarrierId;\n\n  @UI.lineItem: [{ position: 40 }]\n  @UI.identification: [{ position: 40 }]\n  ConnectionId;\n\n  @UI.lineItem: [{ position: 50 }]\n  @UI.selectionField: [{ position: 30 }]\n  @UI.identification: [{ position: 50 }]\n  FlightDate;\n\n  @UI.identification: [{ position: 60 }]\n  FlightPrice;\n\n  @UI.lineItem: [{ position: 60, criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n  @UI.selectionField: [{ position: 40 }]\n  @UI.identification: [{ position: 70 }]\n  Status;\n\n  @UI.hidden: true\n  StatusCriticality;\n\n}\n")),(0,o.kt)("h2",{id:"hervorhebung-f\xfcr-das-startdatum"},"Hervorhebung f\xfcr das Startdatum"),(0,o.kt)("h3",{id:"interface-view-zi_travel"},"Interface View ZI_Travel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@AccessControl.authorizationCheck: #NOT_REQUIRED\n@EndUserText.label: 'Interface View: Travel'\ndefine root view entity ZI_Travel\n  as select from z_travel\n  composition [0..*] of ZI_Booking      as _Bookings\n  association [1..1] to ZI_CustomerText as _CustomerText on $projection.CustomerId = _CustomerText.CustomerId\n{\n  key travel_uuid        as TravelUuid,\n      travel_id          as TravelId,\n      @ObjectModel.text.element: ['CustomerName']\n      customer_id        as CustomerId,\n      begin_date         as BeginDate,\n      end_date           as EndDate,\n      description        as Description,\n      @Semantics.amount.currencyCode: 'CurrencyCode'\n      total_price        as TotalPrice,\n      currency_code      as CurrencyCode,\n\n      /* Transient Data */\n      case when dats_days_between($session.user_date, begin_date) >= 14 then 3\n           when dats_days_between($session.user_date, begin_date) >= 7 then 2\n           when dats_days_between($session.user_date, begin_date) >= 0 then 1\n           else 0\n      end                as BeginDateCriticality,\n      _CustomerText.Name as CustomerName,\n\n      /* Associations */\n      _Bookings\n}\n")),(0,o.kt)("h3",{id:"projection-view-zc_travel"},"Projection View ZC_Travel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@EndUserText.label: 'Projection View: Travel'\n@AccessControl.authorizationCheck: #NOT_REQUIRED\n@Search.searchable: true\n@Metadata.allowExtensions: true\ndefine root view entity ZC_Travel\n  provider contract transactional_query\n  as projection on ZI_Travel\n{\n  key TravelUuid,\n      TravelId,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_CustomerVH', element: 'CustomerId' } }]\n      CustomerId,\n      BeginDate,\n      EndDate,\n      @Search.defaultSearchElement: true\n      @Search.fuzzinessThreshold: 0.7\n      Description,\n      TotalPrice,\n      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]\n      CurrencyCode,\n\n      /* Transient Data */\n      BeginDateCriticality,\n      CustomerName,\n\n      /* Associations */\n      _Bookings : redirected to composition child ZC_Booking\n}\n")),(0,o.kt)("h3",{id:"metadata-extension-zc_travel"},"Metadata Extension ZC_TRAVEL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@Metadata.layer: #CUSTOMER\n@UI.headerInfo:\n{\n  typeNamePlural: 'Travels',\n  typeName: 'Travel',\n  title.value: 'TravelId',\n  description.value: 'Description'\n}\nannotate view ZC_Travel with\n{\n\n  /* Facets */\n  @UI.facet:\n  [\n    { position: 10, type: #IDENTIFICATION_REFERENCE, label: 'Travel Details' },\n    { position: 20, type: #LINEITEM_REFERENCE, label: 'Bookings', targetElement: '_Bookings' }\n  ]\n\n  /* Fields */\n  @UI.hidden: true\n  TravelUuid;\n\n  @UI.lineItem: [{ position: 10 }]\n  @UI.selectionField: [{ position: 10 }]\n  @UI.identification: [{ position: 10 }]\n  TravelId;\n\n  @UI.lineItem: [{ position: 20 }]\n  @UI.selectionField: [{ position: 20 }]\n  @UI.identification: [{ position: 20 }]\n  CustomerId;\n\n  @UI.lineItem: [{ position: 30, criticality: 'BeginDateCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n  @UI.selectionField: [{ position: 30 }]\n  @UI.identification: [{ position: 30 }]\n  BeginDate;\n\n  @UI.hidden: true\n  BeginDateCriticality;\n\n  @UI.lineItem: [{ position: 40 }]\n  @UI.selectionField: [{ position: 40 }]\n  @UI.identification: [{ position: 40 }]\n  EndDate;\n\n  @UI.lineItem: [{ position: 50 }]\n  @UI.identification: [{ position: 50 }]\n  Description;\n\n  @UI.lineItem: [{ position: 60 }]\n  @UI.selectionField: [{ position: 60 }]\n  @UI.identification: [{ position: 60 }]\n  TotalPrice;\n}\n")))}p.isMDXComponent=!0}}]);