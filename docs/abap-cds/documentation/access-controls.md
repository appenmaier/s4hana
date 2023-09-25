---
title: Zugriffskontrollen
description: ''
sidebar_position: 90
tags: []
---

Zugriffskontrollen ermöglichen die Vergabe von Lesezugriffen für Datenbankviews. Die Berechtigungsprüfung erfolgt dabei in der Regel anhand der im System festgelegeten PFCG-Rollen.

```sql
@EndUserText.label: 'Role for Flight' 
@MappingRole: true 
define role FLIGHT { 
 grant select on Flight where (CarrierId) = aspect pfcg_auth(S_CARRID, CARRID, ACTVT = '03'); 
}
```

:::note Hinweis
Bei Schreibzugriffen müssen klassische ABAP-Berechtigungsprüfungen durchgeführt werden.
:::
