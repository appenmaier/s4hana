---
title: ZABAP_DEMO_ABAPOO_04
description: 'Klassenbasierte Ausnahmen'
---

```abap
REPORT zabap_demo_abapoo_04.

"Deklarationen
DATA vehicle TYPE REF TO zcl_abap_vehicle.
DATA vehicles TYPE TABLE OF REF TO zcl_abap_vehicle.

"Objekterzeugungen
WRITE: / zcl_abap_vehicle=>get_number_of_vehicles( ).

TRY.
    vehicle = new zcl_abap_vehicle( make = |Porsche| model = |911| ).
  CATCH zcx_abap_initial_parameter INTO DATA(x).
    MESSAGE x->get_text( ) TYPE 'E'.
ENDTRY. 
vehicles = VALUE #( BASE vehicles (vehicle ) ).

TRY.
    vehicle = new zcl_abap_vehicle ( make = |MAN| model = |TGX| ).
  CATCH zcx_abap_initial_parameter INTO x.
    MESSAGE x->get_text( ) TYPE 'E'.
ENDTRY. 
vehicles = VALUE #( BASE vehicles (vehicle ) ).

TRY.
    vehicle = new zcl_abap_vehicle ( make = |Opel| model = |Zafira Life| ).
  CATCH zcx_abap_initial_parameter INTO x.
    MESSAGE x->get_text( ) TYPE 'E'.
ENDTRY. 
vehicles = VALUE #( BASE vehicles (vehicle ) ).

WRITE: / zcl_abap_vehicle=>get_number_of_vehicles( ).

"Ausgabe
LOOP AT vehicles INTO vehicle.
  WRITE: / vehicle->to_string( ).
ENDLOOP.
```

[Klasse ZCL_ABAP_VEHICLE (v4)](../classes/zcl_abap_vehicle_v4.md)

[Ausnahmeklasse ZCX_ABAP_INITIAL_PARAMETER](../classes/zcx_abap_initial_parameter.md)
