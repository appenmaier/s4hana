---
title: ZI_ABAP_Flight
description: 'Basic Interface-View: Flight'
---

```sql
@AbapCatalog.sqlViewName: 'ZIABAPFLI'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Basic Interface-View: Flight'

@VDM.viewType: #BASIC
define view ZI_ABAP_Flight
  as select from sflight
{
  key carrid as CarrierID,
  key connid as ConnectionID,
  key fldate as FlightDate
      …
} 
```