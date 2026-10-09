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
   airplane <|-- fighter_jet

   class airplane {
      <<abstract>>
      -id: string
      -plane_type: string
      -empty_weight_in_tons: decimal
      -number_of_airplanes: integer$
      +constructor(id: string, plane_type: string, empty_weight_in_tons: decimal)
      +get_id() string
      +get_plane_type() string
      +get_empty_weight_in_tons() decimal
      +get_total_weight_in_tons() decimal*
      +get_number_of_airplanes() integer$
   }

   class passenger_plane {
      -seats: integer
      +constructor(id: string, plane_type: string, empty_weight_in_tons: decimal, seats: integer)
      +get_seats() integer
      +eject_seats(seats: integer)
      +get_total_weight_in_tons() decimal
   }

   class fighter_jet {
      -vomit_factor: decimal
      +constructor(id: string, plane_type: string, empty_weight_in_tons: decimal)
      +do_a_barrel_roll()
      +get_total_weight_in_tons() decimal
   }

   class carrier {
      -name: string
      -airplanes: airplane[]
      +constructor(name: string)
      +add_airplane(airplane: airplane)
      +get_biggest_passenger_plane() passenger_plane
   }
```
