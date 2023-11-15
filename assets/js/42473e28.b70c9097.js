"use strict";(self.webpackChunkabap=self.webpackChunkabap||[]).push([[8434],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>T});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},E={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(t),T=r,v=c["".concat(s,".").concat(T)]||c[T]||E[T]||l;return t?a.createElement(v,i(i({ref:n},u),{},{components:t})):a.createElement(v,i({ref:n},u))}));function T(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5333:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>E,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const l={title:"18. Berechtigungspr\xfcfungen implementieren",description:"",sidebar_position:180},i=void 0,o={unversionedId:"rap-cookbook/implement-authority-checks",id:"rap-cookbook/implement-authority-checks",title:"18. Berechtigungspr\xfcfungen implementieren",description:"",source:"@site/docs/rap-cookbook/implement-authority-checks.md",sourceDirName:"rap-cookbook",slug:"/rap-cookbook/implement-authority-checks",permalink:"/s4hana/rap-cookbook/implement-authority-checks",draft:!1,editUrl:"https://github.com/appenmaier/s4hana/tree/main/docs/rap-cookbook/implement-authority-checks.md",tags:[],version:"current",sidebarPosition:180,frontMatter:{title:"18. Berechtigungspr\xfcfungen implementieren",description:"",sidebar_position:180},sidebar:"rapCookbookSidebar",previous:{title:"17. Entwurfs-Funktionen implementieren",permalink:"/s4hana/rap-cookbook/implement-draft-capabilities"}},s={},d=[{value:"Berechtigungsfeld <code>ZAGENCY_ID</code>",id:"berechtigungsfeld-zagency_id",level:2},{value:"Berechtigungsobjekt <code>ZAGENCY</code>",id:"berechtigungsobjekt-zagency",level:2},{value:"Zugriffskontrolle <code>ZC_TRAVEL</code>",id:"zugriffskontrolle-zc_travel",level:2},{value:"Behavior Definition <code>ZR_TRAVEL</code>",id:"behavior-definition-zr_travel",level:2},{value:"Verhaltensimplementierung <code>ZBP_TRAVEL</code>",id:"verhaltensimplementierung-zbp_travel",level:2},{value:"Global Class <code>ZBP_TRAVEL</code>",id:"global-class-zbp_travel",level:3},{value:"Local Type <code>LHC_TRAVEL</code>",id:"local-type-lhc_travel",level:3}],u={toc:d};function E(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Das Berechtigungsfeld ",(0,r.kt)("inlineCode",{parentName:"li"},"ZAGENCY_ID")," erstellen"),(0,r.kt)("li",{parentName:"ul"},"Das Berechtigungsobjekt ",(0,r.kt)("inlineCode",{parentName:"li"},"ZAGENCY")," erstellen"),(0,r.kt)("li",{parentName:"ul"},"Die Access Control ",(0,r.kt)("inlineCode",{parentName:"li"},"ZC_TRAVEL")," erstellen"),(0,r.kt)("li",{parentName:"ul"},"Die Behavior Definition ",(0,r.kt)("inlineCode",{parentName:"li"},"ZR_TRAVEL")," um eine globale Berechtigungspr\xfcfung erweitern"),(0,r.kt)("li",{parentName:"ul"},"Die Verhaltensimplementierung ",(0,r.kt)("inlineCode",{parentName:"li"},"ZCM_TRAVEL")," um eine Behandlermethode zur globalen Berechtigungspr\xfcfung erweitern"),(0,r.kt)("li",{parentName:"ul"},"Die Behandlermethode zur instanzbasierten Berechtigungspr\xfcfung in der Verhaltensimplementierung ",(0,r.kt)("inlineCode",{parentName:"li"},"ZCM_TRAVEL")," implementieren")),(0,r.kt)("admonition",{title:"Hinweis",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Da im SAP BTP Trial Account die Pflege der benutzerspezifischen Berechtigungen nicht m\xf6glich ist, wird neben der produktiven Implementierung auch eine Testimplementierung mit nachfolgenden Berechtigungen erstellt:"),(0,r.kt)("table",{parentName:"admonition"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Agency ID"),(0,r.kt)("th",{parentName:"tr",align:null},"Berechtigung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"070001 - 070030"),(0,r.kt)("td",{parentName:"tr",align:null},"\xc4ndern (02)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"070001 - 070040"),(0,r.kt)("td",{parentName:"tr",align:null},"Anzeigen (03)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"070001 - 070020"),(0,r.kt)("td",{parentName:"tr",align:null},"L\xf6schen (06)"))))),(0,r.kt)("h2",{id:"berechtigungsfeld-zagency_id"},"Berechtigungsfeld ",(0,r.kt)("inlineCode",{parentName:"h2"},"ZAGENCY_ID")),(0,r.kt)("p",null,"Data Element: /DMO/AGENCY_ID"),(0,r.kt)("h2",{id:"berechtigungsobjekt-zagency"},"Berechtigungsobjekt ",(0,r.kt)("inlineCode",{parentName:"h2"},"ZAGENCY")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Authorization Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Activity Field"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ACTVT"),(0,r.kt)("td",{parentName:"tr",align:null},"X")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ZAGENCY_ID"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"zugriffskontrolle-zc_travel"},"Zugriffskontrolle ",(0,r.kt)("inlineCode",{parentName:"h2"},"ZC_TRAVEL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"//highlight-start\n@EndUserText.label: 'Role for ZC_Travel'\n@MappingRole: true\ndefine role ZC_TRAVEL {\n// Productive Implementation\n//  grant select on ZC_Travel\n//    where (AgencyId) = aspect pfcg_auth(ZAGENCY, ZAGENCY_ID, ACTVT = '03');\n\n// Test Implementation\n  grant select on ZC_Travel\n    where AgencyId > '070000' and AgencyId <= '070040';\n}\n//highlight-end\n")),(0,r.kt)("h2",{id:"behavior-definition-zr_travel"},"Behavior Definition ",(0,r.kt)("inlineCode",{parentName:"h2"},"ZR_TRAVEL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"showLineNumbers",showLineNumbers:!0},"managed implementation in class zbp_travel unique;\nstrict ( 2 );\nwith draft;\n\ndefine behavior for ZR_Travel alias Travel\npersistent table z_travel_a\ndraft table z_travel_d\nlock master\ntotal etag LastChangedAt\n//highlight-start\nauthorization master ( global, instance )\n//highlight-end\n//etag master <field_name>\n{\n  create;\n  update;\n  delete;\n\n  association _Bookings { create; with draft; }\n\n  static action ShowTestMessage;\n  action CancelTravel result [1] $self;\n  action MaintainBookingFee parameter ZA_BookingFee result [1] $self;\n\n  draft action Activate;\n  draft action Discard;\n  draft action Edit;\n  draft determine action Prepare\n  {\n    validation ValidateDates;\n    validation ValidateCustomer;\n    validation ValidateAgency;\n  }\n  draft action Resume;\n\n  validation ValidateDates on save { create; }\n  validation ValidateCustomer on save { create; }\n  validation ValidateAgency on save { create; }\n\n  determination DetermineStatus on modify { create; }\n  determination DetermineTravelId on modify { create; }\n\n  field ( readonly, numbering : managed ) TravelUuid;\n  field ( mandatory : create ) AgencyId, BeginDate, CustomerId, Description, EndDate;\n  field ( readonly : update ) AgencyId, BeginDate, CustomerId, Description, EndDate;\n  field ( readonly ) Createdat, Createdby, Lastchangedat, Lastchangedby, Status, TravelId;\n\n  mapping for z_travel_a corresponding\n  {\n    AgencyId = agency_id;\n    BeginDate = begin_date;\n    BookingFee = booking_fee;\n    CreatedAt = created_at;\n    CreatedBy = created_by;\n    CurrencyCode = currency_code;\n    CustomerId = customer_id;\n    Description = description;\n    EndDate = end_date;\n    LastChangedAt = last_changed_at;\n    LastChangedBy = last_changed_by;\n    Status = status;\n    TotalPrice = total_price;\n    TravelId = travel_id;\n    TravelUuid = travel_uuid;\n  }\n}\n\ndefine behavior for ZR_Booking alias Booking\npersistent table z_booking_a\ndraft table z_booking_d\nlock dependent by _Travel\nauthorization dependent by _Travel\n//etag master <field_name>\n{\n  update;\n  delete;\n\n  association _Travel [ with draft; }\n\n  field ( readonly, numbering : managed ) BookingUuid;\n  field ( readonly ) TravelUuid;\n\n  mapping for z_booking_a corresponding\n  {\n    BookingDate = booking_Date;\n    BookingId = booking_id;\n    BookingUuid = booking_uuid;\n    CarrierId = carrier_id;\n    ConnectionId = connection_id;\n    CurrencyCode = currency_code;\n    FlightDate = flight_date;\n    FlightPrice = flight_price;\n    TravelUuid = Travel_uuid;\n  }\n}\n")),(0,r.kt)("h2",{id:"verhaltensimplementierung-zbp_travel"},"Verhaltensimplementierung ",(0,r.kt)("inlineCode",{parentName:"h2"},"ZBP_TRAVEL")),(0,r.kt)("h3",{id:"global-class-zbp_travel"},"Global Class ",(0,r.kt)("inlineCode",{parentName:"h3"},"ZBP_TRAVEL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap",metastring:'title="ZBP_TRAVEL.abap" showLineNumbers',title:'"ZBP_TRAVEL.abap"',showLineNumbers:!0},"CLASS zbp_travel DEFINITION PUBLIC ABSTRACT FINAL FOR BEHAVIOR OF zr_travel.\n  PROTECTED SECTION.\n\n  PRIVATE SECTION.\nENDCLASS.\n\nCLASS zbp_travel IMPLEMENTATION.\nENDCLASS.\n")),(0,r.kt)("h3",{id:"local-type-lhc_travel"},"Local Type ",(0,r.kt)("inlineCode",{parentName:"h3"},"LHC_TRAVEL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-abap",metastring:'title="ZBP_TRAVEL.abap" shwoLineNumbers',title:'"ZBP_TRAVEL.abap"',shwoLineNumbers:!0},'CLASS lhc_travel DEFINITION INHERITING FROM cl_abap_behavior_handler.\n  PRIVATE SECTION.\n    METHODS get_instance_authorizations FOR INSTANCE AUTHORIZATION\n      IMPORTING keys REQUEST requested_authorizations FOR Travel RESULT result.\n\n    METHODS showtestmessage FOR MODIFY\n      IMPORTING keys FOR ACTION travel~showtestmessage.\n\n    METHODS validateagency FOR VALIDATE ON SAVE\n      IMPORTING keys FOR travel~validateagency.\n\n    METHODS validatecustomer FOR VALIDATE ON SAVE\n      IMPORTING keys FOR travel~validatecustomer.\n\n    METHODS validatedates FOR VALIDATE ON SAVE\n      IMPORTING keys FOR travel~validatedates.\n\n    METHODS determinestatus FOR DETERMINE ON MODIFY\n      IMPORTING keys FOR travel~determinestatus.\n\n    METHODS determinetravelid FOR DETERMINE ON MODIFY\n      IMPORTING keys FOR travel~determinetravelid.\n\n    METHODS canceltravel FOR MODIFY\n      IMPORTING keys FOR ACTION travel~canceltravel RESULT result.\n\n    METHODS maintainbookingfee FOR MODIFY\n      IMPORTING keys FOR ACTION travel~maintainbookingfee RESULT result.\n\n//highlight-start\n    METHODS get_global_authorizations FOR GLOBAL AUTHORIZATION\n      IMPORTING REQUEST requested_authorizations FOR travel RESULT result.\n//highlight-end\nENDCLASS.\n\nCLASS lhc_travel IMPLEMENTATION.\n  METHOD get_instance_authorizations.\n//highlight-start\n    " Determine Request-Operation\n    DATA(update_requested) = COND #( WHEN requested_authorizations-%update = if_abap_behv=>mk-on\n                                       OR requested_authorizations-%action-Edit               = if_abap_behv=>mk-on\n                                       OR requested_authorizations-%action-CancelTravel       = if_abap_behv=>mk-on\n                                       OR requested_authorizations-%action-MaintainBookingFee = if_abap_behv=>mk-on\n                                     THEN abap_true ).\n    DATA(delete_requested) = COND #( WHEN requested_authorizations-%delete = if_abap_behv=>mk-on THEN abap_true ).\n\n    IF update_requested IS INITIAL AND delete_requested IS INITIAL.\n      RETURN.\n    ENDIF.\n\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         FIELDS ( AgencyId )\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Check Authorizations\n    LOOP AT travels INTO DATA(travel).\n\n      " Update Operation\n      IF update_requested = abap_true.\n        " Productive Implementation\n*        AUTHORITY-CHECK OBJECT \'ZAGENCY\'\n*                                ID \'ZAGENCY_ID\' FIELD travel-AgencyId\n*                                ID \'ACTVT\' FIELD \'02\'.\n*        IF sy-subrc <> 0.\n*          APPEND VALUE #( %tky                       = travel-%tky\n*                          %update                    = if_abap_behv=>auth-unauthorized\n*                          %action-Edit               = if_abap_behv=>auth-unauthorized\n*                          %action-CancelTravel       = if_abap_behv=>auth-unauthorized\n*                          %action-MaintainBookingFee = if_abap_behv=>auth-unauthorized ) TO result.\n*        ELSE.\n*          APPEND VALUE #( %tky                       = travel-%tky\n*                          %update                    = if_abap_behv=>auth-allowed\n*                          %action-Edit               = if_abap_behv=>auth-allowed\n*                          %action-CancelTravel       = if_abap_behv=>auth-allowed\n*                          %action-MaintainBookingFee = if_abap_behv=>auth-allowed ) TO result.\n*        ENDIF.\n\n        " Test Implementation\n        IF travel-AgencyId <= \'070000\' OR travel-AgencyId > \'070030\'.\n          APPEND VALUE #( %tky                       = travel-%tky\n                          %update                    = if_abap_behv=>auth-unauthorized\n                          %action-Edit               = if_abap_behv=>auth-unauthorized\n                          %action-CancelTravel       = if_abap_behv=>auth-unauthorized\n                          %action-MaintainBookingFee = if_abap_behv=>auth-unauthorized ) TO result.\n        ELSE.\n          APPEND VALUE #( %tky                       = travel-%tky\n                          %update                    = if_abap_behv=>auth-allowed\n                          %action-Edit               = if_abap_behv=>auth-allowed\n                          %action-CancelTravel       = if_abap_behv=>auth-allowed\n                          %action-MaintainBookingFee = if_abap_behv=>auth-allowed ) TO result.\n        ENDIF.\n      ENDIF.\n\n      " Delete Operation\n      IF delete_requested = abap_true.\n        " Productive Implementation\n*        AUTHORITY-CHECK OBJECT \'ZAGENCY\'\n*                        ID \'ZAGENCY_ID\' FIELD travel-AgencyId\n*                        ID \'ACTVT\' FIELD \'06\'.\n*        IF sy-subrc <> 0.\n*          APPEND VALUE #( %tky    = travel-%tky\n*                          %delete = if_abap_behv=>auth-unauthorized ) TO result.\n*        ELSE.\n*          APPEND VALUE #( %tky    = travel-%tky\n*                          %delete = if_abap_behv=>auth-allowed ) TO result.\n*        ENDIF.\n\n        " Test Implementation\n        IF travel-AgencyId <= \'070000\' OR travel-AgencyId > \'070020\'.\n          APPEND VALUE #( %tky    = travel-%tky\n                          %delete = if_abap_behv=>auth-unauthorized ) TO result.\n        ELSE.\n          APPEND VALUE #( %tky    = travel-%tky\n                          %delete = if_abap_behv=>auth-allowed ) TO result.\n        ENDIF.\n      ENDIF.\n\n    ENDLOOP.\n//highlight-end\n  ENDMETHOD.\n\n  METHOD showtestmessage.\n    DATA message TYPE REF TO zcm_travel.\n\n    message = NEW zcm_travel( severity  = if_abap_behv_message=>severity-success\n                              textid    = zcm_travel=>test_message\n                              user_name = sy-uname ).\n\n    APPEND message TO reported-%other.\n  ENDMETHOD.\n\n  METHOD validateagency.\n    DATA message TYPE REF TO zcm_travel.\n\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         FIELDS ( AgencyId )\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Process Travels\n    LOOP AT travels INTO DATA(travel).\n\n      " Validate Agency and Create Error Message\n      SELECT SINGLE FROM /dmo/agency FIELDS @abap_true WHERE agency_id = @travel-AgencyId INTO @DATA(exists).\n      IF exists = abap_false.\n        message = NEW zcm_travel( textid    = zcm_travel=>no_agency_found\n                                  agency_id = travel-AgencyId ).\n        APPEND VALUE #( %tky     = travel-%tky\n                        %element = VALUE #( AgencyId = if_abap_behv=>mk-on )\n                        %msg     = message ) TO reported-travel.\n        APPEND VALUE #( %tky = travel-%tky ) TO failed-travel.\n        CONTINUE.\n      ENDIF.\n    ENDLOOP.\n  ENDMETHOD.\n\n  METHOD validatecustomer.\n    DATA message TYPE REF TO zcm_travel.\n\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         FIELDS ( CustomerId )\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Process Travels\n    LOOP AT travels INTO DATA(travel).\n\n      " Validate Agency and Create Error Message\n      SELECT SINGLE FROM /dmo/customer FIELDS @abap_true WHERE customer_id = @travel-CustomerId INTO @DATA(exists).\n      IF exists = abap_false.\n        message = NEW zcm_travel( textid      = zcm_travel=>no_customer_found\n                                  customer_id = travel-CustomerId ).\n        APPEND VALUE #( %tky     = travel-%tky\n                        %element = VALUE #( CustomerId = if_abap_behv=>mk-on )\n                        %msg     = message ) TO reported-travel.\n        APPEND VALUE #( %tky = travel-%tky ) TO failed-travel.\n        CONTINUE.\n      ENDIF.\n    ENDLOOP.\n  ENDMETHOD.\n\n  METHOD validatedates.\n    DATA message TYPE REF TO zcm_travel.\n\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         FIELDS ( BeginDate EndDate )\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Process Travels\n    LOOP AT travels INTO DATA(travel).\n\n      " Validate Dates and Create Error Message\n      IF travel-EndDate < travel-BeginDate.\n        message = NEW zcm_travel( textid = zcm_travel=>invalid_dates ).\n        APPEND VALUE #( %tky = travel-%tky\n                        %msg = message ) TO reported-travel.\n        APPEND VALUE #( %tky = travel-%tky ) TO failed-travel.\n        CONTINUE.\n      ENDIF.\n    ENDLOOP.\n  ENDMETHOD.\n\n  METHOD determinestatus.\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         FIELDS ( Status )\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Process Travels\n    LOOP AT travels REFERENCE INTO DATA(travel).\n\n      " Set Status\n      travel->Status = \'N\'.\n\n    ENDLOOP.\n\n    " Modify Travels\n    MODIFY ENTITY IN LOCAL MODE ZR_Travel\n           UPDATE FIELDS ( Status )\n           WITH VALUE #( FOR t IN travels\n                         ( %tky   = travel->%tky\n                           Status = travel->Status ) ).\n  ENDMETHOD.\n\n  METHOD determinetravelid.\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         FIELDS ( TravelId )\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Process Travels\n    LOOP AT travels REFERENCE INTO DATA(travel).\n\n      " Set Travel ID\n      SELECT FROM /dmo/travel FIELDS MAX(  travel_id ) INTO @DATA(max_travel_id).\n      travel->TravelId = max_travel_id + 1.\n\n    ENDLOOP.\n\n    " Modify Travels\n    MODIFY ENTITY IN LOCAL MODE ZR_Travel\n           UPDATE FIELDS ( TravelId )\n           WITH VALUE #( FOR t IN travels\n                         ( %tky     = travel->%tky\n                           TravelId = travel->TravelId ) ).\n  ENDMETHOD.\n\n  METHOD canceltravel.\n    DATA message TYPE REF TO zcm_travel.\n\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         ALL FIELDS\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Process Travels\n    LOOP AT travels REFERENCE INTO DATA(travel).\n\n      " Validate Status and Create Error Message\n      IF travel->Status = \'X\'.\n        message = NEW zcm_travel( textid = zcm_travel=>travel_already_cancelled\n                                  travel = travel->Description ).\n        APPEND VALUE #( %tky     = travel->%tky\n                        %element = VALUE #( Status = if_abap_behv=>mk-on )\n                        %msg     = message ) TO reported-travel.\n        APPEND VALUE #( %tky = travel->%tky ) TO failed-travel.\n        CONTINUE.\n      ENDIF.\n\n      " Set Status to Cancelled and Create Success Message\n      travel->Status = \'X\'.\n      message = NEW zcm_travel( severity = if_abap_behv_message=>severity-success\n                                textid   = zcm_travel=>travel_cancelled_successfully\n                                travel   = travel->Description ).\n      APPEND VALUE #( %tky     = travel->%tky\n                      %element = VALUE #( Status = if_abap_behv=>mk-on )\n                      %msg     = message ) TO reported-travel.\n    ENDLOOP.\n\n    " Modify Travels\n    MODIFY ENTITY IN LOCAL MODE ZR_Travel\n           UPDATE FIELDS ( Status )\n           WITH VALUE #( FOR t IN travels\n                         ( %tky = t-%tky Status = t-Status ) ).\n\n    " Set Result\n    result = VALUE #( FOR t IN travels\n                      ( %tky   = t-%tky\n                        %param = t ) ).\n  ENDMETHOD.\n\n  METHOD maintainbookingfee.\n    " Read Travels\n    READ ENTITY IN LOCAL MODE ZR_Travel\n         ALL FIELDS\n         WITH CORRESPONDING #( keys )\n         RESULT DATA(travels).\n\n    " Process Travels\n    LOOP AT travels REFERENCE INTO DATA(travel).\n\n      " Set Booking Fee\n      travel->BookingFee   = keys[ sy-tabix ]-%param-BookingFee.\n      travel->CurrencyCode = keys[ sy-tabix ]-%param-CurrencyCode.\n\n    ENDLOOP.\n\n    " Modify Travels\n    MODIFY ENTITY IN LOCAL MODE ZR_Travel\n           UPDATE FIELDS ( BookingFee CurrencyCode )\n           WITH VALUE #( FOR t IN travels\n                         ( %tky         = travel->%tky\n                           BookingFee   = travel->BookingFee\n                           CurrencyCode = travel->CurrencyCode ) ).\n\n    " Set Result\n    result = VALUE #( FOR t IN travels\n                      ( %tky = t-%tky %param = t ) ).\n  ENDMETHOD.\n\n//highlight-start\n  METHOD get_global_authorizations.\n    IF requested_authorizations-%create <> if_abap_behv=>mk-on.\n      RETURN.\n    ENDIF.\n\n    " Productive Implementation\n*      AUTHORITY-CHECK OBJECT \'ZAGENCY\'\n*                      ID \'ZAGENCY_ID\' DUMMY\n*                      ID \'ACTVT\' FIELD \'01\'.\n*      IF sy-subrc <> 0.\n*        result-%create = if_abap_behv=>auth-unauthorized.\n*      ELSE.\n*        result-%create = if_abap_behv=>auth-allowed.\n*      ENDIF.\n\n    " Test Implementation\n    result-%create = if_abap_behv=>auth-allowed.\n  ENDMETHOD.\n//highlight-end\nENDCLASS.\n')))}E.isMDXComponent=!0}}]);