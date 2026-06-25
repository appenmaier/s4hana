---
title: RAP-08
description: ""
---

- Passe die Behavior Definition `ZR_???_MOVIETP` so an, dass das Feld `Rating` ein Anzeigefeld ist
- Erstelle die Abstract View `ZA_???_Rating` und implementiere eine Aktion zum Bewerten eines Filmes

## Hinweis zur Abstract View `ZA_???_Rating`

Die Abstract View `ZA_???_Rating` definiert einen Parameter für die Bewertung eines Films.

## Hinweis zur Aktion

Die Aktion zum Bewerten eines Films prüft zunächst, ob die eingehende Bewertung zwischen 1 und 10 liegt. Im Erfolgsfall wird die Bewertung dem Film hinzugefügt und eine Erfolgsmeldung ausgegeben, im Fehlerfall eine Fehlermeldung.

:::info Hinweis

Meldungen erzeugst du mit der Klasse `ZCM_ABAP_MOVIE`.

:::
