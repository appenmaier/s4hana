"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[642],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,g=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return t?i.createElement(g,r(r({ref:n},d),{},{components:t})):i.createElement(g,r({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<o;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const o={title:"13. Aktionen festlegen",description:"",sidebar_position:130},r=void 0,l={unversionedId:"rap-cookbook/define-actions",id:"rap-cookbook/define-actions",title:"13. Aktionen festlegen",description:"",source:"@site/docs/rap-cookbook/define-actions.md",sourceDirName:"rap-cookbook",slug:"/rap-cookbook/define-actions",permalink:"/s4hana/rap-cookbook/define-actions",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap-cookbook/define-actions.md",tags:[],version:"current",sidebarPosition:130,frontMatter:{title:"13. Aktionen festlegen",description:"",sidebar_position:130},sidebar:"rapCookbookSidebar",previous:{title:"12. Nachrichten festlegen",permalink:"/s4hana/rap-cookbook/define-messages"},next:{title:"14. Aktionen implementieren",permalink:"/s4hana/rap-cookbook/implement-actions"}},s={},c=[{value:"Abstract View ZA_BookingFee",id:"abstract-view-za_bookingfee",level:2},{value:"Behavior Definition ZR_TRAVEL",id:"behavior-definition-zr_travel",level:2},{value:"Behavior Projection ZC_TRAVEL",id:"behavior-projection-zc_travel",level:2},{value:"Metadata Extension ZC_TRAVEL",id:"metadata-extension-zc_travel",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"TODO",type:"danger"}),(0,a.kt)("h2",{id:"abstract-view-za_bookingfee"},"Abstract View ZA_BookingFee"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"@EndUserText.label: 'BookingFee'\ndefine abstract entity ZA_BookingFee\n{\n  BookingFee   : /dmo/booking_fee;\n  CurrencyCode : /dmo/currency_code;\n}\n")),(0,a.kt)("h2",{id:"behavior-definition-zr_travel"},"Behavior Definition ZR_TRAVEL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"managed implementation in class zbp_travel unique;\nstrict ( 2 );\n\ndefine behavior for ZR_Travel alias Travel\npersistent table z_travel_a\nlock master\nauthorization master ( instance )\n//etag master <field_name>\n{\n  create;\n  update;\n  delete;\n  association _Bookings { create; }\n\n//highlight-start\n  static action show_test_message;\n  action cancel_travel;\n  action maintain_booking_fee parameter ZA_BookingFee;\n//highlight-end\n\n  field ( readonly, numbering : managed ) TravelUuid;\n\n  mapping for z_travel_a corresponding\n  {\n    AgencyId = agency_id;\n    BeginDate = begin_date;\n    BookingFee = booking_fee;\n    CreatedAt = created_at;\n    CreatedBy = created_by;\n    CurrencyCode = currency_code;\n    CustomerId = customer_id;\n    Description = description;\n    EndDate = end_date;\n    LastChangedAt = last_changed_at;\n    LastChangedBy = last_changed_by;\n    Status = status;\n    TotalPrice = total_price;\n    TravelId = travel_id;\n    TravelUuid = travel_uuid;\n  }\n}\n\ndefine behavior for ZR_Booking alias Booking\npersistent table z_booking_a\nlock dependent by _Travel\nauthorization dependent by _Travel\n//etag master <field_name>\n{\n  update;\n  delete;\n  field ( readonly ) TravelUuid;\n  association _Travel;\n\n  field ( readonly, numbering : managed ) BookingUuid;\n\n  mapping for z_booking_a corresponding\n  {\n    BookingDate = booking_Date;\n    BookingId = booking_id;\n    BookingUuid = booking_uuid;\n    CarrierId = carrier_id;\n    ConnectionId = connection_id;\n    CurrencyCode = currency_code;\n    FlightDate = flight_date;\n    FlightPrice = flight_price;\n    TravelUuid = Travel_uuid;\n  }\n}\n")),(0,a.kt)("h2",{id:"behavior-projection-zc_travel"},"Behavior Projection ZC_TRAVEL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"projection;\nstrict ( 2 );\n\ndefine behavior for ZC_Travel alias Travel\n{\n  use create;\n  use update;\n  use delete;\n\n  use association _Bookings { create; }\n\n//highlight-start\n  use action show_test_message;\n  use action cancel_travel;\n  use action maintain_booking_fee;\n//highlight-end\n}\n\ndefine behavior for ZC_Booking alias Booking\n{\n  use update;\n  use delete;\n\n  use association _Travel;\n}\n")),(0,a.kt)("h2",{id:"metadata-extension-zc_travel"},"Metadata Extension ZC_TRAVEL"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"@Metadata.layer: #CUSTOMER\n@UI.headerInfo:\n{\n  typeNamePlural: 'Travels',\n  typeName: 'Travel',\n  title.value: 'TravelId',\n  description.value: 'Description'\n}\n@UI.presentationVariant: [{sortOrder: [{ by: 'BeginDate', direction: #DESC }]}]\nannotate view ZC_Travel with\n{\n\n  /* Facets */\n  @UI.facet:\n  [\n    { position: 10, targetQualifier: 'TravelDetails', label: 'Travel Details', type: #FIELDGROUP_REFERENCE },\n    { position: 20, targetQualifier: 'AdminData', label: 'Administrative Data', type: #FIELDGROUP_REFERENCE },\n    { position: 30, targetElement: '_Bookings', label: 'Bookings', type: #LINEITEM_REFERENCE }\n  ]\n\n//highlight-start\n  /* Actions */\n  @UI.lineItem:\n  [\n    { position: 10, dataAction: 'SHOW_TEST_MESSAGE', label: 'Show Test Message', type: #FOR_ACTION },\n    { position: 20, dataAction: 'CANCEL_TRAVEL', label: 'Cancel Travel', type: #FOR_ACTION }\n  ]\n  @UI.identification:\n  [\n    { position: 10, dataAction: 'MAINTAIN_BOOKING_FEE', label: 'Maintain Booking Fee', type: #FOR_ACTION }\n  ]\n//highlight-end\n\n  /* Fields */\n  @UI.fieldGroup: [{ position: 10, qualifier: 'AdminData' }]\n  TravelUuid;\n\n  @UI.lineItem: [{ position: 10 }]\n  @UI.fieldGroup: [{ position: 10, qualifier: 'TravelDetails' }]\n  TravelId;\n\n  @UI.lineItem: [{ position: 20 }]\n  @UI.selectionField: [{ position: 10 }]\n  @UI.fieldGroup: [{ position: 20, qualifier: 'TravelDetails' }]\n  AgencyId;\n\n  @UI.lineItem: [{ position: 30 }]\n  @UI.selectionField: [{ position: 20 }]\n  @UI.fieldGroup: [{ position: 30, qualifier: 'TravelDetails' }]\n  CustomerId;\n\n  @UI.lineItem: [{ position: 40 }]\n  @UI.selectionField: [{ position: 30 }]\n  @UI.fieldGroup: [{ position: 40, qualifier: 'TravelDetails' }]\n  BeginDate;\n\n  @UI.lineItem: [{ position: 50 }]\n  @UI.selectionField: [{ position: 40 }]\n  @UI.fieldGroup: [{ position: 50, qualifier: 'TravelDetails' }]\n  EndDate;\n\n  @UI.fieldGroup: [{ position: 60, qualifier: 'TravelDetails' }]\n  BookingFee;\n\n  @UI.lineItem: [{ position: 60 }]\n  @UI.selectionField: [{ position: 50 }]\n  @UI.fieldGroup: [{ position: 70, qualifier: 'TravelDetails' }]\n  TotalPrice;\n\n  //  CurrencyCode;\n\n  @UI.lineItem: [{ position: 70, criticality: 'BeginDateCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n  @UI.fieldGroup: [{ position: 80, qualifier: 'TravelDetails' }]\n  Description;\n\n  @UI.lineItem: [{ position: 80, criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n  @UI.selectionField: [{ position: 60 }]\n  @UI.fieldGroup: [{ position: 90, qualifier: 'TravelDetails', criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n  Status;\n\n  @UI.fieldGroup: [{ position: 20, qualifier: 'AdminData' }]\n  Createdby;\n\n  @UI.fieldGroup: [{ position: 30, qualifier: 'AdminData' }]\n  Createdat;\n\n  @UI.fieldGroup: [{ position: 40, qualifier: 'AdminData' }]\n  Lastchangedby;\n\n  @UI.fieldGroup: [{ position: 50, qualifier: 'AdminData' }]\n  Lastchangedat;\n\n}\n")))}p.isMDXComponent=!0}}]);