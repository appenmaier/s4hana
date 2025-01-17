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
define structure zconnection {
  carrier_id      : /dmo/carrier_id;
  connection_id   : /dmo/connection_id;
  airport_from_id : /dmo/airport_from_id;
  airport_to_id   : /dmo/airport_to_id;
}
```

## Deklaration von Strukturen

Strukturen werden, wie elementare Datenobjekte, mit der DATA-Anweisung deklariert.

```abap showLineNumbers
DATA connection TYPE zconnection.
```

## Zugriff auf Strukturkomponenten

Mit dem Komponentenselektor `-` kann auf die einzelnen Komponenten einer Struktur zugegriffen werden (lesend als auch schreibend).

```abap showLineNumbers
DATA connection TYPE zconnection.

connection-carrier_id = 'LH'.
connection-connection_id = '0400'.

out->write( connection-carrier_id, connection-connection_id ).
```

## Kopieren von Strukturen

Strukturen mit dem gleichen Strukturtypen können über den Zuweisungsoperator `=` kopiert werden. Der Operator `CORRESPONDING` ermöglicht das komponentenweise Kopieren von Inhalten einer Quellstruktur in eine Zielstruktur.

```abap showLineNumbers
DATA flight TYPE zflight.
DATA connection TYPE zconnection.
DATA copy_of_connection TYPE zconnection.
DATA flight_with_connection TYPE zflight_extended.

copy_of_connection = connection.

flight_with_connection = CORRESPONDING #( flight ).
flight_with_connection = CORRESPONDING #( BASE ( flight_with_connection ) connection ).
```

:::tip Hinweis

Beim Kopieren mit `CORRESPONDING` werden nur gleichnamige Komponenten berücksichtigt. Gegebenenfalls findet eine Typkonvertierung statt.

:::
