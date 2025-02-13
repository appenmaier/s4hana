---
title: Assoziationen
description: ""
sidebar_position: 80
tags: []
---

Mit Hilfe von Assoziationen können Beziehungen zwischen zwei Entitäten festgelegt werden. Technisch gesehen handelt es sich bei Assoziationen dabei um Left Outer Joins, die allerdings nur bei Bedarf umgesetzt werden (_Join On-Demand_).

## Definition von Assoziationen

Nach der Definition einer Assoziation wird diese durch Angabe in der Feldliste exponiert, also zur Verfügung gestellt.

```sql showLineNumbers
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Connection'
define view entity I_Connection
  as select from /dmo/connection as Connection
  association [0..*] to /dmo/flight  as _Flights on  $projection.carrier_id    = _Flights.carrier_id
                                                 and $projection.connection_id = _Flights.connection_id
  association [1..1] to /dmo/carrier as _Carrier on  $projection.carrier_id = _Carrier.carrier_id
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

:::tip Hinweis

Die Kardinalität wird in der Form _[Untere Grenze..Obere Grenze]_ angegeben.

:::

:::tip Hinweis

Zur besseren Unterscheidung von Feldern und Assoziationen sollten letztgenannte immer mit einem Unterstrich beginnen.

:::

:::tip Hinweis

In der Join-Bedingung kann über die Anweisung `$projection` auf Elemente der Feldliste zugegriffen werden.

:::

## Verwendung von Assoziationen

Über sogenannte Pfadausdrücke kann auf exponierte Assoziationen zugegriffen werden. Pfadausrücke setzen sich aus dem Namen der Assoziation sowie dem entsprechenden Feld zusammen.

```sql showLineNumbers
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Connection with Carrier'
define view entity I_ConnectionWithCarrier
  as select from I_Connection as Connection
{
  key CarrierId,
  key ConnectionId,
      AirportFromId,
      AirportToId,
      _Carrier.carrier_name as CarrierName

      /* Associations */
      _Flights
}
```

In ABAP SQL werden Pfadausdrücke durch `\` eingeleitet.

```abap shwoLineNumbers
SELECT FROM I_Connection
  FIELDS CarrierId, ConnectionId, AirportFromId, AirportToId, \_Carrier-carrier_name AS CarrierName
  INTO TABLE @DATA(connections_with_carrier).
```
