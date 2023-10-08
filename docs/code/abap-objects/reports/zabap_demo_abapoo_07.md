---
title: ZABAP_DEMO_ABAPOO_07
description: 'Schnittstellen'
---

```abap
* Schnittstellen
REPORT zabap_demo_abapoo_07.

*-------------------------------------------------------------------*
* Deklarationen
*-------------------------------------------------------------------*
DATA(rental1) = NEW zcl_abap_rental( 'Sixxt' ).
DATA(rental2) = NEW zcl_abap_rental( 'Hertz' ).
DATA partners TYPE TABLE OF REF TO zif_abap_partner.

*-------------------------------------------------------------------*
* Objekterzeugungen
*-------------------------------------------------------------------*
TRY.
    rental1->add_vehicle(
     NEW zcl_abap_car( make = 'Porsche' model = '911' seats = 2 ) ).
    rental1->add_vehicle(
     NEW zcl_abap_truck( make = 'MAN' model = 'TGX' cargo = 500 ) ).
    rental1->add_vehicle(
     NEW zcl_abap_car( make = 'Opel' model = 'Zafira Life' seats = 6 ) ).
    rental2->add_vehicle(
     NEW zcl_abap_car( make = 'VW' model = 'Multivan' seats = 7 ) ).
    rental2->add_vehicle(
     NEW zcl_abap_car( make = 'Audi' model = 'A3' seats = 4 ) ).
  CATCH zcx_abap_invalid_parameter INTO DATA(x).
    MESSAGE x->get_text( ) TYPE 'E'.
ENDTRY.
partners = VALUE #( ( rental1 ) ( rental2 ) ).

*-------------------------------------------------------------------*
* Ausgabe
*-------------------------------------------------------------------*
LOOP AT partners INTO DATA(partner).
  WRITE: / partner->to_string( ).
ENDLOOP.

```

[Klasse ZCL_ABAP_VEHICLE (v5)](../classes/zcl_abap_vehicle_v5.md)

[Klasse ZCL_ABAP_CAR](../classes/zcl_abap_car.md)

[Klasse ZCL_ABAP_TRUCK](../classes/zcl_abap_truck.md)

[Ausnahmelasse ZCX_ABAP_INITIAL_PARAMETER](../classes/zcx_abap_initial_parameter.md)
