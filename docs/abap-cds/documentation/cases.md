---
title: Fallunterscheidungen
description: ''
sidebar_position: 30
tags: []
---

Die ABAP CDS kennen einfache Fallunterscheidungen mit `CASE...WHEN...THEN...END` (vergleichbar mit dem ABAP-Konstrukt `CASE...WHEN...ENDCASE`) sowie komplexe 
Fallunterscheidungen mit `CASE WHEN...THEN...END` (vergleichbar mit dem ABAP-Konstrukt `IF...ELSE...ENDIF`).

```sql showLineNumbers
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Flight'
define view entity Flight
  as select from /dmo/flight
{
  key carrier_id    as CarrierId,
  key connection_id as ConnectionId,
  key flight_date   as FlightDate,
      price         as Price
      currency_code as CurrencyCode
      case currency_code
        when 'EUR' then 'Euro'
        when 'USD' then 'US Dollar'
        else currency_code
      end           as CurrencyCodeText,
      case when currency_code = 'EUR' and price < 500 then 'Low'
           when currency_code = 'EUR' and price >= 500 then 'High'
           else ''
      end          as PriceCategory
}
```
