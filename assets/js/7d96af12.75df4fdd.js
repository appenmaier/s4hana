"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[9390],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),g=a,h=p["".concat(d,".").concat(g)]||p[g]||u[g]||r;return t?i.createElement(h,o(o({ref:n},c),{},{components:t})):i.createElement(h,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=t(7462),a=(t(7294),t(3905));const r={title:"17. Entwurfs-Funktionen implementieren",description:"",sidebar_position:170},o=void 0,l={unversionedId:"rap-cookbook/implement-draft-capabilities",id:"rap-cookbook/implement-draft-capabilities",title:"17. Entwurfs-Funktionen implementieren",description:"",source:"@site/docs/rap-cookbook/implement-draft-capabilities.md",sourceDirName:"rap-cookbook",slug:"/rap-cookbook/implement-draft-capabilities",permalink:"/s4hana/rap-cookbook/implement-draft-capabilities",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap-cookbook/implement-draft-capabilities.md",tags:[],version:"current",sidebarPosition:170,frontMatter:{title:"17. Entwurfs-Funktionen implementieren",description:"",sidebar_position:170},sidebar:"rapCookbookSidebar",previous:{title:"16. Aktionen mit Parametern implementieren",permalink:"/s4hana/rap-cookbook/implement-actions-with-parameters"},next:{title:"18. Berechtigungspr\xfcfungen implementieren",permalink:"/s4hana/rap-cookbook/implement-authority-checks"}},d={},s=[{value:"Behavior Definition <code>ZR_TRAVEL</code>",id:"behavior-definition-zr_travel",level:2},{value:"Behavior Projection <code>ZC_TRAVEL</code>",id:"behavior-projection-zc_travel",level:2},{value:"Service Binding <code>ZUI_TRAVEL_V4</code>",id:"service-binding-zui_travel_v4",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Behavior Definition ",(0,a.kt)("inlineCode",{parentName:"li"},"ZR_TRAVEL")," um Entwurfs-Funktionen erweitern"),(0,a.kt)("li",{parentName:"ul"},"Eine Entwurfstabelle ",(0,a.kt)("inlineCode",{parentName:"li"},"Z_TRAVEL_D")," generieren lassen"),(0,a.kt)("li",{parentName:"ul"},"Eine Entwurfstabelle ",(0,a.kt)("inlineCode",{parentName:"li"},"Z_BOOKING_D")," generieren lassen"),(0,a.kt)("li",{parentName:"ul"},"Die Behavior Projection ",(0,a.kt)("inlineCode",{parentName:"li"},"ZC_TRAVEL")," um Entwurfs-Funktionen erweitern"),(0,a.kt)("li",{parentName:"ul"},"Das Service Binding ",(0,a.kt)("inlineCode",{parentName:"li"},"ZUI_TRAVEL_V4")," erstellen"),(0,a.kt)("li",{parentName:"ul"},"Das Service Binding ",(0,a.kt)("inlineCode",{parentName:"li"},"ZUI_TRAVEL_V2")," l\xf6schen")),(0,a.kt)("h2",{id:"behavior-definition-zr_travel"},"Behavior Definition ",(0,a.kt)("inlineCode",{parentName:"h2"},"ZR_TRAVEL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"managed implementation in class zbp_travel unique;\nstrict ( 2 );\n//highlight-start\nwith draft;\n//highlight-end\n\ndefine behavior for ZR_Travel alias Travel\npersistent table z_travel_a\n//highlight-start\ndraft table z_travel_d\n//highlight-end\nlock master\n//highlight-start\ntotal etag LastChangedAt\n//highlight-end\nauthorization master ( instance )\n//etag master <field_name>\n{\n  create;\n  update;\n  delete;\n\n//highlight-start\n  association _Bookings { create; with draft; }\n//highlight-end\n\n  static action ShowTestMessage;\n  action CancelTravel result [1] $self;\n  action MaintainBookingFee parameter ZA_BookingFee result [1] $self;\n\n//highlight-start\n  draft action Activate optimized;\n  draft action Discard;\n  draft action Edit;\n  draft determine action Prepare\n  {\n    validation ValidateDates;\n    validation ValidateCustomer;\n    validation ValidateAgency;\n  }\n  draft action Resume;\n//highlight-end\n\n  validation ValidateDates on save { create; }\n  validation ValidateCustomer on save { create; }\n  validation ValidateAgency on save { create; }\n\n  determination DetermineStatus on modify { create; }\n  determination DetermineTravelId on modify { create; }\n\n  field ( readonly, numbering : managed ) TravelUuid;\n  field ( mandatory : create ) AgencyId, BeginDate, CustomerId, Description, EndDate;\n  field ( readonly : update ) AgencyId, BeginDate, CustomerId, Description, EndDate;\n  field ( readonly ) CreatedAt, CreatedBy, LastChangedAt, LastChangedBy, Status, TravelId;\n\n  mapping for z_travel_a corresponding\n  {\n    AgencyId = agency_id;\n    BeginDate = begin_date;\n    BookingFee = booking_fee;\n    CreatedAt = created_at;\n    CreatedBy = created_by;\n    CurrencyCode = currency_code;\n    CustomerId = customer_id;\n    Description = description;\n    EndDate = end_date;\n    LastChangedAt = last_changed_at;\n    LastChangedBy = last_changed_by;\n    Status = status;\n    TotalPrice = total_price;\n    TravelId = travel_id;\n    TravelUuid = travel_uuid;\n  }\n}\n\ndefine behavior for ZR_Booking alias Booking\npersistent table z_booking_a\nlock dependent by _Travel\n//highlight-start\ndraft table z_booking_d\n//highlight-end\nauthorization dependent by _Travel\n//etag master <field_name>\n{\n  update;\n  delete;\n\n//highlight-start\n  association _Travel { with draft; }\n//highlight-end\n\n  field ( readonly, numbering : managed ) BookingUuid;\n  field ( readonly ) TravelUuid;\n\n  mapping for z_booking_a corresponding\n  {\n    BookingDate = booking_Date;\n    BookingId = booking_id;\n    BookingUuid = booking_uuid;\n    CarrierId = carrier_id;\n    ConnectionId = connection_id;\n    CurrencyCode = currency_code;\n    FlightDate = flight_date;\n    FlightPrice = flight_price;\n    TravelUuid = Travel_uuid;\n  }\n}\n")),(0,a.kt)("h2",{id:"behavior-projection-zc_travel"},"Behavior Projection ",(0,a.kt)("inlineCode",{parentName:"h2"},"ZC_TRAVEL")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"projection;\nstrict ( 2 );\n//highlight-start\nuse draft;\n//highlight-end\n\ndefine behavior for ZC_Travel alias Travel\n{\n  use create;\n  use update;\n  use delete;\n\n//highlight-start\n  use association _Bookings { create; with draft; }\n//highlight-end\n\n  use action ShowTestMessage;\n  use action CancelTravel;\n  use action MaintainBookingFee;\n\n//highlight-start\n  use action Activate;\n  use action Edit;\n  use action Discard;\n  use action Prepare;\n  use action Resume;\n//highlight-end\n}\n\ndefine behavior for ZC_Booking alias Booking\n{\n  use update;\n  use delete;\n\n//highlight-start\n  use association _Travel { with draft; }\n//highlight-end\n}\n")),(0,a.kt)("h2",{id:"service-binding-zui_travel_v4"},"Service Binding ",(0,a.kt)("inlineCode",{parentName:"h2"},"ZUI_TRAVEL_V4")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Service Definition: ZUI_TRAVEL"),(0,a.kt)("li",{parentName:"ul"},"Binding Type: OData V4 - UI")))}u.isMDXComponent=!0}}]);