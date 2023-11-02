---
title: 14. Aktionen implementieren
description: ""
sidebar_position: 140
---

Behandlermethoden der Verhaltensimplementierung für Reisen implementieren.

## Verhaltensimplementierung ZBP_TRAVEL

### Global Class ZBP_TRAVEL

```abap title="ZBP_TRAVEL.abap" showLineNumbers
CLASS zbp_travel DEFINITION PUBLIC ABSTRACT FINAL FOR BEHAVIOR OF zr_travel.
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.

CLASS zbp__travel IMPLEMENTATION.
ENDCLASS.
```

### Local Type LHC_TRAVEL

```abap title="ZBP_TRAVEL.abap" shwoLineNumbers
CLASS lhc_travel DEFINITION INHERITING FROM cl_abap_behavior_handler.
  PRIVATE SECTION.
    METHODS get_instance_authorizations FOR INSTANCE AUTHORIZATION
      IMPORTING keys REQUEST requested_authorizations FOR Travel RESULT result.
    METHODS show_test_message FOR MODIFY
      IMPORTING keys FOR ACTION travel~show_message.
    METHODS cancel_travel FOR MODIFY
      IMPORTING keys FOR ACTION travel~cancel_travel RESULT result.
    METHODS maintain_booking_fee FOR MODIFY
      IMPORTING keys FOR ACTION travel~maintain_booking_fee RESULT result.
ENDCLASS.

CLASS lhc_travel IMPLEMENTATION.

  METHOD get_instance_authorizations.
  ENDMETHOD.

  METHOD show_test_message.
//highlight-start
    DATA message TYPE REF TO zcm_travel.

    message = NEW zcm_travel( severity  = if_abap_behv_message=>severity-success
                              textid    = zcm_travel=>test_message
                              user_name = sy-uname ).

    APPEND message TO reported-%other.
//highlight-end
  ENDMETHOD.

  METHOD cancel_travel.
//highlight-start
    DATA message TYPE REF TO zcm_travel.

    " Read Travels
    READ ENTITY IN LOCAL MODE ZR_Travel
         ALL FIELDS
         WITH CORRESPONDING #( keys )
         RESULT DATA(travels).

    " Process Travels
    LOOP AT travels REFERENCE INTO DATA(travel).

      " Validate Status and Create Error Message
      IF travel->Status = 'X'.
        message = NEW zcm_travel( textid = zcm_travel=>travel_already_cancelled
                                  travel = travel->Description ).
        APPEND VALUE #( %tky = travel->%tky
                        %msg = message ) TO reported-travel.
        APPEND VALUE #( %tky = travel->%tky ) TO failed-travel.
        CONTINUE.
      ENDIF.

      " Set Status to Cancelled and Create Success Message
      travel->Status = 'X'.
      message = NEW zcm_travel( severity = if_abap_behv_message=>severity-success
                                textid   = zcm_travel=>travel_cancelled_successfully
                                travel   = travel->Description ).
      APPEND VALUE #( %tky = travel->%tky
                      %msg = message ) TO reported-travel.
    ENDLOOP.

    " Modify Travels
    MODIFY ENTITY IN LOCAL MODE ZR_Travel
           UPDATE FIELDS ( Status )
           WITH VALUE #( FOR t IN travels
                         ( %tky = t-%tky Status = t-Status ) ).

    " Set Result
    result = VALUE #( FOR t IN travels
                      ( %tky   = t-%tky
                        %param = t ) ).
//highlight-end
  ENDMETHOD.

  METHOD maintain_booking_fee.
//highlight-start
    " Read Travels
    READ ENTITY IN LOCAL MODE ZR_Travel
         ALL FIELDS
         WITH CORRESPONDING #( keys )
         RESULT DATA(travels).

    " Process Travels
    LOOP AT travels REFERENCE INTO DATA(travel).

      " Set Booking Fee
      travel->BookingFee   = keys[ sy-tabix ]-%param-BookingFee.
      travel->CurrencyCode = keys[ sy-tabix ]-%param-CurrencyCode.

    ENDLOOP.

    " Modify Travels
    MODIFY ENTITY IN LOCAL MODE ZR_Travel
           UPDATE FIELDS ( BookingFee CurrencyCode )
           WITH VALUE #( FOR t IN travels
                         ( %tky         = travel->%tky
                           BookingFee   = travel->BookingFee
                           CurrencyCode = travel->CurrencyCode ) ).

    " Set Result
    result = VALUE #( FOR t IN travels
                      ( %tky = t-%tky %param = t ) ).
//highlight-end
  ENDMETHOD.

ENDCLASS.
```
