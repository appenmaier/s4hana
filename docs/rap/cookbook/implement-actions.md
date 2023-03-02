---
title: Aktionen implementieren
description: ''
sidebar_position: 130
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
CLASS zcm_travel DEFINITION
  PUBLIC
  INHERITING FROM cx_static_check
  FINAL
  CREATE PUBLIC .

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

## ABAP Class BP_I_TRAVEL - Local Type LHC_I_BOOKING - Method CANCEL_BOOKING
```abap
METHOD cancel_booking.

  " Deklarationen
  DATA message TYPE REF TO zcm_travel.

  " Buchungen lesen
  READ ENTITY IN LOCAL MODE ZI_Booking
    FIELDS ( BookingId Status )
    WITH CORRESPONDING #( keys )
    RESULT DATA(bookings).

  " Buchungen sequentiell verarbeiten
  LOOP AT bookings INTO DATA(booking).

    " Fehler abfangen und Fehlermeldung erzeugen
    IF booking-Status = 'X'.
      message = NEW zcm_travel( severity = if_abap_behv_message=>severity-error
                                textid = zcm_dap_booking=>booking_already_cancelled
                                booking_id = booking-BookingId ).
      APPEND message TO reported-%other.
      APPEND CORRESPONDING #( booking ) TO failed-zi_booking.
      CONTINUE.
    ENDIF.

   " Status ändern, Status zurückschreiben und Erfolgsmeldung erzeugen
    MODIFY ENTITY IN LOCAL MODE ZI_Booking
      UPDATE FIELDS ( status )
      WITH VALUE #( ( %tky = booking-%tky Status = 'X' ) ).

    message = NEW zcm_travel( severity = if_abap_behv_message=>severity-success
                              textid = zcm_dap_booking=>booking_cancelled_successfully
                              booking_id = booking-BookingId ).
    APPEND message TO reported-%other.
      
  ENDLOOP.

ENDMETHOD.
```
