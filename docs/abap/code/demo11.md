---
title: Demo 11
description: ""
sidebar_position: 110
---

```sql
@EndUserText.label : 'Flight'
@AbapCatalog.enhancementCategory : #NOT_EXTENSIBLE
define structure zabap_s_flight {
  carrier_id     : s_carr_id;
  connection_id  : s_conn_id;
  flight_date    : s_date;
  @Semantics.amount.currencyCode : 'zabap_s_flight.currency_code'
  price          : s_price;
  currency_code  : s_currcode;
}
```

```sql
@EndUserText.label : 'Flight Extended'
@AbapCatalog.enhancementCategory : #NOT_EXTENSIBLE
define structure zabap_s_flight_xt {
  carrier_id      : s_carr_id;
  connection_id   : s_conn_id;
  airport_from_id : s_from_airp;
  airport_to_id   : s_to_airp;
  flight_date     : s_date;
  @Semantics.amount.currencyCode : 'zabap_s_flight.currency_code'
  price           : s_price;
  currency_code   : s_currcode;
}
```

```abap
REPORT zabap_demo_abap_11.

DATA connection TYPE zabap_s_connection.

connection-carrier_id = 'LH'.
connection-connection_id = '0400'.
connection-airport_from_id = 'FRA'.
connection-airport_to_id = 'JFK'.

"Kopieren typgleicher Strukturen
DATA connection2 TYPE zabap_s_connection.
connection2 = connection.

"Kopieren namensgleicher Komponenten
DATA flight TYPE zabap_s_flight.
DATA flight_xt TYPE zabap_s_flight_xt.

flight-carrier_id = 'LH'.
flight-connection_id = '0400'.
flight-flight_date = sy-datlo.
flight-price = 500.
flight-currency_code = 'EUR'.

flight_xt = CORRESPONDING #( flight ).
flight_xt = CORRESPONDING #( BASE (flight_xt ) connection ).
```
