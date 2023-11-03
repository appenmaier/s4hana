---
title: 6. Oberfläche erweitern
description: ""
sidebar_position: 60
tags: []
---

- Die BO Projection View `ZC_Booking` um eine Annotation zur Metadatenerweiterung erweitern
- Die Metadata Extension `ZC_BOOKING` erstellen
- Die Metadata Extension `ZC_TRAVEL` um Annotationen zur Darstellung von Buchungen erweitern

## BO Projection View `ZC_Booking`

```sql showLineNumbers
@EndUserText.label: 'Booking'
@AccessControl.authorizationCheck: #NOT_REQUIRED
//highlight-start
@Metadata.allowExtensions: true
//highlight-end
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
```

## Metadata Extension `ZC_BOOKING`

```sql showLineNumbers
//highlight-start
@Metadata.layer: #CUSTOMER
@UI.headerInfo:
{
  typeName: 'Booking',
  typeNamePlural: 'Bookings',
  title.value: 'BookingId',
  description.value: 'BookingDate'
}
annotate view ZC_Booking with
{

  /* Facets */
  @UI.facet:
  [
    { position: 10, targetQualifier: 'BookingDetails', label: 'Booking Details', type: #FIELDGROUP_REFERENCE },
    { position: 20, targetQualifier: 'AdminData', label: 'Administrative Data', type: #FIELDGROUP_REFERENCE }
  ]

  /* Fields */
  @UI.fieldGroup: [{ position: 10, qualifier: 'AdminData' }]
  BookingUuid;

  @UI.fieldGroup: [{ position: 20, qualifier: 'AdminData' }]
  TravelUuid;

  @UI.lineItem: [{ position: 10 }]
  @UI.fieldGroup: [{ position: 10, qualifier: 'BookingDetails' }]
  BookingId;

  @UI.lineItem: [{ position: 20 }]
  @UI.fieldGroup: [{ position: 20, qualifier: 'BookingDetails' }]
  BookingDate;

  @UI.lineItem: [{ position: 30 }]
  @UI.fieldGroup: [{ position: 30, qualifier: 'BookingDetails' }]
  CarrierId;

  @UI.lineItem: [{ position: 40 }]
  @UI.fieldGroup: [{ position: 40, qualifier: 'BookingDetails' }]
  ConnectionId;

  @UI.lineItem: [{ position: 50 }]
  @UI.fieldGroup: [{ position: 50, qualifier: 'BookingDetails' }]
  FlightDate;

  @UI.lineItem: [{ position: 60 }]
  @UI.fieldGroup: [{ position: 60, qualifier: 'BookingDetails' }]
  FlightPrice;

//  CurrencyCode;

}
//highlight-end
```

## Metadata Extension `ZC_TRAVEL`

```sql showLineNumbers
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
    { position: 10, targetQualifier: 'TravelDetails', label: 'Travel Details', type: #FIELDGROUP_REFERENCE },
    { position: 20, targetQualifier: 'AdminData', label: 'Administrative Data', type: #FIELDGROUP_REFERENCE },
//highlight-start
    { position: 30, targetElement: '_Bookings', label: 'Bookings', type: #LINEITEM_REFERENCE }
//highlight-end
  ]

  /* Fields */
  @UI.fieldGroup: [{ position: 10, qualifier: 'AdminData' }]
  TravelUuid;

  @UI.lineItem: [{ position: 10 }]
  @UI.fieldGroup: [{ position: 10, qualifier: 'TravelDetails' }]
  TravelId;

  @UI.lineItem: [{ position: 20 }]
  @UI.selectionField: [{ position: 10 }]
  @UI.fieldGroup: [{ position: 20, qualifier: 'TravelDetails' }]
  AgencyId;

  @UI.lineItem: [{ position: 30 }]
  @UI.selectionField: [{ position: 20 }]
  @UI.fieldGroup: [{ position: 30, qualifier: 'TravelDetails' }]
  CustomerId;

  @UI.lineItem: [{ position: 40 }]
  @UI.selectionField: [{ position: 30 }]
  @UI.fieldGroup: [{ position: 40, qualifier: 'TravelDetails' }]
  BeginDate;

  @UI.lineItem: [{ position: 50 }]
  @UI.selectionField: [{ position: 40 }]
  @UI.fieldGroup: [{ position: 50, qualifier: 'TravelDetails' }]
  EndDate;

  @UI.fieldGroup: [{ position: 60, qualifier: 'TravelDetails' }]
  BookingFee;

  @UI.lineItem: [{ position: 60 }]
  @UI.selectionField: [{ position: 50 }]
  @UI.fieldGroup: [{ position: 70, qualifier: 'TravelDetails' }]
  TotalPrice;

  //  CurrencyCode;

  @UI.lineItem: [{ position: 70 }]
  @UI.fieldGroup: [{ position: 80, qualifier: 'TravelDetails' }]
  Description;

  @UI.lineItem: [{ position: 80 }]
  @UI.selectionField: [{ position: 60 }]
  @UI.fieldGroup: [{ position: 90, qualifier: 'TravelDetails' }]
  Status;

  @UI.fieldGroup: [{ position: 20, qualifier: 'AdminData' }]
  Createdby;

  @UI.fieldGroup: [{ position: 30, qualifier: 'AdminData' }]
  Createdat;

  @UI.fieldGroup: [{ position: 40, qualifier: 'AdminData' }]
  Lastchangedby;

  @UI.fieldGroup: [{ position: 50, qualifier: 'AdminData' }]
  Lastchangedat;

}
```
