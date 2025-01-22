---
title: ABAP-05
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Komponentenübersicht den Strukturtypen `Z???_CUSTOMER`
2. Erstelle die ausführbare Klasse `ZCL_???_ABAP_05`, welche Kundeninformationen (Vorname, Nachname, Stadt, Land) zu einer eingegebenen Kundennummer liest und diese auf dem Bildschirm ausgibt. Verwende zum Lesen der Kundeninformationen die Klassenmethode `ZABAP_CUSTOMER GET_CUSTOMER(CUSTOMER_ID: /DMO/CUSTOMER_ID)` der Klasse `ZCL_ABAP_HELPER`.

## Komponentenübersicht des Strukturtyps `Z???_CUSTOMER`

| Komponente   | Komponententyp   | Bezeichnung  |
| ------------ | ---------------- | ------------ |
| CUSTOMER_ID  | /DMO/CUSTOMER_ID | Kundennummer |
| FIRST_NAME   | /DMO/FIRST_NAME  | Vorname      |
| LAST_NAME    | /DMO/LAST_NAME   | Nachname     |
| CITY         | /DMO/CITY        | Stadt        |
| COUNTRY_CODE | LAND1            | Land         |

## Beispielhafte Konsolenausgabe

```
Customer ID: 19286
Name:        Bruce Wayne
City:        Gotham City
Country:     US
```
