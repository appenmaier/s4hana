---
title: ZC_ABAP_FlightTP
description: 'Transactional Consumption-View: Flug'
---

```sql
@AbapCatalog.sqlViewName: 'ZCABAPFLITP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Transactional Consumption-View: Flight'

@VDM.viewType: #CONSUMPTION
@Metadata.allowExtensions: true
@ObjectModel: {
    createEnabled: true,
    updateEnabled: true,
    deleteEnabled: true
}
define view ZC_ABAP_FlightTP
  as select from ZI_ABAP_FlightTP
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

[ABAP CDS-View ZI_ABAP_FlightTP](../cds-views/zi_abap_flighttp.md)

[ABAP CDS-View ZC_ABAP_ConnectionTP (v5)](../cds-views/zc_abap_connectiontp_v5.md)

[ABAP CDS-View ZC_ABAP_ConnectionTP (v6)](../cds-views/zc_abap_connectiontp_v6.md)