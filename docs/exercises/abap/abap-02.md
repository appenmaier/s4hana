---
title: ABAP-02
description: ""
---

Erstelle die ausführbare Klasse `ZCL_???_ABAP_02` als eine Kopie der Klasse `ZCL_???_ABAP_01`.
Die Klasse soll mehrere Bewertungen zum Film in entsprechend typisierten Datenobjekten speichern und diese sowie die Durchschnittsbewertung anschließend auf dem Bildschirm ausgeben.

## Informationen zu den Datenobjekten

| Datenobjekt    | Datentyp                        |
| -------------- | ------------------------------- |
| rating         | i                               |
| average_rating | p (Länge 3, Nachkommastellen 2) |

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

Average Rating: 9,60
```
