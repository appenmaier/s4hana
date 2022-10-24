---
title: ZABAP_Demo13
description: 'View Erweiterungen'
---

```sql
@AbapCatalog.sqlViewAppendName: 'ZABAPDEMO13'
@EndUserText.label: 'Demo 13: View Extensions'
extend view ZABAP_Demo01 with ZABAP_Demo13
  association [0..*] to sflight as _Flights on  spfli.carrid = _Flights.carrid
                                            and spfli.connid = _Flights.connid
{
  countryfr as Countryfr,
  countryto as Countryto,
  _Bookings
}
```

[ABAP CDS-View ZABAP_Demo01](../cds-views/zabap_demo01.md)