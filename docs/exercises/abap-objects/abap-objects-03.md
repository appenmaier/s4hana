---
title: ABAP-Objects-03
description: ""
---

1. Passe die Klasse `ZCL_???_AIRPLANE` anhand des abgebildeten Klassendiagramms an
2. Passe die ausführbare Klasse `ZCL_???_MAIN_AIRPLANES` so an, dass sie keine Syntaxfehler mehr enthält

## Klassendiagramm

```mermaid
classDiagram
   class cl_airplane {
      +id: string &#123read-only&#125
      +plane_type: string &#123read-only&#125
      +empty_weight_in_tons: i &#123read-only&#125
      +constructor(name: string, plane_type: string, empty_weight_in_tons: i)
   }
```

## Hinweise zur Klasse `ZCL_???_AIRPLANE`

Der Konstruktor soll alle Attribute initialisieren
