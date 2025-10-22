---
title: 7. Verhalten festlegen
description: ""
sidebar_position: 70
---

- Die Behavior Definition `ZR_TRAVELTP` erstellen
- Die Verhaltensimplementierung `ZBP_TRAVELTP` generieren lassen
- Die BO Projection View `ZC_TravelTP` um Angaben zum Provider Contract erweitern
- Die Behavior Projection `ZC_TRAVELTP` erstellen

## Behavior Definition `ZR_TRAVELTP`

```sql showLineNumbers
//highlight-start
managed implementation in class zbp_traveltp unique;
strict ( 2 );

define behavior for ZR_TravelTP alias Travel
persistent table ztravel_a
lock master
authorization master ( instance )
//etag master <field_name>
{
  create;
  update;
  delete;

  association _Bookings { create; }

  field ( readonly, numbering : managed ) TravelUuid;

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

define behavior for ZR_BookingTP alias Booking
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
//highlight-end
```

## Verhaltensimplementierung `ZBP_TRAVELTP`

### Global Class `ZBP_TRAVELTP`

```abap title="ZBP_TRAVELTP.abap" showLineNumbers
//highlight-start
CLASS zbp_traveltp DEFINITION PUBLIC ABSTRACT FINAL FOR BEHAVIOR OF zr_traveltp.
  PROTECTED SECTION.

  PRIVATE SECTION.
ENDCLASS.

CLASS zbp_traveltp IMPLEMENTATION.
ENDCLASS.
//highlight-end
```

### Local Type `LHC_TRAVEL`

```abap title="ZBP_TRAVELTP.abap" shwoLineNumbers
//highlight-start
CLASS lhc_travel DEFINITION INHERITING FROM cl_abap_behavior_handler.
  PRIVATE SECTION.
    METHODS get_instance_authorizations FOR INSTANCE AUTHORIZATION
      IMPORTING keys REQUEST requested_authorizations FOR Travel RESULT result.
ENDCLASS.

CLASS lhc_travel IMPLEMENTATION.
  METHOD get_instance_authorizations.
  ENDMETHOD.
ENDCLASS.
//highlight-end
```

## BO Projection View `ZC_TravelTP`

```sql showLineNumbers
@EndUserText.label: 'Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Metadata.allowExtensions: true
define root view entity ZC_TravelTP
//highlight-start
  provider contract transactional_query
//highlight-end
  as projection on ZR_TravelTP
{
  key TravelUuid,
      TravelId,
      AgencyId,
      CustomerId,
      BeginDate,
      EndDate,
      BookingFee,
      TotalPrice,
      CurrencyCode,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      Description,
      Status,

      /* Administrative Data */
      CreatedBy,
      CreatedAt,
      LastChangedBy,
      LastChangedAt

      /* Associations */
      _Bookings : redirected to composition child ZC_BookingTP
}
```

## Behavior Projection `ZC_TRAVELTP`

```sql showLineNumbers
//highlight-start
projection;
strict ( 2 );

define behavior for ZC_TravelTP alias Travel
{
  use create;
  use update;
  use delete;

  use association _Bookings { create; }
}

define behavior for ZC_BookingTP alias Booking
{
  use update;
  use delete;

  use association _Travel;
}
//highlight-end
```
