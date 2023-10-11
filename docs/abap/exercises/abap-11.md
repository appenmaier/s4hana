---
title: ABAP-11
description: ""
---

Erstelle das ABAP-Programm `Z???_ABAP_11`, welches eine einfach Kundenverwaltung ermöglicht. Erstelle dazu entsprechende Domänen, Datenelemente, Tabellentypen, transparente Tabellen und Funktionsbausteine.

## Mögliche Entwicklungsobjekte

| Entwicklungsobjekt      | Typ                  |
| ----------------------- | -------------------- |
| Z???\_INT4              | Domäne               |
| Z???\_CHAR25            | Domäne               |
| Z???\_ID                | Datenelement         |
| Z???\_NAME              | Datenelement         |
| Z???\_CITY              | Datenelement         |
| Z???\_DISCOUNT          | Datenelement         |
| Z???CUSTOMER            | Transparente Tabelle |
| Z???\_CUSTOMER          | Strukturtyp          |
| Z???\_CUSTOMERS         | Tabellentyp          |
| Z\_???\_INSERT_CUSTOMER | Funktionsbaustein    |
| Z\_???\_UPDATE_CUSTOMER | Funktionsbaustein    |
| Z\_???\_DELETE_CUSTOMER | Funktionsbaustein    |
| Z\_???\_GET_CUSTOMER    | Funktionsbaustein    |
| Z\_???\_GET_CUSTOMERS   | Funktionsbaustein    |

## Mögliche Eingabe

```
Ausführen (F8)

Kundenummer: 873
Name: Maier AG
Stadt: Frankfurt
Rabatt: 20

[ ] Kunde anlegen
[X] Kunde aktualisieren
[ ] Kunde löschen
[ ] Kunde ausgeben
[ ] Alle Kunden ausgeben
```

## Mögliche Ausgabe

```
Die Kundendaten zum Kunden 873 wurden erfolgreich aktualisiert.
```
