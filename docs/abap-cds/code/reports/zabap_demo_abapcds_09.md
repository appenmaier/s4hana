---
title: ZABAP_DEMO_ABAPCDS_09
description: 'Parameter'
---

```abap
REPORT zabap_demo_abapcds_09.

PARAMETERS p_carrid TYPE s_carr_id.
PARAMETERS p_connid TYPE s_conn_id.

DATA flights TYPE TABLE OF zabap_demo09.

SELECT FROM zabap_demo09( p_carrierid = @p_carrid, p_connectionid = @p_connid )
 FIELDS *
 INTO TABLE @flights.

cl_demo_output=>display( flights ).
```

[ABAP CDS View ZABAP_Demo09](../cds-views/zabap_demo09.md)