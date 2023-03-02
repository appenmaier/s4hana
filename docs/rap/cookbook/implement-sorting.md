---
title: Sortierung implementieren
description: ''
sidebar_position: 110
---

:::danger TODO
:::

## Metadata Extension ZC_TRAVEL
```sql
@Metadata.layer: #CUSTOMER
@UI.headerInfo:
{
  typeNamePlural: 'Travels',
  typeName: 'Travel',
  title.value: 'TravelId',
  description.value: 'Description'
}
@UI.presentationVariant: [{sortOrder: [{ by: 'BeginDate', direction: #DESC }]}]
annotate view ZC_Travel with
{

  /* Facets */
  @UI.facet:
  [
    { position: 10, type: #IDENTIFICATION_REFERENCE, label: 'Travel Details' },
    { position: 20, type: #LINEITEM_REFERENCE, label: 'Bookings', targetElement: '_Bookings' }
  ]

  /* Fields */
  @UI.hidden: true
  TravelUuid;

  @UI.lineItem: [{ position: 10 }]
  @UI.selectionField: [{ position: 10 }]
  @UI.identification: [{ position: 10 }]
  TravelId;

  @UI.lineItem: [{ position: 20 }]
  @UI.selectionField: [{ position: 20 }]
  @UI.identification: [{ position: 20 }]
  CustomerId;

  @UI.lineItem: [{ position: 30, criticality: 'BeginDateCriticality', criticalityRepresentation: #WITHOUT_ICON }]
  @UI.selectionField: [{ position: 30 }]
  @UI.identification: [{ position: 30 }]
  BeginDate;

  @UI.hidden: true
  BeginDateCriticality;

  @UI.lineItem: [{ position: 40 }]
  @UI.selectionField: [{ position: 40 }]
  @UI.identification: [{ position: 40 }]
  EndDate;

  @UI.lineItem: [{ position: 50 }]
  @UI.identification: [{ position: 50 }]
  Description;

  @UI.lineItem: [{ position: 60 }]
  @UI.selectionField: [{ position: 60 }]
  @UI.identification: [{ position: 60 }]
  TotalPrice;
  
}
```
