---
title: ABAP-06
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Komponentenübersicht den Strukturtypen `Z???_CUSTOMER`
2. Erstelle das ABAP-Programm `Z???_ABAP_06`, welches Kundeninformationen (Name, Stadt, Rabatt) zu einer eingegebenen Kundennummer liest und auf dem Bildschirm ausgibt. Verwende zum Lesen der Kundeninformationen den Funktionsbaustein `Z_ABAP_GET_CUSTOMER`

## Komponentenübersicht des Strukturtypen `Z???_CUSTOMER`

| Komponente  | Komponententyp | Bezeichnung  |
| ----------- | -------------- | ------------ |
| CUSTOMER_ID | S_CUSTOMER     | Kundennummer |
| NAME        | S_CUSTNAME     | Name         |
| CITY        | CITY           | Stadt        |
| DISCOUNT    | S_DISCOUNT     | Rabatt       |

## Eingabe

```
Ausführen (F8)

Kundenummer: 1
```

## Ausgabe

```
Kundenummer: 1
Name: SAP SE
Stadt: Walldorf
Rabatt: 10%
```
