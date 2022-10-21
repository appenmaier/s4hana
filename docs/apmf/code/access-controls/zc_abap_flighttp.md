---
title: ZC_ABAP_FLIGHTTP
description: 'Flug'
---

```sql
@EndUserText.label: 'Flight'
@MappingRole: true
define role ZC_ABAP_FLIGHTTP {
  grant select on ZC_ABAP_FligthTP
    where (CarrierID) = aspect pfcg_auth(S_CARRID, CARRID, ACTVT = '03');                    
}
```