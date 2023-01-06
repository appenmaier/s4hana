---
title: SQL-Funktionen
description: ''
sidebar_position: 30
tags: []
---

ABAP CDS Views unterstützen SQL-Funktionen wie Fallunterscheidungen, Arithmetische Ausdrücke und Aggregatfunktionen. Zudem stellen die ABAP CDS einige eingebaute Funktionen zur Verfügung.

## Fallunterscheidungen
???

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
??? 

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
  cast(2 as abap.dec(16,2))                                             as Decimal1,
  'LH'                                                                  as Char1,
  cast('LH' as s_carr_id)                                               as CarrierId
}
```
