---
title: Zugriffskontrollen
description: ""
sidebar_position: 100
tags: []
---

Zugriffskontrollen steuern Lesezugriffe auf Datenbankviews. Die Berechtigungsprüfung erfolgt dabei in der Regel anhand der im System hinterlegten PFCG-Rollen.

```sql showLineNumbers
@EndUserText.label: 'Role for I_Customer'
@MappingRole: true
define role I_CUSTOMER {
 grant select on I_Customer where (CountryCode) = aspect pfcg_auth(/DMO/TRVL, /DMO/CNTRY, ACTVT = '03');
}
```

:::warning

Bei Schreibzugriffen müssen klassische ABAP-Berechtigungsprüfungen durchgeführt werden.

:::
