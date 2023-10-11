---
title: ABAP-05
description: ""
---

1. Erstelle die Klasse `ZCL_???_CALCULATOR`
2. Erstelle die statische Methode `ZABAP_DECIMAL CALCULATE_PERCENTAGE(PERCENTAGE: ZABAP_DECIMAL, BASE_VALUE: ZABAP_DECIMAL)` so, dass diese aufgrund eines eingehenden Prozentsatzes sowie einer eingehenden Basiszahl den entsprechenden Prozentwert berechnet und zurückgibt
3. Erweitere das ABAP-Programm aus Übungsaufgabe [ABAP-04](abap-04.md) so, dass auch Prozent- und Potenzberechnungen durchgeführt werden können. Verwende für die Potenzberechnung die statische Methode `ZABAP_DECIMAL CALCULATE_POWER(BASE: ZABAP_DECIMAL, EXPONENT: ZABAP_DECIMAL)` der Klasse `ZCL_ABAP_CALCULATOR` und für die Prozentberechnung die erstellte statische Methode aus Aufgabenteil 2
