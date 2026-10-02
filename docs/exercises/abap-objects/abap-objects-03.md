---
title: ABAP-Objects-03
description: ""
---

1. Passe die Klasse `ZCL_???_AIRPLANE` anhand des abgebildeten Klassendiagramms an
2. Passe die ausführbare Klasse `ZCL_???_MAIN_AIRPLANES` so an, dass sie keine Syntaxfehler mehr enthält

## Klassendiagramm

```mermaid
classDiagram
   class airplane {
      -id: string
      -plane_type: string
      -empty_weight_in_tons: integer
      +constructor(name: string, plane_type: string, empty_weight_in_tons: integer)
      +get_id() string
      +get_plane_type() string
      +get_empty_weight_in_tons() integer
   }
```

## Hinweise zur Klasse `ZCL_???_AIRPLANE`

Der Konstruktor soll alle Attribute initialisieren.
