---
title: Geschäftsservice festlegen
description: ''
sidebar_position: 20
---

Für den Geschäftsservice muss zunächst eine Projection View auf Grundlage des Geschäftsobjektes erstellt werden. Anschließend wird darauf aufbauend eine Servicedefinition erstellt, die den Umfang des Geschäftsservices festlegt. Zuletzt wird mit Hilfe dieser Servicedefinition eine Servicebindung erstellt, die das Kommunikationsprotokoll (OData v2) sowie die Art des Services (UI) festlegt.

## Projection View ZC_Travel
```sql
@EndUserText.label: 'Projection View: Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
define root view entity ZC_Travel
  as projection on ZI_Travel
{
  key TravelUuid,
      TravelId,
      CustomerId,
      BeginDate,
      EndDate,
      Description,
      TotalPrice,
      CurrencyCode
}
```

## Service Definition ZUI_TRAVEL
```sql
@EndUserText.label: 'Travel'
define service ZUI_TRAVEL {
  expose ZC_Travel;
}
```

## Service Binding ZUI_TRAVEL_V2
Binding Type: OData V2 - UI
