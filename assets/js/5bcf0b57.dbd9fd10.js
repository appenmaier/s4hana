"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[3294],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>v});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(a),v=r,p=u["".concat(s,".").concat(v)]||u[v]||_[v]||l;return a?n.createElement(p,i(i({ref:t},d),{},{components:a})):n.createElement(p,i({ref:t},d))}));function v(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5196:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>_,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={title:"1. RAP BO festlegen",description:"",sidebar_position:10},i=void 0,o={unversionedId:"rap-cookbook/define-bo",id:"rap-cookbook/define-bo",title:"1. RAP BO festlegen",description:"",source:"@site/docs/rap-cookbook/define-bo.md",sourceDirName:"rap-cookbook",slug:"/rap-cookbook/define-bo",permalink:"/s4hana/rap-cookbook/define-bo",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap-cookbook/define-bo.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"1. RAP BO festlegen",description:"",sidebar_position:10},sidebar:"rapCookbookSidebar",previous:{title:"Einf\xfchrung",permalink:"/s4hana/rap-cookbook/introduction"},next:{title:"2. Business Service festlegen",permalink:"/s4hana/rap-cookbook/define-service"}},s={},c=[{value:"Database Table Z_TRAVEL_A",id:"database-table-z_travel_a",level:2},{value:"ABAP Class ZCL_TRAVEL_GENERATOR",id:"abap-class-zcl_travel_generator",level:2},{value:"Restricted Interface View ZR_Travel",id:"restricted-interface-view-zr_travel",level:2}],d={toc:c};function _(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Zum Speichern der Reisen muss zun\xe4chst eine entsprechende Datenbanktabelle erstellt und mit Hilfe einer Generator-Klasse bef\xfcllt werden. Anschlie\xdfend wird darauf aufbauend eine Restricted Interface View erstellt, die den Wurzelknoten des RAP BOs darstellt."),(0,r.kt)("h2",{id:"database-table-z_travel_a"},"Database Table Z_TRAVEL_A"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"//highlight-start\n@EndUserText.label : 'Travel'\n@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE\n@AbapCatalog.tableCategory : #TRANSPARENT\n@AbapCatalog.deliveryClass : #A\n@AbapCatalog.dataMaintenance : #RESTRICTED\ndefine table z_travel_a {\n  key client      : abap.clnt not null;\n  key travel_uuid : sysuuid_x16 not null;\n  travel_id       : /dmo/travel_id;\n  agency_id       : /dmo/agency_id;\n  customer_id     : /dmo/customer_id;\n  begin_date      : /dmo/begin_date;\n  end_date        : /dmo/end_date;\n  @Semantics.amount.currencyCode : 'z_travel_a.currency_code'\n  booking_fee     : /dmo/booking_fee;\n  @Semantics.amount.currencyCode : 'z_travel_a.currency_code'\n  total_price     : /dmo/total_price;\n  currency_code   : /dmo/currency_code;\n  description     : /dmo/description;\n  status          : /dmo/travel_status;\n  created_by      : abp_creation_user;\n  created_at      : abp_creation_tstmpl;\n  last_changed_by : abp_lastchange_user;\n  last_changed_at : abp_lastchange_tstmpl;\n}\n//highlight-end\n")),(0,r.kt)("h2",{id:"abap-class-zcl_travel_generator"},"ABAP Class ZCL_TRAVEL_GENERATOR"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap",metastring:'title="ZCL_TRAVEL_GENERATOR.abap" showLineNumbers',title:'"ZCL_TRAVEL_GENERATOR.abap"',showLineNumbers:!0},"//highlight-start\nCLASS zcl_travel_generator DEFINITION PUBLIC FINAL CREATE PUBLIC.\n  PUBLIC SECTION.\n    INTERFACES if_oo_adt_classrun.\n  PROTECTED SECTION.\n  PRIVATE SECTION.\nENDCLASS.\n\nCLASS zcl_travel_generator IMPLEMENTATION.\n  METHOD if_oo_adt_classrun~main.\n    DATA travel  TYPE zda2310_travel_a.\n    DATA travels TYPE TABLE OF zda2310_travel_a.\n\n    \" Delete Travels\n    DELETE FROM zda2310_travel_a.\n    out->write( |Deleted Travels: { sy-dbcnt }| ).\n\n    \" Admin Data\n    travel-client          = sy-mandt.\n    travel-created_by      = 'GENERATOR'.\n    travel-last_changed_by = 'GENERATOR'.\n    GET TIME STAMP FIELD travel-created_at.\n    GET TIME STAMP FIELD travel-last_changed_at.\n\n    \" Create Travel\n    travel-agency_id     = '000001'.\n    travel-begin_date    = '20231027'.\n    travel-booking_fee   = '40.95'.\n    travel-currency_code = 'EUR'.\n    travel-customer_id   = '000004'.\n    travel-description   = 'Kurztrip nach Hamburg'.\n    travel-end_date      = '20231030'.\n    travel-status        = 'B'.\n    travel-total_price   = '650.50'.\n    travel-travel_id     = '00000001'.\n    travel-travel_uuid   = cl_system_uuid=>create_uuid_x16_static( ).\n    APPEND travel TO travels.\n\n    \" Create Travel\n    travel-agency_id     = '000023'.\n    travel-begin_date    = '20240707'.\n    travel-booking_fee   = '150.00'.\n    travel-currency_code = 'EUR'.\n    travel-customer_id   = '000066'.\n    travel-description   = 'Italienurlaub 2024'.\n    travel-end_date      = '20240723'.\n    travel-status        = 'P'.\n    travel-total_price   = '2188.00'.\n    travel-travel_id     = '00000002'.\n    travel-travel_uuid   = cl_system_uuid=>create_uuid_x16_static( ).\n    APPEND travel TO travels.\n\n    \" Create Travel\n    travel-agency_id     = '000045'.\n    travel-begin_date    = '20221231'.\n    travel-booking_fee   = '77.99'.\n    travel-currency_code = 'USD'.\n    travel-customer_id   = '000026'.\n    travel-description   = 'Silvester New York'.\n    travel-end_date      = '20230104'.\n    travel-status        = 'B'.\n    travel-total_price   = '389.00'.\n    travel-travel_id     = '00000003'.\n    travel-travel_uuid   = cl_system_uuid=>create_uuid_x16_static( ).\n    APPEND travel TO travels.\n\n    \" Create Travel\n    travel-agency_id     = '000045'.\n    travel-begin_date    = '20231101'.\n    travel-booking_fee   = '0.00'.\n    travel-currency_code = 'SGD'.\n    travel-customer_id   = '000003'.\n    travel-description   = 'Businesstrip to Singapur'.\n    travel-end_date      = '20231108'.\n    travel-status        = 'N'.\n    travel-total_price   = '1290.00'.\n    travel-travel_id     = '00000004'.\n    travel-travel_uuid   = cl_system_uuid=>create_uuid_x16_static( ).\n    APPEND travel TO travels.\n\n    \" Insert Travels\n    INSERT zda2310_travel_a FROM TABLE @travels.\n    out->write( |Inserted Travels: { sy-dbcnt }| ).\n  ENDMETHOD.\n\nENDCLASS.\n//highlight-end\n")),(0,r.kt)("h2",{id:"restricted-interface-view-zr_travel"},"Restricted Interface View ZR_Travel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"//highlight-start\n@AccessControl.authorizationCheck: #NOT_REQUIRED\n@EndUserText.label: 'Travel'\ndefine root view entity ZR_Travel\n  as select from z_travel_a\n{\n  key travel_uuid     as TravelUuid,\n      travel_id       as TravelId,\n      agency_id       as AgencyId,\n      customer_id     as CustomerId,\n      begin_date      as BeginDate,\n      end_date        as EndDate,\n      @Semantics.amount.currencyCode: 'CurrencyCode'\n      booking_fee     as BookingFee,\n      @Semantics.amount.currencyCode: 'CurrencyCode'\n      total_price     as TotalPrice,\n      currency_code   as CurrencyCode,\n      description     as Description,\n      status          as Status,\n\n      /* Administrative Data */\n      created_by      as CreatedBy,\n      created_at      as CreatedAt,\n      last_changed_by as LastChangedBy,\n      last_changed_at as LastChangedAt\n}\n//highlight-end\n")))}_.isMDXComponent=!0}}]);