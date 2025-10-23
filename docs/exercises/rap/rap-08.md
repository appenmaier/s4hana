---
title: RAP-08
description: ""
---

- Passe die Behavior Definition `ZR_???_MOVIETP` so an, dass das Feld `Rating` ein Anzeigefeld ist
- Erstelle die Abstract View `ZA_???_Rating` und implementiere eine Aktion zum Bewerten eines Filmes

## Hinweis zur Abstract View `ZA_???_Rating`

Die Abstract View `ZA_???_Rating` soll einen Parameter für die Bewertung eines Filmes definieren.

## Hinweis zur Aktion

Die Aktion zum Bewerten eines Films soll zunächst prüfen, ob die eingehende Bewertung der Abstract View `ZA_???_Rating` zwischen 1 und 10 liegt. Im Erfolgsfall soll die eingehende Bewertung dem Film hinzugefügt und eine Erfolgsmeldung ausgegeben werden, im Fehlerfall soll eine Fehlermeldung ausgegeben werden.

:::tip Hinweis

Entsprechende Meldungen können mit Hilfe der Klasse `ZCM_ABAP_MOVIE` erzeugt werden.

:::
