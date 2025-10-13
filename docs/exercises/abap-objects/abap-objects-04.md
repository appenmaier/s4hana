---
title: ABAP-Objects-04
description: ""
---

1. Passe die Klasse `ZCL_???_AIRPLANE` anhand des abgebildeten Klassendiagramms an
2. Passe die ausführbare Klasse `ZCL_???_MAIN_AIRPLANES` so an, dass vor und nach den Objekterzeugungen das Klassenattribut `NUMBER_OF_AIRPLANES` ausgegeben wird

## Klassendiagramm

```mermaid
classDiagram
   class cl_airplane {
      +id: string &#123read-only&#125
      +plane_type: string &#123read-only&#125
      +empty_weight_in_tons: i &#123read-only&#125
      +number_of_airplanes: i &#123read-only, static&#125
      +constructor(id: string, plane_type: string, empty_weight_in_tons: i)
   }
```

## Hinweise zur Klasse `ZCL_???_AIRPLANE`

Passe den Konstruktor so an, dass beim Erzeugen eines Flugzeugs die Anzahl der Flugzeuge um Eins erhöht wird
