---
title: Interne Tabellen
description: ""
sidebar_position: 110
tags: []
---

Eine interne Tabelle ist ein Datenobjekt, das zur Laufzeit mehrere gleich strukturierte Datensätze aufnehmen kann. Das Laufzeitsystem verwaltet die Größe der internen Tabelle automatisch.

## Deklaration interner Tabellen

Eine interne Tabelle kann direkt im Programm deklariert werden (selbstständige Definition) oder über einen lokalen bzw. globalen Tabellentyp. Folgende Angaben sind dabei erforderlich:

- Der _Zeilentyp_ beschreibt den Aufbau der internen Tabelle
- Die _Tabellenart_ definiert die Zugriffsart (per Schlüssel oder per Index)
- Der _Primärschlüssel_ definiert die Schlüsselfelder inklusive ihrer Reihenfolge

```abap showLineNumbers
TYPES t_flights  TYPE STANDARD TABLE OF /dmo/flight
                 WITH NON-UNIQUE KEY carrier_id
                                     connection_id
                                     flight_date
                                     currency_code
                                     plane_type_id.  " Long Form
TYPES t_flights2 TYPE TABLE OF          /dmo/flight. " Short Form


DATA flights  TYPE TABLE OF /dmo/flight. " Direct Declaration (Short Form)
DATA flights2 TYPE t_flights.            " Local Table Type
DATA flights3 TYPE /dmo/t_flight.        " Global Table Type
```

:::note

Werden bei der selbstständigen Deklaration oder der Definition eines lokalen Tabellentyps die Angaben zur Tabellenart und/oder dem Primärschlüssel weggelassen, verwendet ABAP als Standardwert eine Standardtabelle bzw. einen Standard-Primärschlüssel. Beim Standard-Primärschlüssel sind alle zeichenartigen Felder Teil des (nicht eindeutigen) Primärschlüssels.

:::

## Einfügen von Datensätzen

Mit dem Operator `VALUE` werden Datensätze in interne Tabellen eingefügt.

```abap showLineNumbers
DATA flight  TYPE /dmo/flight.
DATA flights TYPE /dmo/t_flight.

" Insert data
flights = VALUE #( ( carrier_id = 'LH' connection_id = '0400' flight_date = '20231013' )
                   ( carrier_id = 'LH' connection_id = '0401' flight_date = '20230928' ) ).

" Append data
flight-carrier_id    = 'LH'.
flight-connection_id = '0402'.
flight-flight_date   = '20230607'.
flights              = VALUE #( BASE flights
                                ( flight ) ).

flight-flight_date = '20231231'.
APPEND flight TO flights.
```

:::note

Mit dem Operator `BASE` wird eine bestehende interne Tabelle erweitert.

:::

## Lesen von Datensätzen

Tabellenausdrücke lesen einen Einzelsatz per Index oder per Schlüssel, die `LOOP`-Schleife liest eine interne Tabelle zeilenweise aus.

```abap showLineNumbers
DATA flight  TYPE /dmo/flight.
DATA flights TYPE /dmo/t_flight.

flights = VALUE #( ( carrier_id = 'LH' connection_id = '0400' flight_date = '20231013' )
                   ( carrier_id = 'LH' connection_id = '0401' flight_date = '20230928' ) ).

" Read single entry
flight = flights[ 1 ].
flight = flights[ carrier_id = 'LH' connection_id = '0401' flight_date = '20230928' ].

" Read multiple entries
LOOP AT flights INTO flight WHERE flight_date >= '20230101'.
  out->write( flight-carrier_id ).
ENDLOOP.
```

:::note

Mit dem Zusatz `WHERE` werden in einer `LOOP`-Schleife die auszulesenden Zeilen eingeschränkt.

:::

Die eingebaute ABAP-Funktion `LINES` gibt die Anzahl der Zeilen einer internen Tabelle zurück.

```abap showLineNumbers
DATA(number_of_flights) = lines( flights ).
```

## Fehlerbehandlung bei Tabellenausdrücken

Zur Fehlerbehandlung bei Tabellenausdrücken wird die eingebaute Prädikatsfunktion `LINE_EXISTS` verwendet.

```abap showLineNumbers
DATA flight  TYPE /dmo/flight.
DATA flights TYPE /dmo/t_flight.

IF line_exists( flights[ 1 ] ).
  flight = flights[ 1 ].
ENDIF.
```

## Ändern von Datensätzen

Tabellenausdrücke ändern einen Einzelsatz per Index oder per Schlüssel. Über Datenreferenzen oder Feldsymbole lassen sich mehrere Datensätze sequenziell ändern.

```abap showLineNumbers
DATA flight           TYPE REF TO /dmo/flight.
DATA flights          TYPE /dmo/t_flight.
FIELD-SYMBOL <flight> TYPE /dmo/flight.

flights = VALUE #( ( carrier_id = 'LH' connection_id = '0400' flight_date = '20231013' )
                   ( carrier_id = 'LH' connection_id = '0401' flight_date = '20230928' ) ).

" Change single entry
flights[ 1 ]-price  = 1000.
flights[ carrier_id = 'LH' connection_id = '0400' flight_date = '20231013' ]-price = 1000.

" Change multiple entries with data references
LOOP AT flights REFERENCE INTO flight.
  flight->price = 1000.
ENDLOOP.

" Change multiple entries with field symbols
LOOP AT flights ASSIGNING <flight>.
  <flight>-price = 500.
ENDLOOP.
```

## Löschen von Datensätzen

Mit der Anweisung `DELETE` werden ein oder mehrere Datensätze gelöscht.

```abap showLineNumbers
DATA flight  TYPE /dmo/flight.
DATA flights TYPE /dmo/t_flight.

flights = VALUE #( ( carrier_id = 'LH' connection_id = '0400' flight_date = '20231013' )
                   ( carrier_id = 'LH' connection_id = '0401' flight_date = '20230928' ) ).

" Delete single entry
DELETE flights INDEX 1.

" Delete multiple entries
DELETE flights WHERE flight_date < '20240101'.
```

## Sortieren interner Tabellen

Mit der Anweisung `SORT` werden interne Tabellen sortiert.

```abap showLineNumbers
DATA flights TYPE /dmo/t_flight.

flights = VALUE #( ( carrier_id = 'LH' connection_id = '0400' flight_date = '20231013' )
                   ( carrier_id = 'LH' connection_id = '0401' flight_date = '20230928' ) ).

SORT flights BY carrier_id ASCENDING connection_id DESCENDING flight_date ASCENDING.
```

:::note

Die Zusätze `ASCENDING` und `DESCENDING` legen die Sortierreihenfolge fest.

:::

## Einspaltige Tabellen

Interne Tabellen, deren Zeilentyp keine Struktur, sondern ein Datenelement, einen ABAP-Standardtyp oder einen Referenzdatentyp ist, nennt man _einspaltige Tabellen_. Mit dem Schlüsselwort `TABLE_LINE` wird auf die einzige Spalte zugegriffen.

```abap
DATA carrier_ids TYPE TABLE OF /dmo/carrier_id.
DATA carrier_id  TYPE /dmo/carrier_id.

carrier_ids = VALUE #( ( 'BA' ) ( 'LH') ( 'UA' ) ).
carrier_id = carrier_ids[ table_line = 'LH' ].
```
