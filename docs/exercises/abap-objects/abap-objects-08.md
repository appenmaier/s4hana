---
title: ABAP-Objects-08
description: ""
---

Passe die Klasse `ZCL_???_AIRPLANE` anhand des abgebildeten Klassendiagramms an.

## Klassendiagramm

```mermaid
classDiagram
   carrier o-- airplane
   airplane <|-- passenger_plane
   airplane <|-- cargo_plane

   class airplane {
      <<abstract>>
      -id: string
      -plane_type: string
      -empty_weight_in_tons: integer
      -number_of_airplanes: integer$
      +constructor(id: string, plane_type: string, empty_weight_in_tons: integer)
      +get_total_weight_in_tons() integer*
      +get_id() string
      +get_plane_type() string
      +get_empty_weight_in_tons() integer
      +get_number_of_airplanes() integer$
   }

   class passenger_plane {
      -seats: integer
      +constructor(id: string, plane_type: string, ewit: integer, seats: integer)
      +get_seats() integer
      +eject_seats(seats: integer)
      +get_total_weight_in_tons() integer
   }

   class cargo_plane {
      -cargo_in_tons: integer
      +constructor(id: string, plane_type: string, ewit: integer, cargo_in_tons: integer)
      +get_cargo_in_tons() integer
      +get_total_weight_in_tons() integer
   }

   class carrier {
      -name: string
      -airplanes: airplane[]
      +constructor(name: string)
      +add_airplane(airplane: airplane)
      +get_biggest_cargo_plane() cargo_plane
   }
```
