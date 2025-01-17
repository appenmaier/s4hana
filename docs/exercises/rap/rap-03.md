---
title: RAP-03
description: ""
---

- Erweitere die BO Projection View für Filme um das transiente Feld `AverageRating` und implementiere für diese eine Hervorhebung
- Erweitere die Metadata Extension für Filme so, dass Filme absteigend sortiert nach dem Feld `AverageRating` ausgegeben werden
- Erstelle die Interface View `ZI_???_GenreText` und erweitere die BO Projection View für Bewertungen um das Textelement `GenreText`
- Erstelle die Interface View `ZI_???_RuntimeText` und erweitere die BO Projection View für Bewertungen um das Textelement `RuntimeText`

## Hinweise zum transienten Feld `AverageRating`

- Das Feld `AverageRating` soll die durchschnittliche Bewertung eines Filmes ausgeben
- Die Hervorhebung soll so implementiert werden, dass Filme mit einer Durchschnittsbewertung größer 6,7 grün, Filme mit einer Durchschnittsbewertung zwischen 3,4 und 6,7 gelb und Filme mit einer Durchschnittsbewertung kleiner 3,4 rot dargestellt werden

## Hinweis zur Interface View `ZI_???_GenreText`

Die Interface View `ZI_???_GenreText` soll alle Texte zu den Domänenfestwerten des Feldes `Genre` ausgeben.

## Hinweis zur Interface View `ZI_???_RuntimeText`

Die Interface View `ZI_???_RuntimeText` soll für Filme mit einer Laufzeit von mehr als 150 Minuten den Wert `Hinweis: Überlänge` und für Filme mit einer Laufzeit von weniger als 30 Minuten den Wert `Hinweis: Kurzfilm` ausgeben.
