---
title: ABAP-Objects-06
description: ""
---

1. Erstelle die Klassen `ZCL_???_PASSENGER_PLANE` und `ZCL_???_CARGO_PLANE` anhand des abgebildeten Klassendiagramms
2. Passe das ABAP-Programm `Z???_MAIN_AIRPLANES` so an, dass statt gewöhnlichen Flugzeugen Passagier- und Frachtflugzeuge erzeugt werden

## Klassendiagramm

```mermaid
classDiagram
    cl_airplane <|-- cl_passenger_plane
    cl_airplane <|-- cl_cargo_plane

    class cl_airplane {
      +name: string &#123read-only&#125
      +plane_type: string &#123read-only&#125
      +number_of_airplanes: i &#123read-only, static&#125
      +constructor(name: string, plane_type: string)
      +to_string() string
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
```

## Hinweise zur Klasse `ZCL_???_CARGO_PLANE` und zur Klasse `ZCL_???_PASSENGER_PLANE`

- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `STRING TO_STRING()` soll alle Instanzattribute zu einer Zeichenkette zusammenfassen und diese zurückgeben
