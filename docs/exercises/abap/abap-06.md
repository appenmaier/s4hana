---
title: ABAP-06
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Komponentenübersicht den Strukturtypen `Z???_CUSTOMER`
2. Erstelle das ABAP-Programm `Z???_ABAP_06`, welches Kundeninformationen (Name, Stadt, Land) zu einer eingegebenen Kundennummer liest und auf dem Bildschirm ausgibt. Verwende zum Lesen der Kundeninformationen die Klassenmethode `ZABAP_CUSTOMER GET_CUSTOMER(CUSTOMER_ID: S_CUSTOMER)` der Klasse `ZCL_ABAP_HELPER`.

## Komponentenübersicht des Strukturtyps `Z???_CUSTOMER`

| Komponente  | Komponententyp | Bezeichnung  |
| ----------- | -------------- | ------------ |
| CUSTOMER_ID | S_CUSTOMER     | Kundennummer |
| NAME        | S_CUSTNAME     | Name         |
| CITY        | CITY           | Stadt        |
| COUNTRY     | S_COUNTRY      | Land         |

## Eingabe

```
Ausführen (F8)

Kundenummer: 67
```

## Ausgabe

```
Name:  Hans Maier
Stadt: Walldorf
Land:  DE
```
