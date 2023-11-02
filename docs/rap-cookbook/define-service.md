---
title: 2. Business Service festlegen
description: ""
sidebar_position: 20
---

- BO Projection View für die Base BO View für Reisen erstellen
- Service Definition für BO Projection View für Reisen erstellen
- Service Binding für die Service Definition erstellen

## BO Projection View ZC_Travel

```sql showLineNumbers
//highlight-start
@EndUserText.label: 'Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
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
      Description,
      Status,

      /* Administrative Data */
      CreatedBy,
      CreatedAt,
      LastChangedBy,
      LastChangedAt
}
//highlight-end
```

## Service Definition ZUI_TRAVEL

```sql showLineNumbers
//highlight-start
@EndUserText.label: 'Travel'
define service ZUI_TRAVEL {
  expose ZC_Travel as Travel;
}
//highlight-end
```

## Service Binding ZUI_TRAVEL_02

- Service Definition: ZUI_TRAVEL
- Binding Type: OData V2 - UI
