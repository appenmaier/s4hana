---
title: 8. Wertehilfen implementieren
description: ""
sidebar_position: 80
---

Um eine Wertehilfe zu implementieren muss zunächst eine Interface View erstellt werden. Diese wird anschließend dem entsprechenden Feld der Projection View zugewiesen.

## Wertehilfe für die Kundennummer und die Währung

### Interface View ZI_CustomerVH

```sql
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Customer Value Help'
define view entity ZI_CustomerVH
  as select from /dmo/customer
{
  key customer_id  as CustomerId,
      first_name   as FirstName,
      last_name    as LastName,
      title        as Title,
      street       as Street,
      postal_code  as PostalCode,
      city         as City,
      country_code as CountryCode
}
```

## Projection View ZC_Travel

```sql
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
//highlight-start
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_CustomerVH', element: 'CustomerId' } }]
//highlight-end
      CustomerId,
      BeginDate,
      EndDate,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      Description,
      TotalPrice,
//highlight-start
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]
//highlight-end
      CurrencyCode,

      /* Associations */
      _Bookings : redirected to composition child ZC_Booking
}
```

## Wertehilfe für den Status und die Währung

### Interface View ZI_StatusVH

```sql
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Status Value Help'
define view entity ZI_StatusVH
  as select from DDCDS_CUSTOMER_DOMAIN_VALUE_T( p_domain_name: '/DMO/BOOK_STATUS' )
{
      @UI.hidden: true
  key domain_name,
      @UI.hidden: true
  key value_position,
      @UI.hidden: true
  key language,
      @EndUserText: { label: 'Status', quickInfo: 'Status' }
      value_low as Status,
      @EndUserText: { label: 'Status Text', quickInfo: 'Status Text' }
      text      as StatusText
}
```

### Projection View ZC_Booking

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
//highlight-start
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]
//highlight-end
      CurrencyCode,
//highlight-start
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_StatusVH', element: 'Status' } }]
//highlight-end
      Status,

      /* Associations */
      _Travel : redirected to parent ZC_Travel
}
```
