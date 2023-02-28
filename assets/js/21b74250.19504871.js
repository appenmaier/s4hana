"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[5468],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(t),b=o,f=p["".concat(l,".").concat(b)]||p[b]||u[b]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={title:"Gesch\xe4ftsobjekt erweitern",description:"",sidebar_position:40},i=void 0,c={unversionedId:"rap/cookbook/extend-bo",id:"rap/cookbook/extend-bo",title:"Gesch\xe4ftsobjekt erweitern",description:"",source:"@site/docs/rap/cookbook/extend-bo.md",sourceDirName:"rap/cookbook",slug:"/rap/cookbook/extend-bo",permalink:"/s4hana/rap/cookbook/extend-bo",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap/cookbook/extend-bo.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{title:"Gesch\xe4ftsobjekt erweitern",description:"",sidebar_position:40},sidebar:"rapSidebar",previous:{title:"Oberfl\xe4che festlegen",permalink:"/s4hana/rap/cookbook/define-ui"},next:{title:"Gesch\xe4ftsservice erweitern",permalink:"/s4hana/rap/cookbook/extend-service"}},l={},s=[{value:"Datenbanktabelle Z_BOOKING",id:"datenbanktabelle-z_booking",level:2},{value:"Interface View ZI_Booking",id:"interface-view-zi_booking",level:2},{value:"Interface View ZI_Travel",id:"interface-view-zi_travel",level:2}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Um das Gesch\xe4ftsobjekt um Buchungsdaten zu erweitern, muss zun\xe4chst eine entsprechende Datenbanktabelle f\xfcr Buchungsdaten erstellt werden. Anschlie\xdfend wird darauf aufbauend eine dazugeh\xf6rige Interface View inklusive einer Assoziation zu den Reisen erstellt. Zuletzt wird die Interface View f\xfcr Reisen um eine Assoziation zu den Buchungsdaten erweitert."),(0,o.kt)("h2",{id:"datenbanktabelle-z_booking"},"Datenbanktabelle Z_BOOKING"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@EndUserText.label : 'Booking'\n@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE\n@AbapCatalog.tableCategory : #TRANSPARENT\n@AbapCatalog.deliveryClass : #A\n@AbapCatalog.dataMaintenance : #RESTRICTED\ndefine table z_booking {\n  key client       : abap.clnt not null;\n  key booking_uuid : sysuuid_x16 not null;\n  travel_uuid      : sysuuid_x16 not null;\n  booking_id       : /dmo/booking_id;\n  booking_date     : /dmo/booking_date;\n  carrier_id       : /dmo/carrier_id;\n  connection_id    : /dmo/connection_id;\n  flight_date      : /dmo/flight_date;\n  @Semantics.amount.currencyCode : 'z_booking.currency_code'\n  flight_price     : /dmo/flight_price;\n  currency_code    : /dmo/currency_code;\n  status           : /dmo/booking_status;\n}\n")),(0,o.kt)("h2",{id:"interface-view-zi_booking"},"Interface View ZI_Booking"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@AccessControl.authorizationCheck: #NOT_REQUIRED\n@EndUserText.label: 'Interface View: Booking'\ndefine view entity ZI_Booking\n  as select from z_booking\n  association to parent ZI_Travel as _Travel on $projection.TravelUuid = _Travel.TravelUuid\n{\n  key booking_uuid  as BookingUuid,\n      travel_uuid   as TravelUuid,\n      booking_id    as BookingId,\n      booking_date  as BookingDate,\n      carrier_id    as CarrierId,\n      connection_id as ConnectionId,\n      flight_date   as FlightDate,\n      @Semantics.amount.currencyCode: 'CurrencyCode'\n      flight_price  as FlightPrice,\n      currency_code as CurrencyCode,\n      status        as Status,\n\n      /* Associations */\n      _Travel\n}\n")),(0,o.kt)("h2",{id:"interface-view-zi_travel"},"Interface View ZI_Travel"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"@AccessControl.authorizationCheck: #NOT_REQUIRED\n@EndUserText.label: 'Interface View: Travel'\ndefine root view entity ZI_Travel\n  as select from z_travel\n  composition [0..*] of ZI_Booking as _Bookings\n{\n  key travel_uuid        as TravelUuid,\n      travel_id          as TravelId,\n      customer_id        as CustomerId,\n      begin_date         as BeginDate,\n      end_date           as EndDate,\n      description        as Description,\n      @Semantics.amount.currencyCode: 'CurrencyCode'\n      total_price        as TotalPrice,\n      currency_code      as CurrencyCode,\n\n      /* Associations */\n      _Bookings\n}\n")))}u.isMDXComponent=!0}}]);