---
title: ABAP-Objects-01
description: ""
---

Erstelle die Klasse `ZCL_???_AIRPLANE` anhand des abgebildeten Klassendiagramms.

## Klassendiagramm

```mermaid
classDiagram
   class airplane {
      -id: string
      -plane_type: string
      -empty_weight_in_tons: integer
      +set_id(id: string)
      +get_id() string
      +set_plane_type(plane_type: string)
      +get_plane_type() string
      +set_empty_weight_in_tons(empty_weight_in_tons: integer)
      +get_empty_weight_in_tons() integer
   }
```
