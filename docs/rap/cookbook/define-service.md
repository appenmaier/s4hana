---
title: Geschäftsservice für Travel definieren
description: ''
sidebar_position: 20
---

## Projection View ZC_Travel erstellen
```sql
@EndUserText.label: 'Projection View: Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
define root view entity ZC_Travel
  provider contract transactional_query
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

## Service Definition ZUI_TRAVEL erstellen
```sql
@EndUserText.label: 'Travel'
define service ZUI_TRAVEL {
  expose ZC_Travel;
}
```

## Service Binding ZUI_TRAVEL_V2 erstellen
Binding Type: OData V2 - UI
