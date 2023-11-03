---
title: 10. Hervorhebungen implementieren
description: ""
sidebar_position: 100
---

- Die BO Base View `ZR_Travel` um transiente Felder zur Darstellung der Wichtigkeit erweitern
- Die BO Projection View `ZC_Travel` um transiente Felder zur Darstellung der Wichtigkeit erweitern
- Die Metadata Extension `ZC_TRAVEL` um Eigenschaften zur Darstellung der Wichtigkeit erweitern

## BO Base View `ZR_Travel`

```sql showLineNumbers
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Travel'
define root view entity ZR_Travel
  as select from z_travel_a
  composition [0..*] of ZR_Booking      as _Bookings
  association [1..1] to ZI_CustomerText as _CustomerText on $projection.CustomerId = _CustomerText.CustomerId
{
  key travel_uuid        as TravelUuid,
      travel_id          as TravelId,
      agency_id          as AgencyId,
      @ObjectModel.text.element: ['CustomerName']
      customer_id        as CustomerId,
      begin_date         as BeginDate,
      end_date           as EndDate,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      booking_fee        as BookingFee,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      total_price        as TotalPrice,
      currency_code      as CurrencyCode,
      description        as Description,
      status             as Status,

      /* Administrative Data */
      created_by         as CreatedBy,
      created_at         as CreatedAt,
      last_changed_by    as LastChangedBy,
      last_changed_at    as LastChangedAt,

      /* Transient Data */
      _CustomerText.Name as CustomerName,
//highlight-start
      case when dats_days_between($session.user_date, begin_date) >= 14 then 3
           when dats_days_between($session.user_date, begin_date) >= 7 then 2
           when dats_days_between($session.user_date, begin_date) >= 0 then 1
           else 0
      end                as BeginDateCriticality,
      case status when 'B' then 3
                  when 'N' then 0
                  when 'X' then 1
                  else 0
      end                as StatusCriticality,
//highlight-end

      /* Associations */
      _Bookings
}
```

## BO Projection View `ZC_Travel`

```sql showLineNumbers
@EndUserText.label: 'Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Metadata.allowExtensions: true
define root view entity ZC_Travel
  provider contract transactional_query
  as projection on ZR_Travel
{
  key TravelUuid,
      TravelId,
      @Consumption.valueHelpDefinition: [{ entity: { name: '/DMO/I_AgencyStdVH', element: 'AgencyID' }]
      AgencyId,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_CustomerVH', element: 'CustomerId' } }]
      CustomerId,
      BeginDate,
      EndDate,
      BookingFee,
      TotalPrice,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]
      CurrencyCode,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      Description,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_StatusVH', element: 'Status' } }]
      Status,

      /* Administrative Data */
      CreatedBy,
      CreatedAt,
      LastChangedBy,
      LastChangedAt,

      /* Transient Data */
      CustomerName,
//highlight-start
      BeginDateCriticality,
      StatusCriticality,
//highlight-end

      /* Associations */
      _Bookings : redirected to composition child ZC_Booking
}
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
    { position: 30, targetElement: '_Bookings', label: 'Bookings', type: #LINEITEM_REFERENCE }
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

//highlight-start
  @UI.lineItem: [{ position: 70, criticality: 'BeginDateCriticality', criticalityRepresentation: #WITHOUT_ICON }]
//highlight-end
  @UI.fieldGroup: [{ position: 80, qualifier: 'TravelDetails' }]
  Description;

//highlight-start
  @UI.lineItem: [{ position: 80, criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]
//highlight-end
  @UI.selectionField: [{ position: 60 }]
//highlight-start
  @UI.fieldGroup: [{ position: 90, qualifier: 'TravelDetails', criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]
//highlight-end
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
