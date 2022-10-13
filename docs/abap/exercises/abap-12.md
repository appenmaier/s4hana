---
title: Übungsaufgabe ABAP-12
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Feldübersicht die Domänen `Z???_INT4` und `Z???_CHAR25`, die Datenelemente `Z???_CUSTOMER_ID`, `Z???_NAME`, `Z???_CITY` und `Z???_DISCOUNT` sowie die transparente Tabelle `Z???CUSTOMER`
2. Erstelle das ABAP-Programm `Z???_ABAP_12`, welches das Lesen, Hinzufügen, Ändern und Löschen eines Kunden ermöglicht

## Feldübersicht der transparenten Tabelle `Z???CUSTOMER`
| Feld        | Schlüssel | Datenelement     | Domäne                | Bezeichnung  |
| ----------- | --------- | ---------------- | --------------------- | ------------ |
| MANDT       | X         | MANDT            | MANDT (CLNT,3)        | Mandant      |
| CUSTOMER_ID | X         | Z???_CUSTOMER_ID | Z???_INT4 (INT4)      | Kundennummer |
| NAME        |           | Z???_NAME        | Z???_CHAR25 (CHAR,25) | Name         |
| CITY        |           | Z???_CITY        | Z???_CHAR25 (CHAR,25) | Stadt        |
| DISCOUNT    |           | Z???_DISCOUNT    | Z???_INT4 (INT4)      | Rabatt       |