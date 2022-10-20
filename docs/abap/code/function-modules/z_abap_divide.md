---
title: Funktionsbaustein Z_ABAP_DIVIDE
description: 'Dividieren'
---

```abap
FUNCTION Z_ABAP_DIVIDE
  IMPORTING
    I_NUMBER_1 TYPE I
    I_NUMBER_2 TYPE I
  EXPORTING
    E_RESULT   TYPE I
  EXCEPTIONS
    DIVISION_BY_ZERO.

  IF i_number_2 IS INITIAL.
    RAISE division_by_zero.
  ENDIF.

  e_result = i_number_1 / i_number_2.

ENDFUNCTION.
```
