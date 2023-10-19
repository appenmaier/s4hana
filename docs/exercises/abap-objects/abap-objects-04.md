---
title: ABAP-Objects-04
description: ""
---

1. Passe die Klasse `ZCL_???_AIRPLANE` anhand des abgebildeten Klassendiagramms an
2. Passe das ABAP-Programm `Z???_MAIN_AIRPLANES` so an, dass vor und nach den Objekterzeugungen das Klassenattribut `NUMBER_OF_AIRPLANES` ausgegeben wird

## Klassendiagramm

```mermaid
classDiagram
    class cl_airplane {
      +name: string &#123read-only&#125
      +plane_type: string &#123read-only&#125
      +number_of_airplanes: i &#123read-only, static&#125
      +constructor(name: string, plane_type: string)
      +to_string() string
    }
```

## Hinweise zur Klasse `ZCL_???_AIRPLANE`

Passe den Konstruktor so an, dass beim Erzeugen eines Flugzeugs die Anzahl der Flugzeuge um Eins erhöht wird
