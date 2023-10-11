---
title: Aktionen implementieren
description: ""
sidebar_position: 140
---

:::danger TODO
:::

## ABAP Class BP_R_TRAVEL - Local Type LHC_R_BOOKING - Method CANCEL_BOOKING

```abap
METHOD cancel_booking.

  " Deklarationen
  DATA message TYPE REF TO zcm_travel.

  " Buchungen lesen
  READ ENTITY IN LOCAL MODE ZR_Booking
    FIELDS ( BookingId Status )
    WITH CORRESPONDING #( keys )
    RESULT DATA(bookings).

  " Buchungen sequentiell verarbeiten
  LOOP AT bookings INTO DATA(booking).

    " Fehler abfangen und Fehlermeldung erzeugen
    IF booking-Status = 'X'.
      message = NEW zcm_travel( severity = if_abap_behv_message=>severity-error
                                textid = zcm_booking=>booking_already_cancelled
                                booking_id = booking-BookingId ).
      APPEND message TO reported-%other.
      APPEND CORRESPONDING #( booking ) TO failed-zi_booking.
      CONTINUE.
    ENDIF.

   " Status ändern, Status zurückschreiben und Erfolgsmeldung erzeugen
    MODIFY ENTITY IN LOCAL MODE ZR_Booking
      UPDATE FIELDS ( status )
      WITH VALUE #( ( %tky = booking-%tky Status = 'X' ) ).

    message = NEW zcm_travel( severity = if_abap_behv_message=>severity-success
                              textid = zcm_booking=>booking_cancelled_successfully
                              booking_id = booking-BookingId ).
    APPEND message TO reported-%other.

  ENDLOOP.

ENDMETHOD.
```
