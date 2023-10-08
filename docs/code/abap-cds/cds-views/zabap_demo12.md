---
title: ZABAP_Demo12
description: 'Pfadausdrücke'
---

```sql
@AbapCatalog.sqlViewName: 'ZABAPDEMO12'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Demo 12: Path Expressions'
define view ZABAP_Demo12
  as select from ZABAP_Demo11
{
  key Carrid,
  key Connid,
      Cityfrom,
      Cityto,
      _Carrier.carrname as Carrname,
      _Flights
}
```

[ABAP CDS-View ZABAP_Demo11](../cds-views/zabap_demo11.md)