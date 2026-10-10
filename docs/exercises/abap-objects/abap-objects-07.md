---
title: ABAP-Objects-07
description: ""
---

1. Erstelle die Klasse `ZCL_???_MEDIA_COLLECTION` anhand des abgebildeten Klassendiagramms
2. Passe die ausführbare Klasse `Z???_MAIN_MEDIA` wie folgt an:
    - Erstelle neben den Medien auch eine Mediensammlung
    - Füge die Medien der Mediensammlung hinzu
    - Gib alle Informationen der Mediensammlung auf dem Bildschirm aus

## Klassendiagramm

```mermaid
classDiagram
   zcl_media_collection o-- zcl_medium
   zcl_medium <|-- zcl_movie
   zcl_medium <|-- zcl_video_game

   class zcl_medium {
      -title: string
      -genre: string
      -publishing_year: numc4
      -rating: i
      +constructor(title: string, genre: string, publishing_year: numc4)
      +get_title() string      
      +get_genre() string      
      +get_publishing_year() numc4
      +set_rating(rating: i)
      +get_rating() i
      +to_string() string
   }

   class zcl_movie {
      -runtime_in_min: i
      +constructor(title: string, genre: string, publishing_year: numc4, runtime_in_min: i)
      +get_runtime_in_min() i
      +to_string() string
   }

   class zcl_video_game {
      -system: string
      +constructor(title: string, genre: string, publishing_year: numc4, system: string)
      +get_system() string
      +to_string() string
   }

   class zcl_media_collection {
      -name: string
      -media: zcl_medium[]
      +constructor(name: string)
      +get_name() string
      +get_media() zcl_medium[]
      +add_medium(medium: zcl_medium)
      +get_best_rated_movie() zcl_movie
   }
```

## Hinweise zur Klasse `ZCL_???_MEDIA_COLLECTION`

- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `ADD_MEDIUM` soll der Medienliste das eingehende Medium hinzufügen
- Die Methode `GET_BEST_RATED_MOVIE` soll den bestbewerteten Film zurückgeben

## Beispielhafte Konsolenausgabe

```
Media Collection: My Movie and Videogame Collection

Media:
Fight Club (1999): Thriller, 67%, 139min
Metroid Dread (NSW): Science-Fiction, 2021, 88%
Der Pate 2 (1974): Drama, 90%, 302min

Best Rated Movie: Der Pate 2
```
