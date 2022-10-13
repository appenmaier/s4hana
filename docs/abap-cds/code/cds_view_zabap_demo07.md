---
title: ABAP CDS-View ZABAP_Demo07
description: ""
---

```sql
@AbapCatalog.sqlViewName: 'ZABAPDEMO07'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Demo 7: Aggregations'
define view ZABAP_Demo07
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