---
title: ZC_ABAP_AirportVH
description: 'Wertehilfe: Flughafen'
---

```sql
@AbapCatalog.sqlViewName: 'ZCABAPAIRPVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Value Help: Airport'
define view ZC_ABAP_AirportVH
  as select from sairport
{
  key id as ID,
      …
}
```