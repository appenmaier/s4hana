---
title: Aktionen festlegen
description: ''
sidebar_position: 130
---

:::danger TODO
:::

## Behavior Definition ZI_TRAVEL
```sql
managed implementation in class zbp_i_travel unique;
strict ( 1 );

define behavior for ZI_Travel alias Travel
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

  mapping for z_travel corresponding
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


define behavior for ZI_Booking Booking
persistent table z_booking
lock dependent by _Travel
authorization dependent by _Travel
//etag master <field_name>
{
  update;
  delete;
  field ( readonly ) TravelUuid;
  association _Travel;

  action cancel_booking;

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

## Behavior Definition ZC_TRAVEL
```sql
projection;
strict ( 1 );

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

  use action cancel_booking;

  use association _Travel;
}
```

## Metadata Extension ZC_BOOKING
```sql
@Metadata.layer: #CUSTOMER
@UI.headerInfo:
{
  typeName: 'Booking',
  typeNamePlural: 'Bookings',
  title.value: 'BookingId',
  description.value: 'Status'
}
annotate view ZC_Booking with
{

  /* Facets */
  @UI.facet: [{ position: 10, type: #IDENTIFICATION_REFERENCE, label: 'Booking Details' }]

  /* Actions */
  @UI.lineItem: [{ position: 10, type: #FOR_ACTION, dataAction: 'CANCEL_BOOKING', label: 'Cancel Booking' }]

  /* Fields */
  @UI.hidden: true
  BookingUuid;

  @UI.hidden: true
  TravelUuid;

  @UI.lineItem: [{ position: 10 }]
  @UI.identification: [{ position: 10 }]
  BookingId;

  @UI.lineItem: [{ position: 20 }]
  @UI.selectionField: [{ position: 10 }]
  @UI.identification: [{ position: 20 }]
  BookingDate;

  @UI.lineItem: [{ position: 30 }]
  @UI.selectionField: [{ position: 20 }]
  @UI.identification: [{ position: 30 }]
  CarrierId;

  @UI.lineItem: [{ position: 40 }]
  @UI.identification: [{ position: 40 }]
  ConnectionId;

  @UI.lineItem: [{ position: 50 }]
  @UI.selectionField: [{ position: 30 }]
  @UI.identification: [{ position: 50 }]
  FlightDate;

  @UI.identification: [{ position: 60 }]
  FlightPrice;

  @UI.lineItem: [{ position: 60, criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]
  @UI.selectionField: [{ position: 40 }]
  @UI.identification: [{ position: 70 }]
  Status;

  @UI.hidden: true
  StatusCriticality;

}
```
