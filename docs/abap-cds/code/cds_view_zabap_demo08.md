---
title: ABAP CDS-View ZABAP_Demo08
description: ""
---

```sql
@AbapCatalog.sqlViewName: 'ZABAPDEMO08'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Demo 8: Outer Joins and Unions'
define view ZABAP_Demo08
  as select from spfli as Connection
  //    inner join   scarr as Carrier on Connection.carrid = Carrier.carrid
    left outer join scarr as Carrier on Connection.carrid = Carrier.carrid
  //    right outer join scarr as Carrier on Connection.carrid = Carrier.carrid
  //    cross join   scarr as Carrier
{
  key Carrier.carrid    as CarrierCarrid,
  key Connection.carrid as ConnectionCarrid,
  key Connection.connid as Connid,
      carrname          as Carrname,
      cityfrom          as Cityfrom,
      cityto            as Cityto
  union select from spfli as Connection
    right outer join scarr as Carrier on Connection.carrid = Carrier.carrid
{
  key Carrier.carrid    as CarrierCarrid,
  key Connection.carrid as ConnectionCarrid,
  key Connection.connid as Connid,
      carrname          as Carrname,
      cityfrom          as Cityfrom,
      cityto            as Cityto
}
```