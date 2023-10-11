---
title: Assoziationen
description: ""
sidebar_position: 80
tags: []
---

:::danger TODO
:::

```sql showLineNumbers
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Connection'
define view entity Connection
  as select from /dmo/connection as Connection
  association [0..*] to /dmo/flight as _Flights on  Connection.carrier_id = _Flights.carrier_id
                                                and Connection.connection_id = _Flights.connection_id
  association [1..1] to /dmo/carrier as _Carrier on  Connection.carrier_id = _Carrier.carrier_id
{
  key Connection.carrier_id    as CarrierId,
  key Connection.connection_id as ConnectionId,
      airport_from_id          as AirportFromId,
      airport_to_id            as AirportToId,

      /* Associations */
      _Flights,
      _Carrier
}
```
