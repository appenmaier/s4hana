---
title: ABAP-04
description: ""
---

Erstelle die ausführbare Klasse `ZCL_???_ABAP_04` als eine Kopie der Klasse `ZCL_???_ABAP_03`. Passe die Klasse wie folgt an:
- Erstelle einen Zufallszahlengenerator für Bewertungen
- Ersetze die statischen Bewertungen durch 100 zufällige Bewertungen

## Informationen zu den Datenobjekten

| Datenobjekt      | Datentyp           |
| ---------------- | ------------------ |
| rating_generator | cl_abap_random_int |
| rating           | i                  |
| total_rating     | i                  |
| co_ratings       | i (Wert: 100)      |

## Beispielhafte Konsolenausgabe

```
Title: Fight Club
Genre: Thriller
Publishing Year: 1999
Runtime in Minutes: 139

Average Rating: 9,53 (Very Good)
```
