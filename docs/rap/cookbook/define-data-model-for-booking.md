---
title: Datenmodell für Buchungen definieren
description: ''
sidebar_position: 40
---

Zum Speichern der Buchungsdaten muss zunächst eine entsprechende Datenbanktabelle erstellt werden. Anschließend wird darauf aufbauend eine dazugehörige Interface View inklusive einer Eltern-Assoziation zu den Reisedaten erstellt.

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
      status        as Status
}
```
