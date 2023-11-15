---
title: RAP-05
description: ""
---

- Erstelle die Interface View `ZI_???_GenreVH` und erweitere die BO Projection View für Filme um eine Wertehilfe für das Feld `Genre`
- Implementiere eine Validierung für das Feld `Genre`
- Implementiere eine Validierung für das Feld `PublishingYear`
- Implementiere eine Validierung für das Feld `Rating`
- Erstelle die Abstract View `ZA_???_Rating` und implementiere eine Aktion zum Bewerten eines Filmes

## Hinweis zur Interface View `ZI_???_GenreVH`

Die Interface View `ZI_???_GenreVH` soll die Domänenfestwerte des Feldes `Genre` samt Beschreibung ausgeben.

## Hinweis zur Abstract View `ZA_???_Rating`

Die Abstract View `ZA_???_Rating` soll einen Parameter für die Bewertung eines Filmes definieren.

## Hinweise zu den Validierungen

- Die Validierung für das Feld `Genre` soll prüfen, ob das Genre einen gültigen Domänenfestwert beinhaltet
- Die Validierung für das Feld `PublishingYear` soll prüfen, ob das Jahr höchstens in der Gegenwart liegt
- Die Validierung für das Feld `Rating` soll prüfen, ob die Bewertung zwischen 1 und 5 liegt
