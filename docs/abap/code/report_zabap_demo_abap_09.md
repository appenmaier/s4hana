---
title: ABAP-Programm ZABAP_DEMO_ABAP_09
description: 'Funktionsbausteine'
sidebar_position: 90
---

```abap
REPORT zabap_demo_abap_09.

PARAMETERS p_num1 TYPE i.
PARAMETERS p_num2 TYPE i.

DATA result TYPE i.

CALL FUNCTION 'Z_ABAP_SUM'
  EXPORTING
    i_number_1       = p_num1
    i_number_2       = p_num2
  IMPORTING
    e_result         = result  
  EXCEPTIONS
    initial_number_1 = 1
    initial_number_2 = 2
    OTHERS           = 3.
CASE sy-subrc.
  WHEN 1.
    MESSAGE e000(zabap) WITH 'Number 1'.
  WHEN 2.
    MESSAGE e000(zabap) WITH 'Number 2'.
  WHEN 3.
    MESSAGE e001(zabap).
ENDCASE.

WRITE: result.
```

[Funktionsbaustein Z_ABAP_SUM](module_z_abap_sum.md)

[Nachrichtenklasse ZABAP](message_class_zabap.md)
