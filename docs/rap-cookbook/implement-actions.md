---
title: 14. Aktionen implementieren
description: ""
sidebar_position: 140
---

:::danger TODO
:::

## Local Type LHC_TRAVEL (ABAP Class BP_TRAVEL)

```abap title="LHC_TRAVEL" showLineNumbers
//highlight-start
CLASS lhc_travel IMPLEMENTATION.

  METHOD get_instance_authorizations.
  ENDMETHOD.

  METHOD show_test_message.
    DATA message TYPE REF TO zcm_travel.

    "Testnachricht erzeugen
    message = NEW zcm_travel(
      textid    = zcm_travel=>test_message
      severity  = if_abap_behv_message=>severity-success
      user_name = sy-uname ).

    APPEND message TO reported-%other.
  ENDMETHOD.

  METHOD cancel_travel.
    DATA message TYPE REF TO zcm_travel.

    "Reisedaten lesen
    READ ENTITY IN LOCAL MODE ZR_Travel
      FIELDS ( Description Status )
      WITH CORRESPONDING #( keys )
      RESULT DATA(travels).

    "Reisedaten sequentiell verarbeiten
    LOOP AT travels REFERENCE INTO DATA(travel).

      "Status validieren
      IF travel->Status = 'X'.
        message = NEW zcm_travel(
          i_textid   = zcm_travel=>travel_already_cancelled
          i_severity = if_abap_behv_message=>severity-error
          i_travel   = travel->Description ).
        APPEND VALUE #( %tky = travel->%tky %msg = message ) TO reported-travel.
        APPEND VALUE #( %tky = travel->%tky ) TO failed-travel.
        CONTINUE.
      ENDIF.

      "Status ändern
      travel->Status = 'X'.

      "Erfolgsmeldung erzeugen
      message = NEW zcm_travel(
        i_textid   = zcm_travel=>travel_cancelled_successfuly
        i_severity = if_abap_behv_message=>severity-success
        i_travel   = travel->Description ).
      APPEND VALUE #( %tky = travel->%tky %msg = message ) TO reported-travel.

      "Status zurückschreiben
      MODIFY ENTITY IN LOCAL MODE ZR_Travel
        UPDATE FIELDS ( Status )
        WITH VALUE #( ( %tky = travel->%tky Status = travel->Status ) ).

    ENDLOOP.
  ENDMETHOD.

  METHOD maintain_booking_fees.
    "Reisedaten lesen
    READ ENTITY IN LOCAL MODE ZR_Travel
      FIELDS ( TravelUuid )
      WITH CORRESPONDING #( keys )
      RESULT DATA(travels).

    "Reisedaten sequentiell verarbeiten
    LOOP AT travels REFERENCE INTO DATA(travel).

      "Buchungsgebühren ändern
      travel->BookingFee = keys[ sy-tabix ]-%param-BookingFee.
      travel->CurrencyCode = keys[ sy-tabix ]-%param-CurrencyCode.

      "Buchungsgebühren zurückschreiben
      MODIFY ENTITY IN LOCAL MODE ZR_Travel
        UPDATE FIELDS ( BookingFee CurrencyCode )
        WITH VALUE #( ( %tky = travel->%tky
                        BookingFee = travel->BookingFee
                        CurrencyCode = travel->CurrencyCode ) ).

    ENDLOOP.
  ENDMETHOD.

ENDCLASS.
//highlight-end
```
