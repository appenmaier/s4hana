---
title: ABAP-Objects-07
description: ""
---

1. Lege den globalen Tabellentypen `Z???_AIRPLANES` anhand der abgebildeten Informationen an
2. Erstelle die Klasse `ZCL_???_CARRIER` anhand des abgebildeten Klassendiagramms
3. Passe das ABAP-Programm `Z???_MAIN_AIRPLANES` so an, dass neben den Flugzeugen auch eine Fluggesellschaft erzeugt wird. Die Flugzeuge sollen der Fluggesellschaft zugewiesen und alle Informationen der Fluggesellschaft auf dem Bildschirm ausgegeben
   werden

## Informationen zum globalen Tabellentyp `Z???_AIRPLANES`

- Zeilentyp: `ZCL_???_AIRPLANE` (Reference to Class/Interface)
- Tabellenart: Standardtabelle
- Primärschlüssel: Standardschlüssel

## Klassendiagramm

```mermaid
classDiagram
   cl_carrier o-- cl_airplane
   cl_airplane <|-- cl_passenger_plane
   cl_airplane <|-- cl_cargo_plane

   class cl_airplane {
      +id: string &#123read-only&#125
      +plane_type: string &#123read-only&#125
      +empty_weight_in_tons: i &#123read-only&#125
      +number_of_airplanes: i &#123read-only, static&#125
      +constructor(id: string, plane_type: string, empty_weight_in_tons: i)
      +get_total_weight_in_tons() i
   }

   class cl_passenger_plane {
      +number_of_seats: i &#123read-only&#125
      +constructor(id: string, plane_type: string, empty_weight_in_tons: i, number_of_seats: i)
      +get_total_weight_in_tons() i
   }

   class cl_cargo_plane {
      +cargo_in_tons: i &#123read-only&#125
      +constructor(id: string, plane_type: string, empty_weight_in_tons: i, cargo_in_tons: i)
      +get_total_weight_in_tons() i
   }

   class cl_carrier {
      +name: string &#123read-only&#125
      +airplanes: cl_airplane[] &#123read-only&#125
      +constructor(name: string)
      +add_airplane(airplane: cl_airplane) void
      +get_biggest_cargo_plane() cl_cargo_plane
   }
```

## Hinweise zur Klasse `ZCL_???_CARRIER`

- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `GET_BIGGEST_CARGO_PLANE` soll das Frachtflugzeug mit dem höchsten Gesamtgewicht zurückgeben
