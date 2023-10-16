---
title: ABAP-08
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Informationen den Tabellentypen `Z???_BOOKINGS`
2. Erweitere die Klasse `ZCL_???_HELPER` umd die statische Methode `Z???_BOOKINGS GET_BOOKINGS(CUSTOMER_ID: S_CUSTOMER)`, welche zu einer eingehenden Kundennummer alle Buchungen liest und zurückgibt. Verwende zum Lesen der Buchungen die statische Methode `ZABAP_BOOKINGS GET_BOOKINGS(CUSTOMER_ID: S_CUSTOMER)` der Klasse `ZCL_ABAP_HELPER`
3. Erstelle das ABAP-Programm `Z???_ABAP_08`, welches zu einer eingegebenen Kundennummer alle Buchungen liest und auf dem Bildschirm ausgibt. Verwende zum Lesen der Buchungen die statische Methode aus Aufgabenteil 2

## Informationen zum Tabellentyp `Z???_BOOKINGS`

- Zeilentyp: `ZABAP_BOOKING`
- Tabellenart: Standardtabelle
- Primärschlüssel: Standardschlüssel

## Eingabe

```
Ausführen (F8)

Kundenummer: 67
```

## Ausgabe

```
Buchungsummer, Fluggesellschaft, Verbindungsnummer, Flugdatum, Buchungspreis
988, LH, 0400, 21.08.2024, 745 EUR
987, UA, 3517, 30.06.2024, 623 EUR
743, AZ, 0789, 03.10.2023, 893 EUR
558, LH, 0401, 04.01.2022, 1.294 EUR
219, DL, 1699, 23.08.2020, 398 EUR
```
