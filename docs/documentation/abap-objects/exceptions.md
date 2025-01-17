---
title: Klassenbasierte Ausnahmen
description: ""
sidebar_position: 40
tags: []
---

Im klassenbasierten Ausnahmenkonzept werden Ausnahmen als Ausnahmeobjekte repräsentiert und mit der Anweisung `RAISE EXCEPTION TYPE` ausgelöst, das Propagieren einer Ausnahme erfolgt über den Zusatz `RAISING`.

```abap title="CL_VEHICLE.abap" showLineNumbers
CLASS cl_vehicle DEFINITION PUBLIC CREATE PUBLIC.

  PUBLIC SECTION.
    DATA make  TYPE string READ-ONLY.
    DATA model TYPE string READ-ONLY.
    CLASS-DATA number_of_vehicles TYPE i READ-ONLY.

    METHODS constructor
      IMPORTING
        make  TYPE string
        model TYPE string
      RAISING
        cx_initial_parameter.

    METHODS to_string
      RETURNING VALUE(string) TYPE string.

  PROTECTED SECTION.

  PRIVATE SECTION.

ENDCLASS.
 
CLASS cl_vehicle IMPLEMENTATION.

  METHOD constructor.
    IF make IS INITIAL.
      RAISE EXCEPTION TYPE cx_initial_parameter EXPORTING parameter = 'MAKE'.
    ENDIF.

    IF model IS INITIAL.
      RAISE EXCEPTION TYPE cx_initial_parameter EXPORTING parameter = 'MODEL'.
    ENDIF

    me->make = make.
    me->model = model.

    number_of_vehicles += 1.
  ENDMETHOD.

  METHOD to_string.
    string = |{ make } { model }|.
  ENDMETHOD.

ENDCLASS.
```

:::tip Hinweis

Mit dem Zusatz `EXPORTING` können dem Ausnahmenobjekt Zusatzinformationen mitgegeben werden.

:::

Mit der Anweisung `TRY...CATCH...ENDTRY` können klassenbasierte Ausnahmen abgefangen und behandelt werden.

```abap title="CL_MAIN.abap" showLineNumbers
CLASS cl_main DEFINITION PUBLIC FINAL CREATE PUBLIC.
  PUBLIC SECTION.
    INTERFACES if_oo_adt_classrun.
  PROTECTED SECTION.
  PRIVATE SECTION.
ENDCLASS.

CLASS cl_main IMPLEMENTATION.
 
  METHOD if_oo_adt_classrun~main.

    DATA vehicle TYPE REF TO cl_vehicle.
    DATA vehicles TYPE TABLE OF REF TO cl_vehicle.
 
    TRY.
        vehicle = NEW cl_vehicle( make = 'Porsche' model = '911' ).
        vehicles = VALUE #( BASE vehicles ( vehicle ) ).
      CATCH cx_initial_parameter INTO DATA(e).
        out->write( e->get_text(  ) ).
    ENDTRY.

  ENDMETHOD.
 
ENDCLASS.
```
