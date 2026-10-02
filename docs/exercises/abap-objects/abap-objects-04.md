---
title: ABAP-Objects-04
description: ""
---

1. Passe die Klasse `ZCL_???_AIRPLANE` anhand des abgebildeten Klassendiagramms an
2. Passe die ausführbare Klasse `ZCL_???_MAIN_AIRPLANES` so an, dass vor und nach den Objekterzeugungen das Klassenattribut `NUMBER_OF_AIRPLANES` ausgegeben wird

## Klassendiagramm

```mermaid
classDiagram
   class airplane {
      -id: string
      -plane_type: string
      -empty_weight_in_tons: i
      -number_of_airplanes: i$
      +constructor(id: string, plane_type: string, empty_weight_in_tons: i)
      +get_id() string
      +get_plane_type() string
      +get_empty_weight_in_tons() i
      +get_number_of_airplanes() i$
   }
```

## Hinweise zur Klasse `ZCL_???_AIRPLANE`

Passe den Konstruktor so an, dass beim Erzeugen eines Flugzeugs die Anzahl der Flugzeuge um Eins erhöht wird
