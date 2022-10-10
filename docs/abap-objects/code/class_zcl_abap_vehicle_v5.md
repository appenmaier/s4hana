---
title: Klasse ZCL_ABAP_VEHICLE (v5)
description: ""
---

```abap
CLASS zcl_abap_vehicle DEFINITION PUBLIC ABSTRACT CREATE PUBLIC.

  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        i_make  TYPE string
        i_model TYPE string
      RAISING
        zcx_abap_initial_parameter.

    METHODS get_make FINAL
      RETURNING VALUE(r_make) TYPE string.

    METHODS get_model FINAL
      RETURNING VALUE(r_model) TYPE string.

    METHODS to_string ABSTRACT
      RETURNING VALUE(r_string) TYPE string.

    CLASS-METHODS get_number_of_vehicles
      RETURNING VALUE(r_number_of_vehicles) TYPE i.

  PROTECTED SECTION.

  PRIVATE SECTION.
    DATA make TYPE string.
    DATA model TYPE string.
    CLASS-DATA g_number_of_vehicles TYPE i.

ENDCLASS.

CLASS zcl_abap_vehicle IMPLEMENTATION.

  METHOD constructor.
    IF i_make IS INITIAL.
      RAISE EXCPETION TYPE zcx_abap_initial_parameter EXPORTING i_parameter = 'I_MAKE'.
    ENDIF.
    
    IF i_model IS INITIAL.
      RAISE EXCPETION TYPE zcx_abap_initial_parameter EXPORTING i_parameter = 'I_MODEL'.
    ENDIF.

    make = i_make.
    model = i_model.
    g_number_of_vehicles += 1.
  ENDMETHOD.

  METHOD get_make.
    r_make = make.
  ENDMETHOD.

  METHOD get_model.
    r_model = model.
  ENDMETHOD.

  METHOD get_number_of_vehicles.
    r_number_of_vehicles = g_number_of_vehicles.
  ENDMETHOD.

ENDCLASS.
```

[Ausnahmeklasse ZCX_ABAP_INITIAL_PARAMETER](class_zcx_abap_initial_parameter.md)
