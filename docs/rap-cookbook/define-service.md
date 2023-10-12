---
title: 2. Business Service festlegen
description: ""
sidebar_position: 20
---

Für den Business Service muss zunächst eine Projection View auf Grundlage des RAP BOs erstellt werden. Anschließend wird darauf aufbauend eine Service Definition erstellt, die den Umfang des Business Services festlegt. Zuletzt wird mit Hilfe dieser Service Definition ein Service Binding erstellt, die das Kommunikationsprotokoll (OData v2) sowie die Art des Services (UI) festlegt.

## Projection View ZC_Travel

```sql
@EndUserText.label: 'Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
define root view entity ZC_Travel
  as projection on ZR_Travel
{
  key TravelUuid,
      TravelId,
      CustomerId,
      BeginDate,
      EndDate,
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

## Service Definition ZUI_TRAVEL

```sql
@EndUserText.label: 'Travel'
define service ZUI_TRAVEL {
  expose ZC_Travel as Travel;
}
```

## Service Binding ZUI_TRAVEL_V2

Binding Type: OData V2 - UI
