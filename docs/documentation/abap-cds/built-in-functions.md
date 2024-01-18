---
title: Eingebaute Funktionen
description: ""
sidebar_position: 40
tags: []
---

Die ABAP CDS stellen verschiedene numerische Funktionen, Zeichenkettenfunktionen, Funktionen zur Währungs- und Einheitenumrechnung sowie Datums- und Zeitfunktionen zur Verfügung.

```sql showLineNumbers
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Connection'
define view entity I_Connection
  as select from /dmo/connection
{
  key carrier_id                                               as CarrierId,
  key connection_id                                            as ConnectionId,

      /* Numerical Functions */
      div(5, 3)                                                as Div1,
      mod(5, 3)                                                as Mod1,
      division(5, 3, 2)                                        as Division1,

      /* String Functions */
      concat_with_space('Hello', 'World', 1)                   as ConcatWithSpace1,

      /* Conversion Functions */
      distance                                                 as OldDistance,
      distance_unit                                            as OldDistanceUnit,
      @Semantics.quantity.unitOfMeasure: 'ConvertedDistanceUnit'
      unit_conversion(
        quantity => distance,
        source_unit => distance_unit,
        target_unit => cast('KM' as abap.unit) )               as ConvertedDistance,
      cast('KM' as abap.unit)                                  as ConvertedDistanceUnit,

      /* Date and Time Functions */
      dats_add_days(cast('20230101' as abap.dats), 14, 'FAIL') as DatsAddDays1
}
```
