---
title: ZI_ABAP_Connection
description: 'Basic Interface-View: Flugverbindung'
---

```sql
@AbapCatalog.sqlViewName: 'ZIABAPCONN'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Basic Interface-View: Connection'

@VDM.viewType: #BASIC
define view ZI_ABAP_Connection
  as select from spfli
{
  key carrid   as CarrierID,
  key connid   as ConnectionID,
      …
} 
```