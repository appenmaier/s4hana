---
title: ABAP-05
description: ""
---

1. Erstelle mit Hilfe der abgebildeten Informationen die Domäne `Z???_GENRE`
2. Erstelle mit Hilfe der abgebildeten Informationen die Datenelemente `Z???_TITLE`, `Z???_GENRE`, `Z???_PUBLISHING_YEAR` und `Z???_RUNTIME_IN_MIN`
3. Erstelle mit Hilfe der abgebildeten Informationen den Strukturtypen `Z???_MOVIE`
4. Erstelle die ausführbare Klasse `ZCL_???_ABAP_05` als eine Kopie der Klasse `ZCL_???_ABAP_04`. Ersetze dort die bisherigen Datenobjekte für die Filminformationen durch eine entsprechende Struktur.

## Informationen zur Domäne `Z???_GENRE`

- Bezeichner: Z???_GENRE
- Datentyp: CHAR
- Länge: 10
- Domänenfestwerte: THRILLER, ACTION, DRAMA

## Informationen zu den Datenelementen

| Bezeichner           | Datentyp                     | Feldbezeichner     |
| -------------------- | ---------------------------- | ------------------ |
| Z???_TITLE           | Standardtyp CHAR (Länge: 50) | Title              |
| Z???_GENRE           | Domäne Z???_GENRE            | Genre              |
| Z???_PUBLISHING_YEAR | Standardtyp NUMC (Länge: 4)  | Publishing Year    |
| Z???_RUNTIME_IN_MIN  | Standardtyp INT4             | Runtime in Minutes |

## Informationen zum Strukturtyp `Z???_MOVIE`

| Komponente      | Komponententyp       |
| --------------- | -------------------- |
| title           | Z???_TITLE           |
| genre           | Z???_GENRE           |
| publishing_year | Z???_PUBLISHING_YEAR |
| runtime_in_min  | Z???_RUNTIME_IN_MIN  |

## Beispielhafte Konsolenausgabe

```
Title: Fight Club
Genre: Thriller
Publishing Year: 1999
Runtime in Minutes: 139

Average Rating: 9,70 (Very Good)
```
