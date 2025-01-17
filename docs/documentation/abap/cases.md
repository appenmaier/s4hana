---
title: Verzweigungen
description: ""
sidebar_position: 60
tags: []
---

## Einfachverzweigungen

Einfachverzweigungen können in ABAP entweder mit `IF...ELSE...ENDIF` oder dem Konstruktor-Operator `COND` realisiert werden. Dabei können als Prüfbedingung beliebig komplexe logische Ausdrücke angegeben werden.

```abap showLineNumbers
DATA flight_date TYPE /dmo/flight_date VALUE '20230104'.

IF flight_date BETWEEN '20230101' AND '20231231'.
  out->write( 'condition fulfilled' ).
ELSE.
  out->write( 'condition not fulfilled' ).
ENDIF.

out->write( COND #( WHEN flight_date BETWEEN '20230101' AND '20231231' THEN 'condition fulfilled'
                    ELSE 'condition not fulfilled' ) ).
```

:::tip Hinweis

Der ELSE-Zweig ist optional.

:::

## Logische Operatoren und Vergleichsoperatoren

In ABAP sind beliebig tief geschachtelte Ausdrücke möglich. Die Verarbeitungsreihenfolge folgt dabei den herkömmlichen algebraischen und aussagenlogischen Regeln.

Die logische Und-Verknüpfung wird in ABAP durch den Operator `AND`, die logische Oder-Verknüpfung durch den Operator `OR` und die logische Verneinung durch den Operator `NOT` realisiert. Als Vergleichsoperatoren stehen `=`, `<>`, `<`, `<=`, `>`, `>=` und `BETWEEN` zur
Verfügung. Zusätzlich können die Abfragen `IS INITIAL` und `IS NOT INITAL` sowie die Abfrage `BETWEEN...AND` verwendet werden.

## Mehrfachverzweigungen

Mehrfachverzweigungen (auch Fallunterscheidungen genanntn) können entweder mit verschachtelten Einfachverzweiungen, mit `CASE...WHEN...ENDCASE` oder mit dem Konstruktor-Operator `SWITCH` realisiert werden.

```abap showLineNumbers
DATA carrier_id TYPE /dmo/carrier_id VALUE 'LH'.

IF carrier_id = 'LH' OR carrier_id = 'lh' OR carrier_id = 'Lh' OR carrier_id = 'lH'.
  out->write( 'Lufthansa' ).
ELSEIF carrier_id = 'AA' OR carrier_id = 'aa' OR carrier_id = 'Aa' OR carrier_id = 'aA'.
  out->write( 'American Airlines' ).
ELSE.
  out->write( carrier_id ).
ENDIF.

CASE carrier_id.
  WHEN 'LH' OR 'lh' OR 'Lh' OR 'lH'.
    out->write( 'Lufthansa' ).
  WHEN 'AA' OR 'aa' OR 'Aa' OR 'aA'.
    out->write( 'American Airlines' ).
  WHEN OTHERS.
    out->write( carrier_id ).
ENDCASE.

out->write( SWITCH #( carrier_id WHEN 'LH' OR 'lh' OR 'Lh' OR 'lH' THEN 'Lufthansa'
                                 WHEN 'AA' OR 'aa' OR 'Aa' OR 'aA' THEN 'American Airlines'
                                 ELSE carrier_id ) ).
```
