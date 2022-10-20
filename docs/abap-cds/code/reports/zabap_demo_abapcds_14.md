---
title: ABAP-Programm ZABAP_DEMO_ABAPCDS_14
description: 'Berechtigungsprüfungen'
---

```abap
REPORT zabap_demo_abapcds_14.

DATA connections TYPE TABLE OF zabap_demo01.

SELECT FROM zabap_demo01 FIELDS * INTO @DATA(connection).
  AUTHORITY-CHECK OBJECT 'S_CARRID'
      ID 'CARRID' FIELD connection-carrid
      ID 'ACTVT' FIELD '03'.
  IF sy-subrc <> 0.
    CONTINUE.
  ENDIF.
  
  APPEND connection TO connections.
ENDSELECT.

cl_demo_output=>display( connections ).
```

[ABAP CDS View ZABAP_Demo01](../cds-views/zabap_demo01.md)