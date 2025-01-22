---
title: ABAP-Objects-01
description: ""
---

Erstelle die Klasse `ZCL_???_AIRPLANE` anhand des abgebildeten Klassendiagramms.

## Klassendiagramm

```mermaid
classDiagram
    class cl_airplane {
      +name: string &#123read-only&#125
      +plane_type: string &#123read-only&#125
      +set_name(name: string) void
      +set_plane_type(plane_type: string) void
      +to_string() string
    }
```

## Hinweise zur Klasse `ZCL_???_AIRPLANE`

Die Methode `STRING TO_STRING()` soll alle Instanzattribute zu einer Zeichenkette zusammenfassen und diese zurückgeben
