---
title: ZI_ABAP_ConnectionTP (v2)
description: 'Transactional Interface-View: Flugverbindung'
---

```sql
@AbapCatalog.sqlViewName: 'ZIABAPCONNTP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Transactional Interface-View: Connection'

@VDM.viewType: #TRANSACTIONAL
@ObjectModel: {
    compositionRoot: true,
    transactionalProcessingEnabled: true,
    writeActivePersistence: 'ZVABAPCONN',

    createEnabled: true,
    updateEnabled: true,
    deleteEnabled: true,

    modelCategory: #BUSINESS_OBJECT,
    representativeKey: ['CarrierID', 'ConnectionID'],
    semanticKey: 'ConnectionID'
}
define view ZI_ABAP_ConnectionTP
  as select from ZI_ABAP_Connection
{
  key CarrierID,
  key ConnectionID,
      …
}
```