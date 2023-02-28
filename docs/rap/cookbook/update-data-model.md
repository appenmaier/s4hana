---
title: Datenmodell für Booking definieren
description: ''
sidebar_position: 10
---

Zum Speichern der Reisedaten muss zunächst eine entsprechende Datenbanktabelle erstellt werden. Anschließend wi darauf aufbauend dazugehörige Interface Views erstellt.

## Datenbanktabelle Z_TRAVEL erstellen
```sql
@EndUserText.label : 'Travel'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table z_travel {
  key client      : abap.clnt not null;
  key travel_uuid : sysuuid_x16 not null;
  travel_id       : /dmo/travel_id;
  customer_id     : /dmo/customer_id;
  begin_date      : /dmo/begin_date;
  end_date        : /dmo/end_date;
  description     : /dmo/description;
  @Semantics.amount.currencyCode : 'z_travel.currency_code'
  total_price     : /dmo/total_price;
  currency_code   : /dmo/currency_code;
}
```

## Datenbanktabelle Z_BOOKING erstellen
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

## Interface View ZI_Travel erstellen
```sql
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Interface View: Travel'
define root view entity ZI_Travel
  as select from z_travel
{
  key travel_uuid   as TravelUuid,
      travel_id     as TravelId,
      customer_id   as CustomerId,
      begin_date    as BeginDate,
      end_date      as EndDate,
      description   as Description,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      total_price   as TotalPrice,
      currency_code as CurrencyCode
}
```

## Interface View ZI_Booking erstellen
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
