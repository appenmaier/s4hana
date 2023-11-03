---
title: 4. BO erweitern
description: ""
sidebar_position: 40
---

- Die Datenbanktabelle `Z_BOOKING_A` erstellen
- Die BO Base View `ZR_Booking` inklusive einer Assoziation zur BO Base View `ZR_Travel` erstellen
- Die BO Base View `ZR_Travel` um eine Assoziation zur BO Base View `ZR_Booking` erweitern

## Datenbanktabelle `Z_BOOKING_A`

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
