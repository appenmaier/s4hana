---
title: ABAP-07
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Informationen den Tabellentypen `Z???_TRAVELS`
2. Erweitere die Klasse `ZCL_???_HELPER` und die Klassenmethode `GET_TRAVELS`, welche zu einer eingehenden Kundennummer alle Reisen liest und zurückgibt. Verwende zum Lesen der Reisen die Klassenmethode `GET_TRAVELS` der Klasse `ZCL_ABAP_HELPER`
3. Erstelle die ausführbare Klasse `ZCL_???_ABAP_07`, welche zu einer eingegebenen Kundennummer alle Reisen liest und diese auf dem Bildschirm ausgibt. Verwende zum Lesen der Reisen die Klassenmethode aus Aufgabenteil 2

## Schnittstelleninformation zur Klassenmethode _GET_TRAVELS_

| Art              | Name        | Datentyp         |
| ---------------- | ----------- | ---------------- |
| Import-Parameter | CUSTOMER_ID | /DMO/CUSTOMER_ID |
| Rückgabewert     | TRAVELS     | Z???_TRAVELS     |

## Informationen zum Tabellentyp `Z???_TRAVELS`

- Zeilentyp: `/DMO/TRAVEL`
- Tabellenart: Standardtabelle
- Primärschlüssel: Standardschlüssel

:::tip Hinweis

Entsprechende Kunden können der Datenbanktabelle /DMO/CUSTOMER entnommen werden.

:::
