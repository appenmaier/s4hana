---
title: 4. BO erweitern
description: ""
sidebar_position: 40
---

- Die Anwendungstabelle `Z_BOOKING_A` erstellen
- Die ABAP-Klasse `ZCL_TRAVEL_GENERATOR` um Buchungen erweitern
- Die BO Base View `ZR_Booking` inklusive einer Assoziation zur BO Base View `ZR_Travel` erstellen
- Die BO Base View `ZR_Travel` um eine Assoziation zur BO Base View `ZR_Booking` erweitern

## Anwendungstabelle `Z_BOOKING_A`

```sql showLineNumbers
//highlight-start
@EndUserText.label : 'Booking'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table z_booking_a {
  key client       : abap.clnt not null;
  key booking_uuid : sysuuid_x16 not null;
  travel_uuid      : sysuuid_x16 not null;
  booking_id       : /dmo/booking_id;
  booking_date     : /dmo/booking_date;
  carrier_id       : /dmo/carrier_id;
  connection_id    : /dmo/connection_id;
  flight_date      : /dmo/flight_date;
  @Semantics.amount.currencyCode : 'z_booking_a.currency_code'
  flight_price     : /dmo/flight_price;
  currency_code    : /dmo/currency_code;
//highlight-end
}
```

## ABAP-Klasse `ZCL_TRAVEL_GENERATOR`

```abap title="ZCL_TRAVEL_GENERATOR.abap" showLineNumbers
CLASS zcl_travel_generator DEFINITION PUBLIC FINAL CREATE PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_oo_adt_classrun.
ENDCLASS.

CLASS zcl_travel_generator IMPLEMENTATION.
  METHOD if_oo_adt_classrun~main.
    DATA travel   TYPE z_travel_a.
    DATA travels  TYPE TABLE OF z_travel_a.
//highlight-start
    DATA booking  TYPE z_booking_a.
    DATA bookings TYPE TABLE OF z_booking_a.
//highlight-end

    " Delete Travels
    DELETE FROM z_travel_a.
    out->write( |Deleted Travels: { sy-dbcnt }| ).

//highlight-start
    " Delete Bookings
    DELETE FROM z_booking_a.
    out->write( |Deleted Bookings: { sy-dbcnt }| ).
//highlight-end

    " Create Travel
    travel-agency_id       = '000001'.
    travel-begin_date      = '20231027'.
    travel-booking_fee     = '40.95'.
    travel-client          = sy-mandt.
    travel-created_by      = 'GENERATOR'.
    travel-currency_code   = 'EUR'.
    travel-customer_id     = '000004'.
    travel-description     = 'Kurztrip nach Hamburg'.
    travel-end_date        = '20231030'.
    travel-last_changed_by = 'GENERATOR'.
    travel-status          = 'B'.
    travel-total_price     = '650.50'.
    travel-travel_id       = '00000001'.
    travel-travel_uuid     = cl_system_uuid=>create_uuid_x16_static( ).
    GET TIME STAMP FIELD travel-created_at.
    GET TIME STAMP FIELD travel-last_changed_at.
    APPEND travel TO travels.

//highlight-start
    " Create Booking
    booking-booking_date  = '20230807'.
    booking-booking_id    = '3861'.
    booking-booking_uuid  = cl_system_uuid=>create_uuid_x16_static( ).
    booking-carrier_id    = 'LH'.
    booking-client        = sy-mandt.
    booking-connection_id = '0300'.
    booking-currency_code = 'EUR'.
    booking-flight_date   = travel-begin_date.
    booking-flight_price  = '304.00'.
    booking-travel_uuid   = travel-travel_uuid.
    APPEND booking TO bookings.

    " Create Booking
    booking-booking_date  = '20230807'.
    booking-booking_id    = '2947'.
    booking-booking_uuid  = cl_system_uuid=>create_uuid_x16_static( ).
    booking-carrier_id    = 'LH'.
    booking-client        = sy-mandt.
    booking-connection_id = '0350'.
    booking-currency_code = 'EUR'.
    booking-flight_date   = travel-end_date.
    booking-flight_price  = '305.55'.
    booking-travel_uuid   = travel-travel_uuid.
    APPEND booking TO bookings.
//highlight-end

    " Create Travel
    travel-agency_id       = '000023'.
    travel-begin_date      = '20240707'.
    travel-booking_fee     = '150.00'.
    travel-client          = sy-mandt.
    travel-created_by      = 'GENERATOR'.
    travel-currency_code   = 'EUR'.
    travel-customer_id     = '000066'.
    travel-description     = 'Italienurlaub 2024'.
    travel-end_date        = '20240723'.
    travel-last_changed_by = 'GENERATOR'.
    travel-status          = 'P'.
    travel-total_price     = '2188.00'.
    travel-travel_id       = '00000002'.
    travel-travel_uuid     = cl_system_uuid=>create_uuid_x16_static( ).
    GET TIME STAMP FIELD travel-created_at.
    GET TIME STAMP FIELD travel-last_changed_at.
    APPEND travel TO travels.

    " Create Travel
    travel-agency_id       = '000045'.
    travel-begin_date      = '20221231'.
    travel-booking_fee     = '77.99'.
    travel-client          = sy-mandt.
    travel-created_by      = 'GENERATOR'.
    travel-currency_code   = 'USD'.
    travel-customer_id     = '000026'.
    travel-description     = 'Silvester New York'.
    travel-end_date        = '20230104'.
    travel-last_changed_by = 'GENERATOR'.
    travel-status          = 'B'.
    travel-total_price     = '389.00'.
    travel-travel_id       = '00000003'.
    travel-travel_uuid     = cl_system_uuid=>create_uuid_x16_static( ).
    GET TIME STAMP FIELD travel-created_at.
    GET TIME STAMP FIELD travel-last_changed_at.
    APPEND travel TO travels.

//highlight-start
    " Create Booking
    booking-booking_date  = '20221204'.
    booking-booking_id    = '0021'.
    booking-booking_uuid  = cl_system_uuid=>create_uuid_x16_static( ).
    booking-carrier_id    = 'LH'.
    booking-client        = sy-mandt.
    booking-connection_id = '0400'.
    booking-currency_code = 'USD'.
    booking-flight_date   = travel-begin_date.
    booking-flight_price  = '150.46'.
    booking-travel_uuid   = travel-travel_uuid.
    APPEND booking TO bookings.

    " Create Booking
    booking-booking_date  = '20221204'.
    booking-booking_id    = '0095'.
    booking-booking_uuid  = cl_system_uuid=>create_uuid_x16_static( ).
    booking-carrier_id    = 'LH'.
    booking-client        = sy-mandt.
    booking-connection_id = '0401'.
    booking-currency_code = 'USD'.
    booking-flight_date   = travel-end_date.
    booking-flight_price  = '160.55'.
    booking-travel_uuid   = travel-travel_uuid.
    APPEND booking TO bookings.
//highlight-end

    " Create Travel
    travel-agency_id       = '000045'.
    travel-begin_date      = '20231101'.
    travel-booking_fee     = '0.00'.
    travel-client          = sy-mandt.
    travel-created_by      = 'GENERATOR'.
    travel-currency_code   = 'SGD'.
    travel-customer_id     = '000003'.
    travel-description     = 'Businesstrip to Singapur'.
    travel-end_date        = '20231108'.
    travel-last_changed_by = 'GENERATOR'.
    travel-status          = 'N'.
    travel-total_price     = '1290.00'.
    travel-travel_id       = '00000004'.
    travel-travel_uuid     = cl_system_uuid=>create_uuid_x16_static( ).
    GET TIME STAMP FIELD travel-created_at.
    GET TIME STAMP FIELD travel-last_changed_at.
    APPEND travel TO travels.

    " Insert Travels
    INSERT z_travel_a FROM TABLE @travels.
    out->write( |Inserted Travels: { sy-dbcnt }| ).

//highlight-start
    " Insert Bookings
    INSERT z_booking_a FROM TABLE @bookings.
    out->write( |Inserted Bookings: { sy-dbcnt }| ).
//highlight-end
  ENDMETHOD.
ENDCLASS.
```

