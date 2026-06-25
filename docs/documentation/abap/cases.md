---
title: Verzweigungen und Fallunterscheidungen
description: ""
sidebar_position: 60
tags: []
---

Zur Steuerung des Programmablaufs stellt ABAP Verzweigungen und Fallunterscheidungen bereit. Als Prüfbedingung sind beliebig komplexe logische Ausdrücke möglich.

## Verzweigungen

Verzweigungen lassen sich in ABAP entweder mit `IF...ELSE...ENDIF` oder dem Konstruktor-Operator `COND` realisieren.

```abap showLineNumbers
DATA flight_date TYPE /dmo/flight_date VALUE '20230104'.

" IF...ELSE...ENDIF statement
IF flight_date BETWEEN '20230101' AND '20231231'.
  out->write( 'condition fulfilled' ).
ELSE.
  out->write( 'condition not fulfilled' ).
ENDIF.

" COND operator
out->write( COND #( WHEN flight_date BETWEEN '20230101' AND '20231231'
                    THEN 'condition fulfilled'
                    ELSE 'condition not fulfilled' ) ).
```

:::note

Der ELSE-Zweig ist optional.

:::

## Logische Operatoren und Vergleichsoperatoren

In ABAP sind beliebig tief geschachtelte Ausdrücke möglich. Die Verarbeitungsreihenfolge folgt dabei den üblichen algebraischen und aussagenlogischen Regeln.

Die logische Und-Verknüpfung wird mit `AND` realisiert, die Oder-Verknüpfung mit `OR` und die Verneinung mit `NOT`. Als Vergleichsoperatoren stehen `=`, `<>`, `<`, `<=`, `>`, `>=` und `BETWEEN` zur Verfügung. Zusätzlich können `IS INITIAL`, `IS NOT INITIAL` sowie `BETWEEN...AND` verwendet werden.

## Fallunterscheidungen

Fallunterscheidungen lassen sich entweder mit verschachtelten Verzweigungen, mit `CASE...WHEN...ENDCASE` oder mit dem Konstruktor-Operator `SWITCH` realisieren.

```abap showLineNumbers
DATA carrier_id TYPE /dmo/carrier_id VALUE 'LH'.

" IF...ELSE....ENDIF statement
IF carrier_id = 'LH' OR carrier_id = 'lh' OR carrier_id = 'Lh' OR carrier_id = 'lH'.
  out->write( 'Lufthansa' ).
ELSEIF carrier_id = 'AA' OR carrier_id = 'aa' OR carrier_id = 'Aa' OR carrier_id = 'aA'.
  out->write( 'American Airlines' ).
ELSE.
  out->write( carrier_id ).
ENDIF.

" CASE...WHEN...ENDCASE statement
CASE carrier_id.
  WHEN 'LH' OR 'lh' OR 'Lh' OR 'lH'.
    out->write( 'Lufthansa' ).
  WHEN 'AA' OR 'aa' OR 'Aa' OR 'aA'.
    out->write( 'American Airlines' ).
  WHEN OTHERS.
    out->write( carrier_id ).
ENDCASE.

" SWITCH operator
out->write( SWITCH #( carrier_id
                      WHEN 'LH' OR 'lh' OR 'Lh' OR 'lH' THEN 'Lufthansa'
                      WHEN 'AA' OR 'aa' OR 'Aa' OR 'aA' THEN 'American Airlines'
                      ELSE                                   carrier_id ) ).
```
