---
title: RAP-06
description: ""
---

- Passe die Behavior Definition `ZI_???_MOVIETP` so an, dass die Felder `Title`, `Genre`, `Publishing Year` und `RuntimeInMin` Pflichtfelder beim Anlegen eines Filmes und Anzeigefelder beim Bearbeiten eines Filmes sind
- Implementiere eine Validierung für das Feld `Genre`

## Hinweis zur Validierung

Die Validierung für das Feld `Genre` soll beim Erstellen eines Films prüfen, ob das Genre einen gültigen Domänenfestwert beinhaltet

:::tip Hinweis

Entsprechende Meldungen können mit Hilfe der Klasse `ZCM_ABAP_MOVIE` erzeugt werden.

:::
