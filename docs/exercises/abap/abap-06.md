---
title: ABAP-06
description: ""
---

1. Erstelle die Klasse `ZCL_???_HELPER`
2. Erstelle die Klassenmethode `ZABAP_TRAVEL_WITH_CUSTOMER GET_TRAVEL_WITH_CUSTOMER(TRAVEL_ID: /DMO/TRAVEL_ID)`, welche Reiseinformationen sowie die dazugehörigen Kundeninformationen zu einer eingehenden Reisenummer liest und zurückgibt. Verwende zum Lesen der Reiseinformationen die Klassenmethode `ZABAP_TRAVEL GET_TRAVEL(TRAVEL_ID: /DMO/TRAVEL_ID)` der Klasse `ZCL_ABAP_HELPER` und zum Lesen der Kundeninformationen die Klassenmethode `ZABAP_CUSTOMER GET_CUSTOMER(CUSTOMER_ID: /DMO/CUSTOMER_ID)` der Klasse `ZCL_ABAP_HELPER`
3. Erstelle die ausführbare Klasse `ZCL_???_ABAP_06`, welche Reiseinformationen sowie die dazugehörigen Kundeninformationen zu einer eingegebenen Reisenummer liest und diese auf dem Bildschirm ausgibt. Verwende zum Lesen der Informationen die Klassenmethode aus Aufgabenteil 2

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
