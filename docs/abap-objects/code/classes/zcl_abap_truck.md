---
title: Klasse ZCL_ABAP_TRUCK
description: 'Lastwagen'
---

```abap
CLASS zcl_abap_truck DEFINITION PUBLIC FINAL CREATE PUBLIC INHERITING FROM zcl_abap_vehicle.

  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        i_make  TYPE string
        i_model TYPE string
        i_cargo TYPE i
      RAISING
        zcx_abap_initial_parameter.

    METHODS to_string REDEFINITION.

    METHODS get_cargo
      RETURNING VALUE(r_cargo) TYPE i.

  PROTECTED SECTION.

  PRIVATE SECTION.
    DATA cargo TYPE i.

ENDCLASS.

CLASS zcl_abap_truck IMPLEMENTATION.

  METHOD constructor.
    super->constructor( make = i_make model = i_model ).
    cargo = cargo.
  ENDMETHOD.

  METHOD get_cargo.
    r_cargo = cargo.
  ENDMETHOD.

  METHOD to_string.
    r_string = |{ get_make( ) } { get_model( ) } ({ cargo }kg Frachtkapazität)|.
  ENDMETHOD.

ENDCLASS.
```

[Klasse ZCL_ABAP_VEHICLE (v4)](../classes/zcl_abap_vehicle_v4.md)

[Ausnahmeklasse ZCX_ABAP_INITIAL_PARAMETER](../classes/zcx_abap_initial_parameter.md)
