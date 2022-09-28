---
title: Übungsaufgabe ABAP-07
description: ""
---

1. Erstelle die Funktionsgruppe `Z???_CUSTOMER`
2. Erstelle mit Hilfe der abgebildeten Schnittstellendefinition den Funktionsbaustein `Z_???_GET_BOOKING_WITH_CUSTOMER`, welcher Buchungsinformationen (Kundennummer, Kundentyp) sowie die dazugehörigen Kundeninformationen (Name, Stadt, Rabatt) zu einer 
eingehenden Buchung liest und zurückgibt. Verwende zum Lesen der Buchungsinformationen den Funktionsbaustein `Z_ABAP_GET_BOOKING` und zum Lesen der Kundeninformationen den Funktionsbaustein `Z_ABAP_GET_CUSTOMER`
3. Erstelle das ABAP-Programm `Z???_ABAP_07`, welches Buchungsinformationen (Kundennummer, Kundentyp) sowie die dazugehörigen Kundeninformationen (Name, Stadt, Rabatt) zu einer eingegebenen Buchung liest und auf dem Bildschirm ausgibt. Verwende zum Lesen der 
Informationen den Funktionsbaustein aus Aufgabenteil 2

## Schnittstellendefinition des Funktionsbausteins `Z_???_GET_BOOKING_WITH_CUSTOMER`
| Parameter               | Datentyp                   | Bezeichnung                     |
| ----------------------- | -------------------------- | ------------------------------- |
| I_CARRIER_ID            | S_CARR_ID                  | ID der Fluggesellschaft         |
| I_CONNECTION_ID         | S_CONN_ID                  | Verbindungsnummer               |
| I_FLIGHT_DATE           | S_DATE                     | Flugdatum                       |
| I_BOOKING_ID            | S_BOOK_ID                  | Buchungsnummer                  |
| E_BOOKING_WITH_CUSTOMER | Z???_BOOKING_WITH_CUSTOMER | Buchung mit Kundeninformationen |
| NO_DATA                 | -                          | Ausnahme: keine Daten           |

## Eingabe
```
Ausführen (F8)

ID der Fluggesellschaft: LH
Verbindungsnummer:       0400
Flugdatum:               31.03.2022
Buchungsnummer:          84
```

## Ausgabe
```
Kundennummer: 1
Kundentyp: B
Name: SAP SE
Stadt: Walldorf
Rabatt: 10%
```