---
title: 13. Aktionen festlegen
description: ""
sidebar_position: 130
---

:::danger TODO
:::

## Abstract View ZA_BookingFee

```sql showLineNumbers
@EndUserText.label: 'BookingFee'
define abstract entity ZA_BookingFee
{
  BookingFee   : /dmo/booking_fee;
  CurrencyCode : /dmo/currency_code;
}
```

## Behavior Definition ZR_TRAVEL

```sql showLineNumbers
managed implementation in class zbp_travel unique;
strict ( 2 );

define behavior for ZR_Travel alias Travel
persistent table z_travel_a
lock master
authorization master ( instance )
//etag master <field_name>
{
  create;
  update;
  delete;
  association _Bookings { create; }

//highlight-start
  static action show_test_message;
  action cancel_travel;
  action maintain_booking_fee parameter ZA_BookingFee;
//highlight-end

  field ( readonly, numbering : managed ) TravelUuid;

  mapping for z_travel_a corresponding
  {
    AgencyId = agency_id;
    BeginDate = begin_date;
    BookingFee = booking_fee;
    CreatedAt = created_at;
    CreatedBy = created_by;
    CurrencyCode = currency_code;
    CustomerId = customer_id;
    Description = description;
    EndDate = end_date;
    LastChangedAt = last_changed_at;
    LastChangedBy = last_changed_by;
    Status = status;
    TotalPrice = total_price;
    TravelId = travel_id;
    TravelUuid = travel_uuid;
  }
}

define behavior for ZR_Booking alias Booking
persistent table z_booking_a
lock dependent by _Travel
authorization dependent by _Travel
//etag master <field_name>
{
  update;
  delete;
  field ( readonly ) TravelUuid;
  association _Travel;

  field ( readonly, numbering : managed ) BookingUuid;

  mapping for z_booking_a corresponding
  {
    BookingDate = booking_Date;
    BookingId = booking_id;
    BookingUuid = booking_uuid;
    CarrierId = carrier_id;
    ConnectionId = connection_id;
    CurrencyCode = currency_code;
    FlightDate = flight_date;
    FlightPrice = flight_price;
    TravelUuid = Travel_uuid;
  }
}
```

## Behavior Projection ZC_TRAVEL

```sql showLineNumbers
projection;
strict ( 2 );

define behavior for ZC_Travel alias Travel
{
  use create;
  use update;
  use delete;

  use association _Bookings { create; }

//highlight-start
  use action show_test_message;
  use action cancel_travel;
  use action maintain_booking_fee;
//highlight-end
}

define behavior for ZC_Booking alias Booking
{
  use update;
  use delete;

  use association _Travel;
}
```

## Metadata Extension ZC_TRAVEL

```sql showLineNumbers
@Metadata.layer: #CUSTOMER
@UI.headerInfo:
{
  typeNamePlural: 'Travels',
  typeName: 'Travel',
  title.value: 'TravelId',
  description.value: 'Description'
}
@UI.presentationVariant: [{sortOrder: [{ by: 'BeginDate', direction: #DESC }]}]
annotate view ZC_Travel with
{

  /* Facets */
  @UI.facet:
  [
    { position: 10, targetQualifier: 'TravelDetails', label: 'Travel Details', type: #FIELDGROUP_REFERENCE },
    { position: 20, targetQualifier: 'AdminData', label: 'Administrative Data', type: #FIELDGROUP_REFERENCE },
    { position: 30, targetElement: '_Bookings', label: 'Bookings', type: #LINEITEM_REFERENCE }
  ]

//highlight-start
  /* Actions */
  @UI.lineItem:
  [
    { position: 10, dataAction: 'SHOW_TEST_MESSAGE', label: 'Show Test Message', type: #FOR_ACTION },
    { position: 20, dataAction: 'CANCEL_TRAVEL', label: 'Cancel Travel', type: #FOR_ACTION }
  ]
  @UI.identification:
  [
    { position: 10, dataAction: 'MAINTAIN_BOOKING_FEE', label: 'Maintain Booking Fee', type: #FOR_ACTION }
  ]
//highlight-end

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

  @UI.lineItem: [{ position: 70, criticality: 'BeginDateCriticality', criticalityRepresentation: #WITHOUT_ICON }]
  @UI.fieldGroup: [{ position: 80, qualifier: 'TravelDetails' }]
  Description;

  @UI.lineItem: [{ position: 80, criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]
  @UI.selectionField: [{ position: 60 }]
  @UI.fieldGroup: [{ position: 90, qualifier: 'TravelDetails', criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]
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
