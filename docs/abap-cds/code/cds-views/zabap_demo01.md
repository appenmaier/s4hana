---
title: ZABAP_Demo01
description: 'Projektionen'
---

```sql
@AbapCatalog.sqlViewName: 'ZABAPDEMO01' // Name der SQL-View, max. 16 Zeichen
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Demo 1: Projections'
define view ZABAP_Demo01 // Name der CDS-View, max. 30 Zeichen
  as select from spfli
{
  key carrid   as Carrid,
  key connid   as Connid
      cityfrom as Cityfrom,
      cityto   as Cityto
}
```