---
title: ZC_ABAP_FLIGHTTP
description: 'Flug'
---

```sql
@Metadata.layer: #CUSTOMER
@UI.headerInfo: {
    typeName: 'Flight',
    typeNamePlural: 'Flights',
    title.value: 'FlightDate'
}
annotate view ZC_ABAP_FlightTP with
{
  @UI.facet: [{ position: 10, label: 'General Information', type: #IDENTIFICATION_REFERENCE }]

  @UI: {
    lineItem: [{ position: 10, importance: #HIGH }],
    selectionField: [{ position: 10 }],
    identification: [{ position: 10, importance: #HIGH }]
  }
  CarrierID;
  …
}
```

[ABAP CDS-View ZC_ABAP_FlightTP](../cds-views/zc_abap_flighttp.md)
