---
title: RAP-02
description: ""
---

- Erstelle mit Hilfe des abgebildeten ER-Modells die BO Base View `ZR_???_Rating`
- Erweitere mit Hilfe des abgebildeten ER-Modells die BO Base View für Filme
- Erstelle mit Hilfe des abgebildeten ER-Modells für die BO Base View für Bewertungen die BO Projection View `ZC_???_Rating`
- Erweitere mit Hilfe des abgebildeten ER-Modells die BO Projection View für Filme
- Erweitere die Service Definition für Filme um Bewertungen
- Erstelle für die BO Projection View für Bewertungen die Metadata Extension `ZC_???_RATING`
- Erweitere die Metadata Extension für Filme um Bewertungen

## ER-Modell

```mermaid
erDiagram
    R_Movie ||--|| ZABAP_MOVIE_A  : ""
    C_Movie ||--|| R_Movie  : ""
    R_Rating ||--|| ZABAP_RATING_A : ""
    C_Rating ||--|| R_Rating : ""
    R_Movie ||--o{ R_Rating : ""
    C_Movie ||--o{ C_Rating : ""

    ZABAP_RATING_A {
        clnt(3) client PK
        raw(16) rating_uuid PK
        raw(16) movie_uuid FK
        char(50) user_name
        int1(3) rating
        dats(8) rating_date
    }

    R_Rating {
        raw(16) RatingUUID PK
        raw(16) MovieUUID FK
        char(50) UserName
        int1(3) Rating
        dats(8) RatingDate
        association _Movie
    }

    C_Rating {
        raw(16) RatingUUID PK
        raw(16) MovieUUID FK
        char(50) UserName
        int1(3) Rating
        dats(8) RatingDate
        association _Movie
    }

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

    R_Movie {
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
        association _Ratings
    }

    C_Movie {
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
        association _Ratings
    }
```

## Hinweise zur Metadata Extension `ZC_???_RATING`

### Hinweise zum ListReport

- Als Tabellenüberschrift soll der Wert `Ratings` angezeigt werden
- Standardmäßig sollen die Spalten `UserName`, `Rating` und `RatingDate` angezeigt werden

### Hinweise zur ObjectPage

- Als Kopfzeilen-Titel soll der Wert des Feldes `Rating` angezeigt werden
- Als Kopfzeilen-Beschreibung soll der Wert des Feldes `UserName` angezeigt werden
- Die Felder `UserName` und `Rating` sollen in der Feldgruppe `Rating Details` angezeigt werden
- Die Felder `RatingUUID`, `MovieUUID` und `RatingDate` sollen in der Feldgruppe `Administrative Data` angezeigt werden
