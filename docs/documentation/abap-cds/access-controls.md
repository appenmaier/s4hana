---
title: Zugriffskontrollen
description: ""
sidebar_position: 100
tags: []
---

Zugriffskontrollen ermöglichen die Vergabe von Lesezugriffen für Datenbankviews. Die Berechtigungsprüfung erfolgt dabei in der Regel anhand der im System festgelegeten PFCG-Rollen.

```sql showLineNumbers
@EndUserText.label: 'Role for I_Customer'
@MappingRole: true
define role I_CUSTOMER {
 grant select on I_Customer where (CountryCode) = aspect pfcg_auth(/DMO/TRVL, /DMO/CNTRY, ACTVT = '03');
}
```

:::tip Hinweis

Bei Schreibzugriffen müssen klassische ABAP-Berechtigungsprüfungen durchgeführt werden.

:::
