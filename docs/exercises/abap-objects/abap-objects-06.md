---
title: ABAP-Objects-06
description: ""
---

1. Erstelle die Klassen `ZCL_???_PASSENGER_PLANE` und `ZCL_???_CARGO_PLANE` anhand des abgebildeten Klassendiagramms
2. Passe die ausführbare Klasse `ZCL_???_MAIN_AIRPLANES` so an, dass statt gewöhnlichen Flugzeugen Passagier- und Frachtflugzeuge erzeugt werden

## Klassendiagramm

```mermaid
classDiagram
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
```

## Hinweise zur Klasse `ZCL_???_AIRPLANE`

- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `GET_TOTAL_WEIGHT_IN_TONS` soll das Gesamtgewicht nach der Formel _[Leergewicht] \* 1,1_ zurückgeben

## Hinweise zur Klasse `ZCL_???_PASSENGER_PLANE`

- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `GET_TOTAL_WEIGHT_IN_TONS` soll das Gesamtgewicht nach der Formel _[Leergewicht] \* 1,1 + [Sitzplätze] \* 0,08_ zurückgeben

## Hinweise zur Klasse `ZCL_???_CARGO_PLANE`

- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `GET_TOTAL_WEIGHT_IN_TONS` soll das Gesamtgewicht nach der Formel _[Leergewicht] \* 1,1 + [Frachtkapazität]_ zurückgeben
