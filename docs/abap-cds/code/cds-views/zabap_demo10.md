---
title: ZABAP_Demo10
description: 'Systemfelder'
---

```sql
@AbapCatalog.sqlViewName: 'ZABAPDEMO10'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Demo 10: Environment System Fields'
define view ZABAP_Demo10
  with parameters
    P_CarrierID    : s_carr_id,
    P_ConnectionID : s_conn_id,
    @Environment.systemField: #SYSTEM_DATE
    P_Deadline     : abap.dats
  as select from ZI_ABAP_Demo09(
                 P_CarrierID: $parameters.P_CarrierID,
                 P_ConnectionID: $parameters.P_ConnectionID )
{
  key Carrid,
  key Connid,
  key Fldate,
      Price,
      Currency,
      Planetype,
      Seatsmax,
      Seatsocc,
      Paymentsum,
      SeatsmaxB,
      SeatsoccB,
      SeatsmaxF,
      SeatsoccF
}
where
  Fldate > $parameters.P_Deadline
```

[ABAP CDS-View ZABAP_Demo10](../cds-views/zabap_demo10.md)