---
title: 18. Berechtigungsprüfungen implementieren
description: ""
sidebar_position: 180
---

- Das Berechtigungsfeld `ZAGENCY_ID` erstellen
- Das Berechtigungsobjekt `ZAGENCY` erstellen
- Die Access Control `ZC_TRAVEL` erstellen
- Die Behavior Definition `ZR_TRAVEL` um eine globale Berechtigungsprüfung erweitern
- Die Verhaltensimplementierung `ZCM_TRAVEL` um eine Behandlermethode zur globalen Berechtigungsprüfung erweitern
- Die Behandlermethode zur instanzbasierten Berechtigungsprüfung in der Verhaltensimplementierung `ZCM_TRAVEL` implementieren

:::tip Hinweis

Da im SAP BTP Trial Account die Pflege der benutzerspezifischen Berechtigungen nicht möglich ist, wird neben der produktiven Implementierung auch eine Testimplementierung mit nachfolgenden Berechtigungen erstellt:

| Agency ID       | Berechtigung  |
| --------------- | ------------- |
| 070001 - 070030 | Ändern (02)   |
| 070001 - 070040 | Anzeigen (03) |
| 070001 - 070020 | Löschen (06)  |

:::

## Berechtigungsfeld `ZAGENCY_ID`

Data Element: /DMO/AGENCY_ID

## Berechtigungsobjekt `ZAGENCY`

| Authorization Field | Activity Field |
| ------------------- | -------------- |
| ACTVT               | X              |
| ZAGENCY_ID          |                |

## Zugriffskontrolle `ZC_TRAVEL`

```sql showLineNumbers
//highlight-start
@EndUserText.label: 'Role for ZC_Travel'
@MappingRole: true
define role ZC_TRAVEL {
// Productive Implementation
//  grant select on ZC_Travel
//    where (AgencyId) = aspect pfcg_auth(ZAGENCY, ZAGENCY_ID, ACTVT = '03');

// Test Implementation
  grant select on ZC_Travel
    where AgencyId > '070000' and AgencyId <= '070040';
}
//highlight-end
```

## Behavior Definition `ZR_TRAVEL`

```sql showLineNumbers
managed implementation in class zbp_travel unique;
strict ( 2 );
with draft;

define behavior for ZR_Travel alias Travel
persistent table z_travel_a
draft table z_travel_d
lock master
total etag LastChangedAt
//highlight-start
authorization master ( global, instance )
//highlight-end
//etag master <field_name>
{
  create;
  update;
  delete;

  association _Bookings { create; with draft; }

  static action ShowTestMessage;
  action CancelTravel result [1] $self;
  action MaintainBookingFee parameter ZA_BookingFee result [1] $self;

  draft action Activate optimized;
  draft action Discard;
  draft action Edit;
  draft determine action Prepare
  {
    validation ValidateDates;
    validation ValidateCustomer;
    validation ValidateAgency;
  }
  draft action Resume;

  validation ValidateDates on save { create; }
  validation ValidateCustomer on save { create; }
  validation ValidateAgency on save { create; }

  determination DetermineStatus on modify { create; }
  determination DetermineTravelId on modify { create; }

  field ( readonly, numbering : managed ) TravelUuid;
  field ( mandatory : create ) AgencyId, BeginDate, CustomerId, Description, EndDate;
  field ( readonly : update ) AgencyId, BeginDate, CustomerId, Description, EndDate;
  field ( readonly ) CreatedAt, CreatedBy, LastChangedAt, LastChangedBy, Status, TravelId;

  mapping for z_travel_a corresponding
  {
    AgencyId = agency_id;
    BeginDate = begin_date;
    BookingFee = booking_fee;
    CreatedAt = created_at;
    CreatedBy = created_by;
    CurrencyCode = currency_code;
    CustomerId = customer_id;
    Description = description;
    EndDate = end_date;
    LastChangedAt = last_changed_at;
    LastChangedBy = last_changed_by;
    Status = status;
    TotalPrice = total_price;
    TravelId = travel_id;
    TravelUuid = travel_uuid;
  }
}

define behavior for ZR_Booking alias Booking
persistent table z_booking_a
draft table z_booking_d
lock dependent by _Travel
authorization dependent by _Travel
//etag master <field_name>
{
  update;
  delete;

  association _Travel [ with draft; }

  field ( readonly, numbering : managed ) BookingUuid;
  field ( readonly ) TravelUuid;

  mapping for z_booking_a corresponding
  {
    BookingDate = booking_Date;
    BookingId = booking_id;
    BookingUuid = booking_uuid;
    CarrierId = carrier_id;
    ConnectionId = connection_id;
    CurrencyCode = currency_code;
    FlightDate = flight_date;
    FlightPrice = flight_price;
    TravelUuid = Travel_uuid;
  }
}
```

