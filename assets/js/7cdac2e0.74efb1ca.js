"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[642],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>g});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=o,f=u["".concat(c,".").concat(g)]||u[g]||p[g]||a;return t?i.createElement(f,r(r({ref:n},d),{},{components:t})):i.createElement(f,r({ref:n},d))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=t[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4728:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(7462),o=(t(7294),t(3905));const a={title:"13. Aktionen festlegen",description:"",sidebar_position:130},r=void 0,l={unversionedId:"rap-cookbook/define-actions",id:"rap-cookbook/define-actions",title:"13. Aktionen festlegen",description:"",source:"@site/docs/rap-cookbook/define-actions.md",sourceDirName:"rap-cookbook",slug:"/rap-cookbook/define-actions",permalink:"/s4hana/rap-cookbook/define-actions",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap-cookbook/define-actions.md",tags:[],version:"current",sidebarPosition:130,frontMatter:{title:"13. Aktionen festlegen",description:"",sidebar_position:130},sidebar:"rapCookbookSidebar",previous:{title:"12. Nachrichten festlegen",permalink:"/s4hana/rap-cookbook/define-messages"},next:{title:"14. Aktionen implementieren",permalink:"/s4hana/rap-cookbook/implement-actions"}},c={},s=[{value:"Behavior Definition ZR_TRAVEL",id:"behavior-definition-zr_travel",level:2},{value:"Behavior Definition ZC_TRAVEL",id:"behavior-definition-zc_travel",level:2},{value:"Metadata Extension ZC_BOOKING",id:"metadata-extension-zc_booking",level:2}],d={toc:s};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"TODO",type:"danger"}),(0,o.kt)("h2",{id:"behavior-definition-zr_travel"},"Behavior Definition ZR_TRAVEL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"managed implementation in class zbp_r_travel unique;\nstrict ( 2 );\n\ndefine behavior for ZR_Travel alias Travel\npersistent table zatravel\nlock master\nauthorization master ( instance )\n//etag master <field_name>\n{\n  create;\n  update;\n  delete;\n  association _Bookings { create; }\n\n  field ( readonly, numbering : managed ) TravelUuid;\n\n  mapping for zatravel corresponding\n  {\n    BeginDate = begin_date;\n    CurrencyCode = currency_code;\n    CustomerId = customer_id;\n    Description = description;\n    EndDate = end_date;\n    TotalPrice = total_price;\n    TravelId = travel_id;\n    TravelUuid = travel_uuid;\n  }\n}\n\ndefine behavior for ZR_Booking alias Booking\npersistent table zabooking\nlock dependent by _Travel\nauthorization dependent by _Travel\n//etag master <field_name>\n{\n  update;\n  delete;\n  field ( readonly ) TravelUuid;\n  association _Travel;\n\n//highlight-start\n  action cancel_booking;\n//highlight-end\n\n  field ( readonly, numbering : managed ) BookingUuid;\n\n  mapping for zabooking corresponding\n  {\n    BookingDate = booking_Date;\n    BookingId = booking_id;\n    BookingUuid = booking_uuid;\n    CarrierId = carrier_id;\n    ConnectionId = connection_id;\n    CurrencyCode = currency_code;\n    FlightDate = flight_date;\n    FlightPrice = flight_price;\n    Status = status;\n    TravelUuid = Travel_uuid;\n  }\n}\n")),(0,o.kt)("h2",{id:"behavior-definition-zc_travel"},"Behavior Definition ZC_TRAVEL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"projection;\nstrict ( 2 );\n\ndefine behavior for ZC_Travel alias Travel\n{\n  use create;\n  use update;\n  use delete;\n\n  use association _Bookings { create; }\n}\n\ndefine behavior for ZC_Booking alias Booking\n{\n  use update;\n  use delete;\n\n//highlight-start\n  use action cancel_booking;\n//highlight-end\n\n  use association _Travel;\n}\n")),(0,o.kt)("h2",{id:"metadata-extension-zc_booking"},"Metadata Extension ZC_BOOKING"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@Metadata.layer: #CUSTOMER\n@UI.headerInfo:\n{\n  typeName: 'Booking',\n  typeNamePlural: 'Bookings',\n  title.value: 'BookingId',\n  description.value: 'Status'\n}\nannotate view ZC_Booking with\n{\n\n  /* Facets */\n  @UI.facet: [{ position: 10, type: #IDENTIFICATION_REFERENCE, label: 'Booking Details' }]\n\n//highlight-start\n  /* Actions */\n  @UI.lineItem: [{ position: 10, type: #FOR_ACTION, dataAction: 'CANCEL_BOOKING', label: 'Cancel Booking' }]\n//highlight-end\n\n  /* Fields */\n  @UI.hidden: true\n  BookingUuid;\n\n  @UI.hidden: true\n  TravelUuid;\n\n  @UI.lineItem: [{ position: 10 }]\n  @UI.identification: [{ position: 10 }]\n  BookingId;\n\n  @UI.lineItem: [{ position: 20 }]\n  @UI.selectionField: [{ position: 10 }]\n  @UI.identification: [{ position: 20 }]\n  BookingDate;\n\n  @UI.lineItem: [{ position: 30 }]\n  @UI.selectionField: [{ position: 20 }]\n  @UI.identification: [{ position: 30 }]\n  CarrierId;\n\n  @UI.lineItem: [{ position: 40 }]\n  @UI.identification: [{ position: 40 }]\n  ConnectionId;\n\n  @UI.lineItem: [{ position: 50 }]\n  @UI.selectionField: [{ position: 30 }]\n  @UI.identification: [{ position: 50 }]\n  FlightDate;\n\n  @UI.identification: [{ position: 60 }]\n  FlightPrice;\n\n  @UI.lineItem: [{ position: 60, criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n  @UI.selectionField: [{ position: 40 }]\n  @UI.identification: [{ position: 70 }]\n  Status;\n\n  @UI.hidden: true\n  StatusCriticality;\n\n}\n")))}p.isMDXComponent=!0}}]);