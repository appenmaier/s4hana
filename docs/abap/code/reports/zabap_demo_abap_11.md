---
title: ZABAP_DEMO_ABAP_11
description: 'Kopieren von Strukturen'
---

```abap
* Copying of Structures
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

[Strukturtyp ZABAP_CONNECTION](../data-types/zabap_connection.md)

[Strukturtyp ZABAP_FLIGHT](../data-types/zabap_flight.md)

[Strukturtyp ZABAP_FLIGHT_WITH_CONNECTION](../data-types/zabap_flight_with_connection.md)
