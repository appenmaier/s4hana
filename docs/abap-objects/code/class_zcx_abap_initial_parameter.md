---
title: Ausnahmeklasse ZCX_ABAP_INITIAL_PARAMETER
description: ""
---

```abap
CLASS zcx_abap_initial_parameter DEFINITION PUBLIC INHERITING FROM cx_static_check FINAL
 CREATE PUBLIC.

  PUBLIC SECTION.
    INTERFACES if_t100_dyn_msg.
    INTERFACES if_t100_message.

    CONSTANTS:
      BEGIN OF zcx_abap_initial_parameter,
        msgid TYPE symsgid VALUE 'ZABAP',
        msgno TYPE symsgno VALUE '000',
        attr1 TYPE scx_attrname VALUE 'PARAMETER',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF zcx_abap_initial_parameter.

    DATA parameter TYPE string.

    METHODS constructor
      IMPORTING
        !textid     LIKE if_t100_message=>t100key OPTIONAL
        !previous   LIKE previous OPTIONAL
        i_parameter TYPE string OPTIONAL.

  PROTECTED SECTION.

  PRIVATE SECTION.

ENDCLASS.

CLASS zcx_abap_initial_parameter IMPLEMENTATION.

  METHOD constructor ##ADT_SUPPRESS_GENERATION.
    CALL METHOD super->constructor
      EXPORTING
previous = previous.
    CLEAR me->textid.
    parameter = i_parameter.
    IF textid IS INITIAL.
      if_t100_message~t100key = zcx_abap_initial_parameter=>zcx_abap_initial_parameter.
    ELSE.
      if_t100_message~t100key = textid.
    ENDIF.
  ENDMETHOD.

ENDCLASS.
```

[Nachrichtenklasse ZABAP](../../abap/code/message_class_zabap.md)
