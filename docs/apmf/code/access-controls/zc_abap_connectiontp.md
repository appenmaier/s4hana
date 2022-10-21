---
title: ZC_ABAP_CONNECTIONTP
description: 'Flugverbindung'
---

```sql
@EndUserText.label: 'Connection'
@MappingRole: true
define role ZC_ABAP_CONNECTIONTP {
  grant select on ZC_ABAP_ConnectionTP
    where (CarrierID) = aspect pfcg_auth(S_CARRID, CARRID, ACTVT = '03');                    
}
```