## BO Base View `ZR_Booking`

```sql showLineNumbers
//highlight-start
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Booking'
define view entity ZR_Booking
  as select from z_booking_a
  association to parent ZR_Travel as _Travel on $projection.TravelUuid = _Travel.TravelUuid
{
  key booking_uuid  as BookingUuid,
      travel_uuid   as TravelUuid,
      booking_id    as BookingId,
      booking_date  as BookingDate,
      carrier_id    as CarrierId,
      connection_id as ConnectionId,
      flight_date   as FlightDate,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      flight_price  as FlightPrice,
      currency_code as CurrencyCode,

      /* Associations */
      _Travel
}
//highlight-end
```

## BO Base View `ZR_Travel`

```sql showLineNumbers
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Travel'
define root view entity ZR_Travel
  as select from z_travel_a
//highlight-start
  composition [0..*] of ZR_Booking as _Bookings
//highlight-end
{
  key travel_uuid     as TravelUuid,
      travel_id       as TravelId,
      agency_id       as AgencyId,
      customer_id     as CustomerId,
      begin_date      as BeginDate,
      end_date        as EndDate,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      booking_fee     as BookingFee,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      total_price     as TotalPrice,
      currency_code   as CurrencyCode,
      description     as Description,
      status          as Status,

      /* Administrative Data */
      created_by      as CreatedBy,
      created_at      as CreatedAt,
      last_changed_by as LastChangedBy,
      last_changed_at as LastChangedAt,

//highlight-start
      /* Associations */
      _Bookings
//highlight-end
}
```
