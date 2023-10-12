---
title: 3. Oberfläche festlegen
description: ""
sidebar_position: 30
tags: []
---

Um die Oberfläche für Reisen festzulegen, wird zunächst eine Metadata Extension erstellt, die sämtliche UI-Annotationen beinhaltet. Anschließend wird die Projection View für Reisen um Such-Annotationen erweitert.

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
annotate view ZC_Travel with
{

  /* Facets */
  @UI.facet: [{ position: 10, type: #IDENTIFICATION_REFERENCE, label: 'Travel Details' }]

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

  @UI.lineItem: [{ position: 30 }]
  @UI.selectionField: [{ position: 30 }]
  @UI.identification: [{ position: 30 }]
  BeginDate;

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

  @UI.identification: [{ position: 70 }]
  CreatedBy;

  @UI.identification: [{ position: 80 }]
  CreatedAt;

  @UI.identification: [{ position: 90 }]
  LocalLastChangedBy;

  @UI.identification: [{ position: 100 }]
  LocalLastChangedAt;

  @UI.identification: [{ position: 110 }]
  LastChangedAt;

}
```

## Projection View ZC_Travel

```sql
@EndUserText.label: 'Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
//highlight-start
@Metadata.allowExtensions: true
//highlight-end
define root view entity ZC_Travel
  as projection on ZR_Travel
{
  key TravelUuid,
      TravelId,
      CustomerId,
      BeginDate,
      EndDate,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      Description,
      TotalPrice,
      CurrencyCode,
      CreatedBy,
      CreatedAt,
      LocalLastChangedBy,
      LocalLastChangedAt,
      LastChangedAt
}
```
