---
title: 9. Textelemente implementieren
description: ""
sidebar_position: 90
---

- Die Interface View `ZI_CustomerText` erstellen
- Die BO Base View `ZI_Travel` um ein transientes Feld für Kundentexte und eine Annotation für Textelemente erweitern
- Die BO Projection View `ZC_Travel` um ein transientes Feld für Kundentexte erweitern

## Interface View `ZI_CustomerText`

```sql showLineNumbers
//highlight-start
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Textelement for Customer'
define view entity ZI_CustomerText
as select from /dmo/customer
{
  key customer_id                                 as CustomerId,
      first_name                                  as FirstName,
      last_name                                   as LastName,

      /* Transient Data */
      concat_with_space(first_name, last_name, 1) as Name

}
//highlight-end
```

## BO Base View `ZI_Travel`

```sql showLineNumbers
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Travel'
define root view entity ZI_Travel
  as select from ZR_Travel
  composition [0..*] of ZI_Booking      as _Bookings
//highlight-start
  association [1..1] to ZI_CustomerText as _CustomerText on $projection.CustomerId = _CustomerText.CustomerId
//highlight-end
{
  key TravelUuid,
      TravelId,
      AgencyId,
//highlight-start
      @ObjectModel.text.element: ['CustomerName']
//highlight-end
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

//highlight-start
      /* Transient Data */
      _CustomerText.Name as CustomerName,
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
  as projection on ZI_Travel
{
  key TravelUuid,
      TravelId,
      @Consumption.valueHelpDefinition: [{ entity: { name: '/DMO/I_Agency_StdVH', element: 'AgencyID' } }]
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
      LastChangedAt

//highlight-start
      /* Transient Data */
      CustomerName,
//highlight-end

      /* Associations */
      _Bookings : redirected to composition child ZC_Booking
}
```
