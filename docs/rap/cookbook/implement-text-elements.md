---
title: Textelemente implementieren
description: ''
sidebar_position: 90
---

:::danger TODO
:::

## Interface View ZI_CustomerText
```sql
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Text: Customer'
define view entity ZI_CustomerText
as select from /dmo/customer
{
  key customer_id                                 as CustomerId,
      first_name                                  as FirstName,
      last_name                                   as LastName,
      
      /* Transient Data */
      concat_with_space(first_name, last_name, 1) as Name
}
```

## Interface View ZI_Travel
```sql
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Interface View: Travel'
define root view entity ZI_Travel
  as select from z_travel
  composition [0..*] of ZI_Booking      as _Bookings
  association [1..1] to ZI_CustomerText as _CustomerText on $projection.CustomerId = _CustomerText.CustomerId
{
  key travel_uuid        as TravelUuid,
      travel_id          as TravelId,
      @ObjectModel.text.element: ['CustomerName']
      customer_id        as CustomerId,
      begin_date         as BeginDate,
      end_date           as EndDate,
      description        as Description,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      total_price        as TotalPrice,
      currency_code      as CurrencyCode,

      /* Transient Data */
      _CustomerText.Name as CustomerName,

      /* Associations */
      _Bookings
}
```

## Projection View ZC_Travel
```sql
@EndUserText.label: 'Projection View: Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Metadata.allowExtensions: true
define root view entity ZC_Travel
  provider contract transactional_query
  as projection on ZI_Travel
{
  key TravelUuid,
      TravelId,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_CustomerVH', element: 'CustomerId' } }]
      CustomerId,
      BeginDate,
      EndDate,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      Description,
      TotalPrice,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]
      CurrencyCode,

      /* Transient Data */
      CustomerName,

      /* Associations */
      _Bookings : redirected to composition child ZC_Booking
}
```
