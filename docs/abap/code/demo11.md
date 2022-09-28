---
title: Demo ABAP-11
description: 'Kopieren von Strukturen'
sidebar_position: 110
---

## Strukturtype ZABAP_FLIGHT
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

## Strukturtype ZABAP_FLIGHT_WITH_CONNECTION
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

## ABAP-Programm ZABAP_DEMO_ABAP_11
```abap
REPORT zabap_demo_abap_11.

DATA connection TYPE zabap_connection.
DATA connection2 TYPE zabap_connection.
DATA flight TYPE zabap_flight.
DATA flight_with_connection TYPE zabap_flight_with_connection.

connection-carrier_id = 'LH'.
connection-connection_id = '0400'.
connection-city_from = 'FRANKFURT'.
connection-city_to = 'NEW YORK'.

flight-carrier_id = 'LH'.
flight-connection_id = '0400'.
flight-flight_date = sy-datlo.
flight-price = 500.
flight-currency_code = 'EUR'.

*-------------------------------------------------------------------*
* Kopieren typgleicher Strukturen
*-------------------------------------------------------------------*
connection2 = connection.

*-------------------------------------------------------------------*
* Kopieren namensgleicher Komponenten
*-------------------------------------------------------------------*
flight_with_connection = CORRESPONDING #( flight ).
flight_with_connection = CORRESPONDING #( BASE ( flight_with_connection ) connection ).
```
