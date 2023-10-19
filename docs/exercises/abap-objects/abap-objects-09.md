---
title: ABAP-Objects-09
description: ""
---

1. Erstelle die Schnittstelle `ZIF_???_PARTNER` anhand des abgebildeten Klassendiagramms
2. Passe die Klasse `ZCL_???_CARRIER` anhand des abgebildeten Klassendiagramms an
3. Lege den globalen Tabellentypen `Z???_PARTNERS` anhand der abgebildeten Informationen an
4. Erstelle die Klasse `ZCL_???_TRAVEL_AGENCY` anhand des abgebildeten Klassendiagramms
5. Passe das ABAP-Programm `Z???_MAIN_AIRPLANES` so an, dass neben den Flugzeugen und der Fluggesellschaft auch ein Reisebüro erzeugt wird. Die Fluggesellschaft soll dem Reisebüro zugewiesen und alle Informationen des Reisebüros auf dem Bildschirm ausgegeben
   werden

## Informationen zum globalen Tabellentyp `Z???_PARTNERS`

- Referenztyp: `ZIF_???_PARTNER`
- Tabellenart: Standardtabelle
- Primärschlüssel: Standardschlüssel

## Klassendiagramm

```mermaid
classDiagram
    cl_carrier o-- cl_airplane
    cl_airplane <|-- cl_passenger_plane
    cl_airplane <|-- cl_cargo_plane
    if_partner <|.. cl_carrier
    cl_travel_agency o-- if_partner

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

    class if_partner {
      <<interface>>
      +to_string() string
    }

    class cl_travel_agency {
      -name: string &#123read-only&#125
      -partners: if_partner[*] &#123read-only&#125
      +constructor(name: string)
      +add_partner(partner: if_partner) void
      +to_string() string
    }
```

## Hinweise zum Klasse `ZCL_???_TRAVEL_AGENCY`

- Der Konstruktor soll alle Attribute initialisieren
- Die Methode `STRING TO_STRING()` soll alle Instanzattribute zu einer Zeichenkette zusammenfassen und diese zurückgeben
