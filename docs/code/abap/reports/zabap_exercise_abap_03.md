---
title: ZABAP_EXERCISE_ABAP_03
description: 'Übungsaufgabe ABAP-03'
---

```abap
REPORT zabap_exercise_abap_03.

* Deklarationen
PARAMETERS p_op1 TYPE zabap_decimal.
PARAMETERS p_opr TYPE c LENGTH 1.
PARAMETERS p_op2 TYPE zabap_decimal.

DATA result TYPE zabap_decimal.

* Eingabeprüfungen
AT SELECTION-SCREEN ON p_opr.
  IF p_opr <> '+' AND p_opr <> '-' AND p_opr <> '*' AND p_opr <> '/' AND p_opr <> '%' AND p_opr <> '^' AND p_opr <> '2'.
    MESSAGE e003(zabap) WITH p_opr.
  ENDIF.

AT SELECTION-SCREEN ON p_op2.
  IF p_opr = '/' AND p_op2 IS INITIAL.
    MESSAGE e004(zabap).
  ENDIF.
  
  IF p_opr = '2' AND p_op2 IS NOT INITIAL.
    MESSAGE e005(zabap).
  ENDIF.

AT SELECTION-SCREEN.
  IF p_opr = '^'.
    CALL FUNCTION 'Z_ABAP_CALCULATE_POWER'
      EXPORTING
        i_base         = p_op1
        i_exponent     = p_op2
      EXCEPTIONS
        value_too_high = 1
        OTHERS         = 2.
    IF sy-subrc <> 0.
      MESSAGE e006(zabap) WITH p_op1 p_op2.
    ENDIF.
  ENDIF.

* Hauptverarbeitung
START-OF-SELECTION.
  CASE p_opr.
    WHEN '+'.
      result = p_op1 + p_op2.
    WHEN '-'.
      result = p_op1 - p_op2.
    WHEN '*'.
      result = p_op1 * p_op2.
    WHEN '/'.
      result = p_op1 / p_op2.
    WHEN '%'.
      CALL FUNCTION 'Z_ABAP_CALCULATE_PERCENTAGE'
        EXPORTING
          i_percentage       = p_op1
          i_base_value       = p_op2
        IMPORTING
          e_percentage_value = result.
    WHEN '^'.
      CALL FUNCTION 'Z_ABAP_CALCULATE_POWER'
        EXPORTING
          i_base     = p_op1
          i_exponent = p_op2
        IMPORTING
          e_result   = result.
    WHEN '2'.
      CALL FUNCTION 'Z_ABAP_CALCULATE_POWER'
        EXPORTING
          i_base   = p_op1
        IMPORTING
          e_result = result.
  ENDCASE.

  WRITE: |{ p_op1 } { p_opr } { p_op2 } = { result }|.
```