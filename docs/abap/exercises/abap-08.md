---
title: Übungsaufgabe ABAP-08
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Informationen den Tabellentypen `Z???_BOOKINGS`
2. Erstelle mit Hilfe der abgebildeten Schnittstellendefinition den Funktionsbaustein `Z_???_GET_BOOKINGS`, welcher zu einer eingehenden Kundennummer alle Buchungen liest und zurückgibt. Verwende zum Lesen der Buchungen den Funktionsbaustein 
`Z_ABAP_GET_BOOKINGS`
3. Erstelle das ABAP-Programm `Z???_ABAP_08`, welches zu einer eingegebenen Kundennummer alle Buchungen liest und auf dem Bildschirm ausgibt. Verwende zum Lesen der Buchungen den Funktionsbaustein aus Aufgabenteil 2

## Informationen zum Tabellentypen `Z???_BOOKINGS`
- Zeilentyp: `Z_ABAP_BOOKING`
- Tabellenart: Standardtabelle
- Primärschlüssel: Standardschlüssel

## Schnittstellendefinition des Funktionsbausteins `Z_???_GET_BOOKINGS`
| Parameter     | Datentyp      | Bezeichnung           |
| ------------- | ------------- | --------------------- |
| I_CUSTOMER_ID | S_CUSTOMER    | Kundennummer          |
| E_BOOKINGS    | Z???_BOOKINGS | Buchungen             |
| NO_DATA       | -             | Ausnahme: keine Daten |

## Eingabe
```
Ausführen (F8)

Kundenummer: 1
```

## Ausgabe
```
ID der Fluggesellschaft, Verbidnungsnummer, Flugdatum, Buchungsnummer
LH, 0400, 31.03.2022, 84
UA, 3517, 24.04.2021, 9
AA, 0017, 09.07.2018, 77
```