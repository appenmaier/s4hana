---
title: ZC_ABAP_ConnectionTP (v6)
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
  association [1..1] to ZC_ABAP_AirportVH as _DepartureAirport on $projection.DepartureAirportID = _DepartureAirport.ID
  association [1..1] to ZC_ABAP_AirportVH as _ArrivalAirport on $projection.ArrivalAirportID = _ArrivalAirport.ID
{
  key CarrierID,
  key ConnectionID,
      @Consumption.valueHelp: '_DepartureAirport'
      DepartureAirportID,
      @Consumption.valueHelp: '_ArrivalAirport'
      ArrivalAirportID,
      …
      _DepartureAirport,
      _ArrivalAirport
}
```

[ABAP CDS-View ZI_ABAP_ConnectionTP (v4)](../cds-views/zi_abap_connectiontp_v4.md)

[ABAP CDS-View ZC_ABAP_AirportVH](../cds-views/zc_abap_airportvh.md)

[ABAP CDS-View ZC_ABAP_FlightTP](../cds-views/zc_abap_flighttp.md)