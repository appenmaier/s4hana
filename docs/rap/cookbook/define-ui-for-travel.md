---
title: Oberfläche definieren
description: ''
sidebar_position: 30
tags: []
---

Um die Oberfläche für Reisedaten festzulegen, wird eine Metadatenwerweiterung erstellt. Diese beinhaltet sämtliche UI-Annotationen. Zudem wird die Projection View für Reisedaten um Such-Annotationen erweitert.

## Metadatenerweiterung ZC_TRAVEL erstellen
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

}
```

## Projection View ZC_Travel erweitern
```sql
@EndUserText.label: 'Projection View: Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Metadata.allowExtensions: true
define root view entity ZC_Travel
  provider contract transactional_query
  as projection on ZI_Travel
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
      CurrencyCode
}
```

## UI-Annotationen für List Report
![image](https://user-images.githubusercontent.com/47243617/210181800-d258f0ec-419e-4f6f-a862-2c8ff5a019b3.png)

## UI-Annotationen für Object Page
![image](https://user-images.githubusercontent.com/47243617/210181809-8e94d32e-6944-4085-adf7-05fbad16f550.png)
