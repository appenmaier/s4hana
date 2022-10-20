---
title: ABAP CDS-View ZABAP_Demo06
description: 'Eingebaute Funktionen'
---

```sql
@AbapCatalog.sqlViewName: 'ZABAPDEMO06'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Demo 6: Built-In Functions'
define view ZABAP_Demo06
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
  floor(1.9)                                               as Floor1,
  ceil(1.1)                                                as Ceil1,
  1.43565                                                  as Fltp2,
  fltp_to_dec(1.43565 as abap.dec(16,2))                   as FltpToDec1,
  /*
   * Zeichenkettenfunktionen
   */
  concat_with_space('Hallo', 'Welt', 1)                    as ConcatWithSpace1,
  planetype                                                as Planetype,
  replace(replace(planetype, 'A', 'B'), '600', '400')      as ReplacedPlanetype,
  substring('Hallo Welt', 7, 4)                            as Substring1,
  length('X  ')                                            as LengthXSS,
  length('  X')                                            as LengthSSX,
  length(' ')                                              as LengthS,
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