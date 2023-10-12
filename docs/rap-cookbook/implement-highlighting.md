---
title: 10. Hervorhebungen implementieren
description: ""
sidebar_position: 100
---

:::danger TODO
:::

## Hervorhebung für den Status

### Restricted Interface View ZR_Booking

```sql
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Booking'
define view entity ZR_Booking
  as select from zabooking
  association to parent ZR_Travel as _Travel on $projection.TravelUuid = _Travel.TravelUuid
{
  key booking_uuid  as BookingUuid,
      travel_uuid   as TravelUuid,
      booking_id    as BookingId,
      booking_date  as BookingDate,
      carrier_id    as CarrierId,
      connection_id as ConnectionId,
      flight_date   as FlightDate,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      flight_price  as FlightPrice,
      currency_code as CurrencyCode,
      status        as Status,

//highlight-start
      /* Transient Data */
      case status when 'B' then 3
                  when 'N' then 0
                  when 'X' then 1
                  else 0
      end           as StatusCriticality,
//highlight-end

      /* Associations */
      _Travel
}
```

### Projection View ZC_Booking

```sql
@EndUserText.label: 'Projection View: Booking'
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
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' } }]
      CurrencyCode,
      @Consumption.valueHelpDefinition: [{ entity: { name: 'ZI_StatusVH', element: 'Status' } }]
      Status,

//highlight-start
      /* Transient Data */
      StatusCriticality,
//highlight-end

      /* Associations */
      _Travel : redirected to parent ZC_Travel
}
```

### Metadata Extension ZC_BOOKING

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

//highlight-start
  @UI.lineItem: [{ position: 60, criticality: 'StatusCriticality', criticalityRepresentation: #WITHOUT_ICON }]
//highlight-end
  @UI.selectionField: [{ position: 40 }]
  @UI.identification: [{ position: 70 }]
  Status;

  @UI.hidden: true
  StatusCriticality;

}
```

## Hervorhebung für das Startdatum

### Restricted Interface View ZR_Travel

```sql
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Travel'
define root view entity ZR_Travel
  as select from zatravel
  composition [0..*] of ZR_Booking      as _Bookings
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
//highlight-start
      case when dats_days_between($session.user_date, begin_date) >= 14 then 3
           when dats_days_between($session.user_date, begin_date) >= 7 then 2
           when dats_days_between($session.user_date, begin_date) >= 0 then 1
           else 0
      end                as BeginDateCriticality,
//highlight-end
      _CustomerText.Name as CustomerName,

      /* Associations */
      _Bookings
}
```

### Projection View ZC_Travel

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
//highlight-start
      BeginDateCriticality,
//highlight-end
      CustomerName,

      /* Associations */
      _Bookings : redirected to composition child ZC_Booking
}
```

### Metadata Extension ZC_TRAVEL

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

  @UI.hidden: true
  BeginDateCriticality;

  @UI.lineItem: [{ position: 40 }]
  @UI.selectionField: [{ position: 40 }]
  @UI.identification: [{ position: 40 }]
  EndDate;

//highlight-start
  @UI.lineItem: [{ position: 50, criticality: 'BeginDateCriticality', criticalityRepresentation: #WITHOUT_ICON }]
//highlight-end
  @UI.identification: [{ position: 50 }]
  Description;

  @UI.lineItem: [{ position: 60 }]
  @UI.selectionField: [{ position: 60 }]
  @UI.identification: [{ position: 60 }]
  TotalPrice;

}
```
