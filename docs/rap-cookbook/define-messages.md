---
title: 12. Nachrichten festlegen
description: ""
sidebar_position: 120
---

:::danger TODO
:::

## Message Class ZTRAVEL

| Nachrichtennummer | Nachricht                            |
| ----------------- | ------------------------------------ |
| 000               | This is a Test Message from &1       |
| 001               | Travel &1 is already cancelled       |
| 002               | Travel &1 was successfully cancelled |

## ABAP Class ZCM_TRAVEL

```abap title="ZCM_TRAVEL" showLineNumbers
//highlight-start
CLASS zcm_travel DEFINITION PUBLIC
  INHERITING FROM cx_static_check FINAL CREATE PUBLIC.

  PUBLIC SECTION.

    "Interfaces
    INTERFACES if_abap_behv_message.
    INTERFACES if_t100_message.
    INTERFACES if_t100_dyn_msg.

    "Message Constants
    CONSTANTS:
      BEGIN OF test_message,
        msgid TYPE symsgid VALUE 'ZTRAVEL',
        msgno TYPE symsgno VALUE '000',
        attr1 TYPE scx_attrname VALUE 'USER_NAME',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF test_message.

    CONSTANTS:
      BEGIN OF travel_already_cancelled,
        msgid TYPE symsgid VALUE 'ZTRAVEL',
        msgno TYPE symsgno VALUE '001',
        attr1 TYPE scx_attrname VALUE 'TRAVEL',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF travel_already_cancelled.

    CONSTANTS:
      BEGIN OF travel_cancelled_successfully,
        msgid TYPE symsgid VALUE 'ZTRAVEL',
        msgno TYPE symsgno VALUE '002',
        attr1 TYPE scx_attrname VALUE 'TRAVEL',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF travel_cancelled_successfully.

    "Attributs
    DATA user_name TYPE syuname.
    DATA travel TYPE /dmo/description.

    "Constructor
    METHODS constructor
      IMPORTING
        severity  TYPE if_abap_behv_message=>t_severity DEFAULT if_abap_behv_message=>severity-error
        textid    LIKE if_t100_message=>t100key DEFAULT if_t100_message=>default_textid
        previous  LIKE previous OPTIONAL
        user_name TYPE syuname OPTIONAL
        travel    TYPE /dmo/description OPTIONAL.

  PROTECTED SECTION.

  PRIVATE SECTION.

ENDCLASS.

CLASS zcm_travel IMPLEMENTATION.

  METHOD constructor ##ADT_SUPPRESS_GENERATION.
    super->constructor( previous = previous ).

    if_t100_message~t100key = textid.
    me->if_abap_behv_message~m_severity = severity.
    me->user_name = user_name.
    me->travel = travel.
  ENDMETHOD.

ENDCLASS.
//highlight-end
```
