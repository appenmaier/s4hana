---
title: ABAP-Objects-08
description: ""
---

1. Erstelle das Interface `ZIF_???_STREAMABLE`
2. Passe die Klassen `ZCL_???_MOVIE` und `ZCL_???_MEDIUM` anhand des abgebildeten Klassendiagramms an
3. Erstelle die Klasse `ZCL_???_STREAMING_PLATTFORM` anhand des abgebildeten Klassendiagramms
4. Passe die ausführbare Klasse `Z???_MAIN_MEDIA` wie folgt an:
    - Erstelle neben den Medien und der Mediensammlung auch einen Streaming-Plattform
    - Füge die Filme der Streaming-Plattform hinzu
    - Gib alle Informationen der Streaming-Plattform auf dem Bildschirm aus

## Klassendiagramm

```mermaid
classDiagram
   zif_stream <|.. zcl_movie
   zcl_streaming_platform o-- zif_stream
   zcl_media_collection o-- zcl_medium
   zcl_medium <|-- zcl_movie
   zcl_medium <|-- zcl_video_game

   class zcl_medium {
      <<abstract>>
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

   class zif_stream {
      <<interface>>
      get_runtime_in_min() i
      to_string() string
   }

   class zcl_streaming_platform {
      -name: string
      -streams: zif_stream[]
      +constructor(name: string)
      +get_name() string
      +get_streams() zcl_stream[]
      +add_stream(stream: zcl_stream)
      +get_longest_stream() zcl_stream
   }
```

## Hinweis zur Klasse `ZCL_???_STREAMING_PLATFORM`

- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `ADD_STREAM` soll der Streamliste den eingehenden Stream hinzufügen
- Die Methode `GET_LONGEST_STREAM` soll den längsten Stream zurückgeben

## Beispielhafte Konsolenausgabe

```
Media Collection: My Movie and Videogame Collection

Media:
Fight Club (1999): Thriller, 67%, 139min
Metroid Dread (NSW): Science-Fiction, 2021, 88%
The Godfather: Part II (1974): Drama, 90%, 302min

Best Rated Movie: The Godfather: Part II (1974): Drama, 90%, 302min
------------------------------------------------------------
Streaming Platform: Netflix

Streams:
Fight Club (1999): Thriller, 67%, 139min
The Godfather: Part II (1974): Drama, 90%, 302min (1974): Drama, 90%, 302min

Longest Stream: The Godfather: Part II (1974): Drama, 90%, 302min
```
