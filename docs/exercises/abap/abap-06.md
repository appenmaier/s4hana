---
title: ABAP-06
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Komponentenübersicht den Strukturtypen `Z???_CUSTOMER`
2. Erstelle das ABAP-Programm `Z???_ABAP_06`, welches Kundeninformationen (Erster Name, Letzter Name, Stadt, Land) zu einer eingegebenen Kundennummer liest und auf dem Bildschirm ausgibt. Verwende zum Lesen der Kundeninformationen die statische Methode `ZABAP_CUSTOMER GET_CUSTOMER(CUSTOMER_ID: /DMO/CUSTOMER_ID)` der Klasse `ZCL_ABAP_HELPER`.

## Komponentenübersicht des Strukturtyps `Z???_CUSTOMER`

| Komponente  | Komponententyp   | Bezeichnung  |
| ----------- | ---------------- | ------------ |
| CUSTOMER_ID | /DMO/CUSTOMER_ID | Kundennummer |
| FIRST_NAME  | /DMO/FIRST_NAME  | Erster Name  |
| LAST_NAME   | /DMO/LAST_NAME   | Letzter Name |
| CITY        | /DMO/CITY        | Stadt        |
| DISCOUNT    | LAND1            | Land         |

## Eingabe

```
Ausführen (F8)

Kundenummer: 67
```

## Ausgabe

```
Erster Name:  Hans
Letzter Name: Maier
Stadt:        Walldorf
Land:         DE
```
