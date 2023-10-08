---
title: ZABAP_Demo11
description: 'Assoziationen'
---

```sql
@AbapCatalog.sqlViewName: 'ZABAPDEMO11'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Demo 11: Associations'
define view ZABAP_Demo11
  as select from spfli as Connection
  association [0..*] to sflight as _Flights on  Connection.carrid = _Flights.carrid
                                            and Connection.connid = _Flights.connid
  association [1..1] to scarr   as _Carrier on  Connection.carrid = _Carrier.carrid
{
  key Connection.carrid as Carrid,
  key Connection.connid as Connid,
      cityfrom          as Cityfrom,
      cityto            as Cityto,
      _Flights,
      _Carrier
}
```