---
title: ZABAP_DEMO14
description: 'Berechtigungsprüfungen'
---

```sql
@EndUserText.label: 'Role for ZABAP_Demo01' 
@MappingRole: true 
define role ZABAP_DEMO14 { 
 grant select on ZABAP_Demo01 where (Carrid) = aspect pfcg_auth(S_CARRID, CARRID, ACTVT = '03'); 
}
```

[ABAP CDS View ZABAP_Demo01](../cds-views/zabap_demo01.md)