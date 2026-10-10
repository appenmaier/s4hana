---
title: ABAP-05
description: ""
---

1. Erstelle die Domäne `Z???_GENRE`, die Datenelemente `Z???_TITLE`, `Z???_GENRE`, `Z???_PUBLISHING_YEAR` und `Z???_RUNTIME_IN_MIN` sowie den Strukturtypen `Z???_MOVIE` mit Hilfe der abgebildeten Informationen
2. Erstelle die ausführbare Klasse `ZCL_???_ABAP_05` als eine Kopie der Klasse `ZCL_???_ABAP_04`. Passe die Klasse wie folgt an: Ersetze die Datenobjekte für die Informationen zum Film durch eine entsprechende Struktur

## Informationen zur Domäne `Z???_GENRE`

- Bezeichner: Z???_GENRE
- Datentyp: CHAR
- Länge: 10
- Domänenfestwerte: THRILLER, ACTION, DRAMA, COMEDY,...

## Informationen zu den Datenelementen

| Bezeichner           | Datentyp                                | Feldbezeichner     |
| -------------------- | --------------------------------------- | ------------------ |
| Z???_TITLE           | Standardtyp (Datentyp: CHAR, Länge: 50) | Title              |
| Z???_GENRE           | Dictionary-Typ (Domäne: Z???_GENRE)     | Genre              |
| Z???_PUBLISHING_YEAR | Standardtyp (Datentyp: NUMC, Länge: 4)  | Publishing Year    |
| Z???_RUNTIME_IN_MIN  | Standardtyp (Datentyp: INT4)            | Runtime in Minutes |

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

Average Rating: 8,97 (Very Good)
```
