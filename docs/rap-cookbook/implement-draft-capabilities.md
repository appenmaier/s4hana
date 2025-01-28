---
title: 17. Entwurfs-Funktionen implementieren
description: ""
sidebar_position: 170
---

- Die Behavior Definition `ZR_TRAVEL` um Entwurfs-Funktionen erweitern
- Eine Entwurfstabelle `Z_TRAVEL_D` generieren lassen
- Eine Entwurfstabelle `Z_BOOKING_D` generieren lassen
- Die Behavior Projection `ZC_TRAVEL` um Entwurfs-Funktionen erweitern
- Das Service Binding `ZUI_TRAVEL_V4` erstellen
- Das Service Binding `ZUI_TRAVEL_V2` löschen

## Behavior Definition `ZR_TRAVEL`

```sql showLineNumbers
managed implementation in class zbp_travel unique;
strict ( 2 );
//highlight-start
with draft;
//highlight-end

define behavior for ZR_Travel alias Travel
persistent table z_travel_a
//highlight-start
draft table z_travel_d
//highlight-end
lock master
//highlight-start
total etag LastChangedAt
//highlight-end
authorization master ( instance )
//etag master <field_name>
{
  create;
  update;
  delete;

//highlight-start
  association _Bookings { create; with draft; }
//highlight-end

  static action ShowTestMessage;
  action CancelTravel result [1] $self;
  action MaintainBookingFee parameter ZA_BookingFee result [1] $self;

//highlight-start
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
//highlight-end

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
lock dependent by _Travel
//highlight-start
draft table z_booking_d
//highlight-end
authorization dependent by _Travel
//etag master <field_name>
{
  update;
  delete;

//highlight-start
  association _Travel { with draft; }
//highlight-end

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

## Behavior Projection `ZC_TRAVEL`

```sql showLineNumbers
projection;
strict ( 2 );
//highlight-start
use draft;
//highlight-end

define behavior for ZC_Travel alias Travel
{
  use create;
  use update;
  use delete;

//highlight-start
  use association _Bookings { create; with draft; }
//highlight-end

  use action ShowTestMessage;
  use action CancelTravel;
  use action MaintainBookingFee;

//highlight-start
  use action Activate;
  use action Edit;
  use action Discard;
  use action Prepare;
  use action Resume;
//highlight-end
}

define behavior for ZC_Booking alias Booking
{
  use update;
  use delete;

//highlight-start
  use association _Travel { with draft; }
//highlight-end
}
```

## Service Binding `ZUI_TRAVEL_V4`

- Service Definition: ZUI_TRAVEL
- Binding Type: OData V4 - UI
