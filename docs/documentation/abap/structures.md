---
title: Strukturen
description: ""
sidebar_position: 100
tags: []
---

Strukturen fassen logisch zusammenhängende Werte in einem Datenobjekt zusammen.

## Definition von globalen Strukturtypen

Globale Strukturtypen werden mit Hilfe der Data Definition Language (DDL) der ABAP Core Data Services (ABAP CDS) definiert.

```sql showLineNumbers
@EndUserText.label : 'Connection'
@AbapCatalog.enhancementCategory : #NOT_EXTENSIBLE
define structure connection {
  carrier_id      : /dmo/carrier_id;
  connection_id   : /dmo/connection_id;
  airport_from_id : /dmo/airport_from_id;
  airport_to_id   : /dmo/airport_to_id;
}
```

## Deklaration von Strukturen

Strukturen werden, wie elementare Datenobjekte, mit der DATA-Anweisung deklariert.

```abap showLineNumbers
DATA connection TYPE connection.
```

## Zugriff auf Strukturkomponenten

Mit dem Komponentenselektor `-` kann auf die einzelnen Komponenten einer Struktur zugegriffen werden (lesend als auch schreibend).

```abap showLineNumbers
DATA connection TYPE connection.

connection-carrier_id = 'LH'.
connection-connection_id = '0400'.

WRITE: connection-carrier_id, connection-connection_id.
```

## Kopieren von Strukturen

Strukturen mit dem gleichen Strukturtypen können über den Zuweisungsoperator `=` kopiert werden. Der Operator `CORRESPONDING` ermöglicht das komponentenweise Kopieren von Inhalten einer Quellstruktur in eine Zielstruktur.

```abap showLineNumbers
DATA flight TYPE flight.
DATA connection TYPE connection.
DATA connection2 TYPE connection.
DATA flight_extended TYPE flight_extended.

"Kopieren typgleicher Strukturen
connection2 = connection.

"Kopieren namensgleicher Komponenten
flight_extended = CORRESPONDING #( flight ).
flight_extended = CORRESPONDING #( BASE ( flight_extended ) connection ).
```

:::danger Hinweis

Beim Kopieren mit `CORRESPONDING` werden nur gleichnamige Komponenten berücksichtigt. Gegebenenfalls findet eine Typkonvertierung statt.

:::
