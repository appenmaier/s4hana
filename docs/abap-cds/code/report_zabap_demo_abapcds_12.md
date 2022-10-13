---
title: ABAP-Programm ZABAP_DEMO_ABAPCDS_12
description: ""
---

```abap
REPORT zabap_demo_abapcds_12.

SELECT FROM zabap_demo12
 FIELDS carrid, connid, cityfrom, cityto, \_carrier-carrname
 INTO TABLE @DATA(connections).

cl_demo_output=>display( connections ).
```