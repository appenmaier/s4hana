---
title: Zugriffskontrollen
description: ""
sidebar_position: 100
tags: []
---

Zugriffskontrollen ermöglichen die Vergabe von Lesezugriffen für Datenbankviews. Die Berechtigungsprüfung erfolgt dabei in der Regel anhand der im System festgelegeten PFCG-Rollen.

```sql showLineNumbers
@EndUserText.label: 'Role for I_Flight'
@MappingRole: true
define role I_FLIGHT {
 grant select on I_Flight where (CarrierId) = aspect pfcg_auth(/DMO/CARRIER_ID, CARRIER_ID, ACTVT = '03');
}
```

:::note Hinweis

Bei Schreibzugriffen müssen klassische ABAP-Berechtigungsprüfungen durchgeführt werden.

:::
