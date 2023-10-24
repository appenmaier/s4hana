---
title: View-Erweiterungen
description: ""
sidebar_position: 90
tags: []
---

Um bestehende ABAP CDS Views zu erweitern, können View-Erweiterungen definiert werden. ABAP CDS Views können dabei sowohl um zusätzliche Felder als auch um zusätzliche Assoziationen erweitert werden.

```sql showLineNumbers
@EndUserText.label: 'Carrier Extension'
extend view I_Carrier with E_Carrier
  association [0..*] to /dmo/connection as _Connections on $projection.carrier_id = _Connections.carrier_id
{
  currency_code as CurrencyCode,

  /* Associations */
  _Connections
}
```
