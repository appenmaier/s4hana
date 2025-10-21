---
title: RAP-03
description: ""
---

- Erstelle die Interface View `ZI_???_AverageRating` und erweitere die BO Projection View `ZC_???_MovieTP` um die transienten Felder `AverageRating` und `AverageRatingCriticality`
- Erweitere die Metadata Extension `ZC_???_MOVIETP` so, dass Filme absteigend sortiert nach dem Feld `AverageRating` und farbig (gemäß ihrere Wichtigkeit) ausgegeben werden
- Erweitere die Metadata Extension `ZC_???_RATINGTP` so, dass Bewertungen absteigend sortiert nach dem Feld `RatingDate` und - bei gleichem Bewertungsdatum - aufsteigend sortiert nach dem Feld `UserName` ausgegeben werden
- Erstelle die Interface View `ZI_???_GenreText` und erweitere die BO Projection View `ZC_???_MovieTP` um das Textelement `GenreText`

## Hinweis zur Interface View `ZI_???_AverageRating`

Die Interface View `ZI_???_AverageRating` soll die durchschnittliche Bewertung je Film sowie die dazugehörige Wichtigkeit ausgeben, wobei die Wichtigkeit gemäß der Formel _[Durchschnittsbewertung] > 6,7: 3, [Durchschnittsbewertung] > 3,4: 2 [Durchschnittsbewertung] > 0: 1, sonst: 0_ berechnet werden soll.

## Hinweis zur Interface View `ZI_???_GenreText`

Die Interface View `ZI_???_GenreText` soll alle Texte zu den Domänenfestwerten des Feldes `Genre` ausgeben.
