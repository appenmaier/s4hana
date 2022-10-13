---
title: ABAP CDS-View ZABAP_Demo05
description: ""
---

```sql
@AbapCatalog.sqlViewName: 'ZABAPDEMO05'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Demo 5: Arithmetic Expressions and Type Casts'
define view ZABAP_Demo05
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