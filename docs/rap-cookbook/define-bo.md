---
title: RAP BO festlegen
description: ""
sidebar_position: 10
---

Zum Speichern der Reisen muss zunächst eine entsprechende Datenbanktabelle erstellt werden. Anschließend wird darauf aufbauend eine Restricted Interface View erstellt, die den Wurzelknoten des RAP BOs darstellt.

## Datenbanktabelle ZATRAVEL

```sql
@EndUserText.label : 'Travel'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table zatravel {
  key client            : abap.clnt not null;
  key travel_uuid       : sysuuid_x16 not null;
  travel_id             : /dmo/travel_id;
  customer_id           : /dmo/customer_id;
  begin_date            : /dmo/begin_date;
  end_date              : /dmo/end_date;
  description           : /dmo/description;
  @Semantics.amount.currencyCode : 'zatravel.currency_code'
  total_price           : /dmo/total_price;
  currency_code         : /dmo/currency_code;
  created_by            : abp_creation_user;
  created_at            : abp_creation_tstmpl;
  local_last_changed_by : abp_locinst_lastchange_user;
  local_last_changed_at : abp_locinst_lastchange_tstmpl;
  last_changed_at       : abp_lastchange_tstmpl;
}
```

## Restricted Interface View ZR_Travel

```sql
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Travel'
define root view entity ZR_Travel
  as select from zatravel
{
  key travel_uuid           as TravelUuid,
      travel_id             as TravelId,
      customer_id           as CustomerId,
      begin_date            as BeginDate,
      end_date              as EndDate,
      description           as Description,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      total_price           as TotalPrice,
      currency_code         as CurrencyCode,
      created_by            as CreatedBy,
      created_at            as CreatedAt,
      local_last_changed_by as LocalLastChangedBy,
      local_last_changed_at as LocalLastChangedAt,
      last_changed_at       as LastChangedAt
}
```
