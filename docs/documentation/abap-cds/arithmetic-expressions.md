---
title: Arithmetische Ausdrücke
description: ""
sidebar_position: 30
tags: []
---

Für arithmetische Ausdrücke können in den ABAP CDS die Operatoren `+`, `-`, `*` und `/` verwendet werden.

```sql showLineNumbers
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Flight'
define view entity I_Flight
  as select from /dmo/flight
{
  key carrier_id                                                                 as CarrierId,
  key connection_id                                                              as ConnectionId,
  key flight_date                                                                as FlightDate,
      seats_max                                                                  as SeatsMax,
      seats_occupied                                                             as SeatsOccupied,
      seats_max - seats_occupied                                                 as SeatsFree,
      price                                                                      as OldPrice,
      price * 2                                                                  as DoublePrice,
      cast(price as abap.fltp) * 1.1                                             as NewPrice,
      100 * ( cast(seats_occupied as abap.fltp) / cast(seats_max as abap.fltp) ) as OccupancyRate,
}
```

:::tip Hinweis

Da der Divisionsoperator `/` nur Gleitkommazahlen unterstützt, muss gegebenenfalls eine Typumwandlung mit Hilfe der cast-Operation erfolgen.

:::
