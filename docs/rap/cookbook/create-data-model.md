---
title: Datenmodell erstellen
description: ''
sidebar_position: 10
---

## Datenbanktabelle Z_TRAVEL anlegen
```sql
@EndUserText.label : 'Travel'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table z_travel {
  key client : abap.clnt not null;
  key travel_uuid : sysuuid_x16 not null;
  travel_id : /dmo/travel_id;
  customer_id : /dmo/customer_id;
  begin_date : /dmo/begin_date;
  end_date : /dmo/end_date;
  description : /dmo/description;
  @Semantics.amount.currencyCode : 'z_travel.currency_code'
  total_price : /dmo/total_price;
  currency_code : /dmo/currency_code;
}
```

## Datenbanktabelle Z_BOOKING anlegen
```sql
@EndUserText.label : 'Booking'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table z_book {
  key client       : abap.clnt not null;
  key booking_uuid : sysuuid_x16 not null;
  travel_uuid      : sysuuid_x16 not null;
  booking_id       : /dmo/booking_id;
  booking_date     : /dmo/booking_date;
  carrier_id       : /dmo/carrier_id;
  connection_id    : /dmo/connection_id;
  flight_date      : /dmo/flight_date;
  @Semantics.amount.currencyCode : 'z_book.currency_code'
  flight_price     : /dmo/flight_price;
  currency_code    : /dmo/currency_code;
  status           : /dmo/booking_status;
}
```
