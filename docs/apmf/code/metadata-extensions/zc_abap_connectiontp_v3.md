---
title: ZC_ABAP_CONNECTIONTP (v3)
description: 'Flugverbindung'
---

```sql
@Metadata.layer: #CUSTOMER
@UI.headerInfo: {
    typeName: 'Connection',
    typeNamePlural: 'Connections',
    title.value: 'CarrierID',
    description.value: 'ConnectionID'
}
annotate view ZC_ABAP_ConnectionTP with
{
  @UI.facet: [
      { position: 10, label: 'General Information', type: #IDENTIFICATION_REFERENCE },
      { position: 20, label: 'Flights', type: #LINEITEM_REFERENCE, targetElement: '_Flights' }
  ]

  @UI: {
    lineItem: [
      { position: 10, importance: #HIGH },
      { position: 10, type: #FOR_ACTION, dataAction: 'BOPF:SWITCH_FLIGHT_TYPE', label: 'Switch FlightType' }
    ],
    selectionField: [{ position: 10 }],
    identification: [{ position: 10, importance: #HIGH }]
  }
  CarrierID;
  …
}
```

[ABAP CDS-View ZC_ABAP_ConnectionTP (v5)](../cds-views/zc_abap_connectiontp_v5.md)

[ABAP CDS-View ZC_ABAP_ConnectionTP (v6)](../cds-views/zc_abap_connectiontp_v6.md)