---
title: Aggregatfunktionen
description: ""
sidebar_position: 60
tags: []
---

Die ABAP CDS unterstützen die klassischen Aggregatfunktionen `count`, `sum`, `avg`, `min` und `max`.

```sql showLineNumbers
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Connection KPIs'
define view entity I_ConnectionKPIs
  as select from /dmo/flight
{
  key carrier_id                                                  as CarrierId,
  key connection_id                                               as ConnectionId,
      count(*)                                                    as NumberOfFlights,
      count(distinct plane_type_id)                               as NumberOfDifferentPlaneTypeIds,
      sum(seats_occupied)                                         as TotalOccupiedSeats,
      sum(price)                                                  as TotalPrice,
      avg(price as abap.dec(16,2))                                as AveragePrice,
      min(seats_occupied)                                         as MinimumOccupiedSeats,
      max(seats_occupied)                                         as MaximumOccupiedSeats,
      sum(case when seats_occupied = seats_max then 1 else 0 end) as NumberOfBookedUpFlights,
      sum(case when seats_occupied = 0 then 1 else 0 end)         as NumberOfEmptyFlights
}
where
  price < 1000
group by
  carrier_id,
  connection_id
having
  sum( price ) > 100000
```

:::tip Hinweis

Alle nichtaggregierten Felder der Feldliste müssen nach dem Schlüsselwort `group by` aufgeführt werden.

:::

:::tip Hinweis

Die aggregierten Daten können mit Hilfe von `having` gefiltert werden.

:::
