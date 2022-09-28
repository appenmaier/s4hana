---
title: Übungsaufgabe ABAP-11
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Informationen den globalen Tabellentypen `Z???_CUSTOMERS`
2. Erstelle mit Hilfe der abgebildeten Schnittstellendefinition den Funktionsbaustein `Z_???_GET_CUSTOMERS`, welcher zu einer eingehenden Stadt alle Kunden liest und zurückgibt
3. Erstelle das ABAP-Programm `Z???_ABAP_11`, welches zu einer eingegebenen Stadt alle Kunden liest und auf dem Bildschirm ausgibt. Verwende zum Lesen der Buchungen den Funktionsbaustein aus Aufgabenteil 2

## Informationen zum Tabellentypen `Z???_CUSTOMERS`
- Zeilentyp: `Z???_CUSTOMER`
- Tabellenart: Standardtabelle
- Primärschlüssel: Standardschlüssel

## Schnittstellendefinition des Funktionsbausteins `Z_???_GET_CUSTOMERS`
| Parameter   | Datentyp       | Bezeichnung           |
| ----------- | -------------- | --------------------- |
| I_CITY      | CITY           | Stadt                 |
| E_CUSTOMERS | Z???_CUSTOMERS | Kunden                |
| NO_DATA     | -              | Ausnahme: keine Daten |

## Eingabe
```
Ausführen (F8)

Stadt: Frankfurt
```

## Ausgabe
```
Kundennummer, Name, Rabatt (%)
2, Bruce Wayne, 20
37, Peter Parker, 10
85, Clark Kent, 40
```