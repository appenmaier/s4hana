---
title: Geschäftsservice erweitern
description: ''
sidebar_position: 50
---

Um den Geschäftsservice um Buchungsdaten zu erweitern, muss zunächst eine Projection View für Buchungsdaten erstellt werden.
Anschließend muss die Projection View für Reisedaten um einen Assoziation zu den Buchungsdaten ergänzt werden.
Zuletzt muss die Servicedefinition um die Projection View für Buchungsdaten erweitert werden.

## Projection View ZC_Booking
```sql
@EndUserText.label: 'Projection View: Booking'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.allowExtensions: true
define view entity ZC_Booking
  as projection on ZI_Booking
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
@EndUserText.label: 'Projection View: Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Metadata.allowExtensions: true
define root view entity ZC_Travel
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
      CurrencyCode,

      /* Associations */
      _Bookings : redirected to composition child ZC_Booking
}
```

## Service Definition ZUI_TRAVEL
```sql
@EndUserText.label: 'Travel'
define service ZUI_TRAVEL {
  expose ZC_Travel;
  expose ZC_Booking;
}
```
