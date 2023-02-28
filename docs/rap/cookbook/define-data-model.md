---
title: Datenmodell für Travel definieren
description: ''
sidebar_position: 10
---

Zum Speichern der Reisedaten muss zunächst eine entsprechende Datenbanktabelle erstellt werden. Anschließend wird darauf aufbauend eine Interface View erstellt, die später als Wurzelknoten des Geschäftsobjektes dienen wird.

## Datenbanktabelle Z_TRAVEL erstellen
```sql
@EndUserText.label : 'Travel'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table z_travel {
  key client      : abap.clnt not null;
  key travel_uuid : sysuuid_x16 not null;
  travel_id       : /dmo/travel_id;
  customer_id     : /dmo/customer_id;
  begin_date      : /dmo/begin_date;
  end_date        : /dmo/end_date;
  description     : /dmo/description;
  @Semantics.amount.currencyCode : 'z_travel.currency_code'
  total_price     : /dmo/total_price;
  currency_code   : /dmo/currency_code;
}
```

## Interface View ZI_Travel erstellen
```sql
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Interface View: Travel'
define root view entity ZI_Travel
  as select from z_travel
{
  key travel_uuid   as TravelUuid,
      travel_id     as TravelId,
      customer_id   as CustomerId,
      begin_date    as BeginDate,
      end_date      as EndDate,
      description   as Description,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      total_price   as TotalPrice,
      currency_code as CurrencyCode
}
```