## Verhaltensimplementierung `ZBP_TRAVEL`

### Global Class `ZBP_TRAVEL`

```abap title="ZBP_TRAVEL.abap" showLineNumbers
CLASS zbp_travel DEFINITION PUBLIC ABSTRACT FINAL FOR BEHAVIOR OF zr_travel.
  PROTECTED SECTION.

  PRIVATE SECTION.
ENDCLASS.

CLASS zbp_travel IMPLEMENTATION.
ENDCLASS.
```

### Local Type `LHC_TRAVEL`

```abap title="ZBP_TRAVEL.abap" shwoLineNumbers
CLASS lhc_travel DEFINITION INHERITING FROM cl_abap_behavior_handler.
  PRIVATE SECTION.
    METHODS get_instance_authorizations FOR INSTANCE AUTHORIZATION
      IMPORTING keys REQUEST requested_authorizations FOR Travel RESULT result.

    METHODS showtestmessage FOR MODIFY
      IMPORTING keys FOR ACTION travel~showtestmessage.

    METHODS validateagency FOR VALIDATE ON SAVE
      IMPORTING keys FOR travel~validateagency.

    METHODS validatecustomer FOR VALIDATE ON SAVE
      IMPORTING keys FOR travel~validatecustomer.

    METHODS validatedates FOR VALIDATE ON SAVE
      IMPORTING keys FOR travel~validatedates.

    METHODS determinestatus FOR DETERMINE ON MODIFY
      IMPORTING keys FOR travel~determinestatus.

    METHODS determinetravelid FOR DETERMINE ON MODIFY
      IMPORTING keys FOR travel~determinetravelid.

    METHODS canceltravel FOR MODIFY
      IMPORTING keys FOR ACTION travel~canceltravel RESULT result.

    METHODS maintainbookingfee FOR MODIFY
      IMPORTING keys FOR ACTION travel~maintainbookingfee RESULT result.

//highlight-start
    METHODS get_global_authorizations FOR GLOBAL AUTHORIZATION
      IMPORTING REQUEST requested_authorizations FOR travel RESULT result.
//highlight-end
ENDCLASS.

CLASS lhc_travel IMPLEMENTATION.
  METHOD get_instance_authorizations.
//highlight-start
    " Determine Request-Operation
    DATA(update_requested) = COND #( WHEN requested_authorizations-%update = if_abap_behv=>mk-on
                                       OR requested_authorizations-%action-Edit               = if_abap_behv=>mk-on
                                       OR requested_authorizations-%action-CancelTravel       = if_abap_behv=>mk-on
                                       OR requested_authorizations-%action-MaintainBookingFee = if_abap_behv=>mk-on
                                     THEN abap_true ).
    DATA(delete_requested) = COND #( WHEN requested_authorizations-%delete = if_abap_behv=>mk-on THEN abap_true ).

    IF update_requested IS INITIAL AND delete_requested IS INITIAL.
      RETURN.
    ENDIF.

    " Read Travels
    READ ENTITY IN LOCAL MODE ZR_Travel
         FIELDS ( AgencyId )
         WITH CORRESPONDING #( keys )
         RESULT DATA(travels).

    " Check Authorizations
    LOOP AT travels INTO DATA(travel).
      " Update Operation
      IF update_requested = abap_true.
        " Productive Implementation
*        AUTHORITY-CHECK OBJECT 'ZAGENCY'
*                                ID 'ZAGENCY_ID' FIELD travel-AgencyId
*                                ID 'ACTVT' FIELD '02'.
*        IF sy-subrc <> 0.
*          APPEND VALUE #( %tky                       = travel-%tky
*                          %update                    = if_abap_behv=>auth-unauthorized
*                          %action-Edit               = if_abap_behv=>auth-unauthorized
*                          %action-CancelTravel       = if_abap_behv=>auth-unauthorized
*                          %action-MaintainBookingFee = if_abap_behv=>auth-unauthorized ) TO result.
*        ELSE.
*          APPEND VALUE #( %tky                       = travel-%tky
*                          %update                    = if_abap_behv=>auth-allowed
*                          %action-Edit               = if_abap_behv=>auth-allowed
*                          %action-CancelTravel       = if_abap_behv=>auth-allowed
*                          %action-MaintainBookingFee = if_abap_behv=>auth-allowed ) TO result.
*        ENDIF.

        " Test Implementation
        IF travel-AgencyId <= '070000' OR travel-AgencyId > '070030'.
          APPEND VALUE #( %tky                       = travel-%tky
                          %update                    = if_abap_behv=>auth-unauthorized
                          %action-Edit               = if_abap_behv=>auth-unauthorized
                          %action-CancelTravel       = if_abap_behv=>auth-unauthorized
                          %action-MaintainBookingFee = if_abap_behv=>auth-unauthorized ) TO result.
        ELSE.
          APPEND VALUE #( %tky                       = travel-%tky
                          %update                    = if_abap_behv=>auth-allowed
                          %action-Edit               = if_abap_behv=>auth-allowed
                          %action-CancelTravel       = if_abap_behv=>auth-allowed
                          %action-MaintainBookingFee = if_abap_behv=>auth-allowed ) TO result.
        ENDIF.
      ENDIF.

      " Delete Operation
      IF delete_requested = abap_true.
        " Productive Implementation
*        AUTHORITY-CHECK OBJECT 'ZAGENCY'
*                        ID 'ZAGENCY_ID' FIELD travel-AgencyId
*                        ID 'ACTVT' FIELD '06'.
*        IF sy-subrc <> 0.
*          APPEND VALUE #( %tky    = travel-%tky
*                          %delete = if_abap_behv=>auth-unauthorized ) TO result.
*        ELSE.
*          APPEND VALUE #( %tky    = travel-%tky
*                          %delete = if_abap_behv=>auth-allowed ) TO result.
*        ENDIF.

        " Test Implementation
        IF travel-AgencyId <= '070000' OR travel-AgencyId > '070020'.
          APPEND VALUE #( %tky    = travel-%tky
                          %delete = if_abap_behv=>auth-unauthorized ) TO result.
        ELSE.
          APPEND VALUE #( %tky    = travel-%tky
                          %delete = if_abap_behv=>auth-allowed ) TO result.
        ENDIF.
      ENDIF.
    ENDLOOP.
//highlight-end
  ENDMETHOD.

  METHOD showtestmessage.
    DATA message TYPE REF TO zcm_travel.

    message = NEW zcm_travel( severity  = if_abap_behv_message=>severity-success
                              textid    = zcm_travel=>test_message
                              user_name = sy-uname ).

    APPEND message TO reported-%other.
  ENDMETHOD.

  METHOD validateagency.
    DATA message TYPE REF TO zcm_travel.

    " Read Travels
    READ ENTITY IN LOCAL MODE ZR_Travel
         FIELDS ( AgencyId )
         WITH CORRESPONDING #( keys )
         RESULT DATA(travels).

    " Process Travels
    LOOP AT travels INTO DATA(travel).
      " Validate Agency and Create Error Message
      SELECT SINGLE FROM /dmo/agency FIELDS @abap_true WHERE agency_id = @travel-AgencyId INTO @DATA(exists).
      IF exists = abap_false.
        message = NEW zcm_travel( textid    = zcm_travel=>no_agency_found
                                  agency_id = travel-AgencyId ).
        APPEND VALUE #( %tky     = travel-%tky
                        %element = VALUE #( AgencyId = if_abap_behv=>mk-on )
                        %msg     = message ) TO reported-travel.
        APPEND VALUE #( %tky = travel-%tky ) TO failed-travel.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

  METHOD validatecustomer.
    DATA message TYPE REF TO zcm_travel.

    " Read Travels
    READ ENTITY IN LOCAL MODE ZR_Travel
         FIELDS ( CustomerId )
         WITH CORRESPONDING #( keys )
         RESULT DATA(travels).

    " Process Travels
    LOOP AT travels INTO DATA(travel).
      " Validate Agency and Create Error Message
      SELECT SINGLE FROM /dmo/customer FIELDS @abap_true WHERE customer_id = @travel-CustomerId INTO @DATA(exists).
      IF exists = abap_false.
        message = NEW zcm_travel( textid      = zcm_travel=>no_customer_found
                                  customer_id = travel-CustomerId ).
        APPEND VALUE #( %tky     = travel-%tky
                        %element = VALUE #( CustomerId = if_abap_behv=>mk-on )
                        %msg     = message ) TO reported-travel.
        APPEND VALUE #( %tky = travel-%tky ) TO failed-travel.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

  METHOD validatedates.
    DATA message TYPE REF TO zcm_travel.

    " Read Travels
    READ ENTITY IN LOCAL MODE ZR_Travel
         FIELDS ( BeginDate EndDate )
         WITH CORRESPONDING #( keys )
         RESULT DATA(travels).

    " Process Travels
    LOOP AT travels INTO DATA(travel).
      " Validate Dates and Create Error Message
      IF travel-EndDate < travel-BeginDate.
        message = NEW zcm_travel( textid = zcm_travel=>invalid_dates ).
        APPEND VALUE #( %tky = travel-%tky
                        %msg = message ) TO reported-travel.
        APPEND VALUE #( %tky = travel-%tky ) TO failed-travel.
      ENDIF.
    ENDLOOP.
  ENDMETHOD.

  METHOD determinestatus.
    MODIFY ENTITY IN LOCAL MODE ZR_Travel
           UPDATE FIELDS ( Status )
           WITH VALUE #( FOR key IN keys
                         ( %tky   = key-%tky
                           Status = 'N' ) ).
  ENDMETHOD.

  METHOD determinetravelid.
    DATA travel_id TYPE /dmo/travel_id.

    " Get Travel ID
    SELECT FROM /dmo/travel FIELDS MAX( travel_id ) INTO @DATA(max_travel_id).
    travel_id = max_travel_id + 1.

    " Modify Travels
    MODIFY ENTITY IN LOCAL MODE ZR_Travel
           UPDATE FIELDS ( TravelId )
           WITH VALUE #( FOR key IN keys
                         ( %tky     = key-%tky
                           TravelId = travel_id ) ).
  ENDMETHOD.

  METHOD canceltravel.
    DATA message TYPE REF TO zcm_travel.

    " Read Travels
    READ ENTITY IN LOCAL MODE ZR_Travel
         ALL FIELDS
         WITH CORRESPONDING #( keys )
         RESULT DATA(travels).

    " Process Travels
    LOOP AT travels REFERENCE INTO DATA(travel).
      " Validate Status and Create Error Message
      IF travel->Status = 'X'.
        message = NEW zcm_travel( textid      = zcm_travel=>travel_already_cancelled
                                  description = travel->Description ).
        APPEND VALUE #( %tky     = travel->%tky
                        %element = VALUE #( Status = if_abap_behv=>mk-on )
                        %msg     = message ) TO reported-travel.
        APPEND VALUE #( %tky = travel->%tky ) TO failed-travel.
        DELETE travels INDEX sy-tabix.
        CONTINUE.
      ENDIF.

      " Set Status to Cancelled and Create Success Message
      travel->Status = 'X'.
      message = NEW zcm_travel( severity    = if_abap_behv_message=>severity-success
                                textid      = zcm_travel=>travel_cancelled_successfully
                                description = travel->Description ).
      APPEND VALUE #( %tky     = travel->%tky
                      %element = VALUE #( Status = if_abap_behv=>mk-on )
                      %msg     = message ) TO reported-travel.
    ENDLOOP.

    " Modify Travels
    MODIFY ENTITY IN LOCAL MODE ZR_Travel
           UPDATE FIELDS ( Status )
           WITH VALUE #( FOR t IN travels
                         ( %tky = t-%tky Status = t-Status ) ).

    " Set Result
    result = VALUE #( FOR t IN travels
                      ( %tky   = t-%tky
                        %param = t ) ).
  ENDMETHOD.

  METHOD maintainbookingfee.
    " Modify Travels
    MODIFY ENTITY IN LOCAL MODE ZR_Travel
           UPDATE FIELDS ( BookingFee CurrencyCode )
           WITH VALUE #( FOR key IN keys
                         ( %tky         = key-%tky
                           BookingFee   = key-%param-BookingFee
                           CurrencyCode = key-%param-CurrencyCode ) ).

    " Read Travels
    READ ENTITY IN LOCAL MODE ZR_Travel
         ALL FIELDS
         WITH CORRESPONDING #( keys )
         RESULT DATA(travels).

    " Set Result
    result = VALUE #( FOR t IN travels
                      ( %tky = t-%tky %param = t ) ).
  ENDMETHOD.

//highlight-start
  METHOD get_global_authorizations.
    IF requested_authorizations-%create <> if_abap_behv=>mk-on.
      RETURN.
    ENDIF.

    " Productive Implementation
*      AUTHORITY-CHECK OBJECT 'ZAGENCY'
*                      ID 'ZAGENCY_ID' DUMMY
*                      ID 'ACTVT' FIELD '01'.
*      IF sy-subrc <> 0.
*        result-%create = if_abap_behv=>auth-unauthorized.
*      ELSE.
*        result-%create = if_abap_behv=>auth-allowed.
*      ENDIF.

    " Test Implementation
    result-%create = if_abap_behv=>auth-allowed.
  ENDMETHOD.
//highlight-end
ENDCLASS.
```
