---
title: RAP-07
description: ""
---

- Passe die Behavior Definition `ZR_???_MOVIETP` so an, dass die Felder `CreatedAt`, `CreatedBy`, `LastChangedAt`, `LastChangedBy`, `RatingDate` und `UserName` Anzeigefelder sind
- Passe die Basic Interface View `ZI_???_Movie` so an, dass die Werte der Felder `CreatedAt`, `CreatedBy`, `LastChangedAt` und `LastChangedBy` bei Änderungen automatisch ermittelt werden
- Implementiere eine Ermittlung für das Feld `UserName`
- Implementiere eine Ermittlung für das Feld `RatingDate`

## Hinweise zu den Ermittlungen

- Die Ermittlung für das Feld `UserName` weist dem Feld beim Erstellen einer Bewertung den aktuellen Benutzernamen zu
- Die Ermittlung für das Feld `RatingDate` weist dem Feld beim Erstellen einer Bewertung das aktuelle Systemdatum zu
