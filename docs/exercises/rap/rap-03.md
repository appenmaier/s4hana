---
title: RAP-03
description: ""
---

- Erstelle die Interface View `ZI_???_AverageRating` und erweitere die BO Projection View `ZC_???_MovieTP` um die transienten Felder `AverageRating` und `AverageRatingCriticality`
- Erweitere die Metadata Extension `ZC_???_MOVIETP` so, dass Filme absteigend nach `AverageRating` sortiert und farbig (gemäß ihrer Wichtigkeit) angezeigt werden
- Erweitere die Metadata Extension `ZC_???_RATINGTP` so, dass Bewertungen absteigend nach `RatingDate` und – bei gleichem Bewertungsdatum – aufsteigend nach `UserName` sortiert angezeigt werden
- Erstelle die Interface View `ZI_???_GenreText` und erweitere die BO Projection View `ZC_???_MovieTP` um das Textelement `GenreText`

## Hinweis zur Interface View `ZI_???_AverageRating`

Die Interface View `ZI_???_AverageRating` gibt die durchschnittliche Bewertung je Film sowie die dazugehörige Wichtigkeit aus. Berechne die Wichtigkeit nach der Formel _[Durchschnittsbewertung] > 6,7: 3, [Durchschnittsbewertung] > 3,4: 2, [Durchschnittsbewertung] > 0: 1, sonst: 0_.

## Hinweis zur Interface View `ZI_???_GenreText`

Die Interface View `ZI_???_GenreText` gibt alle Texte zu den Domänenfestwerten des Feldes `Genre` aus.
