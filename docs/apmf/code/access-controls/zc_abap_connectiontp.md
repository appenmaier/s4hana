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

[ABAP CDS-View ZC_ABAP_ConnectionTP (v1)](../cds-views/zc_abap_connectiontp_v1.md)

[ABAP CDS-View ZC_ABAP_ConnectionTP (v2)](../cds-views/zc_abap_connectiontp_v2.md)

[ABAP CDS-View ZC_ABAP_ConnectionTP (v3)](../cds-views/zc_abap_connectiontp_v3.md)

[ABAP CDS-View ZC_ABAP_ConnectionTP (v4)](../cds-views/zc_abap_connectiontp_v4.md)

[ABAP CDS-View ZC_ABAP_ConnectionTP (v5)](../cds-views/zc_abap_connectiontp_v5.md)

[ABAP CDS-View ZC_ABAP_ConnectionTP (v6)](../cds-views/zc_abap_connectiontp_v6.md)