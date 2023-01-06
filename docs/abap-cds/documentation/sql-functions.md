---
title: SQL-Funktionen
description: ''
sidebar_position: 30
tags: []
---

ABAP CDS Views unterstützen SQL-Funktionen wie Fallunterscheidungen, Arithmetische Ausdrücke und Aggregatfunktionen. Zudem stellen die ABAP CDS einige eingebaute Funktionen zur Verfügung.

## Fallunterscheidungen
Die ABAP CDS kennen einfache Fallunterscheidungen mit `CASE...WHEN...THEN...END` (vergleichbar mit dem ABAP-Konstrukt `CASE...WHEN...ENDCASE`) sowie komplexe Fallunterscheidungen mit `CASE WHEN...THEN...END` (vergleichbar mit dem ABAP-Konstrukt `IF...ELSE...ENDIF`).

```sql
@AbapCatalog.sqlViewName: 'ABAPCDSVIEW'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'ABAP CDS View'
define view AbapCdsView
  as select from sbook
{
  cancelled  as CancelledCode,
  case cancelled
    when 'X' then 'Cancelled'
    when '' then 'Booked'
    else ''
  end        as CancelledText,
  class      as FlightClass,
  luggweight as LuggageWeight,
  wunit      as LuggageWeightUnit,
  case when class = 'F' then ''
       when wunit = 'KG' and luggweight > 25 then 'X'
       when wunit = 'LB' and luggweight > 44 then 'X'
       else ''
   end       as ExcessLugagge
}
```

## Arithmetische Ausdrücke
Für arithmetische Ausdrücke können in den ABAP CDS die Operatoren `+`, `-`, `*` und `/` verwendet werden.

```sql
@AbapCatalog.sqlViewName: 'ABAPCDSVIEW'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'ABAP CDS View'
define view AbapCdsView
  as select from sflight
{
  seatsmax                                                              as MaxSeatsEconomy,
  seatsocc                                                              as OccupiedSeatsEconomy,
  seatsmax - seatsocc                                                   as FreeSeatsEconomy,
  seatsmax_b                                                            as MaxSeatsBusiness,
  seatsmax_f                                                            as MaxSeatsFirst,
  seatsmax + seatsmax_b + seatsmax_f                                    as MaxSeatsTotal,
  price                                                                 as OldPrice,
  price * 2                                                             as DoublePrice,
  cast(price as abap.fltp) * 1.1                                        as NewPrice,
  ( cast(seatsocc as abap.fltp) / cast(seatsmax as abap.fltp) ) * 100.0 as OccupancyRate,
}
```

:::danger Hinweis

:::

## Aggregatfunktionen
Die ABAP CDS unterstützen die klassischen Aggregatfunktionen `count`, `sum`, `avg`, `min` und `max`.

```sql
@AbapCatalog.sqlViewName: 'ABAPCDSVIEW'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'ABAP CDS View'
define view AbapCdsView
  as select from sflight
{
  carrid                                               as CarrierId,
  connid                                               as ConnectionId,
  count(*)                                             as NumberOfFlights,
  count(distinct planetype)                            as NumberOfDifferentPlanetypes,
  sum(seatsocc)                                        as TotalOccupiedSeats,
  sum(paymentsum)                                      as TotalPaymentsum,
  avg(price as abap.dec(16,2))                         as AveragePrice,
  min(seatsocc)                                        as MinimumOccupiedSeats,
  max(seatsocc)                                        as MaximumOccupiedSeats,
  sum(case when seatsocc = seatsmax then 1 else 0 end) as NumberOfBookedUpFlights,
  sum(case when seatsocc = 0 then 1 else 0 end)        as NumberOfEmptyFlights
}
where
  price < 1000
group by
  carrid,
  connid
having
  sum( paymentsum ) > 4500000
 ```
 
 ## Eingebaute Funktionen
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
