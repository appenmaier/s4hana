---
title: Demo ABAP-12
description: 'Interne Tabellen'
sidebar_position: 120
---

```abap
REPORT zabap_demo_abap_12.

*-------------------------------------------------------------------*
* Deklaration interner Tabellen
*-------------------------------------------------------------------*
DATA flights TYPE TABLE OF zabap_flight.
DATA flights2 TYPE zabap_flights.
DATA flight TYPE zabap_flight.
DATA flight2 TYPE REF TO zabap_flight.

*-------------------------------------------------------------------*
* Hinzufügen von Datensätzen
*-------------------------------------------------------------------*
flights = VALUE #(
  ( carrier_id = 'LH' connection_id = '0400' flight_date = sy-datlo )
  ( carrier_id = 'LH' connection_id = '0401' flight_date = sy-datlo) ).

flight-carrier_id = 'LH'.
flight-connection_id = '0402'.
flight-flight_date = sy-datlo.

flights = VALUE #( BASE flights (flight ) ).
APPEND flight TO flights.

*-------------------------------------------------------------------*
* Lesen von Datensätzen
*-------------------------------------------------------------------*
* Lesen eines Einzelsatzes
flight = flights[ 1 ].
flight = flights[ carrier_id = 'LH' connection_id = '0400' flight_date = sy-datlo ].

* Lesen mehrerer Datensätze
LOOP AT flights INTO flight WHERE flight_date >= sy-datlo.
  WRITE: / |{ flight-carrier_id } { flight-connection_id }|.
ENDLOOP.

* Fehlerbehandlung bei Tabellenausdrücken
IF line_exists(flights[ 1 ] ).
  flight = flights[ 1 ].
ENDIF.

*-------------------------------------------------------------------*
* Ändern von Datensätzen
*-------------------------------------------------------------------*
* Ändern eines Einzelsatzes
flights[ 1 ]-price = 1000.
flights[ carrier_id = 'LH' connection_id = '0400' flight_date = sy-datlo ]-price = 1000.

* Ändern mehrerer Datensätze
LOOP AT flights REFERENCE INTO flight2.
  flight2->price = 1000.
ENDLOOP.

*-------------------------------------------------------------------*
* Sortieren interner Tabellen
*-------------------------------------------------------------------*
SORT flights BY carrier_id ASCENDING connection_id DESCENDING flight_date ASCENDING.

*-------------------------------------------------------------------*
* Löschen von Datensätzen
*-------------------------------------------------------------------*
* Löschen eines Einzelsatzes
DELETE flights INDEX 1.

* Löschen mehrerer Datensätze
DELETE flights WHERE flight_date < sy-datlo.

*-------------------------------------------------------------------*
* Größe von internen Tabellen
*-------------------------------------------------------------------*
DATA(number_of_flights) = lines(flights ).
WRITE: / number_of_flights.
```
