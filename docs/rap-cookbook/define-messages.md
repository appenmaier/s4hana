---
title: 12. Nachrichten festlegen
description: ""
sidebar_position: 120
---

:::danger TODO
:::

## Message Class Z_TRAVEL

| Nachrichtennummer | Nachricht                                 |
| ----------------- | ----------------------------------------- |
| 000               | Booking with ID &1 is already cancelled   |
| 001               | Booking with ID &1 successfully cancelled |

## ABAP Class ZCM_TRAVEL

```abap
CLASS zcm_travel DEFINITION PUBLIC
  INHERITING FROM cx_static_check FINAL CREATE PUBLIC.

  PUBLIC SECTION.

    "Interfaces
    INTERFACES if_abap_behv_message.
    INTERFACES if_t100_message.
    INTERFACES if_t100_dyn_msg.

    "Message Constants
    CONSTANTS:
      BEGIN OF booking_already_cancelled,
        msgid TYPE symsgid VALUE 'Z_TRAVEL',
        msgno TYPE symsgno VALUE '000',
        attr1 TYPE scx_attrname VALUE 'BOOKING_ID',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF booking_already_cancelled.

    CONSTANTS:
      BEGIN OF booking_cancelled_successfully,
        msgid TYPE symsgid VALUE 'Z_TRAVEL',
        msgno TYPE symsgno VALUE '001',
        attr1 TYPE scx_attrname VALUE 'BOOKING_ID',
        attr2 TYPE scx_attrname VALUE '',
        attr3 TYPE scx_attrname VALUE '',
        attr4 TYPE scx_attrname VALUE '',
      END OF booking_cancelled.

    "Attributs
    DATA booking_id TYPE /dmo/booking_id.

    "Constructor
    METHODS constructor
      IMPORTING
        severity   TYPE if_abap_behv_message=>t_severity DEFAULT if_abap_behv_message=>severity-error
        textid     LIKE if_t100_message=>t100key DEFAULT if_t100_message=>default_textid
        previous   LIKE previous OPTIONAL
        booking_id TYPE /dmo/booking_id OPTIONAL.

  PROTECTED SECTION.

  PRIVATE SECTION.

ENDCLASS.

CLASS zcm_travel IMPLEMENTATION.

  METHOD constructor ##ADT_SUPPRESS_GENERATION.
    super->constructor( previous = previous ).

    if_t100_message~t100key = textid.
    me->if_abap_behv_message~m_severity = severity.
    me->booking_id = booking_id.
  ENDMETHOD.

ENDCLASS.
```
