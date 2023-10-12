---
title: RAP BO erweitern
description: ""
sidebar_position: 40
---

Um das RAP BO um Buchungen zu erweitern, muss zunächst eine entsprechende Datenbanktabelle für Buchungen erstellt werden. Anschließend wird darauf aufbauend eine dazugehörige Restricted Interface View inklusive einer Assoziation zu den Reisen erstellt. Zuletzt wird die Restricted Interface View für Reisen um eine Assoziation zu den Buchungen erweitert.

## Datenbanktabelle ZABOOKING

```sql
@EndUserText.label : 'Booking'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table zabooking {
  key client       : abap.clnt not null;
  key booking_uuid : sysuuid_x16 not null;
  travel_uuid      : sysuuid_x16 not null;
  booking_id       : /dmo/booking_id;
  booking_date     : /dmo/booking_date;
  carrier_id       : /dmo/carrier_id;
  connection_id    : /dmo/connection_id;
  flight_date      : /dmo/flight_date;
  @Semantics.amount.currencyCode : 'zabooking.currency_code'
  flight_price     : /dmo/flight_price;
  currency_code    : /dmo/currency_code;
  status           : /dmo/booking_status;
}
```

## Restricted Interface View ZR_Booking

```sql
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Booking'
define view entity ZR_Booking
  as select from zabooking
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
      status        as Status,

      /* Associations */
      _Travel
}
```

## Restricted Interface View ZR_Travel

```sql
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Travel'
define root view entity ZR_Travel
  as select from zatravel
//highlight-start
  composition [0..*] of ZR_Booking as _Bookings
//highlight-end
{
  key travel_uuid           as TravelUuid,
      travel_id             as TravelId,
      customer_id           as CustomerId,
      begin_date            as BeginDate,
      end_date              as EndDate,
      description           as Description,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      total_price           as TotalPrice,
      currency_code         as CurrencyCode,
      created_by            as CreatedBy,
      created_at            as CreatedAt,
      local_last_changed_by as LocalLastChangedBy,
      local_last_changed_at as LocalLastChangedAt,
      last_changed_at       as LastChangedAt,

//highlight-start
      /* Associations */
      _Bookings
//highlight-end
}
```
