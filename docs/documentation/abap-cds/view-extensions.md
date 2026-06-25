---
title: View-Erweiterungen
description: ""
sidebar_position: 90
tags: []
---

Um bestehende ABAP CDS Views zu erweitern, werden View-Erweiterungen definiert. Eine ABAP CDS View lässt sich sowohl um zusätzliche Felder als auch um zusätzliche Assoziationen erweitern.

```sql showLineNumbers
@EndUserText.label: 'Carrier Extension'
extend view entity I_Carrier with
  association [0..*] to /dmo/connection as _Connections on $projection.carrier_id = _Connections.carrier_id
{
  currency_code as CurrencyCode,

  /* Associations */
  _Connections
}
```
