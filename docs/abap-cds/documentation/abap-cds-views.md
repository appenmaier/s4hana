---
title: ABAP CDS Views
description: ''
sidebar_position: 20
tags: []
---

Unter einer Datenbankview versteht man eine Sicht auf verschiedene Daten einer Datenbank. ABAP CDS Views verwenden die ABAP CDS um semantisch reiche Datenmodell zu definieren.

Die Grundlegende Syntax einer ABAP CDS Views umfasst die Angabe der Datenquelle(n), die Angabe der zu selektierenden Felder (_Projektion_) sowie die Angabe einiger Annotationen (_Metadaten_). Zusätzlich können durch die Angabe einer where-Bedinungen die zu selektierenden Einträge festgelegt werden (_Selektion_).

```sql
@AbapCatalog.sqlViewName: 'ABAPCDSVIEW'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'ABAP CDS View'
define view AbapCdsView
  as select from spfli   as Connection
    inner join   sflight as Flight  on  Connection.carrid = Flight.carrid
                                    and Connection.connid = Flight.connid
    inner join   scarr   as Carrier on Connection.carrid = Carrier.carrid
{
  key Carrier.carrid    as CarrierCarrierID,
  key Flight.carrid     as FlightCarrierID,
  key Connection.carrid as ConnectionCarrierID,
  key Flight.connid     as FlightConnectionID,
  key Connection.connid as ConnectionConnectionID,
  key Flight.fldate     as FlightDate,
      carrname          as CarrierName,
      cityfrom          as DepartureCity,
      cityto            as ArrivalCity
}
where
  fltype <> 'X' // Charterflüge ausblenden
```

:::note Hinweis
Die ABAP CDS unterstützen sowohl Inner Joins als auch Left Outer Joins und Right Outer Joins; Full Outer Joins nur indirekt durch die Anweisung `union`.
:::

:::note Hinweis
Der Name der ABAP CDS View kann maximal 30 Zeichen umfassen.
:::

:::note Hinweis
Die Angabe der Annotation `@AbapCatalog.sqlViewName` ist verpflichtend. Der Name der anzugebenden SQL View kann maximal 16 Zeichen umfassen und muss sich vom Namen
der ABAP CDS View unterscheiden.
:::
