---
title: ZABAP_DEMO_ABAPCDS_10
description: 'Systemfelder und Sitzungsvariablen'
---

```abap
REPORT zabap_demo_abapcds_10.

PARAMETERS p_carrid TYPE s_carr_id.
PARAMETERS p_connid TYPE s_conn_id.

DATA flights TYPE TABLE OF zabap_demo10.

SELECT FROM zabap_demo10( p_carrierid = @p_carrid, p_connectionid = @p_connid )
 FIELDS *
 INTO TABLE @flights.

cl_demo_output=>display( flights ).
```

[ABAP CDS-View ZABAP_Demo10](../cds-views/zabap_demo10.md)