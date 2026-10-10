---
title: ABAP-03
description: ""
---

Erstelle die ausführbare Klasse `ZCL_???_ABAP_03` als eine Kopie der Klasse `ZCL_???_ABAP_02`.
Die Klasse soll zur Durchschnittsbewertung einen passenden Text ausgeben.

## Informationen zu den Datenobjekten

| Datenobjekt | Datentyp |
| ----------- | -------- |
| rating_text | string   |

## Informationen zu den Bewertungstexten

| Durchschnittsbewertung | Bewertungstext |
| ---------------------- | -------------- |
| 0,00 bis 1,99          | Very Bad       |
| 2,00 bis 3,99          | Bad            |
| 4,00 bis 5,99          | Ok             |
| 6,00 bis 7,99          | Good           |
| 8,00 bis 10,00         | Very Good      |

## Beispielhafte Konsolenausgabe

```
Title: Fight Club
Genre: Thriller
Publishing Year: 1999
Runtime in Minutes: 139

Rating 1: 10
Rating 2: 9
Rating 3: 10
Rating 4: 10
Rating 5: 9

Average Rating: 9,60 (Very Good)
```
