---
title: 14. Ermittlungen implementieren
description: ""
sidebar_position: 140
---

- Die Restricted View `ZR_Travel` um Annotationen zur Ermittlung administrativer Daten erweitern
- Die Behavior Definition `ZI_TRAVELTP` um statische Feldkontrollen und Ermittlungen erweitern
- Die Verhaltensimplementierung `ZBP_TRAVELTP` um Behandlermethoden zu Ermittlungen erweitern

## Restricted View `ZR_Travel`

```sql showLineNumbers
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Travel'
define view entity ZR_Travel
  as select from ztravel_a
{
  key travel_uuid        as TravelUuid,
      travel_id          as TravelId,
      agency_id          as AgencyId,
      customer_id        as CustomerId,
      begin_date         as BeginDate,
      end_date           as EndDate,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      booking_fee        as BookingFee,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      total_price        as TotalPrice,
      currency_code      as CurrencyCode,
      description        as Description,
      status             as Status,

      /* Administrative Data */
//highlight-start
      @Semantics.user.createdBy: true
//highlight-end
      created_by         as CreatedBy,
//highlight-start
      @Semantics.systemDateTime.createdAt: true
//highlight-end
      created_at         as CreatedAt,
//highlight-start
      @Semantics.user.lastChangedBy: true
//highlight-end
      last_changed_by    as LastChangedBy,
//highlight-start
      @Semantics.systemDateTime.lastChangedAt: true
//highlight-end
      last_changed_at    as LastChangedAt
}
```

## Behavior Definition `ZI_TRAVELTP`

```sql showLineNumbers
managed implementation in class zbp_traveltp unique;
strict ( 2 );

define behavior for ZI_TravelTP alias Travel
persistent table ztravel_a
lock master
authorization master ( instance )
//etag master <field_name>
{
  create;
  update;
  delete;

  association _Bookings { create; }

  static action ShowTestMessage;

  validation ValidateDates on save { create; }
  validation ValidateCustomer on save { create; }
  validation ValidateAgency on save { create; }

//highlight-start
  determination DetermineStatus on modify { create; }
  determination DetermineTravelId on modify { create; }
//highlight-end

  field ( readonly, numbering : managed ) TravelUuid;
  field ( mandatory : create ) AgencyId, BeginDate, CustomerId, Description, EndDate;
  field ( readonly : update ) AgencyId, BeginDate, CustomerId, Description, EndDate;
//highlight-start
  field ( readonly ) CreatedAt, CreatedBy, LastChangedAt, LastChangedBy, Status, TravelId;
//highlight-end

  mapping for ztravel_a corresponding
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

define behavior for ZI_BookingTP alias Booking
persistent table zbooking_a
lock dependent by _Travel
authorization dependent by _Travel
//etag master <field_name>
{
  update;
  delete;

  association _Travel;

  field ( readonly, numbering : managed ) BookingUuid;
  field ( readonly ) TravelUuid;

  mapping for zbooking_a corresponding
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

## Verhaltensimplementierung `ZBP_TRAVELTP`

### Global Class `ZBP_TRAVELTP`

```abap title="ZBP_TRAVELTP.abap" showLineNumbers
CLASS zbp_traveltp DEFINITION PUBLIC ABSTRACT FINAL FOR BEHAVIOR OF zi_traveltp.
  PROTECTED SECTION.

  PRIVATE SECTION.
ENDCLASS.

CLASS zbp_traveltp IMPLEMENTATION.
ENDCLASS.
```

### Local Type `LHC_TRAVEL`

```abap title="ZBP_TRAVELTP.abap" shwoLineNumbers
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

//highlight-start
    METHODS determinestatus FOR DETERMINE ON MODIFY
      IMPORTING keys FOR travel~determinestatus.

    METHODS determinetravelid FOR DETERMINE ON MODIFY
      IMPORTING keys FOR travel~determinetravelid.
//highlight-end
ENDCLASS.

CLASS lhc_travel IMPLEMENTATION.
  METHOD get_instance_authorizations.
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
    READ ENTITY IN LOCAL MODE ZI_Travel
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
    READ ENTITY IN LOCAL MODE ZI_Travel
         FIELDS ( CustomerId )
         WITH CORRESPONDING #( keys )
         RESULT DATA(travels).

    " Process Travels
    LOOP AT travels INTO DATA(travel).
      " Validate Customer and Create Error Message
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
    READ ENTITY IN LOCAL MODE ZI_Travel
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

//highlight-start
  METHOD determinestatus.
    MODIFY ENTITY IN LOCAL MODE ZI_Travel
           UPDATE FIELDS ( Status )
           WITH VALUE #( FOR key IN keys
                         ( %tky   = key-%tky
                           Status = 'N' ) ).
  ENDMETHOD.
//highlight-end

//highlight-start
  METHOD determinetravelid.
    DATA travel_id TYPE /dmo/travel_id.

    " Get Travel ID
    SELECT FROM /dmo/travel FIELDS MAX( travel_id ) INTO @DATA(max_travel_id).
    travel_id = max_travel_id + 1.

    " Modify Travels
    MODIFY ENTITY IN LOCAL MODE ZI_Travel
           UPDATE FIELDS ( TravelId )
           WITH VALUE #( FOR key IN keys
                         ( %tky     = key-%tky
                           TravelId = travel_id ) ).
  ENDMETHOD.
//highlight-end
ENDCLASS.
```
