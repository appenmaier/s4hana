---
title: Interne Tabellen
description: ''
sidebar_position: 110
tags: []
---

Eine interne Tabelle ist ein Datenobjekt, welches zur Laufzeit mehrere gleich strukturierte Datensätze halten kann. Die Größe der internen Tabelle wird dabei vom Laufzeitsystem automatisch verwaltet.

## Deklaration interner Tabellen
Die Deklaration einer internen Tabellen kann entweder direkt im Programm erfolgen (selbstständige Definition) oder durch Angabe eines globalen Tabellentyps. Hierfür müssen folgende Angaben gemacht werden:
- Der Zeilentyp beschreibt den Aufbau der internen Tabelle
- Die Tabellenart definiert die Zugriffsart (per Schlüssel oder per Index)
- Der Primärschlüssel definiert die Schlüsselfelder inklusive ihrer Reihenfolge

```abap
DATA flights TYPE TABLE OF flight.
DATA flights2 TYPE flights.
```

## Einfügen von Datensätzen
Der Operator `VALUE` ermöglicht das Einfügen von Datensätzen in interne Tabellen.

```abap
DATA flight TYPE flight.
DATA flights TYPE flights.
DATA(today) = sy-datlo.

* Einfügen von Datensätzen
flights = VALUE #(
  ( carrier_id = 'LH' connection_id = '0400' flight_date = today )
  ( carrier_id = 'LH' connection_id = '0401' flight_date = today ) ).

* Erweitern interner Tabellen
flight-carrier_id = 'LH'.
flight-connection_id = '0402'.
flight-flight_date = today.

flights = VALUE #( BASE flights ( flight ) ).
```

:::note Hinweis
Der Operator `BASE` ermöglicht das Erweitern einer internen Tabelle.
:::

## Lesen von Datensätzen
Tabellenausdrücke ermöglichen das Lesen eines Einzelsatzes per Index bzw. per Schlüssel, die LOOP-Schleife ermöglicht das zeilenweise Auslesen von internen Tabellen.

```abap
DATA flight TYPE flight.
DATA flights TYPE flights.
DATA(today) = sy-datlo.

* Lesen eines Einzelsatzes
flight = flights[ 1 ].
flight = flights[ carrier_id = 'LH' connection_id = '0400' flight_date = today ].

* Lesen mehrerer Datensätze
LOOP AT flights INTO flight WHERE flight_date >= today.
  WRITE flight-carrier_id.
ENDLOOP.
```

:::note Hinweis
Durch den Zusatz `WHERE` können bei einer LOOP-Schleife die auszulesenden Zeilen eingeschränkt werden.
:::

Die eingebaute ABAP-Funktion `LINES` gibt die Größe einer internen Tabelle zurück.

```abap
DATA(number_of_flights) = lines( flights ).
```

## Fehlerbehandlung bei Tabellenausdrücken
Die Fehlerbehandlung bei Tabellenausdrücken kann mit Hilfe der eingebauten Prädikatsfunktion `LINE_EXISTS` erfolgen.

```abap
DATA flight TYPE flight.
DATA flights TYPE flights.

IF line_exists( flights[ 1 ] ).
  flight = flights[ 1 ].
ENDIF.
```

## Ändern von Datensätzen
Tabellenausdrücke ermöglichen das Ändern eines Einzelsatzes per Index bzw. per Schlüssel und über Datenreferenzen können mehrere Datensätze sequentiell geändert werden.

```abap
DATA flight TYPE flight.
DATA flight2 TYPE REF TO flight.
DATA flights TYPE flights.
DATA(today) = sy-datlo.

* Ändern eines Einzelsatzes
flights[ 1 ]-price = 1000.
flights[ carrier_id = 'LH' connection_id = '0400' flight_date = today ]-price = 1000.

* Ändern mehrerer Datensätze
LOOP AT flights REFERENCE INTO flight2.
  flight2->price = 1000.
ENDLOOP.
```

## Löschen von Datensätzen
Die Anweisung `DELETE` ermöglicht das Löschen eines oder mehrerer Datensätze

```abap
DATA flight TYPE flight.
DATA flights TYPE flights.
DATA(today) = sy-datlo.

* Löschen eines Einzelsatzes
DELETE flights INDEX 1.

* Löschen mehrerer Datensätze
DELETE flights WHERE flight_date < today.
```

## Sortieren interner Tabellen
Die Anweisung `SORT` ermöglicht das Sortieren von internen Tabellen.

```abap
DATA flights TYPE flights.

SORT flights BY carrier_id ASCENDING connection_id DESCENDING flight_date ASCENDING.
```

:::note Hinweis
Die Zusätze `ASCENDING` und `DESCENDING` legen die Sortierreihenfolge fest.
:::

## Einspaltige Tabellen
Interne Tabellen, die als Zeilentyp keine Struktur, sondern ein Datenelement, einen ABAP-Standardtyp oder einen Referenzdatentypen verwenden, bezeichnet man als _einspaltige Tabellen_. Das Schlüsselwort `TABLE_LINE` ermöglicht bei einspaltigen Tabellen den 
Zugriff auf die Spalte.

```abap
DATA carrier_ids TYPE TABLE OF s_carr_id.
DATA carrier_id TYPE s_carr_id.

carrier_ids = VALUE #( ( 'BA' ) ( 'LH') ( 'UA' ) ).
carrier_id = carrier_ids[ table_line = 'LH' ].
```