
```abap
CLASS zcl_abap_rental DEFINITION PUBLIC FINAL CREATE PUBLIC.

  PUBLIC SECTION.
    INTERFACES zif_abap_partner.

    METHODS constructor
      IMPORTING
        i_name TYPE string.

    METHODS add_vehicle
      IMPORTING
        i_vehicle TYPE REF TO zcl_abap_vehicle.

    METHODS to_string
      RETURNING VALUE(r_string) TYPE string.

  PROTECTED SECTION.

  PRIVATE SECTION.
    DATA name TYPE string.
    DATA vehicles TYPE TABLE OF REF TO zcl_abap_vehicle.

ENDCLASS.

CLASS zcl_abap_rental IMPLEMENTATION.

  METHOD add_vehicle.
    vehicles = VALUE #( BASE vehicles ( i_vehicle ) ).
  ENDMETHOD.

  METHOD constructor.
    name = i_name.
  ENDMETHOD.

  METHOD to_string.
    r_string = name.
    LOOP AT vehicles INTO DATA(vehicle).
      r_string = r_string && |\n{ vehicle->to_string( ) }|.
    ENDLOOP.
  ENDMETHOD.

  METHOD zif_abap_partner~to_string.
    r_string = to_string( ).
  ENDMETHOD.

ENDCLASS.
```

[Klasse ZCL_ABAP_VEHICLE (v5)](vehicle/v5/class_zcl_abap_vehicle.md)
