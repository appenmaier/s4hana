---
title: 11. Sortierung implementieren
description: ""
sidebar_position: 110
---

Die Metadata Extension `ZC_TRAVEL` um Annotationen zur Sortierung von Reisen erweitern.

## Metadata Extension `ZC_TRAVEL`

```sql showLineNumbers
@Metadata.layer: #CUSTOMER
@UI.headerInfo:
{
  typeNamePlural: 'Travels',
  typeName: 'Travel',
  title.value: 'TravelId',
  description.value: 'Description'
}
//highlight-start
@UI.presentationVariant: [{sortOrder: [{ by: 'BeginDate', direction: #DESC }]}]
//highlight-end
annotate view ZC_Travel with
{

  /* Facets */
  @UI.facet:
  [
    { position: 10, targetQualifier: 'TravelDetails', label: 'Travel Details', type: #FIELDGROUP_REFERENCE },
    { position: 20, targetQualifier: 'AdminData', label: 'Administrative Data', type: #FIELDGROUP_REFERENCE },
    { position: 30, targetElement: '_Bookings', label: 'Bookings', type: #LINEITEM_REFERENCE }
  ]

  /* Fields */
  @UI.fieldGroup: [{ position: 10, qualifier: 'AdminData' }]
  TravelUuid;

  @UI.lineItem: [{ position: 10 }]
  @UI.fieldGroup: [{ position: 10, qualifier: 'TravelDetails' }]
  TravelId;

  @UI.lineItem: [{ position: 20 }]
  @UI.selectionField: [{ position: 10 }]
  @UI.fieldGroup: [{ position: 20, qualifier: 'TravelDetails' }]
  AgencyId;

  @UI.lineItem: [{ position: 30 }]
  @UI.selectionField: [{ position: 20 }]
  @UI.fieldGroup: [{ position: 30, qualifier: 'TravelDetails' }]
  CustomerId;

  @UI.lineItem: [{ position: 40 }]
  @UI.selectionField: [{ position: 30 }]
  @UI.fieldGroup: [{ position: 40, qualifier: 'TravelDetails' }]
  BeginDate;

  @UI.lineItem: [{ position: 50 }]
  @UI.selectionField: [{ position: 40 }]
  @UI.fieldGroup: [{ position: 50, qualifier: 'TravelDetails' }]
  EndDate;

  @UI.fieldGroup: [{ position: 60, qualifier: 'TravelDetails' }]
  BookingFee;

  @UI.lineItem: [{ position: 60 }]
  @UI.selectionField: [{ position: 50 }]
  @UI.fieldGroup: [{ position: 70, qualifier: 'TravelDetails' }]
  TotalPrice;

  //  CurrencyCode;

  @UI.lineItem: [{ position: 70, criticality: 'BeginDateCriticality', criticalityRepresentation: #WITHOUT_ICON }]
  @UI.fieldGroup: [{ position: 80, qualifier: 'TravelDetails' }]
  Description;

  @UI.lineItem: [{ position: 80, criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]
  @UI.selectionField: [{ position: 60 }]
  @UI.fieldGroup: [{ position: 90, qualifier: 'TravelDetails', criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]
  Status;

  @UI.fieldGroup: [{ position: 20, qualifier: 'AdminData' }]
  Createdby;

  @UI.fieldGroup: [{ position: 30, qualifier: 'AdminData' }]
  Createdat;

  @UI.fieldGroup: [{ position: 40, qualifier: 'AdminData' }]
  Lastchangedby;

  @UI.fieldGroup: [{ position: 50, qualifier: 'AdminData' }]
  Lastchangedat;

}
```
