---
title: 13. Validierungen implementieren
description: ""
sidebar_position: 130
---

- Die Message Class `Z_TRAVEL` um Nachrichten zur Validierung erweitern
- Die Nachrichtenklasse `ZCM_TRAVEL` um Nachrichten zur Validierung erweitern
- Die Behavior Definition `ZR_TRAVEL` um statische Feldkontrollen und Validierungen erweitern
- Die Verhaltensimplementierung `ZBP_TRAVEL` um Behandlermethoden zur Validierung erweitern

## Message Class `Z_TRAVEL`

| Nachrichtennummer | Nachricht                            |
| ----------------- | ------------------------------------ |
| 001               | This is a Test Message from &1       |
| 002               | No Agency found for Agency ID &1     |
| 003               | No Customer found for Customer ID &1 |
| 004               | Begin Date must be before End Date   |

## Nachrichtenklasse `ZCM_TRAVEL`

```abap title="ZCM_TRAVEL.abap" showLineNumbers
CLASS zcm_travel DEFINITION PUBLIC
  INHERITING FROM cx_static_check FINAL CREATE PUBLIC.

  PUBLIC SECTION.
    " Interfaces
    INTERFACES if_abap_behv_message.
    INTERFACES if_t100_message.
    INTERFACES if_t100_dyn_msg.

    " Message Constants
    CONSTANTS:
      BEGIN OF test_message,
        msgid TYPE symsgid      VALUE 'Z_TRAVEL',
        msgno TYPE symsgno      VALUE '001',
        attr1 TYPE scx_attrname VALUE 'USER_NAME',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF test_message.

//highlight-start
    CONSTANTS:
      BEGIN OF no_agency_found,
        msgid TYPE symsgid      VALUE 'Z_TRAVEL',
        msgno TYPE symsgno      VALUE '002',
        attr1 TYPE scx_attrname VALUE 'AGENCY_ID',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF no_agency_found.

    CONSTANTS:
      BEGIN OF no_customer_found,
        msgid TYPE symsgid      VALUE 'Z_TRAVEL',
        msgno TYPE symsgno      VALUE '003',
        attr1 TYPE scx_attrname VALUE 'CUSTOMER_ID',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF no_customer_found.

    CONSTANTS:
      BEGIN OF invalid_dates,
        msgid TYPE symsgid      VALUE 'Z_TRAVEL',
        msgno TYPE symsgno      VALUE '004',
        attr1 TYPE scx_attrname VALUE '',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF invalid_dates.
//highlight-end

    " Attributs
    DATA user_name   TYPE syuname.
//highlight-start
    DATA agency_id   TYPE /dmo/agency_id.
    DATA customer_id TYPE /dmo/customer_id.
//highlight-end

    " Constructor
    METHODS constructor
      IMPORTING
        severity     TYPE if_abap_behv_message=>t_severity DEFAULT if_abap_behv_message=>severity-error
        textid       LIKE if_t100_message=>t100key         DEFAULT if_t100_message=>default_textid
        !previous    LIKE previous                         OPTIONAL
        user_name    TYPE syuname                          OPTIONAL
//highlight-start
        agency_id    TYPE /dmo/agency_id                   OPTIONAL
        customer_id  TYPE /dmo/customer_id                 OPTIONAL.
//highlight-end

  PROTECTED SECTION.

  PRIVATE SECTION.

ENDCLASS.

CLASS zcm_travel IMPLEMENTATION.
  METHOD constructor ##ADT_SUPPRESS_GENERATION.
    super->constructor( previous = previous ).

    if_t100_message~t100key = textid.
    if_abap_behv_message~m_severity = severity.
    me->user_name   = user_name.
//highlight-start
    me->agency_id   = agency_id.
    me->customer_id = customer_id.
//highlight-end
  ENDMETHOD.
ENDCLASS.
```

## Behavior Definition `ZR_TRAVEL`

```sql showLineNumbers
managed implementation in class zbp_travel unique;
strict ( 2 );

define behavior for ZR_Travel alias Travel
persistent table z_travel_a
lock master
authorization master ( instance )
//etag master <field_name>
{
  create;
  update;
  delete;

  association _Bookings { create; }

  static action ShowTestMessage;

//highlight-start
  validation ValidateDates on save { create; }
  validation ValidateCustomer on save { create; }
  validation ValidateAgency on save { create; }
//highlight-end

  field ( readonly, numbering : managed ) TravelUuid;
//highlight-start
  field ( mandatory : create ) AgencyId, BeginDate, CustomerId, Description, EndDate;
  field ( readonly : update ) AgencyId, BeginDate, CustomerId, Description, EndDate;
//highlight-end

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
lock dependent by _Travel
authorization dependent by _Travel
//etag master <field_name>
{
  update;
  delete;

  association _Travel;

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

//highlight-start
    METHODS validateagency FOR VALIDATE ON SAVE
      IMPORTING keys FOR travel~validateagency.
//highlight-end

//highlight-start
    METHODS validatecustomer FOR VALIDATE ON SAVE
      IMPORTING keys FOR travel~validatecustomer.
//highlight-end

//highlight-start
    METHODS validatedates FOR VALIDATE ON SAVE
      IMPORTING keys FOR travel~validatedates.
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

//highlight-start
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
//highlight-end

//highlight-start
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
//highlight-end

//highlight-start
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
//highlight-end
ENDCLASS.
```
