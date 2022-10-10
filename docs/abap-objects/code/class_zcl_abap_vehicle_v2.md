---
title: Klasse ZCL_ABAP_VEHICLE (v2)
description: ""
---

```abap
CLASS zcl_abap_vehicle DEFINITION PUBLIC CREATE PUBLIC.

  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        i_make  TYPE string
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
    CLASS-DATA g_number_of_vehicles TYPE i.

ENDCLASS.

CLASS zcl_abap_vehicle IMPLEMENTATION.

  METHOD constructor.
    make = i_make.
    model = i_model.
  ENDMETHOD.

  METHOD get_make.
    r_make = make.
  ENDMETHOD.

  METHOD get_model.
    r_model = model.
  ENDMETHOD.

ENDCLASS.
```
