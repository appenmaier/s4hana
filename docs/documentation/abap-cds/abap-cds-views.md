---
title: ABAP CDS Views
description: ""
sidebar_position: 10
tags: []
---

Eine Datenbankview ist eine Sicht auf verschiedene Daten einer Datenbank. Mit ABAP CDS Views werden semantisch reiche Datenmodelle definiert.

Die grundlegende Syntax einer ABAP CDS View umfasst die Angabe der Datenquelle(n), die zu selektierenden Felder (_Projektion_) und Annotationen (_Metadaten_). Optional lassen sich mit einer `where`-Bedingung die zu selektierenden Einträge einschränken (_Selektion_).

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

:::note

ABAP CDS unterstützen Inner Joins, Left Outer Joins und Right Outer Joins; Full Outer Joins nur indirekt über `union`.

:::

:::note

Der Name einer ABAP CDS View darf maximal 30 Zeichen lang sein.

:::
