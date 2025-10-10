---
title: ABAP-Objects-01
description: ""
---

Erstelle die Klasse `ZCL_???_AIRPLANE` anhand des abgebildeten Klassendiagramms.

## Klassendiagramm

```mermaid
classDiagram
   class cl_airplane {
      -name: string
      -plane_type: string
      +set_name(name: string)
      +get_name() string
      +set_plane_type(plane_type: string)
      +get_plane_type() string
      +to_string() string
   }
```

## Hinweise zur Klasse `ZCL_???_AIRPLANE`

Die Methode `STRING TO_STRING()` soll alle Instanzattribute zu einer Zeichenkette zusammenfassen und diese zurückgeben
