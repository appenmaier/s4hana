---
title: ABAP-Objects-08
description: ""
---

Passe die Klasse `ZCL_???_AIRPLANE` anhand des abgebildeten Klassendiagramms an.

## Klassendiagramm

```mermaid
classDiagram
    cl_carrier o-- cl_airplane
    cl_airplane <|-- cl_passenger_plane
    cl_airplane <|-- cl_cargo_plane

    class cl_airplane {
      <<abstract>>
      +name: string &#123read-only&#125
      +plane_type: string &#123read-only&#125
      +number_of_airplanes: i &#123read-only, static&#125
      +constructor(name: string, plane_type: string)
      +to_string()* string
    }

    class cl_passenger_plane {
      +number_of_seats: i &#123read-only&#125
      +constructor(name: string, plane_type: string, number_of_seats: i)
      +to_string() string
    }

    class cl_cargo_plane {
      +cargo_in_tons: i &#123read-only&#125
      +constructor(name: string, plane_type: string, cargo_in_tons: i)
      +to_string() string
    }

    class cl_carrier {
      +name: string &#123read-only&#125
      +airplanes: cl_airplane[*] &#123read-only&#125
      +constructor(name: string)
      +add_airplane(airplane: cl_airplane) void
      +get_biggest_cargo_plane() cl_cargo_plane
      +to_string() string
    }
```
