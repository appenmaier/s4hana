---
title: 3. Oberfläche festlegen
description: ""
sidebar_position: 30
tags: []
---

- Die BO Projection View `ZC_Travel` um Annotationen für Suchen und Metadatenerweiterungen erweitern
- Die Metadata Extension `ZC_TRAVEL` erstellen

## BO Projection View `ZC_Travel`

```sql showLineNumbers
@EndUserText.label: 'Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
//highlight-start
@Search.searchable: true
@Metadata.allowExtensions: true
//highlight-end
define root view entity ZC_Travel
  as projection on ZR_Travel
{
  key TravelUuid,
      TravelId,
      AgencyId,
      CustomerId,
      BeginDate,
      EndDate,
      BookingFee,
      TotalPrice,
      CurrencyCode,
//highlight-start
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
//highlight-end
      Description,
      Status,

      /* Administrative Data */
      CreatedBy,
      CreatedAt,
      LastChangedBy,
      LastChangedAt
}
```

## Metadata Extension `ZC_TRAVEL`

```sql showLineNumbers
//highlight-start
@Metadata.layer: #CUSTOMER
@UI.headerInfo:
{
  typeNamePlural: 'Travels',
  typeName: 'Travel',
  title.value: 'TravelId',
  description.value: 'Description'
}
annotate view ZC_Travel with
{

  /* Facets */
  @UI.facet:
  [
    { position: 10, targetQualifier: 'TravelDetails', label: 'Travel Details', type: #FIELDGROUP_REFERENCE },
    { position: 20, targetQualifier: 'AdminData', label: 'Administrative Data', type: #FIELDGROUP_REFERENCE }
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

  @UI.lineItem: [{ position: 70 }]
  @UI.fieldGroup: [{ position: 80, qualifier: 'TravelDetails' }]
  Description;

  @UI.lineItem: [{ position: 80 }]
  @UI.selectionField: [{ position: 60 }]
  @UI.fieldGroup: [{ position: 90, qualifier: 'TravelDetails' }]
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
//highlight-end
```
