---
title: ABAP-07
description: ""
---

1. Erstelle die Klasse `ZCL_???_HELPER`
2. Erstelle die Klassenmethode `ZABAP_BOOKING_WITH_CUSTOMER GET_BOOKING_WITH_CUSTOMER(CARRIER_ID: S_CARR_ID, CONNECTION_ID: S_CONN_ID, FLIGHT_DATE: S_DATE, BOOKING_ID: S_BOOK_ID)`, welche Buchungsinformationen sowie die dazugehörigen Kundeninformationen zu einer eingehenden Buchung liest und zurückgibt. Verwende zum Lesen der Buchungsinformationen die Klassenmethode `ZABAP_BOOKING GET_BOOKING(CARRIER_ID: S_CARR_ID, CONNECTION_ID: S_CONN_ID, FLIGHT_DATE: S_DATE, BOOKING_ID: S_BOOK_ID)` der Klasse `ZCL_ABAP_HELPER` und zum Lesen der Kundeninformationen die Klassenmethode `ZABAP_CUSTOMER GET_CUSTOMER(CUSTOMER_ID: S_CUSTOMER)` der Klasse `ZCL_ABAP_HELPER`
3. Erstelle das ABAP-Programm `Z???_ABAP_07`, welches Buchungsinformationen sowie die dazugehörigen Kundeninformationen zu einer eingegebenen Buchung liest und auf dem Bildschirm ausgibt. Verwende zum Lesen der Informationen die Klassenmethode aus Aufgabenteil 2

## Eingabe

```
Ausführen (F8)

Fluggesellschaft:  LH
Verbindungsnummer: 0400
Flugdatum:         07.03.2023
Buchungsnummer:    743
```

## Ausgabe

```
Fluggesellschaft:  LH
Verbindungsnummer: 0400
Flugdatum:         07.03.2023
Buchungsnummer:    743
Kundentyp:         P
Raucher:           X
Kundennummer:      67
Name:              Hans Maier
Stadt:             Walldorf
Land:              DE
```
