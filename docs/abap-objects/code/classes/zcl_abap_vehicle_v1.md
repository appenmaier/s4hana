---
title: Klasse ZCL_ABAP_VEHICLE (v1)
description: 'Fahrzeug v1'
---

```abap
CLASS zcl_abap_vehicle DEFINITION PUBLIC CREATE PUBLIC.

  PUBLIC SECTION.
    METHODS set_make
      IMPORTING
        i_make TYPE string.

    METHODS set_model
      IMPORTING
        i_model TYPE string.

    METHODS get_make
      RETURNING VALUE(r_make) TYPE string.

    METHODS get_model
      RETURNING VALUE(r_model) TYPE string.

    METHODS to_string
      RETURNING VALUE(r_string) TYPE string.

  PROTECTED SECTION.

  PRIVATE SECTION.
    DATA make TYPE string.
    DATA model TYPE string.

ENDCLASS.

CLASS zcl_abap_vehicle IMPLEMENTATION.

  METHOD set_make.
    make = i_make.
  ENDMETHOD.

  METHOD set_model.
    model = i_model.
  ENDMETHOD.

  METHOD get_make.
    r_make = make.
  ENDMETHOD.

  METHOD get_model.
    r_model = model.
  ENDMETHOD.

  METHOD to_string.
    r_string = |{ make } { model }|.
  ENDMETHOD.

ENDCLASS.
```
