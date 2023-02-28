---
title: Verhalten festlegen
description: ''
sidebar_position: 70
---


## Behavior Definition ZI_TRAVEL
```sql
managed implementation in class zbp_i_travel unique;
strict ( 1 );

define behavior for ZI_Travel //alias <alias_name>
persistent table z_travel
lock master
authorization master ( instance )
//etag master <field_name>
{
  create;
  update;
  delete;
  association _Bookings { create; }

  field ( readonly, numbering : managed ) TravelUuid;

  mapping for ztravel corresponding
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

define behavior for ZI_Booking //alias <alias_name>
persistent table z_booking
lock dependent by _Travel
authorization dependent by _Travel
//etag master <field_name>
{
  update;
  delete;
  field ( readonly ) TravelUuid;
  association _Travel;

  field ( readonly, numbering : managed ) BookingUuid;

  mapping for z_booking corresponding
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
