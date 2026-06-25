---
title: RAP-01
description: ""
---

- Erstelle mit Hilfe des [verlinkten Laufzeitartefaktmodells](https://github.com/appenmaier/abap_movie?tab=readme-ov-file#laufzeitartefakte) die Basic Interface View `ZI_???_Movie`, die BO Base View `ZR_???_MovieTP` sowie die BO Projection View `ZC_???_MovieTP`
- Erstelle für die BO Projection View `ZC_???_MovieTP` die Service Definition `ZUI_???_MOVIE`
- Erstelle für die Service Definition `ZUI_???_MOVIE` das Service Binding `ZUI_???_MOVIE_O2`
- Erstelle für die BO Projection View `ZC_???_MovieTP` die Metadata Extension `ZC_???_MOVIETP`

## Hinweise zur Metadata Extension `ZC_???_MOVIETP`

### Hinweise zum ListReport

- Filme können nach den Feldern `Genre`, `PublishingYear` und `RuntimeInMin` gefiltert werden
- Filme können nach ihrem Titel mit einem Unschärfewert von 0,7 durchsucht werden
- Als Tabellenüberschrift wird der Wert `Movies` angezeigt
- Standardmäßig werden die Spalten `Title`, `Genre`, `PublishingYear` und `RuntimeInMin` angezeigt
- Als zusätzliche Spalte wird das verlinkte Bild des Feldes `ImageURL` angezeigt

### Hinweise zur ObjectPage

- Als Kopfzeilen-Titel wird der Wert des Feldes `Title` angezeigt
- Als Kopfzeilen-Beschreibung wird der Wert des Feldes `PublishingYear` angezeigt
- Als Kopfzeilen-Abbildung wird das verlinkte Bild des Feldes `ImageURL` angezeigt
- Die Felder `Title`, `Genre`, `PublishingYear`, `RuntimeInMin` und `ImageURL` werden in der Feldgruppe `Movie Details` angezeigt
- Die Felder `MovieUUID`, `CreatedAt`, `CreatedBy`, `LastChangedAt` und `LastChangedBy` werden in der Feldgruppe `Administrative Data` angezeigt
