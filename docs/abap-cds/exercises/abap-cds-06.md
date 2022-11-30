---
title: Übungsaufgabe ABAP-CDS-06
description: ''
---

Passe mit Hilfe der abgebildeten grafischen Ansicht die ABAP CDS View `Z???_BookingWithCustomer` an.

## Grafische Ansicht
![image](https://user-images.githubusercontent.com/47243617/204781259-a3d62299-beac-4ee6-9259-c834d01c91e5.png)

## Hinweise
- Das Feld `Name` soll die verketteten Felder `FORM` und `NAME` zurückgeben
- Die Berechnung des Feldes `Discount` soll durch die arithmetische Funktion division() erfolgen
- Alle Beträge sollen in USD zurückgegeben werden (Stichtag: Buchungsdatum)
- Das Feld `DaysAhead` soll die Anzahl an Tagen zwischen dem Buchungsdatum und dem Flugdatum zurückgeben
- Selbst definierte Felder benötigen Annotationen für Bezeichner und Quick-Info
