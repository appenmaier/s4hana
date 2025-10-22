---
title: RAP-01
description: ""
---

- Erstelle mit Hilfe des abgebildeten ER-Modells die Base View `ZI_???_Movie`, die BO Base View `ZR_???_MovieTP` sowie die BO Projection View `ZC_???_MovieTP`
- Erstelle für die BO Projection View `ZC_???_MovieTP` die Service Definition `ZUI_???_MOVIE`
- Erstelle für die Service Definition `ZUI_???_MOVIE` das Service Binding `ZUI_???_MOVIE_O2`
- Erstelle für die BO Projection View `ZC_???_MovieTP` die Metadata Extension `ZC_???_MOVIETP`

## ER-Modell

```mermaid
erDiagram
    "ZI_???_Movie" ||--|| ZABAP_MOVIE_A  : ""
    "ZR_???_MovieTP" ||--|| "ZI_???_Movie"  : ""
    "ZC_???_MovieTP" ||--|| "ZR_???_MovieTP"  : ""

    ZABAP_MOVIE_A {
        clnt(3) client PK
        raw(16) movie_uuid PK
        char(50) title
        char(10) genre
        numc(4) publishing_year
        int1(3) runtime_in_min
        sstr(255) image_url
        dec(21-7) created_at
        char(12) created_by
        dec(21-7) last_changed_at
        char(12) last_changed_by
    }

    "ZI_???_Movie" {
        raw(16) MovieUUID PK
        char(50) Title
        char(10) Genre
        numc(4) PublishingYear
        int1(3) RuntimeInMin
        sstr(255) ImageURL
        dec(21-7) CreatedAt
        char(12) CreatedBy
        dec(21-7) LastChangedAt
        char(12) LastChangedBy
    }

    "ZR_???_MovieTP" {
        raw(16) MovieUUID PK
        char(50) Title
        char(10) Genre
        numc(4) PublishingYear
        int1(3) RuntimeInMin
        sstr(255) ImageURL
        dec(21-7) CreatedAt
        char(12) CreatedBy
        dec(21-7) LastChangedAt
        char(12) LastChangedBy
    }

    "ZC_???_MovieTP" {
        raw(16) MovieUUID PK
        char(50) Title
        char(10) Genre
        numc(4) PublishingYear
        int1(3) RuntimeInMin
        sstr(255) ImageURL
        dec(21-7) CreatedAt
        char(12) CreatedBy
        dec(21-7) LastChangedAt
        char(12) LastChangedBy
    }
```

## Hinweise zur Metadata Extension `ZC_???_MOVIETP`

### Hinweise zum ListReport

- Filme sollen nach den Feldern `Genre`, `PublishingYear` und `RuntimeInMin` gefiltert werden können
- Filme sollen nach ihrem Titel mit einem Unschärfwert von 0,7 durchsucht werden können
- Als Tabellenüberschrift soll der Wert `Movies` angezeigt werden
- Standardmäßig sollen die Spalten `Title`, `Genre`, `PublishingYear` und `RuntimeInMin` angezeigt werden
- Als zusätzliche Spalte soll das verlinkte Bild des Feldes `ImageURL` angezeigt werden

### Hinweise zur ObjectPage

- Als Kopfzeilen-Titel soll der Wert des Feldes `Title` angezeigt werden
- Als Kopfzeilen-Beschreibung soll der Wert des Feldes `PublishingYear` angezeigt werden
- Als Kopfzeilen-Abbildung soll das verlinkte Bild des Feldes `ImageURL` angezeigt werden
- Die Felder `Title`, `Genre`, `PublishingYear`, `RuntimeInMin` und `ImageURL` sollen in der Feldgruppe `Movie Details` angezeigt werden
- Die Felder `MovieUUID`, `CreatedAt`, `CreatedBy`, `LastChangedAt` und `LastChangedBy` sollen in der Feldgruppe `Administrative Data` angezeigt werden
