---
title: Assoziationen
description: ""
sidebar_position: 80
tags: []
---

Mit Assoziationen werden Beziehungen zwischen zwei Entitäten festgelegt. Technisch handelt es sich dabei um Left Outer Joins, die jedoch nur bei Bedarf ausgeführt werden (_Join On-Demand_).

## Definition von Assoziationen

Nach der Definition einer Assoziation wird sie durch Aufnahme in die Feldliste zur Verfügung gestellt (Exposition).

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

:::note

Die Kardinalität wird in der Form _[Untere Grenze..Obere Grenze]_ angegeben.

:::

:::tip

Zur besseren Unterscheidung von Feldern und Assoziationen sollten Assoziationen immer mit einem Unterstrich beginnen.

:::

:::note

In der Join-Bedingung wird über `$projection` auf Elemente der Feldliste zugegriffen.

:::

## Verwendung von Assoziationen

Über sogenannte Pfadausdrücke wird auf exponierte Assoziationen zugegriffen. Pfadausdrücke setzen sich aus dem Namen der Assoziation und dem entsprechenden Feld zusammen.

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

In ABAP SQL werden Pfadausdrücke mit `\` eingeleitet.

```abap showLineNumbers
SELECT FROM I_Connection
  FIELDS CarrierId, ConnectionId, AirportFromId, AirportToId, \_Carrier-carrier_name AS CarrierName
  INTO TABLE @DATA(connections_with_carrier).
```
