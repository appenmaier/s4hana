---
title: ZC_ABAP_ConnectionTP (v5)
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
@ObjectModel: {
    transactionalProcessingDelegated: true,

    createEnabled: true,
    updateEnabled: true,
    deleteEnabled: true
}
define view ZC_ABAP_ConnectionTP
  as select from ZI_ABAP_ConnectionTP
  association [0..*] to ZC_ABAP_FlightTP as _Flights on $projection.CarrierID = _Flights.CarrierID
                                                    and $projection.ConnectionID =_Flights.ConnectionID
{
  key CarrierID,
  key ConnectionID,
      …
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Flights
}
```

[ABAP CDS-View ZI_ABAP_ConnectionTP (v3)](../cds-views/zi_abap_connectiontp_v3.md)

[ABAP CDS-View ZC_ABAP_FlightTP](../cds-views/zc_abap_flighttp.md)