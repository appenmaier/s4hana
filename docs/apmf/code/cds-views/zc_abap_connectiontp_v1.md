---
title: ZC_ABAP_ConnectionTP (v1)
description: 'Transactional Consumption-View: Connection'
---

```sql
@AbapCatalog.sqlViewName: 'ZCABAPCONNTP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Transactional Consumption-View: Connection'

@VDM.viewType: #CONSUMPTION
define view ZC_ABAP_ConnectionTP
  as select from ZI_ABAP_ConnectionTP
{
  key CarrierID,
  key ConnectionID,
      …
}
```