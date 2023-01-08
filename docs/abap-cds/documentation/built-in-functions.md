---
title: Eingebaute Funktionen
description: ''
sidebar_position: 60
tags: []
---

Die ABAP CDS stellen verschiedene numerische Funktionen, Zeichenkettenfunktionen, Funktionen zur Währungs- und Einheitenumrechnung sowie Datums- und Zeitfunktionen zur Verfügung.
 
```sql
@AbapCatalog.sqlViewName: 'ABAPCDSVIEW'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'ABAP CDS View'
define view AbapCdsView
  as select from sflight
    inner join   spfli on  sflight.carrid = spfli.carrid
                       and sflight.connid = spfli.connid
{
  /*
   * Numerische Funktionen
   */
  5.0 / 3.0                                                as Fltp1,
  div(5, 3)                                                as Div1,
  mod(5, 3)                                                as Mod1,
  division(5, 3, 2)                                        as Division1,
  price                                                    as Price,
  round(price, -2)                                         as RoundedPrice,
  fltp_to_dec(1.43565 as abap.dec(16,2))                   as FltpToDec1,
  /*
   * Zeichenkettenfunktionen
   */
  concat_with_space('Hallo', 'Welt', 1)                    as ConcatWithSpace1,
  planetype                                                as Planetype,
  replace(replace(planetype, 'A', 'B'), '600', '400')      as ReplacedPlanetype,
  /*
   * Währungs- und Einheitenumrechnung
   */
  distance                                                 as OldDistance,
  distid                                                   as OldDistanceUnit,
  @Semantics.quantity.unitOfMeasure: 'ConvertedDistanceUnit'
  unit_conversion(
    quantity => distance,
    source_unit => distid,
    target_unit => cast('KM' as abap.unit) )               as ConvertedDistance,
  cast('KM' as abap.unit)                                  as ConvertedDistanceUnit,
  /*
   * Datums- und Zeitfunktionen
   */
  dats_add_days(cast('20211005' as abap.dats), 14, 'FAIL') as DatsAddDays
}
```
