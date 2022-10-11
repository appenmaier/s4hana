---
title: ABAP CDS-View ZABAP_Demo02
description: ""
---

```sql
@AbapCatalog.sqlViewName: 'ZABAPDEMO02'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Demo 2: Selections and Inner Joins'
define view ZABAP_Demo02
  as select from spfli   as Connection
    inner join   sflight as Flight  on  Connection.carrid = Flight.carrid
                                    and Connection.connid = Flight.connid
    inner join   scarr   as Carrier on Connection.carrid = Carrier.carrid
{
  key Carrier.carrid    as CarrierCarrierID,
  key Flight.carrid     as FlightCarrierID,
  key Connection.carrid as ConnectionCarrierID,
  key Flight.connid     as FlightConnectionID,
  key Connection.connid as ConnectionConnectionID,
  key Flight.fldate     as FlightDate,
      carrname          as CarrierName,
      cityfrom          as DepartureCity,
      cityto            as ArrivalCity
}
where
  fltype <> 'X' // Charterflüge ausblenden
```