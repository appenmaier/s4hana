---
title: ZI_ABAP_ConnectionTP (v4)
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
  association [0..*] to ZI_ABAP_FlightTP as _Flights on $projection.CarrierID = _Flights.CarrierID
                                                    and $projection.ConnectionID =_Flights.ConnectionID
{
  key CarrierID,
  key ConnectionID,
      @ObjectModel.readOnly: true
      DepartureCountryCode,
      @ObjectModel.readOnly: true
      DepartureCity,
      @ObjectModel.mandatory: true
      DepartureAirportID,
      @ObjectModel.readOnly: true
      ArrivalCountryCode,
      @ObjectModel.readOnly: true
      ArrivalCity,
      @ObjectModel.mandatory: true
      ArrivalAirportID,
      …
}
```

[ABAP CDS-View ZI_ABAP_Connection](../cds-views/zi_abap_connection.md)

[ABAP CDS-View ZI_ABAP_FlightTP](../cds-views/zi_abap_flighttp.md)