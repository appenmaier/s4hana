---
title: ZABAP_DEMO_ABAPOO_01
description: 'Objekte und Referenzvariablen'
---

```abap
REPORT zabap_demo_abapoo_01.

"Deklarationen
DATA vehicle TYPE REF TO zcl_abap_vehicle.
DATA vehicles TYPE TABLE OF REF TO zcl_abap_vehicle.

"Objekterzeugungen
vehicle = new #( ).
vehicles = VALUE #( BASE vehicles (vehicle ) ).
vehicle->set_make( |Porsche| ).
vehicle->set_model( |911| ).

vehicle = new #( ).
vehicles = VALUE #( BASE vehicles (vehicle ) ).
vehicle->set_make( |MAN| ).
vehicle->set_model( |TGX| ).

vehicle = new #( ).
vehicles = VALUE #( BASE vehicles (vehicle ) ).
vehicle->set_make( |Opel| ).
vehicle->set_model( |Zafira Life| ).

"Ausgabe
LOOP AT vehicles INTO vehicle.
  WRITE: / vehicle->to_string( ).
ENDLOOP.
```

[Klasse ZCL_ABAP_VEHICLE (v1)](../classes/zcl_abap_vehicle_v1.md)
