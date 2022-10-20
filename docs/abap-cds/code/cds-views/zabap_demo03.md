---
title: ABAP CDS-View ZABAP_Demo03
description: 'Annotationen'
---

```sql
@AbapCatalog.sqlViewName: 'ZABAPDEMO03'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Demo 3: Annotations'
define view ZABAP_Demo03
  as select from sflight
{
  key carrid     as Carrid,
  key connid     as Connid,
  key fldate     as Fldate,
      @Semantics.amount.currencyCode: 'Currency'
      price      as Price,
      currency   as Currency,
      planetype  as Planetype,
      seatsmax   as Seatsmax,
      seatsocc   as Seatsocc,
      @Semantics.amount.currencyCode: 'Currency'
      paymentsum as Paymentsum,
      seatsmax_b as SeatsmaxB,
      seatsocc_b as SeatsoccB,
      seatsmax_f as SeatsmaxF,
      seatsocc_f as SeatsoccF
}
// für Beträge und Währungen: @Semantics.amount.currencyCode: '<Währungsfeld>'
// für Mengen und Einheiten: @Semantics.quantity.unitOfMeasure: '<Einheitenfeld>'
```