---
title: 5. Business Service erweitern
description: ""
sidebar_position: 50
---

- Die BO Projection View `ZC_BookingTP` inklusive einer Assoziation zur BO Projection View `ZC_TravelTP` erstellen
- Die BO Projection View `ZC_TravelTP` um eine Assoziation zur BO Projection View `ZC_BookingTP` erweitern
- Die Service Definition `ZUI_TRAVEL` um die BO Projection View `ZC_BookingTP` erweitern

## BO Projection View `ZC_BookingTP`

```sql showLineNumbers
//highlight-start
@EndUserText.label: 'Booking'
@AccessControl.authorizationCheck: #NOT_REQUIRED
define view entity ZC_BookingTP
  as projection on ZI_BookingTP
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
      _Travel : redirected to parent ZC_TravelTP
}
//highlight-end
```

## BO Projection View `ZC_TravelTP`

```sql showLineNumbers
@EndUserText.label: 'Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Metadata.allowExtensions: true
define root view entity ZC_TravelTP
  as projection on ZI_TravelTP
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
      _Bookings : redirected to composition child ZC_BookingTP
//highlight-end
}
```

## Service Definition `ZUI_TRAVEL`

```sql showLineNumbers
@EndUserText.label: 'Travel'
define service ZUI_TRAVEL {
  expose ZC_TravelTP as Travel;
//highlight-start
  expose ZC_BookingTP as Booking;
//highlight-end
}
```
