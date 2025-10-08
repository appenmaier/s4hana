---
title: ABAP-06
description: ""
---

1. Erstelle die Klasse `ZCL_???_HELPER`
2. Erstelle die Klassenmethode `GET_TRAVEL_WITH_CUSTOMER` anhand der abgebildeten Schnittstelleninformation wie folgt:
    - Lies mit Hilfe der Klassenmethode `GET_TRAVEL` der Klasse `ZCL_ABAP_HELPER` sowie der eingehenden Reisenummer die Informationen zur Reise
    - Lies mit Hilfe der Klassenmethode `GET_CUSTOMER` der Klasse `ZCL_ABAP_HELPER` sowie der eingelesenen Kundennummer die Informationen zum Kunden
    - Führe die Informationen der Reise sowie der Informationen zum Kunden zusammen und gib diese zurück
4. Erstelle die ausführbare Klasse `ZCL_???_ABAP_06`, welche Reiseinformationen sowie die dazugehörigen Kundeninformationen zu einer eingegebenen Reisenummer liest und diese auf dem Bildschirm ausgibt. Verwende zum Lesen der Informationen die Klassenmethode aus Aufgabenteil 2

## Schnittstelleninformation zur Klassenmethode _GET_TRAVEL_WITH_CUSTOMER_

| Art              | Name                 | Datentyp                   |
| ---------------- | -------------------- | -------------------------- |
| Import-Parameter | TRAVEL_ID            | /DMO/TRAVEL_ID             |
| Rückgabewert     | TRAVEL_WITH_CUSTOMER | ZABAP_TRAVEL_WITH_CUSTOMER |

## Beispielhafte Konsolenausgabe

```
Travel ID:   1827162
Start:       02.03.2023
End:         07.03.2023
Description: Business Trip to Metropolis
Customer ID: 19286
Name:        Bruce Wayne
City:        Gotham City
Country:     US
```

:::tip Hinweis

Entsprechende Reisen können der Datenbanktabelle /DMO/TRAVEL, entsprechende Kunden der Datenbanktabelle /DMO/CUSTOMER entnommen werden.

:::
