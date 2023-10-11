---
title: ABAP-07
description: ""
---

1. Erstelle die Klasse `ZCL_???_HELPER`
2. Erstelle die statische Methode `ZABAP_TRAVEL_WITH_CUSTOMER GET_TRAVEL_WITH_CUSTOMER(TRAVEL_ID: /DMO/TRAVEL_ID)`, welche Reiseinformationen sowie die dazugehörigen Kundeninformationen zu einer eingehenden Reisenummer liest und zurückgibt. Verwende zum Lesen der Reiseinformationen die statische Methode `ZABAP_TRAVEL GET_TRAVEL(TRAVEL_ID: /DMO/TRAVEL_ID)` der Klasse `ZCL_ABAP_HELPER` und zum Lesen der Kundeninformationen die statische Methode `ZABAP_CUSTOMER GET_CUSTOMER(CUSTOMER_ID: /DMO/CUSTOMER_ID)` der Klasse `ZCL_ABAP_HELPER`
3. Erstelle das ABAP-Programm `Z???_ABAP_07`, welches Reiseinformationen sowie die dazugehörigen Kundeninformationen zu einer eingegebenen Reisenummer liest und auf dem Bildschirm ausgibt. Verwende zum Lesen der Informationen die statische Methode aus Aufgabenteil 2

## Eingabe

```
Ausführen (F8)

Reisenummer: 743
```

## Ausgabe

```
Beginn der Reise: 30.09.2023
Ende der Reise:   03.10.2023
Beschreibung:     Kurztrip nach New York
Kundennummer:     67
Erster Name:      Hans
Letzter Name:     Maier
Stadt:            Walldorf
Land:             DE
```
