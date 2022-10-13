---
title: ABAP-Programm ZABAP_DEMO_ABAPCDS_02
description: ""
---

```abap
REPORT zabap_demo_abapcds_01.

PARAMETERS p_carrid TYPE s_carr_id. 

DATA connections TYPE TABLE OF zabap_demo01.

SELECT FROM zabap_demo01
 FIELDS *
 WHERE carrierid = @p_carrid
 ORDER BY PRIMARY KEY
 INTO TABLE @connections.

cl_demo_output=>display( connections ).
```