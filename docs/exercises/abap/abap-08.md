---
title: ABAP-08
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Informationen den Tabellentypen `Z???_TRAVELS`
2. Erweitere die Klasse `ZCL_???_HELPER` umd die statische Methode `Z???_TRAVELS GET_TRAVELS(CUSTOMER_ID: /DMO/CUSTOMER_ID)`, welche zu einer eingehenden Kundennummer alle Reisen liest und zurückgibt. Verwende zum Lesen der Reisen die statische Methode `ZABAP_TRAVELS GET_TRAVELS(CUSTOMER_ID: /DMO/CUSTOMER_ID)` der Klasse `ZCL_ABAP_HELPER`
3. Erstelle das ABAP-Programm `Z???_ABAP_08`, welches zu einer eingegebenen Kundennummer alle Reisen liest und auf dem Bildschirm ausgibt. Verwende zum Lesen der Reisen die statische Methode aus Aufgabenteil 2

## Informationen zum Tabellentyp `Z???_TRAVELS`

- Zeilentyp: `ZABAP_TRAVEL`
- Tabellenart: Standardtabelle
- Primärschlüssel: Standardschlüssel

## Eingabe

```
Ausführen (F8)

Kundenummer: 67
```

## Ausgabe

```
Reisenummer, Beginn der Reise, Ende der Reise, Beschreibung, Buchungsgebühr
988, 07.08.2024, 21.08.2024, Sommerurlaub Australien, 70 AUD
987, 24.06.2024, 30.06.2024, Pfingsturlaub Griechenland, 40 EUR
743, 30.09.2023, 03.10.2023, Kurztrip nach New York, 70 USD
558, 30.12.2022, 04.01.2022, Silvester Hamburg, 20 EUR
219, 07.08.2020, 23.08.2020, Italienurlaub, 60 EUR
```
