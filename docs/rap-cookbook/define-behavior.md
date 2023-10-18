---
title: 7. Verhalten festlegen
description: ""
sidebar_position: 70
---

Um das (transaktionale) Verhalten des RAP BOs festzulegen, wird einen Behavior Definition für die Restricted Interface View der Reisedaten erstellt. In dieser wird festgelegt, welche CUD-Methoden unterstützt werden sollen. Anschließend wird darauf aufbauend eine Behavior Projection für die Projection View der Reisen erstellt. In dieser wird festgelegt, welches Verhalten der Business Service bereitstellen soll.

## Behavior Definition ZR_TRAVEL

```sql
//highlight-start
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

  field ( readonly, numbering : managed ) TravelUuid;

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
  field ( readonly ) TravelUuid;
  association _Travel;

  field ( readonly, numbering : managed ) BookingUuid;

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
//highlight-end
```

## Projection View ZC_Travel

```sql
@EndUserText.label: 'Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Metadata.allowExtensions: true
define root view entity ZC_Travel
//highlight-start
  provider contract transactional_query
//highlight-end
  as projection on ZR_Travel
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
      _Bookings : redirected to composition child ZC_Booking
}
```

## Behavior Projection ZC_TRAVEL

```sql
//highlight-start
projection;
strict ( 2 );

define behavior for ZC_Travel alias Travel
{
  use create;
  use update;
  use delete;

  use association _Bookings { create; }
}

define behavior for ZC_Booking alias Booking
{
  use update;
  use delete;

  use association _Travel;
}
//highlight-end
```
