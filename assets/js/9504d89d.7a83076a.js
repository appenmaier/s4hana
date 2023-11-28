"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[2535],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},T={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},E=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),E=d(t),m=i,v=E["".concat(s,".").concat(m)]||E[m]||T[m]||r;return t?a.createElement(v,l(l({ref:n},c),{},{components:t})):a.createElement(v,l({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=E;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}E.displayName="MDXCreateElement"},5476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>T,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const r={title:"16. Aktionen mit Parametern implementieren",description:"",sidebar_position:160},l=void 0,o={unversionedId:"rap-cookbook/implement-actions-with-parameters",id:"rap-cookbook/implement-actions-with-parameters",title:"16. Aktionen mit Parametern implementieren",description:"",source:"@site/docs/rap-cookbook/implement-actions-with-parameters.md",sourceDirName:"rap-cookbook",slug:"/rap-cookbook/implement-actions-with-parameters",permalink:"/s4hana/rap-cookbook/implement-actions-with-parameters",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap-cookbook/implement-actions-with-parameters.md",tags:[],version:"current",sidebarPosition:160,frontMatter:{title:"16. Aktionen mit Parametern implementieren",description:"",sidebar_position:160},sidebar:"rapCookbookSidebar",previous:{title:"15. Aktionen implementieren",permalink:"/s4hana/rap-cookbook/implement-actions"},next:{title:"17. Entwurfs-Funktionen implementieren",permalink:"/s4hana/rap-cookbook/implement-draft-capabilities"}},s={},d=[{value:"Abstract View <code>ZA_BookingFee</code>",id:"abstract-view-za_bookingfee",level:2},{value:"Behavior Definition <code>ZR_TRAVEL</code>",id:"behavior-definition-zr_travel",level:2},{value:"Verhaltensimplementierung <code>ZBP_TRAVEL</code>",id:"verhaltensimplementierung-zbp_travel",level:2},{value:"Global Class <code>ZBP_TRAVEL</code>",id:"global-class-zbp_travel",level:3},{value:"Local Type <code>LHC_TRAVEL</code>",id:"local-type-lhc_travel",level:3},{value:"Behavior Projection <code>ZC_TRAVEL</code>",id:"behavior-projection-zc_travel",level:2},{value:"Metadata Extension <code>ZC_TRAVEL</code>",id:"metadata-extension-zc_travel",level:2}],c={toc:d};function T(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Abstract View ",(0,i.kt)("inlineCode",{parentName:"li"},"ZA_BookingFee")," erstellen"),(0,i.kt)("li",{parentName:"ul"},"Die Behavior Definition ",(0,i.kt)("inlineCode",{parentName:"li"},"ZR_TRAVEL")," um eine Aktion zur Pflege der Buchungsgeb\xfchren erweitern"),(0,i.kt)("li",{parentName:"ul"},"Die Verhaltensimplementierung ",(0,i.kt)("inlineCode",{parentName:"li"},"ZCM_TRAVEL")," um eine Behandlermethode zur Pflege der Buchungsgeb\xfchren erweitern"),(0,i.kt)("li",{parentName:"ul"},"Die Behavior Projection ",(0,i.kt)("inlineCode",{parentName:"li"},"ZC_TRAVEL")," um eine Aktion zur Pflege der Buchungsgeb\xfchren erweitern"),(0,i.kt)("li",{parentName:"ul"},"Die Metadata Extension ",(0,i.kt)("inlineCode",{parentName:"li"},"ZC_TRAVEL")," um Annotationen f\xfcr eine Aktion zur Pflege der Buchungsgeb\xfchren erweitern")),(0,i.kt)("h2",{id:"abstract-view-za_bookingfee"},"Abstract View ",(0,i.kt)("inlineCode",{parentName:"h2"},"ZA_BookingFee")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"//highlight-start\n@EndUserText.label: 'Booking Fee'\ndefine abstract entity ZA_BookingFee\n{\n  @Semantics.amount.currencyCode: 'CurrencyCode'\n  BookingFee   : /dmo/booking_fee;\n  @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]\n  CurrencyCode : /dmo/currency_code;\n}\n//highlight-end\n")),(0,i.kt)("h2",{id:"behavior-definition-zr_travel"},"Behavior Definition ",(0,i.kt)("inlineCode",{parentName:"h2"},"ZR_TRAVEL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"managed implementation in class zbp_travel unique;\nstrict ( 2 );\n\ndefine behavior for ZR_Travel alias Travel\npersistent table z_travel_a\nlock master\nauthorization master ( instance )\n//etag master <field_name>\n{\n  create;\n  update;\n  delete;\n\n  association _Bookings { create; }\n\n  static action ShowTestMessage;\n  action CancelTravel result [1] $self;\n//highlight-start\n  action MaintainBookingFee parameter ZA_BookingFee result [1] $self;\n//highlight-end\n\n  validation ValidateDates on save { create; }\n  validation ValidateCustomer on save { create; }\n  validation ValidateAgency on save { create; }\n\n  determination DetermineStatus on modify { create; }\n  determination DetermineTravelId on modify { create; }\n\n  field ( readonly, numbering : managed ) TravelUuid;\n  field ( mandatory : create ) AgencyId, BeginDate, CustomerId, Description, EndDate;\n  field ( readonly : update ) AgencyId, BeginDate, CustomerId, Description, EndDate;\n  field ( readonly ) Createdat, Createdby, Lastchangedat, Lastchangedby, Status, TravelId;\n\n  mapping for z_travel_a corresponding\n  {\n    AgencyId = agency_id;\n    BeginDate = begin_date;\n    BookingFee = booking_fee;\n    CreatedAt = created_at;\n    CreatedBy = created_by;\n    CurrencyCode = currency_code;\n    CustomerId = customer_id;\n    Description = description;\n    EndDate = end_date;\n    LastChangedAt = last_changed_at;\n    LastChangedBy = last_changed_by;\n    Status = status;\n    TotalPrice = total_price;\n    TravelId = travel_id;\n    TravelUuid = travel_uuid;\n  }\n}\n\ndefine behavior for ZR_Booking alias Booking\npersistent table z_booking_a\nlock dependent by _Travel\nauthorization dependent by _Travel\n//etag master <field_name>\n{\n  update;\n  delete;\n\n  association _Travel;\n\n  field ( readonly, numbering : managed ) BookingUuid;\n  field ( readonly ) TravelUuid;\n\n  mapping for z_booking_a corresponding\n  {\n    BookingDate = booking_Date;\n    BookingId = booking_id;\n    BookingUuid = booking_uuid;\n    CarrierId = carrier_id;\n    ConnectionId = connection_id;\n    CurrencyCode = currency_code;\n    FlightDate = flight_date;\n    FlightPrice = flight_price;\n    TravelUuid = Travel_uuid;\n  }\n}\n")),(0,i.kt)("h2",{id:"verhaltensimplementierung-zbp_travel"},"Verhaltensimplementierung ",(0,i.kt)("inlineCode",{parentName:"h2"},"ZBP_TRAVEL")),(0,i.kt)("h3",{id:"global-class-zbp_travel"},"Global Class ",(0,i.kt)("inlineCode",{parentName:"h3"},"ZBP_TRAVEL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-abap",metastring:'title="ZBP_TRAVEL.abap" showLineNumbers',title:'"ZBP_TRAVEL.abap"',showLineNumbers:!0},"CLASS zbp_travel DEFINITION PUBLIC ABSTRACT FINAL FOR BEHAVIOR OF zr_travel.\n  PROTECTED SECTION.\n\n  PRIVATE SECTION.\nENDCLASS.\n\nCLASS zbp_travel IMPLEMENTATION.\nENDCLASS.\n")),(0,i.kt)("h3",{id:"local-type-lhc_travel"},"Local Type ",(0,i.kt)("inlineCode",{parentName:"h3"},"LHC_TRAVEL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-abap",metastring:'title="ZBP_TRAVEL.abap" shwoLineNumbers',title:'"ZBP_TRAVEL.abap"',shwoLineNumbers:!0},'CLASS lhc_travel DEFINITION INHERITING FROM cl_abap_behavior_handler.\n  PRIVATE SECTION.\n    METHODS get_instance_authorizations FOR INSTANCE AUTHORIZATION\n      IMPORTING keys REQUEST requested_authorizations FOR Travel RESULT result.\n\n    METHODS showtestmessage FOR MODIFY\n      IMPORTING keys FOR ACTION travel~showtestmessage.\n\n    METHODS validateagency FOR VALIDATE ON SAVE\n      IMPORTING keys FOR travel~validateagency.\n\n    METHODS validatecustomer FOR VALIDATE ON SAVE\n      IMPORTING keys FOR travel~validatecustomer.\n\n    METHODS validatedates FOR VALIDATE ON SAVE\n      IMPORTING keys FOR travel~validatedates.\n\n    METHODS determinestatus FOR DETERMINE ON MODIFY\n      IMPORTING keys FOR travel~determinestatus.\n\n    METHODS determinetravelid FOR DETERMINE ON MODIFY\n      IMPORTING keys FOR travel~determinetravelid.\n\n    METHODS canceltravel FOR MODIFY\n      IMPORTING keys FOR ACTION travel~canceltravel RESULT result.\n\n//highlight-start\n    METHODS maintainbookingfee FOR MODIFY\n      IMPORTING keys FOR ACTION travel~maintainbookingfee RESULT result.\n//highlight-end\nENDCLASS.\n\nCLASS lhc_travel IMPLEMENTATION.\n  METHOD get_instance_authorizations.\n  ENDMETHOD.\n\n  METHOD showtestmessage.\n    DATA message TYPE REF TO zcm_travel.\n\n    message = NEW zcm_travel( severity  = if_abap_behv_message=>severity-success\n                              textid    = zcm_travel=>test_message\n                              user_name = sy-uname ).\n\n    APPEND message TO reported-%other.\n  ENDMETHOD.\n\n  METHOD validateagency.\n    DATA message TYPE REF TO zcm_travel.\n\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         FIELDS ( AgencyId )\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Process Travels\n    LOOP AT travels INTO DATA(travel).\n      " Validate Agency and Create Error Message\n      SELECT SINGLE FROM /dmo/agency FIELDS @abap_true WHERE agency_id = @travel-AgencyId INTO @DATA(exists).\n      IF exists = abap_false.\n        message = NEW zcm_travel( textid    = zcm_travel=>no_agency_found\n                                  agency_id = travel-AgencyId ).\n        APPEND VALUE #( %tky     = travel-%tky\n                        %element = VALUE #( AgencyId = if_abap_behv=>mk-on )\n                        %msg     = message ) TO reported-travel.\n        APPEND VALUE #( %tky = travel-%tky ) TO failed-travel.\n      ENDIF.\n    ENDLOOP.\n  ENDMETHOD.\n\n  METHOD validatecustomer.\n    DATA message TYPE REF TO zcm_travel.\n\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         FIELDS ( CustomerId )\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Process Travels\n    LOOP AT travels INTO DATA(travel).\n      " Validate Agency and Create Error Message\n      SELECT SINGLE FROM /dmo/customer FIELDS @abap_true WHERE customer_id = @travel-CustomerId INTO @DATA(exists).\n      IF exists = abap_false.\n        message = NEW zcm_travel( textid      = zcm_travel=>no_customer_found\n                                  customer_id = travel-CustomerId ).\n        APPEND VALUE #( %tky     = travel-%tky\n                        %element = VALUE #( CustomerId = if_abap_behv=>mk-on )\n                        %msg     = message ) TO reported-travel.\n        APPEND VALUE #( %tky = travel-%tky ) TO failed-travel.\n      ENDIF.\n    ENDLOOP.\n  ENDMETHOD.\n\n  METHOD validatedates.\n    DATA message TYPE REF TO zcm_travel.\n\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         FIELDS ( BeginDate EndDate )\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Process Travels\n    LOOP AT travels INTO DATA(travel).\n      " Validate Dates and Create Error Message\n      IF travel-EndDate < travel-BeginDate.\n        message = NEW zcm_travel( textid = zcm_travel=>invalid_dates ).\n        APPEND VALUE #( %tky = travel-%tky\n                        %msg = message ) TO reported-travel.\n        APPEND VALUE #( %tky = travel-%tky ) TO failed-travel.\n      ENDIF.\n    ENDLOOP.\n  ENDMETHOD.\n\n  METHOD determinestatus.\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         FIELDS ( Status )\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Modify Travels\n    MODIFY ENTITY IN LOCAL MODE ZR_Travel\n           UPDATE FIELDS ( Status )\n           WITH VALUE #( FOR t IN travels\n                         ( %tky   = t->%tky\n                           Status = \'N\' ) ).\n  ENDMETHOD.\n\n  METHOD determinetravelid.\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         FIELDS ( TravelId )\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Process Travels\n    LOOP AT travels REFERENCE INTO DATA(travel).\n      "Get Max Travel ID\n      SELECT FROM /dmo/travel FIELDS MAX(  travel_id ) INTO @DATA(max_travel_id).\n\n      " Set Travel ID\n      travel->TravelId = max_travel_id + 1.\n    ENDLOOP.\n\n    " Modify Travels\n    MODIFY ENTITY IN LOCAL MODE ZR_Travel\n           UPDATE FIELDS ( TravelId )\n           WITH VALUE #( FOR t IN travels\n                         ( %tky     = t->%tky\n                           TravelId = t->TravelId ) ).\n  ENDMETHOD.\n\n  METHOD canceltravel.\n    DATA message TYPE REF TO zcm_travel.\n\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         ALL FIELDS\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Process Travels\n    LOOP AT travels REFERENCE INTO DATA(travel).\n      " Validate Status and Create Error Message\n      IF travel->Status = \'X\'.\n        message = NEW zcm_travel( textid = zcm_travel=>travel_already_cancelled\n                                  travel = travel->Description ).\n        APPEND VALUE #( %tky     = travel->%tky\n                        %element = VALUE #( Status = if_abap_behv=>mk-on )\n                        %msg     = message ) TO reported-travel.\n        APPEND VALUE #( %tky = travel->%tky ) TO failed-travel.\n        DELETE travels INDEX sy-tabix.\n        CONTINUE.\n      ENDIF.\n\n      " Set Status to Cancelled and Create Success Message\n      travel->Status = \'X\'.\n      message = NEW zcm_travel( severity = if_abap_behv_message=>severity-success\n                                textid   = zcm_travel=>travel_cancelled_successfully\n                                travel   = travel->Description ).\n      APPEND VALUE #( %tky     = travel->%tky\n                      %element = VALUE #( Status = if_abap_behv=>mk-on )\n                      %msg     = message ) TO reported-travel.\n    ENDLOOP.\n\n    " Modify Travels\n    MODIFY ENTITY IN LOCAL MODE ZR_Travel\n           UPDATE FIELDS ( Status )\n           WITH VALUE #( FOR t IN travels\n                         ( %tky = t-%tky Status = t-Status ) ).\n\n    " Set Result\n    result = VALUE #( FOR t IN travels\n                      ( %tky   = t-%tky\n                        %param = t ) ).\n  ENDMETHOD.\n\n//highlight-start\n  METHOD maintainbookingfee.\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         ALL FIELDS\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Process Travels\n    LOOP AT travels REFERENCE INTO DATA(travel).\n      " Set Booking Fee\n      travel->BookingFee   = keys[ sy-tabix ]-%param-BookingFee.\n      travel->CurrencyCode = keys[ sy-tabix ]-%param-CurrencyCode.\n    ENDLOOP.\n\n    " Modify Travels\n    MODIFY ENTITY IN LOCAL MODE ZR_Travel\n           UPDATE FIELDS ( BookingFee CurrencyCode )\n           WITH VALUE #( FOR t IN travels\n                         ( %tky         = t->%tky\n                           BookingFee   = t->BookingFee\n                           CurrencyCode = t->CurrencyCode ) ).\n\n    " Set Result\n    result = VALUE #( FOR t IN travels\n                      ( %tky = t-%tky %param = t ) ).\n  ENDMETHOD.\n//highlight-end\nENDCLASS.\n')),(0,i.kt)("h2",{id:"behavior-projection-zc_travel"},"Behavior Projection ",(0,i.kt)("inlineCode",{parentName:"h2"},"ZC_TRAVEL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"projection;\nstrict ( 2 );\n\ndefine behavior for ZC_Travel alias Travel\n{\n  use create;\n  use update;\n  use delete;\n\n  use association _Bookings { create; }\n\n  use action ShowTestMessage;\n  use action CancelTravel;\n//highlight-start\n  use action MaintainBookingFee;\n//highlight-end\n}\n\ndefine behavior for ZC_Booking alias Booking\n{\n  use update;\n  use delete;\n\n  use association _Travel;\n}\n")),(0,i.kt)("h2",{id:"metadata-extension-zc_travel"},"Metadata Extension ",(0,i.kt)("inlineCode",{parentName:"h2"},"ZC_TRAVEL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"@Metadata.layer: #CUSTOMER\n@UI.headerInfo:\n{\n  typeNamePlural: 'Travels',\n  typeName: 'Travel',\n  title.value: 'TravelId',\n  description.value: 'Description'\n}\n@UI.presentationVariant: [{sortOrder: [{ by: 'BeginDate', direction: #DESC }]}]\nannotate view ZC_Travel with\n{\n\n  /* Facets */\n  @UI.facet:\n  [\n    { position: 10, targetQualifier: 'TravelDetails', label: 'Travel Details', type: #FIELDGROUP_REFERENCE },\n    { position: 20, targetQualifier: 'AdminData', label: 'Administrative Data', type: #FIELDGROUP_REFERENCE },\n    { position: 30, targetElement: '_Bookings', label: 'Bookings', type: #LINEITEM_REFERENCE }\n  ]\n\n  /* Actions */\n  @UI.lineItem:\n  [\n    { position: 10, dataAction: 'ShowTestMessage', label: 'Show Test Message', type: #FOR_ACTION },\n    { position: 20, dataAction: 'CancelTravel', label: 'Cancel Travel', type: #FOR_ACTION }\n  ]\n//highlight-start\n  @UI.identification: [{ position: 10, dataAction: 'MaintainBookingFee', label: 'Maintain Booking Fee', type: #FOR_ACTION }]\n//highlight-end\n\n  /* Fields */\n  @UI.fieldGroup: [{ position: 10, qualifier: 'AdminData' }]\n  TravelUuid;\n\n  @UI.lineItem: [{ position: 10 }]\n  @UI.fieldGroup: [{ position: 10, qualifier: 'TravelDetails' }]\n  TravelId;\n\n  @UI.lineItem: [{ position: 20 }]\n  @UI.selectionField: [{ position: 10 }]\n  @UI.fieldGroup: [{ position: 20, qualifier: 'TravelDetails' }]\n  AgencyId;\n\n  @UI.lineItem: [{ position: 30 }]\n  @UI.selectionField: [{ position: 20 }]\n  @UI.fieldGroup: [{ position: 30, qualifier: 'TravelDetails' }]\n  CustomerId;\n\n  @UI.lineItem: [{ position: 40 }]\n  @UI.selectionField: [{ position: 30 }]\n  @UI.fieldGroup: [{ position: 40, qualifier: 'TravelDetails' }]\n  BeginDate;\n\n  @UI.lineItem: [{ position: 50 }]\n  @UI.selectionField: [{ position: 40 }]\n  @UI.fieldGroup: [{ position: 50, qualifier: 'TravelDetails' }]\n  EndDate;\n\n  @UI.fieldGroup: [{ position: 60, qualifier: 'TravelDetails' }]\n  BookingFee;\n\n  @UI.lineItem: [{ position: 60 }]\n  @UI.selectionField: [{ position: 50 }]\n  @UI.fieldGroup: [{ position: 70, qualifier: 'TravelDetails' }]\n  TotalPrice;\n\n  //  CurrencyCode;\n\n  @UI.lineItem: [{ position: 70, criticality: 'BeginDateCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n  @UI.fieldGroup: [{ position: 80, qualifier: 'TravelDetails' }]\n  Description;\n\n  @UI.lineItem: [{ position: 80, criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n  @UI.selectionField: [{ position: 60 }]\n  @UI.fieldGroup: [{ position: 90, qualifier: 'TravelDetails', criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]\n  Status;\n\n  @UI.fieldGroup: [{ position: 20, qualifier: 'AdminData' }]\n  Createdby;\n\n  @UI.fieldGroup: [{ position: 30, qualifier: 'AdminData' }]\n  Createdat;\n\n  @UI.fieldGroup: [{ position: 40, qualifier: 'AdminData' }]\n  Lastchangedby;\n\n  @UI.fieldGroup: [{ position: 50, qualifier: 'AdminData' }]\n  Lastchangedat;\n\n}\n")))}T.isMDXComponent=!0}}]);