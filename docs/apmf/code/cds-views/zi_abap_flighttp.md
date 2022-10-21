---
title: ZI_ABAP_FlightTP
description: 'Transactional Interface-View: Flug'
---

```sql
@AbapCatalog.sqlViewName: 'ZIABAPFLITP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Transactional Interface-View: Flight'

@VDM.viewType: #TRANSACTIONAL
@ObjectModel: {
    writeActivePersistence: 'ZVABAPFLI',

    createEnabled: true,
    updateEnabled: true,
    deleteEnabled: true,

    representativeKey: ['CarrierId', 'ConnectionId', 'FlightDate'],
    semanticKey: 'FlightDate'
}
define view ZI_ABAP_FlightTP
  as select from ZI_ABAP_Flight
  association [1..1] to ZI_ABAP_ConnectionTP as _Connection on $projection.CarrierID = _Connection.CarrierID 
                                                           and $projection.ConnectionID =_Connection.ConnectionID
{
  key CarrierID,
  key ConnectionID,
  key FlightDate
      …
      @ObjectModel.association.type: [#TO_COMPOSITION_ROOT, #TO_COMPOSITION_PARENT]
      _Connection
}
```