---
title: RAP-06
description: ""
---

- Passe die Behavior Definition `ZI_???_MOVIETP` so an, dass die Felder `Title`, `Genre`, `Publishing Year` und `RuntimeInMin` Pflichtfelder beim Anlegen eines Filmes und Anzeigefelder beim Bearbeiten eines Filmes sind
- Implementiere eine Validierung für das Feld `Genre`
- Implementiere eine Validierung für das Feld `Rating`

## Hinweise zu den Validierungen

- Die Validierung für das Feld `Genre` soll prüfen, ob das Genre einen gültigen Domänenfestwert beinhaltet
- Die Validierung für das Feld `Rating` soll prüfen, ob die Bewertung zwischen 1 und 10 liegt

:::tip Hinweis

Entsprechende Fehlermeldungen können mit Hilfe der Klasse `ZCM_ABAP_MOVIE` erzeugt werden.

:::
