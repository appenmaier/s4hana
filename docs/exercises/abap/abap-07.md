---
title: ABAP-07
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Informationen den Tabellentypen `Z???_TRAVELS`
2. Erweitere die Klasse `ZCL_???_HELPER` und die Klassenmethode `Z???_TRAVELS GET_TRAVELS(CUSTOMER_ID: /DMO/CUSTOMER_ID)`, welche zu einer eingehenden Kundennummer alle Reisen liest und zurückgibt. Verwende zum Lesen der Reisen die Klassenmethode `ZABAP_TRAVELS GET_TRAVELS(CUSTOMER_ID: /DMO/CUSTOMER_ID)` der Klasse `ZCL_ABAP_HELPER`
3. Erstelle die ausführbare Klasse `ZCL_???_ABAP_07`, welche zu einer eingegebenen Kundennummer alle Reisen liest und diese auf dem Bildschirm ausgibt. Verwende zum Lesen der Reisen die Klassenmethode aus Aufgabenteil 2

## Informationen zum Tabellentyp `Z???_BOOKINGS`

- Zeilentyp: `/DMO/TRAVEL`
- Tabellenart: Standardtabelle
- Primärschlüssel: Standardschlüssel

## Ausgabe

```
Travel ID, Start, End, Description, Booking Fee in Euro
72643, 07.08.2020, 07.08.2020, Businesstrip to Berlin, 50
82751, 30.06.2021, 14.07.2021, Vacation in Italia, 70
91823, 20.12.2023, 31.12.2023, Vacation in New York, 100
```
