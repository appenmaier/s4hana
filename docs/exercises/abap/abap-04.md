---
title: ABAP-04
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Informationen das Datenelement `Z???_DECIMAL`
2. Erstelle die Klasse `ZCL_???_CALCULATOR`
3. Erstelle die Klassenmethode `Z???_DECIMAL CALCULATE_PERCENTAGE(PERCENTAGE: Z???_DECIMAL, BASE_VALUE: Z???_DECIMAL)` so, dass diese aufgrund eines eingehenden Prozentsatzes sowie einer eingehenden Basiszahl den entsprechenden Prozentwert berechnet und zurückgibt
4. Erweitere die ausführbare Klasse aus Übungsaufgabe [ABAP-03](abap-03.md) so, dass auch Prozent- und Potenzberechnungen durchgeführt werden können. Verwende für die Potenzberechnung die Klassenmethode `ZABAP_DECIMAL CALCULATE_POWER(BASE: ZABAP_DECIMAL, EXPONENT: ZABAP_DECIMAL)` der Klasse `ZCL_ABAP_CALCULATOR` und für die Prozentberechnung die erstellte Klassenmethode aus Aufgabenteil 3

## Informationen zum Datenelement `Z???_DECIMAL`

- Category: Predefined Type
- Data Type: DEC
- Length: 15
- Decimals: 2
- Field Labels: Decimal Number
