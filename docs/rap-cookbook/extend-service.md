---
title: 5. Business Service erweitern
description: ""
sidebar_position: 50
---

- BO Projection View für Buchungen inklusive einer Assoziation zur BO Projection View für Reisen erstellen
- BO Projection View für Reisen um eine Assoziation zur BO Projection View für Buchungen erweitern
- Service Definition um die BO Projection View für Buchungen erweitern

## BO Projection View ZC_Booking

```sql showLineNumbers
//highlight-start
@EndUserText.label: 'Booking'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.allowExtensions: true
define view entity ZC_Booking
  as projection on ZR_Booking
{
  key BookingUuid,
      TravelUuid,
      BookingId,
      BookingDate,
      CarrierId,
      ConnectionId,
      FlightDate,
      FlightPrice,
      CurrencyCode,

      /* Associations */
      _Travel : redirected to parent ZC_Travel
}
//highlight-end
```

## BO Projection View ZC_Travel

```sql showLineNumbers
@EndUserText.label: 'Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Metadata.allowExtensions: true
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
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      Description,
      Status,

      /* Administrative Data */
      CreatedBy,
      CreatedAt,
      LastChangedBy,
      LastChangedAt

//highlight-start
      /* Associations */
      _Bookings : redirected to composition child ZC_Booking
//highlight-end
}
```

## Service Definition ZUI_TRAVEL

```sql showLineNumbers
@EndUserText.label: 'Travel'
define service ZUI_TRAVEL {
  expose ZC_Travel as Travel;
//highlight-start
  expose ZC_Booking as Booking;
//highlight-end
}
```
