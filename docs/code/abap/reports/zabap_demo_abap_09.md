---
title: ZABAP_DEMO_ABAP_09
description: 'Funktionsbausteine'
---

```abap
* Function Modules
REPORT zabap_demo_abap_09.

PARAMETERS p_num1 TYPE i.
PARAMETERS p_num2 TYPE i.

DATA result TYPE i.

CALL FUNCTION 'Z_ABAP_DIVIDE'
  EXPORTING
    i_number_1       = p_num1
    i_number_2       = p_num2
  IMPORTING
    e_result         = result  
  EXCEPTIONS
    division_by_zero = 1
    OTHERS           = 2.
CASE sy-subrc.
  WHEN 1.
    MESSAGE e003(zabap).
  WHEN 2.
    MESSAGE e001(zabap).
ENDCASE.

WRITE: result.
```

[Funktionsbaustein Z_ABAP_DIVIDE](../function-modules/z_abap_divide.md)

[Nachrichtenklasse ZABAP](../message-classes/zabap.md)
