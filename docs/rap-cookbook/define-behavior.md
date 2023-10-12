---
title: 7. Verhalten festlegen
description: ""
sidebar_position: 70
---

Um das (transaktionale) Verhalten des RAP BOs festzulegen, wird einen Behavior Definition für die Restricted Interface View der Reisedaten erstellt. In dieser wird festgelegt, welche CUD-Methoden unterstützt werden sollen. Anschließend wird darauf aufbauend eine Behavior Projection für die Projection View der Reisen erstellt. In dieser wird festgelegt, welches Verhalten der Business Service bereitstellen soll.

## Behavior Definition ZR_TRAVEL

```sql
managed implementation in class zbp_r_travel unique;
strict ( 2 );

define behavior for ZR_Travel alias Travel
persistent table zatravel
lock master
authorization master ( instance )
//etag master <field_name>
{
  create;
  update;
  delete;
  association _Bookings { create; }

  field ( readonly, numbering : managed ) TravelUuid;

  mapping for zatravel corresponding
  {
    BeginDate = begin_date;
    CurrencyCode = currency_code;
    CustomerId = customer_id;
    Description = description;
    EndDate = end_date;
    TotalPrice = total_price;
    TravelId = travel_id;
    TravelUuid = travel_uuid;
  }
}

define behavior for ZR_Booking alias Booking
persistent table zabooking
lock dependent by _Travel
authorization dependent by _Travel
//etag master <field_name>
{
  update;
  delete;
  field ( readonly ) TravelUuid;
  association _Travel;

  field ( readonly, numbering : managed ) BookingUuid;

  mapping for zabooking corresponding
  {
    BookingDate = booking_Date;
    BookingId = booking_id;
    BookingUuid = booking_uuid;
    CarrierId = carrier_id;
    ConnectionId = connection_id;
    CurrencyCode = currency_code;
    FlightDate = flight_date;
    FlightPrice = flight_price;
    Status = status;
    TravelUuid = Travel_uuid;
  }
}
```

## Behavior Projection ZC_TRAVEL

```sql
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
```