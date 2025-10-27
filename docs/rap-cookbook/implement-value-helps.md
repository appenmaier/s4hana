---
title: 8. Wertehilfen implementieren
description: ""
sidebar_position: 80
---

- Die Interface View `ZI_CustomerVH` erstellen
- Die Interface View `ZI_StatusVH` erstellen
- Die BO Projection View `ZC_TravelTP` um Annotationen für Wertehilfen erweitern
- Die BO Projection View `ZC_BookingTP` um Annotationen für Wertehilfen erweitern

## Interface View `ZI_CustomerVH`

```sql showLineNumbers
//highlight-start
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Value Help for Customer'
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
//highlight-end
```

## Interface View `ZI_StatusVH`

```sql showLineNumbers
//highlight-start
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Value Help for Status'
define view entity ZI_StatusVH
  as select from DDCDS_CUSTOMER_DOMAIN_VALUE_T( p_domain_name : '/DMO/STATUS') as Text
    inner join   DDCDS_CUSTOMER_DOMAIN_VALUE( p_domain_name : '/DMO/STATUS') as Value
      on Text.domain_name = Value.domain_name and Text.value_position = Value.value_position
{
      @EndUserText.label: 'Status'
      @EndUserText.quickInfo: 'Status'
  key Value.value_low as Status,
      @EndUserText.label: 'Status Text'
      @EndUserText.quickInfo: 'Status Text'
      Text.text       as StatusText
}
where Text.language = $session.system_language
//highlight-end
```

## BO Projection View `ZC_TravelTP`

```sql showLineNumbers
@EndUserText.label: 'Travel'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@Metadata.allowExtensions: true
define root view entity ZC_TravelTP
  provider contract transactional_query
  as projection on ZR_TravelTP
{
  key TravelUuid,
      TravelId,
//highlight-start
      @Consumption.valueHelpDefinition: [{ entity: { name: '/DMO/I_Agency_StdVH', element: 'AgencyID' } }]
//highlight-end
      AgencyId,
//highlight-start
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_CustomerVH', element: 'CustomerId' } }]
//highlight-end
      CustomerId,
      BeginDate,
      EndDate,
      BookingFee,
      TotalPrice,
//highlight-start
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]
//highlight-end
      CurrencyCode,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      Description,
//highlight-start
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_StatusVH', element: 'Status' } }]
//highlight-end
      Status,

      /* Administrative Data */
      CreatedBy,
      CreatedAt,
      LastChangedBy,
      LastChangedAt,

      /* Associations */
      _Bookings : redirected to composition child ZC_BookingTP
}
```

## BO Projection View `ZC_BookingTP`

```sql showLineNumbers
@EndUserText.label: 'Booking'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.allowExtensions: true
define view entity ZC_BookingTP
  as projection on ZR_BookingTP
{
  key BookingUuid,
      TravelUuid,
      BookingId,
      BookingDate,
//highlight-start
      @Consumption.valueHelpDefinition: [{ entity: { name: '/DMO/I_Carrier_StdVH', element: 'AirlineID' } }]
//highlight-end
      CarrierId,
      ConnectionId,
      FlightDate,
      FlightPrice,
//highlight-start
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]
//highlight-end
      CurrencyCode,

      /* Associations */
      _Travel : redirected to parent ZC_TravelTP
}
```
