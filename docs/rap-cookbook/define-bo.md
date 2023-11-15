---
title: 1. BO festlegen
description: ""
sidebar_position: 10
---

- Die Anwendungstabelle `Z_TRAVEL_A` erstellen
- Die ABAP-Klasse `ZCL_TRAVEL_GENERATOR` erstellen
- Die BO Base View `ZR_Travel` erstellen

## Anwendungstabelle `Z_TRAVEL_A`

```sql showLineNumbers
//highlight-start
@EndUserText.label : 'Travel'
@AbapCatalog.enhancement.category : #NOT_EXTENSIBLE
@AbapCatalog.tableCategory : #TRANSPARENT
@AbapCatalog.deliveryClass : #A
@AbapCatalog.dataMaintenance : #RESTRICTED
define table z_travel_a {
  key client      : abap.clnt not null;
  key travel_uuid : sysuuid_x16 not null;
  travel_id       : /dmo/travel_id;
  agency_id       : /dmo/agency_id;
  customer_id     : /dmo/customer_id;
  begin_date      : /dmo/begin_date;
  end_date        : /dmo/end_date;
  @Semantics.amount.currencyCode : 'z_travel_a.currency_code'
  booking_fee     : /dmo/booking_fee;
  @Semantics.amount.currencyCode : 'z_travel_a.currency_code'
  total_price     : /dmo/total_price;
  currency_code   : /dmo/currency_code;
  description     : /dmo/description;
  status          : /dmo/travel_status;
  created_by      : abp_creation_user;
  created_at      : abp_creation_tstmpl;
  last_changed_by : abp_lastchange_user;
  last_changed_at : abp_lastchange_tstmpl;
}
//highlight-end
```

## ABAP-Klasse `ZCL_TRAVEL_GENERATOR`

```abap title="ZCL_TRAVEL_GENERATOR.abap" showLineNumbers
//highlight-start
CLASS zcl_travel_generator DEFINITION PUBLIC FINAL CREATE PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_oo_adt_classrun.
ENDCLASS.

CLASS zcl_travel_generator IMPLEMENTATION.
  METHOD if_oo_adt_classrun~main.
    DATA travel  TYPE z_travel_a.
    DATA travels TYPE TABLE OF z_travel_a.

    " Delete Travels
    DELETE FROM z_travel_a.
    out->write( |Deleted Travels: { sy-dbcnt }| ).

    " Create Travel
    travel-agency_id       = '000001'.
    travel-begin_date      = '20231027'.
    travel-booking_fee     = '40.95'.
    travel-client          = sy-mandt.
    travel-created_by      = 'GENERATOR'.
    travel-currency_code   = 'EUR'.
    travel-customer_id     = '000004'.
    travel-description     = 'Kurztrip nach Hamburg'.
    travel-end_date        = '20231030'.
    travel-last_changed_by = 'GENERATOR'.
    travel-status          = 'B'.
    travel-total_price     = '650.50'.
    travel-travel_id       = '00000001'.
    travel-travel_uuid     = cl_system_uuid=>create_uuid_x16_static( ).
    GET TIME STAMP FIELD travel-created_at.
    GET TIME STAMP FIELD travel-last_changed_at.
    APPEND travel TO travels.

    " Create Travel
    travel-agency_id       = '000023'.
    travel-begin_date      = '20240707'.
    travel-booking_fee     = '150.00'.
    travel-client          = sy-mandt.
    travel-created_by      = 'GENERATOR'.
    travel-currency_code   = 'EUR'.
    travel-customer_id     = '000066'.
    travel-description     = 'Italienurlaub 2024'.
    travel-end_date        = '20240723'.
    travel-last_changed_by = 'GENERATOR'.
    travel-status          = 'P'.
    travel-total_price     = '2188.00'.
    travel-travel_id       = '00000002'.
    travel-travel_uuid     = cl_system_uuid=>create_uuid_x16_static( ).
    GET TIME STAMP FIELD travel-created_at.
    GET TIME STAMP FIELD travel-last_changed_at.
    APPEND travel TO travels.

    " Create Travel
    travel-agency_id       = '000045'.
    travel-begin_date      = '20221231'.
    travel-booking_fee     = '77.99'.
    travel-client          = sy-mandt.
    travel-created_by      = 'GENERATOR'.
    travel-currency_code   = 'USD'.
    travel-customer_id     = '000026'.
    travel-description     = 'Silvester New York'.
    travel-end_date        = '20230104'.
    travel-last_changed_by = 'GENERATOR'.
    travel-status          = 'B'.
    travel-total_price     = '389.00'.
    travel-travel_id       = '00000003'.
    travel-travel_uuid     = cl_system_uuid=>create_uuid_x16_static( ).
    GET TIME STAMP FIELD travel-created_at.
    GET TIME STAMP FIELD travel-last_changed_at.
    APPEND travel TO travels.

    " Create Travel
    travel-agency_id       = '000045'.
    travel-begin_date      = '20231101'.
    travel-booking_fee     = '0.00'.
    travel-client          = sy-mandt.
    travel-created_by      = 'GENERATOR'.
    travel-currency_code   = 'SGD'.
    travel-customer_id     = '000003'.
    travel-description     = 'Businesstrip to Singapur'.
    travel-end_date        = '20231108'.
    travel-last_changed_by = 'GENERATOR'.
    travel-status          = 'N'.
    travel-total_price     = '1290.00'.
    travel-travel_id       = '00000004'.
    travel-travel_uuid     = cl_system_uuid=>create_uuid_x16_static( ).
    GET TIME STAMP FIELD travel-created_at.
    GET TIME STAMP FIELD travel-last_changed_at.
    APPEND travel TO travels.

    " Insert Travels
    INSERT z_travel_a FROM TABLE @travels.
    out->write( |Inserted Travels: { sy-dbcnt }| ).
  ENDMETHOD.
ENDCLASS.
//highlight-end
```

## BO Base View `ZR_Travel`

```sql showLineNumbers
//highlight-start
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Travel'
define root view entity ZR_Travel
  as select from z_travel_a
{
  key travel_uuid     as TravelUuid,
      travel_id       as TravelId,
      agency_id       as AgencyId,
      customer_id     as CustomerId,
      begin_date      as BeginDate,
      end_date        as EndDate,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      booking_fee     as BookingFee,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      total_price     as TotalPrice,
      currency_code   as CurrencyCode,
      description     as Description,
      status          as Status,

      /* Administrative Data */
      created_by      as CreatedBy,
      created_at      as CreatedAt,
      last_changed_by as LastChangedBy,
      last_changed_at as LastChangedAt
}
//highlight-end
```
