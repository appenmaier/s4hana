---
title: RAP-03
description: ""
---

- Erweitere die BO Projection View `ZC_???_Movie` um das transiente Feld `AverageRating` und implementiere für diese eine Hervorhebung
- Erweitere die Metadata Extension `ZC_???_MOVIE` so, dass Filme absteigend sortiert nach dem Feld `AverageRating` ausgegeben werden
- Erstelle die Interface View `ZI_???_GenreText` und erweitere die BO Projection View `ZC_???_Movie` um das Textelement `GenreText`

## Hinweise zum transienten Feld `AverageRating`

- Das Feld `AverageRating` soll die durchschnittliche Bewertung eines Filmes ausgeben
- Die Hervorhebung soll so implementiert werden, dass Filme mit einer Durchschnittsbewertung größer 6,7 grün, Filme mit einer Durchschnittsbewertung zwischen 3,4 und 6,7 gelb und Filme mit einer Durchschnittsbewertung kleiner 3,4 rot dargestellt werden

## Hinweis zur Interface View `ZI_???_GenreText`

Die Interface View `ZI_???_GenreText` soll alle Texte zu den Domänenfestwerten des Feldes `Genre` ausgeben.
