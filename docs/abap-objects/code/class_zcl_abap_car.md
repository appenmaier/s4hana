
```abap
CLASS zcl_abap_car DEFINITION PUBLIC FINAL CREATE PUBLIC INHERITING FROM zcl_abap_vehicle.

  PUBLIC SECTION.
    METHODS constructor
      IMPORTING
        i_make  TYPE string
        i_model TYPE string
        i_seats TYPE i
      RAISING
        zcx_abap_initial_parameter.

    METHODS to_string REDEFINITION.

    METHODS get_seats
      RETURNING VALUE(r_seats) TYPE i.

  PROTECTED SECTION.

  PRIVATE SECTION.
    DATA seats TYPE i.

ENDCLASS.

CLASS zcl_abap_car IMPLEMENTATION.

  METHOD constructor.
    super->constructor( make = i_make model = i_model ).
    seats = i_seats.
  ENDMETHOD.

  METHOD get_seats.
    r_seats = seats.
  ENDMETHOD.

  METHOD to_string.
    r_string = |{ get_make( ) } { get_model( ) } ({ seats }-Sitzer)|.
  ENDMETHOD.
  
ENDCLASS.
```

[Klasse ZCL_ABAP_VEHICLE (v4)](vehicle/v4/zcl_abap_vehicle.md)

[Ausnahmeklasse ZCX_ABAP_INITIAL_PARAMETER](zcx_abap_initial_parameter.md)
