---
title: ZC_ABAP_CONNECTIONTP (v1)
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

[ABAP CDS-View ZC_ABAP_ConnectionTP (v3)](../cds-views/zc_abap_connectiontp_v3.md)

[ABAP CDS-View ZC_ABAP_ConnectionTP (v4)](../cds-views/zc_abap_connectiontp_v4.md)