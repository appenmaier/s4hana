---
title: ZC_ABAP_ConnectionTP (v3)
description: 'Transactional Consumption-View: Flugverbindung'
---

```sql
@AbapCatalog.sqlViewName: 'ZCABAPCONNTP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Transactional Consumption-View: Connection'

@VDM.viewType: #CONSUMPTION
@OData.publish: true
@Search.searchable: true
@Metadata.allowExtensions: true
define view ZC_ABAP_ConnectionTP
  as select from ZI_ABAP_ConnectionTP
{
  key CarrierID,
  key ConnectionID,
      @Search.defaultSearchElement: true
      @Search.fuzzinessTreshold: 0.8
      DepartureCity,
      @Search.defaultSearchElement: true
      @Search.fuzzinessTreshold: 0.8
      ArrivalCity,
      …
}
```