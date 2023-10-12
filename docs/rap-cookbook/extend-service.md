---
title: Business Service erweitern
description: ""
sidebar_position: 50
---

Um den Business Service um Buchungen zu erweitern, muss zunächst eine Projection View für Buchungen erstellt werden. Anschließend muss die Projection View für Reisen um einen Assoziation zu den Buchungen erweitert werden. Zuletzt muss die Service Definition um die Projection View für Buchungen erweitert werden.

## Projection View ZC_Booking

```sql
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
      Status,

      /* Associations */
      _Travel : redirected to parent ZC_Travel
}
```

## Projection View ZC_Travel

```sql
@EndUserText.label: 'Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Metadata.allowExtensions: true
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
      lLastChangedAt,

//highlight-start
      /* Associations */
      _Bookings : redirected to composition child ZC_Booking
//highlight-end
}
```

## Service Definition ZUI_TRAVEL

```sql
@EndUserText.label: 'Travel'
define service ZUI_TRAVEL {
  expose ZC_Travel as Travel;
//highlight-start
  expose ZC_Booking as Booking;
//highlight-end
}
```
