---
title: ZABAPBOOKINGS
description: ''
---

```sql
@EndUserText.label : 'Booking'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table zabapbooking {

  key client            : mandt not null;
  key booking_uuid      : sysuuid_x16 not null;
  travel_uuid           : sysuuid_x16 not null;
  booking_date          : /dmo/booking_date;
  customer_id           : /dmo/customer_id;
  carrier_id            : /dmo/carrier_id;
  connection_id         : /dmo/connection_id;
  flight_date           : /dmo/flight_date;
  @Semantics.amount.currencyCode : 'zabapbooking.currency_code'
  flight_price          : /dmo/flight_price;
  currency_code         : /dmo/currency_code;
  createdby            : syuname;
  lastchangedby       : syuname;
  locallastchangedat : timestampl;

}
```
