---
title: Datenmodell erweitern
description: ''
sidebar_position: 40
---

Um das Datenmodell um Buchungsdaten zu erweitern, muss zunächst eine entsprechende Datenbanktabelle für Buchungsdaten erstellt werden. Anschließend wird darauf aufbauend eine dazugehörige Interface View inklusive einer Eltern-Assoziation zu den Reisedaten erstellt. Zuletzt wird die Interface View für Reisen um eine Kind-Komposition zu den Buchungsdaten ergänzt.

## Datenbanktabelle Z_BOOKING
```sql
@EndUserText.label : 'Booking'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table z_booking {
  key client       : abap.clnt not null;
  key booking_uuid : sysuuid_x16 not null;
  travel_uuid      : sysuuid_x16 not null;
  booking_id       : /dmo/booking_id;
  booking_date     : /dmo/booking_date;
  carrier_id       : /dmo/carrier_id;
  connection_id    : /dmo/connection_id;
  flight_date      : /dmo/flight_date;
  @Semantics.amount.currencyCode : 'z_booking.currency_code'
  flight_price     : /dmo/flight_price;
  currency_code    : /dmo/currency_code;
  status           : /dmo/booking_status;
}
```

## Interface View ZI_Booking
```sql
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Interface View: Booking'
define view entity ZI_Booking
  as select from z_booking
  association to parent ZI_Travel as _Travel on $projection.TravelUuid = _Travel.TravelUuid
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

## Interface View ZI_Travel
```sql
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Interface View: Travel'
define root view entity ZI_Travel
  as select from z_travel
  composition [0..*] of ZI_Booking as _Bookings
{
  key travel_uuid        as TravelUuid,
      travel_id          as TravelId,
      customer_id        as CustomerId,
      begin_date         as BeginDate,
      end_date           as EndDate,
      description        as Description,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      total_price        as TotalPrice,
      currency_code      as CurrencyCode,

      /* Associations */
      _Bookings
}
```
