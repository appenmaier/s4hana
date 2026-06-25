---
title: RAP-06
description: ""
---

- Passe die Behavior Definition `ZR_???_MOVIETP` so an, dass die Felder `Title`, `Genre`, `Publishing Year` und `RuntimeInMin` Pflichtfelder beim Anlegen eines Filmes und Anzeigefelder beim Bearbeiten eines Filmes sind
- Implementiere eine Validierung für das Feld `Genre`

## Hinweis zur Validierung

Die Validierung für das Feld `Genre` prüft beim Erstellen eines Films, ob das Genre einen gültigen Domänenfestwert enthält.

:::info Hinweis

Meldungen erzeugst du mit der Klasse `ZCM_ABAP_MOVIE`.

:::
