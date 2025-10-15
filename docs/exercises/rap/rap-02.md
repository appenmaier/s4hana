---
title: RAP-02
description: ""
---

- Erstelle mit Hilfe des abgebildeten ER-Modells die Restricted View `ZR_???_Rating` sowie die BO Base View `ZI_???_Rating`
- Erweitere mit Hilfe des abgebildeten ER-Modells die BO Base View `ZI_???_Movie`
- Erstelle mit Hilfe des abgebildeten ER-Modells die BO Projection View `ZC_???_Rating`
- Erweitere mit Hilfe des abgebildeten ER-Modells die BO Projection View `ZC_???_Movie`
- Erweitere die Service Definition `ZUI_???_MOVIE` um die BO Projection View `ZC_???_Rating`
- Erstelle für die BO Projection View `ZC_???_Rating` die Metadata Extension `ZC_???_RATING`
- Erweitere die Metadata Extension `ZC_???_MOVIE` um Bewertungen

## ER-Modell

```mermaid
erDiagram
    R_Movie ||--|| ZABAP_MOVIE_A  : ""
    I_Movie ||--|| R_Movie  : ""
    C_Movie ||--|| I_Movie  : ""
    R_Rating ||--|| ZABAP_RATING_A : ""
    I_Rating ||--|| R_Rating : ""
    C_Rating ||--|| I_Rating : ""
    I_Movie ||--o{ I_Rating : ""
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
    }

    I_Rating {
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

    I_Movie {
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
