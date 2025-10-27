---
title: RAP-02
description: ""
---

- Erstelle mit Hilfe des abgebildeten ER-Modells die Basic Interface View `ZI_???_Rating` sowie die BO Base View `ZR_???_RatingTP`
- Erweitere mit Hilfe des abgebildeten ER-Modells die BO Base View `ZR_???_MovieTP`
- Erstelle mit Hilfe des abgebildeten ER-Modells die BO Projection View `ZC_???_RatingTP`
- Erweitere mit Hilfe des abgebildeten ER-Modells die BO Projection View `ZC_???_MovieTP`
- Erweitere die Service Definition `ZUI_???_MOVIE` um die BO Projection View `ZC_???_RatingTP`
- Erstelle für die BO Projection View `ZC_???_RatingTP` die Metadata Extension `ZC_???_RATINGTP`
- Erweitere die Metadata Extension `ZC_???_MOVIETP` um die Anzeige von Bewertungen

## ER-Modell

```mermaid
erDiagram
    "ZI_???_Movie" ||--|| ZABAP_MOVIE_A  : ""
    "ZR_???_MovieTP" ||--|| "ZI_???_Movie"  : ""
    "ZC_???_MovieTP" ||--|| "ZR_???_MovieTP"  : ""
    "ZI_???_Rating" ||--|| ZABAP_RATING_A : ""
    "ZR_???_RatingTP" ||--|| "ZI_???_Rating" : ""
    "ZC_???_RatingTP" ||--|| "ZR_???_RatingTP" : ""
    "ZR_???_MovieTP" ||--o{ "ZR_???_RatingTP" : ""
    "ZC_???_MovieTP" ||--o{ "ZC_???_RatingTP" : ""

    ZABAP_RATING_A {
        clnt(3) client PK
        raw(16) rating_uuid PK
        raw(16) movie_uuid FK
        char(50) user_name
        int1(3) rating
        dats(8) rating_date
    }

    "ZI_???_Rating" {
        raw(16) RatingUUID PK
        raw(16) MovieUUID FK
        char(50) UserName
        int1(3) Rating
        dats(8) RatingDate
    }

    "ZR_???_RatingTP" {
        raw(16) RatingUUID PK
        raw(16) MovieUUID FK
        char(50) UserName
        int1(3) Rating
        dats(8) RatingDate
        association _Movie
    }

    "ZC_???_RatingTP" {
        raw(16) RatingUUID PK
        raw(16) MovieUUID FK
        char(50) UserName
        int1(3) Rating
        dats(8) RatingDate
        association _Movie
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
        association _Ratings
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
        association _Ratings
    }
```

## Hinweise zur Metadata Extension `ZC_???_RATINGTP`

### Hinweise zum ListReport

- Als Tabellenüberschrift soll der Wert `Ratings` angezeigt werden
- Standardmäßig sollen die Spalten `UserName`, `Rating` und `RatingDate` angezeigt werden

### Hinweise zur ObjectPage

- Als Kopfzeilen-Titel soll der Wert des Feldes `Rating` angezeigt werden
- Als Kopfzeilen-Beschreibung soll der Wert des Feldes `UserName` angezeigt werden
- Die Felder `UserName` und `Rating` sollen in der Feldgruppe `Rating Details` angezeigt werden
- Die Felder `RatingUUID`, `MovieUUID` und `RatingDate` sollen in der Feldgruppe `Administrative Data` angezeigt werden
