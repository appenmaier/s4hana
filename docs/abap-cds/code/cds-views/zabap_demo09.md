---
title: ABAP CDS-View ZABAP_Demo09
description: 'Parameter'
---

```sql
@AbapCatalog.sqlViewName: 'ZABAPDEMO09'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Demo 9: Parameters'
define view ZABAP_Demo09
  with parameters
    P_CarrierID    : s_carr_id,
    P_ConnectionID : s_conn_id
  as select from sflight
{
  key carrid     as Carrid,
  key connid     as Connid,
  key fldate     as Fldate,
      price      as Price,
      currency   as Currency,
      planetype  as Planetype,
      seatsmax   as Seatsmax,
      seatsocc   as Seatsocc,
      paymentsum as Paymentsum,
      seatsmax_b as SeatsmaxB,
      seatsocc_b as SeatsoccB,
      seatsmax_f as SeatsmaxF,
      seatsocc_f as SeatsoccF
}
where
      carrid = $parameters.P_CarrierID
  and connid = $parameters.P_ConnectionID
```