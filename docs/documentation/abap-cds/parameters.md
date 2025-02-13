---
title: Views mit Parametern
description: ""
sidebar_position: 70
tags: []
---

ABAP CDS Views können um Parameter erweitert werden. Der Verwender einer ABAP CDS View muss diese beim Aufruf mit Werten versorgen.

## Definition von Views mit Parametern

Views mit Paramatern werden über den Zusatz `with parameters` definiert. Innerhalb der ABAP CDS View kann über die Anweisung `$parameters` auf die Parameter zugegriffen werden.

```sql showLineNumbers
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Flight'
define view entity I_Flight
  with parameters
    P_CarrierId    : /dmo/carrier_id,
    P_ConnectionId : /dmo/connection_id,
    @Environment.systemField: #SYSTEM_DATE
    P_Deadline     : abap.dats
  as select from /dmo/flight
{
  key carrier_id    as CarrierId,
  key connection_id as ConnectionId,
  key flight_date   as FlightDate,
      price         as Price,
      currency_code as CurrencyCode
}
where
      carrier_id    = $parameters.P_CarrierId
  and connection_id = $parameters.P_ConnectionId
  and flight_date   <= $parameters.P_Deadline
```

:::tip Hinweis

Mit Hilfe der Annotation `@Environment.systemField` kann einem Parameter ein Systemfeld als Standardwert zugewiesen werden. Der Parameter wird dadurch optional.

:::

## Verwenden von Views mit Parametern

Beim Aufruf einer ABAP CDS View mit Parametern müsse diese mit Werten versorgt werden.

```sql showLineNumbers
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Flight'
define view entity I_UpcomingFlight
  with parameters
    P_CarrierId    : /dmo/carrier_id,
    P_ConnectionId : /dmo/connection_id
  as select from I_Flight(P_CarrierId: $parameters.P_CarrierId, P_ConnectionId: $parameters.P_ConnectionId)
{
  key CarrierId,
  key ConnectionId,
  key FlightDate,
      Price,
      CurrencyCode
}
```

In ABAP SQL erfolgt die Angabe der Parameter analog zu den ABAP CDS Views.

```abap showLineNumbers
SELECT FROM I_Flight( p_carrierid = 'LH', p_connectionid = '0400' )
  FIELDS *
  INTO TABLE @DATA(flights).
```
