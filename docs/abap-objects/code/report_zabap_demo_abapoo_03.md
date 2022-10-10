---
title: 'ABAP-Program ZABAP_DEMO_ABAPOO_03'
description: 'Statische Attribute und Methoden'
---

```abap
REPORT zabap_demo_abapoo_03.

"Deklarationen
DATA vehicle TYPE REF TO zcl_abap_vehicle.
DATA vehicles TYPE TABLE OF REF TO zcl_abap_vehicle.

"Objekterzeugungen
WRITE: / zcl_abap_vehicle=>get_number_of_vehicles( ).

vehicle = new zcl_abap_vehicle( make = |Porsche| model = |911| ).
vehicles = VALUE #( BASE vehicles (vehicle ) ).

vehicle = new zcl_abap_vehicle ( make = |MAN| model = |TGX| ).
vehicles = VALUE #( BASE vehicles (vehicle ) ).

vehicle = new zcl_abap_vehicle ( make = |Opel| model = |Zafira Life| ).
vehicles = VALUE #( BASE vehicles (vehicle ) ).

WRITE: / zcl_abap_vehicle=>get_number_of_vehicles( ).

"Ausgabe
LOOP AT vehicles INTO vehicle.
  WRITE: / vehicle->to_string( ).
ENDLOOP.
```

[Klasse ZCL_ABAP_VEHICLE (v3)](class_zcl_abap_vehicle_v3.md)
