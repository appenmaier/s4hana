---
title: ZI_ABAP_ConnectionTP (v1)
description: 'Transactional Interface-View: Flugverbindung'
---

```sql
@AbapCatalog.sqlViewName: 'ZIABAPCONNTP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Transactional Interface-View: Connection'

@VDM.viewType: #TRANSACTIONAL
define view ZI_ABAP_ConnectionTP
  as select from ZI_ABAP_Connection
{
  key CarrierID,
  key ConnectionID,
      …
}
```

[ABAP CDS-View ZI_ABAP_Connection](../cds-views/zi_abap_connection.md)