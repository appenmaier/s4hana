---
title: ABAP-Objects-08
description: ""
---

1. Erstelle das Interface `ZIF_???_STREAMABLE`
2. Passe die Klassen `ZCL_???_MOVIE` und `ZCL_???_MEDIUM` anhand des abgebildeten Klassendiagramms an
3. Erstelle die Klasse `ZCL_???_STREAMING_PLATTFORM` anhand des abgebildeten Klassendiagramms
4. Passe die ausführbare Klasse `Z???_MAIN_MEDIA` wie folgt an:
    - so an, dass neben den Flugzeugen und der Fluggesellschaft auch ein Reisebüro erzeugt wird. Weise die Fluggesellschaft dem Reisebüro zu und gib alle Informationen des Reisebüros auf dem Bildschirm aus.

## Klassendiagramm

```mermaid
classDiagram
   zif_stream <|.. zcl_movie
   zcl_streaming_plattform o-- zif_stream
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
   }

   class zcl_streaming_plattform {
      -name: string
      -streams: zif_streamable[]
      +constructor(name: string)
      +get_name() string
      +get_streams() zcl_stream[]
      +add_stream(stream: zcl_stream)
      +get_longest_stream() zcl_stream
   }
```

## Hinweis zur Klasse `ZCL_???_STREAMING_PLATTFORM`

- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `ADD_STREAM` soll der Streamliste den eingehenden Stream hinzufügen
- Die Methode `GET_LONGEST_STREAM` soll den längsten Stream zurückgeben
