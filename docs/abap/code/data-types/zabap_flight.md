---
title: Strukturtyp ZABAP_FLIGHT
description: 'Flug'
---

```sql
@EndUserText.label : 'Flight'
@AbapCatalog.enhancementCategory : #NOT_EXTENSIBLE
define structure zabap_flight {
  carrier_id     : s_carr_id;
  connection_id  : s_conn_id;
  flight_date    : s_date;
  @Semantics.amount.currencyCode : 'zabap_flight.currency_code'
  price          : s_price;
  currency_code  : s_currcode;
}
```
