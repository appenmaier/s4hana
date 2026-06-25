---
title: Verzweigungen
description: ""
sidebar_position: 20
tags: []
---

ABAP CDS kennen Einfachverzweigungen mit `case...when...then...end` (vergleichbar mit `CASE...WHEN...ENDCASE` in ABAP) und Mehrfachverzweigungen mit `case when...then...end` (vergleichbar mit `IF...ELSE...ENDIF` in ABAP).

```sql showLineNumbers
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Flight'
define view entity I_Flight
  as select from /dmo/flight
{
  key carrier_id    as CarrierId,
  key connection_id as ConnectionId,
  key flight_date   as FlightDate,
      price         as Price,
      currency_code as CurrencyCode,
      case currency_code
        when 'EUR' then 'Euro'
        when 'USD' then 'US Dollar'
        else currency_code
      end           as CurrencyCodeText,
      case when currency_code = 'EUR' and price < 500 then 'Low'
           when currency_code = 'EUR' and price >= 500 then 'High'
           else ''
      end           as PriceCategory
}
```
