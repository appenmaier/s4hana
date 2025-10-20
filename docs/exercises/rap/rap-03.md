---
title: RAP-03
description: ""
---

- Erstelle die Interface View `ZI_???_AverageRating` und erweitere die BO Projection View `ZC_???_MovieTP` um das transiente Feld `AverageRating`
- Implementiere für das Feld `AverageRating` der BO Projection View `ZC_???_MovieTP` eine Hervorhebung
- Erweitere die Metadata Extension `ZC_???_MOVIETP` so, dass Filme absteigend sortiert nach dem Feld `AverageRating` ausgegeben werden
- Erweitere die Metadata Extension `ZC_???_RATINGTP` so, dass Bewertungen absteigend sortiert nach dem Feld `RatingDate` und - bei gleichem Bewertungsdatum - aufsteigend sortiert nach dem Feld `UserName` ausgegeben werden
- Erstelle die Interface View `ZI_???_GenreText` und erweitere die BO Projection View `ZC_???_MovieTP` um das Textelement `GenreText`

## Hinweis zur Interface View `ZI_???_AverageRating`

Die Interface View `ZI_???_AverageRating` soll die durchschnittliche Bewertung je Film ausgeben.

## Hinweis zur BO Projection View `ZC_???_MovieTP`

Die Hervorhebung für das Feld `AverageRating` soll so implementiert werden, dass Filme mit einer Durchschnittsbewertung größer 6,7 grün, Filme mit einer Durchschnittsbewertung zwischen 3,4 und 6,7 gelb und Filme mit einer Durchschnittsbewertung kleiner 3,4 rot dargestellt werden. Filme ohne Bewertung sollen schwarz dargestellt werden.

## Hinweis zur Interface View `ZI_???_GenreText`

Die Interface View `ZI_???_GenreText` soll alle Texte zu den Domänenfestwerten des Feldes `Genre` ausgeben.
