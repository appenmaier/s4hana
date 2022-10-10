---
title: 'ABAP-Program ZABAP_DEMO_ABAPOO_05'
description: 'Upcast und Polymorphie'
---

```abap
REPORT zabap_demo_abapoo_05.

"Deklarationen
DATA vehicle TYPE REF TO zcl_abap_vehicle.
DATA car TYPE REF TO zcl_abap_car.
DATA truck TYPE REF TO zcl_abap_truck.
DATA vehicles TYPE TABLE OF REF TO zcl_abap_vehicle.

"Objekterzeugungen
WRITE: / zcl_abap_vehicle=>get_number_of_vehicles( ).

TRY.
    car = new zcl_abap_car( make = |Porsche| model = |911| seats = 2 ).
  CATCH zcx_abap_initial_parameter INTO DATA(x).
    MESSAGE x->get_text( ) TYPE 'E'.
ENDTRY. 
vehicles = VALUE #( BASE vehicles ( car ) ). "Upcast

TRY.
    truck = new zcl_abap_truck( make = |MAN| model = |TGX| cargo = 500 ).
  CATCH zcx_abap_initial_parameter INTO x.
    MESSAGE x->get_text( ) TYPE 'E'.
ENDTRY. 
vehicles = VALUE #( BASE vehicles ( truck ) ). "Upcast

TRY.
    car = new zcl_abap_car( make = |Opel| model = |Zafira Life| seats = 6 ).
  CATCH zcx_abap_initial_parameter INTO x.
    MESSAGE x->get_text( ) TYPE 'E'.
ENDTRY. 
vehicles = VALUE #( BASE vehicles ( car ) ). "Upcast

WRITE: / zcl_abap_vehicle=>get_number_of_vehicles( ).

"Ausgabe
LOOP AT vehicles INTO vehicle. "Polymorphie
  WRITE: / vehicle->to_string( ).
ENDLOOP.
```

[Klasse ZCL_ABAP_VEHICLE (v4)](class_zcl_abap_vehicle_v4.md)

[Klasse ZCL_ABAP_CAR](class_zcl_abap_car.md)

[Klasse ZCL_ABAP_TRUCK](class_zcl_abap_truck.md)

[Ausnahmelasse ZCX_ABAP_INITIAL_PARAMETER](class_zcx_abap_initial_parameter.md)
