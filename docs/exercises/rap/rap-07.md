---
title: RAP-07
description: ""
---

- Passe die Behavior Definition `ZI_???_MOVIETP` so an, dass die Felder `CreatedAt`, `CreatedBy`, `LastChangedAt`, `LastChangedBy`, `RatingDate` und `UserName` Anzeigefelder sind
- Passe die Restricted View `ZR_???_Movie` so an, dass die Werte der Felder `CreatedAt`, `CreatedBy`, `LastChangedAt` und `LastChangedBy` bei Änderungen automatisch ermittelt werden
- Implementiere eine Ermittlung für das Feld `UserName`
- Implementiere eine Ermittlung für das Feld `RatingDate`

## Hinweise zu den Ermittlungen

- Die Ermittlung für das Feld `UserName` soll dem Feld beim Erstellen einer Bewertung den aktuellen Beuntzernamen zuweisen
- Die Ermittlung für das Feld `RatingDate` soll dem Feld beim Erstellen einer Bewertung das aktuelle Systemdatum zuweisen
