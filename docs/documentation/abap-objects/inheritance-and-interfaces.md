---
title: Vererbung und Schnittstellen
description: ""
sidebar_position: 50
tags: []
---

Bei der Modellierung von Klassen stellt man häufig fest, dass sich einige Klassen in Struktur und Verhalten ähneln. In solchen Fällen lassen sich gemeinsame Strukturen und Verhaltensweisen extrahieren und in einer allgemeineren Klasse zusammenfassen – das führt zu Spezialisierungs- bzw. Generalisierungshierarchien. Die Beziehung zwischen den spezialisierten Klassen (Unterklassen) und der allgemeineren Klasse (Oberklasse) bezeichnet man als Vererbung.

## Implementieren von Vererbung

Vererbung wird mit dem Zusatz `INHERITING FROM` realisiert. Methoden werden mit `REDEFINITION` überschrieben, auf Elemente der Oberklasse wird über den reservierten Namen `SUPER` zugegriffen.

```abap title="CL_CAR.abap" showLineNumbers
CLASS cl_car DEFINITION PUBLIC CREATE PUBLIC INHERITING FROM cl_vehicle.

  PUBLIC SECTION.
    DATA seats TYPE i READ-ONLY.

    METHODS constructor
      IMPORTING
        make  TYPE string
        model TYPE string
        seats TYPE i
      RAISING
        cx_initial_parameter.

    METHODS to_string REDEFINITION.

  PROTECTED SECTION.

  PRIVATE SECTION.

ENDCLASS.

CLASS cl_car IMPLEMENTATION.

  METHOD constructor.
    super->constructor( make = make model = model ).
    me->seats = seats.
  ENDMETHOD.

  METHOD to_string.
    string = super->to_string( ) && | { seats }|.
  ENDMETHOD.
ENDCLASS.
```

## Polymorphie

Polymorphie (griechisch: Vielgestaltigkeit) beschreibt in der Programmierung, dass eine Referenzvariable zur Laufzeit durch Typumwandlung auf Objekte unterschiedlicher Klassen zeigen kann und ein Methodenaufruf dadurch unterschiedliche Ergebnisse liefern kann. Man unterscheidet den _statischen Datentyp_ (zur Designzeit festgelegt) und den _dynamischen Datentyp_ (zur Laufzeit zugewiesen). Die Typumwandlung von der Unterklasse zur Oberklasse heißt _Upcast_, die Rückumwandlung _Downcast_. Der Downcast wird mit dem Operator `CAST` durchgeführt.

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
    DATA car TYPE REF TO cl_car.

    car = NEW cl_car( make = 'Porsche' model = '911' seats = 2 ).

    " Upcast
    vehicle = car.

    " Downcast without type check
    TRY.
      car = CAST #( vehicle ).
    CATCH cx_sy_move_cast_error INTO DATA(e).
      out->write( e->get_text( ) ).
    ENDTRY.

    " Downcast with type check
    IF vehicle IS INSTANCE OF cl_car.
      car = CAST #( vehicle ) .
    ENDIF.

  ENDMETHOD.

ENDCLASS.
```

:::tip

Zur Typprüfung beim Downcast kann der Ausdruck `IS INSTANCE OF` verwendet werden.

:::

## Abstrakte und finale Klassen und Methoden

Mit `ABSTRACT` werden abstrakte Klassen und Methoden definiert, mit `FINAL` finale Klassen und Methoden:

- Abstrakte Klassen lassen sich nicht instanziieren
- Abstrakte Methoden haben keine Implementierung und müssen von abgeleiteten Klassen implementiert werden
- Finale Klassen können nicht abgeleitet werden
- Finale Methoden können nicht überschrieben werden

## Schnittstellen

Schnittstellen (Interfaces) sind im Prinzip abstrakte Klassen, die ausschließlich abstrakte Methoden enthalten. Sie stellen sicher, dass Klassen bestimmte Methoden bereitstellen und miteinander kommunizieren können. Schnittstellen werden mit `INTERFACE` definiert, in der implementierenden Klasse mit `INTERFACES` bekanntgegeben und können wie Klassen abgeleitet werden.

```abap title="IF_PARTNER.abap" showLineNumbers
INTERFACE if_partner.

  METHODS to_string.

ENDINTERFACE.
```

```abap title="CL_RENTAL.abap" showLineNumbers
CLASS cl_rental DEFINITION PUBLIC CREATE PUBLIC.

  PUBLIC SECTION.
    INTERFACES if_partner.

    DATA vehicles TYPE TABLE OF cl_vehicle READ-ONLY.

    METHODS add_vehicle
      IMPORTING
        vehicle TYPE REF TO cl_vehicle.

  PROTECTED SECTION.

  PRIVATE SECTION.

ENDCLASS.

CLASS cl_rental IMPLEMENTATION.

  METHOD add_vehicle.
    APPEND vehicle TO vehicles.
  ENDMETHOD.

  METHOD if_partner~to_string.
    LOOP AT vehicles INTO DATA(vehicle).
      string &&= vehicle->to_string( ).
    ENDLOOP.
  ENDMETHOD.

ENDCLASS.
```
