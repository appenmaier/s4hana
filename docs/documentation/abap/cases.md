---
title: Fallunterscheidungen
description: ""
sidebar_position: 60
tags: []
---

In ABAP kommen sowohl einfache als auch komplexe Fallunterscheidungen zum Einsatz.

## Einfache Fallunterscheidungen

Einfache Fallunterscheidungen können mit `IF...ELSE...ENDIF` realisiert werden. Mit dem IF-Konstrukt können beliebig logische Ausdrücke als Prüfbedingung angegeben werden.

```abap showLineNumbers
DATA carrier_id TYPE /dmo/carrier_id VALUE 'LH'.
DATA flight_date TYPE /dmo/flight_date VALUE '20230104'.

IF NOT ( flight_date >= '20230101' AND flight_date <= '20231231' ) OR carrier_id = 'LH'.
  WRITE 'X'.
ELSE.
  WRITE ' '.
ENDIF.
```

:::note Hinweis

Der ELSE-Zweig ist optional.

:::

## Komplexe Fallunterscheidungen

Komplexe Fallunterscheidungen können mit `CASE...WHEN...ENDCASE` realisiert werden. Hiermit sind übersichtliche Fallunterscheidung möglich.

```abap showLineNumbers
DATA carrier_id TYPE /dmo/carrier_id VALUE 'LH'.

CASE carrier_id.
  WHEN 'LH' OR 'lh' OR 'Lh' OR 'lH'.
    WRITE'Lufthansa'.
  WHEN 'AA' OR 'aa' OR 'Aa' OR 'aA'.
    WRITE 'American Airlines'.
  WHEN OTHERS.
    WRITE carrier_id.
ENDCASE.
```

## Logische Operatoren und Vergleichsoperatoren

In ABAP sind beliebig tief geschachtelte Ausdrücke möglich. Die Verarbeitungsreihenfolge folgt dabei den herkömmlichen algebraischen und aussagenlogischen Regeln.

Die logische Und-Verknüpfung wird durch den Operator `AND`, die logische Oder-Verknüpfung durch den Operator `OR` und die logische Verneinung durch den Operator `NOT` realisiert. Als Vergleichsoperatoren stehen `=`, `<>`, `<`, `<=`, `>`, `>=` und `BETWEEN` zur
Verfügung. Zusätzlich können die Abfragen `IS INITIAL` und `IS NOT INITAL` verwendet werden.
