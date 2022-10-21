---
title: ZC_ABAP_FLIGHTTP
description: 'Flight'
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
  @UI.facet: [{ position: 10, label: 'General Information', type: #IDENTIFICATION_REFERENCE }

  @UI: {
    lineItem: [{ position: 10, importance: #HIGH }],
    selectionField: [{ position: 10 }],
    identification: [{ position: 10, importance: #HIGH }]
  }
  CarrierID;
  …
}
```