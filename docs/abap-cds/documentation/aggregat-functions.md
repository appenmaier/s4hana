---
title: Aggregatfunktionen
description: ''
sidebar_position: 50
tags: []
---

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

:::note Hinweis
Alle nichtaggregierten Felder der Feldliste müssen nach dem Schlüsselwort `group by` aufgeführt werden.
:::

:::note Hinweis
Die aggregierten Daten können mit Hilfe von `having` gefiltert werden.
:::
