---
title: ABAP-Objects-07
description: ""
---

1. Lege den globalen Tabellentypen `Z???_AIRPLANES` anhand der abgebildeten Informationen an
2. Erstelle die Klasse `ZCL_???_CARRIER` anhand des abgebildeten Klassendiagramms
3. Passe das ABAP-Programm `Z???_MAIN_AIRPLANES` so an, dass neben den Flugzeugen auch eine Fluggesellschaft erzeugt wird. Die Flugzeuge sollen der Fluggesellschaft zugewiesen und alle Informationen der Fluggesellschaft auf dem Bildschirm ausgegeben
   werden

## Informationen zum globalen Tabellentyp `Z???_AIRPLANES`

- Referenztyp: `ZCL_???_AIRPLANE`
- Tabellenart: Standardtabelle
- Primärschlüssel: Standardschlüssel

## Klassendiagramm

```mermaid
classDiagram
    cl_carrier o-- cl_airplane
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

    class cl_carrier {
      +name: string &#123read-only&#125
      +airplanes: cl_airplane[*] &#123read-only&#125
      +constructor(name: string)
      +add_airplane(airplane: cl_airplane) void
      +get_biggest_cargo_plane() cl_cargo_plane
      +to_string() string
    }
```

## Hinweise zur Klasse `ZCL_???_CARRIER`

- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `ZCL_???_CARGO_PLANE GET_BIGGEST_CARGO_PLANE()` soll das Frachtflugzeug mit der größten Frachtkapazität zurückgeben
- Die Methode `STRING TO_STRING()` soll alle Instanzattribute zu einer Zeichenkette zusammenfassen und diese zurückgeben
