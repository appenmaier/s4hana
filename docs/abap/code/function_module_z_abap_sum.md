---
title: Funktionsbaustein Z_ABAP_SUM
description: ''
---

```abap
FUNCTION Z_ABAP_SUM
  IMPORTING
    I_NUMBER_1 TYPE I
    I_NUMBER_2 TYPE I
  EXPORTING
    E_RESULT   TYPE I
  EXCEPTIONS
    INITIAL_NUMBER_1
    INITIAL_NUMBER_2.

  IF i_number_1 IS INITIAL.
    RAISE initial_number_1.
  ENDIF.

  IF i_number_2 IS INITIAL.
    RAISE initial_number_2.
  ENDIF.

  e_result = i_number_1 + i_number_2.

ENDFUNCTION.
```
