---
title: Zugriffskontrolle ZABAP_DEMO01
description: ""
---

```sql
@EndUserText.label: 'Role for ZABAP_Demo01' 
@MappingRole: true 
define role ZABAP_DEMO01 { 
 grant select on ZABAP_Demo01 where (Carrid) = aspect pfcg_auth(S_CARRID, CARRID, ACTVT = '03'); 
}
```