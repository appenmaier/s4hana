---
title: ZABAP_DEMO_ABAPOO_02
description: 'Konstruktoren'
---

```abap
* Konstruktoren
REPORT zabap_demo_abapoo_02.

*-------------------------------------------------------------------*
* Deklarationen
*-------------------------------------------------------------------*
DATA vehicle TYPE REF TO zcl_abap_vehicle.
DATA vehicles TYPE TABLE OF REF TO zcl_abap_vehicle.

*-------------------------------------------------------------------*
* Objekterzeugungen
*-------------------------------------------------------------------*
WRITE: / zcl_abap_vehicle=>get_number_of_vehicles( ).

vehicle = new zcl_abap_vehicle( make = 'Porsche' model = '911' ).
vehicles = VALUE #( BASE vehicles (vehicle ) ).

vehicle = new zcl_abap_vehicle ( make = 'MAN' model = 'TGX' ).
vehicles = VALUE #( BASE vehicles (vehicle ) ).

vehicle = new zcl_abap_vehicle ( make = 'Opel' model = 'Zafira Life' ).
vehicles = VALUE #( BASE vehicles (vehicle ) ).

*-------------------------------------------------------------------*
* Ausgabe
*-------------------------------------------------------------------*
LOOP AT vehicles INTO vehicle.
  WRITE: / vehicle->to_string( ).
ENDLOOP.
```

[Klasse ZCL_ABAP_VEHICLE (v2)](../classes/zcl_abap_vehicle_v2.md)
