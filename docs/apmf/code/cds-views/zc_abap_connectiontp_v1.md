---
title: ZC_ABAP_ConnectionTP (v1)
description: 'Transactional Consumption-View: Flugverbindung'
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

[ABAP CDS-View ZI_ABAP_ConnectionTP (v1)](../cds-views/zi_abap_connectiontp_v1.md)