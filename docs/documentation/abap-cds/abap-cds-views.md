---
title: ABAP CDS Views
description: ""
sidebar_position: 10
tags: []
---

Unter einer Datenbankview versteht man eine Sicht auf verschiedene Daten einer Datenbank. Mit Hilfe von ABAP CDS Views können semantisch reiche Datenmodell definiert werden.

Die Grundlegende Syntax einer ABAP CDS Views umfasst die Angabe der Datenquelle(n), die Angabe der zu selektierenden Felder (_Projektion_) sowie die Angabe von Annotationen (_Metadaten_). Zusätzlich können durch die Angabe einer where-Bedingung die zu selektierenden Einträge festgelegt werden (_Selektion_).

```sql showLineNumbers
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Flight with Connection'
define view entity I_FlightWithConnection
  as select from /dmo/flight     as Flight
    inner join   /dmo/connection as Connection on  Connection.carrier_id    = Flight.carrier_id
                                               and Connection.connection_id = Flight.connection_id
{
  key Flight.carrier_id          as CarrierID,
  key Flight.connection_id       as ConnectionID,
  key Flight.flight_date         as FlightDate,
      Connection.airport_from_id as AirportFromId,
      Connection.airport_to_id   as AirportToId
}
where
  Flight.plane_type_id = '747-400'
```

:::tip Hinweis

Die ABAP CDS unterstützen sowohl Inner Joins als auch Left Outer Joins und Right Outer Joins; Full Outer Joins nur indirekt durch die Anweisung `union`.

:::

:::tip Hinweis

Der Name der ABAP CDS View kann maximal 30 Zeichen umfassen.

:::
