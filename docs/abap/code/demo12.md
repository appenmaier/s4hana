---
title: Demo 12
description: ""
sidebar_position: 120
---

```abap
REPORT zabap_demo_abap_12.

"Deklaration interner Tabellen
DATA flights TYPE TABLE OF zabap_s_flight.
DATA flights2 TYPE zabap_tt_flights.

"Einfügen von Datensätzen
DATA flight TYPE zabap_s_flight.
flights = VALUE #(
  ( carrier_id = 'LH' connection_id = '0400' flight_date = sy-datlo )
  ( carrier_id = 'LH' connection_id = '0401' flight_date = sy-datlo) ).

"Erweitern interner Tabellen
flight-carrier_id = 'LH'.
flight-connection_id = '0402'.
flight-flight_date = sy-datlo.

flights = VALUE #( BASE flights (flight ) ).

"Lesen eines Einzelsatzes
flight = flights[ 1 ].
flight = flights[ carrier_id = 'LH' connection_id = '0400' flight_date = sy-datlo ].

"Lesen mehrerer Datensätze
LOOP AT flights INTO flight WHERE flight_date >= sy-datlo.
  WRITE: / |{ flight-carrier_id } { flight-connection_id }|.
ENDLOOP.

"Fehlerbehandlung mit LINE_EXISTS
IF line_exists(flights[ 1 ] ).
  flight = flights[ 1 ].
ELSE.
  MESSAGE 'Error: Line does not exist' TYPE 'E'.
ENDIF.

"Ändern eines Einzelsatzes
flights[ 1 ]-price = 1000.
flights[ carrier_id = 'LH' connection_id = '0400' flight_date = sy-datlo ]-price = 1000.

"Ändern mehrerer Datensätze
DATA flight2 TYPE REF TO zabap_s_flight.
LOOP AT flights REFERENCE INTO flight2.
  Flight2->price = 1000.
ENDLOOP.

"Sortieren interner Tabellen
SORT flights BY carrier_id ASCENDING connection_id DESCENDING flight_date ASCENDING.

"Löschen eines Einzelsatzes
DELETE flights INDEX 1.

"Löschen mehrerer Datensätze
DELETE flights WHERE flight_date < sy-datlo.

"Größe einer internen Tabelle
DATA number_of_flights TYPE i.
number_of_flights = lines(flights ).
```
