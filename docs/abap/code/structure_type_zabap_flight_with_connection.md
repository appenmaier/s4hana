---
title: Strukturtyp ZABAP_FLIGHT_WITH_CONNECTION
description: ''
---

```sql
@EndUserText.label : 'Flight with Connection'
@AbapCatalog.enhancementCategory : #NOT_EXTENSIBLE
define structure zabap_flight_with_connection {
  carrier_id    : s_carr_id;
  connection_id : s_conn_id;
  city_from     : s_from_cit;
  city_to       : s_to_city;
  flight_date   : s_date;
  @Semantics.amount.currencyCode : 'zabap_flight_with_connection.currency_code'
  price         : s_price;
  currency_code : s_currcode;
}
```
