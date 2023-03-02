---
title: Oberfläche erweitern
description: ''
sidebar_position: 60
tags: []
---

Um die Oberfläche für Buchungsdaten festzulegen, muss zunächst eine Metadata Extension für die Buchungsdaten erstellt werden. Anschließend wird die Metadata Extension für Reisen um eine weitere Facet erweitert.

## Metadata Extension ZC_BOOKING
```sql
@Metadata.layer: #CUSTOMER
@UI.headerInfo:
{
  typeName: 'Booking',
  typeNamePlural: 'Bookings',
  title.value: 'BookingId',
  description.value: 'Status'
}
annotate view ZC_Booking with
{

  /* Facets */
  @UI.facet: [{ position: 10, type: #IDENTIFICATION_REFERENCE, label: 'Booking Details' }]

  /* Fields */
  @UI.hidden: true
  BookingUuid;

  @UI.hidden: true
  TravelUuid;

  @UI.lineItem: [{ position: 10 }]
  @UI.identification: [{ position: 10 }]
  BookingId;

  @UI.lineItem: [{ position: 20 }]
  @UI.selectionField: [{ position: 10 }]
  @UI.identification: [{ position: 20 }]
  BookingDate;

  @UI.lineItem: [{ position: 30 }]
  @UI.selectionField: [{ position: 20 }]
  @UI.identification: [{ position: 30 }]
  CarrierId;

  @UI.lineItem: [{ position: 40 }]
  @UI.identification: [{ position: 40 }]
  ConnectionId;

  @UI.lineItem: [{ position: 50 }]
  @UI.selectionField: [{ position: 30 }]
  @UI.identification: [{ position: 50 }]
  FlightDate;

  @UI.identification: [{ position: 60 }]
  FlightPrice;

  @UI.lineItem: [{ position: 60 }]
  @UI.selectionField: [{ position: 40 }]
  @UI.identification: [{ position: 70 }]
  Status;
  
}
```

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
  @UI.facet:
  [
    { position: 10, type: #IDENTIFICATION_REFERENCE, label: 'Travel Details' },
    { position: 20, type: #LINEITEM_REFERENCE, label: 'Bookings', targetElement: '_Bookings' }
  ]

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
