---
title: ABAP-04
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Informationen das Datenelement `Z???_DECIMAL`
2. Erstelle die Klasse `ZCL_???_CALCULATOR`
3. Erstelle die Klassenmethode `CALCULATE_PERCENTAGE` anhand der abgebildeten Schnittstelleninformation so, dass diese aufgrund eines eingehenden Prozentsatzes sowie einer eingehenden Basiszahl den entsprechenden Prozentwert berechnet und zurückgibt
5. Erweitere die ausführbare Klasse aus Übungsaufgabe [ABAP-03](abap-03.md) so, dass auch Prozent- und Potenzberechnungen durchgeführt werden können. Verwende für die Potenzberechnung die Klassenmethode `CALCULATE_POWER` der Klasse `ZCL_ABAP_CALCULATOR` und für die Prozentberechnung die erstellte Klassenmethode aus Aufgabenteil 3

## Schnittstelleninformation zur Klassenmethode _CALCULATE_PERCENTAGE_

| Art              | Name             | Datentyp     |
| -----------------| ---------------- | ------------ |
| Import-Parameter | PERCENTAGE       | Z???_DECIMAL |
| Import-Parameter | BASE             | Z???_DECIMAL |
| Rückgabewert     | PERCENTAGE_VALUE | Z???_DECIMAL |

## Informationen zum Datenelement `Z???_DECIMAL`

- Category: Predefined Type
- Data Type: DEC
- Length: 15
- Decimals: 2
- Field Labels: Decimal Number
